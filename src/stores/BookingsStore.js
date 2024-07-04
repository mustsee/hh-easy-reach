import { defineStore } from 'pinia'
import { functionBaseURL } from './../firebase/setup'
import { useDateStore } from './DateStore'
import { useMessagesStore } from './MessagesStore'
import { useArrivalsOptionsStore } from './ArrivalsOptionsStore'
import { toast } from 'vue3-toastify'

import { queryByCollection, set } from '../firebase/firestore'

const dateStore = useDateStore()
const messagesStore = useMessagesStore()
const ArrivalsOptionsStore = useArrivalsOptionsStore()

export const useBookingsStore = defineStore('bookings', {
  state: () => ({
    bookings: null,
    isSendingMail: false,
    isLoadingData: false,
    isWritingData: false
  }),
  getters: {
    getBookings(state) {
      if (state.bookings) {
        return state.bookings[dateStore.apiDate]
      }
      return null
    },
    getNumberOfGuests() {
      if (this.getBookings) return this.getBookings.length
      return 0
    },
    filteredBookings() {
      const typeFilter = ArrivalsOptionsStore.currentTypeFilter
      const statusFilter = ArrivalsOptionsStore.currentStatus
      let res = this.getBookings
      if (typeFilter !== 'all') res = res.filter((booking) => booking.type === typeFilter)
      if (statusFilter !== 'all') {
        if (statusFilter === 'todo') {
          res = res.filter(
            (booking) => booking.status === 'todo' || booking.status === 'inProgress'
          )
        } else {
          res = res.filter((booking) => booking.status === statusFilter)
        }
      }
      // if (statusFilter !== 'all') res = res.filter((booking) => booking.status === statusFilter)
      return res
    }
  },
  actions: {
    setCustomMessage(bookId, messageType) {
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        if (booking.bookId === bookId) {
          booking.custom = true
          booking.messageType = `custom-${messageType}`
          const message = messagesStore.customMessages.find(
            (message) => message.messageType === messageType
          )
          const { text, variables } = message
          const senderName = ArrivalsOptionsStore.currentSender
            ? ArrivalsOptionsStore.currentSender
            : '--senderName--'
          let modifiedText = JSON.parse(text)
          for (const variable of variables) {
            let replaceBy = booking[variable]
              ? booking[variable]
              : variable === 'senderName'
              ? senderName
              : `--${variable}--`
            modifiedText = modifiedText.replace(`--${variable}--`, replaceBy)
          }
          booking.text = modifiedText
        }
        return booking
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
    },
    setMessage(bookId, messageType) {
      /* Modify : messageType, type, text */
      /* Put these informations to firestore to get in sync */
      let bookingText = ''
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        if (booking.bookId === bookId) {
          booking.messageType = messageType
          booking.custom = false
          if (messageType === 'emailMessage') {
            booking.type = 'email'
          } else {
            booking.type = 'whatsapp'
          }
          const message = messagesStore.messages.find(
            (message) => message.messageType === messageType
          )
          const { text, variables } = message
          const senderName = ArrivalsOptionsStore.currentSender
            ? ArrivalsOptionsStore.currentSender
            : '--senderName--'
          let modifiedText = text
          for (const variable of variables) {
            let replaceBy = booking[variable]
              ? booking[variable]
              : variable === 'senderName'
              ? senderName
              : `--${variable}--`
            modifiedText = modifiedText.replace(`--${variable}--`, replaceBy)
          }
          booking.text = modifiedText
          // Set text without sender name !! // Like we have in Firestore
          bookingText = this.replaceVariablesInText(booking, message)
        }
        return booking
      })
      // Keep in sync store and firebase, if not, bugs when cancel actions, etc...
      // Surely can do better
      set(`guests/${dateStore.apiDate}/bookings/${bookId}`, {
        messageType,
        type: messageType === 'emailMessage' ? 'email' : 'whatsapp',
        text: bookingText
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
    },
    setCurrentText(bookId, text) {
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        if (booking.bookId === bookId) {
          booking.text = text
        }
        return booking
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
    },
    setSenderName(senderName) {
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        const lastSenderName = ArrivalsOptionsStore.lastSender
        const { text } = booking
        let hasSenderNameKey = text.search('--senderName--')
        let updatedText
        if (hasSenderNameKey !== -1) {
          updatedText = text.replace('--senderName--', senderName)
        } else {
          updatedText = text.replace(lastSenderName, senderName)
        }
        booking.text = updatedText
        return booking
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
      ArrivalsOptionsStore.setLastSender(senderName)
    },
    // helper function
    replaceVariablesInText(booking, message) {
      const { text, variables } = message
      let modifiedText = text
      for (const variable of variables) {
        let replaceBy = booking[variable] ? booking[variable] : `--${variable}--`
        modifiedText = modifiedText.replace(`--${variable}--`, replaceBy)
      }
      return modifiedText
    },
    /**********************
     **** ASYNC ACTIONS ****
     **********************/

    async writeGuestsData(dataUpdate = false) {
      try {
        this.isWritingData = true
        const url = 'getArrivals?date=' + dateStore.apiDate + (dataUpdate ? '&updateData=true' : '')
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          return res
        } else {
          toast('Error while writing data', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: false,
            type: 'error'
          })
        }
      } catch (e) {
        // TODO: It never goes here !
        /* toast('Error while writing data', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
          type: 'error'
        }) */
        //console.log('Error while writing data: ', e)
      } finally {
        this.isWritingData = false
      }
    },
    async loadGuestsData() {
      try {
        this.isLoadingData = true
        const res = await queryByCollection(`guests/${dateStore.apiDate}/bookings`, 'guestName')
        this.bookings = {
          ...this.bookings,
          [dateStore.apiDate]: res
        }
        if (ArrivalsOptionsStore.currentSender) {
          this.setSenderName(ArrivalsOptionsStore.currentSender)
        }
      } catch (e) {
        toast('Error while loading data', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
          type: 'error'
        })
        //console.log('Error while loading data: ', e)
      } finally {
        this.isLoadingData = false
      }
    },
    async updateBooking(bookId, value) {
      try {
        await set(`guests/${dateStore.apiDate}/bookings/${bookId}`, value)
        this.loadGuestsData()
      } catch (error) {
        console.log('Error while updating booking: ', error)
      }
    },
    async updateGuestPhone(bookId, guestPhone) {
      try {
        const url = 'updateGuestPhone?bookId=' + bookId + '&guestPhone=' + guestPhone
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          await this.updateBooking(bookId, { phone: res.phone })
          return { success: true }
        } else {
          // It goes here
          console.log('Error in updateGuestPhone: ', error) // TODO: Never goes here
        }
      } catch (error) {
        console.log('Error in updateGuestPhone: ', error) // TODO: Never goes here
      }
    },
    async updateArrivalTimeSectionEdit(bookId, arrivalTimeText) {
      try {
        const url =
          'updateArrivalTimeSectionEdit?bookId=' + bookId + '&arrivalTimeText=' + arrivalTimeText
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          await this.updateBooking(bookId, { arrivalTime: res.text })
          return { success: true }
        }
      } catch (error) {
        console.log('Error in updateArrivalTimeSectionEdit: ', error)
      }
    },
    async updateArrivalTimeSection(bookId, type, previousArrivalTimeText) {
      try {
        const url =
          'updateBeds24ArrivalTimeSection?bookId=' +
          bookId +
          '&previousArrivalTimeText=' +
          previousArrivalTimeText +
          '&type=' +
          type
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          // Update store and firebase / Don't overcharge Beds24 API
          this.updateBooking(bookId, { arrivalTime: res.text })
          /* try {
            await set(`guests/${dateStore.apiDate}/bookings/${bookId}`, )
            this.loadGuestsData()
          } catch (error) {
            console.log('Error while updating card arrival time: ', error)
          } */
        }
      } catch (error) {
        console.log('Error in updateArrivalTimeSection: ', error)
      }
    },
    async sendEmail(booking) {
      // OLD VERSION
      /* try {
        this.isSendingMail = true
        const url =
          'sendEmail?guestEmail=' + booking.email + '&text=' + JSON.stringify(booking.text)
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        console.log('res', res)
        this.updateBooking(booking.bookId, { status: 'done' })
        this.updateArrivalTimeSection(booking.bookId, booking.type, booking.arrivalTime)
      } catch (error) { // NEVER GETS HERE
        this.updateBooking(booking.bookId, { status: 'error' })
        console.log('Error in sendEmail: ', error)
      } finally {
        this.isSendingMail = false
      } */
      // VERSION THAT WORKS
      try {
        this.isSendingMail = true
        const url =
          'sendEmail?guestEmail=' + booking.email + '&text=' + JSON.stringify(booking.text)
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        // This is the way to take care of firefunctions, if I write them ok.
        if (res.success) {
          // toast
          this.updateBooking(booking.bookId, { status: 'done' })
          this.updateArrivalTimeSection(booking.bookId, booking.type, booking.arrivalTime)
        } else {
          // toast
          this.updateBooking(booking.bookId, { status: 'error' })
          console.log('Error in sendEmail: ', res.error)
        }
      } finally {
        this.isSendingMail = false
      }
    },
    async sendEmailSimple(booking) {
      try {
        this.isSendingMail = true
        const url =
          'sendEmail?guestEmail=' + booking.email + '&text=' + JSON.stringify(booking.text)
        const response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          // toast
        } else {
          // toast
          console.log('Error in sendEmailSimple: ', res.error)
        }
      } finally {
        this.isSendingMail = false
      }
    }
  }
})

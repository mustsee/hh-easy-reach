import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    customMessages: [],
    messages: [
      {
        custom: false,
        messageType: 'defaultWelcomeMessage',
        name: 'Default welcome message',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Haystack Hostel. I hope you are well and thanks again for booking with us. Could you please let us know what time you will be arriving on --dayOfWeek--?\nYou are welcome to leave your bags in reception before check in at 3pm. Please keep in mind we are on the top floor of a four storey building so there are quite a few steps to reach reception. See you soon!`
      },
      {
        custom: false,
        messageType: 'withArrivalTime',
        name: 'With arrival time',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek', 'checkinTime'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Haystack Hostel. I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.\nPlease keep in mind we are on the top floor of a four storey building so there are quite a few steps to reach reception. See you soon!`
      },
      {
        custom: false,
        messageType: 'earlyCheckin',
        name: 'Early Checkin',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek', 'checkinTime'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Haystack Hostel. I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.\nOur official check-in time is at 3pm, however you are very welcome to leave your luggage here at reception, then you are free to explore Edinburgh!\nPlease keep in mind we are on the top floor of a four storey building so there are quite a few steps to reach reception. See you soon!`
      },
      {
        custom: false,
        messageType: 'lateCheckin',
        name: 'Late Checkin',
        variables: ['guestFirstName', 'senderName', 'roomNumber'],
        text: `Hello --guestFirstName--, this is --senderName-- from the Haystack Hostel.\n As you are checking in tonight after midnight, the reception will be closed but here are the instructions so you can check yourself in. The door code for the both the street door and the hostel door is *2365*. The Haystack hostel is on the third floor. I will put your Room key with your name on it, on the reception shelf which is located in front of you slightly to the left as you walk through the door to the hostel. Your room number is --roomNumber-- and I have allocated Bed --bedNumber-- for you in the dorm, there is a locker for your luggage also number --bedNumber--. To go to the room, --roomLocation1-- as you walk in the Haystack Hostel door and you will see Room --roomNumber-- --roomLocation2--.`
      },
      {
        custom: false,
        messageType: 'emailMessage',
        name: 'Email Message',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Haystack Hostel. I hope you are well and thanks again for booking with us.\nCould you please let us know what time you will be arriving on --dayOfWeek-- ? Also, could you please provide us with your WhatsApp number if you have one? Our WhatsApp is +44 7553 137828\nYou are welcome to leave your bags in reception before check in at 3pm.\nPlease keep in mind we are on the top floor of a four storey building so there are quite a few steps to reach reception. See you soon!`
      }
      /*       {
        custom: false,
        messageType: 'other',
        name: 'Other',
        variables: [],
        text: `Write here custom message`
      } */
    ]
  }),
  getters: {},
  actions: {
    setCustomMessages(value) {
      this.customMessages = value
    }

    /**********************
     **** ASYNC ACTIONS ****
     **********************/
  }
})

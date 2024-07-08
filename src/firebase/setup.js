import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const apiKey =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PROD_API_KEY
    : import.meta.env.VITE_DEV_API_KEY

const firebaseConfig = {
  apiKey,
  authDomain: "hh-easy-reach.firebaseapp.com",
  projectId: "hh-easy-reach",
  storageBucket: "hh-easy-reach.appspot.com",
  messagingSenderId: "180032379271",
  appId: "1:180032379271:web:0d70108e46a2d661fd1b22"
}

const firebaseApp = initializeApp(firebaseConfig)
const firestoreDb = getFirestore(firebaseApp)

if (import.meta.env.MODE !== 'production') {
  connectFirestoreEmulator(firestoreDb, 'localhost', 8080)
  connectAuthEmulator(getAuth(), 'http://localhost:9099')
}

const functionBaseURL =
  import.meta.env.MODE !== 'production'
    ? 'http://localhost:5001/hh-easy-reach/us-central1/'
    : 'https://europe-west2-hh-easy-reach.cloudfunctions.net/'

export { firebaseApp, firestoreDb, functionBaseURL }

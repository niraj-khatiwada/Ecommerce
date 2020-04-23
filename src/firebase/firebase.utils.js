import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCkDJgTw-TWVsYaFfwZvLWC7-CpVAuGoow',
  authDomain: 'ecommerce-fec63.firebaseapp.com',
  databaseURL: 'https://ecommerce-fec63.firebaseio.com',
  projectId: 'ecommerce-fec63',
  storageBucket: 'ecommerce-fec63.appspot.com',
  messagingSenderId: '141163314834',
  appId: '1:141163314834:web:c626f42f94b4957422304b',
  measurementId: 'G-8RBY162V8P',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

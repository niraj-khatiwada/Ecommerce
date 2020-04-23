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

export const createUserProfileDocument = async (userAuth, additionalDatas) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdDate = new Date()

    try {
      await userRef.set({ displayName, email, createdDate, ...additionalDatas })
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

import firebase from 'firebase/app'

// We need auth and storage
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCorEiN8Ym_5wozfrnn-5VjrkHDxU-yDyE",
    authDomain: "mrwardrobe20.firebaseapp.com",
    databaseURL: "https://mrwardrobe20.firebaseio.com",
    projectId: "mrwardrobe20",
    storageBucket: "mrwardrobe20.appspot.com",
    messagingSenderId: "211812438462",
    appId: "1:211812438462:web:e5aef4e0689827c561e9ef",
    measurementId: "G-SP7SLYF3EP"
  };

// This function is called by App.js whenver there is any state change in auth
// and this is used to store the content in firestore DB if it doesnot exists already
export const createUserProfileDocument = async (userAuth, addonData) => {
    // only when userauth is not null
    if (!userAuth){
        return
    }
    // check if already exists
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    // the snapshot just before 
    const snapShot = await userRef.get();
    // create a new entry if it doesnot exist
    if(!snapShot.exists){

        // deconstructing
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{

            // add it to the DB
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addonData
            })
        }

        catch(error){
            console.error(error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = (props) => {
    auth.signInWithPopup(provider)
}

export const signInWithEmail = (props) => {
    const {email, password} = props
    auth.signInWithEmailAndPassword(email,password)
    .then((user) => {console.log(user) })
    .catch((error) => {alert(error.message); return false})
}
export default firebase
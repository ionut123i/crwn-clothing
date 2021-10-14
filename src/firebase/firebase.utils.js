import firebase from 'firebase/compat/app';
//import 'firebase/firestore'
//import 'firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGFBfztDGfrHlfmN0Glv-ISGK7c_a6N2o",
  authDomain: "crwn-db-169b7.firebaseapp.com",
  databaseURL: "https://crwn-db-169b7-default-rtdb.firebaseio.com",
  projectId: "crwn-db-169b7",
  storageBucket: "crwn-db-169b7.appspot.com",
  messagingSenderId: "715474444189",
  appId: "1:715474444189:web:106ba3f9a497eb54e29974",
  measurementId: "G-W6BMZM0S47"
};
export const createUserProfileDocument= async(userAuth,additionalData)=>{
if(!userAuth)return;
 const Userref =firestore.doc(`users/${userAuth.uid}`)

const snapShot= await Userref.get()

if(!snapShot.exists){
 const {displayName,email} =userAuth;
 const createdAt=new Date();
 try{
 await Userref.set({
   displayName,
   email,
   createdAt,
   ...additionalData
 })
 }catch(error){
   console.log('error creating user',error.message)
 }
}
 return Userref
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

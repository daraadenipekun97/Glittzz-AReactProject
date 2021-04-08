import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAAtIh8Mn90-7_LCJHT86638869vBcMR7Q",
    authDomain: "glitzz-db.firebaseapp.com",
    projectId: "glitzz-db",
    storageBucket: "glitzz-db.appspot.com",
    messagingSenderId: "449809812277",
    appId: "1:449809812277:web:39760988907c5583db1a7c"
  }


  firebase.initializeApp(config);



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase



import * as firebase from 'firebase';
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID,
} from '@env'
// console.log(API_KEY,"hiii")
var l=API_KEY;
// const firebaseConfig = {
//     apiKey:"AIzaSyAA0Y5jee8fb48NrW9wizSwMIAedCr7Hys",
//     authDomain:AUTH_DOMAIN ,
//     databaseURL: DATABASE_URL,
//     projectId:  PROJECT_ID,
//     // storageBucket: ,
//     messagingSenderId: MESSAGE_SENDER_ID,
//     appId: APP_ID,
//     // measurementId: "G-2M34E2LC6T"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyAA0Y5jee8fb48NrW9wizSwMIAedCr7Hys",
  authDomain: "sample-b0875.firebaseapp.com",
  databaseURL: "https://sample-b0875.firebaseio.com",
  projectId: "sample-b0875",
  storageBucket: "sample-b0875.appspot.com",
  messagingSenderId: "251203130049",
  appId: "1:251203130049:web:ec9c2866bab5127ecfba40",
  measurementId: "G-2M34E2LC6T"
};
  // console.log(firebaseConfig,"hiiiiiii")

  // const fire=firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    var fire=firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  export default fire;
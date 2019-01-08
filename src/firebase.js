import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDCnOTcvRCt6CfhRtXizKcHzujX2jR1cBc",
    authDomain: "m-city-aa7cf.firebaseapp.com",
    databaseURL: "https://m-city-aa7cf.firebaseio.com",
    projectId: "m-city-aa7cf",
    storageBucket: "m-city-aa7cf.appspot.com",
    messagingSenderId: "114190101342"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')

export {
    firebase,
    firebaseMatches
}
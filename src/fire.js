import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyA8Q2WT52V5zEMzXyPIZ5Z16MS1tVrZzRo",
  authDomain: "digital-jalebi-325cc.firebaseapp.com",
  projectId: "digital-jalebi-325cc",
  storageBucket: "digital-jalebi-325cc.appspot.com",
  messagingSenderId: "605266217783",
  appId: "1:605266217783:web:31ee2db30ce086ce05e8b2",
  measurementId: "G-BRM3FY7S2N"
};
  
  const fire=firebase.initializeApp(firebaseConfig);

  firebase.analytics();
  export default fire;
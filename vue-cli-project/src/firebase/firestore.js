
  // Your web app's Firebase configuration
  import firebase from 'firebase' 
  
  
  const config = {
    apiKey: "AIzaSyD7F8TCPHLy7omQhWDTNsrJ4_o6RJp6V9Y",
    authDomain: "my-portfolio-9973f.firebaseapp.com",
    databaseURL: "https://my-portfolio-9973f.firebaseio.com",
    projectId: "my-portfolio-9973f",
    storageBucket: "my-portfolio-9973f.appspot.com",
    messagingSenderId: "495175028807",
    appId: "1:495175028807:web:bb5db40b14607beec72162"
  };
  // Initialize Firebase
  const settings = { timestampsInSnapshots: true };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase
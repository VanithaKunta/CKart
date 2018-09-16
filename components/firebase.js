import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAFFO8iQf5VL59Qj9Q3xFienJKT79JikR4",
  authDomain: "cbitkart.firebaseapp.com",
  databaseURL: "https://cbitkart.firebaseio.com",
  projectId: "cbitkart",
  storageBucket: "cbitkart.appspot.com",
  messagingSenderId: "338441912504"

}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
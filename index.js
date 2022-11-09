// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyAm-_wffmtWUWNcc374FfzhOq9oTiPZa7M",
  authDomain: "yahello-f9fcd.firebaseapp.com",
  projectId: "yahello-f9fcd",
  storageBucket: "yahello-f9fcd.appspot.com",
  messagingSenderId: "171733577914",
  appId: "1:171733577914:web:8d812060f5d0fd303a9283",
  measurementId: "G-DZEC0BQY2D"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content
$(this).text('saved');
  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("workpapers")
    .add({
      item: value//?
    });
    

  });

});

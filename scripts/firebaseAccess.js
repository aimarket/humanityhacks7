/**
 * Apparently, it is necessary to have a firebase and a firestore instance
 * to upload videos, so we will attempt that solution
 * 
 * 
 */

/**
 * This script handles access to the remote firestone database, including
 * authentication, initialization, posting, and querying 
 */




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnRXdHt9-SVlxMvs4SoKOyLPRMFEBkDfY",
    authDomain: "hackforhumanity-6dec6.firebaseapp.com",
    databaseURL: "https://hackforhumanity-6dec6.firebaseio.com",
    projectId: "hackforhumanity-6dec6",
    storageBucket: "hackforhumanity-6dec6.appspot.com",
    messagingSenderId: "349254690937",
    appId: "1:349254690937:web:d7f25c35aa778062790ca8",
    measurementId: "G-RB866WP5HC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the FIREBASE database service
const FIREBASE_DATABASE = firebase.database().ref();

// Get a reference to the FIRESTORE database service
const database = firebase.firestore();

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', handleSubmitForFireBase, false);
submitButton.addEventListener('click', handleSubmitForFireStore, false);

// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'images/mountains.jpg'
var videoRef = storageRef.child('images/first_video');


function handleSubmitForFireBase (event) {
    
    event.preventDefault();

    // message_: "Firebase Storage: The operation 'put' cannot be performed on a 
    // root reference, create a non-root reference using child, such as .child('file.png')."

    videoRef.put(Recording.files[0]).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    }); 


}

// Callback prevents page refresh and calls persist method 
function handleSubmitForFireStore (event) {
    event.preventDefault();

    IncidentInfo.submission_time = new Date().toLocaleString();
    savetoFirestore(IncidentInfo);

    console.log(IncidentInfo);
}

// This is the method that saves the information to firestore
function savetoFirestore(IncidentInfo) {

    if (IncidentInfo.date === null) { return }

    // Persist to Firestore
    database.collection("encounters").add({
        data: IncidentInfo
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}
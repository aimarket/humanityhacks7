/**
 * 
 * This persistence solution uses Google Cloud Storage to remotely house
 * user submitted videos and associated data. Google Firebase is used to 
 * store multimedia inputs (i.e., videos and images). Google Firestore is
 * used to store the text information associated with each video. 
 * 
 * While not the most convienent strategy, we take this approach for three
 * reasons: (1) Google Firebase does not support queries, (2) Google Firestore
 * has limited support for uploading large binary files, (3) time constraints.
 * 
 * Future Implementations of this project should seek to integrate a scaleable
 * persistence solution as early as possible. 
 */

/**
 * This script handles access to the remote firestone database, including
 * authentication, initialization, posting, and querying 
 */




// Firebase configuration
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
submitButton.addEventListener('click', handleSubmitClick, false);


// Create a root reference
let storageRef = firebase.storage().ref();

// Create a reference to 'images/mountains.jpg'


function handleSubmitClick ( event ) {

    // Prevent window from refreshing 
    event.preventDefault();

    // Create reference to recording. This will be used to 
    let videoRef = storageRef.child(`recordings/${Recording.files[0].name}`);

    // Store video to Firebase Storage
    videoRef.put(Recording.files[0]).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    }); 

    // Associate the video with the inputted text information using the URL
    IncidentInfo.videoRef = `recordings/${Recording.files[0].name}`;

    // Add submission time and date 
    IncidentInfo.submission_time = new Date().toLocaleString();
    
    // save the text inputted text information to Firestore 
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
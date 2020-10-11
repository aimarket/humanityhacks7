
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


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBnRXdHt9-SVlxMvs4SoKOyLPRMFEBkDfY",
    authDomain: "hackforhumanity-6dec6.firebaseapp.com",
    projectId: "hackforhumanity-6dec6",
});

const database = firebase.firestore();


let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', handleSubmitClick, false);

function handleSubmitClick(event) {
    event.preventDefault();

    savetoFirestore(IncidentInfo)

    console.log(IncidentInfo);
}

function savetoFirestore(IncidentInfo) {

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
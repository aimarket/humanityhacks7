let dropArea = document.getElementById('drop-area');


// start off with adding handlers to all the events to prevent default 
// behaviors and stop the events from bubbling up any higher than necessary:
const preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
};

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})


// Add visual indicator when user drags files over drop zone 
const highlight = (e) => dropArea.classList.add('highlight');
['dragenter', 'dragover'].forEach(eventName => dropArea.addEventListener(eventName, highlight, false));

const unhighlight = (e) => dropArea.classList.remove('highlight');
['dragleave', 'drop'].forEach(eventName => dropArea.addEventListener(eventName, unhighlight, false));




function handleFiles(files) {
    files = [...files]
    files.forEach(uploadFile)
    files.forEach(previewFile)
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    alert('file submitted');

    handleFiles(files)
}





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

// Get a reference to the database service
const database = firebase.database().ref();


const handleSubmitClick = (e) => {
    e.preventDefault();

    console.log(IncidentInfo);
    firebase.database().ref('incidents/' + '1').set({
        data: IncidentInfo
    });
}

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', handleSubmitClick, false);

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}




function uploadFile(file) {
    let url;
    let formData = new FormData()

    formData.append('file', file)

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(() => { /* Done. Inform the user */ })
        .catch(() => { /* Error. Inform the user */ })
}



//  Image Preview Functionality 

function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function () {
        let img = document.createElement('img')
        img.src = reader.result
        document.getElementById('gallery').appendChild(img)
    }
}

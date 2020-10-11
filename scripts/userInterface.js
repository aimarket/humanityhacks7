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
    
    files = [...files];
    files.forEach(previewFile);
    
    Recording.files = [ ...files ]; 
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(event) {
    let dt = event.dataTransfer
    let files = dt.files

    alert('file submitted');

    handleFiles(files); 
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

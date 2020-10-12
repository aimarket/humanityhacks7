const IncidentInfo = {
    date : null,
    time : null,
    state : null,
    city : null,
    zipCode : null,
    description : null,
    graphic_content : false,
    submission_time : null,
}; 

const Recording = {
    files : null
}


const onChangeIncidentInfo = (event) => {

    if ( event.target.name === 'gridCheck' ) {

        console.log( gridCheck.prop('checked') );
    }

    console.log(event.target.value); 

    IncidentInfo[event.target.name] = event.target.value; 

    console.log(IncidentInfo);
}

let zipCode = document.getElementById("inputZip").addEventListener('change', onChangeIncidentInfo, false); 
let date = document.getElementById("inputDate").addEventListener('change', onChangeIncidentInfo, false); 
let city = document.getElementById("inputCity").addEventListener('change', onChangeIncidentInfo, false); 
let state = document.getElementById("inputState").addEventListener('change', onChangeIncidentInfo, false); 
let description = document.getElementById("inputDescription").addEventListener('change', onChangeIncidentInfo, false); 
let gridCheck = document.getElementById("gridCheck").addEventListener('change', onChangeIncidentInfo, false); 

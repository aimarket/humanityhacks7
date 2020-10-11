const IncidentInfo = {
    date : null,
    time : null,
    state : null,
    city : null,
    zipcode : null,
    description : null,
    graphic_content : false
}


const onChangeIncidentInfo = (event) => {

    if ( event.target.name === gridCheck ) {
        IncidentInfo.graphic_content = ! IncidentInfo.graphic_content
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

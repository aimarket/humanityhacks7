
export const IncidentInfo = {
    date : null,
    time : null,
    state : null,
    county : null,
    city : null,
    zipcode : null,
    description : null
}


export const onChangeIncidentInfo = (event) => {
    IncidentInfo[event.target.name] = event.target.value; 
}

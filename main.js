const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}



// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})




outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})








/* Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one. */

const bill = {
    officeName: "Bills Dr.",
    streetAddress: "557 A Hamilton Ave",
    doctorName: "Guillaro Bruno",
    patientName: "Fortunato Mugnano",
    visitDate: "08/16/2019",
    amountBilled: "100$",
    dueDate: "09/18/2019"
}


/* Exemple if we don't wanna use for...of object.values() */
const dateVisited = bill["visitDate"]
const owed = bill["amountBilled"]
const patient = bill["patientName"]


/* We don't need the foor each loop because there is only one object 
THIS WILL CONSOLE LOG THE VALUES*/

for (const value of Object.values(bill)) {
  console.log(value)
}

/* We don't need the foor each loop because there is only one object 
THIS WILL CONSOLE LOG THE KEYS*/

for (const key of Object.keys(bill)) {
    console.log(key)
}


/* We don't need the foor each loop because there is only one object 
THIS WILL CONSOLE LOG THE VALUES AND KEYS */
for (const entry of Object.entries(bill)) {
    console.log(entry[0], ": ", entry[1])
}





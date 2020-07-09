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

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const allBills = [
    {
        officeName: "Office",
        streetAddress: "123 Fake Street",
        doctorName: "Shart",
        patientName: "Two",
        visitDate: "1/1/2020",
        amountBilled: 999,
        dueDate: "1/2/2020"
    }
]

allBills.forEach(bill => {
    for (const value of Object.values(bill)) {
        document.querySelector("#bill").innerHTML += `${value} `
    }
})

console.log(allBills[0][dateVisited], allBills[0][owed], allBills[0][patient])

for (const key of Object.keys(allBills[0])) {
    console.log(key)
    document.querySelector("#billTwo").innerHTML += `<span>${key} </span>`
}

const favFood = [
    {
        name: "Burrito",
        vegetarian: false,
        location: "Chiptole"
    },
    {
        name: "BBQ",
        vegetarian: false
    }
]

favFood.forEach(food => {
    document.querySelector(".food").innerHTML += "<hr/>"
    for (const entry of Object.entries(food)) {
        document.querySelector(".food").innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})

const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.

document.querySelector("#practice").innerHTML += `<h1>Weekly Sales Report</h1>`
salesByWeek.forEach(object => {
    document.querySelector("#practice").innerHTML += `<hr />`
    document.querySelector("#practice").innerHTML += `<h2>${object["sales_agent"]["first_name"]} ${object["sales_agent"]["last_name"]}</h2>`
    for (const entry of Object.entries(object["vehicle"])) {
        document.querySelector("#practice").innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
    document.querySelector("#practice").innerHTML += `<h3>Profit: $${object["gross_profit"]}</h3>`
})
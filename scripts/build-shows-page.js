// array with all of shows data and render the shows 

let shows__array = [
    {
        "date": "Mon Sept 09 2024",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA"
    },

    {
        "date": "Tue Sept 21 2024",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Oct 12 2024",
        "venue": "View Loungue",
        "location": "San Francisco, CA"
    },

    {
        "date": "Sat Nov 16 2024 ",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Nov 29 2024",
        "venue": "Moscow Center",
        "location": "San Francisco, CA"
    },

    {
        "date": "Wed Dec 18 2024",
        "venue": "Pres Club",
        "location": "San Francisco, CA"
    }
];

//Dynamic HTML should be added to DOM via DOM Methods for individual elements
let table = document.querySelector(".shows__table");

let divTable = document.createElement("div");
divTable.className = "table__header";

let headerDates = document.createElement("p");
headerDates.className = "table__head";
let headerVenue = document.createElement("p");
headerVenue.className = "table__head";
let headerLocation = document.createElement("p");
headerLocation.className = "table__head";

// Append elements to div tabel

divTable.appendChild(headerDates);
divTable.appendChild(headerVenue);
divTable.appendChild(headerLocation);
table.appendChild(divTable);

// built in functions to create all the content between the hero image 

function displayShow(showObj) {
    let shows__card = document.createElement("div");
    shows__card.className = "shows__card";

    let shows__dateText = document.createElement("p");
    shows__dateText.innerText = "DATE";
    shows__dateText.className = "shows__heading";
    shows__card.appendChild(shows__dateText);

    let shows__date = document.createElement("h3");
    shows__date.innerText = showObj["date"];
    shows__card.appendChild(shows__date);

    let shows__venueText = document.createElement("p");
    shows__venueText.innerText = "VENUE";
    shows__venueText.className = "shows__heading";
    shows__card.appendChild(shows__venueText);

    let shows__venue = document.createElement("p");
    shows__venue.innerText = showObj["venue"];
    shows__card.appendChild(shows__venue);

    let shows__locationText = document.createElement("p");
    shows__locationText.innerText = "LOCATION";
    shows__locationText.className = "shows__heading";
    shows__card.appendChild(shows__locationText);

    let shows__location = document.createElement("p");
    shows__location.innerText = showObj["location"];
    shows__card.appendChild(shows__location);

    document.querySelector(".shows__table").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
}

//  To display shows
for (let i = 0; i < shows__array.length; i++) {
    displayShow(shows__array[i]);
}
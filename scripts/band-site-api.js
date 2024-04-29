let commentBox = document.querySelector(".comment__box");

class BandSiteApi {

    constructor(api_key) {
        this.api_key = api_key;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    // Method to get and display all the comments
    async getComments() {
        await axios
            .get(`https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=${this.api_key}`)
            .then(result => {
                let commentData = result.data;

                for (let i = 0; i < commentData.length; i++) {
                    displayComment(commentData[i]);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    //  Method to post comment.
    async postComment(newCommentObj) {
        await axios
            .post(`https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=${this.api_key}`,
                newCommentObj)

            .then(result => {
                form.reset();
                displayComment(result.data);
            })

            .catch(err =>
                console.error(err));
    };

    // Method to get shows data
    async getShows() {
        await axios
            .get(`https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=${this.api_key}`)
            .then(result => {
                let showData = result.data;

                for (let i = 0; i < showData.length; i++) {
                    displayShow(showData[i]);
                }
            })

            .catch(err =>
                console.error(err));
    }

}


//  Start: Functions 

function displayComment(commentObj) {

    let comment__card = document.createElement("div");
    comment__card.className = "comment__card";

    let comment__row = document.createElement("div");
    comment__row.className = "comment__row";

    
  let comment__col1 = document.createElement("div");
  comment__col1.className = "comment__col1";

    let comment__picture = document.createElement("div");
    comment__picture.className = "comment__picture";
    comment__row.appendChild(comment__picture);

    let profile__picture = document.createElement("img");
    profile__picture.src = "../assets/images/Mohan-muruge.jpg"
    profile__picture.className = "comment__profile-picture";
    comment__picture.appendChild(profile__picture);

    let comment__col2 = document.createElement("div");
    comment__col2.className = "comment__col2";
    
    let comment__details = document.createElement("div");
    comment__details.className = "comment__details";
    comment__row.appendChild(comment__details);

    let comment__namedate = document.createElement("div");
    comment__namedate.className = "comment__nameAndDate";

    let comment__name = document.createElement("p");
    comment__name.innerText = commentObj.name;
    comment__name.className = "comment__nameAndDate-name";
    comment__namedate.appendChild(comment__name);

    let comment__date = document.createElement("p");
    let commentDate = new Date(commentObj.timestamp).toLocaleDateString('en-US');
    comment__date.innerText = commentDate;
    comment__date.className = "comment__nameAndDate-date"
    comment__namedate.appendChild(comment__date);

    comment__details.append(comment__namedate);

    let comment__text = document.createElement("p");
    // comment__text.className = "comment__parg"
    comment__text.innerText = commentObj.comment;
    comment__details.appendChild(comment__text);
    comment__row.appendChild(comment__col1);
    comment__col1.appendChild(comment__picture);
    
  comment__row.appendChild(comment__col2);
  comment__col2.appendChild(comment__details);
    comment__card.appendChild(comment__row);
    commentBox.prepend(comment__card);
}
function getShowHeader() {
    let table = document.querySelector(".shows__table");

    let divTable = document.createElement("div");
    divTable.className = "table__header";

    let headerDates = document.createElement("p");
    headerDates.innerText = "DATES";
    headerDates.className = "table__header--text";
    let headerVenue = document.createElement("p");
    headerVenue.innerText = "VENUE";
    headerVenue.className = "table__header--text";
    let headerLocation = document.createElement("p");
    headerLocation.innerText = "LOCATION";
    headerLocation.className = "table__header--text";

    // Append elements to div tabel

    divTable.appendChild(headerDates);
    divTable.appendChild(headerVenue);
    divTable.appendChild(headerLocation);
    table.appendChild(divTable);
    console.log(document.querySelector(".shows__table"));
}
function displayShow(showObj) {
    let shows__card = document.createElement("div");
    shows__card.className = "shows__card";

    let shows__dateText = document.createElement("p");
    shows__dateText.innerText = "DATE";
    shows__dateText.className = "shows__heading";
    shows__card.appendChild(shows__dateText);

    let shows__date = document.createElement("h4");
    let showsDate = new Date(showObj.date).toDateString();
    shows__date.innerText = showsDate;
    shows__date.className = "shows__desc";
    shows__card.appendChild(shows__date);

    let shows__venueText = document.createElement("p");
    shows__venueText.innerText = "VENUE";
    shows__venueText.className = "shows__heading";
    shows__card.appendChild(shows__venueText);

    let shows__venue = document.createElement("p");
    shows__venue.innerText = showObj.place;
    shows__venue.className = "shows__desc";
    shows__card.appendChild(shows__venue);

    let shows__locationText = document.createElement("p");
    shows__locationText.innerText = "LOCATION";
    shows__locationText.className = "shows__heading";
    shows__card.appendChild(shows__locationText);

    let shows__location = document.createElement("p");
    shows__location.innerText = showObj.location;
    shows__location.className = "shows__desc";
    shows__card.appendChild(shows__location);

    console.log(document.querySelector(".shows__table"));
    document.querySelector(".shows__table").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
}

// End: Functions




// Initialize web page
let fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
const BandSite = new BandSiteApi("87430a53-9bab-4a9a-a4ed-23eeea3ff40c");

// Run required code for particular page
if (fileName == "index.html") {
    // Not using 'let' here so 'form' var is not block scoped
    form = document.querySelector(".comment__form");
    // Start: Event Listener
    form.addEventListener("submit", function (obj) {
        // Prevents the page from reloading when submitting a new comment.
        obj.preventDefault();
        let newCommentObj = {
            "name": obj.target.name.value,
            "comment": obj.target.comment.value
        }
        BandSite.postComment(newCommentObj);
    });
    // End: Event Listener
    BandSite.getComments();
}
else if (fileName == "shows.html") {
    getShowHeader();
    BandSite.getShows();
}















// Array with three default concepts
let comments = [{
  "name": "Victor Pinto",
  "date": "11/02/2023",
  "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},

{
  "name": "Christina Cabrera",
  "date": "10/28/2023",
  "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},

{
  "name": "Isaac Tadesse",
  "date": "10/20/2023",
  "comment": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
},
];

//Function that takes comment as a parameter.

let commentBox = document.querySelector(".comment__box");

function displayComment(commentObj) {

  let comment__card = document.createElement("div");
  comment__card.className = "comment__card";

  let comment__row = document.createElement("div");
  comment__row.className = "comment__row";

  let comment__picture = document.createElement("div");
  comment__picture.className = "comment__picture";
  comment__row.appendChild(comment__picture);

  let profile__picture = document.createElement("img");
  profile__picture.src = "../assets/images/Mohan-muruge.jpg"
  profile__picture.className = "comment__profile-picture";
  comment__picture.appendChild(profile__picture);

  let comment__details = document.createElement("div");
  comment__details.className = "comment__details";
  comment__row.appendChild(comment__details);

  let comment__namedate = document.createElement("div");
  comment__namedate.className = "comment__nameAndDate";

  let comment__name = document.createElement("p");
  comment__name.className = "comment__nameAndDate-name";
  comment__name.innerText = commentObj["name"];
  comment__namedate.appendChild(comment__name);

  let comment__date = document.createElement("p");
  comment__date.className = "comment__nameAndDate-date"
  comment__date.innerText = commentObj["date"];
  comment__namedate.appendChild(comment__date);

  comment__details.append(comment__namedate);

  let comment__text = document.createElement("p");
  comment__text.innerText = commentObj["comment"];
  comment__details.appendChild(comment__text);

  comment__card.appendChild(comment__row);
  commentBox.appendChild(comment__card);
}

for (let i = 0; i < comments.length; i++) {
  displayComment(comments[i]);
}

// HTML Form that submits using the addEventListener

let form = document.querySelector(".comment__form");
form.addEventListener("submit", function(obj) {
  // Prevents the page from reloading when submitting a new comment.
  obj.preventDefault();

  let newDate = new Date();
  // To fetch current date 

  let currentDate = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+newDate.getFullYear();
  // Constructs a new comment object
  let newCommentObj = {
      "name": obj.target.name.value,
      "date": currentDate,
      "comment": obj.target.comment.value
  }

  // Pushes a new comment object to an array of comment
  comments.unshift(newCommentObj);

  // Clears all comments from the page

  commentBox.innerText = "";

  // Re-renders to the page all comments from the comment array
  for (let i = 0; i < comments.length; i++) {
      displayComment(comments[i]);
  }

  // Clears the input fields after submitting a new comment
  form.reset();
});
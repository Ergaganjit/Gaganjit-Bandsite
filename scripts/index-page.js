// import BandSiteApi from "./band-site-api.js";

// const BandSite = new BandSiteApi("59a425ff-7e98-456a-870f-de61b2e2bf3b");

// //Function that takes comment as a parameter.

// let commentBox = document.querySelector(".comment__box");

// function displayComment(commentObj) {

//   let comment__card = document.createElement("div");
//   comment__card.className = "comment__card";

//   let comment__row = document.createElement("div");
//   comment__row.className = "comment__row";

//   let comment__col1 = document.createElement("div");
//   comment__col1.className = "comment__col1";


//   let comment__picture = document.createElement("div");
//   comment__picture.className = "comment__picture";
//   comment__row.appendChild(comment__picture);

//   let profile__picture = document.createElement("img");
//   profile__picture.src = "../assets/images/Mohan-muruge.jpg"
//   profile__picture.className = "comment__profile-picture";
//   comment__picture.appendChild(profile__picture);

  
//   let comment__col2 = document.createElement("div");
//   comment__col2.className = "comment__col2";

//   let comment__details = document.createElement("div");
//   comment__details.className = "comment__details";
//   comment__row.appendChild(comment__details);

//   let comment__namedate = document.createElement("div");
//   comment__namedate.className = "comment__nameAndDate";

//   let comment__name = document.createElement("p");
//   comment__name.className = "comment__nameAndDate-name";
//   comment__name.innerText = commentObj["name"];
//   comment__namedate.appendChild(comment__name);


//     let comment__date = document.createElement("p");
//     let commentDate = new Date(commentObj.timestamp).toLocaleDateString('en-US');
//     comment__date.innerText = commentDate;
//     comment__date.className = "comment__nameAndDate-date"
//     comment__namedate.appendChild(comment__date);

//   comment__details.append(comment__namedate);

//   let comment__text = document.createElement("p");
//   comment__text.innerText = commentObj["comment"];
//   comment__details.appendChild(comment__text);

//   comment__row.appendChild(comment__col1);
//   comment__col1.appendChild(comment__picture);

//   comment__row.appendChild(comment__col2);
//   comment__col2.appendChild(comment__details);
//   comment__card.appendChild(comment__row);
//   commentBox.appendChild(comment__card);

// }

// for (let i = 0; i < comments.length; i++) {
//   displayComment(comments[i]);
// }

// // HTML Form that submits using the addEventListener

// let form = document.querySelector(".comment__form");
// form.addEventListener("submit", function(obj) {
//   // Prevents the page from reloading when submitting a new comment.
//   obj.preventDefault();

//   let newDate = new Date();
//   // To fetch current date 

//   let currentDate = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+newDate.getFullYear();
//   // Constructs a new comment object
//   let newCommentObj = {
//       "name": obj.target.name.value,
//       "date": currentDate,
//       "comment": obj.target.comment.value
//   }

//   // Pushes a new comment object to an array of comment
//   comments.unshift(newCommentObj);

//   // Clears all comments from the page

//   commentBox.innerText = "";

//   // Re-renders to the page all comments from the comment array
//   for (let i = 0; i < comments.length; i++) {
//       displayComment(comments[i]);
//   }

//   // Clears the input fields after submitting a new comment
//   form.reset();
// });
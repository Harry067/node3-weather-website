console.log("Client side javascript file is loaded!");

// fetch("http://puzzle.mead.io/puzzle").then((respone) => {
//   respone.json().then((data) => {
//     console.log(data);
//   });
// });

// "https://api.weatherstack.com/current?access_key=307d5a15e084bd5ca51e09c754ea571f&query=-27.27,153.02",

// fetch("http://localhost:3000/weather?address=!").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From Javascript";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  // console.log(location);

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  // if (location) {
  // http://localhost:3000
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = data.error;
      } else {
        //   console.log(data.location);
        //   console.log(data.forecast);
        messageOne.textContent = search.value;
        messageTwo.textContent = data.forecast;
      }
    });
  });
  // }
});

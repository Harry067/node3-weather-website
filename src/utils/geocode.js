const request = require("request");

const geocode = (address, callback) => {
  // mopbox  => mapbox
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    `.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  request({ url, json: true }, (error, { body } = {}) => {
    // console.log(error.errno);
    // console.log("body data", body);
    if (error) {
      console.log("Unable to connct to location service!");
      // should call the callback function in geocode and it calls the forecast function
      callback("Unable to connct to location service!", undefined);
    } else if (body.features.length === 0) {
      console.log("Unable to find location. Try another search");
      callback("Unable to find location. Try another search", undefined);
    } else {
      console.log(body.features[0].center[0], body.features[0].center[1]);
      // should call the callback function in geocode and it calls the forecast function
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].plcase_name,
      });
    }
  });
};

module.exports = geocode;

// Geocoding
// Address

// const gecodeURL =
//   "https://api.mopbox.com/geocoding/v5/mbox.places/Los%20Angeles.json?access_token=";

// requst({ url: url }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect mapbox service!");
//   } else if (response.body.features.length == 0) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = requst.body.features[0].center[1];
//     const longitude = request.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

// address => encodeURIComponent
// ? becomes %3F

// geocode("New York", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

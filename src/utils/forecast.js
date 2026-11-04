const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=${process.env.WEATHER_ACESS}&query=${latitude},${longitude}`;

  console.log(forecast);
  console.log(latitude, longitude);
  request({ url, json: true }, (error, { body }) => {
    // console.log(response.body.current);
    if (error) {
      // console.log("Unable to connect weather service!");
      callback("Unable to connect weather service!", undefined);
    } else if (body.error) {
      console.log("Unable to find location");
      callback("Unable to find location", undefined);
    } else {
      // console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degree out and feels like ${response.body.current.feelslike} degree out`);
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out and feels like ${body.current.feelslike} degree out`,
      );
    }
  });
};

const forecast2 = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=307d5a15e084bd5ca51e09c754ea571f&query=${latitude},${longitude}`;

  console.log(forecast2);
  console.log(latitude, longitude);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find the location!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out and feels like ${body.current.feelslike} 
        degree out. The humidity is ${body.current.humidity} and sun rises ${body.current.astro.sunrise}`,
      );
    }
  });
};

module.exports = forecast2;

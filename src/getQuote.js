import axios from "axios";

const url = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";

const config = {
  headers: {
    "x-rapidapi-key": "onSvmD4tXUmsh34L9ltgqzyg1VBap1QfrEqjsnqQn5BDdyEZIB",
  },
  transformResponse: (response) => response,
};

export default async () => {
  const { data } = await axios.get(url, config);

  return data;
};

// const axios = require("axios");

// const url = 'https://type.fit/api/quotes'  // get quotes free api

// axios({
//   method: "POST",
//   url: "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
//     "x-rapidapi-key": "onSvmD4tXUmsh34L9ltgqzyg1VBap1QfrEqjsnqQn5BDdyEZIB",
//     useQueryString: true,
//   },
//   params: {
//     count: "10",
//     cat: "movies",
//   },
//   data: {},
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

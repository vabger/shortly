require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const API_key = process.env.API_KEY;
const baseURL = process.env.BASE_URL;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
function getShortURL(url) {
  const encodedURL = encodeURI(url);
  return axios
    .get(baseURL, {
      params: {
        key: API_key,
        short: encodedURL,
      },
    })
    .then((r) => {
      return r;
    })
    .catch((e) => {
      console.log(e);
    });
}
app.get("/short", (req, res) => {
  const { url } = req.query;
  getShortURL(url).then((r) => {
    res.send(r.data.url.shortLink);
  });
});
app.listen(5000, () => {
  console.log("server starting....");
});

const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.get("/dadJoke", jokeController.createjokeController);
module.exports = routes
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	name: String,
	description: String
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
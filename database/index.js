require("dotenv").config();
// db key for future deployment db security (non-localhost in connection string)
const key = process.env.DB_KEY;
const mongoose = require("mongoose");
console.log(process.env.MONGO_URI);
mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("error securing db connection ", err);
    } else {
      console.log("db connection success");
    }
  }
);

//based on Watchmode Title Details API
const titleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  original_title: String,
  plot_overview: String,
  type: String,
  runtime_minutes: Number,
  release_date: String,
  genre_names: Array,
  user_rating: Number,
  critic_score: Number,
  us_rating: String,
  poster: String,
  original_language: String,
  similar_titles: Array,
  sources: Array,
});

// not sure if user settings will be a part of this - if so, will refactor
const userSchema = new mongoose.Schema({
  user_name: String,
  email: String,
  watch_list: {
    movies: Array,
    shows: Array,
  },
  watch_history: {
    movies: Array,
    shows: Array,
  },
});

const streamSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  logo: String,
  cost: mongoose.Mixed,
  no_ads: Boolean,
  free: Boolean,
  subscription: Boolean,
  website: String,
  default: Boolean,
  subscribed: Boolean,
});

const Title = mongoose.model("Title", titleSchema);
const User = mongoose.model("User", userSchema);
const Stream = mongoose.model("Stream", streamSchema);

module.exports = {
  Title: Title,
  User: User,
  Stream: Stream,
};

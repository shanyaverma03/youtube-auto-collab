const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  role: {
    type: String,
    enum: ["editor", "creator"],
    required: true,
  },
  youtubeApiKey: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", UserSchema);

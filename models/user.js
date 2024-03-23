// const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");
// const { createTokenForUser } = require("../services/authentication"); 

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);


const User = model("user", userSchema);

module.exports = User;

const mongoose = require("mongoose");
const { Schema } = mongoose;
const bCrypt = require("bcryptjs");

const user = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatarURL: {
      type: String,
      default: null,
    },
    subscription: {
      type: String,
      enum: ["free", "dietitiansupport", "full"],
      default: "free",
    },
    newslettersubscription: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    favorites: {
      type: [String],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

user.methods.setPassword = (password) => {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

user.methods.validPassword = (password) => {
  return bCrypt.compareSync(password, this.password);
};

const User = mongoose.model("users", user);

module.exports = { User };

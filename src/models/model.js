const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: { type: String, required: true, lowercase: true, trim: true },

    lastName: { type: String, require: true, uppercase: true },
    currentBusiness: {
      type: String,
      trim: true,
    },
    password: { type: String, type: String, unique: true, require: true },
    userName: { type: String, required: true, unique: true, trim: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User_info", userSchema);

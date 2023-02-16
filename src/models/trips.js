const mongoose = require("mongoose");
const validator = require("validator");

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  country: {
    type: String,
    required: true,
  },

  travellers: {
    type: Number,
    required: true,
  },

  budget: {
    type: Number,
    required: true,
  },
});

const Trip = new mongoose.model("Trip", tripSchema);

module.exports = Trip;

const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  country: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  city: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  address2: {
    type: String,
    required: false,
    maxlength: 50
  },
  legal: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  packagee: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .max(50)
      .required(),
    lastName: Joi.string()
      .min(2)
      .max(255)
      .required(),
    country: Joi.string()
      .min(5)
      .max(255)
      .required(),
    city: Joi.string()
      .min(3)
      .max(255)
      .required(),
    address: Joi.string()
      .min(5)
      .max(255)
      .required(),
    address2: Joi.string()
      .min(2)
      .max(255),
    legal: Joi.string()
      .min(5)
      .max(255)
      .required(),
    packagee: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;

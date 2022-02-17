const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().min(2).max(20).required(),
  lastName: Joi.string().min(2).max(20).required(),
  userName: Joi.string().alphanum().min(3).max(15).required(),
  password: Joi.string().min(4).max(25).required(),
  email: Joi.string().email().required(),
  address: Joi.string().max(50).required(),
  phone: Joi.number().max(9999999999999).required(),
});


const userLoginSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(15).required(),
  password: Joi.string().min(4).max(25).required(),
});

const queryUserSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(15).required(),
});

module.exports.userSchema = userSchema;
module.exports.userLoginSchema = userLoginSchema;
module.exports.queryUserSchema = queryUserSchema;

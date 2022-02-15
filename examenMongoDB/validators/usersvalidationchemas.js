const Joi = require("joi");

const userSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  userName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  email: Joi.string().email().lowercase().required(),
  phone: Joi.number(),
  address: Joi.string().max(30)
})

const loginSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})

module.exports = {
  userSchema,
  loginSchema
}
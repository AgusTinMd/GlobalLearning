const Joi = require('joi');

const schemaBook = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).max(30).required(),
  genre: Joi.string().min(3).max(50).required(),
  read: Joi.boolean().required()
});

module.exports = {
  schemaBook
}

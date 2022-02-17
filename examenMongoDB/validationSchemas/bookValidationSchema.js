const Joi = require('joi');

const regExpTitle = new RegExp(/^[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)*$/);
const regExpText = new RegExp(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);

const bookSchema = Joi.object({
  title: Joi.string().pattern(regExpTitle, ' ').max(50).required(),
  author: Joi.string().pattern(regExpText, ' ').min(3).max(50).required(),
  genre: Joi.string().pattern(regExpText, ' ').min(3).max(20).required(),
  read: Joi.boolean().required(),
});

const queryBookSchema = Joi.object({
  title: Joi.string().pattern(regExpTitle, '').max(50),
  author: Joi.string().pattern(regExpText, '').min(3).max(50),
});

module.exports.bookSchema = bookSchema;
module.exports.queryBookSchema = queryBookSchema;

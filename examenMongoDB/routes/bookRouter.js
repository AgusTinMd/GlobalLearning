const express = require('express');
const booksController = require('../controllers/bookController');
const {schemaBook} = require('../validators/bookValidationSchema');
const validator = require('express-joi-validation').createValidator();

const routes = (Book) => {
  const bookRouter = express.Router();
  
  const { getBooks, postBooks, getBooksbyID, putBooks, deleteBooks, getBooksByTitle, getBooksByauthor} = booksController(Book);


bookRouter.route('/books')

  .get(getBooks)

  

  .post(validator.body(schemaBook), postBooks);


bookRouter.route('/books/:bookId')

  .get(getBooksbyID)

  .put(putBooks)

  .delete(deleteBooks)

bookRouter.route('/books/searchs/:title')

  .get(getBooksByTitle)

bookRouter.route('/books/searchs/author/:author')

  .get(getBooksByauthor)

  return bookRouter;
}
module.exports = routes;
const booksController = (Book) => {
  const getAllBooks = async (req, res) => {
    const {query} = req;
    const allBooks = await Book.find(query);

    res.json(allBooks);
  };

  const postBooks = async (req, res) => {
    const book = new Book(req.body);
    await book.save();

    res.json(book);
  };

  const getBooksById = async (req, res) => {
    try {
      const {params} = req;
      const bookFind = await Book.findById(params.bookId);

      res.json(bookFind);
    } catch {
      res.json({'message': 'Book not found'});
    }
  };

  const putBooks = async (req, res) => {
    try {
      const {body} = req;

      const bookUpdate = await Book.updateOne({
        _id: req.params.bookId,
      }, {
        $set: {
          title: body.title,
          author: body.author,
          genre: body.genre,
          read: body.read,
        },
      });

      res.json(bookUpdate);
    } catch {
      res.json({'message': 'Book not found'});
    }
  };

  const deleteBooksById = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      await Book.findByIdAndDelete(bookId);

      res.json('Book deleted');
    } catch {
      res.json({'message': 'Book not found'});
    }
  };

  const getSearchBooks = async (req, res) => {
    const {query} = req;
    const key = Object.keys(query).join('');

    if (key === 'title') {
      const bookFind = await Book.findOne({'title': query.title});

      if (bookFind) {
        res.json(bookFind);
      } else {
        res.json({'message': 'Book not found'});
      }
    } else if (key === 'author') {
      const bookFind = await Book.find({'author': query.author});

      if (bookFind.length !== 0) {
        res.json(bookFind);
      } else {
        res.json({'message': 'Book not found'});
      }
    }
  };

  return {getAllBooks, postBooks, getBooksById, putBooks, deleteBooksById, getSearchBooks};
};

module.exports = booksController;

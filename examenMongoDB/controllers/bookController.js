const { response } = require("express");
const jwt = require('jsonwebtoken');

const booksController = (Book) => {

  const getBooks = async(req, res) => {
    const { query } = req;
    const response = await Book.find(query);

    res.json(response);
  }

  const postBooks = async(req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
  }

  const getBooksbyID = async(req, res) => {
    const { params } = req;
    const response = await Book.findById(params.bookId);
    res.json(response);
}

const putBooks = async(req,res) => {
  const {body} = req;
  const response = await Book.updateOne({
    _id: req.params.bookId
  }, {
    $set: {
      title: body.title,
      genre: body.genre,
      author: body.author,
      read: body.read
    }
  })
  res.json(response);
}
const deleteBooks = async(req,res)=>{
  const id = req.params.bookId;

  await Book.findByIdAndDelete(id);

  res.status(202).json("Book/s Delete");

}

const getBooksByTitle = async(req,res) => {
 const {params} = req;
 const bookfind = await Book.findOne({"title": params.title});
  if(bookfind===null)
  {
    res.json("Invalid Title");
  }else{
    res.json(bookfind);
  }
}

const getBooksByauthor = async(req,res) =>{
  const {params} = req;
  const bookfind = await Book.findOne({"author": params.author});
   if(bookfind===null)
   {
     res.json("Invalid Author");
   }else{
     res.json(bookfind);
   }
}



  


  return { getBooks, postBooks, getBooksbyID, putBooks, deleteBooks, getBooksByTitle, getBooksByauthor}  
}


module.exports = booksController;
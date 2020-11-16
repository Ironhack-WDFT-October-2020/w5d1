const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/books', (req, res) => {
  console.log('books');
  // get all the books from the database
  Book.find().then(books => {
    // render a books view to display them
    res.render('books', { booksList: books })
  }).catch(err => {
    console.log(err);
  })
});

router.get('/books/add', (req, res) => {
  res.render('bookForm');
})

router.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  // find the book with that id
  Book.findById(bookId)
    .then(book => {
      // render the view
      console.log(book);
      res.render('bookDetails', { bookDetails: book })
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/books', (req, res) => {
  // const title = req.body.title;
  // const author = req.body.author;
  // const description = req.body.description;
  // const rating = req.body.rating;
  const { title, author, description, rating } = req.body;
  console.log(title, author, description, rating);
  // add the book to the database
  Book.create({
    title,
    author,
    description,
    rating
  })
    .then(book => {
      console.log(`${book.title} was added to the database`);
      res.redirect(`/books/${book._id}`)
    })
})

module.exports = router;
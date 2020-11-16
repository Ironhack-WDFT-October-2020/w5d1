const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/books', (req, res) => {
  console.log('books');
  // get all the books from the database
  Book.find().then(books => {
    // to check the data:
    // console.log(books);
    // res.send(books);
    res.render('books', { booksList: books })
  }).catch(err => {
    console.log(err);
  })
  // render a books view to display them
});

module.exports = router;
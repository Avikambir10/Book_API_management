const express = require('express');
const Router = express.Router();
const {GetAllBooks,AddNewBook,GetBookById,UpdateBookByID,DeleteBookById,SearchBook} = require('../Controllers/books');
const isValidUser = require('../Middlewares/validUser');

Router.route('/')
    .get(GetAllBooks)
    .post(isValidUser,AddNewBook);

Router.route('/search')
    .get(isValidUser,SearchBook)

Router.route('/:id')
    .get(isValidUser,GetBookById)
    .put(isValidUser,UpdateBookByID)
    .delete(isValidUser,DeleteBookById);

module.exports = Router;
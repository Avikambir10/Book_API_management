const express = require('express');
const Router = express.Router();
const {SignUp , Login} = require('../Controllers/auth');

Router.route('/signup')
    .post(SignUp);
Router.route('/login')
    .post(Login);

module.exports = Router;
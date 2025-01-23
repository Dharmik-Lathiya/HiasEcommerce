const route  = require('express').Router();
const UserLogin = require("./auth/UserLogin")
const UserSignUp = require("./auth/UserSignUp");

route.post('/user/singup',UserSignUp);
route.post('/user/login',UserLogin);

module.exports = route;
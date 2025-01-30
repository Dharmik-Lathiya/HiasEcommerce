const route  = require('express').Router();
const UserLogin = require("./auth/UserLogin")
const UserSignUp = require("./auth/UserSignUp");
const addProducts = require("./products/addProducts")
const deleteProducts = require("./products/deleteProduct")
const updateProducts = require("./products/updateProducts")
const allProducts  = require("./products/allProducts")
const createOrders = require("./orders/createOrder")

route.get("/",(req,res)=>{
        res.send("helllo")
})
route.post('/user/singup',UserSignUp);
route.post('/user/login',UserLogin);
route.post('/admin/addProducts',addProducts);
route.post('/admin/deleteProducts',deleteProducts);
route.post('/admin/updateProducts',updateProducts);
route.post('/admin/allProducts',allProducts);
route.post('/buy',createOrders);

module.exports = route; 
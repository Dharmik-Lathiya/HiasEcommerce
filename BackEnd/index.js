const express = require("express");
const app = express();
const route = require('./routes/routes');
const cors = require("cors")
const bodyParser = require("body-parser");



require('./Database/dbconnection')


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/',route);

app.listen(3000,()=>{

})

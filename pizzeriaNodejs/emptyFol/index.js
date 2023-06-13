const express = require('express');
const mongoose = require('mongoose');
var dbUrl="mongodb://127.0.0.1:27017/Pizzeria";
const router = require('./routes/pizzaRoutes')
const ingredientsrouter = require('./routes/ingredientsRoutes')
const cors = require('cors');                 //cors (Cross-Origin Resource Sharing) allow our API to be called from any URL and access
const app = express(); 
app.use(cors());                              // app.use(...) = accessing the element/file  
app.use(router);
app.use(ingredientsrouter);

mongoose.connect(dbUrl);                      //connect to database

app.listen(7000, () => {
    console.log(`Server Started at ${7000}`)
})
module.exports=mongoose;






























// app.use(express.json());
// const dbConnection=mongoose.connection;  
// dbConnection.on('error',(error)=>console.log("Falied to connect..")); 
// dbConnection.once('connected',()=>console.log("Connected successfully.."));
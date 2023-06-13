// model :- a schema the help us in managing our database in a structural
const mongoose = require('mongoose');

const ingredients = mongoose.Schema({        //schema for defining the model and stucturing in table formate.         
    id:{type:String,required:true},
    tname:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
});

const ingredientsModelMongoose = mongoose.model('ingredients', ingredients,'ingredients');

module.exports = ingredientsModelMongoose

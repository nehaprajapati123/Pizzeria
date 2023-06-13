const mongoose = require('mongoose');

const pizza = mongoose.Schema({
    id:{type:String,required:true},
    type:{type:String,required:true},
    price:{type:Number,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    ingredients:{type:Array,required:true},
    topping:{type:Array,required:true}
});


const modelMongoose = mongoose.model('pizza', pizza,'pizza');

module.exports = modelMongoose

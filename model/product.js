var mongoose = require('mongoose')
var schema = mongoose.Schema;
var prodschema = new schema(
    {
    image:String,
    title:String,
    price:Number,
    id:String
    
    }
)
var productssmodel = mongoose.model("product",prodschema,"product");
module.exports = productssmodel;
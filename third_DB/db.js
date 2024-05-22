const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/mydb')
    .then(()=>console.log("Connected to DB"))
    .catch((error)=>console.log("Error : ",error))

const ProductSchema = new mongoose.Schema({
    name : { type : String , required: true },
    price : { type : Number, required: true , min : 0},
    description : {type : String},
    inStock : {type : Boolean , default : true}
}, {timestamps : true} )

const ProductModel = new mongoose.model('products',ProductSchema);

module.exports = ProductModel;
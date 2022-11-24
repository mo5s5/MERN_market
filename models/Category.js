
const mongoose = require('mongoose');

// Schema  sarqum enq vor ed sxemayov stexcenq modely
Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name: String,
    img: String,
    products: Array
})



// Model
const Category = mongoose.model('Category', CategorySchema);


module.exports = Category;
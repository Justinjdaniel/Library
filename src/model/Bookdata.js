const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    published : String,
    about : String,
    img : String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
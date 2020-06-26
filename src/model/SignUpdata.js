const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
    name: String,
    useremail: String,
    phonenumber: String,
    password: String
});

var Userdata = mongoose.model('userdata',SignUpSchema);

module.exports = Userdata;

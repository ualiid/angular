const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const Model = mongoose.model
const userSchema = new Schema({
    username:String,
    password:String,
})
module.exports = Model('User',userSchema)
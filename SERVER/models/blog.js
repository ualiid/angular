const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const Model = mongoose.model;
const blogSchema = new Schema({
 title:String,
 content:String,
 description:String,
 author:String,
 status:Boolean,
 date:Date
});
module.exports= Model('Blog',blogSchema);
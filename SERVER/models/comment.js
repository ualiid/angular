const mongoose=require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const commentSchema = new Schema({
    blog:String,
    comment:String,
    from:String,
    to:String,
    reply:String,
    status:Boolean,
    date:Date
})
module.exports=Model('Comment',commentSchema)
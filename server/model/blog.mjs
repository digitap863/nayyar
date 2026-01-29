import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    subHeading:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    authorImage:{
        type:String,
        required:true
    },
    authorPosition:{
        type:String,
        required:true
    }
}, { timestamps: true })

const Blog = mongoose.model("Blog", blogSchema)

export default Blog

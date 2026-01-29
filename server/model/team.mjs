import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true   
    },
    Image:{
        type:String,
        required:true
    },
    linkedinlink:{
        type:String,
        required:true
    }
}, { timestamps: true })

const Team = mongoose.model("Team", teamSchema)

export default Team
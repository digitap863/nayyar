// import mongoose from 'mongoose';


// const ServiceSchema = new mongoose.Schema({
//     heading: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     Image: {
//         type: String,
//         required: true
//     },
//     description1: {
//         type: String,
//         required: true
//     },

// }, { timestamps: true })

// export const ServiceModel = mongoose.model("Service", ServiceSchema)





import mongoose from 'mongoose';


const ServiceSchema = new mongoose.Schema({
    slug:{
        type: String,
        required: true,
        unique: true
    },
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    description1: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },


}, { timestamps: true })

export const ServiceModel = mongoose.model("Service", ServiceSchema)




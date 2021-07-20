const mongoose = require('mongoose');


const previousBidSchema = new mongoose.Schema({
    user:{
        type : String,
        required:true
    },
    companyName: {
        type : String,
        required: true
    },
    companyEmail: {
        type : String,
        required: true
    },
    companyLocation: {
        type : String,
        required:true
    },
    modifiedPrice :{
        type : Number,
        required: true
    }
})

const PreviousBids = mongoose.model('PreviousBids',previousBidSchema);

module.exports = PreviousBids;
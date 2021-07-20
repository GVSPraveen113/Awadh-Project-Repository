const mongoose=require('mongoose');
const PreviousBid = require('./previousbids');

const bidSchema= new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    basePrice: 
    {
        type:Number, 
        required:true
    },
    image: 
    {
        type:String, 
        required:true
    },
    farmer: 
    {
        type:String, 
        default: "Farmer 1",
        required:true
    },
    uploadDate: 
    {
        type:Date,
        default:Date.now
    },
    endDate: 
    {
        type:Date
    },
    soldDate: 
    {
        type:Date
    },
    soldTo: 
    {
        type:String
    },
    finalPrice: 
    {
        type:String
    },
    quantity:
    {
        type:Number
    },
    previousBids:[
            {
               type: mongoose.Schema.Types.ObjectId,
               ref:'PreviousBid'
            }
    ]

});

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;

import mongoose from 'mongoose';
const tenderSchema = new mongoose.Schema({
    tenderName :{
        type:String,
        required:true,
    },
    tenderType :{
        type:String,
        required:true,
    },
    basePrice :{
        type:String,
        required:true,
    },
    deadline :{
        type:String,
        required:true,
    },
    location :{
        type:String,
        required:true,
    },
    description : {
        type:String,
        required:true,
    },
    deal: {
        type: Boolean,   
        default: false,  
    },
    bids :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Bid'
        }
    ]
},{timestamps:true})

const Tender = mongoose.model('Tender',tenderSchema);
export default Tender;
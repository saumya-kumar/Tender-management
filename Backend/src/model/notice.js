import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
    noticeHeading :{
        type:String,
        required : true,
    },
    noticeContent : {
        type:String,
        required : true,
    }
},{timestamps:true})

const Notice = mongoose.model('Notice',noticeSchema);
export default Notice;
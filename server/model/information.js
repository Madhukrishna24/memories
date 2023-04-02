import mongoose from "mongoose";
const informationSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
    },
    name: {
        type:String,
        required: true,
    },
    message : {
        type:String,
        required: true,
    },
    date : {
        type: String,
        default: new Date().getTime().toString()
    }
})
export default mongoose.model('Information', informationSchema);
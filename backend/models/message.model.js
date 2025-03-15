import mongoose from 'mongoose';

const messageSchema = new mongooseSchema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema)


export default Message; 
import Conversation from "../models/conversation.model.js"
export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id} = req.params;
        const senderId = req.user._id;

        await Conversation
    } catch (error) {
        console.log("Error in sendMessage controller:",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
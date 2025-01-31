import mongoose from "mongoose";
const messageSchema= new mongoose.Schema(
    {
        senderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            unique:true,
        },
        receiverId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            unique:true,
        },
        text:{
            type:String,
            
        },
        image:{
            type:String,
            
        }

    },
    {timestamps:true}
);
const Message= mongoose.model("Message",messageSchema);//user class
export default Message;
import mongoose from "mongoose";
const messageSchema= new mongoose.Schema(
    {
        senderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        receiverId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        text:{
            type:String,
            
        },
        image:{
            type:String,
            
        },
        context: {  // ✅ New field for message context
            type: String,
            enum: [
              "formal",
              "sarcasm",
              "normal",
              "angry",
              "interrogation",
              "serious",
              "happy",
              "tease",
              "emotional",
            ],
            default: "normal",
          },

    },
    {timestamps:true}
);
const Message= mongoose.model("Message",messageSchema);//user class
export default Message;
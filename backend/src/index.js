import express from "express";
import dotenv from"dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js";
import cookiesParser from "cookie-parser";
import cors from "cors";
import {app,server} from "./lib/socket.js";
import path from "path";
dotenv.config()

//const app=express();

const PORT=process.env.PORT;
const __dirname=path.resolve()

//it will direct to the auth file 
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}
))
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));


    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
        
    })
}

server.listen(5001,()=>{
    console.log("server is running on PORT:"+PORT);
    connectDB()
});
import express from "express";//express framework
import dotenv from "dotenv";//dotenv object instance from dotenv class
import authRoutes from "./routes/auth.route.js";//getting authroutes function from route folder
import messageRoutes from "./routes/message.route.js";//getting messageroutes function from route folder
import { connectDB } from "./lib/db.js";//getting connectdb function from lib folder 
import cookiesParser from "cookie-parser";//cookieparser function from cookie-parser module
import cors from "cors";//cors function from cors module
import { app, server } from "./lib/socket.js";//getting app and server object instance from lib folder 
import path from "path";//path function from path folder 

dotenv.config();//loads enviroment variables from .env file

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin: "http://localhost:5173",  // Update for production
    credentials: true,
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Production Setup
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist", "index.html"));
    });
}

// Start Server
server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectDB();
});
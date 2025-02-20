import express from "express";//express object
import {signup,login,logout} from "../controllers/auth.controller.js";//sign up.login,logout function from controller folder
import {protectRoute} from "../middleware/auth.middleware.js";//protect route function from the middleware
import { updateProfile,checkAuth } from "../controllers/auth.controller.js";//updateprofile and checkauth function from controller

const router=express.Router();//use route function from express class for routing between folder

router.post("/signup",signup);//go to auth.controller.js

router.post("/login",login);//go to auth.controller.js

router.post("/logout",logout);//go to auth.controller.js

router.put("/update-profile",protectRoute,updateProfile);//go to auth.controller.js

router.get("/check",protectRoute,checkAuth);//go to auth.controller.js
export default router;
import {v2 as cloudinary} from "cloudinary";//v2 function from cloudinary class
import {config} from 'dotenv';//config function from dotenv module 
config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});
export default cloudinary;
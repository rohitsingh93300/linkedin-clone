"use server"

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server"
import {v2 as cloudinary} from 'cloudinary';
import connectDB from "./db";
import { revalidatePath } from "next/cache";

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
});

// creating post using server actions
export const createPostAction = async (inputText:string, selectedFile:string) => {
    await connectDB()
    const user = await currentUser()
     
    if(!user) throw new Error('User not authenticated');
    if(!inputText) throw new Error('Input field is required');

    const image = selectedFile;
    const userDatabase: IUser = {
        firstName:user.firstName || 'Rohit',
        lastName:user.lastName || 'singh',
        userId:user.id,
        profilePhoto: user.imageUrl
    }
    // console.log("rohituser", user)
    let uploadResponse;

    try {
        if(image){
            //1. create post with image
            uploadResponse = await cloudinary.uploader.upload(image);
            await Post.create({
                description:inputText,
                user: userDatabase,
                imageUrl: uploadResponse?.secure_url
            })
        }else{
            //2. create post with text only
            await Post.create({
                description: inputText,
                user: userDatabase
            })
        }
        revalidatePath("/")
    } catch (error:any) {
        throw new Error(error)
    }
}

//get all post using server actions
export const getAllPosts = async () => {
    await connectDB()
    try {
        const posts = await Post.find().sort({createdAt: -1});
        return JSON.parse(JSON.stringify(posts));
        
    } catch (error) {
        console.log(error);
        
    }
}
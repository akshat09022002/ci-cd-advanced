import express from "express";
import {client} from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post('/signup',async(req,res)=>{
    try{
    const {username,password} = req.body;
    const user = await client.user.create({
        data:{
            username,
            password
        }
    })
    res.status(201).json({message:"User created successfully",username:user.username,password:user.password});
}catch(error){
    res.status(500).json({message:"Internal server error"});
}
})

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
})
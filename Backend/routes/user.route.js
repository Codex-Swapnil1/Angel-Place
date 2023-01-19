const express=require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const{UserModel}=require("../models/user.model")


const userRouter=express.Router();


userRouter.post("/register",async(req,res)=>{
    const{email,password,name}=req.body;
    const userPresent= await UserModel.findOne({"email":email})
      if(userPresent?.email){
          res.send({"msg":"Try loggin in,already exists"})
      }else{

    try{
        bcrypt.hash(password, 5,async function(err, hash) {
            // Store hash in your password DB.
            const user=new UserModel({email,password:hash,name})
            await user.save();
            res.send({"msg":"resgister successfully"})
        });

    }catch(err){
        console.log(err);
        res.send({"err":"something went wrong ,pls try again later"})
    }
} 
})

userRouter.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    const userPresent=await UserModel.find({email})
    try{
        if(userPresent.length>0){
            const hashed_password=userPresent[0].password;
            bcrypt.compare(password, hashed_password, function(err, result) {
                if(result){
                    var token = jwt.sign({ userID:userPresent[0]._id }, 'shhhhh', { expiresIn: '7d' });
                    res.send({"msg":"login successfully","token":token})
                }else{
                    res.send({"msg":"wrong credentials"})
                }
            });
        }else{
            res.send({"msg":"wrong credentials"})
        }  
    }catch(err){
        console.log(err);
        res.send({"err":"something went wrong ,pls try again later"})
    }
   

})




module.exports={userRouter};
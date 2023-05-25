const express=require('express');
const app=express();
const morgan=require('morgan')
const fs=require('fs');
const { get } = require('https'); 
const { userInfo } = require('os');
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
 const cors = require('cors');
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";



if(process.env.NODE_ENV==='development')
{
app.use(morgan('dev'));
} 
app.use(express.json()) 
 


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.post("/post",async(req,res)=>{
    console.log(req.body)
})
 



require("./models/userDetails")



  const User=mongoose.model("userInfo") 
app.post("/register", async (req,res)=>{
    console.log("register api entered")
    const {name,email,password,confirmPassword}=req.body;
   try {

   oldUser=await User.findOne({email})
   if (oldUser){
    console.log("old user block entered")
    return (res.json({error:"user existssss"}) )
   }
   
   if (password!=confirmPassword){ 
    console.log("password is ",password)
    console.log("confirmpassword is ",confirmPassword)
    return ( res.json({error:"Passwords do not match"}) )
   } 
   const encryptedpassword= await bcrypt.hash(password,10)

 
 
    await User.create ({ 
       name:name,
       email:email, 
       password:encryptedpassword,
    }) 
    res.status(200).json({status: "ok"}); 
   } //end of try
   
   catch(error){ 
  //res.send({status:"error"})
  res.status(400).json({status: "error"});
  console.log(error)
   }
});
  
 
//api for login 
app.post("/loginuser", async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });
 
    if (res.status(201)) {
      console.log("required user found")
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      } 
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { } 
});

  

module.exports=app;  
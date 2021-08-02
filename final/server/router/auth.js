const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate=require("../middleware/authenticate")


require('../db/conn');
const User = require('../model/userSchema')
const User2=require('../model/userSchema2')
router.get("/", (req, res) => {
    res.send("router connected")

});


router.post('/register', async (req, res) => {
    const { name, email, password, cpassword } = req.body
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "pls filled the field properly" })
    }  
    try{
      const userExist =await User.findOne({ email: email });
            if (userExist) {
                return res.status(422).json({ error: "email already exites" })
            }else if(password != cpassword){
                return res.status(422).json({ error: "password not matching" })
            }else{
                const user = new User({ name, email, password, cpassword });


                await user.save();
              
                    res.status(201).json({ message: "user register scucessfully" });
             
            }
            
               
            
    }catch(err){
console.log(err);
    }
    
});


//login route

// router.post('/signin',async(req,res)=>{


//     try{
// const {email,password}=req.body;

// if(!email || !password){
//     return res.status(400).json({error:"pls fill tha data"})
// }
// const userLogin= await User.findOne({email:email});

// if(userLogin){
//     const isMatch=await bcrypt.compare(password,userLogin.password);

//     const token= await userLogin.generateAuthToken();
//     console.log(token);

//     res.cookie("jwtoken",token,{
//         expires:new Date(Date.now()+25892000000),
//         httpOnly:true
//     })

//     if(!isMatch){
//         res.status(400).json({error:"invalid credientials pass"});
//     }else{
//         res.json({message:"user signin successfully"});
//     }
    
// }else{
//     res.status(400).json({error:"invalid credientials "});
// }

// // console.log(userLogin);




//     }catch(err){
// console.log(err);

//     }
// console.log(req.body);
// res.json({message:"awesom"})
// });


router.post('/signin',async (req,res)=>{
  

    try{
const{email,password}=req.body;
if(!email || !password){
    return res.status(400).json({error:"plz fill tha data"})
}
const userLogin= await User.findOne({email:email});

console.log(userLogin);

if(!userLogin){
    res.status(400).json({error:"user error"})
}else{
    res.json({message:"user signin successfully"})
}
    }catch(err){
console.log(err)
    }
})

//about as page

router.get("/about",authenticate ,(req,res)=>{
    console.log(`another middleware`)
    res.send(req.rootUser);

})



router.post('/user',async(req,res)=>{

    const alien=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword
       
    })

    try{
 const daily= await alien.save()
 res.json(daily)
    }catch(err){
        res.send(err)
    }
})

//view all lists

router.get('/amount',async(req,res)=>{


    try{
 const daily= await User2.find()
 res.json(daily)
    }catch(err){
        res.send(err)
    }
})
//view particular list
router.get('/amount:id',async(req,res)=>{


    try{
 const daily= await User2.findById(req.params.id)
 res.json(daily)
    }catch(err){
        res.send(err)
    }
})


//send the list
router.post('/amount',async(req,res)=>{

    const alien=new User2({
        charge:req.body.charge,
        amount:req.body.amount
      
    })

    try{
 const a1= await alien.save()
 res.json(a1)
    }catch(err){
        res.send(err)
    }
})


//update only amounts
router.patch('/amount:id',async(req,res)=>{
    try{
 const daily= await User2.findById(req.params.id)
 daily.amount=req.body.amount
 const a1=await daily.save()
 res.json(a1)
    }catch(err){
        res.send(err)
    }
})

//delete
router.delete('/amount:id',async(req,res)=>{
   try{
 const daily= await User2.findById(req.params.id)
 
 const a1=await daily.delete()
 res.json(a1)
    }catch(err){
        res.send(err)
    }
})


module.exports = router;
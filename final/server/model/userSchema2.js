const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema2=new mongoose.Schema({
charge:{
    type:String,
    required:true,

},
amount:{
    type:Number,
    required:true,
}




})



//we are generate token



const User2=mongoose.model('charge',userSchema2);
module.exports=User2;

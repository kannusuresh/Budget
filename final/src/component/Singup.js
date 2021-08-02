import react,{useState} from 'react';

import {  useHistory } from 'react-router-dom';

const Singup =()=>{
const history=useHistory();
const [user,setUser]=useState({
  name:"",email:"",password:"",cpassword:""
});
let name,value;
const handleInputs=(e)=>{
console.log(e);
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
}

const PostData= async(e)=>{
e.preventDefault();
const {name,email,password,cpassword}=user;
 const res= await fetch('/register',{
   method:"POST",
   headers:{
     "Content-Type": "application/json"
   },
   body:JSON.stringify({
    name,email,password,cpassword
   })

 })
const data=await res.json();
if(res.status === 422 || !data ){
  window.alert("invalid registraton");
  console.log("invalid registraton");
}
else{
  window.alert(" registraton successfull");
  console.log("successfull registraton");
  history.push("/")
}
}


  return(
    <>


{/* <div className="container-fluid ">
        <div className="row">
          <div className="col-8 mx-auto">
<form method="POST">
<div class="form-group">
    <label for="exampleInputEmail1">name</label>
    <input type="text" class="form-control" name="name" id="name" autoComplete="off"  value={user.name} onChange={handleInputs} placeholder="Enter your name"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name="password" id="password" autoComplete="off" value={user.password}
     onChange={handleInputs} placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">CPassword</label>
    <input type="password" class="form-control" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} 
    onChange={handleInputs} placeholder="Conform Password"/>
  </div>
  <br/>
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
  {/* <div className="form-group form-button">
    <input type="submit" name="signup" id="signup" value="Submit" onClick={PostData}></input>
  </div>
</form>
</div>
</div>
</div>  */}


<div class="wrapper fadeInDown">
  <div id="formContent">
    
    <form method="POST">
      
      <input type="text" id="name" class="fadeIn second" name="name" value={user.name} onChange={handleInputs}placeholder="Enter your Name"/>
      <input type="text" id="email" class="fadeIn third" name="email"value={user.email} onChange={handleInputs} placeholder="Enter your Email"/>
      
      <input type="password" id="password" class="fadeIn third" name="password"value={user.password} onChange={handleInputs} placeholder="Enter your Password"/>
      <input type="password" id="password" class="fadeIn third" name="cpassword"value={user.cpassword} onChange={handleInputs} placeholder="Enter your CPassword"/>
      
      <input type="submit" class="fadeIn fourth" value="Sign Up" onClick={PostData}/>
    </form>

    </div>
</div> 
    </>
)
}
 

export default Singup;
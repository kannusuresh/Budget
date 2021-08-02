import react,{useState} from 'react';
import '../App.css'
import { NavLink,useHistory } from 'react-router-dom';
const Login = () => {

    const history=useHistory();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const loginUser= async(e)=>{
        e.preventDefault();

        const res=await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body: JSON.stringify({
                email,
                password
            })
        })
        const data=res.json();
        if(res.status === 400 || !data){
            window.alert("invalid Credentials");
        }else{
            window.alert("Login successfull");
            history.push('/home');
        }

    }
    return (

        <>
           
            {/* <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <form method="POST">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            <br />
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" value="login" onClick={loginUser}></input>
                            </div>
                        </form>
                        <NavLink to="/register" > create on account</NavLink>
                    </div>
                </div>
            </div> */}



            
            <div class="wrapper fadeInDown">
  <div id="formContent">
    
    <form method="POST">
      <input type="text" id="login" class="fadeIn first" name="login" value={email} onChange={(e)=> setEmail(e.target.value)}placeholder="Email"/>
      <input type="password" id="password" class="fadeIn second" name="login"value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
      
      
      <input type="submit" class="fadeIn fourth" value="Log In" value="login" onClick={loginUser}/>
    </form>

    
    <div id="formFooter">
      <a class="underlineHover" href="/register">Signup</a>
    </div>

  </div>
</div> 
        </>
    );
};
export default Login;

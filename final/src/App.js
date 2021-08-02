import react from 'react';
import Login from './component/Login';
import Singup from './component/Singup';
import Home from './component/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
const App=()=>{
  return(
    <>

    <Route exact path='/'>
      <Login/>
    </Route>
    
    <Route exact path='/register'>
      <Singup/>
    </Route>
    
    <Route exact path='/home'>
      <Home/>
    </Route>
    </>
  )
}

export default App;
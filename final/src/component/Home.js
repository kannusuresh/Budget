
import './App.css';
import Expenselist from '../component/Expenselist';
import ExpenseForm from '../component/ExpenseForm';
import Alert from '../component/Alert';
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';

import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Link,useHistory } from 'react-router-dom';


//list of arrays
//local storage 
// const initialExpenses=[
//   {id: uuidv4(),charge:"EB bill",amount:800},
//   {id: uuidv4(),charge:"Tution Fees",amount:400},
//   {id: uuidv4(),charge:"Milk",amount:800}

// ];
const initialExpenses=localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")):[];


//console.log(initialExpenses);

function Home() {
//   console.log(useState());


//logout
const history=useHistory();
function logout(){
  history.push('')
}
//useing usestate syntex

const[expenses,setExpenses]=useState(initialExpenses);//add
//console.log(expenses);

const [charge,setCharge]=useState('');
const [amount,setAmount]=useState('');
//alert
const [alert,setAlert]=useState({show:false});

//edit
const[edit,setEdit]=useState(false);

//edit item
const[id,setId]=useState(0);

//useeffect
useEffect(()=>{
  console.log('we called useeffect');
  localStorage.setItem('expenses',JSON.stringify(expenses))
});


//onchange handling
const handleCharge = e =>{
console.log('charge: ${e.target.value}');
  setCharge(e.target.value);

};




const handleAmount=e=>{
 console.log('amount: ${e.target.value}');

  setAmount(e.target.value);
};


const handleAlert=({type,text})=>{
  setAlert({show:true,type,text});
  setTimeout(()=>{
    setAlert({show:false});
  },3000);
};



//add values and amounts
const handleSubmit = e =>{
  e.preventDefault();
  //console.log('charge,amount');
  if(charge!=="" && amount > 0){

    if (edit){
     let tempExpenses=expenses.map(item => {                  //particular id edited
       return item.id == id?{...item,charge,amount} : item ;
     });
     setExpenses(tempExpenses);
     setEdit(false);
    }
    
    else{
      const singleExpense={id:uuidv4(),charge,amount};
      setExpenses([...expenses,singleExpense]);       //..previous list join
    //alert checking
handleAlert({type:"success",text:"item added"});
    }

setCharge("");        //if refresh only view initial values not add values view
setAmount("");


  }else{
    //error message
    handleAlert({type:"danger",text:'empty value and amount'});
  }
};

//clearall
const clearItems=()=>{
// console.log("cleared all");
 setExpenses([]);  //initial values deleted if refresh its view
handleAlert({type:"danger", text:"all items deleted"});
};


//clear particular id
const handleDelete=id=>{
  //console.log('item deleted:${id}');
  let tempExpenses=expenses.filter(item=>item.id !== id);
  setExpenses(tempExpenses);
  handleAlert({type:"danger", text:"Item deleted"});
};

//edit particular id
const handleEdit=id=>{
 // console.log('item edited:${id}');
 let expense=expenses.find(item=>item.id === id)
//console.log(expense);
let {charge,amount}=expense;
setCharge(charge);
setAmount(amount);
setEdit(true);
setId(id);
};

//backend

// const POSTData=async()=>{
// e.preventDefault();
// const {charge,amount}=ExpenseForm;
// const res=await fetch("/amount",{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body:JSON.stringify({
//     charge,amount
//   })
// });



const loginUser= async(e)=>{
  e.preventDefault();

  const res=await fetch('http://localhost:3000/amount',{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },body: JSON.stringify({
          amount,
          charge
      })
  })
  const data=res.json();

     
  }



  return(
    
  
     <> 


<div className='logout'>
 <button type="submit" className="btn" onClick={logout}>Logout</button>
</div>



     
{/* //alert checking   show=true orfalse */}
     {alert.show && <Alert type={alert.type} text={alert.text}/>}
  <Alert/>

  
  <h1>Monthly Home Budget</h1>
  <main className="App">

  
  <ExpenseForm charge={charge} 
  amount={amount} onClick={loginUser}
  handleAmount={handleAmount}
  handleCharge={handleCharge}
  handleSubmit={handleSubmit}
  edit={edit}/>


  <Expenselist 
  expenses={expenses}
   handleDelete={handleDelete}
   handleEdit={handleEdit}
   clearItems={clearItems}/>
  </main>
  {/* adding the amounts */}
  <h1>total spending:<span className="total">
    
    ${expenses.reduce((pre,next)=>{
return (pre+=parseInt(next.amount));         //parsintuse listview previous and acurrent

    },0)}
      
      </span></h1>
</>
  );
}

export default Home;

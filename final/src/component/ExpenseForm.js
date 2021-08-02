import React from 'react'
import{MdSend} from 'react-icons/md';
import DeleteIcon from '@material-ui/icons/Delete';

const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {





  
    return (
       <form method="POST" onSubmit={handleSubmit}>


           
         <div className="form-center">
             <div  className="form-group">
               
                 <label htmlFor="charge">Charge</label>
           <input type="text" className="form-control" id=" charge"
           name="charge" placeholder="e.g rent"
           value={charge} onChange={handleCharge} />
        
             </div>

            
             <div className="form-group">
                 <label htmlFor="amount">Amount</label>
           <input type="number" className="form-control" id=" amount"
           name="amount" placeholder="e.g 5000"
           value={amount} onChange={handleAmount}/>
        
             </div>
              </div>  
              <button type="submit" className="btn" > {edit ? "edit":"submit" }    {/*edit check true or false*/}
             
              <MdSend className="btn-icon"/>
              </button>
       </form>
    )
}

export default ExpenseForm

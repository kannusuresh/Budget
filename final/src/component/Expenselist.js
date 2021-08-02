import React from 'react'
import Item from './Expenseitem';
import {MdDelete} from 'react-icons/md';
const Expenselist = ({expenses,handleEdit, handleDelete,clearItems}) => {
    return (
        <>
           <ul className="list">
               {expenses.map(expense=>{
                   return (
                   <Item key={expense.id}
                    expense={expense}
                   handleDelete={handleDelete}
                   handleEdit={handleEdit}/>
                   );
               })}
                
           </ul>
           
            {expenses.length>0 && <button className="btn" onClick={clearItems}>     {/* //if all list clear total amount 0 view */}
               clear expenses
               <MdDelete className="btn-icon"/></button>}
               
               
        </>
    );
};

export default Expenselist

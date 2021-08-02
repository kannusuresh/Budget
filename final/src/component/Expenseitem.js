import React from 'react'
import { MdEdit,MdDelete } from 'react-icons/md';
import DeleteIcon from '@material-ui/icons/Delete';

const Expenseitem = ({expense,handleEdit,handleDelete}) => {            //using props
    const {id, charge, amount}=expense;         //using map

    return (
       <li className="item">
           <div className="info">
               <span className="expense">{charge}</span>         
               <span className="amount">Rs.{amount}</span>

           </div>
           <div>
               <button className="edit-btn" area-label="edit button" onClick={()=>handleEdit(id)}><MdEdit/></button>


<button className="clear-btn" area-label="clear button" onClick={()=>handleDelete(id)}><MdDelete/></button>
{/*  big size button ui design DeleteIcon */}
           </div>
       </li>
    )
}

export default Expenseitem

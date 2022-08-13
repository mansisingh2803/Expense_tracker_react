// import React from 'react';
// import ExpenseForm from './ExpenseForm'
// import './NewExpense.css';
// const NewExpense = () => {
//     return <div className='new-expense'>
//         <ExpenseForm/>
//     </div>
// }

// export default NewExpense;

import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const[isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };
   
  const startEditingHandler =()=>{
    setEditing(true);
  };

  const stopEditingHandler = ()=>{
    setEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={startEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
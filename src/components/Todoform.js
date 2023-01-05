import React,{ useState } from 'react'

function Todoform() {
  const [input, setInput] = useState('');
  return (
    
     <form classname= 'todo-form'>
      <input
      type='text'
      placeholder='Add a todo'
      value={input}
      name='text'
      className='todo-input'
      />
      <button className='todo-button'>Add todo</button>
     </form>
  
  )
}

export default Todoform
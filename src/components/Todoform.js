import React,{ useState, useEffect, useRef } from 'react'

function Todoform(props) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })


  const handleChange = e => {
    setInput(e.target.value);
  }
  const handlSub = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random()* 1000),
      text: input
    });

    setInput('');
  };

  return (
    
     <form classname= 'todo-form' onSubmit={handlSub}>
      <input
      type='text'
      placeholder='Add a todo'
      value={input}
      name='text'
      className='todo-input'
      onChange={handleChange}
      ref={inputRef}
      />
      <button className='todo-button'>Add todo</button>
     </form>
  
  )
}

export default Todoform
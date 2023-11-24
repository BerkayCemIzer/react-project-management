import { useState, useRef } from 'react'
import Modal from './Modal';

const NewTask = ({ onAdd }) => {

  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="OK">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Empty Input</h2>
        <p className='text-stone-600 mb-4'>Opss... looks like you forgot to enter a value.</p>
      </Modal>
      <div className='flex items-center gap-4'>
        <input value={enteredTask} onChange={handleChange} type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
        <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Task</button>
      </div>
    </>
  )
}

export default NewTask
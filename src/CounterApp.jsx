import { useState } from 'react';
import { Button } from 'flowbite-react';
//import './index.css';

export const CounterApp = ({ value = 0}) => {
  
  const [counter, setCounter] = useState(0); 
  const handleAdd = () => {
        setCounter(counter+1);
  }
  const handleSubtract = () => {
        setCounter(counter-1);
  }
  const handleReset = () => {
        setCounter(value);
  }
  return (
    <>
      <div className='centered-div'>
        <h1 className='title'>CounterApp</h1>
        <p>{ counter }</p>
        <button className='buttonAdd' onClick={(event) =>handleAdd(event)}> Add +1 </button> {' '}
        <button className='buttonSubtract' onClick={(event) =>handleSubtract(event)}> Sub -1</button>{' '}
        <button className='buttonReset' onClick={(event) =>handleReset(event)}> Reset </button>{' '}
      </div>
    </>
  )
}

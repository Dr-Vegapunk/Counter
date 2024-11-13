'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]= useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
         setCount(count > 0 ?count - 1 : <p className='count-error'>Cannot go beyond Zero, Sorry</p>);
    }
    const reset = () => {
        setCount(0);
    }
  return (

   
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>


    </div>
  )
}

export default Counter
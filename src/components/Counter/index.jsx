import React, {useState } from 'react';
import {useSelector} from 'react-redux'
import {increase,decrease} from './counterSlice'
import {useDispatch} from 'react-redux'
Counter.propTypes = {

};

function Counter(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  // console.log(counter);
  const handleIncreaseClick= () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  }
  const handleDecreaseClick= () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  }
  return (
    <div>
     
      Counter Feature: {counter}
      
      {/* {count}
      <button onClick={() => setCount(x => x + 1)}>Increase</button> */}
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  );
}

export default Counter;



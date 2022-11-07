import React from "react";
import {useSelector,useDispatch}  from "react-redux";
import {decrement,increment} from '../redux/action/counterAction';

function Counter() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.counter)

    console.log(state)
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {/* <span>{count}</span> */}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter

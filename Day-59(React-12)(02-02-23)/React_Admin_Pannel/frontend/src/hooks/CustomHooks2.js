import '../App.css';
import Navbar from '../components/Navbar';
import React from "react";
import useCounter from './useCounter';

function CustomHooks1(props) {

    const [count, Increment, Decrement] = useCounter(20);

    return (
        <React.Fragment>
            <div>{count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </React.Fragment>
    )
}
export default CustomHooks1;
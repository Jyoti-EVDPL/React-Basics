import '../App.css';
import Navbar from '../components/Navbar';
import React from "react";
import useCounter from './useCounter';

function CustomHooks(props) {

    const [count, Increment, Decrement] = useCounter(10);

    return (
        <React.Fragment>
            <div>{count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </React.Fragment>
    )
}
export default CustomHooks;
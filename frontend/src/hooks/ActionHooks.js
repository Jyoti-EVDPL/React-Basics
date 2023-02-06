import '../App.css';
import Navbar from '../components/Navbar';
import React,{useState,useEffect} from "react";

function ActionHooks(props) {
    const [count,setCount] = useState(props.count);
    const [feedback,setFeedback] = useState(0);
    // const [feedback,setFeedback] = useState(0)
  
    //Object based state
    // const [compState,setCompState] = useState({
    //   count: props.count,
    //   feedback: 5
    // })
  
    // const onApply=()=>{
    //   setCount(count+1)
    //   setFeedback(5)
    //   setCompState({
    //     ...compState,
    //     feedback:6
    //   })
    // }

    // "[]" is called dependency list
    // useEffect(()=>{
    //     console.log("Initializing")
    // });

    useEffect(()=>{
        console.log("One Time Initialization")
        return()=>{
            console.log("Component Unmounted")
            //can written at any effect hooks for like 'unmount' but only one time
        }
    },[]);

    useEffect(()=>{
        console.log("updating count")
    },[count,feedback]);

    const onApply=()=>{
        setCount(count+1)
      }
  
    return (
      <React.Fragment>
        <Navbar title="DExtER" />
        <h1>Hello World {props.count}</h1>
        <h1>Hello World {count}</h1>
        <button onClick={onApply}>{props.label}</button>
      </React.Fragment>
    )
  }
  export default ActionHooks;
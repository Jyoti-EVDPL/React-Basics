import '../App.css';
import Navbar from '../components/Navbar';
import React,{useState,useEffect} from "react";

function ActionHooks2(props) {
    const [data,setData]=useState(10)
    const [count,setCount] = useState(100);

    useEffect(()=>{
        console.log("Called with data state")
    },[data]);

    
    return (
      <React.Fragment>
        <Navbar title="DExtER" />
        <h1>Hello World {count}</h1>
        <h1>Hello World {data}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setData(data+1)}>Update Data</button>
      </React.Fragment>
    )
  }
  export default ActionHooks2;
//useMemo-to increase the performance
//we write multiple functions but they are not called all time.
//so we need to optimize it for performance
import React, { useMemo } from "react";
import { useState, useEffect } from "react";

function Memo() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiplication = useMemo(function multiply() {
        console.log(add)
        return add * 10;
    },[add])

    return (
        <div className="app">
            <h1>Learning useMemo</h1>
            {multiplication}<br />
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <span>{add}</span>
            <button onClick={() => setMinus(minus - 1)}>Substration</button>
            <span>{minus}</span>
        </div>
    )
}
export default Memo;
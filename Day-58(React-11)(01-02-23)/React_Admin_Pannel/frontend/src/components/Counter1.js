import React, { useEffect } from 'react';

function Counter1({ number }) {
    useEffect(() => {
        console.log("Functional component: Updating...")
        return () => {
            console.log("functional component: Removed")
        }
    }, [number])
    return (
        <h1>{number}</h1>
    )
}

export default Counter1;
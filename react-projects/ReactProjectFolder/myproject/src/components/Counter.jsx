import React,{useState} from 'react'

function Counter() {
    let [counter,setCounter]=useState(1);

    let updateHandler=()=>{
        setCounter(counter+1);
    }
    return (
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={updateHandler}>Update</button>
        </div>
    )
}

export default Counter;

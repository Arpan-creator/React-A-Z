import React,{useState,useEffect} from 'react'

const Counter =()=> {
    const [count, setCount]=useState(0);
    
    useEffect(()=>{
        document.title=`Count: ${count}`;
    },[count]);
  return (
    <div>
        <h2>Counter</h2>
        <p>Current Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
};

export default Counter;
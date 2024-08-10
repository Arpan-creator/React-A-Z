import React,{useState,useEffect} from 'react'

const MouseTrack = () => {
    const [cords,setCords]=useState({x:0,y:0});

    useEffect(()=>{
        const handleMouse=(e)=>{
            setCords({x:e.clientX,y:e.clientY});
        };
        window.addEventListener('mousemove',handleMouse);

        return ()=>{
            window.removeEventListener('mousemove', handleMouse)
        };
    },[]);
    

  return (
    <div>
        <h2>Mouse Tracker</h2>
        <p>Mouse coordinates: X:{cords.x}, Y:{cords.y}</p>
    </div>
  )
}

export default MouseTrack
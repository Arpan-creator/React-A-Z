import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/about');

    };

  return (
    <div>
        <h1> Welcome to Home Page</h1>
        <button onClick={handleClick}>Go to About</button>
    </div>
  )
}

export default Home
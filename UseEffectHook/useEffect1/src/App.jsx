import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './components/Posts';
import MouseTrack from './components/MouseTrack';
import Counter from './components/Counter';

function App() {

  return (
    <div>
     <Posts/>
     <MouseTrack/>
     <Counter/>
    </div>
  );
}

export default App

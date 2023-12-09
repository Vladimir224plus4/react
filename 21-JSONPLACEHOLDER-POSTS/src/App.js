import {useState} from 'react';
import './App.css';
import { useEffect } from 'react';
import Post from './component/Post';
import Posts from './component/Posts';


function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;

import {useState} from 'react'; 
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
const [count, setCount] = useState(0);
const icrementCount = () => {
  setCount(count + 1);
};
const resetCount = () => {
  setCount(0);
};


  return (
    <div className="App">
      <Counter countProps={count} />
      <Button onClick={icrementCount}/>
      <Button onClick={icrementCount}/>
      <Button onClick={icrementCount}/>
      <Button onClick={icrementCount}/>
      { count > 0 && (
        <div>
          <button style={{ backgroundColor: 'lightgreen '}}
          onClick={resetCount}>Reset</button>
          </div>
      )}
    </div>
  );
}

export default App;

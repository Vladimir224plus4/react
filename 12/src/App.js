import {useState} from 'react'; 
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
const [count, setCount] = useState(0);
const icrementCount = () => {
  setCount(count + 1);
};


  return (
    <div className="App">
      <Counter countProps={count} />
      <Button onClick={icrementCount}/>
      <Button onClick={icrementCount}/>
      <Button onClick={icrementCount}/>
      <Button onClick={icrementCount}/>
    </div>
  );
}

export default App;

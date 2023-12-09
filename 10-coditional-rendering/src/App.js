import './App.css';
import PetInfo from './componets/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" years={10000} hasPet />
      <PetInfo animal="dog" years={5} hasPet={false} />
    </div>
  );
}

export default App;

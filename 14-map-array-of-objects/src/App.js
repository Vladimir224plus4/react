import './App.css';
import person from './data/persons';
import Person from './components/person';


function App() {
  return (
    <div className="App">
      {person.map((person) => {
        return <Person key={person.id} {...person} />;
        
      })}
    </div>
  );
}

export default App;

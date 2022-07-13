import logo from './logo.svg';
import './App.css';

function App() {
  let addNumber = (a, b) => (a + b);
  
  let result = addNumber(2, 5);
  
  return (
      
    <div className="App">
      
      <h1>this is a result: {result}</h1>
    </div>
  );
}

export default App;

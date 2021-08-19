import './App.css';
import Button from './components/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const numbers = [0,1,2,3,4,5,6,7,8,9]

  return (
    <div className="App">
      Clicked { count } times!

      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={() => setCount(0)}>Reset count</button>
      <button onClick={() => setCount(count * 10)}>Multiply count by 10</button>
      <button onClick={() => setCount(count / 10)}>Divide count by 10</button>

      <div>
        {numbers.map(number => {
          return (
            <Button 
            text={number} 
            key={number} 
            onClick={() => setCount(count + number)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;

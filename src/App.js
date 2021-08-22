import './App.css';
import { useState } from 'react';

function App() {
  //variables
  const [count, setCount] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [signo, setSigno] = useState('')
  const [numero, setNumero] = useState('');
  const signos = ['+', '-', '*', '/', '='];
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  let numerosUsados = []

  //funciones
  const escribir = number => {
    if(numero === '' && number === 0) {
      return
    }
    setNumero(numero + number);
  }

  const operacion = (signoOp, numero) => {
    const numeroInt = parseInt(numero)
    setNumero('')
    setSigno(signo)
    numerosUsados.push(numeroInt);

    numerosUsados.forEach(numero => {
      if(signoOp === '+') {
        setCount(count + numero)
      } else if(signoOp === '-') {
        setCount(count - numero)
      } else if(signoOp === '*') {
        setCount(count * numero)
      } else if(signoOp === '/') {
        setCount(count / numero)
      } else if(signoOp === '=') {
        setResultado(count)
      } else {
        return
      }
    });

  }


  //estructura
  return (
    <div className="App">
      Resultado: { resultado }
      <div>
        {signos.map(signo => {
          return (
            <button
            key={signo}
            onClick={() => operacion(signo, numero)}
            >
              <h3>{ signo }</h3>
            </button>
          )
        })}
      </div>
      <div>
      Numero: { numero !== '' ? numero : '---' }
        {numbers.map(number => {
          return (
            <button
            key={number} 
            onClick={() => escribir(number)}
            >
              <h3>{ number }</h3>
            </button>
          )
        })}
        <button onClick={() => {
          setNumero('');
          setCount(0);
          setResultado(0);
          }}>
          <h3>CLR</h3>
        </button>
      </div>
    </div>
  );
}

export default App;

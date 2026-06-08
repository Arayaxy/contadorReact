import { Botones } from "./Botones";
import { useState } from 'react'

export const Contador = ({ valor, max, min, step}) => {
 const [count, setCount] = useState(valor)
  return (
    <>
      <h1>Contador</h1>
      <h2>El valor es: {valor}</h2>
      
       <Botones  count={count} setCount={setCount} min={min} max={max} step={step} />
    </>
  );
};





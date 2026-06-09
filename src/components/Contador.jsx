// import { Botones } from "./Botones";
import { useState } from 'react'
import { Botonesv3 } from './Botonesv3';
export const Contador = ({ valorInicial, max, min, step }) => {
  const [count, setCount] = useState(valorInicial)

  return (
    <>

      <h1>Contador</h1>
      <h2>El valor es: {count}</h2>
      {/* <Botones count={count} setCount={setCount} min={min} max={max} step={step} valorInicial={valorInicial} /> */}
      {/* <Botonesv2 count={count} setCount={setCount} min={min} max={max} step={step} valorInicial={valorInicial} /> */}
      <Botonesv3 texto={"Sumar"} accion={"sumar"} count={count} setCount={setCount} min={min} max={max} step={step} valorInicial={valorInicial} />
      <Botonesv3 texto={"Reset"} accion={"reset"} count={count} setCount={setCount} min={min} max={max} step={step} valorInicial={valorInicial} />
      <Botonesv3 texto={"Restar"} accion={"restar"} count={count} setCount={setCount} min={min} max={max} step={step} valorInicial={valorInicial} />
    </>
  );
};



export const Botonesv2 = ({ count, setCount, min, max, step, valorInicial }) => {
    const handleSumRestRes = (accion) => {
        if (accion === "sumar") {
            if (count + step <= max) {
                setCount(count + step)
            }
        } else if (accion === "restar") {
            if (count - step >= min) { 
                setCount(count - step)
            }
        } else if (accion === "reset") {
            setCount(valorInicial)
        }
    }
    return (
        <>

            <button
                onClick={() => handleSumRestRes("sumar")}>
                Sumar
            </button>
            <button onClick={() => handleSumRestRes ("reset")}>
                reset
            </button>
            <button onClick={() => handleSumRestRes ("restar")}>
                Restar
            </button>

        </>
    )
}

export const Botonesv3 = ({ texto, accion, count, setCount, min, max, step, valorInicial }) => {
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
                onClick={() => handleSumRestRes(accion)}>
                {texto}
            </button>

        </>
    )
}

export const Botones = ({ count, setCount, min, max, step, valorInicial }) => {
    const handleSum = () => {
        if (count + step <= max) {
            setCount(count + step)
        }
    }

    const handleRest = () => {
        if (count - step >= min) {
            setCount(count - step)
        }
    }

    const handleReset = () => {
        setCount(valorInicial)
    }

    return (
        <>
        
            <button
                onClick={handleSum}>
                Sumar
            </button>
            <button onClick={handleReset}>
                reset
            </button>
            <button onClick={handleRest}>
                Restar
            </button>

        </>
    )
}

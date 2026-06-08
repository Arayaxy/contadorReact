export const Botones = ({ count, setCount, min, max, step }) => {
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
        setCount(0)
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

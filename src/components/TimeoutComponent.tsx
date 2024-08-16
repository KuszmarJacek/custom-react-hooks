import { useState } from "react"
import useTimeout from "../hooks/useTimeout"

function TimeoutComponent() {
    const [count, setCount] = useState(10)
    const [reset, clear] = useTimeout(() => setCount(0), 1000)

    return(
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment value</button>
            <button onClick={() => reset()}>Reset timeout</button>
            <button onClick={() => clear()}>Clear timeout</button>
        </>
    )
}

export default TimeoutComponent
import { useState } from "react"
import useDebounce from "../hooks/useDebounce"

function DebounceComponent() {
    const [count, setCount] = useState(0)
    useDebounce(() => alert(count), 1000, [count])

    return(
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment with debounce alert after 1 second</button>
        </>
    )
}

export default DebounceComponent
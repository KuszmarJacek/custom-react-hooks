import { useState } from "react"
import useUpdateEffect from "../hooks/useUpdateEffect"

function UpdateEffectComponent() {
    const [count, setCount] = useState(0)
    useUpdateEffect(() => alert(count), [count])

    return(
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment render count</button>
        </>
    )
}

export default UpdateEffectComponent
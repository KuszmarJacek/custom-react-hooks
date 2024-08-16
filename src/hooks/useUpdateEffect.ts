import { useEffect, useRef } from "react"

// This hook doesn't work in react18 due to strict mode and mounting of a componant twice
function useUpdateEffect(fn: (...args : any[]) => any, dependencies: any) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return fn()
    }, dependencies)
}

export default useUpdateEffect
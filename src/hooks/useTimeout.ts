import { useCallback, useEffect, useRef } from "react"

// Function fn needs to take any number of arguments of any type and return anything so this is fine and linter is screaming for no reason
// eslint-disable-next-line
function useTimeout(fn: (...args : any[]) => any, delay: number): [() => void, () => void] {
    const fnRef = useRef(fn)
    const timeoutRef = useRef<number>()

    // handle a situation in which fn changes
    useEffect(() => {
        fnRef.current = fn
    }, [fn])

    const runFnAfterDelay = useCallback(() => {
        timeoutRef.current = setTimeout(() => fnRef.current(), delay)
    }, [delay])

    const clearTimeoutValue = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    useEffect(() => {
        runFnAfterDelay()
        return clearTimeoutValue
    }, [delay, runFnAfterDelay, clearTimeoutValue])

    const resetTimeoutValue = useCallback(() => {
        clearTimeoutValue()
        runFnAfterDelay()
    }, [clearTimeoutValue, runFnAfterDelay])

    return [ resetTimeoutValue, clearTimeoutValue ] as const
}

export default useTimeout
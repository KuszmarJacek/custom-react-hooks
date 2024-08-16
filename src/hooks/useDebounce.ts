
// any works here

import { useEffect } from "react"
import useTimeout from "./useTimeout"

// eslint-disable-next-line
function useDebounce(fn: (...args : any[]) => any, delay: number, dependencies: any) {
    const [reset, clear] = useTimeout(fn, delay)

    useEffect(reset, [...dependencies, reset])
    // ignore the warning, it's fine, run once
    useEffect(clear, [])
}

export default useDebounce
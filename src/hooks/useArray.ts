import { useState } from "react"

function useArray<T extends any>(initValue: T[]) {
    const [array, setArray] = useState(initValue)

    const push = (element: T) => {
        setArray(a => [...a, element])
    }

    const unshift = (element: T) => {
        setArray(a => [element, ...a])
    }

    const filter = (fn: (...args : any[]) => any) => {
        setArray(a => a.filter(fn))
    }

    const update = (index: number, element: T) => {
        setArray(a => [...a.slice(0, index), element, ...a.slice(index + 1, a.length)])
    }

    const remove = (index: number) => {
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }

    const clear = () => {
        setArray([])
    }

    return [array, setArray, push, unshift, filter, update, remove, clear] as const
}

export default useArray
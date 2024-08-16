import useArray from "../hooks/useArray"

function ArrayComponent() {
    const [array, setArray, push, unshift, filter, update, remove, clear] = useArray([1, 2, 3, 4, 5])

    return(
        <>
            <div>{array.join(",")}</div>
            <button onClick={() => push(7)}>Add 7 to the back</button>
            <button onClick={() => unshift(2)}>Add 2 to the front</button>
            <button onClick={() => update(1, 9)}>Change second element to 9</button>
            <button onClick={() => remove(1)}>Remove second element</button>
            <button onClick={() => filter(n => n < 4)}>Filter values below 4</button>
            <button onClick={() => setArray([1, 2])}>Set the array to [1, 2]</button>
            <button onClick={() => clear()}>Empty the array</button>
        </>
    )
}

export default ArrayComponent
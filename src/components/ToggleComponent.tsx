import useToggle from "../hooks/useToggle";

function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)

    return (
        <>
            <div>{value.toString()}</div>
            <button onClick={() => toggleValue()}>Toggle value</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </>
    )
}

export default ToggleComponent
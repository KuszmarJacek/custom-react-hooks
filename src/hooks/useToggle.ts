import { useState } from "react";

function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState<boolean>(defaultValue)
    
    const toggleValue = (initValue?: boolean) => {
        if (typeof initValue !== 'undefined') {
            setValue(initValue)
            return
        }
        setValue((currentValue) => currentValue = !currentValue)
    }

    return [value, toggleValue] as const
}

export default useToggle
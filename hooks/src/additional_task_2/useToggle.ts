import {useState} from "react";


export function useToggle(defaultValue?: string[] | undefined) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value?: string | undefined) {
        if (defaultValue === undefined) {
            setValue((prevState) => !prevState)
            return
        }

        if (value != undefined) {
            setValue(value)
        } else {
            setValue(prevState => {
                const index = defaultValue.indexOf(prevState)
                if (index === -1) {
                    return defaultValue[0]
                } else  {
                    if ( defaultValue[index + 1] === undefined)  {
                        return defaultValue[0]
                    }
                    return defaultValue[index + 1]
                }
            })
        }
    }


    return [value, toggleValue]
}
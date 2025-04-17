import {useToggle} from "./useToggle.ts";
export default function AdditionalTask2() {

    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
    const [booleanValue, toggleBoolean] = useToggle()

    return (
        <div>
            <header>
                <p>{value?.toString()}</p>
                <p>{booleanValue?.toString()}</p>
                <button onClick={() => toggle()}>Toggle</button>
                <button onClick={() => toggle('dark')}>Toggle value</button>
                <button onClick={() => toggleBoolean()}>Toggle boolean</button>
            </header>
        </div>
    )
}
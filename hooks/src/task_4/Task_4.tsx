import {useViewportSize} from "./useViewportSize.ts";


export default function Task_4() {
    const { height, width } = useViewportSize();

    return (
        <>
            Width: {width}, height: {height}
        </>
    );
}
import {useState} from "react";
import {useWindowEvent} from "./useWindowEvent.ts";

export function useViewportSize() {
    const [height, setHeight] = useState(document.documentElement.clientHeight)
    const [width, setWidth] = useState(document.documentElement.clientWidth)

    const handleResize = () => {
        setHeight(document.documentElement.clientHeight)
        setWidth(document.documentElement.clientWidth)
    }

    useWindowEvent('resize', handleResize, null)

    return {height, width}
}
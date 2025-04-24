import {useState, useCallback, useEffect} from "react";
import {useWindowEvent} from "./useWindowEvent.ts";

export function useViewportSize() {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setHeight(document.documentElement.clientHeight)
        setWidth(document.documentElement.clientWidth)
    }, [])

    const handleResize = useCallback(() => {
        setHeight(document.documentElement.clientHeight)
        setWidth(document.documentElement.clientWidth)
    }, [])

    useWindowEvent('resize', handleResize, null)

    return {height, width}
}
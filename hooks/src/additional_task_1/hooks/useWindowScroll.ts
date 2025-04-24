import {useState, useCallback} from "react";
import {useWindowEvent} from "./useWindowEvent.ts";

export function useWindowScroll() {
    const [scroll, setScroll] = useState({x: 0, y: 0})
    const scrollTo = (coordinates: {x?: number, y?: number}) => {
        window.scrollTo(coordinates.x || 0, coordinates.y || 0);
    }

    const handleScroll = useCallback(() => {
        setScroll({x: window.scrollX, y: window.scrollY})
    }, [])

    useWindowEvent('scroll', handleScroll, null)

    return [scroll, scrollTo]
}
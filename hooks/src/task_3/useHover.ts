import {useEffect, useRef, useState} from "react";


export function useHover() {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setHovered(document.elementFromPoint(e.clientX, e.clientY) === ref.current)
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return {hovered, ref}
}
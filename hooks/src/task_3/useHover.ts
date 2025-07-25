import {useEffect, useRef, useState} from "react";


export function useHover<T extends HTMLElement>() {
    const ref = useRef<T>(null)
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mouseenter', handleMouseEnter);
            ref.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', handleMouseEnter);
                ref.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return {hovered, ref}
}
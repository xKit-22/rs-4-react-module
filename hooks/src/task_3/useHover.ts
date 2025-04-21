import {useEffect, useRef, useState} from "react";


export function useHover<T extends HTMLElement>() {
    const ref = useRef<T>(null)
    const [hovered, setHovered] = useState(false);

    useEffect(() => {

        if (ref.current) {
            ref.current.addEventListener('mouseenter', () => setHovered(true));
            ref.current.addEventListener('mouseleave', () => setHovered(false));
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', () => setHovered(true));
                ref.current.removeEventListener('mouseleave', () => setHovered(false));
            }
        };
    }, []);

    return {hovered, ref}
}
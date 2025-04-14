import { useHover } from './useHover';

export default function Task_3() {
    const { hovered, ref } = useHover();

    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}
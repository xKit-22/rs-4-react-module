import { useHover } from './useHover';

export default function Task_3() {
    const { hovered, ref } = useHover<HTMLDivElement>();

    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}
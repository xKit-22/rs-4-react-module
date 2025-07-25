import {useWindowScroll} from "./hooks/useWindowScroll.ts";


export default function AdditionalTask1() {
    const [scroll, scrollTo] = useWindowScroll();

    //Подскажи, как правильно прописать типизацию для scroll и scrollTo
    return (
        <div style={{height: '1000px', width: '2000px'}}>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
    );
}
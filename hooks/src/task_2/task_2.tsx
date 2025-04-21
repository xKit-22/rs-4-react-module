import {useLocalStorage} from './useLocalStorage'

export default function Task_2() {
    const [value, { setItem, removeItem }] = useLocalStorage('ls_key');

    return (
        <div>
            <p>Значение из LocalStorage: {value}</p>
            <div>
                <button onClick={() => setItem('111')}>Задать значение</button>
                <button onClick={removeItem}>Удалить значение</button>
            </div>
        </div>
    );
}
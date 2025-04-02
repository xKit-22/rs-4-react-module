import { useFetch } from './useFetch';

export default function Task_1() {
    const {
        data,
        isLoading,
        error,
        refetch
    } = useFetch('https://dummyjson.com/users');

    return (
        <div>
            <div>
                <button onClick={() => refetch({
                    params: {
                        _limit: 3
                    }
                })}>
                    Перезапросить
                </button>
            </div>
            {isLoading && 'Загрузка...'}
            {error && `Произошла ошибка: ${error}`}
            {data && !isLoading && data.map(item => <div key={item.id}>{`${item.firstName} ${item.lastName}`}</div>) }
        </div>
    );
}
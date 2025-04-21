import {useFetch} from './useFetch';
import {IResponseData, IUser} from "./interfaces.ts";

export default function Task_1() {
    const {
        data,
        isLoading,
        error,
        refetch
    } = useFetch<IResponseData>('https://dummyjson.com/users');

    console.log(data)
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
            {data && !isLoading && data.users?.map((item: IUser) => <div
                key={item.id}>{`${item.firstName} ${item.lastName}`}</div>)}
        </div>
    );
}
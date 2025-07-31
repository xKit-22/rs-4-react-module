import { useEffect, useState} from "react";
import axios from "axios";

export function useSearch(query: string, pageNumber: number, url: string) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setData([])
    }, [query])

    useEffect(() => {
        let cancel: () => void;

        setLoading(true)
        setError(false)

        axios.get(url, {
            params: { name: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        })
            .then((res) => {
                setData(prevState => [...prevState, ...res.data.results]);
                setHasMore(res.data.results.length > 0)
                setLoading(false);
            })
            .catch(e => {
                if (axios.isCancel(e)) {
                    return
                }
                setLoading(false);
                setError(true)
                console.error(e)
            })


        return () => {
            if (cancel) cancel();
        };
    }, [query, pageNumber, url])
    return {
        loading,
        error,
        data,
        hasMore
    }
}
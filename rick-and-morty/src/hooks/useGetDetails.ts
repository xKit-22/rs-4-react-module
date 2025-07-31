import {useEffect, useState} from "react";
import axios from "axios";

export function useGetDetails(url: string) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)


    useEffect(() => {
        setLoading(true)
        setError(false)

        axios.get(url)
            .then((res) => {
                setData(res);
                console.log(res)
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
                setError(true)
                console.error(e)
            })
    }, [url])
    return {
        loading,
        error,
        data
    }
}
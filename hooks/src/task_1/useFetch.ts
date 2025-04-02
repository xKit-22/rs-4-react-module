import {useEffect, useState} from "react";


export function useFetch(url: string) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState([])

    const fetchUsers = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            setIsLoading(false)
            setData(data.users)
        } catch (er) {
            setIsLoading(false)
            setError(er)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [url])

    const refetch = (params: {params: { _limit: number }}) => {
        for (let i = 0; i < params.params._limit; i++) {
            fetchUsers()
            if (!error) {
                break;
            }
        }
    }


    return {data, isLoading, error, refetch}
}
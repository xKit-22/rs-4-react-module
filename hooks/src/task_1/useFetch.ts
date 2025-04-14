import {useEffect, useState} from "react";


export function useFetch<T>(url: string) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [data, setData] = useState<T | null>(null)

    const fetchData = async (options?: {params: { _limit: number }}) => {
        const _limit: number | undefined = options?.params._limit
        try {
            setIsLoading(true)
            setError(null)
            const response = await fetch(`${url}${_limit ? `?limit=${_limit}` : ''}`)
            const data = await response.json()
            setIsLoading(false)
            setData(data)
        } catch (er) {
            setIsLoading(false)
            setError(er as Error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    const refetch = (options: {params: { _limit: number }}) => {
        fetchData(options)
    }


    return {data, isLoading, error, refetch}
}
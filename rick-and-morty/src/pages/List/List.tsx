import {Link} from "react-router-dom";
import css from './list.module.scss'
import {IData} from "../../types/interfaces.ts";
import {ErrorBoundary} from '../../helpers/ErrorBoundary.tsx'
import {useSearch} from "../../hooks/useSearch.ts";
import {ChangeEvent, useCallback, useRef, useState} from "react";

export default function List({url}: { url: string }) {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const {
        loading,
        error,
        data,
        hasMore
    } = useSearch(query, pageNumber, url)

    const observer = useRef<IntersectionObserver | null>(null)
    const lastNodeRef = useCallback((node: HTMLLIElement | null) => {
        if (loading) return
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevState => prevState + 1)
            }
        })

        if (node) {
            observer.current.observe(node)
        }
    }, [loading, hasMore])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    return (
        <ErrorBoundary>
            <input type={"text"} onChange={handleChange}/>
            <ul>
                {data.map((el: IData, index: number) => (
                    <li
                        className={css.li}
                        key={el.id}
                        ref={data.length === index + 1 ? lastNodeRef : null}
                    >
                        <Link to={`${el.id}`}>{el.name}</Link>
                    </li>
                ))}
            </ul>
            {error && <div className={css.error}>Error</div>}
            {loading && <div className={css.loading}>Loading...</div>}
        </ErrorBoundary>
    )
}
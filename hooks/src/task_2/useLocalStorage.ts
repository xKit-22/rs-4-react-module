import {useEffect, useState} from "react"

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

export type UseLocalStorage = [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: (key: string) => void;
    },
];

export function useLocalStorage (key: string): UseLocalStorage {
    const [value, setValue] = useState(JSON.parse( localStorage.getItem(key)|| "[]"))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    const removeItem = (key: string) => {
        setValue(null)
        localStorage.removeItem(key)
    }

    return [value, {setItem: setValue, removeItem}]
}
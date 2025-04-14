import {useEffect, useState} from "react"

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

export type UseLocalStorage = [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: () => void;
    },
];

export function useLocalStorage (key: string): UseLocalStorage {
    const [value, setValue] = useState(() => JSON.parse( localStorage.getItem(key) || "null"))

    const addItem = (key: string) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    useEffect(() => {
        addItem(key)
    }, [value])

    const removeItem = () => {
        setValue(null)
        localStorage.removeItem(key)
    }

    return [value, {setItem: setValue, removeItem}]
}
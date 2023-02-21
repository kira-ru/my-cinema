import {useEffect, useState} from "react";

export const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        let timeout = setTimeout(() => setDebouncedValue(value), 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])

    return debouncedValue
}
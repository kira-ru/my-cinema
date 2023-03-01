import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@hooks/useDebounce'

import { MoviesServies } from '@services/moviesServies'

export const useSearch = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const debouncedValue = useDebounce(inputValue, 500)

    const { isSuccess, data } = useQuery(
        ['fetch movies', debouncedValue],
        () => MoviesServies.getAll(debouncedValue),
        {
            select: ({ data }) => data,
            enabled: !!debouncedValue,
        },
    )

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return { data, isSuccess, inputValue, handleChange }
}
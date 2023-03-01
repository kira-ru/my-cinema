import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@components/AdminTable/TableItem/TableItem'

import { useDebounce } from '@hooks/useDebounce'

import { MoviesServies } from '@services/MoviesServies'

import { toastError } from '@utils/api/toast-error'
import { convertMongoDate } from '@utils/date/convertMongoDate'

import { getAdminUrl } from '../../../../helpers/getUrls'
import {UserServices} from "@services/UserServices";
import {getGenresList, getGenresListEach} from "@utils/movie/getGenres";

export const useMovies = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    let debouncedValue = useDebounce(searchTerm, 500)

    const { refetch, isLoading, data } = useQuery(
        ['movies list', debouncedValue],
        () => MoviesServies.getAll(debouncedValue),
        {
            select: ({ data }) =>
                data.map((movie): ITableItem => ({
                    _id: movie._id,
                    editUrl: getAdminUrl(`/movies/edit/${movie._id}`),
                    fields: [movie.title, getGenresList(movie.genres), String(movie.rating)],
                })),
            onError: err => toastError(err, 'User list'),
        },
    )

    const { mutateAsync: deleteAsync } = useMutation(
        'delete movie',
        (id: string) => MoviesServies.delete(id),
        {
            onError: error => toastError(error, 'movie delete'),
            onSuccess: () => {
                toastr.success('Delete movie', 'delete was successful')
                refetch()
            },
        },
    )

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return useMemo(
        () => ({ isLoading, data, searchTerm, handleSearch, deleteAsync }),
        [searchTerm, data, deleteAsync],
    )
}

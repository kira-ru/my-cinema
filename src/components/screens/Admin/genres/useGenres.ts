import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@components/AdminTable/TableItem/TableItem'

import { useDebounce } from '@hooks/useDebounce'

import { toastError } from '@utils/api/toast-error'

import { getAdminUrl } from '../../../../helpers/getUrls'
import {GenreServies} from "@services/GenreServies";

export const useGenres = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    let debouncedValue = useDebounce(searchTerm, 500)

    const { refetch, isLoading, data } = useQuery(
        ['genre list', debouncedValue],
        () => GenreServies.getAll(debouncedValue),
        {
            select: ({ data }) =>
                data.map((genre): ITableItem => ({
                    _id: genre._id,
                    editUrl: getAdminUrl(`/genres/edit/${genre._id}`),
                    fields: [genre.name, genre.slug],
                })),
            onError: err => toastError(err, 'User list'),
        },
    )

    const { mutateAsync: deleteAsync } = useMutation(
        'delete genre',
        (id: string) => GenreServies.delete(id),
        {
            onError: error => toastError(error, 'User delete'),
            onSuccess: () => {
                toastr.success('Delete genre', 'delete was successful')
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

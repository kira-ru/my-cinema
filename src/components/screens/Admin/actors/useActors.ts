import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@components/AdminTable/TableItem/TableItem'

import { useDebounce } from '@hooks/useDebounce'

import { ActorsServies } from '@services/ActorsServies'

import { toastError } from '@utils/api/toast-error'

import { getAdminUrl } from '../../../../helpers/getUrls'

export const useActors = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    let debouncedValue = useDebounce(searchTerm, 500)

    const { refetch, isLoading, data } = useQuery(
        ['user list', debouncedValue],
        () => ActorsServies.getAll(debouncedValue),
        {
            select: ({ data }) =>
                data.map((actor): ITableItem => ({
                    _id: actor._id,
                    editUrl: getAdminUrl(`/actors/edit/${actor._id}`),
                    fields: [actor.name, String(actor.countMovies)],
                })),
            onError: err => toastError(err, 'User list'),
        },
    )

    const { mutateAsync: deleteAsync } = useMutation(
        'delete actor',
        (id: string) => ActorsServies.delete(id),
        {
            onError: error => toastError(error, 'User delete'),
            onSuccess: () => {
                toastr.success('Delete actor', 'delete was successful')
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

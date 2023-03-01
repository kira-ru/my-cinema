import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@screens/Admin/users/AdminTable/TableItem/TableItem'

import { useDebounce } from '@hooks/useDebounce'

import { UserServices } from '@services/UserServices'

import { toastError } from '@utils/api/toast-error'
import { convertMongoDate } from '@utils/date/convertMongoDate'

import { getAdminUrl } from '../../../../helpers/getUrls'

export const useUsers = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    let debouncedValue = useDebounce(searchTerm, 500)

    const { refetch, isLoading, data } = useQuery(
        ['user list', debouncedValue],
        () => UserServices.getAll(debouncedValue),
        {
            select: ({ data }) =>
                data.map((user): ITableItem => ({
                    _id: user._id,
                    editUrl: getAdminUrl(`/users/edit/${user._id}`),
                    email: user.email,
                    createAt: convertMongoDate(user.createdAt),
                })),
            onError: err => toastError(err, 'User list'),
        },
    )

    const { mutateAsync: deleteAsync } = useMutation(
        'delete user',
        (id: string) => UserServices.delete(id),
        {
            onError: error => toastError(error, 'User delete'),
            onSuccess: () => {
                toastr.success('Delete user', 'delete was successful')
                refetch()
            },
        },
    )

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return useMemo(
        () => ({ isLoading, data, searchTerm, handleSearch, deleteAsync }),
        [searchTerm, data, deleteAsync]
    )
}

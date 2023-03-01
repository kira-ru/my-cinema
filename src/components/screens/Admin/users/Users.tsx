import { FC } from 'react'

import { AdminHeader } from '@screens/Admin/users/AdminHeader/AdminHeader'
import { AdminTable } from '@screens/Admin/users/AdminTable/AdminTable'
import { useUsers } from '@screens/Admin/users/useUsers'

import { Heading } from '@ui/Heading/Heading'
import { AdminNavigation } from '@ui/admin/AdminNavigation/AdminNavigation'

import { Meta } from '@utils/meta/Meta'

export const Users: FC = () => {
    const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useUsers()

    return (
        <Meta title={'Admin users info'}>
            <AdminNavigation />
            <Heading title="Users information" />
            <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
            <AdminTable deleteHandler={deleteAsync} items={data || []} isLoading={isLoading} />
        </Meta>
    )
}

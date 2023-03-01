import { FC } from 'react'

import { useUsers } from '@screens/Admin/users/useUsers'

import { AdminHeader } from '@components/AdminHeader/AdminHeader'
import { AdminTable } from '@components/AdminTable/AdminTable'

import { Heading } from '@ui/Heading/Heading'
import { AdminNavigation } from '@ui/admin/AdminNavigation/AdminNavigation'

import { Meta } from '@utils/meta/Meta'

export const UserList: FC = () => {
    const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useUsers()

    return (
        <Meta title={'Admin users info'}>
            <AdminNavigation />
            <Heading title="Users information" />
            <AdminHeader
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                headerFields={['Email', 'Registred']}
            />
            <AdminTable deleteHandler={deleteAsync} items={data || []} isLoading={isLoading} />
        </Meta>
    )
}

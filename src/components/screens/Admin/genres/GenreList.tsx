import { FC } from 'react'

import { AdminHeader } from '@components/AdminHeader/AdminHeader'
import { AdminTable } from '@components/AdminTable/AdminTable'

import { Heading } from '@ui/Heading/Heading'
import { AdminNavigation } from '@ui/admin/AdminNavigation/AdminNavigation'

import { Meta } from '@utils/meta/Meta'
import {useGenres} from "@screens/Admin/genres/useGenres";

export const GenreList: FC = () => {
    const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useGenres()

    return (
        <Meta title={'Admin users info'}>
            <AdminNavigation />
            <Heading title="Users information" />
            <AdminHeader
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                headerFields={['Name', 'slug']}
            />
            <AdminTable deleteHandler={deleteAsync} items={data || []} isLoading={isLoading} />
        </Meta>
    )
}

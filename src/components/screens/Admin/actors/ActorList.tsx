import { FC } from 'react'

import { AdminHeader } from '@components/AdminHeader/AdminHeader'
import { AdminTable } from '@components/AdminTable/AdminTable'

import { Heading } from '@ui/Heading/Heading'
import { AdminNavigation } from '@ui/admin/AdminNavigation/AdminNavigation'

import { Meta } from '@utils/meta/Meta'
import {useActors} from "@screens/Admin/actors/useActors";

export const ActorList: FC = () => {
    const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useActors()

    return (
        <Meta title={'Admin users info'}>
            <AdminNavigation />
            <Heading title="Users information" />
            <AdminHeader
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                headerFields={['Name', 'Movie count']}
            />
            <AdminTable deleteHandler={deleteAsync} items={data || []} isLoading={isLoading} />
        </Meta>
    )
}

import { FC } from 'react'

import { useMovies } from '@screens/Admin/movies/useMovies'

import { AdminHeader } from '@components/AdminHeader/AdminHeader'
import { AdminTable } from '@components/AdminTable/AdminTable'

import { Heading } from '@ui/Heading/Heading'
import { AdminNavigation } from '@ui/admin/AdminNavigation/AdminNavigation'

import { Meta } from '@utils/meta/Meta'

export const MovieList: FC = () => {
    const { data, isLoading, searchTerm, handleSearch, deleteAsync } = useMovies()

    return (
        <Meta title={'Admin movies info'}>
            <AdminNavigation />
            <Heading title="Movies information" />
            <AdminHeader
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                headerFields={['Title', 'Genres', 'Rating']}
            />
            <AdminTable deleteHandler={deleteAsync} items={data || []} isLoading={isLoading} />
        </Meta>
    )
}

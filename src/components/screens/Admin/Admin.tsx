import { FC } from 'react'

import { Statistic } from '@screens/Admin/home/statistic/Statistic'

import { Heading } from '@ui/Heading/Heading'
import { AdminNavigation } from '@ui/admin/AdminNavigation/AdminNavigation'

import { Meta } from '@utils/meta/Meta'

export const Admin: FC = () => {
    return (
        <Meta title={'Admin panel'}>
            <AdminNavigation />
            <Heading title="Some statistic" />
            <Statistic />
        </Meta>
    )
}

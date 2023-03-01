import { FC } from 'react'

import { INavItem, NavItem } from '@ui/admin/AdminNavigation/NavItem'

import {getAdminHomeUrl, getAdminUrl} from '../../../../helpers/getUrls'

import styles from './adminNavigation.module.scss'

const ADMIN_MENU_ITEMS: INavItem[] = [
    { title: 'Statistic', link: getAdminHomeUrl() },
    { title: 'Users', link: getAdminUrl('/users') },
    { title: 'Movies', link: getAdminUrl('/movies') },
    { title: 'Actors', link: getAdminUrl('/actors') },
    { title: 'Genres', link: getAdminUrl('/genres') },
]

export const AdminNavigation: FC = () => {
    return (
        <nav className={styles.wrapper}>
            <ul>
                {ADMIN_MENU_ITEMS.map(item => (
                    <NavItem item={item} />
                ))}
            </ul>
        </nav>
    )
}

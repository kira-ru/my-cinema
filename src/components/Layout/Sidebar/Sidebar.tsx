import { FC } from 'react'

import { Search } from '@components/Layout/Sidebar/componets/Search/Search'

import styles from './sidebar.module.scss'

export const Sidebar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Search />
        </div>
    )
}

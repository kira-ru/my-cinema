import { FC } from 'react'

import { Search } from '@components/Layout/Sidebar/componets/Search/Search'

import styles from './sidebar.module.scss'
import {PopularMovies} from "@components/Layout/Sidebar/componets/PopularMovies/PopularMovies";

export const Sidebar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Search />
            <PopularMovies/>
        </div>
    )
}

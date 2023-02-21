import { FC } from 'react'

import styles from './navigation.module.scss'
import {Logo} from "@components/Layout/Navigation/components/Logo";
import {Menu} from "@components/Layout/Navigation/components/Menu/Menu";
import {GENERALS, MAIN_MENU} from "@components/Layout/Navigation/components/Menu/menu.data";
import {GenreMenu} from "@components/Layout/Navigation/components/Menu/genres/GenreMenu";

export const Navigation: FC = () => {
    return <div className={styles.wrapper}>
        <Logo/>
        <Menu menu={MAIN_MENU}/>
        <GenreMenu/>
        <Menu menu={GENERALS}/>
    </div>
}

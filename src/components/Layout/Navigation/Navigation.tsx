import { FC } from 'react'

import styles from './navigation.module.scss'
import {Logo} from "@components/Layout/Navigation/components/Logo";
import {Menu} from "@components/Layout/Navigation/components/Menu/Menu";
import { MAIN_MENU} from "@components/Layout/Navigation/components/Menu/menu.data";
import {GenreMenu} from "@components/Layout/Navigation/components/Menu/Genres/GenreMenu";
import {AuthMenu} from "@components/Layout/Navigation/components/Menu/AuthMenu/AuthMenu";

export const Navigation: FC = () => {
    return <div className={styles.wrapper}>
        <Logo/>
        <Menu menu={MAIN_MENU} classes='my-7'/>
        <GenreMenu/>
        <AuthMenu/>
    </div>
}

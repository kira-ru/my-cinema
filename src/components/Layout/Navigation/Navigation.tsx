import { FC } from 'react'

import { Logo } from '@components/Layout/Navigation/components/Logo'
import { AuthMenu } from '@components/Layout/Navigation/components/Menu/AuthMenu/AuthMenu'
import { GenreMenu } from '@components/Layout/Navigation/components/Menu/Genres/GenreMenu'
import { Menu } from '@components/Layout/Navigation/components/Menu/Menu'
import { MAIN_MENU } from '@components/Layout/Navigation/components/Menu/menu.data'

import styles from './navigation.module.scss'

export const Navigation: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <Menu menu={MAIN_MENU} classes="my-7" />
            <GenreMenu />
            <AuthMenu />
        </div>
    )
}

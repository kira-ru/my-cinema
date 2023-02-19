import { FC } from 'react'

import { MenuItem } from '@components/Layout/Navigation/Menu/MenuItem'
import { LogOutButton } from '@components/Layout/Navigation/Menu/auth/LogOutButton'
import { IMenu } from '@components/Layout/Navigation/Menu/menu.types'

import styles from './menu.module.scss'

export const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.items}>
                {items.length ?  items.map(item => <MenuItem item={item}/>) : <LogOutButton />}
            </ul>
        </div>
    )
}

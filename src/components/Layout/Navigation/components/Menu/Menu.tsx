import { FC } from 'react'

import { MenuItem } from '@components/Layout/Navigation/components/Menu/MenuItem'
import { LogOutButton } from '@components/Layout/Navigation/components/Menu/auth/LogOutButton'
import { IMenu } from '@components/Layout/Navigation/components/Menu/menu.types'

import styles from './menu.module.scss'

export const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.items}>
                {items.length ? items.map(item => <MenuItem key={item.title} item={item} />) : <LogOutButton />}
            </ul>
        </div>
    )
}

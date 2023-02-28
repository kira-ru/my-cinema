import { FC } from 'react'

import { MenuItem } from '@components/Layout/Navigation/components/Menu/MenuItem'
import { IMenu } from '@components/Layout/Navigation/components/Menu/menu.types'

import styles from './menu.module.scss'
import cn from "classnames";

export const Menu: FC<{ menu: IMenu, classes?: string }> = ({ menu: { items, title }, classes }) => {
    return (
        <div className={cn(styles.wrapper, classes)}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.items}>
                {items.length && items.map(item => <MenuItem key={item.title} item={item} />)}
            </ul>
        </div>
    )
}

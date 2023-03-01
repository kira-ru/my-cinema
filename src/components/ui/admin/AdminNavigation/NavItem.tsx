import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './adminNavigation.module.scss'

export interface INavItem {
    title: string;
    link: string;
}

export const NavItem: FC<{ item: INavItem }> = ({ item }) => {
    const { asPath } = useRouter()
    console.log(asPath, item.link)
    return (
        <li className={styles.item}>
            <Link
                href={item.link}
                className={cn(styles.link, { [styles.active]: asPath === item.link })}
            >
                <span>{item.title}</span>
            </Link>
        </li>
    )
}

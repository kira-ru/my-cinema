import React, { FC } from 'react'

import { Navigation } from '@components/Layout/Navigation/Navigation'
import { Sidebar } from '@components/Layout/Sidebar/Sidebar'

import styles from './layout.module.scss'

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Navigation />
            <div className={styles.main}>{children}</div>
            <Sidebar />
        </div>
    )
}

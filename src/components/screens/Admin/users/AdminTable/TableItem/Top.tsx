import cn from 'classnames'
import { FC } from 'react'

import styles from './tableItem.module.scss'

export const Top: FC = () => {
    return <div className={cn(styles.item, styles.top)}>
        <div>Email</div>
        <div>Date register</div>
        <div>Actions</div>
    </div>
}

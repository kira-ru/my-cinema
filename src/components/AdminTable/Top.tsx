import cn from 'classnames'
import { FC } from 'react'

import styles from './TableItem/tableItem.module.scss'

export const Top: FC<{ headerFields: string[] }> = ({ headerFields }) => {
    return (
        <div className={cn(styles.item, styles.top)}>
            {headerFields.map(field => (
                <div>{field}</div>
            ))}
            <div>Actions</div>
        </div>
    )
}

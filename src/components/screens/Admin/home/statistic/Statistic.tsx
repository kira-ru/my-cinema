import { FC } from 'react'

import { Counter } from '@screens/Admin/home/statistic/Counter'
import { Popular } from '@screens/Admin/home/statistic/Popular'

import styles from '../../admin.module.scss'

export const Statistic: FC = () => {
    return (
        <section className={styles.statistics}>
            <Counter />
            <Popular />
        </section>
    )
}

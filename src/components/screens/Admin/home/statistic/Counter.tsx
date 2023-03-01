import { FC } from 'react'
import { useQuery } from 'react-query'

import { SkeletonLoader } from '@ui/SkeletonLoader/SkeletonLoader'

import { AdminServies } from '@services/AdminServies'

import styles from '../../admin.module.scss'
import cn from "classnames";

export const Counter: FC = () => {
    const { isLoading, data } = useQuery('get count of users', () =>
        AdminServies.getCountUsers(),
    )

    return (
        <div className={cn(styles.counter, styles.block)}>
                {isLoading ? (
                    <SkeletonLoader />
                ) : (
                    <div>
                        <p className={styles.number}>{data}</p>
                        <div className={styles.description}>users</div>
                    </div>
                )}
        </div>
    )
}

import { FC } from 'react'

import { ITableItem, TableItem } from '@components/AdminTable/TableItem/TableItem'
import { Top } from '@components/AdminTable/Top'

import { SkeletonLoader } from '@ui/SkeletonLoader/SkeletonLoader'

import styles from './adminTable.module.scss'

interface AdminTableProps {
    items: ITableItem[];
    deleteHandler: (userId: string) => void;
    isLoading: boolean;
}

export const AdminTable: FC<AdminTableProps> = ({ deleteHandler, items, isLoading }) => {
    if (isLoading) return <SkeletonLoader count={10} height={48} />
    return (
        <div className={styles.wrapper}>
            {items.length ? (
                <>
                    {items.map(tableItem => (
                        <TableItem
                            key={tableItem._id}
                            item={tableItem}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </>
            ) : (
                <div className={styles.notFound}>The users not found</div>
            )}
        </div>
    )
}

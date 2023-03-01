import { FC } from 'react'

import { Actions } from '@components/AdminTable/TableItem/Actions'

import styles from './tableItem.module.scss'

export interface ITableItem {
    _id: string;
    editUrl: string;
    fields: string[];
}

export const TableItem: FC<{ deleteHandler: (itemId: string) => void, item: ITableItem }> = ({
    item: { fields, _id, editUrl },
    deleteHandler,
}) => {
    return (
        <div className={styles.item}>
            {fields.map(field => (
                <div>{field}</div>
            ))}
            <Actions editUrl={editUrl} deleteHandler={() => deleteHandler(_id)} />
        </div>
    )
}

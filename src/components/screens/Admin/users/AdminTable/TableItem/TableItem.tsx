import {Actions} from "@screens/Admin/users/AdminTable/TableItem/Actions";
import {FC} from "react";
import styles from './tableItem.module.scss'

export interface ITableItem {
    _id: string
    editUrl: string
    email: string
    createAt: string
}

export const TableItem: FC<{item: ITableItem, deleteHandler: (userId: string) => void}> = ({item: {createAt, email,_id, editUrl}, deleteHandler}) => {

    return (
        <div className={styles.item}>
            <div>{email}</div>
            <div>{createAt}</div>
            <Actions editUrl={editUrl} deleteHandler={() => deleteHandler(_id)}/>
        </div>
    );
};
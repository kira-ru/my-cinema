import {ITableItem, TableItem} from "@screens/Admin/users/AdminTable/TableItem/TableItem";
import {FC} from "react";
import {Top} from "@screens/Admin/users/AdminTable/TableItem/Top";
import {SkeletonLoader} from "@ui/SkeletonLoader/SkeletonLoader";
import styles from './adminTable.module.scss'

interface AdminTableProps {
    items: ITableItem[]
    deleteHandler: (userId: string) => void
    isLoading: boolean
}

export const AdminTable: FC<AdminTableProps> = ({deleteHandler, items, isLoading}) => {

    if (isLoading) return <SkeletonLoader count={10} height={48}/>
    return (
        <div className={styles.wrapper}>
            {items.length
                ? <>
                    <Top/>
                    {items.map(tableItem =>
                        <TableItem key={tableItem._id} item={tableItem} deleteHandler={deleteHandler}/>)}
                </>
                : <div className={styles.notFound}>The users not found</div>
            }

        </div>
    );
};
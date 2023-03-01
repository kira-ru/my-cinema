import {FC} from "react";
import styles from './tableItem.module.scss'
import {MaterialIcon} from "@ui/MaterialIcon/MaterialIcon";
import {useRouter} from "next/router";
import {getAdminUrl} from "../../../../../../helpers/getUrls";

interface ActionsProps {
    editUrl: string
    deleteHandler: (userId: string) => void
}

export const Actions: FC<ActionsProps> = ({deleteHandler, editUrl}) => {
    const {push} = useRouter()
    return (
        <div className={styles.actions}>
            <button onClick={() => push(editUrl)}>
                <MaterialIcon name='MdEdit'/>
            </button>

            <button onClick={deleteHandler}>
                <MaterialIcon name='MdClose'/>
            </button>
        </div>
    );
};
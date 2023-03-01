import { useRouter } from 'next/router'
import { FC, MouseEventHandler } from 'react'

import { MaterialIcon } from '@ui/MaterialIcon/MaterialIcon'

import { getAdminUrl } from '../../../helpers/getUrls'

import styles from './tableItem.module.scss'

interface ActionsProps {
    editUrl: string;
    deleteHandler: MouseEventHandler<HTMLButtonElement>;
}

export const Actions: FC<ActionsProps> = ({ deleteHandler, editUrl }) => {
    const { push } = useRouter()
    return (
        <div className={styles.actions}>
            <button onClick={() => push(editUrl)}>
                <MaterialIcon name="MdEdit" />
            </button>

            <button onClick={deleteHandler}>
                <MaterialIcon name="MdClose" />
            </button>
        </div>
    )
}

import {FC} from "react";
import {Button} from "@ui/Form/Button/Button";
import cn from "classnames";
import styles from './adminCreateButton.module.scss'

interface AdminButtonProps {
    onClick: () => void
    className?: string
}

export const AdminCreateButton: FC<AdminButtonProps> = ({onClick, className
}) => {

    return (
        <Button className={cn(styles.adminButton, className)}>Create new</Button>
    );
};
import cn from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
    return (
        <button className={cn(styles.button, className)} {...rest}>
            {children}
        </button>
    )
}

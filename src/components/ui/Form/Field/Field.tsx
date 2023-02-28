import {forwardRef, InputHTMLAttributes} from "react";
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";
import styles from './field.module.scss'

import {FC} from "react";
import cn from "classnames";

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    classes?: string
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export const Field: FC<IFieldProps> = forwardRef<HTMLInputElement, IFieldProps>(({type='text', error, placeholder, classes, ...rest}, ref) => {
    return (
        <div className={cn(styles.common, styles.field, classes)}>
            <label>
                <span>{placeholder.toUpperCase()}</span>
                <input  className={styles.input} type="text" ref={ref} {...rest}/>
            </label>
            { error && <div className={styles.error}> {error.message} </div> }
        </div>
    )
})
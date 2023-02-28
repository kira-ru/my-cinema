import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { Field } from '@ui/Form/Field/Field'

import { EMAIL_VALIDATOR } from '../../../config/constants'

interface AuthFormProps {
    register: UseFormRegister<any>;
    formState: FormState<any>;
    isPasswordRequired: boolean;
}

export const AuthForm: FC<AuthFormProps> = ({ formState: { errors }, isPasswordRequired=true, register }) => {
    return (
        <>
            <Field
                placeholder="email"
                error={errors?.email}
                classes="mb-7"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: EMAIL_VALIDATOR,
                        message: 'Please enter the valid email',
                    },
                })}
            />

            <Field
                placeholder="password"
                error={errors.password}
                classes="mb-7"
                {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        message: 'Minimal length should be 6',
                        value: 6
                    },
                })}
            />
        </>
    )
}

import { NextPage } from 'next'
import { FC } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

import { Meta } from '@utils/meta/Meta'
import {castImmutable} from "immer";

interface IForm {
    email: string;
    password: string;
}

export default function Test(props: FC<NextPage>) {
    const { handleSubmit, register, formState } = useForm<IForm>()

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.table(data)
    }

    return (
        <Meta title="Test">
            <h1>forms</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='text-black' type="text" {...register('email', {
                    required: 'Email is required',
                })}/>

                {formState.errors.email && <div>{formState.errors.email.message}</div>}

                <input className='text-black' type="password" {...register('password', {
                    required: 'password is required',

                })}/>

                {formState.errors.email && <div>{formState.errors.email.message}</div>}

                <button type='submit'>log</button>
            </form>
        </Meta>
    )
}

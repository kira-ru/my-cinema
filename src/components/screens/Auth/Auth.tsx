import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthForm } from '@ui/Form/AuthForm'
import { Button } from '@ui/Form/Button/Button'
import { Heading } from '@ui/Heading/Heading'

import { useActions } from '@hooks/useActions'
import { useAuth } from '@hooks/useAuth'
import { useAuthRedirect } from '@hooks/useAuthRedirect'

import { Meta } from '@utils/meta/Meta'

import styles from './auth.module.scss'
import { IAuthInput } from './auth.types'

export const Auth: FC = () => {
    useAuthRedirect()
    const [type, setType] = useState('login')
    const { user, isLoading, isError } = useAuth()
    const { login, registration } = useActions()
    const { handleSubmit, register, formState } = useForm<IAuthInput>()

    const onSubmit: SubmitHandler<IAuthInput> = (data, event) => {
        event?.preventDefault()

        if (type === 'login') login({ email: data.email, password: data.password})
        if (type === 'register') registration({ email: data.email, password: data.password})
    }

    return (
        <Meta title="Auth">
            <section className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading title="Auth" classes="mb-4 text-center" />

                    <AuthForm register={register} formState={formState} isPasswordRequired />

                    <div className={styles.buttons}>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            onClick={() => setType('login')}
                        >
                            Log in
                        </Button>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            onClick={() => setType('register')}
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </section>
        </Meta>
    )
}

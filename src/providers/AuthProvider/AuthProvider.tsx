import { TypeComponentAuthFields } from '@providers/AuthProvider/types'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'

import { useActions } from '@hooks/useActions'
import { useAuth } from '@hooks/useAuth'

const DynamicCheckRole = dynamic(
    () => import('./CheckRole').then(module => module.CheckRole),
    { ssr: false },
)

const AuthProvider: FC<TypeComponentAuthFields> = ({ Component, children }) => {
    const { user } = useAuth()
    const { checkAuth, logout } = useActions()

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if (!refreshToken && user) logout()
    }, [])

    return !Component.isOnlyAdmin && !Component.isOnlyUser ? (
        <>{children}</>
    ) : (
        <DynamicCheckRole Component={Component}>{children}</DynamicCheckRole>
    )
}

export default AuthProvider

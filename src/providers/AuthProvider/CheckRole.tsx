import {FC} from "react";
import {TypeComponentAuthFields} from "@providers/AuthProvider/types";
import {useAuth} from "@hooks/useAuth";
import {useRouter} from "next/router";

export const CheckRole: FC<TypeComponentAuthFields> = ({children, Component}) => {
    const {user} = useAuth()
    const router = useRouter()

    const Children = () => <>{children}</>

    // general pages
    // only for admin pages
    if (user?.isAdmin) return <Children/>
    // auth user and not auth user
    if (Component.isOnlyAdmin) {
        router.pathname !== '404' && router.replace('/404')
        return null
    }
    // for auth user
    const isUser = user && !user?.isAdmin
    if (Component.isOnlyUser && isUser) return <Children/>
    else {
        // for not auth user
        router.pathname !== '404' && router.replace('/404')
        return null
    }
};
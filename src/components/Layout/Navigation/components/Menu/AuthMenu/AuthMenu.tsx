import { FC } from 'react'

import { LogOutButton } from '@components/Layout/Navigation/components/Menu/AuthMenu/LogOutButton'
import { Menu } from '@components/Layout/Navigation/components/Menu/Menu'
import { MenuItem } from '@components/Layout/Navigation/components/Menu/MenuItem'
import { GENERALS } from '@components/Layout/Navigation/components/Menu/menu.data'

import { useAuth } from '@hooks/useAuth'

import { getAdminUrl } from '../../../../../../helpers/getUrls'

export const AuthMenu: FC = () => {
    const { user } = useAuth()

    return (
        <>
            {user ? (
                <>
                    <MenuItem
                        item={{ title: 'Profile', icon: 'MdSettings', link: '/profile' }}
                    />
                    {user?.isAdmin && (
                        <MenuItem
                            item={{
                                title: 'Admin panel',
                                icon: 'MdOutlineLock',
                                link: getAdminUrl(''),
                            }}
                        />
                    )}
                    <LogOutButton />
                </>
            ) : (
                <MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
            )}
        </>
    )
}

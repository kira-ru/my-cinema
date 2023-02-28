import { FC } from 'react'

import { Menu } from '@components/Layout/Navigation/components/Menu/Menu'

import { usePopularGenres } from '@hooks/usePopularGenres'
import {MenuLoader} from "@ui/SkeletonLoader/MenuLoader";

export const GenreMenu: FC = () => {
    const { isLoading, data } = usePopularGenres()

    if (!isLoading) return <MenuLoader count={5} className='my-2 h-5'/>

    return <Menu menu={{ title: 'Genres', items: data || [] }} />
}

import { FC } from 'react'

import { Menu } from '@components/Layout/Navigation/Menu/Menu'

import { usePopularGenres } from '@hooks/usePopularGenres'

export const GenreMenu: FC = () => {
    const { isLoading, data } = usePopularGenres()

    if (isLoading) return <h1>Loding...</h1>
    return <Menu menu={{ title: 'Genres', items: data || [] }} />
}

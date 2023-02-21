import { FC } from 'react'
import { useQuery } from 'react-query'

import { SkeletonLoader } from '@ui/SkeletonLoader/SkeletonLoader'

import { MoviesServies } from '@services/moviesServies'

export const PopularMovies: FC = () => {
    const { data, isLoading } = useQuery('sidebar popular movies', () => MoviesServies.getPopular())

    if (isLoading) return <SkeletonLoader />
    return <div></div>
}

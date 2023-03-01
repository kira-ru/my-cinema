import { FC } from 'react'
import { useQuery } from 'react-query'

import { SkeletonLoader } from '@ui/SkeletonLoader/SkeletonLoader'

import { MoviesServies } from '@services/MoviesServies'
import {MovieList} from "@components/Layout/Sidebar/componets/MovieList/MovieList";

export const PopularMovies: FC = () => {
    const { data, isLoading } = useQuery('sidebar popular movies', () => MoviesServies.getPopular())

    if (isLoading) return <SkeletonLoader />
    return <MovieList movies={data || []} link={'/popular'} title='Most popular'/>
}

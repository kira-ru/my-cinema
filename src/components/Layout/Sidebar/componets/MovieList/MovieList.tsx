import Link from 'next/link'
import { FC } from 'react'

import { MovieItem } from '@components/Layout/Sidebar/componets/MovieItem/MovieItem'
import { MovieListProps } from '@components/Layout/Sidebar/sidebar.types'

import { Heading } from '@ui/Heading/Heading'

import styles from './movieList.module.scss'

export const MovieList: FC<MovieListProps> = ({ title, movies, link }) => {
    return (
        <div className={styles.wrapper}>
            <Heading title={title} classes="text-white" />
            {movies.map(movie => (
                <MovieItem movie={movie} key={movie._id} />
            ))}

            <Link className={styles.button} href={link}>See more</Link>
        </div>
    )
}

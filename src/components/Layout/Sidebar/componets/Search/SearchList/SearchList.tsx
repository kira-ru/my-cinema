import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Heading } from '@ui/Heading/Heading'

import { getMovieUrl } from '../../../../../../helpers/getUrls'
import { IMovie } from '../../../../../../types/IMovie'

import styles from './searchList.module.scss'

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
    if (!movies.length) return <Heading classes="mt-5" title="Movies dont find" />

    return (
        <div className={styles.wrapper}>
            <Heading classes='mb-4 text-white' title="Popular movies" />
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        <Link className={styles.item} href={getMovieUrl(movie.slug)}>
                            <Image
                                src={movie.poster || ''}
                                width={50}
                                height={80}
                                unoptimized
                                alt={movie.title}
                            />
                            <span>{movie.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

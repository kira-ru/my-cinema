import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IMovie } from 'types/IMovie'

import { MaterialIcon } from '@ui/MaterialIcon/MaterialIcon'

import { getMovieUrl } from '../../../../../helpers/getUrls'

import styles from './movieItem.module.scss'

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
    return (
        <div className={styles.wrapper}>
            <Link href={getMovieUrl(movie.slug)}>
                <Image
                    className={styles.img}
                    width={65}
                    height={97}
                    src={movie.poster}
                    alt={movie.slug}
                    draggable={false}
                    priority
                />
            </Link>

            <div className={styles.info}>
                <div>
                    <h3 className={styles.title}>{movie.title}</h3>
                    <p className={styles.genres}>
                        {/*{getRelatedGenres()}*/}
                        Adventure, horror
                    </p>
                </div>

                <div className={styles.rating}>
                    <MaterialIcon name="MdStar" />
                    <span>{movie.rating}</span>
                </div>
            </div>
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

import { MoviesServies } from '@services/MoviesServies'

import { getMovieUrl } from '../../../../../helpers/getUrls'
import { IMovie } from '../../../../../types/IMovie'
import styles from '../../admin.module.scss'
import cn from "classnames";

export const Popular: FC = () => {
    const { isLoading, data: popularFilm } = useQuery(
        'get most popular',
        () => MoviesServies.getPopular(),
        {
            select: (data): IMovie => data[0],
        },
    )

    if (isLoading) return <Skeleton className="h-48" />
    return (
        <div className={cn(styles.block, styles.popular)}>
            {popularFilm && (
                <>
                    <h2>Most popular film</h2>
                    <h3>Opened {popularFilm.countOpened} times</h3>
                    <Link href={getMovieUrl(popularFilm.slug)}>
                        <Image
                            alt={popularFilm.slug}
                            src={popularFilm.bigPoster}
                            width={285}
                            height={176}
                            className={styles.image}
                            unoptimized
                        />
                    </Link>
                </>
            )}
        </div>
    )
}

import React, {FC} from 'react'

import { SearchList } from '@components/Layout/Sidebar/componets/Search/SearchList/SearchList'

import { SearchField } from '@ui/SearchField/SearchField'

import { useSearch } from '@hooks/useSearch'


import styles from './search.module.scss'

const mock = [
    {
        _id: '63f1bd305452e24047c2eab3',
        poster: '/uploads/movies/red-dog.jpg',
        bigPoster: '/uploads/movies/red-dog-small.jpg',
        title: 'Red Dog',
        rating: 4,
        genres: [],
        countOpened: 0,
        videoUrl: '/uploads/movies/red-dog-movie.mp4',
        actors: [],
        slug: 'red-dog',
        isSendTelegram: false,
        createdAt: '2023-02-19T06:09:52.517Z',
        parameters: {
            year: 2013,
            duration: 125,
            country: 'Kanada, City',
            _id: '63f1bddd5452e24047c2eab6',
        },
    },
    {
        _id: '63f1bc445452e24047c2ea97',
        poster: '/uploads/movies/avatar.jpg',
        bigPoster: '/uploads/movies/avatar-small.jpg',
        title: 'Avatar',
        rating: 4,
        genres: [],
        countOpened: 0,
        videoUrl: '/uploads/movies/avatar.mp4',
        actors: [],
        slug: 'avatar',
        isSendTelegram: false,
        createdAt: '2023-02-19T06:05:56.933Z',
        parameters: {
            year: 2010,
            duration: 135,
            country: 'New York, USA',
            _id: '63f1bd2d5452e24047c2eaaf',
        },
    },
    {
        _id: '63ef141a47573e6593389deb',
        poster: '/uploads/movies/ip-man-small.jpg',
        bigPoster: '/uploads/movies/ip-man.jpg',
        title: 'Ip Man 2',
        rating: 4,
        genres: [],
        countOpened: 0,
        videoUrl: '/uploads/movies/ip-man.mp4',
        actors: [],
        slug: 'ip-man-2',
        isSendTelegram: false,
        createdAt: '2023-02-17T05:43:54.344Z',
        parameters: {
            year: 2008,
            duration: 102,
            country: 'Hong Kong, China',
            _id: '63ef144b47573e6593389dee',
        },
    },
]

export const Search: FC = () => {
    const { data, isSuccess, inputValue, handleChange } = useSearch()

    return (
        <div className={styles.wrapper}>
            <SearchField searchTerm={inputValue} handleSearch={handleChange} />
            {isSuccess && <SearchList movies={data || []} />}
        </div>
    )
}
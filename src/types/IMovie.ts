import {IGenre} from "./IGenre";
import {IActor} from "./IActor";

export interface IParameters {
    year: number
    duration: number
    country: string,
    _id: string
}

export interface IMovie {
    _id: string
    poster: string
    bigPoster: string
    title: string
    isSendTelegram: boolean
    createdAt: string
    parameters: IParameters
    genres: IGenre[]
    actors: IActor[]
    countOpened: number
    videoUrl: string
    rating: number
    slug: string
}
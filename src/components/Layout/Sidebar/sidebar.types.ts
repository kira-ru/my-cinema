import {IMovie} from "../../../types/IMovie";

export interface MovieListProps {
    title: string,
    movies: IMovie[],
    link: string,
}
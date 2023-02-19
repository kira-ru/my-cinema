import {useQuery} from "react-query";
import {genreServies} from "@services/genre.servies";
import {IMenuItem} from "@components/Layout/Navigation/Menu/menu.types";
import {getGenreUrl} from "../helpers/getUrls";

export const usePopularGenres = () => {
    const popularGenres = useQuery('popular genres', () => genreServies.getPopular(), {
        select: ({data}) => data.map(genre => ({
            icon: genre.icon,
            title: genre.name,
            link: getGenreUrl(genre.slug),
        } as IMenuItem))
    })

    return popularGenres
}
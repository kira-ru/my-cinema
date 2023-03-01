import {useQuery} from "react-query";
import {IMenuItem} from "@components/Layout/Navigation/components/Menu/menu.types";
import {getGenreUrl} from "../helpers/getUrls";
import {GenreServies} from "@services/GenreServies";

export const usePopularGenres = () => {
    const popularGenres = useQuery('popular Genres', () => GenreServies.getAll(), {
        select: ({data}) => data.map(genre => ({
            icon: genre.icon,
            title: genre.name,
            link: getGenreUrl(genre.slug),
        } as IMenuItem))
    })

    return popularGenres
}
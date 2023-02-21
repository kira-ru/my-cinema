import { api } from '../API/interceptors'
import { getMoviesUrl, getPopularMovies } from '../config/api.config'
import { IMovie } from '../types/IMovie'

export const MoviesServies = {
    async getAll(search?: string) {
        return api.get<IMovie[]>(getMoviesUrl(''), {
            params: { searchTerm: search },
        })
    },
    async getPopular() {
        const { data } = await api.get<IMovie[]>(getPopularMovies())
        return data
    },
}
import { api } from '../API/axios'
import { axiosInstance } from '../API/interceptors'
import { getMoviesUrl, getPopularMovies } from '../config/api.config'
import { IMovie } from '../types/IMovie'

export const MoviesServies = {
    async getAll(searchTerm?: string) {
        return api.get<IMovie[]>(getMoviesUrl(''), {
            params: searchTerm ? { searchTerm: searchTerm } : {},
        })
    },
    async getPopular() {
        const { data } = await api.get<IMovie[]>(getPopularMovies())
        return data
    },
    async delete(id: string) {
        return axiosInstance.delete(getMoviesUrl(`/${id}`))
    },
}

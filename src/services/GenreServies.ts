import { api } from '../API/axios'
import { axiosInstance } from '../API/interceptors'
import { getGenresUrl } from '../config/api.config'
import { IGenre } from '../types/IGenre'

export const GenreServies = {
    async getAll(searchTerm?: string) {
        return api.get<IGenre[]>(getGenresUrl(''), {
            params: searchTerm ? { searchTerm } : {},
        })
    },
    async delete(id: string) {
        return axiosInstance.delete(getGenresUrl(`/${id}`))
    },
}

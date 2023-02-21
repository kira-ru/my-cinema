import { getGenresUrl } from '../config/api.config'
import { IGenre } from '../types/IGenre'
import {api} from "../API/interceptors";

export const genreServies = {
    async getAll(search?: string) {
        return api.get<IGenre[]>(getGenresUrl(''), {
            params: {search}
        })
    },
}

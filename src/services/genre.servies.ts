import { getGenresUrl } from '../config/api.config'
import { IGenre } from '../types/IGenre'
import {api} from "../API/interceptors";

export const genreServies = {
    async getPopular() {
        return api.get<IGenre[]>(getGenresUrl(''))
    },

}

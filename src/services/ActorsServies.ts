import {axiosInstance} from "../API/interceptors";
import {IActor} from "../types/IActor";
import {getActorsUrl} from "../config/api.config";

export const ActorsServies = {
    async getAll(searchTerm?: string) {
        return axiosInstance.get<IActor[]>(getActorsUrl(''), {
            params: searchTerm ? {searchTerm} : {}
        })
    },

    async delete(id: string) {
        return axiosInstance.delete<string>(getActorsUrl(`/${id}`))
    }

}
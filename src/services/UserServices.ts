import { axiosInstance } from '../API/interceptors'
import { getUsersUrl } from '../config/api.config'
import { IUser } from '../types/IUser'

export const UserServices = {
    async getAll(searchTerm?: string) {
        return axiosInstance.get<IUser[]>(getUsersUrl(''), {
            params: searchTerm ? { searchTerm } : {},
        })
    },

    async delete(id: string) {
        return axiosInstance.delete<IUser[]>(getUsersUrl(`/${id}`))
    },
}

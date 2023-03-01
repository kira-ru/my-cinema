import {axiosInstance} from '../API/interceptors'
import {getUsersUrl} from "../config/api.config";

export const AdminServies = {
    async getCountUsers() {
        const response =  await axiosInstance.get<number>(getUsersUrl('/count'))
        return response.data
    }
}
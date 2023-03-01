import axios from "axios";
import {API_URL} from "../config/api.config";
import Cookies from "js-cookie";
import {errorCatch} from "./errorCatch";
import {AuthServies} from "@services/AuthServies";

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.request.use(config => {
    const accessToken = Cookies.get('accessToken')

    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

axiosInstance.interceptors.response.use(
    config => config,
    async error => {
        const origRequest = error.config

        if (
            (error.response.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            !origRequest._retry
        ) {
            origRequest._retry = true

            try {
                await AuthServies.getNewTokens()
                return axiosInstance.request(origRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') {

                }
            }
        }

        throw error
    },
)

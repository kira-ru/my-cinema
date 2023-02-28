import axios from 'axios'
import Cookies from 'js-cookie'

import { API_URL } from '../config/api.config'

import { errorCatch } from './errorCatch'
import {AuthServies} from "@services/authServies";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const inter = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

inter.interceptors.request.use(config => {
    const accessToken = Cookies.get('accessToken')

    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

inter.interceptors.response.use(
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
                return inter.request(origRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') {

                }
            }
        }

        throw error
    },
)

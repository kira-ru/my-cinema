import axios from 'axios'
import Cookies from 'js-cookie'

import { setToLocalStorage } from '@utils/localStorage/localStorage'

import { AuthResponse, IToken } from '@store/user/user.types'

import { API_URL, getAuthUrl, getGenresUrl } from '../config/api.config'

export const AuthServies = {
    async register(email: string, password: string) {
        const url = API_URL + getAuthUrl('/register')
        const response = await axios.post<AuthResponse>(url, {
            email,
            password,
        })

        if (response.data.accessToken) {
            saveToStorage(response.data)
        }

        return response
    },

    async login(email: string, password: string) {
        const url = API_URL + getAuthUrl('/login')
        const response = await axios.post<AuthResponse>(url, {
            email,
            password,
        })

        if (response.data.accessToken) {
            saveToStorage(response.data)
        }

        return response
    },

    logout() {
        removeTokens()
        localStorage.removeItem('user')
    },

    async getNewTokens() {
        const url = API_URL + getAuthUrl('/login/access-token')

        const refreshToken = Cookies.get('refreshToken')
        const response = await axios.post(
            url,
            { refreshToken },
            { headers: { 'Content-Type': 'application/json' } },
        )

        if (response.data.accessToken) saveToStorage(response.data)

        return response
    },

}

export const saveTokens = (data: IToken) => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokens = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
}

export const saveToStorage = (data: AuthResponse) => {
    saveTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken })
    setToLocalStorage('user', data.user)
}

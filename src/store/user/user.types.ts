import {IUser} from "../../types/IUser";

export interface UserState {
    email: string
    isAdmin: boolean
}

export interface UserSliceState {
    user: UserState | null
    isLoading: boolean
    isError: boolean
}

export interface IToken {
    accessToken: string,
    refreshToken: string
}

export interface EmailPassword {
    email: string,
    password: string
}

export interface AuthResponse extends IToken {
    user: IUser
}


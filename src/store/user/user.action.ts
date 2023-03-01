import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthResponse, EmailPassword, IToken} from "@store/user/user.types";
import {AuthServies} from "@services/authServies";
import {toastError} from "@utils/api/toast-error";
import {toastr} from "react-redux-toastr";
import {array} from "prop-types";
import {errorCatch} from "../../API/errorCatch";

// @ts-ignore
export const registration = createAsyncThunk<AuthResponse, EmailPassword>('user/register', async ({email, password}, {rejectWithValue}) => {
    try {
        const response = await AuthServies.register(email, password)
        toastr.success('Registration', 'Complete successfully')

        return response.data
    } catch (error) {
        toastError(error)
        rejectWithValue(error)
    }
})

// @ts-ignore
export const login = createAsyncThunk<AuthResponse, EmailPassword>('user/login', async ({email, password}, {rejectWithValue}) => {
    try {
        const response = await AuthServies.login(email, password)
        toastr.success('Login', 'Complete successfully')
        return response.data

    } catch (error) {
        toastError(error)
        rejectWithValue(error)
    }
})

export const logout = createAsyncThunk('user/logout', async () => {
    await AuthServies.logout()
})

export const checkAuth = createAsyncThunk<IToken>('user/authcheck', async (_, {rejectWithValue, dispatch}) => {
    try {
        const response = await AuthServies.getNewTokens()
        toastr.success('Check Auth', 'Complete successfully')
        return response.data

    } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
            toastr.error(
                'Logout',
                'Your authorizaiton is finished, plz sign in again'
            )
            dispatch(logout())
        }

        toastError(error)
        rejectWithValue(error)
    }
})


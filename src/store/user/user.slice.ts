import {UserSliceState} from "@store/user/user.types";
import {getFromLocalStorage} from "@utils/localStorage/localStorage";
import {createApi} from "@reduxjs/toolkit/query";
import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, login, logout, registration} from "@store/user/user.action";


const initialState: UserSliceState = {
    isLoading: false,
    user: getFromLocalStorage('user'),
    isError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // register
        builder.addCase(registration.pending, state => {
            state.isLoading = true
            state.isError = false
            state.user = null
        }).addCase(registration.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isError = false
            state.user = payload.user
        }).addCase(registration.rejected, state => {
            state.isError = true
            state.isLoading = false
            state.user = null
        })
        //login
        builder.addCase(login.pending, state => {
            state.isLoading = true
            state.isError = false
            state.user = null
        }).addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isError = false
            state.user = payload.user
        }).addCase(login.rejected, state => {
            state.isError = true
            state.isLoading = false
            state.user = null
        })
        //logout
        builder.addCase(logout.fulfilled, state => {
            state.user = null
        })
        // checkout
        builder.addCase(checkAuth.pending, state => {
            state.isLoading = true
            state.isError = false
            state.user = null
        }).addCase(checkAuth.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isError = false
            state.user = payload.user
        }).addCase(checkAuth.rejected, state => {
            state.isError = true
            state.isLoading = false
            state.user = null
        })
    }
})

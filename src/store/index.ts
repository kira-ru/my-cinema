import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as toastrReducer} from 'react-redux-toastr'
import {userSlice} from "@store/user/user.slice";

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    toastr: toastrReducer,
})

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
})

export type RootReducerType  = ReturnType<typeof store.getState>

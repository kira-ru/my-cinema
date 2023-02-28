import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "@store/index";

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {allActions} from "@store/actions";
import {useDispatch} from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    const {id} = useAppSelector((state) => state.account.user)

    return {
        isAuth: !id
    }
}
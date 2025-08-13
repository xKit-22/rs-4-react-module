import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ContactActions } from "./actions";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, ContactActions>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>

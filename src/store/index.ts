import { player } from './slices/player';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        player
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
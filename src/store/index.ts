import { player } from "./slices/player";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    player,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

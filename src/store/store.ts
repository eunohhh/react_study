import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from "./countSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // getDefaultMiddleware와 커스텀 미들웨어 추가
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

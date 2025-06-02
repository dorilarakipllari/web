import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { userApi } from './apis/userApis';
export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Als je middleware wilt tweaken:
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
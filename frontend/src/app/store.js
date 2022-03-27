import {
   configureStore
} from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import authReducer from '../features/Auth/authSlice';
import userReducer from '../features/Information/userSlice';

const rootReducer = {
   auth: authReducer,
   message: messageReducer,
   user: userReducer,
}

const store = configureStore({
   reducer: rootReducer,
   devTools: true,
});

export default store;
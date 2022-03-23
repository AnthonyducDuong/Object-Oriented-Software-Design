import {
   configureStore
} from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import authReducer from '../features/Auth/authSlice';

const rootReducer = {
   auth: authReducer,
   message: messageReducer,
}

const store = configureStore({
   reducer: rootReducer,
   devTools: true,
});

export default store;
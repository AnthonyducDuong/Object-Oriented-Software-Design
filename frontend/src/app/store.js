import {
   configureStore
} from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import authReducer from '../features/Auth/authSlice';
import userReducer from '../features/Information/userSlice';
import serviceReducer from '../features/Service/serviceSlice';

const rootReducer = {
   auth: authReducer,
   message: messageReducer,
   user: userReducer,
   service: serviceReducer,
}

const store = configureStore({
   reducer: rootReducer,
   devTools: true,
});

export default store;
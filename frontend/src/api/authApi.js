import Cookies from 'universal-cookie';
import axiosClient from './axiosClient';

const path = '/auth';
const cookies = new Cookies();

const authApi = {
   register: (params) => {
      const url = path + '/register';
      return axiosClient.post(url, params);
   },
   login: (params) => {
      const url = path + '/login';
      return axiosClient
         .post(url, params)
         .then((response) => {
            if (response.data.success) {
               // localStorage.setItem("authToken", JSON.stringify(response.data.data));
               cookies.set("authToken", JSON.stringify(response.data.data), {
                  path: '/'
               });
            }
            console.log(response)
            return response;
         });
   },
   confirmEmail: (token) => {
      const url = path + '/active';
      return axiosClient.get(url, {
         params: {
            key: token,
         }
      });
   },
   forgotPassword: (params) => {
      const url = path + '/forgetpassword';
      return axiosClient.post(url, params);
   },
   logout: () => {
      // localStorage.removeItem("authToken");
      cookies.remove("authToken");
   },
   refreshToken: (param) => {
      const url = path + '/refreshtoken';
      return axiosClient.post(url, param);
   },
};

export default authApi;
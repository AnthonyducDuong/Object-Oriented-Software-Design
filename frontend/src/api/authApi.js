import axiosClient from './axiosClient';

const path = '/auth';

const authApi = {
   register: (params) => {
      const url = path + '/register';
      return axiosClient.post(url, params);
   },
   login: (params) => {
      const url = path + '/login';
      return axiosClient.post(url, params);
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
   }
};

export default authApi;
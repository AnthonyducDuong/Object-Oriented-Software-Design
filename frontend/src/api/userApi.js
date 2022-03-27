import axiosClient from './axiosClient';

const path = '/account';

const userApi = {
   getInfo: () => {
      const url = path;
      return axiosClient.get(url);
   },
   updatePassword: (params) => {
      const url = path + '/password';
      return axiosClient.put(url, params);
   },
   updateInfo: (params) => {
      const url = path;
      return axiosClient.put(url, params);
   }
};

export default userApi;
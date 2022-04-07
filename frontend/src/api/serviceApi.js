import axiosClient from './axiosClient';

const path = '/service';

const serviceApi = {
   getServices: (paramsQuery) => {
      console.log(">>> check paramsQuery: ", paramsQuery);
      return axiosClient.get(path, {
         params: {
            page: paramsQuery.page,
            size: paramsQuery.size,
         },
      });
   },
   getInfoService: (id) => {
      const url = path + `/${id}`;
      return axiosClient.get(url);
   },
   addNewBookingService: (params) => {
      const url = path + '/booking';
      return axiosClient.post(url, params);
   },
};

export default serviceApi;
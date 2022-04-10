import axiosClient from './axiosClient';

const path = '/service';

const serviceApi = {
   getServices: (paramsQuery) => {
      console.log(">>> check paramsQuery: ", paramsQuery);
      return axiosClient.get(path, {
         params: {
            page: paramsQuery.page,
            size: paramsQuery.size,
            sort: paramsQuery.sort,
         },
      });
   },
   getInfoService: (id) => {
      const url = path + `/${id}`;
      return axiosClient.get(url);
   },
};

export default serviceApi;
import axiosClient from "./axiosClient";

const path = '/booking';

const bookingServiceApi = {
   addNewBookingService: (params) => {
      return axiosClient.post(path, params);
   },
};

export default bookingServiceApi;
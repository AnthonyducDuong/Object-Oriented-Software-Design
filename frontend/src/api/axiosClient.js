import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import authApi from './authApi';
import Cookies from 'universal-cookie';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const cookies = new Cookies();
const axiosClient = axios.create({
   //config credentials
   withCredentials: true,
   baseURL: process.env.REACT_APP_API_URL,
   headers: {
      'content-type': 'application/json',
   },
   //use queryString handle parameter
   paramsSerializer: params => queryString.stringify(params, {
      encode: false
   }),
});

// axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use(async (config) => {
   // Handle token here ...
   // var authToken = localStorage.getItem("authToken") ? JSON.parse(localStorage.getItem("authToken")) : null;
   var authToken = cookies.get("authToken") ? JSON.parse(localStorage.getItem("authToken")) : null;

   if (authToken !== null) {
      var accessToken = authToken.accessToken;
      config.headers['Authorization'] = `Bearer ${accessToken}`;
   }

   return config;
});

let refreshing_token = null;

axiosClient.interceptors.response.use((response) => {
   // if (response && response.data) {
   //     return response.data;
   // }

   return response;
}, async (error) => {
   // Handle errors
   const config = error.config;
   if (error.response && error.response.status === 401 && !config._retry) {
      config._retry = true;
      try {
         refreshing_token = refreshing_token ? refreshing_token : authApi.refreshToken();

         let res = await refreshing_token;
         refreshing_token = null;
         if (res.data.success) {
            // localStorage.setItem("authToken", JSON.stringify(res.data.data));
            cookies.set("authToken", JSON.stringify(res.data.data), {
               path: '/'
            });
         } else {
            // if unauthorize (401), refresh token is expired => logout
            if (res.data.status === 401 | res.data.status === 403) {
               const logout = await authApi.logout();
            }
         }
         return axiosClient(config);
      } catch (error) {
         return Promise.reject(error);
      }
   }
   return Promise.reject(error);
});

export default axiosClient;
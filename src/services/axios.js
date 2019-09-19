import axios from 'axios';

/**
 * set baseurl for all axios request
 */
axios.defaults.baseURL = `https://www.omdbapi.com/`;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request starts');
    return config;
}, function (error) {
    console.log('request error');
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('request ends');
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('response error');
    return Promise.reject(error);
});

export default axios;
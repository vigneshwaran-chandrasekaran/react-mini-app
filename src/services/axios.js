import axios from 'axios';

/**
 * set baseurl for all axios request
 */
axios.defaults.baseURL = `https://www.omdbapi.com/`;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // $('.loader-line').show();
    console.log('start api');
    return config;
}, function (error) {
    // $('.loader-line').hide();
    console.log('end api');
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // $('.loader-line').hide();
    console.log('end api');
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // $('.loader-line').hide();
    console.log('end api');
    return Promise.reject(error);
});

export default axios;
import { AxiosError } from 'axios';
const errorHandling = (error: AxiosError) => {
    console.log(error);
    if (error.response) {
        const data: any = error.response.data;
        const res = error.response;
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(res.data);
        console.log(res.status);
        console.log(res.headers);
        if (res.status === 403) {
            return null;
        } else {
            return null;
        }
    } else if (error.request) {
        console.log(error.request);
        return null;
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        return null;
    }
};

export default errorHandling;

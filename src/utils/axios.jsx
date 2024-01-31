import axios from "axios";
import { config } from "dotenv";

const axiosInstance = axios.create({
    baseURL: "https://sil-ta-api.onrender.com/"
});

axiosInstance.interceptors.request.use(

    (config) => {
        
        config.withCredentials = true;

        return config;
    }, (error) => {
        
        return Promise.reject(error);
    }
);

export default axiosInstance;
import axios from "axios";
import env from "../env";

const axiosInst = axios.create({
    // baseURL: 'http://localhost:7777',
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 2500
})

export default axiosInst
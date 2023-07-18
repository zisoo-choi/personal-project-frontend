import axios from "axios";
import env from "../env";

const axiosInst = axios.create({
    // baseURL: 'http://localhost:7777',
    baseURL: env.api.MAIN_API_URL,
    timeout: 6000
})

export default axiosInst
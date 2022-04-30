
import axios from "axios";

const TIMEOUT = 30000;
const API_URL = process.env.VUE_APP_API_URL;


const api = axios.create({
    baseURL: API_URL,
    timeout: TIMEOUT
});

export default api
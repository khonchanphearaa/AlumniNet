import axios from "axios";
import { useAuthStore } from "../store/authStore";
const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
apiAuth.interceptors.request.use((config) => {
    let authStore = useAuthStore();
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiAuth;
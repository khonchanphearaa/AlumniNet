import { defineStore } from "pinia";
import { ref } from "vue";
import apiAuth from "../api/apiAuth";

export const useAuthStore = defineStore('auth', () => {
    /* State */
    let user = ref(null)
    const token = ref(localStorage.getItem("token") || null)
    let endpointLogin = "/auth/login";
    let endpointSignup = "/auth/register";
    let endpointLogout = "/auth/logout";

    const departments = ref([]);
    const generations = ref([]);

    /* Action */
    const login = async (email, password) => {
        try {
            let res = await apiAuth.post(endpointLogin, {
                email,
                password,
            });
            if (!res.data || !res.data.data) {
                throw new Error("Invalid response from server");
            }

            const userData = res.data.data.user;
            const userToken = res.data.data.token;

            // Check if user and token exist
            if (!userData || !userToken) {
                throw new Error("User data or token is missing from response");
            }
            user.value = userData;
            token.value = userToken;
            localStorage.setItem("token", userToken);
            return res.data;
        } catch (error) {
            console.error("Login error:", error.message);
            throw error;
        }
    }

    const fetchDepartments = async () => {
        try {
            const res = await apiAuth.get('/departments');

            let rawData = res.data.data;
            if (rawData && !Array.isArray(rawData) && typeof rawData === 'object') {

                const possibleArray = rawData.departments || rawData.items || Object.values(rawData).find(val => Array.isArray(val));
                if (possibleArray) {
                    rawData = possibleArray;
                }
            }
            const items = Array.isArray(rawData) ? rawData : (rawData ? [rawData] : []);
            departments.value = items.map(item => ({
                label: item.name, 
                value: item.id    
            }));
        } catch (error) {
            console.error("Fetch Departments Error:", error);
        }
    };

    const fetchGenerations = async () => {
        try {
            const res = await apiAuth.get('/generations/2');
            const rawData = res.data.data;
 
            const items = Array.isArray(rawData) ? rawData : (rawData ? [rawData] : []);
            generations.value = items.map(item => ({
                label: item.name,
                value: item.id
            }));
        } catch (error) { console.error("Gen Fetch Error:", error); }
    };

    const signup = async (payload) => {
        try {
            let res = await apiAuth.post(endpointSignup, payload);

            if (res.data && res.data.data) {
                user.value = res.data.data.user;
                token.value = res.data.data.token;
                localStorage.setItem("token", res.data.data.token);
            }
            return res.data;
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
            throw error;
        }
    }

    const logout = async () => {
        let res = await apiAuth.delete(endpointLogout);
        localStorage.removeItem("token");
        console.log(res);

    }

    /* Return */
    return {
        login,
        user,
        token,
        signup,
        logout,
        departments,
        generations,
        fetchDepartments,
        fetchGenerations,
    }
})
import { defineStore } from "pinia";
import { ref } from "vue";
import apiAuth from "../api/apiAuth";

export const useAuthStore = defineStore('auth', () => {
    /* State */
    let user = ref(null)
    const token = ref(localStorage.getItem("token") || null)
    let endpointLogin = "/auth/login";

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

    /* Return */
    return {
        login,
        user,
        token
    }
})
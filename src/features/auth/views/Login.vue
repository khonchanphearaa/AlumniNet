<template>
    <BaseLayoutAuth :bgImage="signupBg" :heroImage="imageSignup"
        title="Your Pathway to Alumni Connection and Student Success"
        description="Welcome to AlumiNet, connecting alumni and students through collaboration and growth.">
        <!-- Right Side Card -->

        <BaseForm title="Login Account" subTitle="Loigin Account with AlumniNet" @submit.prevent="handleSignin()">
            <!-- FORM FIELDS -->
            <template #fields>

                <BaseInput v-model="form.email" type="email" label="Email" :messageError="errors.email" />

                <BaseInput v-model="form.password" label="Password" :type="showPassword ? 'text' : 'password'"
                    :messageError="errors.password" placeholder="Password">
                    <template #append>
                        <button type="button" class="text-gray-400" @click="showPassword = !showPassword">
                            <span class="text-[10px] font-bold">
                                {{ showPassword ? 'HIDE' : 'SHOW' }}
                            </span>
                        </button>
                    </template>
                </BaseInput>
            </template>

            <!-- ACTIONS -->
            <template #actions>
                <BaseButton :loading="isLoading">
                    {{ isLoading ? "loading..." : "Sign In" }}
                </BaseButton>
            </template>

            <!-- FOOTER -->
            <template #footer>
                <p class="text-center text-sm text-gray-500 pt-2">
                    Already have Account?
                    <a href="#" class="text-blue-600 font-medium hover:underline">
                        Signup
                    </a>
                </p>
            </template>
        </BaseForm>
    </BaseLayoutAuth>
</template>

<script setup>
import { ref, reactive } from 'vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseForm from '@/components/ui/BaseForm.vue';
import BaseLayoutAuth from '@/components/ui/BaseLayoutAuth.vue';
import { z } from 'zod';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';

import signupBg from '@/assets/images/Bg-signup.jpg';
import imageSignup from '@/assets/images/Auth_image.png';

const showPassword = ref(false);
let isLoading = ref(false)
let authStore = useAuthStore();
let errors = ref({});
let router = useRouter();


const form = reactive({
    email: '',
    password: '',
});
const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Please input valid email")
        .email("Email must be to valid"),

    password: z
        .string()
        .min(1, "Please input valid password")
        .min(6, "Password must to be 6 charater")
})

const handleSignin = async () => {
    let result = loginSchema.safeParse({
        email: form.email,
        password: form.password
    });
    errors.value = {}
    if (!result.success) {
        const formatted = result.error.format();
        errors.value.email = formatted.email?._errors[0] || "";
        errors.value.password = formatted.password?._errors[0] || "";
        return;
    }
    try {
        isLoading.value = true;
        const res = await authStore.login(form.email, form.password);

        console.log("Login successful:", res);

        // Redirect to dashboard or home after successful login
        // router.push({name: 'home'});
    } catch (error) {
        console.error("Signin error:", error);
        // Display error message to user
        errors.value.email = error.message || "Login failed. Please try again.";
    }
    finally {
        isLoading.value = false;
    }

};
</script>
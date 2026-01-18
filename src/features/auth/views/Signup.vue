<template>
    <BaseLayoutAuth :bgImage="signupBg" :heroImage="imageSignup"
        title="Your Pathway to Alumni Connection and Student Success"
        description="Welcome to AlumiNet, connecting alumni and students through collaboration and growth.">

        <BaseForm title="Create Account" subTitle="Sign Up for Create your account" @submit="handleSignup">
            <template #fields>
                <BaseInput v-model="form.fullname" label="Enter Full Name" :messageError="error.fullname" />

                <BaseInput v-model="form.email" type="email" label="Enter Email Address" :messageError="error.email" />

                <BaseInput v-model="form.password" :type="showPassword ? 'text' : 'password'" label="Password"
                    :messageError="error.password">
                    <template #append>
                        <button type="button" class="text-gray-400" @click="showPassword = !showPassword">
                            <span class="text-[10px] font-bold">{{ showPassword ? 'HIDE' : 'SHOW' }}</span>
                        </button>
                    </template>
                </BaseInput>

                <BaseInput v-model="form.confirmPassword" :type="showPassword ? 'text' : 'password'"
                    label="Confirm Password" :messageError="error.confirmPassword">
                    <template #append>
                        <button type="button" class="text-gray-400" @click="showPassword = !showPassword">
                            <span class="text-[10px] font-bold">{{ showPassword ? 'HIDE' : 'SHOW' }}</span>
                        </button>
                    </template>
                </BaseInput>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <BaseSelect v-model="form.departmentId" label="Select Departments" :options="authStore.departments"
                        :messageError="error.departmentId" />
                    <BaseSelect v-model="form.generationId" label="Select Generation" :options="authStore.generations"
                        :messageError="error.generationId" />
                </div>
            </template>

            <template #actions>
                <BaseButton :loading="isLoading">Create Account</BaseButton>
            </template>

            <template #footer>
                <p class="text-center text-sm text-gray-500 pt-2">
                    Already have Account?
                    <a href="#" class="text-blue-600 font-medium hover:underline">Login</a>
                </p>
            </template>
        </BaseForm>
    </BaseLayoutAuth>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { z } from 'zod';
import { useAuthStore } from '../store/authStore';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseForm from '@/components/ui/BaseForm.vue';
import BaseLayoutAuth from '@/components/ui/BaseLayoutAuth.vue';
import BaseSelect from '@/components/ui/BaseSelect.vue';

import signupBg from '@/assets/images/Bg-signup.jpg';
import imageSignup from '@/assets/images/Auth_image.png';

const authStore = useAuthStore();
const showPassword = ref(false);
const isLoading = ref(false);
const error = ref({});

const form = reactive({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    departmentId: '',
    generationId: ''
});

const signupSchema = z.object({
    fullname: z.string().min(3, "Fullname is required"),
    email: z.string().email("Invalid email format"),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Include one uppercase letter")
        .regex(/[0-9]/, "Include one number")
        .regex(/[^A-Za-z0-9]/, "Include one special character"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    departmentId: z.coerce.number().min(1, "Select a department"),
    generationId: z.coerce.number().min(1, "Select a generation")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

onMounted(async () => {
    await Promise.all([
        authStore.fetchDepartments(),
        authStore.fetchGenerations()
    ]);
})

const handleSignup = async () => {
    const result = signupSchema.safeParse(form);
    error.value = {};

    if (!result.success) {
        const formatted = result.error.format();
        error.value = {
            fullname: formatted.fullname?._errors[0],
            email: formatted.email?._errors[0],
            password: formatted.password?._errors[0],
            confirmPassword: formatted.confirmPassword?._errors[0],
            departmentId: formatted.departmentId?._errors[0],
            generationId: formatted.generationId?._errors[0]
        };
        return;
    }

    try {
        isLoading.value = true;
        const res = await authStore.signup(result.data);
        console.log("Signup Success", res);
    } catch (err) {
        if (err.response?.data?.details) {
            console.error("Backend Validation Error:", err.response.data.details);
        }
    } finally {
        isLoading.value = false;
    }
};
</script>
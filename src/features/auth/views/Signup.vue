<template>
    <div class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-6 font-sans selection:bg-blue-100"
        :style="{ backgroundImage: `url(${signupBg})` }">

        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div class="flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-6 lg:space-y-8">
                <div class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <div class="w-6 h-6 bg-[#03254c] rounded-sm rotate-45"></div>
                    </div>
                    <span class="text-2xl font-bold tracking-tight">ALUMINET</span>
                </div>

                <div class="space-y-4">
                    <h1 class="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                        Your Pathway to Alumni Connection and Student Success
                    </h1>
                    <p class="text-blue-50 text-base md:text-lg max-w-md drop-shadow-sm mx-auto lg:mx-0">
                        Welcome to AlumiNet, connecting alumni and students through collaboration and growth.
                    </p>
                </div>

                <div class="relative pt-10 hidden lg:block">
                    <img :src="imageSignup" alt="Auth Collboration" class="w-full max-w-lg drop-shadow-2xl" />
                </div>
                </div>

            <div class="flex justify-center lg:justify-end">
                <div class="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 w-full max-w-lg shadow-2xl">
                    <div class="text-center mb-6 md:mb-8">
                        <div class="flex items-center justify-center gap-2 mb-4">
                            <div class="w-8 h-8 bg-[#03254c] rounded-full flex items-center justify-center">
                                <div class="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                            </div>
                            <span class="text-xl font-bold text-[#03254c]">ALUMINET</span>
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Create Account</h2>
                        <p class="text-gray-400 mt-1 text-sm md:text-base">Sign Up for Create your account</p>
                    </div>

                    <form @submit.prevent="handleSignup" class="space-y-4 md:space-y-5">
                        <input v-model="form.fullName" type="text" placeholder="Enter Full Name"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />

                        <div class="relative">
                            <label class="absolute -top-2.5 left-4 bg-white px-1 text-xs text-gray-400">Email
                                address</label>
                            <input v-model="form.email" type="email" placeholder="johndoe@email.com"
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                        </div>

                        <div class="relative">
                            <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                placeholder="Password"
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                            <button @click="showPassword = !showPassword" type="button"
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <span class="text-[10px] font-bold">{{ showPassword ? 'HIDE' : 'SHOW' }}</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <select v-model="form.department"
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 appearance-none focus:ring-2 focus:ring-blue-500 outline-none bg-transparent">
                                <option value="" disabled selected>Select Department</option>
                                <option value="cs">Computer Science</option>
                                <option value="eng">Engineering</option>
                            </select>

                            <select v-model="form.generation"
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 appearance-none focus:ring-2 focus:ring-blue-500 outline-none bg-transparent">
                                <option value="" disabled selected>Select Generation</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>

                        <button type="submit"
                            class="w-full bg-[#002d5b] text-white py-3.5 md:py-4 rounded-xl font-semibold hover:bg-[#003d7a] transition-colors shadow-lg mt-2">
                            Create Account
                        </button>

                        <p class="text-center text-sm text-gray-500 pt-2">
                            Already have Account? <a href="#" class="text-blue-600 font-medium hover:underline">Sign
                                In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import signupBg from '@/assets/images/Bg-signup.jpg';
import imageSignup from '@/assets/images/Auth_image.png';
const showPassword = ref(false);
const form = reactive({
    fullName: '',
    email: 'johndoe@email.com',
    password: '',
    department: '',
    generation: ''
});

const handleSignup = () => {
    console.log('Form Submitted:', form);
};
</script>
<template>
    <div class="min-h-screen flex items-center justify-center p-6 font-sans bg-cover bg-center bg-no-repeat"
        style="background-image: url('/src/assets/images/Bg-signup.jpg');">
        <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>

        <div
            class="relative z-10 max-w-7xl w-full bg-white/90 backdrop-blur-md rounded-[30px] shadow-2xl flex flex-col md:flex-row items-center overflow-hidden min-h-[600px]">

            <div class="flex-1 p-12 md:p-20 space-y-6 text-[#003366]">
                <div class="flex items-center gap-2 mb-8">
                    <img src="" alt="ALUMINET Logo" class="h-10" />
                    <span class="text-2xl font-bold tracking-tight">ALUMINET</span>
                </div>

                <h1 class="text-5xl font-extrabold leading-tight">Forgot Password?</h1>
                <p class="text-lg text-slate-600 max-w-md leading-relaxed">
                    Enter your registered email address and we'll send you a secure link to reset your password.
                </p>

                <a href="#" class="inline-flex items-center gap-2 font-bold hover:opacity-70 transition-opacity">
                    Back To LogIn
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <div class="flex-1 w-full h-full p-8 md:p-12 flex items-center justify-center">
                <!-- <div
                    class="bg-white p-10 rounded-[40px] shadow-xl w-full max-w-md flex flex-col items-center border border-gray-100"> -->
                    <!-- <div class="flex flex-col items-center mb-6">
                        <img src="" alt="ALUMINET Logo" class="h-8 mb-2" />
                        <span class="text-xl font-bold text-[#003366] tracking-widest uppercase">ALUMINET</span>
                    </div> -->

                    <BaseForm title="No Worries" subTitle="we'll send you reset instructions" @submit="handleReset">
                        <template #fields>
                            <BaseInput label="Email Address" />
                        </template>
                        <template #actions>
                            <BaseButton :loading="loading">Reset</BaseButton>
                        </template>
                    </BaseForm>
                <!-- </div> -->
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseForm from '@/components/ui/BaseForm.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
const email = ref('johndoe@email.com');

const handleReset = () => {
    console.log('Sending reset link to:', email.value);
    // Add your API logic here
};
</script>
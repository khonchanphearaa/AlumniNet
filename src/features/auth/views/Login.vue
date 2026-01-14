<template>
    <BaseLayoutAuth :bgImage="signupBg" :heroImage="imageSignup"
        title="Your Pathway to Alumni Connection and Student Success"
        description="Welcome to AlumiNet, connecting alumni and students through collaboration and growth.">
        <!-- Right Side Card -->

            <BaseForm title="Login Account" subTitle="Loigin Account with AlumniNet" @submit="handleSignup">
                <!-- FORM FIELDS -->
                <template #fields>

                    <BaseInput v-model="form.email" type="email" placeholder="Enter Email Address" />

                    <BaseInput v-model="form.password" :type="showPassword ? 'text' : 'password'"
                        placeholder="Password">
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
                        Login Account
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

import signupBg from '@/assets/images/Bg-signup.jpg';
import imageSignup from '@/assets/images/Auth_image.png';

const showPassword = ref(false);
let isLoading = ref(false)

const form = reactive({
    fullName: '',
    email: 'johndoe@email.com',
    password: '',
    department: '',
    generation: ''
});

const handleSignup = () => {

};
</script>
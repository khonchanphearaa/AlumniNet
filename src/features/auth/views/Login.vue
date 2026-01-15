<template>
  <BaseLayoutAuth 
    :bgImage="signupBg" 
    :heroImage="imageSignup"
    title="Your Pathway to Alumni Connection and Student Success"
    description="Welcome to AlumiNet, connecting alumni and students through collaboration and growth."
  >
    <BaseForm 
      title="Welcome back"
      subTitle="Sign in to your account to continue"
      @submit="handleSignup"
    >
      <template #fields>
        <BaseInput 
          v-model="form.email" 
          type="email" 
          placeholder="Enter Email Address" 
        />

        <BaseInput 
          v-model="form.password" 
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
        >
          <template #append>
            <button 
              type="button" 
              class="text-gray-400" 
              @click="showPassword = !showPassword"
            >
              <span class="text-[10px] font-bold">
                {{ showPassword ? 'HIDE' : 'SHOW' }}
              </span>
            </button>
          </template>
        </BaseInput>
        
        <div class="flex justify-end">
            <a href="#" class="text-xs font-semibold text-gray-700 hover:underline">
                Forgot Password?
            </a>
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="form.rememberMe"
              class="w-4 h-4 rounded border-gray-300 text-blue-900 focus:ring-blue-800 cursor-pointer"
            />
            <span class="ml-2 text-xs text-gray-500 selection:bg-transparent">
                By selecting Continue, you agree to our <b>Terms of Service</b> and acknowledge our <b>Privacy Policy</b>.
            </span>
          </label>
          
        </div>
      </template>

      <template #actions>
        <BaseButton :loading="isLoading">
          Login Account
        </BaseButton>
      </template>

      <template #footer>
        <p class="text-center text-sm text-gray-500 pt-1">
          New to AlumiNet?
          <a href="#" class="text-gray-600 font-medium hover:underline">
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
const isLoading = ref(false);

// Form Data
const form = reactive({
  fullName: '',
  email: 'johndoe@email.com',
  password: '',
  department: '',
  generation: '',
  rememberMe: false // Track checkbox state here
});

// Handlers
const handleSignup = () => {
  isLoading.value = true;
  console.log('Form Submitted:', form);

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
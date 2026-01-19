<template>
  <BaseLayoutAuth :bgImage="signupBg" :heroImage="imageSignup"
    title="Your Pathway to Alumni Connection and Student Success"
    description="Welcome to AlumiNet, connecting alumni and students through collaboration and growth.">
    <BaseForm title="Login Account" subTitle="Login Account with AlumniNet" @submitgood="handleSignin">
      <!-- ===== FIELDS ===== -->
      <template #fields>
        <div v-if="authStore.message_error" class="text-red-500 text-center text-sm mb-4">
          {{ authStore.message_error }}
        </div>

        <!-- Email -->
        <BaseInput v-model="form.email" type="email" label="Email" :messageError="errors.email" />

        <!-- Password -->
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

        <!-- Remember / Terms -->
        <div class="flex items-center justify-between mt-2">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" v-model="form.rememberMe"
              class="w-4 h-4 rounded border-gray-300 text-blue-900 focus:ring-blue-800 cursor-pointer" />
            <span class="ml-2 text-xs text-gray-500">
              By selecting Continue, you agree to our
              <b>Terms of Service</b> and acknowledge our
              <b>Privacy Policy</b>.
            </span>
          </label>
        </div>
      </template>

      <!-- ===== ACTIONS ===== -->
      <template #actions>
        <BaseButton :loading="isLoading" type="submit">
          {{ isLoading ? 'Loading...' : 'Sign In' }}
        </BaseButton>
      </template>

      <!-- ===== FOOTER ===== -->
      <template #footer>
        <p class="text-center text-sm text-gray-500 pt-2">
          Don't have an account?
          <router-link to="/auth/signup" class="text-blue-600 font-medium hover:underline">
            Signup
          </router-link>
        </p>
      </template>
    </BaseForm>
  </BaseLayoutAuth>
</template>


<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { z } from "zod";
import { useAuthStore } from "../store/authStore";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseLayoutAuth from "@/components/ui/BaseLayoutAuth.vue";

import signupBg from "@/assets/images/Bg-signup.jpg";
import imageSignup from "@/assets/images/Auth_image.png";

const router = useRouter();
const authStore = useAuthStore();

const showPassword = ref(false);
const isLoading = ref(false);
const errors = ref({});

const form = reactive({
  email: "",
  password: "",
});

const loginSchema = z.object({
  email: z.string().min(1, "Please input email").email("Email must be valid"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const handleSignin = async () => {
  const result = loginSchema.safeParse(form);
  errors.value = {};

  if (!result.success) {
    const formatted = result.error.format();
    errors.value.email = formatted.email?._errors[0] || "";
    errors.value.password = formatted.password?._errors[0] || "";
    return;
  }

  try {
    isLoading.value = true;
    const res = await authStore.login(form.email, form.password);
    console.log("Login Success:", res);
  } catch (error) {
    console.error("Signin failure:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
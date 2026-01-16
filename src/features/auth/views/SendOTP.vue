<template>
    <div class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-6 selection:bg-blue-100"
        :style="{ backgroundImage: `url(${bgImage})` }">
        <BaseForm title="OTP Verify">
            <template #fields>
                <div class="text-center">
                    <p>Enter verfication code</p>
                    <p class="text-gray-400">We've sent a code to noname@gmail.com</p>
                </div>
                <div class="flex gap-5 justify-center">
                    <input v-for="(digit, index) in length" :key="index" v-model="digits[index]" ref="inputs"
                        type="text" inputmode="numeric" maxlength="1"
                        class="w-10 h-10 md:w-12 md:h-12 text-center text-xl font-bold border border-gray-300 rounded-xl focus:border-[#03254c] focus:ring-1 focus:ring-[#03254c] outline-none transition-all bg-gray-50 select-none"
                        @input="handleInput($event, index)" @keydown.delete="handleDelete($event, index)"
                        @paste="handlePaste" />

                    <input type="hidden" :name="name" :value="modelValue" ref="hiddenInput">
                </div>
            </template>
            <template #actions>
                <div class="flex justify-center items-center">

                    <BaseButton class="!w-80 ">
                        Verify Code
                    </BaseButton>
                </div>
            </template>
            <template #footer>
                <div class="text-center">
                    <p>Didn't receive the code? <span class="text-blue-600 font-medium hover:underline cursor-pointer">Resend</span></p>
                    <p class="mt-2"><router-link to="/auth/signup" class="text-blue-600 font-medium hover:underline">
                             Back to sign up </router-link></p>
                </div>
            </template>

        </BaseForm>
    </div>
</template>

<script setup>
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseForm from '@/components/ui/BaseForm.vue';
import BaseLayoutAuth from '@/components/ui/BaseLayoutAuth.vue';
import bgImage from '@/assets/images/Bg-signup.jpg';


import { ref, watch, nextTick } from 'vue';

const props = defineProps({
    length: { type: Number, default: 6 },
    modelValue: { type: String, default: '' },
    name: { type: String, default: 'otp' } // Allows you to name the field for forms
});

const emit = defineEmits(['update:modelValue']);

// Create an array of empty strings based on length
const digits = ref(new Array(props.length).fill(''));
const inputs = ref([]);

// Sync from parent (if parent changes modelValue manually)
watch(() => props.modelValue, (newVal) => {
    if (!newVal) return;
    const split = newVal.toString().split('').slice(0, props.length);
    for (let i = 0; i < props.length; i++) {
        digits.value[i] = split[i] || '';
    }
}, { immediate: true });

const updateModel = () => {
    const code = digits.value.join('');
    emit('update:modelValue', code);
};

const handleInput = (event, index) => {
    const val = event.target.value;

    // Force numbers only
    if (!/^\d*$/.test(val)) {
        digits.value[index] = '';
        return;
    }

    if (val && index < props.length - 1) {
        inputs.value[index + 1].focus();
    }
    updateModel();
};

const handleDelete = (event, index) => {
    if (!digits.value[index] && index > 0) {
        digits.value[index - 1] = '';
        inputs.value[index - 1].focus();
    }
    updateModel();
};

const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData('text').trim();
    if (!/^\d+$/.test(pasteData)) return;

    const pastedDigits = pasteData.split('').slice(0, props.length);
    pastedDigits.forEach((digit, i) => {
        digits.value[i] = digit;
    });

    nextTick(() => {
        const focusIndex = Math.min(pastedDigits.length, props.length - 1);
        if (inputs.value[focusIndex]) inputs.value[focusIndex].focus();
    });
    updateModel();
};
</script>
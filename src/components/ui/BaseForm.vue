<template>
    <div class="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 w-full max-w-lg shadow-2xl">
        <div class="text-center mb-6 md:mb-8">
            <div class="flex items-center justify-center gap-2 mb-4">
                <div class="w-8 h-8 bg-[#03254c] rounded-full flex items-center justify-center">
                    <div class="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                </div>
                <span class="text-xl font-bold text-[#03254c]">ALUMINET</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">{{ title }}</h2>
            <p class="text-gray-400 mt-1 text-sm md:text-base">{{ subTitle }}</p>
        </div>
        <form @submit.prevent="$emits('submit')" class="space-y-4 md:space-y-5">
            <slot name="fields"></slot>

            <div class="pt-2">
                <slot name="actions"></slot>
            </div>

            <div class="text-center text-sm text-gray-500 pt-2">
                <slot name="footer"></slot>
            </div>
        </form>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subTitle: String,
});

defineEmits(['submit'])
</script>
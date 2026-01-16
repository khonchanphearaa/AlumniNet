<template>
    <button :type="type" :disabled="disabled || loading"
        :class="buttonClasses"
        class="w-full bg-[#002d5b] text-white h-12 md:h-10 rounded-xl font-semibold hover:bg-[#003d7a] active:scale-[0.98] transition-all shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">
        <svg v-if="loading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
        <slot v-else />
    </button>
</template>

<script setup>
    defineProps({
        type: {type: String, default: ''},
        loading: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false}
    });
</script>
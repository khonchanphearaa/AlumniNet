<template>
    <button :type="type" :disabled="disabled || loading" @click="handleClick" class="inline-flex items-center justify-center font-medium rounded-lg
           transition-all duration-200 focus:outline-none focus:ring-2
           disabled:opacity-50 disabled:cursor-not-allowed" :class="[variantClasses, sizeClasses]">
        <!-- Loading Spinner -->
        <svg v-if="loading" class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>

        <!-- Button Content -->
        <slot/>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'md',
    },
    type: {
        type: String,
        default: 'button',
    },
    disabled: Boolean,
    loading: Boolean,
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
    if (!props.disabled && !props.loading) {
        emit('click', event)
    }
}

/* ===== Tailwind Variants ===== */
const variantClasses = computed(() => ({
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
}[props.variant]))

/* ===== Sizes ===== */
const sizeClasses = computed(() => ({
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
}[props.size]))
</script>

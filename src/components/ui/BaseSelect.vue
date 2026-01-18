<template>
    <div class="relative w-full">
        <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
            class="peer w-full px-4 py-3 rounded-xl border bg-transparent outline-none transition-all appearance-none"
            :class="[ messageError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500','focus:ring-2']">
            <option value="" disabled selected>{{ label }}</option>

            <option v-for="opt in options" :key="opt.value" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>

        <span v-if="messageError" class="text-red-500 text-xs mt-1 block">
            {{ messageError }}
        </span>

        <div class="absolute right-4 top-4 pointer-events-none text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: [String, Number],
    label: String,
    options: {
        type: Array,
        default: () => [] // Format: [{ label: 'CS', value: 'cs' }]
    },
    messageError: { type: String, default: '' }
});

defineEmits(["update:modelValue"]);
</script>
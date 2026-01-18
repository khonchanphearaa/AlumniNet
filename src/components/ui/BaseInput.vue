<template>
    <div class="relative w-full">
        <!-- Input -->
        <input :value="modelValue" :type="type" :placeholder="label ? ' ' : placeholder" @input="onClickInput" class="peer w-full px-4 py-3 rounded-xl
             border border-gray-200
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             outline-none transition-all
             placeholder-transparent" v-bind="$attrs" />

        <!-- Floating Label -->
        <label v-if="label" class="absolute left-4 top-3 bg-white px-1 text-gray-400 text-sm
             transition-all duration-200 pointer-events-none

             peer-focus:-top-2
             peer-focus:text-xs
             peer-focus:text-blue-500

             peer-not-placeholder-shown:-top-2.5
             peer-not-placeholder-shown:text-xs">
            {{ label }}
        </label>
      
        <!-- Error -->
        <span class="text-red-500 text-xs mt-1 block">
            {{ messageError }}
        </span>

        <!-- Append slot -->
        <div class="absolute right-4 top-1/2 -translate-y-1/2">
            <slot name="append"></slot>
        </div>
    </div>
</template>



<script setup>
defineProps({
    modelValue: [String, Number],
    label: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    messageError: { type: String, default: '' }
});

const emit = defineEmits(["update:modelValue"])
const onClickInput = (event) => {
    console.log("Input changed:", event.target.value);
    emit("update:modelValue", event.target.value)
}
</script>
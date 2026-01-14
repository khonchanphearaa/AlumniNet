<template>
    <div class="relative w-full">
        <label v-if="label" class="absolute -top-2.5 left-4 bg-white px-1 text-xs text-gray-400 z-10">
            {{ label }}
        </label>

        <input :value="modelValue"  :type="type" @input="onClickInput()"
            :placeholder="placeholder"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            v-bind="$attrs" />

        <div class="absolute right-4 top-1/2 -translate-y-1/2">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        modelValue: [String, Number],
        label: String,
        type: { type: String, default: 'text'},
        placeholder: String
    });

    const emit = defineEmits(["update:modelValue"])
    const onClickInput = (event) =>{
        console.log(event.target);
        emit("update:modelValue", event.target.value)
    }
</script>
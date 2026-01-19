<template>
  <button
    :class="[
      'w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
      active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50',
    ]"
  >
    <div class="flex items-center gap-3">
      <component :is="icon" class="w-5 h-5" v-if="icon" />
      <span>{{ label }}</span>
    </div>

    <svg
      v-if="hasDropdown"
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  label: String,
  active: Boolean,
  icon: Object, // Pass Lucide or Heroicons here
  hasDropdown: Boolean,
});
</script>

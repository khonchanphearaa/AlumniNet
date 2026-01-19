<template>
  <aside
    class="w-64 bg-white border-r min-h-screen px-4 py-6 flex flex-col shadow-sm"
  >
    <div class="mb-8 px-4 flex items-center gap-2">
      <div class="bg-blue-900 p-1.5 rounded-lg">
        <div class="text-white font-bold text-xl leading-none">S</div>
      </div>
      <h1 class="text-xl font-bold text-slate-800">AlumiNet</h1>
    </div>

    <nav class="flex-1 space-y-1">
      <SidebarItem
        v-for="item in menu"
        :key="item.key"
        :label="item.name"
        :active="active === item.key"
        :hasDropdown="item.hasDropdown"
        @click="setActive(item.key)"
      />
    </nav>

    <div class="pt-6 border-t mt-auto">
      <button
        class="flex items-center gap-3 px-4 py-2 w-full text-gray-500 hover:text-red-600 transition-colors text-sm font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span>Sign Out</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import SidebarItem from "./SidebarItem.vue";

const active = ref("profile");

const menu = [
  { name: "Dashboards", key: "dashboard", hasDropdown: true },
  { name: "My Profile", key: "profile", hasDropdown: true },
  { name: "My Groups", key: "groups" },
  { name: "My Events", key: "events" },
  { name: "Invitation", key: "invitation" },
  { name: "Notifications", key: "notifications" },
];

const setActive = (key) => {
  active.value = key;
};
</script>

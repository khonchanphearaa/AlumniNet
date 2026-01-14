<template>
<!-- Sidebar -->
        <aside class="w-64 bg-gray-900 text-white flex flex-col">
            <div class="p-4 text-xl font-bold border-b border-gray-700">
                Admin Panel
            </div>

            <nav class="flex-1 p-3 space-y-2">
                <BaseButton to="/admin" class="w-full justify-start bg-gray-800 hover:bg-gray-700">
                    Dashboard
                </BaseButton>

                <BaseButton to="/admin/users" class="w-full justify-start bg-gray-800 hover:bg-gray-700">
                    Users
                </BaseButton>

                <BaseButton to="/admin/settings" class="w-full justify-start bg-gray-800 hover:bg-gray-700">
                    Settings
                </BaseButton>
            </nav>
        </aside>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';
</script>
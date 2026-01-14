<template>
    <div class="min-h-screen flex bg-gray-100">
        <AdminSidebar/>
        <!-- Main content -->
        <main class="flex-1 p-6">
            <router-view />
        </main>
    </div>
</template>

<script setup>
import AdminSidebar from '@/features/admin/views/AdminSidebar.vue';
</script>

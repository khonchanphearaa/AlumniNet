<template>
    <div class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-6 selection:bg-blue-100"
        :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div class="flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-6 lg:space-y-8">
                <div class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <div class="w-6 h-6 bg-[#03254c] rounded-sm rotate-45"></div>
                    </div>
                    <span class="text-2xl font-bold tracking-tight">ALUMINET</span>
                </div>

                <div class="space-y-4">
                    <h1 class="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                        {{ title }}
                    </h1>
                    <p class="text-blue-50 text-base md:text-lg max-w-md drop-shadow-sm mx-auto lg:mx-0">
                        {{ description }}
                    </p>
                </div>

                <div class="relative pt-10 hidden lg:block">
                    <img :src="heroImage" :alt="title" class="w-full max-w-lg drop-shadow-2xl" />
                </div>
            </div>

            <div class="flex justify-center lg:justify-end">
                <slot></slot>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps({
  bgImage: String,
  heroImage: String,
  title: {
    type: String,
    default: 'Your Pathway to Alumni Connection and Student Success'
  },
  description: {
    type: String,
    default: 'Welcome to AlumiNet, connecting alumni and students through collaboration and growth.'
  }
});
</script>
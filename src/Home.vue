<script setup>
  import { RouterLink, useRouter } from 'vue-router';
  const router = useRouter()
</script>
<template>
    <div class="flex justify-center">
      <div>
        <p class="text-8xl mt-4">Welcome to Mangero</p>
        <p class="text-xl">Your can care your customers here :)</p>
        <button class="bg-black text-white px-3 py-2 rounded-md md:w-80 w-full" @click="router.push('/users')">Manage Users</button>
      </div>
    </div>
</template>
<template>
    <div class="relative h-full">
      <img :src="heroImage" class="w-full" />
      <div class="absolute bottom-10 left-[9%] hidden xl:block">
        <Countdown />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import Countdown from '@/components/Countdown.vue';
  
  const heroImage = computed(
    () => new URL('@/assets/img/banner_be-health-silent-auction.jpg', import.meta.url).href
  );
  </script>
  
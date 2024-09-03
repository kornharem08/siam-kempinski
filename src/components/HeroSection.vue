<template>
    <div class="relative h-full">
      <img :src="heroImage" class="w-full" />
      <img :src="textimage" class="absolute top-[20%] left-[9%]  w-1/2">
      <img :src="logoImage" class="absolute top-[5%] left-[5%]  w-1/12">
      <div class="absolute bottom-[15%] left-[20%] hidden xl:block">
        <Countdown />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import Countdown from '@/components/Countdown.vue';
  
  const heroImage = computed(
    () => new URL('@/assets/img/Be_health/Banner_BE_HEALTH_Online_Auction_1920x760px.png', import.meta.url).href
  );
  const logoImage = computed(
    () => new URL('@/assets/img/Be_health/Logo BeHealth_white.png', import.meta.url).href
  );
  const textimage = computed(
    () => new URL('@/assets/img/Be_health/BE_HEALTH_Online_Auction_white.png', import.meta.url).href
  );
  </script>
  
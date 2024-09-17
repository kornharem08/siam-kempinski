<template>
  <swiper-container
    :space-between="0"
    :breakpoints="breakpoints"
    @swiper="onSwiper"
    @slidechange="onSlideChange"
  >
    <swiper-slide>
      <img
        class="object-cover object-center w-full h-full"
        :src="aboutMeImageContent2"
        alt="stats"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover object-center w-full h-full"
        :src="aboutMeImageContent4"
        alt="stats"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover object-center w-full h-full"
        :src="aboutMeImageContent5"
        alt="stats"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover object-center w-full h-full"
        :src="aboutMeImageContent6"
        alt="stats"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover object-center w-full h-full"
        :src="aboutMeImageContent7"
        alt="stats"
      />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import VLazyImage from "v-lazy-image";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import { computed } from "vue";

// Image URLs
const aboutMeImageContent2 = computed(
  () => new URL("@/assets/img/Be_Health/Autistic_Learning Center_02.jpg", import.meta.url).href
);
const aboutMeImageContent5 = computed(
  () => new URL("@/assets/img/Be_Health/01_Autistic Application Series_05.jpg", import.meta.url).href
);
const aboutMeImageContent4 = computed(
  () => new URL("@/assets/img/Be_Health/01_Autistic Application Series_04.jpg", import.meta.url).href
);
const aboutMeImageContent6 = computed(
  () => new URL("@/assets/img/Be_Health/01_Autistic Application Series_06.jpg", import.meta.url).href
);
const aboutMeImageContent7 = computed(
  () => new URL("@/assets/img/Be_Health/01_Autistic Application Series_08.jpg", import.meta.url).href
);

// Swiper event handlers
const onSwiper = (event) => {

};
const onSlideChange = (event) => {
 
};

// Breakpoints for responsive slides-per-view
const breakpoints = {
  1024: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
};
</script>

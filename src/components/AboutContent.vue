<script setup lang="ts">
import { computed, ref } from "vue";
import swipperCard from "./swipperCard.vue"

// Import Swiper styles

const isShowAboutContent = ref(false);

function toggleContent() {
  isShowAboutContent.value = !isShowAboutContent.value;
}

const aboutMeImage = computed(
  () =>
    new URL(
      "@/assets/img/Be_Health/Autistic_Learning Center_02.jpg",
      import.meta.url
    ).href
);


const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${aboutMeImage.value})`,
  opacity: isShowAboutContent.value ? 0.3 : 1,
}));
</script>

<template>
  <div class="relative flex flex-col lg:flex-row lg:py-20 lg:px-10 py-10 px-0">
    <div class="flex  w-full justify-center items-center" v-if="!isShowAboutContent">
      <button @click="toggleContent"
        class="lg:px-12 px-6 py-3 lg:text-lg md:text-base text-xs italic bg-white bg-no-repeat bg-clip-padding shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[36px]">
        About BE Health
      </button>
    </div>

    <div class="absolute inset-0 bg-center bg-cover z-[-1]" :style="backgroundImageStyle"></div>
    <div v-if="isShowAboutContent"
      class="flex items-center justify-center flex-col absolute lg:right-10 right-1 top-2 cursor-pointer z-30"
      @click="toggleContent">

      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#7C7C7C]" viewBox="0 0 16 16" fill="currentColor"
        style="transform: rotate(180deg)">
        <path
          d="M8 11.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 1 1 .708-.708L8 11.293z" />
      </svg>
      <span class="italic underline text-lg text-[#7C7C7C]">close</span>
    </div>
    <div class="lg:w-1/2 w-full" v-if="isShowAboutContent">
      <swipperCard v-if="isShowAboutContent" />
    </div>
    <div class="flex flex-col lg:w-1/2 lg:pl-10 space-y-4 xl:pr-8 pr-2 mt-6 lg:mt-0" v-if="isShowAboutContent">
      <div class="font-bold lg:text-xl text-lg italic px-6 lg:px-0 text-[#5C5C5C]">
        About BE Health
      </div>
      <p class="xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0">
        BE Health is a global corporate social responsibility programme
        spearheaded by Kempinski Hotels, dedicated to empowering
        communities by addressing their specific health needs. This
        initiative collaborates closely with individual hotels to develop
        tailored health programmes, guided by stringent quality standards,
        thorough monitoring and meticulous evaluation. BE Health operates
        as an independent legal entity under Swiss law, with its
        headquarters in Geneva, Switzerland.
      </p>
      <p class="xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0">
        In Bangkok, Siam Kempinski Hotel Bangkok and Sindhorn Kempinski
        Hotel Bangkok have embraced this programme by partnering with the
        Autistic Thai Foundation. Through this collaboration, the hotels
        are committed to enhancing the health and well-being of children
        and adults with autism, providing the care and support they need
        to thrive. This initiative underscores the hotels’ dedication to
        making a positive impact in their local community, aligning with
        Kempinski’s broader mission to foster healthier, more resilient
        societies worldwide.
      </p>
    </div>
  </div>
</template>
<style scoped>
.background-wrapper {
  position: relative;
  z-index: 1;
}

.background-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s ease;
  opacity: var(--background-opacity);
  /* This will apply the opacity */
}

.background-wrapper {
  --background-opacity: 1;
}

.background-wrapper[data-opacity="low"] {
  --background-opacity: 0.3;
}
</style>
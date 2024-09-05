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
const aboutMeImageContent1 = computed(
  () =>
    new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_04.jpg",
      import.meta.url
    ).href
);
const aboutMeImageContent2 = computed(
  () =>
    new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_07.jpg",
      import.meta.url
    ).href
);

const contentClass = computed(() =>
  isShowAboutContent.value ? "lg:h-[512px] h-full" : "h-[251px]"
);

const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${aboutMeImage.value})`,
  opacity: isShowAboutContent.value ? 0.3 : 1,
}));
</script>

<template>
  <div
    :class="contentClass"
    class="relative flex justify-center items-center bg-center bg-no-repeat bg-cover transition-all duration-300"
  >
    <div
      class="absolute inset-0 bg-center bg-no-repeat bg-cover"
      :style="backgroundImageStyle"
    ></div>
    <div
      v-show="isShowAboutContent"
      class="flex items-center justify-center flex-col absolute lg:right-10 right-1 top-2 cursor-pointer z-30"
      @click="toggleContent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 text-[#7C7C7C]"
        viewBox="0 0 16 16"
        fill="currentColor"
        style="transform: rotate(180deg)"
      >
        <path
          d="M8 11.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 1 1 .708-.708L8 11.293z"
        />
      </svg>
      <span class="italic underline text-lg text-[#7C7C7C]">close</span>
    </div>
    <div class="relative z-10">
      <section class="text-gray-600 body-font pb-10 lg:pb-0">
        <div
          class="lg:px-6 px-0 flex flex-col lg:flex-row justify-center items-center"
          v-if="isShowAboutContent"
        >
          <div
            class="flex flex-col lg:flex-row lg:w-1/2 sm:w-full w-full overflow-hidden lg:mt-6 sm:mt-0"
          >
          <!-- <swipperCard /> -->
            <div class="flex-1">
              <img
                class="object-cover object-center w-full h-full"
                :src="aboutMeImageContent1"
                alt="stats"
              />
            </div>
            <div class="flex-1 mt-4 lg:mt-0 lg:block hidden">
              <img
                class="object-cover object-center w-full h-full"
                :src="aboutMeImageContent2"
                alt="stats"
              />
            </div>
   
          </div>
          <div
            class="flex flex-col lg:w-1/2 lg:pl-10 space-y-4 xl:pr-8 pr-2 mt-6 lg:mt-0"
          >
            <div class="font-bold lg:text-xl text-lg italic px-6 lg:px-0">
              About BE Health
            </div>
            <p
              class="xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0"
            >
              BE Health is a global corporate social responsibility programme
              spearheaded by Kempinski Hotels, dedicated to empowering
              communities by addressing their specific health needs. This
              initiative collaborates closely with individual hotels to develop
              tailored health programmes, guided by stringent quality standards,
              thorough monitoring and meticulous evaluation. BE Health operates
              as an independent legal entity under Swiss law, with its
              headquarters in Geneva, Switzerland.
            </p>
            <p
              class="xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0"
            >
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
      </section>
      <button
        v-show="!isShowAboutContent"
        @click="toggleContent"
        class="lg:px-12 px-6 py-3 lg:text-lg md:text-base text-xs italic bg-white bg-no-repeat bg-clip-padding shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[36px]"
      >
        About Be Health
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, onBeforeUnmount, onMounted, ref } from "vue";
import VLazyImage from "v-lazy-image";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  details: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  currentBid: { type: Number, required: true },
  facebookLink: { type: String, required: true },
  dataSource: {
    type: Array as PropType<
      Array<{ src: string; width: number; height: number }>
    >,
    required: true,
  },
});
const currentIndex = ref(0);
const timer = ref<number | null>(null);
const options: any = {
  dataSource: props.dataSource,
  pswpModule: () => import("photoswipe"),
};
const images = computed(
  () => new URL(props.dataSource[currentIndex.value].src, import.meta.url).href
);
const openPhotoSwipe = () => {
  const pswp = new PhotoSwipeLightbox(options);
  pswp.on("close", () => {
    currentIndex.value = 0;
  });

  pswp.init();
  pswp.loadAndOpen(currentIndex.value);
};
const startSlideShow = () => {
  timer.value = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.dataSource.length;
  }, 1000); // change every 2 seconds
};

const stopSlideShow = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

onMounted(() => {
  stopSlideShow(); // Ensure the slideshow is stopped initially
});

onBeforeUnmount(() => {
  stopSlideShow(); // Clean up the timer when the component is unmounted
});
</script>

<template>
  <div class="border border-gray-200 rounded-xl overflow-hidden">
    <div class="flex lg:flex-row flex-col items-stretch bg-white">
      <v-lazy-image
        class="object-cover lg:w-1/2 w-full rounded-lg lg:rounded-l-xl lg:rounded-r-none lg:max-h-[394px] max-h-[191px] md:max-h-[280px]"
        :src="images"
        @click.native="openPhotoSwipe"
        @mouseover="startSlideShow"
        @mouseleave="stopSlideShow"
      />
      <div
        class="flex flex-col justify-between lg:p-4 p-2 leading-normal lg:w-1/2 w-full"
      >
        <div class="lg:min-h-[364px] text-center lg:text-left">
          <h2 class="lg:text-lg md:text-base text-sm font-bold text-[#5C5C5C]">
            {{ props.title }}
          </h2>
          <p
            class="lg:text-lg md:text-base text-sm font-bold text-[#5C5C5C] mb-2 lg:mb-[20px]"
          >
            {{ props.country }}
          </p>
          <p
            class="text-[#5C5C5C] lg:mb-4 mb-2 lg:text-lg md:text-base text-xs"
          >
            {{ props.details }}
          </p>
          <p
            class="text-[#5C5C5C] lg:mb-4 mb-2 lg:text-lg md:text-base text-xs"
          >
            {{ props.description }}
          </p>
          <p
            class="text-[#5C5C5C] lg:mb-4 mb-2 lg:text-lg md:text-base text-xs"
          >
            More info:
            <a :href="props.link" target="_blank" class="break-all">{{
              props.link
            }}</a>
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center pt-[45px] pb-[30px]">
      <div class="flex w-full gap-16 px-3">
        <div
          class="flex w-1/2 items-center lg:justify-end justify-start lg:pr-12"
        >
          <p class="text-green-500 font-bold lg:text-lg md:text-base text-sm">
            Current Bid:<span class="block sm:inline">
              THB {{ props.currentBid.toLocaleString() }}</span
            >
          </p>
        </div>
        <div class="flex w-1/2 lg:justify-start justify-end">
          <button
            class="bg-[#B4A090] text-white lg:px-6 lg:py-2 px-4 py-2 sm:px-6 sm:py-2 rounded-full lg:text-lg md:text-base text-sm"
          >
            Join Bidding
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

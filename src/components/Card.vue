<script setup lang="ts">
import { PropType, computed, onBeforeUnmount, onMounted, ref } from "vue";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  details: { type: String, required: true },
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
pswp.on('close', ()=> {
  currentIndex.value = 0;
})

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
  <div class="border border-gray-200 rounded-lg overflow-hidden">
      <div
    class="flex flex-row items-stretch bg-white  "
  >
    <img
      class="object-cover w-1/2 rounded-l-lg max-h-[394px]" 
      :src="images"
      @click.native="openPhotoSwipe"
      @mouseover="startSlideShow"
      @mouseleave="stopSlideShow"
    />
    <div class="flex flex-col justify-between lg:p-4 p-2 leading-normal w-1/2">
      <div class="min-h-[364px] ">
        <h2 class="lg:text-lg text-base font-bold text-[#5C5C5C] mb-[20px]">
          {{ props.title }}
        </h2>
        <p class="text-[#5C5C5C] mb-4 lg:text-lg text-base">
          {{ props.details }}
        </p>
        <p class="text-[#5C5C5C] mb-4 lg:text-lg text-base">
          {{ props.description }}
        </p>
        <p class="text-[#5C5C5C] mb-4 lg:text-lg text-base">
          More info:
          <a :href="props.link" target="_blank" class="break-all">{{
            props.link
          }}</a>
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center pt-[45px] pb-[30px]">
      <div class="flex w-full gap-5">
        <div class="flex w-1/2 items-center justify-end">
          <p class="text-green-500 font-bold lg:text-lg text-base">
            Current Bid: THB {{ props.currentBid.toLocaleString() }}
          </p>
        </div>
        <div class="flex w-1/2 justify-start">
          <button
            class="bg-[#a58d7b] text-white lg:px-6 lg:py-2 px-1 py-1 sm:px-6 sm:py-2 rounded-full lg:text-lg text-base"
          >
            Join Bidding
          </button>
        </div>
      </div>
      </div>
  </div>

</template>

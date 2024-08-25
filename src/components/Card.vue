<script setup lang="ts">
import { PropType, computed } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  details: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  currentBid: { type: Number, required: true },
  facebookLink: { type: String, required: true },
  dataSource: { type: Array as PropType<Array<{ src: string; width: number; height: number }>>, required: true }
})

const options: any = {
  dataSource: props.dataSource,
  pswpModule: () => import('photoswipe'),
};
const images = computed(() => new URL(props.image, import.meta.url).href);
const openPhotoSwipe = () => {
  const pswp = new PhotoSwipeLightbox(options)
  console.log(pswp);

  pswp.init()
  pswp.loadAndOpen(0)
}

</script>

<template>
  <div class="flex flex-row items-stretch bg-white border border-gray-200 rounded-lg shadow ">
    <img class="object-cover w-2/5 rounded-l-lg" :src="images" @click.native="openPhotoSwipe" />
    <div class="flex flex-col justify-between lg:p-4 p-2 leading-normal w-3/5">
      <div class="min-h-[364px]">
        <h2 class="lg:text-lg text-base font-bold text-[#5C5C5C] mb-[20px]">{{ props.title }}</h2>
        <p class="text-[#5C5C5C] mb-4 lg:text-lg text-base ">
          {{ props.details }}
        </p>
        <p class="text-[#5C5C5C] mb-4 lg:text-lg text-base ">
          {{ props.description }}
        </p>
        <p class="text-[#5C5C5C] mb-4 lg:text-lg text-base ">
          More info: <a :href="props.link" target="_blank" class="break-all">{{ props.link }}</a>
        </p>
      </div>

      <div class="flex justify-between items-center ">
        <p class="text-green-500 font-bold lg:text-lg text-base">Current Bid: THB {{ props.currentBid.toLocaleString() }}</p>
        <button class="bg-[#a58d7b] text-white  lg:px-6 lg:py-2 px-1 py-1 sm:px-6 sm:py-2 rounded-full lg:text-lg text-base">Join
          Bidding</button>
      </div>
    </div>
  </div>

</template>

<style>

</style>
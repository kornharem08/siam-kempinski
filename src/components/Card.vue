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
// const list = {
//     dataSource: props.dataSource
// }

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
      <div class="min-h-[250px]">
        <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
        <p class="text-gray-700 mb-4 text-xs">
          {{ props.details }}
        </p>
        <p class="text-gray-700 mb-4 text-xs">
          {{ props.description }}
        </p>
        <p class="text-gray-700 mb-4 text-xs">
          More info: <a :href="props.link" target="_blank">{{ props.link }}</a>
        </p>
      </div>

      <div class="flex justify-between items-center ">
        <p class="text-green-500 font-bold text-xs lg:text-base">Current Bid: THB {{ props.currentBid }}</p>
        <button class="bg-[#a58d7b] text-white  lg:px-6 lg:py-2 px-1 py-1 rounded-full text-xs lg:text-base">Join
          Bidding</button>
      </div>
    </div>
  </div>

</template>

<style>
.swiper {
  width: 100%
}


.swiper-slide {
  background-position: center;
  background-size: cover
}

.swiper-slide img {
  display: block;
  width: 100%
}
</style>
<script setup lang="ts">
import { computed } from 'vue';
import Card from './Card.vue';
interface ImageSource {
  src: string;
  width: number;
  height: number;
}
interface CardType {
  id: string;
  title: string;
  image: string;
  details: string;
  description: string;
  link: string;
  currentBid: number;
  facebookLink: string;
  country: string;
  dataSource: ImageSource[];
}
const props = defineProps({
  sectionTitle: { type: String, required: true },
  cards: {
    type: Array as () => CardType[]
  },
})

const sectionTitleUrl = computed(() => new URL(props.sectionTitle, import.meta.url).href);
</script>

<template>
  <div class="xl:px-6 px-2">
    <img class="w-auto mx-auto m-10 h-[28px] sm:h-[36px]" :src="sectionTitleUrl" />
    <div class="flex flex-wrap justify-center">
      <div v-for="(card, index) in props.cards" :key="index" class="w-full xl:w-1/2 px-4 mb-6">
        <Card :id="card.id" :image="card.image" :facebookLink="card.facebookLink" :link="card.link"
        :country="card.country"
          :details="card.details" :title="card.title" :description="card.description" :currentBid="card.currentBid" :dataSource="card.dataSource" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CardSection from './components/CardSection.vue';
import Countdown from './components/Countdown.vue';
import { places as initialPlaces } from './places';

const places = ref([...initialPlaces]); // Make places reactive
interface priceUpdate {
  id: string;
  updatedPrice: number;
}



function updatePrice() {
  let updatedPrice: priceUpdate[] = [
  {
    id: "siam_bangkok",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "sindhorn_bangkok",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "apurva-bali_indonesia",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "capital_singapore",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "st-moritz_switzerland",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "adlon-berlin_germany",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "muchen_germany",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "palace-engelberg_swiss-alps_switzerland",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "hotel-aqaba_red-sea_jordan",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "hotel-ishtar_dead-sea_jordan",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "nile-hotel_cairo_egypt",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "villa-rosa_olare-mara_kenya",
    updatedPrice: Math.random() * 100,
  },
  {
    id: "hotel-cancun_mexico",
    updatedPrice: Math.random() * 100,
  },
];
  places.value = places.value.map(place => {
    place.items = place.items.map(location => {
      const updatedItem = updatedPrice.find(updated => updated.id === location.id);
      if (updatedItem) {
        location.currentBid = updatedItem.updatedPrice;
      }
      return location;
    });
    return place;
  });
}


const images = computed(() => new URL('@/assets/img/banner_be-health-silent-auction.jpg', import.meta.url).href);
</script>

<template>
<div class="relative h-full">
  <img :src="images" class="w-full ">
  <div class="absolute bottom-10 left-[9%] hidden xl:block">
    <Countdown />
  </div>
</div>

<div class="content relative flex justify-center flex-col -mt-6 bg-white z-index-2 rounded-3xl">
  <div class="py-10 px-10 lg:py-20 lg:px-40 lg:text-lg text-base text-center italic rounded-t-[32px]">
    BE Health is Kempinski's flagship global corporate social responsibility programme, dedicated to fostering local community healthcare support initiatives.
    <br /><br />
    In Thailand, BE Health collaborates with Siam Kempinski Hotel Bangkok and Sindhorn Kempinski Hotel Bangkok
    to champion the remarkable endeavours of the Autistic Thai Foundation. This partnership is committed to
    enhancing the well-being and health of autistic children and adults throughout Thailand.
    <br /><br />
    In honour of Siam Kempinski Hotel Bangkok's 13th Anniversary and Sindhorn Kempinski Hotel Bangkok's 3rd Anniversary,
    we are delighted to present an exclusive opportunity to all guests and fervent supporters of Kempinski. Join us in making
    a meaningful impact by participating in our unique online auction event. Bid for the chance to secure your
    preferred destinations and hotels while contributing to the invaluable work of the Autistic Thai Foundation.
  </div>
</div>

  <div>
    <button @click="updatePrice()">update Price</button>
  </div>


  <template v-for="(itmes) in places">
    <CardSection :sectionTitle="itmes.titleImage" :cards="itmes.items" />
  </template>

</template>

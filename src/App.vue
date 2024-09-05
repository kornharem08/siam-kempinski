<script setup lang="ts">
import { computed, ref } from "vue";
import CardSection from "./components/CardSection.vue";
import AboutContent from "./components/AboutContent.vue";
import AuctionInfo from "./components/AuctionInfo.vue";
// import swipperCard from "./components/swipperCard.vue"
import IntroductionSection from "./components/IntroductionSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterContent from "./components/FooterContent.vue";
import BackToTop from "./components/BackToTop.vue";
import { places as initialPlaces } from "./places";

interface priceUpdate {
  id: string;
  updatedPrice: number;
}

const places = ref([...initialPlaces]); // Make places reactive




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
  places.value = places.value.map((place) => {
    place.items = place.items.map((location) => {
      const updatedItem = updatedPrice.find(
        (updated) => updated.id === location.id
      );
      if (updatedItem) {
        location.currentBid = updatedItem.updatedPrice;
      }
      return location;
    });
    return place;
  });
}

</script>

<template>
  <HeroSection />
  <IntroductionSection />
  <AboutContent />
  <AuctionInfo/>
  <template v-for="itmes in places">
    <CardSection :sectionTitle="itmes.titleImage" :cards="itmes.items" />
  </template>
  <BackToTop/>
  <FooterContent/>


  <!-- <div>
    <button @click="updatePrice()">update Price</button>
  </div> -->

</template>

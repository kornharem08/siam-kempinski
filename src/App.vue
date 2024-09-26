<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CardSection from "./components/CardSection.vue";
import AboutContent from "./components/AboutContent.vue";
import AuctionInfo from "./components/AuctionInfo.vue";
// import swipperCard from "./components/swipperCard.vue"
import IntroductionSection from "./components/IntroductionSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterContent from "./components/FooterContent.vue";
import BackToTop from "./components/BackToTop.vue";
import { places as initialPlaces } from "./places";
import axios from "axios";
import moment from "moment";

interface priceUpdate {
  id: string;
  updatedPrice: number;
}
// const userTimeZone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone);
const endTime = '2024-10-17T23:59:59+07:00';
const places = ref([...initialPlaces]); // Make places reactive
const endDate = moment.tz(endTime, 'Asia/Bangkok');

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  updatePrice(); // Initial call to set the countdown immediately
  interval = setInterval(updatePrice, 15000); // Update every second
});
function updatePrice() {
  const now = moment.tz(new Date(), 'Asia/Bangkok');

  // Check if the current time has passed the end time
  if (now.isAfter(endDate)) {
    clearInterval(interval); // Stop the interval if the current time exceeds endTime
    console.log('API calls stopped as the current time exceeded the end time.');
    return;
  }

  // Continue making the API call
  axios
    .get('https://api.botio.io/ujung/v1.0/pages/228880973982315/posts')
    .then(response => {
      const pageId = 228880973982315;
      places.value = places.value.map((place: any) => {
        place.items = place.items.map((location: any) => {
          const updatedItem: any = response.data.auctions.find(
            (updated) => updated.post_id == `${pageId}_${location.posts_id}`
          );
          if (updatedItem) {
            location.currentBid = updatedItem.last_price;
          }
          return location;
        });
        return place;
      });
    })
    .catch(error => console.log(error));
}
</script>

<template>
  <HeroSection />
  <IntroductionSection />
  <AboutContent />
  <AuctionInfo />
  <template v-for="itmes in places">
    <CardSection :sectionTitle="itmes.titleImage" :cards="itmes.items" />
  </template>
  <BackToTop />
  <FooterContent />

  <!-- <div>
    <button @click="updatePrice()">update Price</button>
  </div> -->
</template>

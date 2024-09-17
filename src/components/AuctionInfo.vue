<!-- AuctionInfo.vue -->
<template>
  <div class="xl:px-40 lg:py-10 px-4 py-4 bg-[#C6B4A6] lg:space-y-6 space-y-2 text-center">
    <p class="lg:text-llg md:text-base text-xs text-white px-6 lg:px-0">
      The bidding process is scheduled to commence on 27 September 2024 at 00:01
      hrs. Bangkok time (GMT+7) and will conclude on 17 October 2024 at 24:00
      hrs. midnight Bangkok time (GMT+7). The auction winners will be announced
      on 31 October 2024, via this webpage and Siam Kempinski Hotel Bangkok’s
      Facebook page.
    </p>
    <p class="lg:text-llg md:text-base text-xs text-white px-6 lg:px-0">
      We express our heartfelt gratitude in advance for your invaluable
      contributions to this noble endeavour.
    </p>
    <p class="lg:text-llg md:text-base text-xs text-white px-6 lg:px-0">
      Click on the link below to embark on the bidding journey.
    </p>
    <p class="lg:text-llg md:text-base text-xs text-white px-6 lg:px-0">
      The valuation of auction items may vary according to the travel seasons of
      each hotel destination.
    </p>
    <p class="lg:text-llg md:text-base text-xs text-white px-6 lg:px-0">
      This Online Auction platform is exclusively for bidding purposes and will
      be conducted live via Siam Kempinski Hotel Bangkok’s Facebook page only.
      After the conclusion of the campaign, we will contact the winner and
      provide details on how to proceed with payment processing. PLEASE DO NOT
      TRANSFER MONEY VIA FACEBOOK.
    </p>
    <div class="hidden justify-center mt-12 lg:flex">
      <Countdown />
    </div>
  </div>
</template>

<script setup lang="ts">
import Countdown from "./Countdown.vue";
</script>

<style scoped>
/* Add any additional styling here */
</style>

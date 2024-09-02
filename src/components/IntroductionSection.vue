<script setup lang="ts">
import Countdown from "./Countdown.vue";
</script>

<style scoped>
/* Add any additional styling here */
</style>
<template>
  <div
    class="content relative flex justify-center flex-col -mt-6 bg-white z-index-2 rounded-3xl"
  >
    <div class="lg:hidden justify-center mt-8 flex">
      <Countdown />
    </div>
    <div
      class="py-10 px-10 lg:py-20 lg:px-40 lg:text-xl text-base text-center rounded-t-[32px]"
    >
      BE Health is Kempinski's flagship global corporate social responsibility
      programme, dedicated to fostering local community healthcare support
      initiatives.
      <br /><br />
      In Thailand, BE Health collaborates with Siam Kempinski Hotel Bangkok and
      Sindhorn Kempinski Hotel Bangkok to champion the remarkable endeavours of
      the Autistic Thai Foundation. This partnership is committed to enhancing
      the well-being and health of autistic children and adults throughout
      Thailand.
      <br /><br />
      In honour of Siam Kempinski Hotel Bangkok’s 14th anniversary and Sindhorn
      Kempinski Hotel Bangkok’s 4th anniversary, we are delighted to present an
      exclusive opportunity to all guests and fervent supporters of Kempinski.
      Join us in making a meaningful impact by participating in our unique
      silent auction event. Bid for the chance to secure your preferred
      destinations and hotels while contributing to the invaluable work of the
      Autistic Thai Foundation.
    </div>
  </div>
</template>

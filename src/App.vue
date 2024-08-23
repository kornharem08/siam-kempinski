<script setup lang="ts">
import CardSection from './components/CardSection.vue';
import Countdown from './components/Countdown.vue';
import { places } from './places';
</script>

<template>
  <div>
    <img src="@/assets/img/banner_be-health-silent-auction.jpg" style="vertical-align: middle;" />
  </div>
<Countdown />
  <template v-for="(itmes) in places">
    <CardSection :sectionTitle="itmes.titleImage" :cards="itmes.items" />
  </template>

</template>

<script setup lang="ts">
import CardSection from './components/CardSection.vue';
import { places } from './places';
</script>

<template>
  <div>
    <img src="@/assets/img/banner_be-health-silent-auction.jpg" style="vertical-align: middle;" />
  </div>
  <template v-for="(itmes) in places">
    <CardSection :sectionTitle="itmes.titleImage" :cards="itmes.items" />
  </template>

</template>

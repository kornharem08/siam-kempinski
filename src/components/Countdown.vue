<script setup lang="ts">
import moment from 'moment-timezone';
import { ref, onMounted, onUnmounted } from 'vue';

// End time in Thailand time zone (UTC+7)
const endTime = '2024-10-31T23:59:59+07:00';
//'2024-10-31T23:59:59+07:00'
// Refs for countdown display
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isExpired = ref(false);

// Ref for displaying the target date
const targetDateShow = ref('');

// Determine the user's local time zone
const userTimeZone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone);

// Function to update the current time
const updateTime = () => {
    const targetDate = moment.tz(endTime, 'Asia/Bangkok'); // End time in Thailand timezone
    const now = moment.tz(new Date(), userTimeZone.value); // Current time in user's timezone

    targetDateShow.value = targetDate.format('YYYY-MM-DD HH:mm:ss Z');

    // Calculate the difference in milliseconds
    let difference = targetDate.diff(now);

    // If the difference is less than zero, the target date has passed
    if (difference < 0) {
        difference = 0;
        isExpired.value = true;
    }

    // Convert the difference to days, hours, minutes, and seconds
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days.value * (1000 * 60 * 60 * 24);

    hours.value = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours.value * (1000 * 60 * 60);

    minutes.value = Math.floor(difference / (1000 * 60));
    difference -= minutes.value * (1000 * 60);

    seconds.value = Math.floor(difference / 1000);
};

// Start the interval when the component is mounted
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
    updateTime(); // Initial call to set the countdown immediately
    interval = setInterval(updateTime, 1000); // Update every second
});

onUnmounted(() => {
    clearInterval(interval); // Clear interval when the component is unmounted
});
</script>

<template>
    <div class="">
        <p class="font-kings-caslon lg:text-2xl text-xl font-bold mb-2 lg:text-white text-[#a58d7b] text-center">Bidding ends in</p>
        <div class="font-kings-caslon font-bold countdown py-3 flex justify-around items-center  bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border border-[#E5E5E5] rounded-[18px] opacity-100" v-if="!isExpired">
            <span class="font-kings-caslon px-10 xl:text-xl md:text-lg text-sm">{{ days }} days </span>
            <span class="font-kings-caslon xl:text-xl md:text-lg text-sm border-l-2 border-r-2 border-[#E5E5E5] px-10">{{ hours }} hours </span>
            <span class="font-kings-caslon xl:text-xl md:text-lg text-sm xs:text-xs px-10">{{ minutes }} mins </span>
            <!-- <span class="font-kings-caslon text-xl border-l-2 border-[#E5E5E5] px-10">{{ seconds }} seconds </span> -->
        </div>
        <div v-else class="font-kings-caslon font-bold countdown py-3 flex justify-around items-center  bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border border-[#E5E5E5] rounded-[18px] opacity-100">
            <span class="font-kings-caslon px-44 text-xl">Expired</span>
        </div>
        <!-- <p>Target Date (in your timezone): {{ targetDateShow }}</p> -->
    </div>
</template>

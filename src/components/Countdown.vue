<script setup lang="ts">
import moment from 'moment-timezone';
import { ref, onMounted, onUnmounted } from 'vue';

// Schedule times in Thailand time zone (UTC+7)
const startTime = '2024-09-27T00:01:00+07:00';
const endTime = '2024-10-17T23:59:59+07:00';

// Refs for countdown display
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isExpired = ref(false);
const isNotStarted = ref(true);

// Ref for displaying the target date
const targetDateShow = ref('');

// Determine the user's local time zone
const userTimeZone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone);

// Function to update the current time
const updateTime = () => {
    const now = moment.tz(new Date(), userTimeZone.value); // Current time in user's timezone
    const startDate = moment.tz(startTime, 'Asia/Bangkok'); // Start time in Thailand timezone
    const endDate = moment.tz(endTime, 'Asia/Bangkok'); // End time in Thailand timezone

    if (now.isBefore(startDate)) {
        // Countdown to the start of the bidding
        targetDateShow.value = startDate.format('YYYY-MM-DD HH:mm:ss Z');
        isNotStarted.value = true;

        // Calculate the difference in milliseconds
        let difference = startDate.diff(now);

        // Convert the difference to days, hours, minutes, and seconds
        days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
        difference -= days.value * (1000 * 60 * 60 * 24);

        hours.value = Math.floor(difference / (1000 * 60 * 60));
        difference -= hours.value * (1000 * 60 * 60);

        minutes.value = Math.floor(difference / (1000 * 60));
        difference -= minutes.value * (1000 * 60);

        seconds.value = Math.floor(difference / 1000);
    } else if (now.isBefore(endDate)) {
        // Countdown to the end of the bidding
        targetDateShow.value = endDate.format('YYYY-MM-DD HH:mm:ss Z');
        isNotStarted.value = false;

        // Calculate the difference in milliseconds
        let difference = endDate.diff(now);

        // Convert the difference to days, hours, minutes, and seconds
        days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
        difference -= days.value * (1000 * 60 * 60 * 24);

        hours.value = Math.floor(difference / (1000 * 60 * 60));
        difference -= hours.value * (1000 * 60 * 60);

        minutes.value = Math.floor(difference / (1000 * 60));
        difference -= minutes.value * (1000 * 60);

        seconds.value = Math.floor(difference / 1000);
    } else {
        // Bidding has ended
        isExpired.value = true;
        isNotStarted.value = false;
    }
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
        <p v-if="isNotStarted" class="font-kings-caslon lg:text-2xl text-xl font-bold mb-6 lg:text-white text-[#a58d7b] text-center">
            Bidding Starts In
        </p>
        <p v-else-if="!isExpired" class="font-kings-caslon lg:text-2xl text-xl font-bold mb-6 lg:text-white text-[#a58d7b] text-center">
            Bidding Ends In
        </p>
        <div v-if="!isExpired" class="font-kings-caslon font-bold countdown py-3 flex justify-around items-center bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border border-[#E5E5E5] rounded-[18px] opacity-100">
            <span class="font-kings-caslon px-10 xl:text-xl md:text-lg text-sm">{{ days }} days </span>
            <span class="font-kings-caslon xl:text-xl md:text-lg text-sm border-l-2 border-r-2 border-[#E5E5E5] px-10">{{ hours }} hours </span>
            <span class="font-kings-caslon xl:text-xl md:text-lg text-sm xs:text-xs px-10">{{ minutes }} mins </span>
            <!-- <span class="font-kings-caslon text-xl border-l-2 border-[#E5E5E5] px-10">{{ seconds }} seconds </span> -->
        </div>
        <div v-else-if="isExpired" class="font-kings-caslon font-bold countdown py-3 flex justify-around items-center bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border border-[#E5E5E5] rounded-[18px] opacity-100">
            <span class="font-kings-caslon px-44 text-xl">Expired</span>
        </div>
    </div>
</template>

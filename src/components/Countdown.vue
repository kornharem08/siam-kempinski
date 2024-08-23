<script setup lang="ts">
import moment from 'moment-timezone';
import { ref, onMounted, onUnmounted } from 'vue';

// End time in Thailand time zone (UTC+7)
const endTime = '2024-10-31T23:59:59+07:00';

// Refs for countdown display
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

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
    <div>
        <p>Bidding starts in:</p>
        <div class="countdown">
            <span>{{ days }} days </span>
            <span>{{ hours }} hours </span>
            <span>{{ minutes }} mins </span>
            <span>{{ seconds }} seconds </span>
        </div>
        <p>Target Date (in your timezone): {{ targetDateShow }}</p>
    </div>
</template>

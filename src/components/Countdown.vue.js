import moment from 'moment-timezone';
import { ref, onMounted, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    }
    else if (now.isBefore(endDate)) {
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
    }
    else {
        // Bidding has ended
        isExpired.value = true;
        isNotStarted.value = false;
    }
};
// Start the interval when the component is mounted
let interval;
onMounted(() => {
    updateTime(); // Initial call to set the countdown immediately
    interval = setInterval(updateTime, 1000); // Update every second
});
onUnmounted(() => {
    clearInterval(interval); // Clear interval when the component is unmounted
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    if (__VLS_ctx.isNotStarted && !__VLS_ctx.isExpired) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-kings-caslon lg:text-2xl md:text-base text-lg font-bold mb-6 lg:text-white text-[#a58d7b] text-center") }, });
        // @ts-ignore
        [isNotStarted, isExpired,];
    }
    else if (!__VLS_ctx.isExpired) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-kings-caslon lg:text-2xl md:text-base text-lg font-bold mb-6 lg:text-white text-[#a58d7b] text-center") }, });
        // @ts-ignore
        [isExpired,];
    }
    if (__VLS_ctx.isExpired) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-kings-caslon lg:text-2xl md:text-base text-lg font-bold mb-6 lg:text-white text-[#a58d7b] text-center") }, });
        // @ts-ignore
        [isExpired,];
    }
    if (!__VLS_ctx.isExpired) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-kings-caslon font-bold countdown lg:py-4 py-3 flex justify-around items-center bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border border-[#E5E5E5] rounded-[8px] opacity-100") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-kings-caslon pl-6 pr-4 xl:text-3xl md:text-lg text-lg") }, });
        (__VLS_ctx.days);
        // @ts-ignore
        [isExpired, days,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-kings-caslon xl:text-3xl md:text-lg text-lg border-l-2 border-r-2 border-[#E5E5E5] px-4") }, });
        (__VLS_ctx.hours);
        // @ts-ignore
        [hours,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-kings-caslon xl:text-3xl md:text-lg text-lg xs:text-xs pl-4 pr-6") }, });
        (__VLS_ctx.minutes);
        // @ts-ignore
        [minutes,];
    }
    else if (__VLS_ctx.isExpired) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-kings-caslon font-bold countdown py-3 flex justify-around items-center bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border border-[#E5E5E5] rounded-[8px] opacity-100") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-kings-caslon lg:px-44 px-20 lg:text-2xl md:text-base text-sm") }, });
        // @ts-ignore
        [isExpired,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['lg:text-2xl'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['lg:text-white'];
        __VLS_styleScopedClasses['text-[#a58d7b]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['lg:text-2xl'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['lg:text-white'];
        __VLS_styleScopedClasses['text-[#a58d7b]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['lg:text-2xl'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['lg:text-white'];
        __VLS_styleScopedClasses['text-[#a58d7b]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['countdown'];
        __VLS_styleScopedClasses['lg:py-4'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-around'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-[0px_3px_6px_rgba(0,0,0,0.16)]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-[#E5E5E5]'];
        __VLS_styleScopedClasses['rounded-[8px]'];
        __VLS_styleScopedClasses['opacity-100'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['pl-6'];
        __VLS_styleScopedClasses['pr-4'];
        __VLS_styleScopedClasses['xl:text-3xl'];
        __VLS_styleScopedClasses['md:text-lg'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['xl:text-3xl'];
        __VLS_styleScopedClasses['md:text-lg'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['border-l-2'];
        __VLS_styleScopedClasses['border-r-2'];
        __VLS_styleScopedClasses['border-[#E5E5E5]'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['xl:text-3xl'];
        __VLS_styleScopedClasses['md:text-lg'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['xs:text-xs'];
        __VLS_styleScopedClasses['pl-4'];
        __VLS_styleScopedClasses['pr-6'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['countdown'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-around'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-[0px_3px_6px_rgba(0,0,0,0.16)]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-[#E5E5E5]'];
        __VLS_styleScopedClasses['rounded-[8px]'];
        __VLS_styleScopedClasses['opacity-100'];
        __VLS_styleScopedClasses['font-kings-caslon'];
        __VLS_styleScopedClasses['lg:px-44'];
        __VLS_styleScopedClasses['px-20'];
        __VLS_styleScopedClasses['lg:text-2xl'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                days: days,
                hours: hours,
                minutes: minutes,
                isExpired: isExpired,
                isNotStarted: isNotStarted,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Countdown.vue.js.map
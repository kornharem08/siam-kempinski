import { computed } from 'vue';
import Countdown from '@/components/Countdown.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const heroImage = computed(() => new URL('@/assets/img/Be_health/Banner_BE_HEALTH_Online_Auction_1920x760px.png', import.meta.url).href);
const logoImage = computed(() => new URL('@/assets/img/Be_health/Logo BeHealth_white.png', import.meta.url).href);
const textimage = computed(() => new URL('@/assets/img/Be_health/BE_HEALTH_Online_Auction_white.png', import.meta.url).href);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative h-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.heroImage)), ...{ class: ("w-full") }, });
    // @ts-ignore
    [heroImage,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.textimage)), ...{ class: ("absolute top-[20%] left-[9%]  w-1/2") }, });
    // @ts-ignore
    [textimage,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.logoImage)), ...{ class: ("absolute top-[5%] left-[5%]  w-1/12") }, });
    // @ts-ignore
    [logoImage,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-[15%] left-[20%] hidden xl:block") }, });
    // @ts-ignore
    [Countdown,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Countdown, new Countdown({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Countdown, __VLS_1));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-[20%]'];
        __VLS_styleScopedClasses['left-[9%]'];
        __VLS_styleScopedClasses['w-1/2'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-[5%]'];
        __VLS_styleScopedClasses['left-[5%]'];
        __VLS_styleScopedClasses['w-1/12'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bottom-[15%]'];
        __VLS_styleScopedClasses['left-[20%]'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['xl:block'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Countdown: Countdown,
                heroImage: heroImage,
                logoImage: logoImage,
                textimage: textimage,
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
//# sourceMappingURL=HeroSection.vue.js.map
import { computed, ref } from "vue";
import swipperCard from "./swipperCard.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Import Swiper styles
const isShowAboutContent = ref(false);
function toggleContent() {
    isShowAboutContent.value = !isShowAboutContent.value;
}
const aboutMeImage = computed(() => new URL("@/assets/img/Be_Health/Autistic_Learning Center_02.jpg", import.meta.url).href);
const backgroundImageStyle = computed(() => ({
    backgroundImage: `url(${aboutMeImage.value})`,
    opacity: isShowAboutContent.value ? 0.3 : 1,
}));
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative flex flex-col lg:flex-row lg:py-20 lg:px-10 py-10 px-0") }, });
    if (!__VLS_ctx.isShowAboutContent) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex  w-full justify-center items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleContent) }, ...{ class: ("lg:px-12 px-6 py-3 lg:text-lg md:text-base text-xs italic bg-white bg-no-repeat bg-clip-padding shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[36px]") }, });
        // @ts-ignore
        [isShowAboutContent, toggleContent,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-center bg-cover z-[-1]") }, ...{ style: ((__VLS_ctx.backgroundImageStyle)) }, });
    // @ts-ignore
    [backgroundImageStyle,];
    if (__VLS_ctx.isShowAboutContent) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleContent) }, ...{ class: ("flex items-center justify-center flex-col absolute lg:right-10 right-1 top-2 cursor-pointer z-30") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), ...{ class: ("w-10 h-10 text-[#7C7C7C]") }, viewBox: ("0 0 16 16"), fill: ("currentColor"), ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M8 11.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 1 1 .708-.708L8 11.293z"), });
        // @ts-ignore
        [isShowAboutContent, toggleContent,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("italic underline text-lg text-[#7C7C7C]") }, });
    }
    if (__VLS_ctx.isShowAboutContent) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:w-1/2 w-full") }, });
        if (__VLS_ctx.isShowAboutContent) {
            // @ts-ignore
            [swipperCard,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(swipperCard, new swipperCard({}));
            const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
            ({}({}));
            const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(swipperCard, __VLS_1));
            // @ts-ignore
            [isShowAboutContent, isShowAboutContent,];
        }
    }
    if (__VLS_ctx.isShowAboutContent) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col lg:w-1/2 lg:pl-10 space-y-4 xl:pr-8 pr-2 mt-6 lg:mt-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-bold lg:text-xl text-lg italic px-6 lg:px-0 text-[#5C5C5C]") }, });
        // @ts-ignore
        [isShowAboutContent,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0") }, });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['lg:flex-row'];
        __VLS_styleScopedClasses['lg:py-20'];
        __VLS_styleScopedClasses['lg:px-10'];
        __VLS_styleScopedClasses['py-10'];
        __VLS_styleScopedClasses['px-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['lg:px-12'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['italic'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['bg-no-repeat'];
        __VLS_styleScopedClasses['bg-clip-padding'];
        __VLS_styleScopedClasses['shadow-[0px_3px_6px_rgba(0,0,0,0.16)]'];
        __VLS_styleScopedClasses['rounded-[36px]'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['bg-center'];
        __VLS_styleScopedClasses['bg-cover'];
        __VLS_styleScopedClasses['z-[-1]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['lg:right-10'];
        __VLS_styleScopedClasses['right-1'];
        __VLS_styleScopedClasses['top-2'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['z-30'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['text-[#7C7C7C]'];
        __VLS_styleScopedClasses['italic'];
        __VLS_styleScopedClasses['underline'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-[#7C7C7C]'];
        __VLS_styleScopedClasses['lg:w-1/2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['lg:w-1/2'];
        __VLS_styleScopedClasses['lg:pl-10'];
        __VLS_styleScopedClasses['space-y-4'];
        __VLS_styleScopedClasses['xl:pr-8'];
        __VLS_styleScopedClasses['pr-2'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['lg:mt-0'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['lg:text-xl'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['italic'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['lg:px-0'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['xl:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['lg:px-0'];
        __VLS_styleScopedClasses['xl:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['lg:px-0'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                swipperCard: swipperCard,
                isShowAboutContent: isShowAboutContent,
                toggleContent: toggleContent,
                backgroundImageStyle: backgroundImageStyle,
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
//# sourceMappingURL=AboutContent.vue.js.map
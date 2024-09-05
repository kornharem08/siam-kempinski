import { computed, ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Import Swiper styles
const isShowAboutContent = ref(false);
function toggleContent() {
    isShowAboutContent.value = !isShowAboutContent.value;
}
const aboutMeImage = computed(() => new URL("@/assets/img/Be_Health/Autistic_Learning Center_02.jpg", import.meta.url).href);
const aboutMeImageContent1 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_04.jpg", import.meta.url).href);
const aboutMeImageContent2 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_07.jpg", import.meta.url).href);
const contentClass = computed(() => isShowAboutContent.value ? "lg:h-[512px] h-full" : "h-[251px]");
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.contentClass)) }, ...{ class: ("relative flex justify-center items-center bg-center bg-no-repeat bg-cover transition-all duration-300") }, });
    __VLS_styleScopedClasses = (contentClass);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-center bg-no-repeat bg-cover") }, ...{ style: ((__VLS_ctx.backgroundImageStyle)) }, });
    // @ts-ignore
    [contentClass, backgroundImageStyle,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleContent) }, ...{ class: ("flex items-center justify-center flex-col absolute lg:right-10 right-1 top-2 cursor-pointer z-30") }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.isShowAboutContent));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), ...{ class: ("w-10 h-10 text-[#7C7C7C]") }, viewBox: ("0 0 16 16"), fill: ("currentColor"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M8 11.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 1 1 .708-.708L8 11.293z"), });
    // @ts-ignore
    [toggleContent, vShow, isShowAboutContent,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("italic underline text-lg text-[#7C7C7C]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative z-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("text-gray-600 body-font pb-10 lg:pb-0") }, });
    if (__VLS_ctx.isShowAboutContent) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:px-6 px-0 flex flex-col lg:flex-row justify-center items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col lg:flex-row lg:w-1/2 sm:w-full w-full overflow-hidden lg:mt-6 sm:mt-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent1)), alt: ("stats"), });
        // @ts-ignore
        [isShowAboutContent, aboutMeImageContent1,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 mt-4 lg:mt-0 lg:block hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent2)), alt: ("stats"), });
        // @ts-ignore
        [aboutMeImageContent2,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col lg:w-1/2 lg:pl-10 space-y-4 xl:pr-8 pr-2 mt-6 lg:mt-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-bold lg:text-xl text-lg italic px-6 lg:px-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("xl:text-lg md:text-base text-sm text-[#5C5C5C] px-6 lg:px-0") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleContent) }, ...{ class: ("lg:px-12 px-6 py-3 lg:text-lg md:text-base text-xs italic bg-white bg-no-repeat bg-clip-padding shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[36px]") }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((!__VLS_ctx.isShowAboutContent));
    // @ts-ignore
    [toggleContent, vShow, isShowAboutContent,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['bg-center'];
        __VLS_styleScopedClasses['bg-no-repeat'];
        __VLS_styleScopedClasses['bg-cover'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['duration-300'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['bg-center'];
        __VLS_styleScopedClasses['bg-no-repeat'];
        __VLS_styleScopedClasses['bg-cover'];
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
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['body-font'];
        __VLS_styleScopedClasses['pb-10'];
        __VLS_styleScopedClasses['lg:pb-0'];
        __VLS_styleScopedClasses['lg:px-6'];
        __VLS_styleScopedClasses['px-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['lg:flex-row'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['lg:flex-row'];
        __VLS_styleScopedClasses['lg:w-1/2'];
        __VLS_styleScopedClasses['sm:w-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['lg:mt-6'];
        __VLS_styleScopedClasses['sm:mt-0'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['lg:mt-0'];
        __VLS_styleScopedClasses['lg:block'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
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
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                isShowAboutContent: isShowAboutContent,
                toggleContent: toggleContent,
                aboutMeImageContent1: aboutMeImageContent1,
                aboutMeImageContent2: aboutMeImageContent2,
                contentClass: contentClass,
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
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import VLazyImage from "v-lazy-image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    id: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    details: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    currentBid: { type: Number, required: true },
    facebookLink: { type: String, required: true },
    dataSource: {
        type: Array,
        required: true,
    },
});
const currentIndex = ref(0);
const timer = ref(null);
const options = {
    dataSource: props.dataSource,
    pswpModule: () => import("photoswipe"),
};
const images = computed(() => new URL(props.dataSource[currentIndex.value].src, import.meta.url).href);
const openPhotoSwipe = () => {
    const pswp = new PhotoSwipeLightbox(options);
    pswp.on("close", () => {
        currentIndex.value = 0;
    });
    pswp.init();
    pswp.loadAndOpen(currentIndex.value);
};
const startSlideShow = () => {
    timer.value = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.dataSource.length;
    }, 1000); // change every 2 seconds
};
const stopSlideShow = () => {
    if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
    }
};
onMounted(() => {
    stopSlideShow(); // Ensure the slideshow is stopped initially
});
onBeforeUnmount(() => {
    stopSlideShow(); // Clean up the timer when the component is unmounted
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String, required: true },
        details: { type: String, required: true },
        country: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
        currentBid: { type: Number, required: true },
        facebookLink: { type: String, required: true },
        dataSource: {
            type: Array,
            required: true,
        },
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border border-gray-200 rounded-xl overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex lg:flex-row flex-col items-stretch bg-white") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ 'onMouseover': {} }, ...{ 'onMouseleave': {} }, ...{ class: ("object-cover lg:w-1/2 w-full rounded-lg lg:rounded-l-xl lg:rounded-r-none lg:max-h-[394px] max-h-[191px] md:max-h-[300px]") }, src: ((__VLS_ctx.images)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ 'onMouseover': {} }, ...{ 'onMouseleave': {} }, ...{ class: ("object-cover lg:w-1/2 w-full rounded-lg lg:rounded-l-xl lg:rounded-r-none lg:max-h-[394px] max-h-[191px] md:max-h-[300px]") }, src: ((__VLS_ctx.images)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ 'onMouseover': {} }, ...{ 'onMouseleave': {} }, ...{ class: ("object-cover lg:w-1/2 w-full rounded-lg lg:rounded-l-xl lg:rounded-r-none lg:max-h-[394px] max-h-[191px] md:max-h-[300px]") }, src: ((__VLS_ctx.images)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.openPhotoSwipe)
    };
    const __VLS_8 = {
        onMouseover: (__VLS_ctx.startSlideShow)
    };
    const __VLS_9 = {
        onMouseleave: (__VLS_ctx.stopSlideShow)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    [images, openPhotoSwipe, startSlideShow, stopSlideShow,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-between lg:p-4 p-2 leading-normal lg:w-1/2 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:min-h-[425px] text-center lg:text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("lg:text-lg md:text-base text-sm font-bold text-[#5C5C5C]") }, });
    (props.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("lg:text-lg md:text-base text-sm font-bold text-[#5C5C5C] mb-2 lg:mb-[20px]") }, });
    (props.country);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#5C5C5C] lg:mb-4 mb-2 lg:text-lg md:text-base text-xs font-normal") }, });
    (props.details);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#5C5C5C] lg:mb-4 mb-2 lg:text-lg md:text-base text-xs font-normal") }, });
    (props.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#5C5C5C] lg:mb-4 mb-2 lg:text-lg md:text-base text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((props.link)), target: ("_blank"), ...{ class: ("break-all") }, });
    (props.link);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center pt-[45px] pb-[30px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-full gap-16 px-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-1/2 items-center lg:justify-end justify-start lg:pr-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-green-500 font-bold lg:text-lg md:text-base text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block sm:inline") }, });
    (props.currentBid.toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-1/2 lg:justify-start justify-end") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-[#B4A090] text-white lg:px-6 lg:py-2 px-4 py-2 sm:px-6 sm:py-2 rounded-full lg:text-lg md:text-base text-sm") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-200'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['lg:flex-row'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-stretch'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['lg:w-1/2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['lg:rounded-l-xl'];
        __VLS_styleScopedClasses['lg:rounded-r-none'];
        __VLS_styleScopedClasses['lg:max-h-[394px]'];
        __VLS_styleScopedClasses['max-h-[191px]'];
        __VLS_styleScopedClasses['md:max-h-[300px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['lg:p-4'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['leading-normal'];
        __VLS_styleScopedClasses['lg:w-1/2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['lg:min-h-[425px]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['lg:text-left'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['lg:mb-[20px]'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['lg:mb-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['lg:mb-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['text-[#5C5C5C]'];
        __VLS_styleScopedClasses['lg:mb-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['break-all'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['pt-[45px]'];
        __VLS_styleScopedClasses['pb-[30px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['gap-16'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-1/2'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['lg:justify-end'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['lg:pr-12'];
        __VLS_styleScopedClasses['text-green-500'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['sm:inline'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-1/2'];
        __VLS_styleScopedClasses['lg:justify-start'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['bg-[#B4A090]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['lg:px-6'];
        __VLS_styleScopedClasses['lg:py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['sm:px-6'];
        __VLS_styleScopedClasses['sm:py-2'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['lg:text-lg'];
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
                VLazyImage: VLazyImage,
                images: images,
                openPhotoSwipe: openPhotoSwipe,
                startSlideShow: startSlideShow,
                stopSlideShow: stopSlideShow,
            };
        },
        props: {
            id: { type: String, required: true },
            title: { type: String, required: true },
            image: { type: String, required: true },
            details: { type: String, required: true },
            country: { type: String, required: true },
            description: { type: String, required: true },
            link: { type: String, required: true },
            currentBid: { type: Number, required: true },
            facebookLink: { type: String, required: true },
            dataSource: {
                type: Array,
                required: true,
            },
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String, required: true },
        details: { type: String, required: true },
        country: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
        currentBid: { type: Number, required: true },
        facebookLink: { type: String, required: true },
        dataSource: {
            type: Array,
            required: true,
        },
    },
});
;
//# sourceMappingURL=Card.vue.js.map
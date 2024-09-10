import VLazyImage from "v-lazy-image";
import { register } from 'swiper/element/bundle';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// register Swiper custom elements
register();
import { computed } from "vue";
// Image URLs
const aboutMeImageContent2 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_07.jpg", import.meta.url).href);
const aboutMeImageContent3 = computed(() => new URL("@/assets/img/Be_Health/Autistic_Learning Center_02.jpg", import.meta.url).href);
const aboutMeImageContent4 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_04.jpg", import.meta.url).href);
const aboutMeImageContent5 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_05.jpg", import.meta.url).href);
const aboutMeImageContent6 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_06.jpg", import.meta.url).href);
const aboutMeImageContent7 = computed(() => new URL("@/assets/img/Be_Health/01_Autistic Application Series_08.jpg", import.meta.url).href);
// Swiper event handlers
const onSwiper = (event) => {
    console.log(event);
};
const onSlideChange = (event) => {
    console.log("slide change", event);
};
// Breakpoints for responsive slides-per-view
const breakpoints = {
    720: {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    0: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
};
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
    // @ts-ignore
    const __VLS_0 = {}
        .SwiperContainer;
    ({}.SwiperContainer);
    ({}.SwiperContainer);
    __VLS_components.SwiperContainer;
    __VLS_components.swiperContainer;
    __VLS_components.SwiperContainer;
    __VLS_components.swiperContainer;
    // @ts-ignore
    [SwiperContainer, SwiperContainer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSwiper': {} }, ...{ 'onSlidechange': {} }, spaceBetween: ((0)), breakpoints: ((__VLS_ctx.breakpoints)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSwiper': {} }, ...{ 'onSlidechange': {} }, spaceBetween: ((0)), breakpoints: ((__VLS_ctx.breakpoints)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSwiper': {} }, ...{ 'onSlidechange': {} }, spaceBetween: ((0)), breakpoints: ((__VLS_ctx.breakpoints)), }));
    let __VLS_6;
    const __VLS_7 = {
        onSwiper: (__VLS_ctx.onSwiper)
    };
    const __VLS_8 = {
        onSlidechange: (__VLS_ctx.onSlideChange)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_9 = {}
        .SwiperSlide;
    ({}.SwiperSlide);
    ({}.SwiperSlide);
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    // @ts-ignore
    [SwiperSlide, SwiperSlide,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11));
    // @ts-ignore
    const __VLS_15 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent2)), alt: ("stats"), }));
    const __VLS_17 = __VLS_16({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent2)), alt: ("stats"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent2)), alt: ("stats"), }));
    const __VLS_20 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17));
    // @ts-ignore
    [breakpoints, onSwiper, onSlideChange, aboutMeImageContent2,];
    __VLS_nonNullable(__VLS_14.slots).default;
    // @ts-ignore
    const __VLS_21 = {}
        .SwiperSlide;
    ({}.SwiperSlide);
    ({}.SwiperSlide);
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    // @ts-ignore
    [SwiperSlide, SwiperSlide,];
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
    const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({}));
    const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23));
    // @ts-ignore
    const __VLS_27 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent3)), alt: ("stats"), }));
    const __VLS_29 = __VLS_28({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent3)), alt: ("stats"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent3)), alt: ("stats"), }));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
    // @ts-ignore
    [aboutMeImageContent3,];
    __VLS_nonNullable(__VLS_26.slots).default;
    // @ts-ignore
    const __VLS_33 = {}
        .SwiperSlide;
    ({}.SwiperSlide);
    ({}.SwiperSlide);
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    // @ts-ignore
    [SwiperSlide, SwiperSlide,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({}));
    const __VLS_38 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35));
    // @ts-ignore
    const __VLS_39 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent4)), alt: ("stats"), }));
    const __VLS_41 = __VLS_40({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent4)), alt: ("stats"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent4)), alt: ("stats"), }));
    const __VLS_44 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41));
    // @ts-ignore
    [aboutMeImageContent4,];
    __VLS_nonNullable(__VLS_38.slots).default;
    // @ts-ignore
    const __VLS_45 = {}
        .SwiperSlide;
    ({}.SwiperSlide);
    ({}.SwiperSlide);
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    // @ts-ignore
    [SwiperSlide, SwiperSlide,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    ({}({}));
    const __VLS_50 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47));
    // @ts-ignore
    const __VLS_51 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent5)), alt: ("stats"), }));
    const __VLS_53 = __VLS_52({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent5)), alt: ("stats"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent5)), alt: ("stats"), }));
    const __VLS_56 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53));
    // @ts-ignore
    [aboutMeImageContent5,];
    __VLS_nonNullable(__VLS_50.slots).default;
    // @ts-ignore
    const __VLS_57 = {}
        .SwiperSlide;
    ({}.SwiperSlide);
    ({}.SwiperSlide);
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    // @ts-ignore
    [SwiperSlide, SwiperSlide,];
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
    const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({}));
    const __VLS_62 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59));
    // @ts-ignore
    const __VLS_63 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent6)), alt: ("stats"), }));
    const __VLS_65 = __VLS_64({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent6)), alt: ("stats"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ({}({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent6)), alt: ("stats"), }));
    const __VLS_68 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65));
    // @ts-ignore
    [aboutMeImageContent6,];
    __VLS_nonNullable(__VLS_62.slots).default;
    // @ts-ignore
    const __VLS_69 = {}
        .SwiperSlide;
    ({}.SwiperSlide);
    ({}.SwiperSlide);
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    __VLS_components.SwiperSlide;
    __VLS_components.swiperSlide;
    // @ts-ignore
    [SwiperSlide, SwiperSlide,];
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({}));
    const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
    ({}({}));
    const __VLS_74 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71));
    // @ts-ignore
    const __VLS_75 = {}
        .VLazyImage;
    ({}.VLazyImage);
    __VLS_components.VLazyImage;
    __VLS_components.vLazyImage;
    // @ts-ignore
    [VLazyImage,];
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent7)), alt: ("stats"), }));
    const __VLS_77 = __VLS_76({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent7)), alt: ("stats"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    ({}({ ...{ class: ("object-cover object-center w-full h-full") }, src: ((__VLS_ctx.aboutMeImageContent7)), alt: ("stats"), }));
    const __VLS_80 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77));
    // @ts-ignore
    [aboutMeImageContent7,];
    __VLS_nonNullable(__VLS_74.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
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
                aboutMeImageContent2: aboutMeImageContent2,
                aboutMeImageContent3: aboutMeImageContent3,
                aboutMeImageContent4: aboutMeImageContent4,
                aboutMeImageContent5: aboutMeImageContent5,
                aboutMeImageContent6: aboutMeImageContent6,
                aboutMeImageContent7: aboutMeImageContent7,
                onSwiper: onSwiper,
                onSlideChange: onSlideChange,
                breakpoints: breakpoints,
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
//# sourceMappingURL=swipperCard.vue.js.map
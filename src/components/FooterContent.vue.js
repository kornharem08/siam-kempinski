const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
function onRedirect(url) {
    window.location.href = url;
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center flex justify-center flex-col lg:text-lg md:text-base text-sm mb-10") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center py-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({ ...{ class: ("lg:w-[375px] w-[200px] border-[2px] lg:border-[4px] border-[#A58D7B] opacity-55 rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-7 text-xs lg:text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("tel:+6621629000"), ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:pr.siambangkok@kempinski.com"), ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.kempinski.com"), target: ("_blank"), ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.onRedirect('https://www.kempinski.com/en/bangkok');
                // @ts-ignore
                [onRedirect,];
            } }, src: ("@/assets/img/siam-kempinski-hotel-bangkok-logo.svg"), ...{ class: ("lg:w-[160px] lg:h-[160px] w-[60px] h-[60px]") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.onRedirect('https://www.kempinski.com/en/sindhorn');
                // @ts-ignore
                [onRedirect,];
            } }, src: ("@/assets/img/sindhorn-kempinski-hotel-bangkok-logo.svg"), ...{ class: ("lg:w-[160px] lg:h-[160px] w-[60px] h-[60px]") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center mt-6 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.onRedirect('https://www.kempinski.com');
                // @ts-ignore
                [onRedirect,];
            } }, src: ("@/assets/img/kempinski-logo.png"), ...{ class: ("lg:w-[198px] lg:h-[78px] w-[80px] h-[30px]") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['mb-10'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['py-20'];
        __VLS_styleScopedClasses['lg:w-[375px]'];
        __VLS_styleScopedClasses['w-[200px]'];
        __VLS_styleScopedClasses['border-[2px]'];
        __VLS_styleScopedClasses['lg:border-[4px]'];
        __VLS_styleScopedClasses['border-[#A58D7B]'];
        __VLS_styleScopedClasses['opacity-55'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['mb-7'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['lg:text-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['lg:w-[160px]'];
        __VLS_styleScopedClasses['lg:h-[160px]'];
        __VLS_styleScopedClasses['w-[60px]'];
        __VLS_styleScopedClasses['h-[60px]'];
        __VLS_styleScopedClasses['lg:w-[160px]'];
        __VLS_styleScopedClasses['lg:h-[160px]'];
        __VLS_styleScopedClasses['w-[60px]'];
        __VLS_styleScopedClasses['h-[60px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['lg:w-[198px]'];
        __VLS_styleScopedClasses['lg:h-[78px]'];
        __VLS_styleScopedClasses['w-[80px]'];
        __VLS_styleScopedClasses['h-[30px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                onRedirect: onRedirect,
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
//# sourceMappingURL=FooterContent.vue.js.map
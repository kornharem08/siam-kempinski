import { ref, onMounted, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const showBackToTop = ref(false);
const onScroll = () => {
    showBackToTop.value = window.scrollY > window.innerHeight;
};
const backToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
};
onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.backToTop) }, ...{ class: ("back-to-top  fixed bottom-10 right-7 z-50") }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showBackToTop));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("40"), height: ("40"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.line, __VLS_intrinsicElements.line)({ x2: ("16"), transform: ("translate(12 10)"), fill: ("none"), stroke: ("#5f5f5f"), "stroke-linecap": ("round"), "stroke-width": ("2"), });
    // @ts-ignore
    [backToTop, vShow, showBackToTop,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.line, __VLS_intrinsicElements.line)({ x1: ("8"), y1: ("8"), transform: ("translate(20 16)"), fill: ("none"), stroke: ("#5f5f5f"), "stroke-linecap": ("round"), "stroke-width": ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.line, __VLS_intrinsicElements.line)({ y1: ("16"), transform: ("translate(20 16)"), fill: ("none"), stroke: ("#5f5f5f"), "stroke-linecap": ("round"), "stroke-width": ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.line, __VLS_intrinsicElements.line)({ x1: ("12"), y1: ("8"), x2: ("20"), transform: ("translate(0 16)"), fill: ("none"), stroke: ("#5f5f5f"), "stroke-linecap": ("round"), "stroke-width": ("2"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['back-to-top'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['bottom-10'];
        __VLS_styleScopedClasses['right-7'];
        __VLS_styleScopedClasses['z-50'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                showBackToTop: showBackToTop,
                backToTop: backToTop,
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
//# sourceMappingURL=BackToTop.vue.js.map
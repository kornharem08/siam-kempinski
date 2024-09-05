import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Images for slides
const slides = [
    new URL("@/assets/img/Be_Health/01_Autistic Application Series_04.jpg", import.meta.url).href,
    new URL("@/assets/img/Be_Health/01_Autistic Application Series_07.jpg", import.meta.url).href,
    new URL("@/assets/img/Be_Health/01_Autistic Application Series_04.jpg", import.meta.url).href,
    new URL("@/assets/img/Be_Health/01_Autistic Application Series_07.jpg", import.meta.url).href,
    new URL("@/assets/img/Be_Health/01_Autistic Application Series_04.jpg", import.meta.url).href,
];
// Track the current slide index and drag state
const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0); // Starting X position of the drag
const dragOffset = ref(0); // Distance moved during the drag
// Start dragging
const startDrag = (event) => {
    isDragging.value = true;
    startX.value = 'touches' in event ? event.touches[0].clientX : event.clientX;
    dragOffset.value = 0;
};
// Handle dragging
const onDrag = (event) => {
    if (!isDragging.value)
        return;
    const currentX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    dragOffset.value = currentX - startX.value;
};
// End dragging and decide which slide to move to
const endDrag = () => {
    if (!isDragging.value)
        return;
    isDragging.value = false;
    // Determine if the user has dragged enough to change the slide
    if (dragOffset.value > 50 && currentIndex.value > 0) {
        prevSlide();
    }
    else if (dragOffset.value < -50 && currentIndex.value < slides.length - 1) {
        nextSlide();
    }
    dragOffset.value = 0;
};
// Move to the previous slide
const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
    else {
        currentIndex.value = slides.length - 1; // Loop to the last slide
    }
};
// Move to the next slide
const nextSlide = () => {
    if (currentIndex.value < slides.length - 1) {
        currentIndex.value++;
    }
    else {
        currentIndex.value = 0; // Loop to the first slide
    }
};
// Move to a specific slide
const goToSlide = (index) => {
    currentIndex.value = index;
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMousedown: (__VLS_ctx.startDrag) }, ...{ onMousemove: (__VLS_ctx.onDrag) }, ...{ onMouseup: (__VLS_ctx.endDrag) }, ...{ onMouseleave: (__VLS_ctx.endDrag) }, ...{ onTouchstart: (__VLS_ctx.startDrag) }, ...{ onTouchmove: (__VLS_ctx.onDrag) }, ...{ onTouchend: (__VLS_ctx.endDrag) }, ...{ class: ("relative w-full overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex transition-transform duration-500 ease-in-out") }, ...{ style: (({ transform: `translateX(calc(-${__VLS_ctx.currentIndex * 100}% + ${__VLS_ctx.dragOffset}px))` })) }, });
    for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.slides))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("min-w-full flex-shrink-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((image)), ...{ class: ("object-cover object-center w-full h-full") }, alt: ("stats"), });
        // @ts-ignore
        [startDrag, startDrag, onDrag, onDrag, endDrag, endDrag, endDrag, currentIndex, dragOffset, slides,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.prevSlide) }, ...{ class: ("absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2") }, });
    // @ts-ignore
    [prevSlide,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextSlide) }, ...{ class: ("absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2") }, });
    // @ts-ignore
    [nextSlide,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2") }, });
    for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.slides))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.goToSlide(index);
                    // @ts-ignore
                    [slides, goToSlide,];
                } }, key: ((index)), ...{ class: ((__VLS_ctx.currentIndex === index ? 'bg-gray-800' : 'bg-gray-300')) }, ...{ class: ("w-3 h-3 rounded-full cursor-pointer") }, });
        __VLS_styleScopedClasses = (currentIndex === index ? 'bg-gray-800' : 'bg-gray-300');
        // @ts-ignore
        [currentIndex,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['transition-transform'];
        __VLS_styleScopedClasses['duration-500'];
        __VLS_styleScopedClasses['ease-in-out'];
        __VLS_styleScopedClasses['min-w-full'];
        __VLS_styleScopedClasses['flex-shrink-0'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-1/2'];
        __VLS_styleScopedClasses['left-4'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['-translate-y-1/2'];
        __VLS_styleScopedClasses['bg-gray-500'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-1/2'];
        __VLS_styleScopedClasses['right-4'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['-translate-y-1/2'];
        __VLS_styleScopedClasses['bg-gray-500'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bottom-4'];
        __VLS_styleScopedClasses['left-1/2'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['-translate-x-1/2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['space-x-2'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['cursor-pointer'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                slides: slides,
                currentIndex: currentIndex,
                dragOffset: dragOffset,
                startDrag: startDrag,
                onDrag: onDrag,
                endDrag: endDrag,
                prevSlide: prevSlide,
                nextSlide: nextSlide,
                goToSlide: goToSlide,
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
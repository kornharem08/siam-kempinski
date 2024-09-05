import { computed } from 'vue';
import Card from './Card.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    sectionTitle: { type: String, required: true },
    cards: {
        type: Array
    },
});
const sectionTitleUrl = computed(() => new URL(props.sectionTitle, import.meta.url).href);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        sectionTitle: { type: String, required: true },
        cards: {
            type: Array
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("xl:px-6 px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("w-auto mx-auto m-10 h-[28px] sm:h-[36px]") }, src: ((__VLS_ctx.sectionTitleUrl)), });
    // @ts-ignore
    [sectionTitleUrl,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap justify-center") }, });
    for (const [card, index] of __VLS_getVForSourceType((props.cards))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("w-full xl:w-1/2 px-4 mb-6") }, });
        // @ts-ignore
        [Card,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({ id: ((card.id)), image: ((card.image)), facebookLink: ((card.facebookLink)), link: ((card.link)), country: ((card.country)), details: ((card.details)), title: ((card.title)), description: ((card.description)), currentBid: ((card.currentBid)), dataSource: ((card.dataSource)), }));
        const __VLS_1 = __VLS_0({ id: ((card.id)), image: ((card.image)), facebookLink: ((card.facebookLink)), link: ((card.link)), country: ((card.country)), details: ((card.details)), title: ((card.title)), description: ((card.description)), currentBid: ((card.currentBid)), dataSource: ((card.dataSource)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ id: ((card.id)), image: ((card.image)), facebookLink: ((card.facebookLink)), link: ((card.link)), country: ((card.country)), details: ((card.details)), title: ((card.title)), description: ((card.description)), currentBid: ((card.currentBid)), dataSource: ((card.dataSource)), }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Card, __VLS_1));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['xl:px-6'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['w-auto'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['m-10'];
        __VLS_styleScopedClasses['h-[28px]'];
        __VLS_styleScopedClasses['sm:h-[36px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['xl:w-1/2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['mb-6'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Card: Card,
                sectionTitleUrl: sectionTitleUrl,
            };
        },
        props: {
            sectionTitle: { type: String, required: true },
            cards: {
                type: Array
            },
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        sectionTitle: { type: String, required: true },
        cards: {
            type: Array
        },
    },
});
;
//# sourceMappingURL=CardSection.vue.js.map
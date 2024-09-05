import { ref } from "vue";
import CardSection from "./components/CardSection.vue";
import AboutContent from "./components/AboutContent.vue";
import AuctionInfo from "./components/AuctionInfo.vue";
// import swipperCard from "./components/swipperCard.vue"
import IntroductionSection from "./components/IntroductionSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterContent from "./components/FooterContent.vue";
import BackToTop from "./components/BackToTop.vue";
import { places as initialPlaces } from "./places";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const places = ref([...initialPlaces]); // Make places reactive
function updatePrice() {
    let updatedPrice = [
        {
            id: "siam_bangkok",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "sindhorn_bangkok",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "apurva-bali_indonesia",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "capital_singapore",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "st-moritz_switzerland",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "adlon-berlin_germany",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "muchen_germany",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "palace-engelberg_swiss-alps_switzerland",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "hotel-aqaba_red-sea_jordan",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "hotel-ishtar_dead-sea_jordan",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "nile-hotel_cairo_egypt",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "villa-rosa_olare-mara_kenya",
            updatedPrice: Math.random() * 100,
        },
        {
            id: "hotel-cancun_mexico",
            updatedPrice: Math.random() * 100,
        },
    ];
    places.value = places.value.map((place) => {
        place.items = place.items.map((location) => {
            const updatedItem = updatedPrice.find((updated) => updated.id === location.id);
            if (updatedItem) {
                location.currentBid = updatedItem.updatedPrice;
            }
            return location;
        });
        return place;
    });
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
    // @ts-ignore
    [HeroSection,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HeroSection, new HeroSection({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(HeroSection, __VLS_1));
    // @ts-ignore
    [IntroductionSection,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(IntroductionSection, new IntroductionSection({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(IntroductionSection, __VLS_6));
    // @ts-ignore
    [AboutContent,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(AboutContent, new AboutContent({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(AboutContent, __VLS_11));
    // @ts-ignore
    [AuctionInfo,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(AuctionInfo, new AuctionInfo({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(AuctionInfo, __VLS_16));
    for (const [itmes] of __VLS_getVForSourceType((__VLS_ctx.places))) {
        // @ts-ignore
        [CardSection,];
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(CardSection, new CardSection({ sectionTitle: ((itmes.titleImage)), cards: ((itmes.items)), }));
        const __VLS_21 = __VLS_20({ sectionTitle: ((itmes.titleImage)), cards: ((itmes.items)), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        ({}({ sectionTitle: ((itmes.titleImage)), cards: ((itmes.items)), }));
        const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(CardSection, __VLS_21));
        // @ts-ignore
        [places,];
    }
    // @ts-ignore
    [BackToTop,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(BackToTop, new BackToTop({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BackToTop, __VLS_26));
    // @ts-ignore
    [FooterContent,];
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(FooterContent, new FooterContent({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    ({}({}));
    const __VLS_34 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(FooterContent, __VLS_31));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                CardSection: CardSection,
                AboutContent: AboutContent,
                AuctionInfo: AuctionInfo,
                IntroductionSection: IntroductionSection,
                HeroSection: HeroSection,
                FooterContent: FooterContent,
                BackToTop: BackToTop,
                places: places,
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

//# sourceMappingURL=App.vue.js.map
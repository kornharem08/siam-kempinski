import { onMounted, ref } from "vue";
import CardSection from "./components/CardSection.vue";
import AboutContent from "./components/AboutContent.vue";
import AuctionInfo from "./components/AuctionInfo.vue";
// import swipperCard from "./components/swipperCard.vue"
import IntroductionSection from "./components/IntroductionSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterContent from "./components/FooterContent.vue";
import BackToTop from "./components/BackToTop.vue";
import { places as initialPlaces } from "./places";
import axios from "axios";
import moment from "moment";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// const userTimeZone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone);
const endTime = '2024-10-17T23:59:59+07:00';
const places = ref([...initialPlaces]); // Make places reactive
const endDate = moment.tz(endTime, 'Asia/Bangkok');
let interval;
onMounted(() => {
    updatePrice(); // Initial call to set the countdown immediately
    interval = setInterval(updatePrice, 15000); // Update every second
});
function updatePrice() {
    const now = moment.tz(new Date(), 'Asia/Bangkok');
    // Check if the current time has passed the end time
    if (now.isAfter(endDate)) {
        clearInterval(interval); // Stop the interval if the current time exceeds endTime
        console.log('API calls stopped as the current time exceeded the end time.');
        return;
    }
    // Continue making the API call
    axios
        .get('https://api.botio.io/ujung/v1.0/pages/228880973982315/posts')
        .then(response => {
        const pageId = 228880973982315;
        places.value = places.value.map((place) => {
            place.items = place.items.map((location) => {
                const updatedItem = response.data.auctions.find((updated) => updated.post_id == `${pageId}_${location.posts_id}`);
                if (updatedItem) {
                    location.currentBid = updatedItem.last_price;
                }
                return location;
            });
            return place;
        });
    })
        .catch(error => console.log(error));
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
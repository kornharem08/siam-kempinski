<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>

<template>
    <div class="back-to-top  fixed bottom-10 right-7 z-50" @click="backToTop" v-show="showBackToTop">
        <svg width="40" height="40">
            <g>
                <line x2="16" transform="translate(12 10)" fill="none" stroke="#5f5f5f" stroke-linecap="round"
                    stroke-width="2"></line>
                <line x1="8" y1="8" transform="translate(20 16)" fill="none" stroke="#5f5f5f" stroke-linecap="round"
                    stroke-width="2"></line>
                <line y1="16" transform="translate(20 16)" fill="none" stroke="#5f5f5f" stroke-linecap="round"
                    stroke-width="2"></line>
                <line x1="12" y1="8" x2="20" transform="translate(0 16)" fill="none" stroke="#5f5f5f"
                    stroke-linecap="round" stroke-width="2"></line>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.back-to-top {
    cursor: pointer;
    z-index: 3;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 80px;
    right: 20px;
    border-radius: 50%;

    background-color: #fff;
}


.back-to-top:hover {
    opacity: 0.8;
}
</style>

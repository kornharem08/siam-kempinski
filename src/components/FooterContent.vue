<script lang="ts" setup>
function onRedirect(url: string) {
    window.location.href = url;
}
</script>

<template>
    <div class="text-center flex justify-center flex-col lg:text-lg md:text-base text-sm mb-10" style="padding-bottom: 20px; color: #5f5f5f">
        <!-- Centered hr element -->
        <div class="flex justify-center py-20">
            <hr class="lg:w-[375px] w-[200px] border-[2px] lg:border-[4px] border-[#A58D7B] opacity-55 rounded-xl">
        </div>

        <div class="mb-7 text-xs lg:text-lg">
            For more information about BE Health Online Auction, please contact<br />
            <br />
            Siam Kempinski Hotel Bangkok<br />
            T: <a href="tel:+6621629000" class="">+66 (0)2 162 9000</a> | 
            E: <a href="mailto:pr.siambangkok@kempinski.com" class="">pr.siambangkok@kempinski.com</a><br />
            <a href="https://www.kempinski.com" target="_blank" class="">Kempinski.com</a><br />
            <br />
            Organised by
        </div>

        <div class="flex justify-center">
            <img src="@/assets/img/siam-kempinski-hotel-bangkok-logo.svg" @click="onRedirect('https://www.kempinski.com/en/bangkok')" class="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]" style="margin-right: 12px;" />
            <img src="@/assets/img/sindhorn-kempinski-hotel-bangkok-logo.svg" @click="onRedirect('https://www.kempinski.com/en/sindhorn')" class="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]" style="margin-left: 12px;" />
        </div>

        <div class="flex justify-center mt-6 ">
           <img src="@/assets/img/kempinski-logo.png" @click="onRedirect('https://www.kempinski.com')" class="lg:w-[120px] lg:h-[58px] w-[80px] h-[30px]"/> 
        </div>
    </div>
</template>

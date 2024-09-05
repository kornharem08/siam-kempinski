<template>
    <div
      class="relative w-full overflow-hidden"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
    >
      <!-- Slide container -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))` }"
      >
        <div v-for="(image, index) in slides" :key="index" class="min-w-full flex-shrink-0">
          <img :src="image" class="object-cover object-center w-full h-full" alt="stats" />
        </div>
      </div>
  
      <!-- Navigation controls -->
      <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2">
        Prev
      </button>
      <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2">
        Next
      </button>
  
      <!-- Pagination (optional) -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span
          v-for="(image, index) in slides"
          :key="index"
          :class="currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'"
          class="w-3 h-3 rounded-full cursor-pointer"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  // Images for slides
  const slides = [
  new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_04.jpg",
      import.meta.url
    ).href,
    new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_07.jpg",
      import.meta.url
    ).href,
    new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_04.jpg",
      import.meta.url
    ).href,
    new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_07.jpg",
      import.meta.url
    ).href,
    new URL(
      "@/assets/img/Be_Health/01_Autistic Application Series_04.jpg",
      import.meta.url
    ).href,
  ];
  
  // Track the current slide index and drag state
  const currentIndex = ref(0);
  const isDragging = ref(false);
  const startX = ref(0); // Starting X position of the drag
  const dragOffset = ref(0); // Distance moved during the drag
  
  // Start dragging
  const startDrag = (event: MouseEvent | TouchEvent) => {
    isDragging.value = true;
    startX.value = 'touches' in event ? event.touches[0].clientX : event.clientX;
    dragOffset.value = 0;
  };
  
  // Handle dragging
  const onDrag = (event: MouseEvent | TouchEvent) => {
    if (!isDragging.value) return;
  
    const currentX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    dragOffset.value = currentX - startX.value;
  };
  
  // End dragging and decide which slide to move to
  const endDrag = () => {
    if (!isDragging.value) return;
  
    isDragging.value = false;
  
    // Determine if the user has dragged enough to change the slide
    if (dragOffset.value > 50 && currentIndex.value > 0) {
      prevSlide();
    } else if (dragOffset.value < -50 && currentIndex.value < slides.length - 1) {
      nextSlide();
    }
  
    dragOffset.value = 0;
  };
  
  // Move to the previous slide
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    } else {
      currentIndex.value = slides.length - 1; // Loop to the last slide
    }
  };
  
  // Move to the next slide
  const nextSlide = () => {
    if (currentIndex.value < slides.length - 1) {
      currentIndex.value++;
    } else {
      currentIndex.value = 0; // Loop to the first slide
    }
  };
  
  // Move to a specific slide
  const goToSlide = (index: number) => {
    currentIndex.value = index;
  };
  </script>
  
  <style scoped>
  /* Optional styling for navigation buttons and pagination dots */
  button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  
  span.bg-gray-300 {
    width: 8px;
    height: 8px;
    display: inline-block;
  }
  
  span.bg-gray-800 {
    background-color: gray;
  }
  </style>
  
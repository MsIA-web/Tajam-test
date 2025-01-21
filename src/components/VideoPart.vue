<script setup>
import { ref } from 'vue'
import VideoModal from './VideoModal.vue'

const isModalOpen = ref(false)
const openModal = () => (isModalOpen.value = true)
</script>

<template>
 <section class="video">
  <div class="video__wrapper">
   <button class="video__button" @pointerup="openModal">
    <svg
     class="video__button-icon"
     width="100"
     height="101"
     viewBox="0 0 100 101"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      d="M38 29.5L38.7829 28.2205C38.32 27.9373 37.7401 27.9261 37.2667 28.1915C36.7932 28.4568 36.5 28.9572 36.5 29.5H38ZM38 71H36.5C36.5 71.5456 36.7963 72.0483 37.2737 72.3125C37.7512 72.5766 38.3344 72.5607 38.7967 72.2709L38 71ZM71.5 50L72.2967 51.2709C72.7367 50.9951 73.0028 50.5112 73 49.9919C72.9972 49.4726 72.7259 48.9916 72.2829 48.7206L71.5 50ZM97 50.5C97 76.4574 75.9574 97.5 50 97.5V100.5C77.6142 100.5 100 78.1142 100 50.5H97ZM50 97.5C24.0426 97.5 3 76.4574 3 50.5H0C0 78.1142 22.3858 100.5 50 100.5V97.5ZM3 50.5C3 24.5426 24.0426 3.5 50 3.5V0.5C22.3858 0.5 0 22.8858 0 50.5H3ZM50 3.5C75.9574 3.5 97 24.5426 97 50.5H100C100 22.8858 77.6142 0.5 50 0.5V3.5ZM36.5 29.5V71H39.5V29.5H36.5ZM38.7967 72.2709L72.2967 51.2709L70.7033 48.7291L37.2033 69.7291L38.7967 72.2709ZM72.2829 48.7206L38.7829 28.2205L37.2171 30.7795L70.7171 51.2794L72.2829 48.7206Z"
      fill="currentColor"
     />
    </svg>
   </button>
   <span class="video__button-text">WATCH OUR STORY</span>
  </div>
  <teleport to="body">
   <VideoModal :isOpen="isModalOpen" @closeModal="isModalOpen = false" />
  </teleport>
 </section>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;
@use '../assets/mixins/link-button' as *;

.video {
 background: linear-gradient(180deg, rgba(49, 29, 94, 0.85) 0%, rgba(9, 5, 47, 0.85) 100%),
  url('/video/background.png');
 background-size: cover;
 background-position: center;
 height: rem(550);
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
 padding: rem(197) 0 rem(190);
}
.video__wrapper {
 display: flex;
 flex-direction: column;
 align-items: center;
}
.video__button-icon {
 max-width: rem(97);
 max-height: rem(97);
 cursor: pointer;
 color: white;
 @include simple-link;
}
.video__button-text {
 font-weight: 900;
 color: white;
 letter-spacing: 0.05em;
 line-height: rem(28.8);
 margin-top: rem(24);
}
@media (pointer: coarse) {
 .video__button-icon {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
</style>

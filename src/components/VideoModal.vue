<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
 isOpen: Boolean
})

const videoRef = ref(null)

const emit = defineEmits(['closeModal'])
const closeModal = () => {
 videoRef.value
 emit('closeModal')
}

const closeIfClickOutside = (event) => {
 const target = event.target
 if (!target.closest('.modal-photo')) {
  closeModal()
 }
}
const preventScroll = (event) => {
 if (event instanceof TouchEvent) {
  if (event.touches.length > 1) {
   return
  }
 }
}
const dynamicHeight = () => {
 const vh = window.innerHeight * 0.01
 document.documentElement.style.setProperty('--vh', `${vh}px`)
}

onMounted(() => {
 dynamicHeight()
 window.addEventListener('resize', dynamicHeight)
})
onBeforeUnmount(() => {
 window.removeEventListener('resize', dynamicHeight)
})

watch(
 () => props.isOpen,
 (newVal) => {
  if (newVal) {
   document.body.addEventListener('wheel', preventScroll, {
    passive: false
   })
   document.body.addEventListener('touchmove', preventScroll, {
    passive: false
   })
   document.body.style.overflow = 'hidden'
   document.body.style.top = `-${window.scrollY}px`
   document.body.style.position = 'fixed'
  } else {
   const htmlElement = document.documentElement
   const originalScrollBehavior = htmlElement.style.scrollBehavior
   htmlElement.style.scrollBehavior = 'auto'

   document.body.removeEventListener('wheel', preventScroll)
   document.body.removeEventListener('touchmove', preventScroll)
   document.body.style.overflow = 'auto'
   const scrollY = document.body.style.top
   document.body.style.position = ''
   document.body.style.top = ''
   window.scrollTo(0, parseInt(scrollY || '0') * -1)

   setTimeout(() => {
    htmlElement.style.scrollBehavior = originalScrollBehavior || 'smooth'
   }, 0)
  }
 }
)
</script>

<template>
 <section class="modal" v-if="props.isOpen" @pointerup="closeIfClickOutside">
  <div class="modal__video">
   <iframe
    ref="videoRef"
    width="100%"
    height="100%"
    src="https://rutube.ru/play/embed/f884aa6ed5f94120b7304506042fe5bb/"
    frameBorder="0"
    allow="clipboard-write; autoplay"
    webkitAllowFullScreen
    mozallowfullscreen
    allowFullScreen
   ></iframe>
  </div>
  <button class="modal__button" @pointerup="closeModal">
   <img class="modal__button-img" src="/icons/close.svg" alt="Close video" />
  </button>
 </section>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;

.modal {
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 z-index: 50;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: black;
 background-color: rgba(0, 0, 0, 0.75);
 height: 100vh;
 height: calc(var(--vh, 1vh) * 100);
}
.modal__video {
 display: flex;
 align-items: center;
 max-width: rem(720);
 width: 70%;
 max-height: rem(405);
 min-height: rem(240);
 @media (orientation: landscape) {
  height: clamp(rem(240), 30vw, rem(405));
 }
 @media (orientation: portrait) {
  height: clamp(rem(240), 50vh, rem(405));
 }
}
.modal__button {
 width: rem(30);
 position: absolute;
 right: rem(40);
 top: rem(40);
 @include hover-mouse;
 @include mouse-click;
 cursor: pointer;
}
@media (pointer: coarse) {
 .modal__button {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
</style>

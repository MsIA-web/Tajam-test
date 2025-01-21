<script setup>
import { ref } from 'vue'
import ExpertiseCart from './ExpertiseCart.vue'

const expertiseCartArray = ref([
 {
  id: 1,
  imgSrc: '/expertise/web-development.png',
  title: 'WEB DESIGN & DEVELOPMENT'
 },
 {
  id: 2,
  imgSrc: '/expertise/branding.png',
  title: 'BRANDING IDENTITY'
 },
 {
  id: 3,
  imgSrc: '/expertise/mobile.png',
  title: 'MOBILE APP'
 },
 {
  id: 4,
  imgSrc: '/expertise/search.png',
  title: 'SEARCH ENGINE OPTIMIZATION'
 },
 {
  id: 5,
  imgSrc: '/expertise/game.png',
  title: 'GAME DEVELOPMENT'
 },
 {
  id: 6,
  imgSrc: '/expertise/love.png',
  title: 'MADE WITH LOVE'
 }
])
</script>

<template>
 <section class="expertise" id="expertise">
  <div class="expertise__wrapper">
   <div class="expertise__header">
    <h2 class="expertise__title">EXPERTISE</h2>
    <p class="expertise__text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
   </div>
   <ul class="expertise__list">
    <li v-for="cart in expertiseCartArray" :key="cart.id" class="expertise__item">
     <ExpertiseCart :img-src="cart.imgSrc" :title="cart.title" />
    </li>
   </ul>
  </div>
 </section>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;

.expertise {
 height: rem(752);
 display: flex;
 flex-direction: column;
 align-items: center;
 box-sizing: border-box;
 padding: rem(62) rem(10) rem(95) rem(10);
}
.expertise__wrapper {
 display: flex;
 flex-direction: column;
 align-items: center;
}
.expertise__header {
 display: flex;
 flex-direction: column;
 gap: rem(10);
 align-items: center;
}
.expertise__title {
 font-family: 'Playfair Display', sans-serif;
 font-weight: 700;
 font-size: rem(22);
 line-height: rem(29.33);
 letter-spacing: 0.05em;
 color: #413d4b;
}
.expertise__text {
 font-family: 'Playfair Display', sans-serif;
 font-weight: 400;
 font-size: rem(14);
 line-height: rem(18.66);
 letter-spacing: 0.07em;
 color: #2f2d35;
 height: rem(19);
 position: relative;
 padding-bottom: rem(18);
 text-align: center;
 overflow-wrap: break-word;
 height: 100%;
}
.expertise__text::before {
 content: '';
 position: absolute;
 bottom: 0;
 left: 50%;
 transform: translateX(-50%);
 width: rem(48);
 height: rem(2);
 background-color: #413d4b4d;
 line-height: rem(42.66);
}
.expertise__list {
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 74px 44px;
 margin-top: rem(81);
 align-items: center;
}
.expertise__item {
 display: flex;
 flex-direction: column;
 align-items: center;
 max-width: rem(277);
 max-height: rem(182);
}
@media (width < rem(768)) {
 .expertise {
  height: 100%;
 }
 .expertise__list {
  grid-template-columns: repeat(2, 1fr);
 }
}
@media (width < rem(520)) {
 .expertise__list {
  grid-template-columns: repeat(1, 1fr);
 }
}
</style>

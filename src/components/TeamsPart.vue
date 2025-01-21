<script setup>
import { ref } from 'vue'

import TeamsCart from './TeamsCart.vue'

const teamsCartArray = ref([
 {
  id: 1,
  imgSrc: '/',
  name: 'SEMF UCUK',
  job: 'CEO & FOUNDER'
 },
 {
  id: 2,
  imgSrc: '/',
  name: 'DIK ADALIN',
  job: 'ENGINEERING'
 },
 {
  id: 3,
  imgSrc: '/',
  name: 'JENG KOL',
  job: 'DESIGNER'
 },
 {
  id: 4,
  imgSrc: '/',
  name: 'PET ROMAK',
  job: 'MARKETING'
 }
])
</script>

<template>
 <section class="teams" id="teams">
  <div class="teams__header">
   <h2 class="teams__title">MEET OUR AMAZING TEAM</h2>
   <p class="teams__text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
  </div>
  <ul class="teams__list">
   <li class="teams__item" v-for="cart in teamsCartArray" :key="cart.id">
    <TeamsCart :img-src="cart.imgSrc" :name="cart.name" :job="cart.job" />
   </li>
  </ul>
  <div class="teams__promote">
   <p class="teams__promote-text">Become part of our dream team, let’s join us !</p>
   <button class="teams__button">WE ARE HIRING</button>
  </div>
 </section>
</template>

<style scoped lang="scss">
@use '/src/assets/utils/functions.scss' as *;
@use '/src/assets/mixins/links.scss' as *;
@use '/src/assets/mixins/link-button.scss' as *;

.teams {
 background: linear-gradient(180deg, rgba(49, 29, 94, 0.85) 0%, rgba(9, 5, 47, 0.85) 100%),
  url('/teams/background.png');
 background-size: cover;
 background-position: center;
 height: rem(712);
 display: flex;
 flex-direction: column;
 align-items: center;
 box-sizing: border-box;
 padding: rem(62) rem(10) rem(67) rem(10);
}
.teams__title {
 font-family: 'Playfair Display', sans-serif;
 color: #f9f9f9;
 font-weight: 700;
 font-size: rem(22);
 line-height: rem(29.33);
 letter-spacing: 0.05em;
 text-align: center;
}
.teams__text {
 font-family: 'Playfair Display', sans-serif;
 color: #f9f9f9;
 font-size: rem(14);
 line-height: rem(18.66);
 letter-spacing: 0.05em;
 text-align: center;
 margin-top: rem(10);
 padding-bottom: rem(18);
 position: relative;
 overflow-wrap: break-word;
}
.teams__text::before {
 content: '';
 position: absolute;
 bottom: 0;
 left: 50%;
 transform: translateX(-50%);
 width: rem(48);
 height: rem(2);
 background-color: #ffffff33;
}
.teams__list {
 display: flex;
 flex-direction: row;
 gap: rem(20);
 margin-top: rem(49);
 flex-wrap: wrap;
}
.teams__item {
 display: flex;
 flex-direction: column;
 align-items: center;
}
.teams__promote {
 margin-top: rem(64);
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: rem(21);
 position: relative;
}
.teams__promote-text {
 font-weight: 300;
 font-size: rem(14);
 line-height: rem(25.2);
 letter-spacing: 0.05em;
 text-align: center;
 color: white;
 text-wrap: balance;
}
.teams__button {
 @include link-button;
 padding: rem(7.5) rem(16);
}
@media (pointer: coarse) {
 .teams__button {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
@media (width < rem(960)) {
 .teams {
  height: 100%;
 }
 .teams__list {
  justify-content: center;
 }
 .teams__promote::before {
  content: '';
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: rem(67);
 }
}
@media (width < rem(478)) {
 .teams__promote {
  flex-direction: column;
  margin-top: 0;
 }
}
</style>

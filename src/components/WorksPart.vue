<script setup></script>

<template>
 <section class="works" id="works">
  <div class="works__header">
   <h2 class="works__title">OUR WORKS</h2>
   <a class="works__link">
    <span class="works__link-text">See All Project in dribbble</span>
   </a>
  </div>
  <ul class="works__list">
   <li class="works__item">
    <div class="item-fake item-fake--b6"></div>
    <div class="item-fake item-fake--ac"></div>
    <div class="item-fake item-fake--a1"></div>
    <div class="item-fake item-fake--a4"></div>
    <div class="item-fake item-fake--b6"></div>
    <div class="item-fake item-fake--8a"></div>
   </li>
   <li class="works__item">
    <div class="item-fake item-fake--8a"></div>
    <div class="item-fake item-fake--b6"></div>
    <div class="item-fake item-fake--a4"></div>
    <div class="item-fake item-fake--a1"></div>
    <div class="item-fake item-fake--ac"></div>
    <div class="item-fake item-fake--b6"></div>
   </li>
  </ul>
  <button class="works__button">LOAD MORE</button>
 </section>
</template>

<style scoped lang="scss">
@use '/src/assets/utils/functions.scss' as *;
@use '/src/assets/mixins/links.scss' as *;
.works {
 height: rem(734);
 display: flex;
 overflow: hidden;
 flex-direction: column;
 align-items: center;
 box-sizing: border-box;
 padding: rem(65) 0 rem(69);
}
.works__header {
 display: flex;
 flex-direction: row;
 gap: clamp(rem(20), 52vw, rem(797));
 padding: 0 rem(10);
 align-items: center;
}
.works__title {
 font-family: 'Playfair Display', sans-serif;
 font-weight: 700;
 font-size: rem(22);
 line-height: rem(26.4);
 letter-spacing: 0.05em;
 color: #413d4b;
}
.works__link-text {
 font-weight: 300;
 font-size: rem(14);
 line-height: rem(22.4);
 letter-spacing: 0.05em;
 color: #413d4b;
 position: relative;
 padding-right: rem(10);
}
.works__link {
 @include link-button;
 border: none;
 cursor: pointer;
}
.works__link-text::after {
 content: '';
 position: absolute;
 right: 0;
 top: 50%;
 transform: translateY(-50%);
 width: rem(6);
 height: rem(12);
 background-image: url('/icons/arrow.svg');
 background-size: cover;
 background-position: center;
}
.works__list {
 display: flex;
 flex-direction: row;
 justify-content: center;
 margin-top: rem(65);
 max-width: rem(1600);
 max-height: rem(400);
 width: 100vw;
}
.works__item {
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 max-width: rem(798);
 max-height: rem(400);
 width: 100%;
 height: 100%;
}
.item-fake {
 max-width: 266px;
 max-height: 200px;
 width: 100%;
 height: clamp(rem(96), 13vw, rem(200));
 cursor: pointer;
}
.item-fake--b6 {
 background-color: #b6b6b6;
}
.item-fake--ac {
 background-color: #acacac;
}
.item-fake--a4 {
 background-color: #a4a4a4;
}
.item-fake--a1 {
 background-color: #a1a1a1;
}
.item-fake--8a {
 background-color: #8a8a8a;
}
.works__button {
 margin-top: rem(65);
 @include link-button;
}
@media (width > rem(1600)) {
 .works__list {
  max-width: 100%;
  max-height: 100%;
 }

 .works__item {
  max-width: 100%;
  max-height: 100%;
 }
 .item-fake {
  max-width: 100%;
  max-height: 100%;
  height: clacl(100vw * 1.33);
 }
}
@media (pointer: coarse) {
 .works__button,
 .works__link {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
@media (width < rem(768)) {
 .works {
  height: 100%;
 }
 .works__header {
  gap: rem(10);
  justify-content: space-between;
  width: 98%;
 }
 .works__list {
  flex-direction: column;
  max-height: 100%;
 }
 .item-fake {
  height: clamp(rem(79), 26vw, rem(199));
 }
}
@media (width < rem(768)) {
 .works__header {
  flex-direction: column;
 }
}
</style>

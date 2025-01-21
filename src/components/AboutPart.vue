<script setup></script>

<template>
 <section class="about" id="about">
  <div class="about__wrapper">
   <img class="about__img" src="/favicon.svg" alt="company logo" />
   <div class="about__content">
    <h2 class="about__content-title">OUR STORY</h2>
    <p class="about__content-text">
     This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
     sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
     elit. Duis sed odio sit amet nibh vulputate cursus
    </p>
    <p class="about__content-text">
     Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
     mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
     per conubia nostra, per inceptos himenaeos.
    </p>
    <button class="about__content-button">LEARN MORE</button>
   </div>
  </div>
 </section>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;
@use '../assets/mixins/link-button' as *;
.about {
 min-height: rem(399);
 display: flex;
 align-items: center;
 padding: 0 rem(10);
}
.about__wrapper {
 max-width: rem(870);
 min-height: rem(260);
 display: flex;
 flex-direction: row;
 margin: auto;
 gap: clamp(rem(15), 6vw, rem(101));
}
.about__img {
 max-width: rem(233);
 max-height: rem(229);
}
.about__content-title {
 font-family: 'Playfair Display', sans-serif;
 font-weight: 700;
 font-size: rem(22);
 line-height: rem(29.33);
 color: #413d4b;
}
.about__content-text {
 font-weight: 300;
 font-size: rem(14);
 line-height: rem(22.4);
 letter-spacing: 0.03em;
 color: #413d4b;
 margin-top: rem(24);
}
.about__content-text:first-of-type {
 margin-top: rem(11);
}
.about__content-button {
 margin-top: rem(24);
 @include link-button;
}
@media (pointer: coarse) {
 .about__content-button {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}

@media (width < rem(768)) {
 .about__wrapper {
  flex-direction: column;
  align-items: center;
  margin: rem(49) 0;
 }
 .about__img {
  width: rem(180);
 }
 .about__content {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
}
</style>

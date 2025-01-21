<script setup></script>

<template>
 <section class="home" id="home">
  <div class="home__content">
   <h2 class="home__title">We Are Awesome Creative Agency</h2>
   <p class="home__text">
    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
    sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
    elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
    velit.
   </p>
   <button class="home__button">LEARN MORE</button>
  </div>
 </section>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;
@use '../assets/mixins/link-button' as *;

.home {
 background: linear-gradient(180deg, rgba(49, 29, 94, 0.85) 0%, rgba(9, 5, 47, 0.85) 100%),
  url('/home/background.png');
 background-size: cover;
 background-position: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 height: rem(670);
 box-sizing: border-box;
 padding: rem(221) rem(10) rem(207) rem(10);
}
.home__content {
 max-width: rem(780);
 display: flex;
 flex-direction: column;
 align-items: center;
 color: white;
}
.home__title {
 font-family: 'Playfair Display, sans-serif';
 font-weight: 900;
 font-size: rem(32);
 letter-spacing: 0.01em;
 padding-bottom: rem(16);
 position: relative;
 text-align: center;
}
.home__title::before {
 content: '';
 position: absolute;
 bottom: 0;
 left: 50%;
 transform: translateX(-50%);
 width: rem(47);
 height: rem(1);
 background-color: #00e0d0;
}
.home__text {
 margin-top: rem(24);
 font-weight: 300;
 font-size: rem(14);
 letter-spacing: 0.05em;
 line-height: rem(25.2);
 text-align: center;
}
.home__button {
 margin-top: rem(52);
 @include link-button;
}
@media (pointer: coarse) {
 .home__button {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
</style>

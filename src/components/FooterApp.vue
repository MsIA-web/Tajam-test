<script setup></script>

<template>
 <footer class="footer" id="footer">
  <ul class="footer__info">
   <li class="footer__info-item">
    <div class="footer__info-item-logo">
     <img class="footer__info-item-logo-img" src="/icons/hollow-logo.svg" alt="site logo" />
     <h3 class="footer__info-item-logo-title">tajam</h3>
    </div>
    <p class="footer__info-item-text">
     lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed
     odio sit amet auctror a ornare odio non mauris vitae erat in elit
    </p>
   </li>
   <li class="footer__info-address">
    <h3 class="footer__info-address-title">OUR STUDIO</h3>
    <a class="footer__info-address-text">
     Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia
    </a>
    <a href="tel:+622122243333" class="footer__info-address-tel">(+62) 21-2224 3333</a>
   </li>
   <li class="footer__info-media">
    <h3 class="footer__info-media-title">STAY IN TOUCH</h3>
    <div class="footer__info-media-subscribe">
     <span class="footer__info-media-text">Subscribe our newsletter</span>
     <button class="footer__info-media-button">
      <img
       class="footer__info-media-button-img"
       src="/icons/subscribe.svg"
       alt="subscribe button"
      />
     </button>
    </div>
    <ul class="footer__info-media-links">
     <li class="footer__info-media-link">
      <a href="">
       <img src="/icons/facebook.svg" alt="facebook links" />
      </a>
     </li>
     <li class="footer__info-media-link">
      <a href="">
       <img src="/icons/twitter.svg" alt="twitter links" />
      </a>
     </li>
     <li class="footer__info-media-link">
      <a href="">
       <img src="/icons/ball.svg" alt="ball links" />
      </a>
     </li>
     <li class="footer__info-media-link">
      <a href="">
       <img src="/icons/instagram.svg" alt="instagram links" />
      </a>
     </li>
     <li class="footer__info-media-link">
      <a href="">
       <img src="/icons/google.svg" alt="google links" />
      </a>
     </li>
     <li class="footer__info-media-link">
      <a href="">
       <img src="/icons/youtube.svg" alt="youtube links" />
      </a>
     </li>
    </ul>
   </li>
  </ul>
  <div class="footer__links">
   <ul class="footer__links-list">
    <li class="footer__links-item">
     <a class="footer__links-item-link" href="">HELP</a>
    </li>
    <li class="footer__links-item">
     <a class="footer__links-item-link" href="">TERMS & CONDITION</a>
    </li>
    <li class="footer__links-item">
     <a class="footer__links-item-link" href="">PRIVACY</a>
    </li>
   </ul>
   <span class="footer__copyright">Copyright © 2015 - Tajem Creative</span>
  </div>
 </footer>
</template>

<style scoped lang="scss">
@use '/src/assets/utils/functions.scss' as *;
@use '/src/assets/mixins/links.scss' as *;
.footer {
 background: linear-gradient(180deg, rgba(49, 29, 94, 0.85) 0%, rgba(9, 5, 47, 0.85) 100%),
  url('/footer/background.png');
 background-size: cover;
 background-position: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: rem(64) rem(10);
}
.footer__info {
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 justify-content: center;
}
.footer__info-item {
 display: flex;
 flex-direction: column;
 gap: rem(23);
 max-width: rem(284);
 padding-right: rem(34);
}
.footer__info-item-logo {
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: rem(11);
 padding-left: rem(10);
}
.footer__info-item-logo-img {
 max-width: rem(44);
 max-height: rem(47.5);
}
.footer__info-item-logo-title {
 font-weight: 100;
 font-size: rem(30);
 background: linear-gradient(90deg, #00e0d0 0%, #52a9cf 100%);
 background-clip: text;
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
}
.footer__info-item-text {
 line-height: rem(25.6);
 letter-spacing: -0.04em;
 color: white;
 text-align: left;
}
.footer__info-address {
 display: flex;
 flex-direction: column;
 max-width: rem(274);
 padding-right: rem(56);
}
.footer__info-address-title {
 font-weight: 700;
 line-height: rem(25.6);
 letter-spacing: 0.025em;
 color: white;
}
.footer__info-address-text {
 margin-top: rem(31);
 line-height: rem(25.6);
 letter-spacing: -0.04em;
 color: white;
 padding-left: rem(14);
 position: relative;
 @include simple-link;
}
.footer__info-address-text::before {
 content: '';
 position: absolute;
 left: rem(-14);
 width: rem(14);
 height: rem(19);
 background-image: url('/icons/marker.svg');
 background-size: cover;
 background-position: center;
}
.footer__info-address-tel {
 margin-top: rem(8);
 line-height: rem(25.6);
 letter-spacing: -0.04em;
 color: white;
 padding-left: rem(12);
 position: relative;
 @include simple-link;
}
.footer__info-address-tel::before {
 content: '';
 position: absolute;
 left: rem(-12);
 top: rem(6);
 width: rem(16);
 height: rem(16);

 background-image: url('/icons/call.svg');
 background-size: cover;
 background-position: center;
}

.footer__info-media {
 display: flex;
 flex-direction: column;
 max-width: rem(291);
}
.footer__info-media-title {
 font-weight: 700;
 line-height: rem(25.6);
 letter-spacing: 0.025em;
 color: white;
}
.footer__info-media-subscribe {
 margin-top: rem(31);
 display: flex;
 gap: rem(10);
 align-items: center;
}
.footer__info-media-text {
 font-weight: 500;
 font-size: rem(14);
 line-height: rem(22.4);
 letter-spacing: 0.04em;
 text-align: center;
 color: #ffffffbf;
 padding: rem(11) rem(25) rem(11) rem(15);
 border: 1px solid #ffffffbf;
}
.footer__info-media-button {
 background-color: #ffffff80;
 cursor: pointer;
 @include simple-link;
}
.footer__info-media-button-img {
 width: rem(24);
 height: rem(24);
 padding: rem(10) rem(23);
}
.footer__info-media-links {
 display: flex;
 align-items: center;
 margin-top: rem(28);
 gap: rem(8);
}
.footer__info-media-link {
 @include simple-link;
}
.footer__links {
 display: flex;
 align-items: center;
 margin-top: rem(65);
 gap: clamp(rem(10), 27vw, rem(407));
}
.footer__links-list {
 display: flex;
 align-items: center;
 gap: rem(36);
}
.footer__links-item {
 @include simple-link;
}
.footer__links-item-link {
 font-weight: 900;
 font-size: rem(14);
 line-height: rem(16.41);
 color: white;
 text-align: center;
 @include simple-link;
}
.footer__copyright {
 line-height: rem(25.6);
 letter-spacing: -0.03em;
 text-align: right;
 color: white;
}
@media (width < rem(1024)) {
 .footer__info {
  gap: rem(30);
 }
 .footer__info-item,
 .footer__info-address {
  padding-right: 0;
 }
}
@media (width < rem(959)) {
 .footer__info-item,
 .footer__info-address,
 .footer__info-media {
  align-items: center;
 }
 .footer__info-address-text,
 .footer__info-item-text {
  text-align: center;
 }
 .footer__links {
  gap: clamp(rem(10), 27vw, rem(407));
 }
 .footer__copyright {
  text-align: center;
 }
}
@media (width < rem(690)) {
 .footer__info-address-text {
  margin-left: rem(14);
 }
 .footer__links {
  flex-direction: column;
  justify-content: center;
 }
}
@media (pointer: coarse) {
 .footer__info-address-text,
 .footer__info-address-tel,
 .footer__info-media-button,
 .footer__info-media-link,
 .footer__links-item,
 .footer__links-item-link {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
</style>

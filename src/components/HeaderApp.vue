<script setup>
const handleClick = (event) => {
 event.preventDefault()
 const id = event.target.getAttribute('href')
 const section = document.querySelector(id)
 section.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
 <header class="header">
  <div class="header__logo">
   <img class="header__logo-img" src="/icons/hollow-logo.svg" alt="site logo" />
   <h2 class="header__logo-title">tajam</h2>
  </div>
  <nav class="header__nav">
   <ul class="header__nav-list">
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link header__nav-link--active" href="#home">
      HOME
     </a>
    </li>
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link" href="#about">ABOUT</a>
    </li>
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link" href="#expertise">EXPERTISE</a>
    </li>
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link" href="#teams">TEAMS</a>
    </li>
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link" href="#works">WORKS</a>
    </li>
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link" href="#form">PEOPLE SAY</a>
    </li>
    <li class="header__nav-item">
     <a @pointerup="handleClick" class="header__nav-link" href="#footer">CONTACT</a>
    </li>
   </ul>
  </nav>
 </header>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;

.header {
 max-width: rem(939);
 width: 100%;
 margin: auto;
 padding-top: rem(15);
 display: flex;
 flex-direction: row;
 gap: clamp(rem(10), 1vw, rem(279));
 align-items: center;
 justify-content: space-between;
 position: absolute;
 background: transparent;
 z-index: 10;
 left: 50%;
 transform: translateX(-50%);
}
.header__logo {
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: rem(11);
 padding-left: rem(10);
}
.header__logo-img {
 max-width: rem(44);
 max-height: rem(47.5);
}
.header__logo-title {
 font-weight: 100;
 font-size: rem(30);
 background: linear-gradient(90deg, #00e0d0 0%, #52a9cf 100%);
 background-clip: text;
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
}
.header__nav {
 padding-right: rem(10);
}
.header__nav-list {
 display: flex;
 flex-direction: row;
 gap: clamp(rem(10), 2vw, rem(26));
 align-items: center;
 flex-wrap: wrap;
 justify-content: center;
}
.header__nav-item {
 font-weight: 900;
 font-size: rem(13);
 @include hover-mouse;
 @include mouse-click;
 cursor: pointer;
}
.header__nav-link {
 color: white;
}
.header__nav-link--active {
 color: #00e0d0;
}

@media (pointer: coarse) {
 .header__nav-item {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}

@media (width < rem(479)) {
 .header {
  flex-direction: column;

  &__logo {
   padding-left: 0;
  }

  &__nav {
   padding-right: 0;
  }
 }
}
</style>

<script setup>
const props = defineProps({
 imgSrc: String,
 title: String
})
</script>

<template>
 <img class="expertise__item-img" :src="props.imgSrc" :alt="props.title" />
 <h3 class="expertise__item-title">{{ props.title }}</h3>
 <p class="expertise__item-text">
  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
 </p>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;

.expertise__item-img {
 max-width: rem(50);
 max-height: rem(50);
}
.expertise__item-title {
 font-weight: 900;
 font-size: rem(14);
 line-height: rem(16.41);
 letter-spacing: 0.05em;
 color: #413d4b;
 margin-top: rem(32);
 text-align: center;
}
.expertise__item-text {
 font-size: rem(14);
 line-height: rem(22.4);
 letter-spacing: 0.05em;
 color: #333333;
 text-align: center;
 margin-top: rem(18);
}
</style>

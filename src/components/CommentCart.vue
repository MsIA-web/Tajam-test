<script setup>
const props = defineProps({
 comment: String,
 name: String,
 job: String
})
</script>

<template>
 <div class="comment-cart">
  <p class="comment-cart__text">{{ props.comment }}</p>
  <div class="comment-cart__info">
   <span class="comment-cart__name">{{ props.name }}</span>
   <span class="comment-cart__job">{{ props.job }}</span>
  </div>
 </div>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;

.comment-cart {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: rem(44);
 max-width: rem(771);
}
.comment-cart__text {
 font-family: 'Playfair Display', sans-serif;
 line-height: rem(25.6);
 letter-spacing: 0.025em;
 text-align: center;
 color: white;
}
.comment-cart__info {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: rem(1);
}
.comment-cart__name {
 font-weight: 700;
 font-size: rem(14);
 line-height: rem(22.4);
 letter-spacing: 0.05;
 text-align: center;
 color: white;
}
.comment-cart__job {
 font-weight: 300;
 font-size: rem(13);
 line-height: rem(20.8);
 text-align: center;
 color: white;
}
</style>

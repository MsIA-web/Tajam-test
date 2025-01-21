<script setup>
const props = defineProps({
 imgSrc: String,
 name: String,
 job: String
})
</script>

<template>
 <img
  class="teams__item-img"
  v-if="props.imgSrc !== '/'"
  :src="props.imgSrc"
  :alt="`${props.name} ${props.job}`"
 />
 <div class="teams__item-reserve" v-else></div>
 <div class="teams__item-info">
  <h3 class="teams__item-name">{{ props.name }}</h3>
  <h3 class="teams__item-job">{{ props.job }}</h3>
 </div>
</template>

<style scoped lang="scss">
@use '/src/assets/utils/functions.scss' as *;

.teams__item-img {
 max-width: rem(220);
 max-height: rem(230);
 width: 100%;
 height: 100%;
}
.teams__item-reserve {
 background-color: white;
 width: rem(220);
 height: rem(230);
}
.teams__item-info {
 width: calc(100% - rem(2));
 padding: rem(19) 0 rem(22) 0;
 border: 1px solid #fafafa80;
 border-top: none;
}
.teams__item-name {
 font-weight: 700;
 font-size: rem(14);
 line-height: rem(16.41);
 letter-spacing: 0.05em;
 text-align: center;
 color: #fafafa;
 margin-top: rem(19);
}
.teams__item-job {
 font-weight: 300;
 font-size: rem(13);
 line-height: rem(15.23);
 text-align: center;
 color: #fafafa;
 margin-top: rem(6);
}
</style>

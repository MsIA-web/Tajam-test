<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<template>
 <div class="wrapper">
  <DefaultLayout />
 </div>
</template>

<style scoped lang="scss">
@use '/src/assets/utils/functions.scss' as *;

.wrapper {
 margin: auto;
 position: relative;
}
</style>

<script setup>
import { ref } from 'vue'
import CommentCart from './CommentCart.vue'

const commentsArray = ref([
 {
  id: 1,
  isVisible: false,
  name: 'ALICE WANDERSON',
  job: 'HEAD OF INNOVATION',
  comment:
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
  avatar: '/avatars/avatar-1.png'
 },
 {
  id: 2,
  isVisible: false,
  name: 'ROBERT HARRISON',
  job: 'PRODUCT MANAGER',
  comment:
   'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked more obscure Latin words, consectetur, from a Lorem Ipsum passage, the cites of the word in classical literature, discovered the undoubtable source.',
  avatar: '/avatars/avatar-2.png'
 },
 {
  id: 3,
  isVisible: true,
  name: 'JANE GALADRIEL',
  job: 'CEO TENGKUREP',
  comment:
   "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
  avatar: '/avatars/avatar-3.png'
 },
 {
  id: 4,
  isVisible: false,
  name: 'SOPHIA MARTINEZ',
  job: 'MARKETING LEAD',
  comment:
   'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum.',
  avatar: '/avatars/avatar-4.png'
 },
 {
  id: 5,
  isVisible: false,
  name: 'LUCAS MCDONALD',
  job: 'UI/UX DESIGNER',
  comment:
   "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. A search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum passages in use today may contain randomised words which don't look believable.",
  avatar: '/avatars/avatar-5.png'
 }
])

const handleClick = (id) => {
 commentsArray.value.forEach((comment) => {
  comment.isVisible = false

  if (comment.id === id) {
   comment.isVisible = true
  }
 })
}
</script>
<template>
 <section class="comment">
  <span class="comment__quote">“</span>
  <div class="comment__messages">
   <ul class="comment__list">
    <li
     class="comment__item"
     v-for="cart in commentsArray"
     :key="cart.id"
     :class="cart.isVisible ? 'comment__item--visible' : 'comment__item--hidden'"
    >
     <CommentCart
      :is-visible="cart.isVisible"
      :name="cart.name"
      :job="cart.job"
      :comment="cart.comment"
     />
    </li>
   </ul>
  </div>
  <ul class="comment__avatars">
   <li v-for="comment in commentsArray" :key="comment.id">
    <img :src="comment.avatar" alt="people photo" @click="handleClick(comment.id)" />
   </li>
  </ul>
 </section>
</template>
<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;
.comment {
 background: linear-gradient(180deg, rgba(49, 29, 94, 0.85) 0%, rgba(9, 5, 47, 0.85) 100%),
  url('/video/background.png');
 background-size: cover;
 background-position: center;
 max-height: rem(500);
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: rem(40);
 padding-bottom: rem(69);
}
.comment__quote {
 font-family: 'Playfair Display', sans-serif;
 font-weight: 500;
 font-size: rem(100);
 line-height: rem(120);
 letter-spacing: 0.05em;
 text-align: center;
 color: white;
}
.comment__messages {
 max-width: rem(771);
 overflow: hidden;
 padding: 0 rem(10);
}
.comment__list {
 display: flex;
}
.comment__item {
 opacity: 0;
 transform: translateY(20px);
 transition:
  opacity 0.5s ease,
  transform 0.5s ease;
 pointer-events: none;
}
.comment__item--visible {
 display: block;
 opacity: 1;
 transform: translateY(0);
 pointer-events: auto;
}
.comment__item--hidden {
 display: none;
 opacity: 0;
 transform: translateY(20px);
 pointer-events: none;
}
.comment__avatars {
 display: flex;
 gap: rem(13);
 margin-top: rem(39);
 align-items: center;
}
@media (width < rem(478)) {
 .comment {
  max-height: 100%;
  height: 100%;
 }
}
</style>

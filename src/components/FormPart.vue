<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const formRef = ref(null)
const nameRef = ref(null)
const emailRef = ref(null)
const telRef = ref(null)
const subjectRef = ref(null)
const messageRef = ref(null)

function validateEmail(email) {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 return emailRegex.test(email)
}

function validatePhone(tel) {
 const phoneRegex = /^[+]?\d{1}(\d{3})?[-]?\d{3}[-]?\d{2}[-]?\d{2}$/
 return phoneRegex.test(tel)
}

function sanitizeInput(input) {
 return input.replace(/[&<>"'/]/g, (match) => {
  const map = {
   '&': '&amp;',
   '<': '&lt;',
   '>': '&gt;',
   '"': '&quot;',
   "'": '&#x27;',
   '/': '&#x2F;'
  }
  return map[match]
 })
}

function setError(fieldId, message) {
 const field = document.getElementById(fieldId)
 const existingError = field.parentElement.querySelector('.error-message')
 if (existingError) {
  existingError.remove()
 }
 const errorElement = document.createElement('div')
 errorElement.classList.add('error-message')
 errorElement.style.color = 'red'
 errorElement.textContent = message

 field.insertAdjacentElement('afterend', errorElement)

 field.classList.add('error')
}

function clearErrors() {
 const errorMessages = document.querySelectorAll('.error-message')
 errorMessages.forEach((error) => error.remove())

 const errorFields = document.querySelectorAll('.error')
 errorFields.forEach((field) => field.classList.remove('error'))
}

const chekingInputs = (event) => {
 event.preventDefault()

 clearErrors()

 let isValid = true

 const name = sanitizeInput(nameRef.value.value.trim())
 const email = sanitizeInput(emailRef.value.value.trim())
 const tel = sanitizeInput(telRef.value.value.trim())
 const subject = sanitizeInput(subjectRef.value.value.trim())
 const message = sanitizeInput(messageRef.value.value.trim())

 if (!name || name.length < 2) {
  setError('name', 'Name must contain at least 2 characters.')
  isValid = false
 }

 if (!email || !validateEmail(email)) {
  setError('email', 'Please enter a valid email address.')
  isValid = false
 }

 if (!tel || !validatePhone(tel)) {
  setError('tel', 'Please enter a valid phone number. Example: +12223334455')
  isValid = false
 }

 if (!subject || subject.length < 3) {
  setError('subject', 'Subject must contain at least 3 characters.')
  isValid = false
 }

 if (!message || message.length < 8) {
  setError('message', 'Message must contain at least 8 characters.')
  isValid = false
 }

 if (isValid) {
  clearErrors()
  setTimeout(() => {
   alert('Form submitted successfully!')
   formRef.value.reset()
  }, 100)
 }
}

onMounted(() => {
 nextTick()

 if (!formRef.value) {
  return
 }
 formRef.value.addEventListener('submit', chekingInputs)
})
onBeforeUnmount(() => {
 formRef.value.removeEventListener('submit', chekingInputs)
})
</script>

<template>
 <section class="form" id="form">
  <h2 class="form__title">GIVE US A GOOD NEWS</h2>
  <form ref="formRef" class="form__container" action="POST">
   <div class="form__filed">
    <input
     ref="nameRef"
     id="name"
     class="form__input"
     name="name"
     type="text"
     placeholder="Name"
     required
     maxlength="20"
    />
   </div>
   <div class="form__filed">
    <input
     ref="emailRef"
     class="form__input"
     name="email"
     type="email"
     id="email"
     placeholder="Email"
     required
     maxlength="20"
    />
   </div>
   <div class="form__filed">
    <input
     ref="telRef"
     class="form__input"
     id="tel"
     name="tel"
     type="tel"
     placeholder="+1 (999) 999-99-99"
     required
     maxlength="20"
    />
   </div>
   <div class="form__filed">
    <input
     ref="subjectRef"
     class="form__input"
     name="subject"
     placeholder="subject"
     type="text"
     id="subject"
     required
     maxlength="20"
    />
   </div>
   <div class="form__filed">
    <textarea
     ref="messageRef"
     class="form__textarea"
     id="message"
     name="message"
     cols="30"
     rows="10"
     required
     maxlength="200"
     placeholder="Your Message"
    ></textarea>
   </div>
   <button class="form__field-button">SUBMIT</button>
  </form>
 </section>
</template>

<style scoped lang="scss">
@use '../assets/utils/functions' as *;
@use '../assets/mixins/links' as *;
.form {
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: rem(62) rem(10) rem(72) rem(10);
 max-height: rem(722);
}
.form__title {
 font-family: 'Playfair Display', sans-serif;
 font-weight: 700;
 font-size: rem(22);
 line-height: rem(29.33);
 letter-spacing: 0.05em;
 align-items: center;
 color: #413d4b;
}
.form__container {
 display: flex;
 flex-direction: column;
 align-items: center;
 max-width: rem(460);
 width: 100%;
 min-height: rem(588);
 gap: rem(24);
 margin-top: rem(31);
}
.form__filed {
 width: 100%;
}
.form__input {
 width: 100%;
 height: rem(44);
 padding: 0;
 border-radius: 0;
 border: 1px solid #0000001a;
 padding: rem(11) 0 rem(11) rem(19);
 box-sizing: border-box;

 &::placeholder {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: rem(14);
  line-height: rem(22.4);
  letter-spacing: 0.05em;
  color: #413d4b;
 }
}
.form__textarea {
 width: 100%;
 height: rem(200);
 padding: rem(12) rem(19);
 border-radius: 0;
 border: 1px solid #0000001a;
 box-sizing: border-box;
 resize: none;
}
.form__field-button {
 @include link-button;
 padding: rem(7.5) rem(31.5);
}
.error {
 border-color: red;
}
@media (pointer: coarse) {
 .form__field-button {
  @include touch;
  &:hover {
   pointer-events: none;
  }
 }
}
</style>

<template>
  <div class="wrapper">
    <div class="base-modal">
      <header class="base-modal-header">
        <div>
          <img
              class="icon"
              src="https://i.imgur.com/ZwUCez6.png"
              alt="Mac"
          >
        </div>
        <h1>{{ title }}</h1>
        <div>
          <img
              style="cursor: pointer"
              @click="emit('close')"
              class="icon"
              src="https://i.imgur.com/B4iIdkl.png"
              alt="Close">
        </div>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer class="base-modal-footer">
        <div class="social-media d-block">
          <h4>Any doubts, contact to me:</h4>
          <a v-for="social in socials" :keys="social.id" :href="social.href" target="_blank">
            <img :src="social.src" :alt="social.alt" :title="social.title">
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>

const {
  title = ''
} = defineProps({
  title: String,
  showModal: Boolean
})

const emit = defineEmits(['close'])

const socials = [
  {
    id: 0,
    src: 'https://i.imgur.com/lyw4LJi.png',
    href: 'https://www.vertocode.com/contact',
    alt: 'Contact',
    title: 'Contact'
  },
  {
    id: 1,
    src: 'https://i.imgur.com/g9chQFf.png',
    href: 'https://www.linkedin.com/in/evertonvanoni/',
    alt: 'Linkedin',
    title: 'Linkedin'
  },
  {
    id: 1,
    src: 'https://i.imgur.com/IEHUVU9.png',
    href: 'mailto:evertonvanoni1@gmail.com',
    alt: 'Gmail',
    title: 'Gmail'
  }
]
</script>

<style lang="scss">
.base-modal {
  border: 1px solid #ccc;
  border-radius: 10px;
  position: fixed;
  z-index: 1;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  .base-modal-header {
    background-color: #007bff;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .close-button {
    cursor: pointer;
    font-size: 1.5rem;
  }

  main {
    padding: 1rem;
    flex-grow: 1;
    overflow-y: auto;
  }

  .base-modal-footer {
    padding: 1rem;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 768px) {
    .base-modal-header {
      padding: 0.2rem;
    }
    width: 90%;
    top: 1%;
    min-width: 95%;
  }

  @media (min-width: 600px) {
    min-width: 600px;
  }
}
</style>
<template>
  <div class="wrapper">
    <div class="base-modal">
      <header>
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
      <footer>
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
    alt: 'Gmail',
    title: 'Gmail'
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
  border: blue solid 1px;
  border-radius: 1%;
  position: absolute;
  z-index: 1;
  top: 12%;
  left: 15%;
  width: 70%;
  height: 80%;
  background-color: white;
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    height: max-content;
    .icon {
      width: 4rem;
    }
  }
  main {
    height: 70%;
  }
  footer {
    display: flex;
    min-height: 100px;
    justify-content: center;
    align-items: end;
  }
}
</style>
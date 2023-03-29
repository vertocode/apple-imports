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
              class="icon"
              src="https://i.imgur.com/B4iIdkl.png"
              alt="Close">
        </div>
      </header>
      <slot></slot>
      <footer>
        <h4>Any doubts, talk to me:</h4>
        <div class="social-media">
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
  title: String
})

const socials = [
  {
    id: 0,
    src: 'test',
    href: 'https://www.vertocode.com/contact',
    alt: 'test',
    title: 'test'
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
  footer {
    display: flex;
    min-height: 100px;
    justify-content: center;
    align-items: end;
  }
}
</style>
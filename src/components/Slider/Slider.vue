<template>
  <div class="transition d-flex justify-content-center" :class="{ 'justify-content-between': allImages?.length > 1 }">
    <button v-if="allImages?.length > 1" @click="displayPreviousSlide" class="slider-btn">Previous</button>
    <transition name="slide-fade" mode="out-in">
      <div :key="selectedImage">
        <img :src="selectedImage" :key="selectedImage" :alt="selectedImage"/>
      </div>
    </transition>
    <button v-if="allImages?.length > 1" @click="displayNextSlide" class="slider-btn">Next</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      urls: [],
      selectedImage: null,
      imageIndex: 0,
    };
  },
  computed: {
    allImages() {
      return typeof this.$props.images === 'string' ? [this.$props.images] : this.$props.images
    }
  },
  props: {
    images: Array | String
  },
  mounted() {
    this.urls = this.allImages
    this.selectedImage = this.urls[0];
  },
  methods: {
    displayNextSlide() {
      if (this.imageIndex < this.urls.length - 1) {
        this.imageIndex++;
      } else {
        this.imageIndex = 0;
      }
      this.selectedImage = this.urls[this.imageIndex];
    },
    displayPreviousSlide() {
      if (this.imageIndex > 0) {
        this.imageIndex--;
      } else {
        this.imageIndex = this.urls.length - 1;
      }
      this.selectedImage = this.urls[this.imageIndex];
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.25s ease;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

.slider-btn {
  margin-bottom: 1em;
  background: rgb(41, 41, 41);
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  min-width: 100px;
  margin: 2em 0.5em;
}
</style>
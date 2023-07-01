<template>
  <div class="transition d-flex justify-content-center" :class="{ 'justify-content-between': allImages?.length > 1 }">
    <div class="content-btn-slider">
      <button v-if="allImages?.length > 1" @click="displayPreviousSlide" class="slider-btn">
        <img src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180850.png" alt="previous">
      </button>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div :key="selectedImage">
        <img :src="selectedImage" :key="selectedImage" :alt="selectedImage"/>
      </div>
    </transition>
    <div class="content-btn-slider">
      <button v-if="allImages?.length > 1" @click="displayNextSlide" class="slider-btn">
        <img src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180852.png" alt="next">
      </button>
    </div>
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
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  margin: 2em 0.5em;
}

.slider-btn:hover {
  background-color: gray;
}

.slider-btn img {
  width: 50px ;
  height: 50px !important; ;
}

.content-btn-slider {
  display: flex;
  align-items: center;
}
</style>
<template>
  <div style="position: relative" class="transition d-flex justify-content-between" :class="{ 'justify-content-between': allImages?.length > 1 }">
    <div class="content-btn-slider">
      <button v-if="allImages?.length > 1" @click="displayPreviousSlide" class="slider-btn">
        <img src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180850.png" alt="previous" />
      </button>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div :key="selectedImage" v-if="selectedImage" class="d-flex justify-content-center align-self-center">
        <Loading v-if="!selectedImage" style="width: 200px; height: 200px; position: absolute; margin: auto" :is-loading="true"/>
        <img v-else class="transition-image" :src="selectedImage" :key="selectedImage" :alt="selectedImage" :style="{ 'max-height': isMini ? '10rem' : '100%' }"/>
      </div>
    </transition>
    <div class="content-btn-slider">
      <button v-if="allImages?.length > 1" @click="displayNextSlide" class="slider-btn">
        <img src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180852.png" alt="next" />
      </button>
    </div>
  </div>
</template>

<script>
import Loading from '../Loading/Loading.vue'

export default {
  name: "App",
  components: {Loading},
  data() {
    return {
      urls: [],
      selectedImage: null,
      imageIndex: 0,
      loading: false // Adicionando o estado de carregamento
    };
  },
  computed: {
    allImages() {
      return typeof this.$props.images === 'string' ? [this.$props.images] : this.$props.images
    }
  },
  props: {
    images: Array | String,
    selectedImageByColor: {
      type: String,
      default: null
    },
    isMini: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selectedImageByColor: function (value) {
      this.updateSelectedImage(value)
    }
  },
  mounted() {
    this.urls = this.allImages
    this.selectedImage = this.urls[0];
  },
  methods: {
    updateSelectedImage(value) {
      this.selectedImage = value
    },
    displayNextSlide() {
      this.loading = true
      setTimeout(() => {
        if (this.imageIndex < this.urls.length - 1) {
          this.imageIndex++;
        } else {
          this.imageIndex = 0;
        }
        this.selectedImage = this.urls[this.imageIndex];
        this.loading = false
      }, 500)
    },
    displayPreviousSlide() {
      this.loading = true
      setTimeout(() => {
        if (this.imageIndex > 0) {
          this.imageIndex--;
        } else {
          this.imageIndex = this.urls.length - 1;
        }
        this.selectedImage = this.urls[this.imageIndex];
        this.loading = false
      }, 500);
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
  color: #fff;
  background-color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  margin: 0 0.5em;
}

.slider-btn:hover {
  background-color: gray;
}

.slider-btn img {
  width: 50px;
  height: 50px !important;
}

.content-btn-slider {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .transition-image {
    max-height: 200px;
  }

  .slider-btn {
    padding: 0;
    margin: 0;
  }
}
</style>

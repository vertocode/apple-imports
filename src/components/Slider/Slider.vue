<template>
  <div :key="selectedImage" class="d-flex justify-content-center align-self-center" v-if="hiddeControlButtons">
    <Loading v-if="loading" style="width: 100px; height: 100px; position: absolute; margin: auto" :is-loading="true"/>
    <img v-else class="transition-image" :src="selectedImage" :key="selectedImage" :alt="selectedImage" />
  </div>
  <div style="position: relative" class="transition d-flex justify-content-between" :class="{ 'justify-content-between': allImages?.length > 1 }" v-else>
    <div class="content-btn-slider">
      <button v-if="allImages?.length > 1" @click="displayPreviousSlide" class="slider-btn">
        <img src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180850.png" alt="previous" />
      </button>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div :key="selectedImage" class="d-flex justify-content-center align-self-center">
        <Loading v-if="loading" style="width: 100px; height: 100px; position: absolute; margin: auto" :is-loading="true"/>
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

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

const urls = ref<string[]>([])
const selectedImage = ref<any>(null)
const imageIndex = ref<number>(0)
const loading = ref(false)

const allImages = computed(():any  => {
	return typeof props.images === 'string' ? [props.images] : props.images
})

const updateSelectedImage = (value: string) => {
	selectedImage.value = value
}

const displayNextSlide = () => {
	loading.value = true
	if (imageIndex.value < urls.value.length - 1) {
		imageIndex.value++
	} else {
		imageIndex.value = 0
	}
	selectedImage.value = urls.value[imageIndex.value]
	loading.value = false
}

const displayPreviousSlide = () => {
	loading.value = true
	setTimeout(() => {
		if (imageIndex.value > 0) {
			imageIndex.value--
		} else {
			imageIndex.value = urls.value.length - 1
		}
		selectedImage.value = urls.value[imageIndex.value]
		loading.value = false
	}, 500)
}

const props = defineProps({
	images: {
		type: Array<string>,
		default: []
	},
	selectedImageByColor: {
		type: String,
		default: null,
	},
	isMini: {
		type: Boolean,
		default: false,
	},
	hiddeControlButtons: {
		type: Boolean,
		default: false,
	},
})

watch(() => props.selectedImageByColor, (value) => {
	updateSelectedImage(value)
})

onMounted(() => {
	urls.value = allImages.value
	selectedImage.value = urls.value[0]
})
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

.transition-image {
  max-height: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {

  .slider-btn {
    padding: 0;
    margin: 0;
  }
}
</style>

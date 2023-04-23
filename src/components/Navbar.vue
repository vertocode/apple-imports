<template>
  <div class="content navbar py-3">
    <hamburguer
        @show-edit-profile="state.showEditProfileModal = true"
        :options="steps"
    ></hamburguer>

    <div class="d-flex gap-3" v-if="store.state.userData.name">
      <div v-if="higherViewport">
        <h4 class="align-self-center gap-3">{{ store.state.userData.name }}</h4>
        <h6 class="align-self-center gap-3">{{ store.state.userData.email }}</h6>
      </div>
      <img
          :src="store.state.userData.picture"
          alt="img-profile"
          style="border-radius: 50%">
    </div>
  </div>
  <edit-profile-modal
      v-if="state.showEditProfileModal"
      @close="state.showEditProfileModal = false"
  ></edit-profile-modal>
</template>

<script setup>
import {computed, reactive} from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import router from "../router";
import Hamburguer from './Navbar/Hamburguer.vue'
import EditProfileModal from './Modal/EditProfileModal.vue'

const state = reactive({
  dropdownActivated: false,
  showEditProfileModal: false
})

const store = useStore()
const higherViewport = computed(() => window.innerWidth > 600)
const steps = [
  {
    link: '/product-list',
    title: 'Product list'
  },
  // {
  //   link: '/requests',
  //   title: 'Requests'
  // },
  // {
  //   link: '/add-new-product',
  //   title: 'Add a new product (Admin)',
  //   notShow: true
  // },
]
</script>

<style lang="scss">
.content {
  font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;;
  background-color: rgb(22,22,23);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em 2em;
  .dropdown {
    padding-top: 0.6em;
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    position: absolute;
    top: 100px;
    height: max-content;
    width: 13em;
    ul {
      padding-inline-start: 0 !important;
      li {
        padding-top: 0.3em;
        cursor: pointer;
        list-style-type: none;
      }
      li:hover {
        background-color: #05cadc;
      }
    }
  }
  .list {
    display: flex;
    li {
      margin: 0 50px
    }
  }

  img {
    width: 70px;
    position: relative;
  }

  .badge {
    position: absolute;
    bottom: 15px;
    right: 35px;
  }

  a {
    text-decoration: none;
    font-size: 1.5em;
  }

  a:hover {
    text-decoration: underline;
  }

  .apple {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f00;
    position: relative;
  }

  .stem {
    width: 10px;
    height: 30px;
    border-radius: 5px;
    background-color: #654321;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .leaf {
    width: 20px;
    height: 30px;
    border-radius: 50% 50% 0 50%;
    background-color: #0f0;
    position: absolute;
    top: -30%;
    left: 30%;
    transform: rotate(-45deg);
  }
}
</style>
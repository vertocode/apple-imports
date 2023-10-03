<template>
  <div class="navbar">
    <hamburguer
        @show-edit-profile="state.showEditProfileModal = true"
        :options="steps"
    ></hamburguer>

    <div class="profile-info" v-if="userStore.userData.name">
      <div class="profile-text">
        <h4>{{ userStore.userData.name }}</h4>
        <h6>{{ userStore.userData.email }}</h6>
      </div>
      <img
          :src="userStore.userData.picture"
          alt="img-profile"
          class="profile-image"
      >
    </div>
  </div>
  <edit-profile-modal
      v-if="state.showEditProfileModal"
      @close="state.showEditProfileModal = false"
  ></edit-profile-modal>
</template>

<script setup>
import { reactive } from "vue";
import Hamburguer from './Navbar/Hamburguer.vue'
import EditProfileModal from './Modal/EditProfileModal.vue'
import {useUserStore} from "../store/useUserStore"

const state = reactive({
  showEditProfileModal: false
})

const userStore = useUserStore()
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
.navbar {
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em 2em;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-info {
  display: flex;
  align-items: center;
}

.profile-text {
  margin-right: 20px;
}

.profile-text h4 {
  font-size: 1.2rem;
}

.profile-text h6 {
  font-size: 0.9rem;
}

.profile-image {
  width: 70px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    gap: 0.2em;
    padding: 0.5em;
    align-items: center;
    text-align: center;
  }

  .profile-info {
    margin-top: 20px;
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-direction: row;

    .profile-text {
      margin-right: 0;
      margin-top: 1em;
    }

    .profile-image {
      margin-top: 10px;
    }

    @media (max-width: 500px) {
      .profile-image {
        width: 50px;
      }
    }
  }
}

@media (max-width: 370px) {
  .navbar {
    flex-direction: column-reverse;
    gap: 0.2em;
  }

  .profile-info {
    flex-direction: row-reverse;
    margin-top: 5px;
    margin-bottom: 0.5em;
  }
}
</style>

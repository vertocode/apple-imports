<template>
  <div class="navbar">
    <hamburguer
        @show-edit-profile="state.showEditProfileModal = true"
        :options="steps"
    ></hamburguer>

    <div class="profile-info" v-if="store.state.userData.name">
      <div class="profile-text">
        <h4>{{ store.state.userData.name }}</h4>
        <h6>{{ store.state.userData.email }}</h6>
      </div>
      <img
          :src="store.state.userData.picture"
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
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import Hamburguer from './Navbar/Hamburguer.vue'
import EditProfileModal from './Modal/EditProfileModal.vue'

const state = reactive({
  showEditProfileModal: false
})

const store = useStore()
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
    flex-direction: column;
    padding: 0.5em;
    align-items: center;
    text-align: center;
  }

  .profile-info {
    margin-top: 10px;
  }

  .profile-text {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .profile-image {
    margin-top: 10px;
  }
}
</style>

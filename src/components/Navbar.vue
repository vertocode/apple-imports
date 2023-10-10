<template>
  <div class="navbar">
    <div class="hamburger">
      <hamburguer
          @show-edit-profile="state.showEditProfileModal = true"
          :options="steps"
      ></hamburguer>
    </div>

    <div class="navbar-items">
      <ul class="items">
        <li
            class="item"
            :class="{
          subnavBarActive: $route.path.includes(`${link}/`) && !$route.path.includes('request-product') && !$route.params?.productId,
           active: $route.path.includes(link) }"
            v-for="{ title, link } in steps"
            :key="title"
            @click="$router.push(link)"
        >{{ title }}</li>
      </ul>
    </div>

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
    <div v-else-if="$route.path !== '/login'" class="sign-in-button" @click="$router.push('/login')">
      <h3 class="sign-in-text">Sign In</h3>
      <img src="../assets/login-icon.webp" alt="">
    </div>
  </div>
  <edit-profile-modal
      v-if="state.showEditProfileModal"
      @close="state.showEditProfileModal = false"
  ></edit-profile-modal>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import Hamburguer from './Navbar/Hamburguer.vue'
import EditProfileModal from './Modal/EditProfileModal.vue'
import { useUserStore } from '../store/useUserStore'

const state = reactive({
	showEditProfileModal: false
})
const userStore = useUserStore()


const hamburgerId = ref(0)

const steps = computed(() => [
	{
		link: '/product-list',
		title: 'Product list',
		isVisible: true
	},
	{
		link: '/cart',
		title: 'Cart',
		isVisible: userStore.isLogged
	},
	{
		link: '/requests',
		title: 'Requests',
		isVisible: userStore.isLogged
	},
	// {
	//   link: '/add-new-product',
	//   title: 'Add a new product (Admin)',
	//   notShow: true
	// },
])

watch(() => userStore.isLogged, () => {
	console.log('changed',userStore.isLogged)
	hamburgerId.value++
	console.log(steps.value)
})

console.log(steps.value)
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

  .sign-in-button {
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 5%;
    box-shadow: white 0.4px 0.2px 8px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    .sign-in-text {
      margin-top: 5px;
      font-family: "Times New Roman", sans-serif
    }

    img {
      width: 60px;
      height: 60px;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    gap: 3em;
    .item {
      cursor: pointer;
      font-weight: bold;
      list-style-type: none;
      font-size: 2em;
      padding-top: 12px;
      font-family: "Times New Roman", sans-serif;
      position: relative;
    }
    .item:first-child.subnavBarActive::before {
      content: '';
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 20px solid #007bff;
      position: absolute;
      top: 110%;
      left: 43%;
    }

    .item.active {
      border-bottom: white solid;
    }
  }
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

.hamburger {
  display: none;
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

@media (max-width: 900px) {
  .hamburger {
    display: block;
  }

  .navbar-items {
    display: none;
  }
}

@media (max-width: 435px) {
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

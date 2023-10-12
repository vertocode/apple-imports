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
            v-for="{ title, link, leftIcon, rightIcon } in steps"
            :key="title"
            @click="$router.push(link)"
        >
          <i v-if="leftIcon" :class="leftIcon"></i>
          {{ title }}
          <i v-if="rightIcon" :class="rightIcon"></i>
        </li>
      </ul>
    </div>

    <ProfileDropdown :user-data="userStore.userData" v-if="userStore.userData.name"/>
    <div v-else-if="$route.path !== '/login'" class="sign-in-button" @click="$router.push('/login')">
      <h3 class="sign-in-text">Sign In</h3>
      <img src="../assets/login-icon.webp" alt="">
    </div>
  </div>

</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import Hamburguer from './Navbar/Hamburguer.vue'
import EditProfileModal from './Modal/EditProfileModal.vue'
import { useUserStore } from '../store/useUserStore'
import ProfileDropdown from './Profile/ProfileDropdown.vue'

const state = reactive({
	showEditProfileModal: false
})
const userStore = useUserStore()


const hamburgerId = ref(0)

const steps = computed(() => [
	{
		link: '/product-list',
		title: 'Product list',
    leftIcon: 'fa fa-list',
		isVisible: true
	},
	{
		link: '/cart',
		title: 'Cart',
    leftIcon: 'fa fa-cart-plus',
		isVisible: userStore.isLogged
	},
	{
		link: '/requests',
		title: 'Requests',
    leftIcon: 'fa fa-money',
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
  padding: 0.5em 2em;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  .sign-in-button {
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 5%;
    box-shadow: 0 0.4px 0.2px 8px white;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    gap: 0.5em;

    .sign-in-text {
      font-size: 1.5em;
      margin-top: 5px;
      font-family: "Times New Roman", sans-serif;
    }

    img {
      width: 40px;
      height: 40px;
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
      font-size: 1.5rem;
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
      top: 118%;
      left: 43%;
    }

    .item.active {
      border-bottom: 2px solid white;
    }
  }
}

.hamburger {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    gap: 0.2em;
    padding: 0.5em;
    text-align: center;
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
}

</style>

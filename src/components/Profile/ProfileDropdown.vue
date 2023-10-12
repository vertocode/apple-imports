<template>
  <div class="profile-dropdown" v-if="userData.name">
    <div class="profile-text">
      <h4>{{ userData.name }}</h4>
      <h6>{{ userData.email }}</h6>
    </div>
    <div class="profile-image" @click="showMenu = !showMenu">
      <img
          :src="userData.picture"
          alt="img-profile"

      >
      <i class="fa fa-th-large"></i>
    </div>

    <div class="profile-menu" v-if="showMenu">
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li>Log out</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NormalUser } from '../../typing/User'
import { ref } from 'vue'

interface Props {
  userData: NormalUser
}
defineProps<Props>()

const showMenu = ref(false)
</script>

<style lang="scss">
.profile-dropdown {
  display: flex;
  align-items: center;
  gap: 1em;
  position: relative;

  .profile-text {
    h4 {
      font-size: 1.2rem;
      margin: 0;
    }

    h6 {
      font-size: 0.9rem;
      margin: 0;
    }
  }

  .profile-image {
    cursor: pointer;

    i {
      width: 2em;
      height: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 7%;
      bottom: 20%;
      background-color: rgba(0, 0, 0, 0.28);
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;

      @media (max-width: 500px) {
        width: 50px;
        height: 50px;
      }
    }

  }

  .profile-menu {
    border-radius: 5%;
    width: 15rem;
    background-color: rgba(255, 255, 255, 0.95);
    color: black;
    position: absolute;
    top: 80%;
    left: 0;

    ul {
      padding: 0.5rem;
    }

    li {
      cursor: pointer;
      list-style-type: none;
      font-weight: bold;
      font-family: "Times New Roman", sans-serif;
      font-size: 2rem;
      border-bottom: 1px solid black;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #b9b9b9;
      }
    }
  }
}
</style>
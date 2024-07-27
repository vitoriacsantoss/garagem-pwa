<script setup>
import { ref } from 'vue'
import MediumMenu from './MediumMenu.vue'

const showMenu = ref(false)

import { useAuthStore } from '@/stores/auth'

const storeAuth = useAuthStore()
</script>

<template>
  <header>
    <span @click="showMenu = !showMenu" class="menuButton">
      <i class="mdi mdi-menu" style="font-size: 20px"></i>
    </span>

    <MediumMenu v-if="showMenu"></MediumMenu>

    <img src="/logo.png" alt="Logo" width="70px" class="logo" />

    <span class="user">
      <div v-if="storeAuth.logged" class="logout">
        <p class="email">
            {{ storeAuth.user.email }}
        </p>
        <router-link to="/logout">
          <button class="loginButton">Sair</button>
        </router-link>
      </div>
      <router-link v-else to="/login">
        <button class="loginButton">Entrar</button>
      </router-link>
    </span>
  </header>
</template>

<style scoped>
header {
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 20px;
  position: relative;
  gap: 20px;
  z-index: 1;
}

.menuButton {
  cursor: pointer;
}

nav {
  display: flex;
  gap: 20px;
}

.link {
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.5s all;
  cursor: pointer;
}

.link a {
  text-decoration: none;
  color: black;
}

.link:hover {
  background-color: #cccccc75;
}

.user {
  position: absolute;
  right: 20px;
}

.loginButton {
  padding: 5px 20px;
  border-radius: 5px;
  background-color: #ccc;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}

.logout {
    display: flex;
    gap: 5px;
}
</style>

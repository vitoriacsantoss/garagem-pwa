<script setup>
import { ref } from "vue"
import SmallMenu from "./SmallMenu.vue"

const showMenu = ref(false)
</script>

<template>
    <header>
        <span @click="showMenu = !showMenu" class="menuButton">
            <i class="mdi mdi-menu" style="font-size: 20px;"></i>
        </span>

        <SmallMenu v-if="showMenu"></SmallMenu>

        <img src="/logo.png" alt="Logo" width="70px" class="logo">

        <span class="user">
            <button class="loginButton">
                Entrar
            </button>
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
        transition: .5s all;
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
</style>
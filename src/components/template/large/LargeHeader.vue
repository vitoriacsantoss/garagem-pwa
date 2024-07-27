<script setup>
import { useAppStore } from "@/stores/app"

const storeApp = useAppStore();
</script>

<template>
    <header>
        <img src="/logo.png" alt="Logo" width="70px" class="logo">

        <nav>
            <div class="link" v-for="link in storeApp.links" :key="link.path">
                <router-link :to="link.path">
                    {{ link.name }}
                </router-link>
            </div>
        </nav>

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
        justify-content: center;
        padding: 0 10px;
        position: relative;
    }

    .logo {
        position: absolute;
        left: 20px;
    }

    nav {
        display: flex;
        justify-content: space-around;
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
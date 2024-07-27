<script setup>
import { useAppStore } from "@/stores/app"

const storeApp = useAppStore();
</script>

<template>
    <div class="menu">
        <nav>
            <div class="link" v-for="link in storeApp.links" :key="link.path">
                <router-link :to="link.path">
                    {{ link.name }}
                </router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .menu {
        position: absolute;
        top: 80px;
        left: 0;
        width: 300px;
        height: 90vh;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        z-index: 1;
        display: flex;
        align-items: center;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
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
</style>
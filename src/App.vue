<script setup lang="ts">
</script>

<template>
    <h1>Base App</h1>

    <div>
        <router-link to="/home">Home</router-link>
    </div>
    <div>
        <router-link to="/resume">Resume</router-link>
    </div>

    <div class="router-outlet">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
.router-outlet {
    border: 2px solid white
}
</style>

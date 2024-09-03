<script setup lang="ts">
import Header from './components/header/header.vue'
import NavigationBar from './components/navigation-bar/navigation-bar.vue'
</script>

<template>
  <div>
    <Header />
    <NavigationBar />
    <div class="content"></div>
  </div>
</template>

<style scoped>
  .content {
    background-color: #7157cf;
    width: 100%;
    height: 100vh;
  }
</style>

<script setup lang="ts">
  import styles from "./styles.module.css";
  
  const props = defineProps({
    text: String,
  })
</script>

<template>
  <div :class="styles.location">
    <img src="../../assets/location.svg" alt="location" />
    <p>{{text}}</p>
  </div>
</template>

<style scoped>
</style>

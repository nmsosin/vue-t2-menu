<script setup lang="ts">
  import { computed } from "vue";
import styles from "./styles.module.css";
  
  const props = defineProps({
    text: String,
    isDesktop: Boolean,
  })

  const handleLocationClick = () => {
    alert("Location click handler")
  }

  const screenTypeStyles = computed(() => {
    return props.isDesktop ? styles.location_desktop : styles.location_mobile

  })
</script>

<template>
  <div :class="`${styles.location} ${screenTypeStyles}`" @click="handleLocationClick">
    <img src="../../assets/location.svg" alt="location" />
    <p>{{text}}</p>
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
  import links from "./config"
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">{{ link.text }}</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import styles from "./styles.module.css";
  import links from "./config";
  import { ref } from "vue";

  const activeTab = ref(1);
  const setActiveTab = (active: number) => {
    activeTab.value = active;
    console.log(active, activeTab.value);
  }
  const checkIsActive = (currentTab: number) => {
    return currentTab === activeTab.value;
  }


</script>

<template>
  <nav :class="styles.navbar">
    <ul>
      <li
        v-for="link in links"
        :key="link.id"
        :class="`${styles.navlink} ${checkIsActive(link.id) ? styles.active : ''}`"
        @click="setActiveTab(link.id)"
      >
        {{ link.text }}
      </li>
    </ul>
  </nav>
</template>

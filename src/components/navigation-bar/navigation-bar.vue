<script setup lang="ts">
  import styles from "./styles.module.css";
  import links from "./config";
  import Location from "../location/location.vue";

  import { useMenuStore } from "../../stores/menuStore";

  const menuStore = useMenuStore();

  const setActiveTab = (active: number) => {
    menuStore.setCurrentTab(active);
  }

  const checkIsActive = (currentTab: number) => {
    return currentTab === menuStore.currentTab;
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
    <div :class="styles.location_wrapper">
      <Location text="Москва и область" :is-desktop="false"/>
    </div>
  </nav>
</template>

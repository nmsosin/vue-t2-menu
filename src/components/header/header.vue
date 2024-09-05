<script setup lang="ts">
  import styles from "./styles.module.css";
  import Notification from "../notification/notification.vue";
  import Location from "../location/location.vue";
</script>

<template>
  <header :class="styles.header">
    <div :class="styles.container">
      <img src="../../assets/logo.svg" :class="styles.logo" alt="T2 logo" />
      <div :class="styles.info">
        <Location text="Москва и область" :is-desktop="true"/>
        <Notification />
      </div>
    </div>
  </header>
</template>

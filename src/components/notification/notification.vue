<script setup lang="ts">
  const handleNotificationClick = () => {
    alert("Notification click handler")
  }

</script>

<template>
  <div class="notification-box" @click="handleNotificationClick">
    <span class="notification-count"></span>
    <div class="notification-bell">
      <img src="../../assets/bell.svg" alt="bell">
    </div>
  </div>
</template>

<style scoped>
.notification-box {
  z-index: 99;
  position: relative;
  width: 27px;
  height: 27px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}
.notification-bell {
  animation: bell 1s 1s both infinite;
}
.notification-bell * {
  display: block;
  margin: 0 auto;
}
.notification-count {
  position: absolute;
  z-index: 1;
  top: 3px;
  right: 4px;
  width: 10px;
  height: 10px;
  line-height: 30px;
  font-size: 18px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid #1F2229;
  background-color: #3FCBFF;
  color: #fff;
  animation: zoom 3s 3s both infinite;
}
@keyframes bell {
  0% { transform: rotate(0); }
  10% { transform: rotate(30deg); }
  20% { transform: rotate(0); }
  80% { transform: rotate(0); }
  90% { transform: rotate(-30deg); }
  100% { transform: rotate(0); }
}

@keyframes zoom {
  0% { opacity: 0; transform: scale(0); }
  10% { opacity: 1; transform: scale(1); }
  50% { opacity: 1; }
  51% { opacity: 0; }
  100% { opacity: 0; }
}
</style>

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menuStore', () => {
  const isMenuOpen = ref(false);
  const currentTab= ref(1);

  const setCurrentTab = (current: number) => {
    currentTab.value = current;
  }

  return {
    isMenuOpen,
    currentTab,
    setCurrentTab,
  }
})
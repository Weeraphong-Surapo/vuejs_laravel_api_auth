<script setup>

import BottomButton from './components/BottomButton.vue';
import NavBar from './components/NavBar.vue';
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore()
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <bottom-button v-show="authStore.isAuthenticated"/>
  </div>
</template>

<style scoped></style>

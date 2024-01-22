<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo.jpg" class="h-8" alt="Flowbite Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Big Web</span>
            </router-link>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <router-link :to="{ name: 'login' }" v-if="!authStore.isAuthenticated"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register
                    | Login</router-link>
                <button type="button" @click="handlelogout" v-else
                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()

const handlelogout = async () => {
    await authStore.logout()
}
</script>

<style lang="scss" scoped></style>
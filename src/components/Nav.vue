<script setup lang="ts">
import NavTitle from './NavTitle.vue'
import NavMenu from './NavMenu.vue'
</script>

<template>
  <nav class="absolute flex flex-col 3xl:w-80 2xl:w-72 lg:w-56 md:w-1/3 sm:w-1/2 w-3/4  h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <NavTitle />
    <NavMenu />
  </nav>
</template>

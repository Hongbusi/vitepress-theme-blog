<script setup lang="ts">
import { useConfig } from '../composables/config'
import NavTitle from './NavTitle.vue'

const { config } = useConfig()
</script>

<template>
  <nav class="absolute flex flex-col 3xl:w-80 2xl:w-72 lg:w-56 md:w-1/3 sm:w-1/2 w-3/4  h-full border-r border-gray-200 dark:border-gray-800">
    <NavTitle />

    <div v-for="item in config.nav" :key="item.text">
      {{ item.text }}
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useConfig } from '../composables/config'
import NavTitle from './NavTitle.vue'

const { config } = useConfig()
</script>

<template>
  <nav class="absolute flex flex-col 3xl:w-80 2xl:w-72 h-full border-r border-gray-200 dark:border-gary-800">
    <NavTitle />
    <div v-for="item in config.nav" :key="item.text">
      {{ item.text }}
    </div>
  </nav>
</template>

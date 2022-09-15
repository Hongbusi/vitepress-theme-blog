<script setup lang="ts">
import NavTitle from './NavTitle.vue'
import NavMenu from './NavMenu.vue'
</script>

<template>
  <nav class="absolute flex flex-col w-72 h-full border-r border-gray-800 bg-gray-900">
    <NavTitle />
    <NavMenu />
  </nav>
</template>

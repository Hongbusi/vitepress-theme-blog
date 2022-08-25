<script setup lang="ts">
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <header>
    <div v-for="item in config.nav" :key="item.text">
      {{ item.text }}
    </div>
  </header>
</template>

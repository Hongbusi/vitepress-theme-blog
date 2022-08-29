<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <div class="flex items-center px-3 py-2 h-48px truncate font-700">
    {{ site.title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: { text: string, link?: string }
}>()
</script>

<template>
  <p>
    <a
      v-if="data.link"
      :href="data.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ data.text }}
    </a>
    <span v-else>{{ data.text }}</span>
  </p>
</template>

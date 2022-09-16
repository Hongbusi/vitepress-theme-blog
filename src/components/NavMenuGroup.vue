<script setup lang="ts">
import NavMenuLink from './NavMenuLink.vue'

defineProps<{
  text: string
  items: any[]
}>()
</script>

<template>
  <div class="space-y-1">
    <h4 class="px-2 pt-5 pb-2 font-600 text-gary-1000 text-xs text-white">
      {{ text }}
    </h4>
    <template v-for="item in items" :key="item.text">
      <NavMenuLink :item="item" />
    </template>
  </div>
</template>

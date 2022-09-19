<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'
import SidebarLink from './SidebarLink.vue'

const { sidebar, hasSidebar } = useSidebar()
</script>

<template>
  <aside v-if="hasSidebar" class="w-96 bg-gray-900">
    <div class="space-y-1 p-3">
      <SidebarLink v-for="item in sidebar" :key="item.text" :item="item" />
    </div>
  </aside>
</template>

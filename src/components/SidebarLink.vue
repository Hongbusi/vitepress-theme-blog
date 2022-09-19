<script setup lang="ts">
import { useData } from 'vitepress'
import { isActive } from '../utils'

defineProps<{
  item: any
}>()

const { page } = useData()
</script>

<template>
  <div class="flex items-stretch space-x-1">
    <a
      :href="item.link"
      class="flex flex-1 items-center space-x-3 rounded-md py-2 px-3 text-sm font-medium cursor-pointer"
      :class="isActive(page.relativePath, item.link, !!item.activeMatch) ? 'text-white bg-gray-700' : 'text-gray-200 hover:bg-gray-800'"
    >
      <div class="flex flex-col justify-center space-y-1">
        <div class="font-medium line-clamp-3 text-gray-1000 dark:text-gray-100">{{ item.text }}</div>
        <div class="line-clamp-1 text-gray-1000 text-opacity-40 dark:text-white dark:text-opacity-60">2022-08-10</div>
      </div>
    </a>
  </div>
</template>


<script setup lang="ts">
import { ExternalLink } from '@hongbusi/icons-vue'
import Icon from './Icon.vue'

defineProps<{
  href: string
}>()

const isActive = false
</script>

<template>
  <a
    :href="href"
    target="undefined"
    rel="undefined"
    class="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium"
    :class="isActive
      ? 'bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
      : 'text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200'
    "
  >
    <span class="flex-1">
      <slot />
    </span>

    <Icon>
      <ExternalLink />
    </Icon>
  </a>
</template>

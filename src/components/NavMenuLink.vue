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
    :class="isActive ? 'text-white bg-gray-700' : 'text-gray-200 hover:bg-gray-700'
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

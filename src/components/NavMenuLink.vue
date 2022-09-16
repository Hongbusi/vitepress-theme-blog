<script setup lang="ts">
import { ExternalLink, Twitter } from '@hongbusi/icons-vue'
import Icon from './Icon.vue'

defineProps<{
  item: any
}>()

const isActive = false
</script>

<template>
  <div class="flex items-stretch space-x-1">
    <a
      :href="item.href"
      target="undefined"
      rel="undefined"
      class="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium cursor-pointer"
      :class="isActive ? 'text-white bg-gray-700' : 'text-gray-200 hover:bg-gray-700'"
    >
      <Icon size="18" color="#fff">
        <Twitter />
      </Icon>

      <span class="flex-1">
        {{ item.text }}
      </span>

      <Icon color="#fff">
        <ExternalLink />
      </Icon>
    </a>
  </div>
</template>

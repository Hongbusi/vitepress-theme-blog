<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { ExternalLink, Twitter } from '@hongbusi/icons-vue'
import { isActive } from '../utils'
import Icon from './Icon.vue'

const props = defineProps<{
  item: any
}>()

const { page } = useData()

const EXTERNAL_URL_RE = /^[a-z]+:/i
const isExternal = computed(() => props.item.link && EXTERNAL_URL_RE.test(props.item.link))
</script>

<template>
  <div class="flex items-stretch space-x-1">
    <a
      :href="item.link"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noreferrer' : undefined"
      class="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium cursor-pointer"
      :class="isActive(page.relativePath, item.link, !!item.activeMatch) ? 'text-white bg-gray-700' : 'text-gray-200 hover:bg-gray-700'"
    >
      <Icon size="18" color="#fff">
        <Twitter />
      </Icon>

      <span class="flex-1">
        {{ item.text }}
      </span>

      <Icon v-if="isExternal" color="#fff">
        <ExternalLink />
      </Icon>
    </a>
  </div>
</template>

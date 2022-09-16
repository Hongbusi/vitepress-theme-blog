<script setup lang="ts">
import { useConfig } from '../composables/config'
import NavMenuLink from './NavMenuLink.vue'
import NavMenuGroup from './NavMenuGroup.vue'

const { config } = useConfig()
</script>

<template>
  <div class="flex-1 px-3 py-3">
    <div class="space-y-1">
      <template v-for="item in config.nav" :key="item.text">
        <NavMenuLink v-if="'link' in item" :item="item" />
        <NavMenuGroup v-else :text="item.text" :items="item.items" />
      </template>
    </div>
  </div>
</template>

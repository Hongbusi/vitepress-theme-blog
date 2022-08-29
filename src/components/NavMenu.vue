<script setup lang="ts">
import { useConfig } from '../composables/config'
import NavMenuLink from './NavMenuLink.vue'

const { config } = useConfig()
</script>

<template>
  <div class="flex-1 px-3 py-3">
    <ul class="space-y-1">
      <li v-for="item in config.nav" :key="item.text" class="flex items-stretch space-x-1">
        <NavMenuLink href="">
          {{ item.text }}
        </NavMenuLink>
      </li>
    </ul>
  </div>
</template>

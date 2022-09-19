<script setup lang="ts">
import Nav from './Nav.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div class="relative flex w-full min-h-screen text-primary bg-black">
    <Nav />
    <div class="flex flex-1">
      <Sidebar />
      <Page />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="mx-auto container">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

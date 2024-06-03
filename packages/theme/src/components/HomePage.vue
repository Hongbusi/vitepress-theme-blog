<script setup lang="ts">
import Profile from './widget/Profile.vue'
import Categories from './widget/Categories.vue'
import Tags from './widget/Tags.vue'
import PostList from './PostList.vue'
</script>

<template>
  <div class="px-6 lg:px-8 py-8">
    <div class="max-w-[calc(var(--vp-layout-max-width)-64px)] mx-auto grid md:grid-cols-[12fr_25fr] xl:grid-cols-[23fr_54fr_23fr] gap-col-lg">
      <div class="space-y-4">
        <PostList />
      </div>

      <aside class="order-0 md:order--1 space-y-4 pt-4 md:pt0">
        <Profile />
        <Categories />
        <Tags />
      </aside>

      <aside class="order-1 space-y-4 pt-4 xl:pt-0">
        <div class="base-card">
          最近文章
        </div>
        <div class="base-card">
          归档
        </div>
      </aside>
    </div>
  </div>
</template>

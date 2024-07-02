<script setup lang="ts">
import Profile from './widget/Profile.vue'
import Categories from './widget/Categories.vue'
import Tags from './widget/Tags.vue'
import PostList from './PostList.vue'
</script>

<template>
  <div class="px-6 lg:px-8 py-8">
    <div class="max-w-[1152px] mx-auto flex flex-wrap md:flex-nowrap">
      <div class="flex-1 space-y-4">
        <PostList />
      </div>

      <aside
        class="w-full space-y-4 pt-4"
        md="w-[280px] mr-4 order--1 pt0"
      >
        <Profile />
        <Categories />
        <Tags />
      </aside>
    </div>
  </div>
</template>

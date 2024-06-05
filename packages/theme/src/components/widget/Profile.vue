<script setup lang="ts">
import { computed } from 'vue'

import { useArticles, useCategories, useTags } from '../../composables/config/blog'

const articles = useArticles()
const categories = useCategories()
const tags = useTags()

const articleCount = computed(() => articles.value.length)
const categoriesCount = computed(() => categories.value.length)
const tagsCount = computed(() => tags.value.length)
</script>

<template>
  <div class="base-card flex flex-col justify-center items-center space-y-4">
    <div class="overflow-hidden w-24 h-24 rounded-full">
      <img
        src="https://avatars.githubusercontent.com/u/53554371?v=4"
        width="96"
        height="96"
        alt="Hongbusi's Avatar"
      >
    </div>
    <h2 class="text-2xl font-bold">
      Hongbusi
    </h2>
    <div>知道的越多，不知道的越多。</div>
    <ul class="grid grid-cols-4 gap-2 w-full">
      <li class="flex flex-col items-center">
        <span class="text-2xl">{{ articleCount }}</span>
        <span>文章</span>
      </li>
      <li class="flex flex-col items-center">
        <span class="text-2xl">{{ categoriesCount }}</span>
        <span>分类</span>
      </li>
      <li class="flex flex-col items-center">
        <span class="text-2xl">{{ tagsCount }}</span>
        <span>标签</span>
      </li>
      <li class="flex flex-col items-center">
        <span class="text-2xl">28</span>
        <span>万字</span>
      </li>
    </ul>
  </div>
</template>

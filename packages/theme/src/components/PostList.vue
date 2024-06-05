<script setup lang="ts">
import { useArticles } from '../composables/config/blog'

const posts = useArticles()
</script>

<template>
  <article v-for="(post, index) in posts" :key="index">
    <a :href="post.route">
      <div class="base-card space-y-2">
        <h2 class="text-lg font-bold">
          {{ post.meta.title }}
        </h2>
        <div class="flex space-x-2">
          <div>
            {{ post.meta?.published || '' }}
          </div>
          <div>
            分类：{{ post.meta.category }}
          </div>
          <div>
            标签：{{ post.meta.tags.join(', ') }}
          </div>
        </div>
        <p>{{ post.meta.description }}</p>
        <div class="flex space-x-2">
          <div>
            400个字
          </div>
          <div>
            需要5分钟
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<template>
  <article v-for="(item, index) in 10" :key="index" class="base-card space-y-2">
    <h2 class="text-lg font-bold">
      这是一个文章标题啊
    </h2>
    <div class="flex space-x-2">
      <div>
        2024-1-1
      </div>
      <div>
        分类：test
      </div>
      <div>
        标签：1234
      </div>
    </div>
    <p>这是一个文章描述啊。</p>
    <div class="flex space-x-2">
      <div>
        400个字
      </div>
      <div>
        需要5分钟
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { AnchorHTMLAttributes } from 'vue';
import PostListItem from './PostListItem.vue';

  defineProps<{
    posts: Array<{
      tag: string,
      title: string,
      publishedAt: string,
      anchor: AnchorHTMLAttributes,
    }>
  }>()
</script>

<template>
  <ol class="flex flex-wrap my-4 sm:my-8">
    <PostListItem v-for="post in posts" :anchor="post.anchor">
      <template #tag>
        {{ post.tag }}
      </template>
      <template #publishedAt>
        {{ post.publishedAt }}
      </template>

      {{ post.title }}
    </PostListItem>
	</ol>
</template>
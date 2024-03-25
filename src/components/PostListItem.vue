<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue';

  defineProps<{
    anchor: AnchorHTMLAttributes,
  }>()
</script>

<template>
  <li class="aspect-square p-4 border-white hover:gliborder-solid border w-1/2 sm:w-1/4 m-[-1px_0_0_-1px] transition-transform hover:z-10 relative hover:scale-110 scale-100 bg-background" >
    <a v-bind="anchor" :class="['block']">
      <article class="aspect-square relative">
        <div class="absolute text-xs">
          <div class="text-glicth-r"><slot name="tag"/></div>
          <div class="text-glicth-b"><slot name="publishedAt"/></div>
        </div>
        
        <h1 class="flex items-center justify-center h-full"><slot/></h1>
      </article>
    </a>
  </li>
</template>
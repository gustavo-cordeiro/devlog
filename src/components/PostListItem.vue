<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue';

  defineProps<{
    anchor: AnchorHTMLAttributes,
  }>()
</script>

<template>
  <li class="aspect-square p-4 border-[#E6E7EC] border-solid border-[1px] w-1/2 sm:w-1/4 m-[-1px_0_0_-1px]" >
    <a v-bind="anchor" :class="['block']">
      <article class="aspect-square relative">
        <div class="absolute">
          <div class="text-[#DC6439] text-xs"><slot name="tag"/></div>
          <div class="text-[#90A4B1] text-xs"><slot name="publishedAt"/></div>
        </div>
        
        <h1 class="flex items-center justify-center h-full"><slot/></h1>
      </article>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue';

  defineProps<{
    links: Array<AnchorHTMLAttributes & {text: string, selected?: boolean}>,
  }>();
</script>

<template>
  <nav class="w-full my-4 sm:w-auto sm:absolute sm:my-0 sm:right-8 sm:top-0">
    <ul class="max-sm:-mx-8 max-sm:flex gap-5 flex-nowrap whitespace-nowrap overflow-x-scroll pb-2 sm:flex-col text-sm leading-[2.8!important]">
      <li 
        v-for="link in links"
        class="max-sm:first-of-type:ml-8 max-sm:last-of-type:mr-8 px-3 border border-solid border-white sm:border-none"
        >
          <a 
            v-bind="link"
            :class="[link.selected ? 'glitch-text font-cameo' : '', 'hover:glitch-text hover:font-cameo :before:after:[animation-delay:10s]']"
            :data-text="link.text"
          >
            {{ link.text }}
          </a> 
      </li>
    </ul>
  </nav>
</template>
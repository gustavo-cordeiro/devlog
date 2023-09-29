<script setup lang="ts">
  defineProps<{
    src?: String,
  }>();
</script>

<template>
  <div class="glitch-picture" :style="{
		'--glitch-filter-image-url': `url('${src}')`,
    '--delay': '10s'
	}">
    <picture>
      <slot />
    </picture>
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    src?: String,
  }>();
</script>

<template>
  <div :class="['glitch-filter']" :style="{
		'--glitch-filter-image-url': `url('${src}')`,
	}">
    <picture>
      <slot />
    </picture>
  </div>
</template>

<style scoped>
  .glitch-filter {
		position: relative;

		&::before, &::after, & > picture::before {
				content: '';
				position:absolute;
				top:0px;
				left:0px;
				z-index: 2;
				width: 100%;
				height: 100%;
				transform: translate(0, 0);
				background-size: cover;
				mix-blend-mode: lighten;
				will-change: opacity;
				background-blend-mode: multiply;
		}

		&::after {
			background-image: linear-gradient(#C8AD49, #C8AD49), var(--glitch-filter-image-url);
			transform: translate(2%, 0);		
			animation: glitch-animation 3s ease-in-out infinite both;
		}

		&::before {
			background-image: linear-gradient(#E26D3C, #E26D3C), var(--glitch-filter-image-url);
			transform: translate(0, -2%);
			animation: glitch-animation2 3s ease-in-out infinite both;
		}

		& > picture::before {
			background-image: linear-gradient(#5499D7, #5499D7), var(--glitch-filter-image-url);
			transform: translate(0, 2%);
			animation: glitch-animation3 3s ease-in-out infinite both;
		}
	}

	@keyframes glitch-animation {
		0% {
			transform: translate(2%, 0);
		}
		
		50% {
			transform: translate( 0, -2%);
		}
		
		100% {
			transform: translate(2%, 0);
		}
	}

	@keyframes glitch-animation2 {
		0% {
			transform: translate(0, -2%);
		}
		
		50% {
			transform: translate( 2%, 0);
		}
		
		100% {
			transform: translate(0, -2%);
		}
	}

	@keyframes glitch-animation3 {
		0% {
			transform: translate(0, 2%);
		}
		
		50% {
			transform: translate( -2%, 0);
		}
		
		100% {
			transform: translate(0, 2%);
		}
	}
</style>
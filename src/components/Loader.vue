<script setup>
	const $props = defineProps({
		run: Boolean,
	});
</script>

<template>
	<DexiosDimmer class="loader" :class="{ hidden: !$props.run, running: $props.run, }">
		<DexiosSpinner>
		</DexiosSpinner>
		<slot></slot>
	</DexiosDimmer>
</template>

<style lang="less">
	.dexios {
		&.loader {
			animation-name: FadeOut;
			animation-duration: 1s;

			&.running {
				animation-name: none;
			}
		}
	}
</style>

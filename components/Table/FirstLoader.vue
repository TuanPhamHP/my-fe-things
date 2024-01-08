<template>
	<tbody class="divide-y divide-gray-200 bg-white">
		<tr v-for="i in rows" :key="i">
			<td v-for="j in cols" :key="j" colspan="" class="px-4 py-4" :class="i % 2 ? 'bg-graymod' : 'bg-white'">
				<div
					data-placeholder
					class="h-6 w-full overflow-hidden relative"
					:class="i % 2 ? 'bg-gray-100' : 'bg-gray-200'"
				></div>
			</td>
		</tr>
	</tbody>
</template>
<script lang="ts">
	export default {
		props: {
			rows: {
				type: Number,
				default: 12,
			},

			cols: {
				type: Number,
				default: 8,
			},
		},
	};
</script>
<style scoped>
	[data-placeholder]::after {
		content: ' ';
		box-shadow: 0 0 50px 9px rgba(254, 254, 254);
		position: absolute;
		top: 0;
		left: -100%;
		height: 100%;
		animation: load 1s infinite;
	}
	@keyframes load {
		0% {
			left: -100%;
		}
		100% {
			left: 150%;
		}
	}
</style>

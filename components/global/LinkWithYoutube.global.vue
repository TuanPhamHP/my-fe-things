<template>
	<div class="inline-block">
		<a
			v-if="selectedYouTubeLink"
			:href="selectedYouTubeLink.url"
			target="_blank"
			rel="noreferrer"
			v-tooltip="'Click để xem'"
			class="flex items-center gap-2 px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
		>
			<Icon name="logos:youtube-icon" size="24" />
			{{ selectedYouTubeLink?.name }}
		</a>
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useInternalStore } from '@/store/Internal';
	import { YoutubeLink } from '@/models';
	export default {
		props: {
			lang: {
				type: String,
				default: 'vi',
			},
			name: {
				type: String,
				default: 'map()',
			},
			programLang: {
				type: String,
				default: 'js',
			},
			parrentNode: {
				type: String,
				default: '',
			},
		},
		setup() {
			const { listYouTubeLink } = storeToRefs(useInternalStore());
			return {
				listYouTubeLink,
			};
		},
		computed: {
			selectedYouTubeLink(): YoutubeLink | undefined {
				return this.listYouTubeLink.find(item => {
					const matchLang = item.lang === this.lang;
					const matchName = this.name ? item.name === this.name : true;
					const matchProgramLang = this.programLang ? item.programLang === this.programLang : true;
					const matchParrentNode = this.parrentNode ? item.parrentNode === this.parrentNode : true;
					return matchLang && matchName && matchProgramLang && matchParrentNode;
				});
			},
		},
	};
</script>
<style lang="scss" scoped></style>

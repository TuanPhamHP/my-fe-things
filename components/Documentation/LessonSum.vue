<template>
	<div class="text-slate-900 dark:text-white border-t-2 border-slate-300 dark:border-white pt-5">
		<div class="p-2 h-fit xl:block text-slate-900 dark:text-white border rounded-lg border-slate-300 dark:border-white">
			<p class="text-lg font-semibold">Cần nắm được gì 🤓?</p>
			<div class="flex flex-col gap-2 py-2 px-3">
				<div v-for="item in sumData" :key="item">
					<li v-html="item"></li>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	export default {
		props: {
			sumData: Array as PropType<string[]>,
		},
		setup() {},
		data() {
			return {};
		},
		mounted() {
			setTimeout(() => {
				this.setMarkBook();
				this.scrollToTarget();
			}, 500);
		},
		methods: {
			scrollToTarget() {
				const { hash } = this.$route;
				if (hash) {
					try {
						const a = document.createElement('a');
						a.href = hash;
						a.click();
						a.remove();
					} catch (error) {}
				}
			},
			setMarkBook() {
				const listHeading = Array.from(document.querySelectorAll('.page-heading-lv1, .page-heading-lv2'));
				this.listMarkBook = listHeading.map((o: Element) => {
					return {
						name: o.textContent || '',
						link: o.getAttribute('id'),
						lvl: o.getAttribute('dataLvl') || 0,
					};
				}) as { name: string; link: string }[];
			},
		},
	};
</script>

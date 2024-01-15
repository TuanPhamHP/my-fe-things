<template>
	<div
		class="hidden sticky top-[10px] px-2 h-fit md:block table-of-content w-[300px] min-w-[300px] text-slate-900 dark:text-white border-l border-slate-300 dark:border-white"
	>
		<p class="text-lg">Đầu mục</p>
		<div class="flex flex-col gap-2 py-2 px-3">
			<a v-for="item in listMarkBook" :key="item.name" :href="`#${item.link}`" :class="`block pl-${item.lvl}`">
				{{ item.name }}
			</a>
		</div>
	</div>
</template>
<script lang="ts">
	export default {
		setup() {},
		data() {
			return {
				listMarkBook: [] as { name: string; link: string }[],
			};
		},
		mounted() {
			setTimeout(() => {
				this.setMarkBook();
			}, 500);
		},
		methods: {
			setMarkBook() {
				const listHeading = [...document.querySelectorAll('.page-heading-lv1, .page-heading-lv2')];
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

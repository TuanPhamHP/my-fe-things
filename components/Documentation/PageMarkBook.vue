<template>
	<div
		class="hidden sticky top-[10px] px-2 h-fit md:block table-of-content w-[300px] min-w-[300px] text-slate-900 dark:text-white border-l border-slate-300 dark:border-white"
	>
		Đầu mục
		<div class="flex flex-col gap-2 py-2 px-1">
			<a v-for="item in listMarkBook" :key="item.name" :href="`#${item.link}`"> {{ item.name }} </a>
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
				const listHeading = [...document.querySelectorAll('.page-heading-lv1')];
				this.listMarkBook = listHeading.map((o: Element) => {
					return {
						name: o.textContent || '',
						link: o.getAttribute('id'),
					};
				}) as { name: string; link: string }[];
			},
		},
	};
</script>

<template>
	<div
		class="hidden sticky top-[10px] px-2 h-fit xl:block table-of-content w-[300px] min-w-[300px] text-slate-900 dark:text-white border-l border-slate-300 dark:border-white"
	>
		<p class="text-lg font-semibold">Đầu mục</p>
		<div class="flex flex-col gap-1 py-2 px-3">
			<a
				v-for="item in listMarkBook"
				:key="item.name"
				:href="`#${item.link}`"
				:class="[
					'block text-md transition-all duration-150',
					`pl-${item.lvl}`,
					item.link === activeId
						? 'text-indigo-500 bg-indigo-100 dark:text-indigo-400 font-semibold border-l-2 border-indigo-500 dark:border-indigo-400 -ml-px'
						: 'hover:bg-neutral-100 dark:hover:text-gray-700',
				]"
			>
				{{ item.name }}
			</a>
		</div>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				listMarkBook: [] as { name: string; link: string; lvl?: string | number }[],
				activeId: '' as string,
			};
		},
		mounted() {
			setTimeout(() => {
				this.setMarkBook();
				this.scrollToTarget();
				this.setupObserver();
			}, 500);
		},
		beforeUnmount() {
			(this as any)._observer?.disconnect();
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
				this.listMarkBook = listHeading.map((o: Element) => ({
					name: o.textContent || '',
					link: o.getAttribute('id'),
					lvl: o.getAttribute('dataLvl') || 0,
				})) as { name: string; link: string }[];

				if (listHeading.length) {
					this.activeId = (listHeading[0] as HTMLElement).id;
				}
			},
			setupObserver() {
				const headings = Array.from(document.querySelectorAll('.page-heading-lv1, .page-heading-lv2')) as HTMLElement[];
				if (!headings.length) return;

				// rootMargin: top 40% of viewport is the active detection zone
				(this as any)._observer = new IntersectionObserver(
					entries => {
						const intersecting = entries
							.filter(e => e.isIntersecting)
							.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

						if (intersecting.length > 0) {
							this.activeId = (intersecting[0].target as HTMLElement).id;
						}
					},
					{ rootMargin: '0px 0px -60% 0px', threshold: 0 },
				);

				headings.forEach(h => (this as any)._observer.observe(h));
			},
		},
	};
</script>

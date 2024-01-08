<template>
	<div class="flex items-center justify-between bg-white px-4 py-0 sm:px-6">
		<div class="flex sm:flex-1 sm:items-center sm:justify-between">
			<div>
				<p class="text-sm font-semibold text-gray-700">
					Hiển thị
					{{ ' ' }}
					<span>{{ myPagination.getFrom() }}</span>
					{{ ' ' }}
					tới
					<span>{{ myPagination.getTo() }}</span>
					{{ ' ' }}
					trong tổng số
					{{ ' ' }}
					<span>{{ myPagination.total }}</span>
					{{ ' ' }}
					kết quả
				</p>
			</div>
			<div class="flex gap-2">
				<div v-if="showSelectPerPage" class="flex gap-2">
					<p class="text-md font-normal text-gray-700 self-center">Hiển thị</p>
					<SelectNormal
						:list-items="listPagination"
						:init-data="currentPerPage || 10"
						position="top"
						expand-icon-name="ri:expand-up-down-line"
						@selected="onChangePerPage"
					/>
					<p class="text-md font-normal text-gray-700 self-center">kết quả</p>
				</div>

				<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm gap-2 px-6 py-2" aria-label="Pagination">
					<p
						:class="`${buttonNormalClass} rounded-lg  px-1   ${
							myPagination.ableToViewPrevious()
								? 'cursor-pointer hover:bg-accent-100 hover:text-primary-500 w-8 h-8 self-center text-secondPrimary '
								: 'text-gray-500/50'
						}`"
						@click="prevPage"
					>
						<!-- <span class="sr-only">Previous</span>
						<Icon class="text-grey-900" name="solar:alt-arrow-left-outline" size="20px" /> -->
						Trang trước
					</p>

					<p
						v-for="item in stepList"
						:key="item"
						:class="`${normalClass}  rounded-lg ${
							item === myPagination.page
								? 'bg-primary-500 text-white'
								: +item
								? 'text-neutral-900 hover:bg-accent-100 hover:text-primary-500  cursor-pointer'
								: 'text-neutral-900'
						}`"
						@click="setPage(+item)"
					>
						{{ item }}
					</p>
					<!-- <p :class="`${normalClass}  text-white  rounded-lg`">1</p>
					<p :class="`${normalClass} text-secondPrimary rounded-lg`">2</p>
					<p :class="`${normalClass} text-secondPrimary rounded-lg`">3</p>
					<p :class="`${normalClass} text-secondPrimary rounded-lg`">4</p> -->

					<p
						:class="`${buttonNormalClass} rounded-lg  px-1 ${
							myPagination.ableToViewNext()
								? 'cursor-pointer hover:bg-accent-100 hover:text-primary-500 w-8 h-8 self-center text-secondPrimary '
								: 'text-gray-500/50'
						}`"
						@click="nextPage"
					>
						<!-- <span class="sr-only">Next</span>
						<Icon class="text-grey-900" name="solar:alt-arrow-right-outline" size="20px" /> -->
						Trang sau
					</p>
				</nav>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Pagigation, PagigationData } from '../../models';
	import SelectNormal from '../Form/SelectNormal.vue';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	export default {
		components: { SelectNormal },
		setup() {},
		props: {
			pagination: {
				type: Object as PropType<PagigationData>,
				default: {
					total: 1,
					total_pages: 1,
					per_page: 10,
					page: 1,
				},
			},

			showSelectPerPage: {
				type: Boolean,
				default: false,
			},
		},

		data() {
			return {
				listPagination: [
					{ id: 10, name: '10' },
					{ id: 50, name: '50' },
					{ id: 100, name: '100' },
				],
				currentPerPage: this.pagination.per_page || 10,
				normalClass:
					'relative w-[32px] h-[32px] text-lg z-10 flex items-center justify-center text-sm font-semibold  focus:z-20 ',
				buttonNormalClass: 'relative  z-10 flex items-center justify-center text-sm font-semibold  focus:z-20 ',
			};
		},
		computed: {
			myPagination() {
				return new Pagigation(this.pagination);
			},
			stepList() {
				let arr: (string | number)[] = [];
				const totalPages = this.myPagination.total_pages;
				const currentPage = this.myPagination.page;
				if (totalPages <= 5) {
					arr = [...Array.from({ length: totalPages }, (_, i) => i + 1)];
				} else {
					if (currentPage <= 3) {
						arr = [...Array.from({ length: currentPage }, (_, i) => i + 1), currentPage + 1, '...', totalPages];
					}

					if (currentPage > 3 && currentPage !== totalPages) {
						if (currentPage + 2 >= totalPages) {
							arr = [1, '...', currentPage - 1, currentPage, currentPage + 1];
						} else {
							arr = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
						}
					}
					if (currentPage === totalPages) {
						arr = [1, '...', currentPage - 1, currentPage];
					}
				}
				if (arr[arr.length - 1] !== totalPages) {
					arr.push(totalPages);
				}
				return arr;
			},
		},
		watch: {
			pagination() {
				if (this.pagination.per_page !== this.currentPerPage) {
					this.currentPerPage = this.pagination.per_page;
				}
			},
		},
		mounted() {
			if (this.pagination.per_page) {
				this.currentPerPage = this.pagination.per_page;
			}
		},
		methods: {
			onChangePerPage(value: number) {
				this.currentPerPage = value;
				this.$emit('pagination-change', { per_page: value, page: 1 } as PagigationData);
			},
			setPage(value: number) {
				if (!value) {
					return;
				}
				this.$emit('pagination-change', { page: value } as PagigationData);
			},
			nextPage() {
				if (this.pagination.page + 1 > this.pagination.total_pages) {
					return;
				}
				this.$emit('pagination-change', { page: this.pagination.page + 1 } as PagigationData);
			},
			prevPage() {
				if (this.pagination.page < 2) {
					return;
				}
				this.$emit('pagination-change', { page: this.pagination.page - 1 } as PagigationData);
			},
		},
	};
</script>

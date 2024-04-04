<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="dark:text-white py-5 mx-auto flex gap-4">
			<div class="grow">
				<!-- <div class="min-h-[250px] flex items-center justify-center w-full">
					<h1 class="text-center font-bold md:text-2xl text-slate-900 dark:text-white leading-10">
						Hello anh em, page này làm ra để tạo ra các bài tập để hỗ trợ các bạn thực hành nha.
						<br />
						Nội dung chính của trang đều về phần basic.
						<br />
						<span class="font-normal">( •̀ ω •́ )✧</span>
					</h1>
				</div> -->
				<div class="sticky-top top-0 z-10 pb-3">
					<div class="relative max-w-xl mx-auto mb-3">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<Icon v-if="loading" name="line-md:loading-loop" />
							<svg
								v-else
								class="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							v-model="search"
							type="search"
							id="default-search"
							class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Tìm kiếm bài tập ..."
							required
						/>
						<!-- <button
							type="submit"
							class="text-white absolute end-2.5 bottom-2.5 flex items-center gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search <Icon v-if="loading" name="line-md:loading-loop" />
						</button> -->
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
					<div class="col-span-1" v-for="item in listData" :key="item.id">
						<PracticeCardPreview :detail-data="item" />
					</div>
				</div>
				<div v-if="!listData.length" class="max-w-[450px] mx-auto py-10">
					<h1 class="text-center font-bold md:text-2xl text-slate-900 dark:text-white leading-10">
						Chúng tôi không tìm thấy bài tập nào, vui lòng thử lại sau
						<br />
						<br />
						<span class="font-normal">¯\_(ツ)_/¯</span>
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';
	import { useAuthStore } from '~/store/auth';
	import { storeToRefs } from 'pinia';
	import PracticeCardPreview from '~/components/Practice/PracticeCardPreview.vue';
	import { PracticeItem } from '~/models/Practice';

	export default {
		components: { PracticeCardPreview },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();

			const { isLogged } = storeToRefs(useAuthStore());

			return {
				isLogged,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},

		data() {
			return {
				listData: [] as PracticeItem[],
				loading: false,
				result: 0,
				search: '',
				firstSync: true,
				refSyncUrl: 1,
			};
		},
		computed: {
			normalQuery() {
				return `${this.search}`;
			},
			instantQuery() {
				return ``;
			},
			isSearch() {
				const obj = { ...this.$route.query };
				delete obj.size;
				delete obj.page;
				return !!Object.keys(obj).length;
			},
		},
		watch: {
			instantQuery: {
				deep: true,
				handler() {
					// this.pagination = {
					// 	...this.pagination,

					// 	page: 1,
					// };
					this.getListData();
				},
			},

			normalQuery() {
				// if (this.firstSync) {
				// 	return;
				// }
				clearTimeout(this.refSyncUrl);
				this.refSyncUrl = window.setTimeout(() => {
					// this.pagination = {
					// 	...this.pagination,
					// 	page: 1,
					// };
					this.getListData();
				}, 600);
			},
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Danh sách bài tập');
			this.getListData();
		},
		methods: {
			async getListData() {
				this.loading = true;
				const body = {
					search: this.search,
					appIds: 'html-basic',
				};
				const res = await this.$api.trainingTask.getListData(body);
				this.loading = false;
				if (res.success) {
					this.listData = res.data as PracticeItem[];
				}
			},
		},
	};
</script>

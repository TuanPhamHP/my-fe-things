<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-6">
		<div class="dark:text-white py-5 mx-auto">
			<div class="min-h-[250px] flex items-center justify-center w-full">
				<h1 class="text-center font-bold md:text-2xl text-slate-900 dark:text-white leading-10">
					Hello anh em, page này làm ra để ghi lại vài thứ hay ho về ReactJS cho newbie.
					<br />
					Nội dung chính của trang đều về phần basic.
					<br />
					<span class="font-normal">( •̀ ω •́ )✧</span>
				</h1>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-4 md:gap-5">
				<div class="col-span-1" v-for="item in listData" :key="item.id">
					<DocCardPreview :detail-data="item" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { DocumentItem } from '~/models/Documentation';
	import { useAppStateStore } from '~/store/appState';
	import { useAuthStore } from '~/store/auth';
	import { storeToRefs } from 'pinia';
	import DocCardPreview from '../../components/Documentation/DocCardPreview.vue';

	export default {
		components: { DocCardPreview },
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
				listData: [] as DocumentItem[],
				loading: false,
				search: '',
				result: 0,
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
			this.setCurrentViewTitle('Trang chủ');
			this.getListData();
		},
		methods: {
			async getListData() {
				this.loading = true;
				const body = {
					search: this.search,
				};
				const res = await this.$api.documentations.getListData(body);
				this.loading = false;
				if (res.success) {
					this.listData = res.data as DocumentItem[];
				}
			},
		},
	};
</script>

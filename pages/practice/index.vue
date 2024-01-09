<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-6">
		<div class="dark:text-white py-5 mx-auto">
			<div class="min-h-[250px] flex items-center justify-center w-full">
				<h1 class="text-center font-bold md:text-2xl text-slate-900 dark:text-white leading-10">
					Hello anh em, page này làm ra để tạo ra các bài tập để hỗ trợ các bạn thực hành nha.
					<br />
					Nội dung chính của trang đều về phần basic.
					<br />
					<span class="font-normal">( •̀ ω •́ )✧</span>
				</h1>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-4 md:gap-5">
				<div class="col-span-1" v-for="item in listData" :key="item.id">
					<PracticeCardPreview :detail-data="item" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';
	import { useAuthStore } from '~/store/auth';
	import { storeToRefs } from 'pinia';
	import PracticeCardPreview from '~/components/Practice/PracticeCardPreview';
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
				listData: [
					{
						id: 'e_1',
						vneseName: 'Bài 1 - Array Methods',
						eng: 'array methods',
						description: 'Bài tập về một số các methods thông dụng của Array trong JS.',
						link: '/practice/e_1',
						previewImage: 'parallax-3.jpeg',
						status_id: 1,
						category: [],
					},
				] as PracticeItem[],
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Trang chủ');
		},
		methods: {},
	};
</script>

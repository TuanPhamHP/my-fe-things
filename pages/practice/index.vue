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
	import DocCardPreview from '~/components/Documentation/DocCardPreview';

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
				listData: [
					{
						id: 1,
						vneseName: 'Cài đặt cơ bản',
						eng: 'Installation',
						description: 'Hướng dẫn cài đặt cơ bản để khởi tạo web-app của bạn với ReactJS.',
						link: 'documentation/installation',
						previewImage: 'parallax-1.jpeg',
						status_id: 1,
					},
					{
						id: 2,
						vneseName: 'Hooks',
						eng: 'Hooks',
						description: 'Trình bày về một số hooks cơ bản của ReactJS. Eg: useState(), useEffect(), useContext() ...',
						link: 'documentation/hooks',
						previewImage: 'parallax-2.jpeg',
						status_id: 1,
					},
				] as DocumentItem[],
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

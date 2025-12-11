<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="dark:text-white py-5 max-w-7xl mx-auto">
			<div class="min-h-[250px] flex items-center justify-center w-full">
				<h1 class="text-center font-bold xl:text-2xl text-slate-900 dark:text-white leading-10">
					Hello anh em, page này làm ra để ghi lại vài thứ hay ho cho newbie.
					<br />
					Nội dung chính của trang đều về phần basic.
					<br />
					<span class="font-normal">( •̀ ω •́ )✧</span>
				</h1>
			</div>
			<Course v-for="course in listCourse" :key="course.courseName" :course="course" />
		</div>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';
	import { useAuthStore } from '~/store/auth';
	import { storeToRefs } from 'pinia';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import Course from '@/components/Documentation/Course.vue';
	import NestJSLogo from '@/assets/images/course-logo/nestjs.svg';
	import NodeJSLogo from '@/assets/images/course-logo/nodejs.png';
	import LaravelLogo from '@/assets/images/course-logo/laravel.png';
	import PythonLogo from '@/assets/images/course-logo/python.png';
	import ReactJSLogo from '@/assets/images/course-logo/reactjs.png';
	import MongoDBLogo from '@/assets/images/course-logo/mongodb.png';
	export default {
		components: { Disclosure, DisclosureButton, DisclosurePanel, Course },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();

			const { isLogged } = storeToRefs(useAuthStore());

			const listCourse = ref([
				{
					courseName: `HTML - CSS -JS`,
					courseImg: `@/assets/images/documentation/course_hcj.png`,
					docs: {
						title: `Các tài liệu cơ bản về HTML,CSS,JS như:`,
						items: [
							'HTML: Cấu trúc file, thẻ, attributes ...',
							'CSS: Selector, Cách áp dụng CSS ...',
							'JS: Data Types, Function, Events, DOM ...',
						],
						link: '/html-css-js-basic/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/html-css-js-basic/practice',
					},
				},
				{
					courseName: `ReactJs`,
					courseImg: ReactJSLogo,
					docs: {
						title: `Các tài liệu cơ bản về React như:`,
						items: ['Cách cài đặt', 'Một số hooks cơ bản', 'Fetching data ...'],
						link: '/reactjs-basic/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/reactjs-basic/practice',
					},
				},
				{
					courseName: `NodeJs`,
					courseImg: NodeJSLogo,
					docs: {
						title: `Các tài liệu cơ bản về NodeJs như:`,
						items: ['Cách cài đặt', 'Connection, RestFull Api ...', 'Database, MVC Architecture'],
						link: '/nodejs/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/nodejs/practice',
					},
				},
				{
					courseName: `NestJS`,
					courseImg: NestJSLogo,
					docs: {
						title: `Các tài liệu cơ bản về NestJS như:`,
						items: ['Cách cài đặt', 'Connection, RestFull Api ...', 'Database, Architecture'],
						link: '/nestjs/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/nestjs/practice',
					},
				},
				{
					courseName: `NextJS`,
					courseImg: ``,
					docs: {
						title: `Các tài liệu cơ bản về NextJs như:`,
						items: ['Cách cài đặt', 'Connection, RestFull Api ...', 'Database, MVC Architecture'],
						link: '/nextjs-basic/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/nextjs-basic/practice',
					},
				},
				{
					courseName: `PHP & Laravel`,
					courseImg: LaravelLogo,
					docs: {
						title: `Các tài liệu cơ bản về PHP như:`,
						items: ['Cách cài đặt', 'Connection, RestFull Api ...', 'Database, MVC Architecture'],
						link: '/php/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/php/practice',
					},
				},
				{
					courseName: `Python`,
					courseImg: PythonLogo,
					docs: {
						title: `Các tài liệu cơ bản về Python như:`,
						items: ['Data types', 'Function', 'OOP ...'],
						link: '/python/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/python/practice',
					},
				},
				{
					courseName: `SQL`,
					courseImg: `@/assets/images/documentation/course_sql.png`,
					docs: {
						title: `Các tài liệu cơ bản về SQL như:`,
						items: ['Cách cài đặt', 'RDBMS, SQL Groups', 'Database ...'],
						link: '/sql/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/sql/practice',
					},
				},
				{
					courseName: `MongoDB`,
					courseImg: MongoDBLogo,
					docs: {
						title: `Các tài liệu cơ bản về MongoDB như:`,
						items: ['Cách cài đặt', 'NoSQL', 'MongoDB Compass', 'Database ...'],
						link: '/mongo-db/documentation',
					},
					practices: {
						title: `Các bài tập cơ bản:`,
						items: ['Bài tập cơ bản, dễ tiếp cận', 'Kèm hướng dẫn và ví dụ minh họa'],
						link: '/mongo-db/practice',
					},
				},
			]);

			return {
				isLogged,
				listCourse,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},

		data() {
			return {
				listData: null,
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

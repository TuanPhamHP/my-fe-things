<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Concept" addOnClass="text-left" markedAs="concept" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Python là một ngôn ngữ lập trình đa mục đích (general-purpose programming language), được ra mắt lần đầu vào
					năm 1991.
				</p>
				<SkyList :docs="concepts" />
				<PageHeading text="Features, Useages, and Benefits" addOnClass="text-left" markedAs="fub" :lvl="2" />
				<SkyList :docs="fub" />
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/python/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/python/documentation',
					},
				},
				concepts: [
					{
						content: 'Tính chất:',
						subList: [
							'<b>Ngôn ngữ thông dịch (Interpreted Language)</b>: Mã nguồn Python được thực thi từng dòng bởi trình thông dịch (interpreter), không cần biên dịch (compile) thành mã máy (machine code) trước như C++ hay Java.',
							'<b>Ngôn ngữ cấp cao (High-level Language)</b>: Tập trung vào việc giải quyết vấn đề bằng ngôn ngữ gần với con người hơn, tự động quản lý bộ nhớ.',
							'<b>Ngôn ngữ kiểu động (Dynamically Typed)</b>: Kiểu dữ liệu của biến được kiểm tra trong lúc chạy (runtime) thay vì lúc biên dịch (compile time).',
						],
					},
				],
				fub: [
					{
						content: 'Features (Tính năng cốt lõi):',
						subList: [
							'<b>Dễ đọc, dễ học (Readability and Learnability)</b>: Python có cú pháp rõ ràng, gần gũi với tiếng Anh và sử dụng indentation để phân tách khối lệnh, giúp code luôn có cấu trúc và dễ tiếp cận.',
							'<b>Thư viện lớn (Vast Standard Library)</b>: Tích hợp sẵn nhiều module hỗ trợ đa dạng tác vụ, rút ngắn thời gian phát triển.',
							'<b>Mô hình lập trình đa dạng (Multiple Programming Paradigms)</b>: Hỗ trợ lập trình hướng đối tượng (<b>OOP</b>), lập trình thủ tục (<b>Procedural</b>) và lập trình hàm (<b>Functional</b>).',
							'<b>Tính di động (Portability)</b>: Code Python có thể chạy trên nhiều hệ điều hành mà không cần chỉnh sửa.',
						],
					},
					{
						content: 'Useages (Ứng dụng):',
						subList: [
							'<b>Web Development (Phát triển Web)</b>: Phát triển web với các frameworks như Django hoặc Flask.',
							'<b>Data Science & Machine Learning (Khoa học Dữ liệu & Học máy)</b>: Sử dụng các thư viện như NumPy, Pandas, Scikit-learn, TensorFlow.',
							'<b>Automation (Tự động hóa)</b>: Tạo script tự động hóa các tác vụ lặp lại.',
							'<b>Software Testing (Kiểm thử phần mềm)</b>: Viết test cases và xây dựng các bộ kiểm thử.',
						],
					},
					{
						content: 'Benefits (Lợi ích):',
						subList: [
							'<b>Năng suất cao (Increased Productivity)</b>: Cùng một tác vụ nhưng cần ít dòng code hơn so với nhiều ngôn ngữ khác.',
							'<b>Chi phí phát triển thấp (Lower Development Cost)</b>: Phát triển nhanh, dễ tái sử dụng code, giúp giảm chi phí.',
							'<b>Cộng đồng lớn (Strong Community Support)</b>: Dễ dàng tìm thấy tài liệu, ví dụ, và hỗ trợ từ cộng đồng.',
						],
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'python', currentDocId: 'py-1' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

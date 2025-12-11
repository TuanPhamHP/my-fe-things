<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<SkyList :docs="taks" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			<b>Lưu ý:</b> ở phần này, chúng ta coi như chưa học về vòng lặp và mảng nên sẽ không sử dụng các khái niệm này để
			giải quyết bài tập. Hãy cố gắng sử dụng các kiến thức đã học để hoàn thành bài tập một cách tốt nhất.
		</p>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { FilePath } from '../../../.nuxt/components';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/nodejs/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/nodejs/practice',
					},
				},
				docs: [
					{
						id: 1,
						content: 'Bài 1: Tính chi phí hóa đơn',
						subList: [
							'Tạo một hàm tên calculate_earned_salary nhận vào hai tham số: salary (dạng float) và no_of_dependents (dạng int).',
							'Hàm sẽ tính toán và trả về số tiền lương thực nhận sau khi trừ thuế và các khoản phụ cấp dựa trên số người phụ thuộc.',
							'tax_chargeable_salary là lương chịu thuế được tính bằng công thức: Tổng lương trừ đi 11 triệu đồng (giảm trừ bản thân) và trừ đi 4.4 triệu đồng cho mỗi người phụ thuộc.',
							'Sử dụng công thức sau để tính thuế: tax = tax_rate * tax_chargeable_salary.',
							'Giá trị của tax_rate sẽ tuỳ thuộc vào mức tax_chargeable_salary như sau:',
							'- Nếu tax_chargeable_salary <= 5000000: tax_rate = 0.05',
							'- Nếu 5000000 < tax_chargeable_salary <= 10000000: tax_rate = 0.1',
							'- Nếu tax_chargeable_salary > 10000000: tax_rate = 0.2',
						],
					},
				],
				taks: [
					{
						id: 1,
						content: 'Tạo một hàm tên calculate_net_salary nhận vào:',
						subList: [
							'gross_salary (float): lương gộp trước thuế và bảo hiểm',
							'no_of_dependents (int): số người phụ thuộc',
						],
					},
					{
						id: 2,
						content: 'Giả định các thành phần BHXH như sau:',
						subList: [
							'BHXH: 8% lương gross',
							'BHYT: 1.5% lương gross',
							'BHTN: 1% lương gross',
							'Lưu tổng số tiền bảo hiểm vào biến total_insurance',
						],
					},
					{
						id: 3,
						content: 'Phần giảm trừ gia cảnh được tính như sau:',
						subList: [
							'Giảm trừ cá nhân: 11,000,000 VND',
							'Giảm trừ cho mỗi người phụ thuộc: 4,400,000 VND',
							'Lưu tổng số tiền giảm trừ vào biến total_deductions',
						],
					},
					{
						id: 4,
						content:
							'Từ gross, total_insurance, total_deductions tính được thu nhập chịu thuế. Tính theo biểu thức luỹ tiến từng phần:',
						subList: [
							'- Đến 5,000,000: 5%',
							'- Trên 5,000,000 đến 10,000,000: 10%',
							'- Trên 10,000,000 đến 18,000,000: 15%',
							'- Trên 18,000,000 đến 32,000,000: 20%',
							'- Trên 32,000,000 đến 52,000,000: 25%',
							'- Trên 52,000,000 đến 80,000,000: 30%',
							'- Trên 80,000,000: 35%',
							'Lưu tổng số tiền thuế vào biến total_tax',
						],
					},
					{
						id: 5,
						content:
							'Tính lương thực nhận (net salary) theo công thức: net_salary = gross_salary - total_insurance - total_tax.',
						subList: [],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

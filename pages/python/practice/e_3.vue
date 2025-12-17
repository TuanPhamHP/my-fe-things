<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Công ty có danh sách nhân viên cho sẵn. <br />
			Mỗi nhân viên có:
		</p>
		<SkyList
			:docs="[
				{
					id: 1,
					content: 'Tên nhân viên',
				},
				{
					id: 2,
					content: 'Số giờ làm việc chuẩn trong tháng',
				},
				{
					id: 2,
					content: 'Số giờ làm việc OT trong tháng',
				},
				{
					id: 3,
					content: 'Số giờ đi muộn',
				},
				{
					id: 4,
					content: 'Lương theo giờ',
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Chương trình cần tính lương thực nhận theo các quy tắc sau:
		</p>
		<SkyList :docs="docs" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">Cho dữ liệu mẫu như sau:</p>
		<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
		<PageHeading text="Yêu cầu" addOnClass="text-left mt-5" markedAs="env" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			<b>1/</b> Viết function <b>calculate_salary(employee)</b> nhận vào thông tin 1 employee và trả ra phiếu lương
			tương ứng:
		</p>
		<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Gợi ý: Nên tư duy theo hướng tách biệt trách nhiệm của từng phần trong function để dễ dàng triển khai và bảo trì.
		</p>
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			<b>2/</b> Viết function <b>salary_reports(employees)</b> nhận vào danh sách employees và in ra báo cáo lương của
			tất cả nhân viên tương ứng:
		</p>
		<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			<b>3/</b> Viết function <b>statistic_reports(employees)</b> nhận vào danh sách employees và in ra báo cáo các mục
			tương ứng:
		</p>
		<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
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
				b1: `employees = {
    "E01": ("Nguyễn Văn An", 170, 12, 2, 50000),
    "E02": ("Trịnh Thăng Bình", 155, 19.5, 10, 60000),
    "E03": ("Mai Quỳnh Chi", 180, 28, 4, 55000),
    "E04": ("Vũ Thu Ngân", 28, 1, 0, 45000)
}
# Cấu trúc tuple: (name, total_hours, ot_hours, late_hours, hourly_rate)
`,
				b2: `====== PHIẾU LƯƠNG ======
Họ tên            : Nguyễn Văn An
Giờ làm thực tế   : 170 giờ
Giờ làm thêm      : 12 giờ
Giờ đi muộn       : 2 giờ
Lương theo giờ    : 50,000 (VNĐ)
Lương cơ bản      : 8,000,000 (VNĐ)
Lương làm thêm    : 750,000 (VNĐ)
Phạt đi muộn      : 120,000 (VNĐ)
Hệ số KPI         : 1.0
------------------------
LƯƠNG THỰC NHẬN   : 8,460,000 (VNĐ)
====== KẾT THÚC ======
`,
				b3: `Mã: E01 | Tên: Nguyễn Văn An | Lương: 8,460,000 (VNĐ)
Mã: E02 | Tên: Trịnh Thăng Bình | Lương: 7,440,000 (VNĐ)
Mã: E03 | Tên: Mai Quỳnh Chi | Lương: 9,130,000 (VNĐ)
.....
Tổng lương công ty phải trả trong tháng: XX,XXX,XXX (VNĐ)
`,
				b4: `======= Báo cáo lương tháng 11/2025 ======
Tổng lương công ty phải trả trong tháng: XX,XXX,XXX (VNĐ)
Tổng số nhân viên: XX người

Nhân viên có lương cao nhất: [Mã NV] - Tên NV - Lương: XX,XXX,XXX (VNĐ)
Nhân viên có giờ làm OT cao nhất: [Mã NV] - Tên NV - Giờ OT: XX giờ

Tổng số giờ đi muộn của tất cả nhân viên: XX giờ
`,
				docs: [
					{
						id: 1,
						content: 'Lương cơ bản',
						subList: [
							'Lương cơ bản: lương cơ bản = số giờ làm x lương theo giờ x kpi_rate',
							'kpi_rate = 1 nếu số giờ làm >= 60 giờ | 0.8 nếu số giờ làm < 60 giờ',
						],
					},
					{
						id: 2,
						content: 'Giờ làm thêm (OT)',
						subList: ['lương OT = giờ làm thêm x lương theo giờ x 1.5'],
					},
					{
						id: 3,
						content: 'Giờ đi muộn (phạt)',
						subList: ['phạt = giờ đi muộn x lương theo giờ x 1.2'],
					},
					{
						id: 4,
						content: 'Lương thực nhận',
						subList: ['lương = lương cơ bản + lương OT - phạt'],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

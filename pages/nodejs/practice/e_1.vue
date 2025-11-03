<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white my-5 font-bold text-xl">
			Tạo một file <FilePath>data/users.json</FilePath> với cấu trúc mẫu:
		</p>
		<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />

		<div class="relative overflow-x-auto mt-5 border rounded-lg">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
					<tr>
						<th scope="col" class="px-5 py-3">Method</th>
						<th scope="col" class="px-5 py-3">Path</th>
						<th scope="col" class="px-5 py-3">Desc</th>
						<th scope="col" class="px-5 py-3">Handler</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in tasks" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th scope="row" class="px-5 py-4">
							<FilePath>{{ item.method }}</FilePath>
						</th>

						<td class="px-5 py-4">
							<FilePath>{{ item.route }}</FilePath>
						</td>
						<td class="px-5 py-4">{{ item.description }}</td>
						<td class="px-5 py-4">{{ item.handler }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p className="text-slate-900 dark:text-white my-5 font-bold text-xl">User data:</p>
		<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
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
				b1: `finance-lab/
│
├── data/
│   └── transactions.json
│   └── data.json
├── fileHandler/
│   └── fileHandler.js
├── services/
│   └── financeService.js
└── main.js
`,
				b2: `{
	name: string,
	yob: number,
	email: string, // unique
	phone: string, // unique
}`,
				docs: [
					{
						id: 'fileHandler.js',
						name: 'Service xử lý đọc/lưu data vào file transaction.json.',
						items: [
							'Mục đích: xử lý các nghiệp vụ với file như đọc, ghi.',
							'Yêu cầu: Viết các hàm: </br><b>readTransactions()</b> - đọc và trả ra toàn bộ transactions từ transaction.json.</br> <b>writeTransactions(data)</b> - ghi thêm data vào transaction.json',
						],
						coding: 'validator + unique index on email',
					},
					{
						id: 'financeService.js',
						name: 'Service xử lý các nghiệp vụ tài chính.',
						items: [
							'Mục đích: xử lý các nghiệp vụ tài chính như đọc, ghi, lọc, tổng hợp giao dịch.',
							`Yêu cầu: Viết các hàm </br><b>listTransactions()</b> - In ra màn hình toàn bộ transaction gồm type | note | amount.
							 </br><b>addTransaction()</b> - Thêm giao dịch mới với các tham số: id, type, note, amount, date.
							 </br><b>lastFiveTransaction()</b> - Lấy 5 giao dịch gần nhất.`,
						],
						coding: 'validator + unique index on email',
					},
				],
				tasks: [
					{
						id: 1,
						method: 'GET',
						route: '/users',
						description: 'Lấy danh sách user',
						handler: 'Đọc từ file users.json và trả về toàn bộ danh sách dưới dạng JSON, có thể lọc theo tên ("name").',
					},
					{
						id: 2,
						method: 'GET',
						route: '/users/:id',
						description: 'Lấy thông tin user theo ID',
						handler: 'Tìm user theo id trong file users.json, nếu không có trả 404',
					},
					{
						id: 3,
						method: 'POST',
						route: '/users',
						description: 'Thêm user mới',
						handler:
							'Nhận dữ liệu từ body, thêm user mới vào file users.json. Kiểm tra email và phone phải là duy nhất.',
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">
			Xây dựng Service quản lý tài chính với cấu trúc mẫu:
		</p>
		<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
			<a href="/transactions.json" download target="_blank" class="text-blue-500 dark:text-blue-300 underline">
				File json!</a
			>
		</p>
		<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />

		<ul v-for="section in docs" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>{{ section.id }}</FilePath
				>: {{ section.name }}.
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						<div v-html="item"></div>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Từ đó, xây dựng file <FilePath>main.js</FilePath> để sử dụng các service đã tạo ở trên.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1/ Trả về toàn bộ giao dịch đã lưu ở <FilePath>transactions.json</FilePath>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2/ Thêm giao dịch mới vào file <FilePath>transactions.json</FilePath>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3/ Lấy 5 giao dịch gần nhất.
			</li>
		</ul>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
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
├── fileHandler/
│   └── fileHandler.js
├── services/
│   └── financeService.js
└── main.js
`,
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
			};
		},
		computed: {},
		methods: {},
	};
</script>

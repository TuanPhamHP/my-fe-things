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
			Bài tập 1: Hiểu và tạo database theo mô hình quan hệ
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Giả sử bạn đang thiết kế một hệ thống quản lý thư viện. Hãy thực hiện các bước sau:
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo một database tên là LibraryDB.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo 2 bảng books và authors theo mô hình quan hệ:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>books</FilePath>: chứa các thông tin về sách như <b>id, title, author_id, published_year</b>.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>authors</FilePath>: chứa thông tin tác giả với các cột <b>id, name, birth_year</b>.
					</li>
				</ul>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Định nghĩa khóa chính và khóa ngoại giữa bảng <FilePath>books</FilePath>, <FilePath>authors</FilePath>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Yêu cầu:</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Viết câu lệnh để tạo <b>database, table</b> tương ứng.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Định nghĩa đủ <b>Primary Key (PK), Foreign Key (FK)</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Thêm dữ liệu mẫu vào bảng <FilePath>books</FilePath>, <FilePath>authors</FilePath> bằng các lệnh sql.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Hiển thị toàn bộ dữ liệu theo bảng.
			</li>
		</ul>

		<div class="bg-neutral-100 px-5 py-1 rounded">
			<img src="@/assets/images/documentation/sql-1.png" alt="" class="rounded-lg mt-3 block" />
		</div>
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
	import { usePagination } from '@/composables/usePagination';
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
		setup() {
			return usePagination('practice', 'sql-1', 'sql')
		},
		data() {
			return {
				counter: 0,
			};
		},
		computed: {},
		methods: {},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Bài tập 1: Kiểm tra Index</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Giả sử bạn đang thiết kế một bảng dữ liệu lớn để quan sát sự khác biệt về hiệu suất khi truy vấn có và không có
			index. Bài tập giúp hiểu rõ cách index tối ưu hóa truy vấn, đặc biệt trong các thao tác tìm kiếm và lọc dữ liệu.
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo một database tên là <b>index_preview</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo bảng <FilePath>orders</FilePath> chứa thông tin về các đơn hàng với các cột như
				<b>id, customer_name, order_status, total_amount, created_at</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Chèn ít nhất 10,000 bản ghi vào bảng để có dữ liệu thực tế để kiểm tra hiệu suất..
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Yêu cầu:</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content marker:text-sky-400 font-bold">
				Kiểm tra hiệu suất truy vấn không có Index
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Chạy một truy vấn tìm kiếm dữ liệu theo cột <b>customer_name</b> và đo thời gian thực thi.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Chạy một truy vấn lọc dữ liệu theo <b>order_status</b> và đo thời gian thực thi.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Chạy một truy vấn sắp xếp dữ liệu theo <b>total_amount</b> và đo thời gian thực thi.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content marker:text-sky-400 font-bold">
				Thêm Index vào bảng
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo một index trên cột <b>customer_name</b> để tối ưu hóa truy vấn tìm kiếm.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo một index trên cột <b>order_status</b> để tối ưu hóa truy vấn lọc dữ liệu.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Tạo một index trên cột <b>total_amount</b> để tối ưu hóa truy vấn sắp xếp dữ liệu.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content marker:text-sky-400 font-bold">
				Kiểm tra hiệu suất truy vấn có Index
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Lặp lại các truy vấn tìm kiếm, lọc và sắp xếp như trên và đo lại thời gian thực thi.
			</li>
		</ul>

		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			<b>Seed Data:</b>
		</p>
		<FakeTerminalUI :text-coppy="seed_data">
			<p>seed_data.sql</p>
		</FakeTerminalUI>
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
				seed_data: `CREATE PROCEDURE insert_dummy_orders()
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= 10000 DO
        INSERT INTO orders (customer_name, order_status, total_amount) 
        VALUES (
            CONCAT('customer_', i),
            ELT(FLOOR(1 + (RAND() * 4)), 'pending', 'completed', 'shipped', 'canceled'),
            ROUND(RAND() * 1000, 2)
        );
        SET i = i + 1;
    END WHILE;
END;
CALL insert_dummy_orders();
`,
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/sql/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/sql/practice',
					},
				},
			};
		},
		computed: {},
		methods: {},
	};
</script>

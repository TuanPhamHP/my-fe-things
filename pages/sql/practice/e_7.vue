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
				2. Tạo 3 bảng <FilePath>orders_no_index</FilePath>, <FilePath>orders_with_index</FilePath>,
				<FilePath>products</FilePath> chứa thông tin về các đơn hàng với các cột như
				<b>id, product_id, quantity, order_date</b>.
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
				1. Chạy một truy vấn trả ra bảng JOIN với <b>tên sản phẩm, số lượng, ngày</b> với một id bất kỳ của products và
				đo thời gian thực thi của 2 bảng orders.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Chạy một truy vấn lọc dữ liệu theo <b>product_id</b> và đo thời gian thực thi.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Chạy một truy vấn sắp xếp dữ liệu theo <b>product_id</b> và đo thời gian thực thi.
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
		<FakeTerminalUI :text-coppy="products">
			<p>products.sql</p>
		</FakeTerminalUI>
		<FakeTerminalUI :text-coppy="orders_no_index">
			<p>orders_no_index.sql</p>
		</FakeTerminalUI>
		<FakeTerminalUI :text-coppy="orders_with_index">
			<p>orders_with_index.sql</p>
		</FakeTerminalUI>
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
			return usePagination('practice', 'sql-6', 'sql')
		},
		data() {
			return {
				products: `CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10,2)
);`,
				orders_no_index: `CREATE TABLE orders_no_index (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
`,
				orders_with_index: `CREATE TABLE orders_with_index (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    
    -- Thêm index cho product_id để tối ưu hóa JOIN
    INDEX idx_product_id (product_id)
);
`,
				seed_data: `
CREATE PROCEDURE insert_data()
BEGIN
    DECLARE i INT DEFAULT 1;

    -- Chèn 10,000 sản phẩm
    WHILE i <= 10000 DO
        INSERT INTO products (name, price)
        VALUES (CONCAT('Product ', i), RAND() * 1000);
        SET i = i + 1;
    END WHILE;

    SET i = 1;

    -- Chèn 100,000 đơn hàng cho cả hai bảng orders_no_index và orders_with_index
    WHILE i <= 100000 DO
        INSERT INTO orders_no_index (product_id, quantity, order_date)
        VALUES (FLOOR(RAND() * 10000) + 1, FLOOR(RAND() * 10) + 1, NOW() - INTERVAL (RAND() * 365) DAY);

        INSERT INTO orders_with_index (product_id, quantity, order_date)
        VALUES (FLOOR(RAND() * 10000) + 1, FLOOR(RAND() * 10) + 1, NOW() - INTERVAL (RAND() * 365) DAY);

        SET i = i + 1;
    END WHILE;
END;
CALL insert_data();
`,
				counter: 0,
			};
		},
		computed: {},
		methods: {},
	};
</script>

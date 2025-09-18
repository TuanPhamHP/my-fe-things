<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Bài tập: Xử lý truy vấn cơ bản.</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">Tiếp tục với bài 2.</p>
		<ul v-for="section in tasks" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Collection <FilePath>{{ section.id }}</FilePath
				>: {{ section.name }}.
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						{{ item }}
					</li>
				</ul>
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
						link: '/mongo-db/practice/e_3',
					},
					prev: {
						title: 'Danh sách',
						link: '/mongo-db/practice',
					},
				},
				tasks: [
					{
						id: 'users',
						name: 'Người dùng',
						items: [
							'Tìm user theo email chính xác.',
							'Tìm tất cả khách hàng có role = customer.',
							'Tìm tất cả user có role nằm trong ["admin", "restaurant_owner"].',
							'Tìm các user được tạo sau ngày 2025-01-01.',
							'Chỉ lấy name và email của tất cả user (ẩn _id).',
						],
						coding: 'find + projection + $in + $gt',
					},
					{
						id: 'restaurants',
						name: 'Nhà hàng',
						items: [
							'Tìm tất cả nhà hàng ở thành phố "Hanoi".',
							'Tìm nhà hàng có rating >= 4.5.',
							'Tìm tất cả nhà hàng có city = "Hanoi" hoặc "Saigon".',
							'Tìm tất cả nhà hàng có tên chứa chữ "Pizza" (regex).',
							'Projection: chỉ lấy name, city, rating.',
						],
						coding: 'find + projection + $gte + $or + $regex',
					},
					{
						id: 'menus',
						name: 'Món ăn',
						items: [
							'Tìm tất cả món ăn có price < 50000.',
							'Tìm món ăn thuộc 1 restaurantId cụ thể.',
							'Tìm tất cả món ăn có category nằm trong ["Đồ uống", "Tráng miệng"].',
							'Tìm món ăn có tên bắt đầu bằng "Trà" (regex).',
							'Projection: chỉ lấy name, price, ẩn _id.',
						],
						coding: 'find + projection + $lt + $in + $regex',
					},
					{
						id: 'orders',
						name: 'Đơn hàng',
						items: [
							'Tìm tất cả đơn hàng của 1 userId cụ thể.',
							'Tìm tất cả đơn hàng có status = "PENDING".',
							'Tìm đơn hàng có total > 500000.',
							'Tìm đơn hàng thanh toán bằng "CASH" hoặc "CARD".',
							'Chỉ lấy total, status, createdAt (ẩn _id).',
						],
						coding: 'find + projection + $eq + $gt + $in',
					},
					{
						id: 'reviews',
						name: 'Đánh giá',
						items: [
							'Tìm tất cả review của 1 restaurantId.',
							'Tìm review có rating >= 4.',
							'Tìm tất cả review trong tháng 9/2025.',
							'Tìm tất cả review có comment chứa từ "ngon".',
							'Projection: chỉ lấy userId, rating, comment.',
						],
						coding: 'find + projection + $gte + $regex + $gte/$lt (date range)',
					},
					{
						id: 'order_logs',
						name: 'Log đơn hàng (capped)',
						items: [
							'Lấy 5 log mới nhất.',
							'Tìm tất cả log có message chứa "created".',
							'Tìm log của 1 orderId cụ thể.',
						],
						coding: 'find + limit + sort + $regex',
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

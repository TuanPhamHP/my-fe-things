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
			Bài tập 1: Hiểu và tạo database, collection trong MongoDB
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Giả sử bạn đang thiết kế một hệ thống quản lý quản lý nhà hàng / đặt món online.
		</p>
		<ul>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo một database tên là <b>eMeal</b> gồm:
			</li>
		</ul>
		<ul v-for="section in docs" :key="section.id" class="pl-10">
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
						link: '/mongo-db/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/sql/practice',
					},
				},
				docs: [
					{
						id: 'users',
						name: 'Người dùng',
						items: [
							'Mục đích: Lưu thông tin khách hàng, chủ nhà hàng, admin.',
							"Validator: email unique, đúng định dạng; role chỉ trong ['customer','owner','admin'].",
						],
						coding: 'validator + unique index on email',
					},
					{
						id: 'restaurants',
						name: 'Nhà hàng',
						items: [
							'Mục đích: Lưu thông tin nhà hàng.',
							'Validator: name bắt buộc, owner_id là ObjectId hợp lệ.',
							'Index: text index trên name và categories để tìm kiếm.',
						],
						coding: 'validator + text index',
					},
					{
						id: 'menus',
						name: 'Món ăn',
						items: [
							'Mục đích: Lưu thực đơn của từng nhà hàng.',
							'Validator: price >= 0, restaurant_id bắt buộc.',
							'Index: compound index (restaurant_id, name).',
						],
						coding: 'validator + compound index',
					},
					{
						id: 'orders',
						name: 'Đơn hàng',
						items: [
							'Mục đích: Quản lý đơn đặt món của khách hàng.',
							"Validator: items không rỗng, quantity >= 1, status chỉ trong ['pending','confirmed','delivering','completed','canceled'].",
							'Index: (user_id, created_at), (restaurant_id, status).',
						],
						coding: 'validator + multiple indexes',
					},
					{
						id: 'reviews',
						name: 'Đánh giá',
						items: [
							'Mục đích: Khách hàng đánh giá nhà hàng.',
							'Validator: rating từ 1–5, comment tối đa 500 ký tự.',
							'Index: (restaurant_id, created_at).',
						],
						coding: 'validator + index',
					},
					{
						id: 'order_logs',
						name: 'Log đơn hàng (capped)',
						items: [
							'Mục đích: Ghi log sự kiện realtime khi có order mới.',
							'Capped: true, size = 1MB, max = 5000 records.',
						],
						coding: 'capped collection + tailable cursor',
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

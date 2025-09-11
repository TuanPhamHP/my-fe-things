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
			Bài tập: Xử lý CRUD với document trong MongoDB.
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">Tiếp tục với bài 1.</p>
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
							'Thêm một khách hàng mới.',
							'Thêm nhiều chủ nhà hàng cùng lúc.',
							'Tìm tất cả admin.',
							'Cập nhật email của 1 user.',
							'Xóa 1 user theo _id.',
						],
						coding: 'insertOne + insertMany + find + updateOne + deleteOne',
					},
					{
						id: 'restaurants',
						name: 'Nhà hàng',
						items: [
							'Thêm nhà hàng mới.',
							'Tìm nhà hàng theo từ khóa (text search).',
							'Cập nhật địa chỉ nhà hàng.',
							'Xóa nhà hàng theo _id.',
						],
						coding: 'insertOne + find (text) + updateOne + deleteOne',
					},
					{
						id: 'menus',
						name: 'Món ăn',
						items: [
							'Thêm món ăn cho nhà hàng cụ thể.',
							'Tìm tất cả món ăn thuộc 1 nhà hàng.',
							'Cập nhật giá món ăn.',
							'Xóa 1 món ăn.',
						],
						coding: 'insertOne + find + updateOne + deleteOne',
					},
					{
						id: 'orders',
						name: 'Đơn hàng',
						items: [
							'Tạo đơn hàng mới.',
							'Tìm tất cả đơn hàng của 1 khách hàng.',
							"Cập nhật trạng thái đơn hàng từ 'pending' sang 'confirmed'.",
							'Xóa đơn hàng bị hủy.',
						],
						coding: 'insertOne + find + updateOne + deleteMany',
					},
					{
						id: 'reviews',
						name: 'Đánh giá',
						items: [
							'Thêm review mới.',
							'Tìm tất cả review của 1 nhà hàng, sắp xếp theo ngày.',
							'Cập nhật comment review.',
							'Xóa review spam.',
						],
						coding: 'insertOne + find (sort) + updateOne + deleteOne',
					},
					{
						id: 'order_logs',
						name: 'Log đơn hàng (capped)',
						items: ['Thêm log khi có đơn hàng mới.', 'Xem 10 log mới nhất.'],
						coding: 'insertOne + find (limit/sort)',
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

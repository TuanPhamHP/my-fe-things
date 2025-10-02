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
			Bài tập: Xử lý truy vấn kết hợp Aggregation.
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Tiếp tục với bài 3.
			<a href="/seed.mongodb.js" download target="_blank" class="text-blue-500 dark:text-blue-300 underline">
				File seed!</a
			>
		</p>

		<ul v-for="section in tasks" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>{{ section.name }}</FilePath
				>:.
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
						id: 'basic',
						name: 'Truy vấn cơ bản',
						items: [
							'Liệt kê tất cả các nhà hàng (restaurants), chỉ hiển thị _id và name.',
							'Tìm tất cả các món ăn (menus) có giá lớn hơn 1,000,000.',
							'Liệt kê danh sách users có role = "customer".',
							'Tìm 5 reviews gần đây nhất có rating = 5 (sắp xếp theo _id giảm dần).',
						],
					},
					{
						id: 'orders_logs',
						name: 'Thực hành với orders và order_logs',
						items: [
							'Tìm tất cả các orders có status = "pending".',
							'Đếm số lượng orders ở mỗi status (pending, confirmed, delivering, completed, canceled).',
							'Lấy danh sách 10 logs cuối cùng trong order_logs.',
							'Với mỗi order, lấy số lượng log đã được ghi nhận.',
						],
					},
					{
						id: 'aggregation',
						name: 'Aggregation & Join',
						items: [
							'Tính giá trung bình của tất cả các món ăn (menus).',
							'Với mỗi nhà hàng, lấy tổng số món ăn mà họ có.',
							'Tìm top 3 món ăn đắt nhất trong toàn hệ thống.',
							'Lấy danh sách tất cả reviews kèm theo tên nhà hàng.',
							'Tính rating trung bình của từng nhà hàng.',
							'Tìm nhà hàng có rating trung bình cao nhất.',
							'Với mỗi customer, đếm số lượng review mà họ đã viết.',
						],
					},
					{
						id: 'update_delete',
						name: 'Thao tác dữ liệu',
						items: [
							'Tạo index trên menus.price và kiểm tra hiệu quả truy vấn với món ăn > 3,000,000.',
							'Cập nhật tất cả orders có status "pending" → "canceled" nếu đã tồn tại hơn 3 log.',
							'Xóa tất cả reviews có rating = 1 và comment chứa từ "tệ".',
							'Thêm một review mới vào 1 nhà hàng bất kỳ với rating = 5 và comment tùy ý.',
							'Tạo một order_log mới cho một order bất kỳ với action = "system_test".',
						],
					},
					{
						id: 'bonus',
						name: 'Bonus',
						items: [
							'Xuất báo cáo tổng hợp: Tổng số nhà hàng, tổng số khách hàng, tổng số món ăn.',
							'Trung bình giá món ăn theo từng nhà hàng.',
							'Top 3 khách hàng có nhiều review nhất.',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

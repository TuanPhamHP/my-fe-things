<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Bài tập: Ôn tập</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Giả sử bạn đang thiết kế một Hệ thống Quản lý Đơn hàng Dịch vụ Giao hàng Đồ ăn.
		</p>
		<PageHeading text="Phần 1 - Database" addOnClass="text-left mt-5" markedAs="db-structure" />
		<ul>
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo một database tên là <b>fast_and_fit</b> gồm:
			</li>
		</ul>
		<ul v-for="section in docs" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Collection <FilePath>{{ section.id }}</FilePath
				>: {{ section.name }}.
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						{{ item }}
					</li>
				</ul>
			</li>
		</ul>

		<PageHeading text="Yêu cầu" addOnClass="text-left" markedAs="db-query" />
		<ul v-for="section in tasks" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>{{ section.name }}</FilePath>
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						<div v-html="item"></div>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>Luồng Đơn hàng (Nghiệp vụ cốt lõi)</FilePath>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p class="mb-1">
							<FilePath>/api/orders | POST:</FilePath> Tạo đơn hàng mới . Body bao gồm customer_id (lấy từ token), danh
							sách món ăn (food_id và quantity). <br /><b>Rules:</b> Yêu cầu đăng nhập (Xác thực qua token). <br />Body
							ví dụ:
						</p>
						<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p class="mb-1">
							<FilePath>/api/orders/me | GET:</FilePath> Xem lịch sử đơn hàng của chính mình (Xác thực qua token).
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p class="mb-1">
							<FilePath>/api/orders/:id | GET:</FilePath> Xem chi tiết đơn hàng. <br /><b>Rules:</b> Chỉ admin hoặc user
							tạo đơn hàng mới được xem chi tiết đơn hàng.
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p class="mb-1">
							<FilePath>/api/orders/:id/in_progress | PUT:</FilePath> Cập nhật đơn hàng thành trạng thái
							<b>in_progress</b>. <br /><b>Rules:</b> Chỉ admin mới được cập nhật trạng thái đơn hàng, và chỉ được cập
							nhật từ <b>pending</b> sang <b>in_progress</b>.
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p class="mb-1">
							<FilePath>/api/orders/:id/shipping | PUT:</FilePath> Cập nhật đơn hàng thành trạng thái <b>shipping</b>.
							<br /><b>Rules:</b> Chỉ admin mới được cập nhật trạng thái đơn hàng, và chỉ được cập nhật từ
							<b>in_progress</b> sang <b>shipping</b>.
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p class="mb-1">
							<FilePath>/api/orders/:id/delivered | PUT:</FilePath> Cập nhật đơn hàng thành trạng thái <b>shipping</b>.
							<br /><b>Rules:</b> Chỉ admin mới được cập nhật trạng thái đơn hàng, và chỉ được cập nhật từ
							<b>shipping</b> sang <b>delivered</b>.
						</p>
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
				b1: `{
	order_items: [
			{ food_id: ObjectId("..."), quantity: 2 },
			{ food_id: ObjectId("..."), quantity: 1 }
		]
}`,
				docs: [
					{
						id: 'users',
						name: 'Khách hàng',
						items: [
							'Mục đích: Lưu thông tin khách hàng.',
							'Validator: name, phone, password (hashed), role là bắt buộc, phone phải unique. role enum ["customer", "admin"], mặc định là "customer".',
							'Quan hệ REF: users - orders (1-n).',
						],
						coding: 'validator + unique index on code',
					},
					{
						id: 'restaurants',
						name: 'Nhà hàng',
						items: [
							'Mục đích: Lưu thông tin nhà hàng của món ăn.',
							'Validator: name, address, rating là bắt buộc.',
							'Quan hệ REF: restaurant - food (1-n).',
						],
						coding: 'validator + unique index on email + ref branch_id',
					},
					{
						id: 'foods',
						name: 'Món ăn',
						items: [
							'Mục đích: Lưu thông tin các món ăn để người dùng chọn.',
							'Validator: name, price, rating, restaurant_id là bắt buộc.',
							'Quan hệ REF: restaurants - foods (1-n), orders - foods (n-n).',
						],
						coding: 'validator + unique index on phone + embedded vehicles',
					},
					{
						id: 'orders',
						name: 'Đơn hàng',
						items: [
							'Mục đích: Lưu thông tin tổng thể đơn hàng.',
							'Validator: customer_id, status, deliveryAddress là bắt buộc. Status là enum ["pending", "in_progress", "shipping", "delivered", "canceled"]. Tự động gán các trường timestamps createdAt và updatedAt.',
							'Quan hệ REF: orders - orderItems (1-n), orders - customers (n-1).',
						],
						coding: 'validator + unique index on phone + embedded vehicles',
					},
					{
						id: 'orderItems',
						name: 'Item trong đơn hàng',
						items: [
							'Mục đích: Lưu thông tin mỗi món ăn và số lượng trong đơn hàng.',
							'Validator: quantity, priceAtOrderTime là bắt buộc.',
							'Quan hệ REF: orders - orderItems (1-n), orders - customers (n-1).',
						],
						coding: 'validator + unique index on phone + embedded vehicles',
					},
				],
				tasks: [
					{
						id: 'basic',
						name: 'Tạo cơ sở dữ liệu',
						items: ['Tạo database fast_and_fit.', 'Tạo các collection với các validator đã nêu ở phần trên.'],
					},
					{
						id: 'orders_logs',
						name: 'Seed data',
						items: [
							'Chèn ít nhất 5 khách hàng (users) với các thông tin khác nhau. Mật khẩu là số điện thoại + chuỗi abc. VD: 0987654333abc.',
							'Chèn ít nhất 3 nhà hàng (restaurants).',
							'Chèn ít nhất 4 món ăn cho mỗi nhà hàng.',
						],
					},
					{
						id: 'auth',
						name: 'Auth',
						items: [
							'/api/auth/register | POST: Thêm người dùng mới (validate name, phone unique, password)',
							'/api/auth/login | POST: Đăng nhập, trả về JWT token và thông tin user',
						],
					},
					{
						id: 'authy',
						name: 'Middleware & Authentication/Authorization',
						items: [
							'Dựng api đăng ký, đăng nhập cho khách hàng: /api/auth/register, /api/auth/login.',
							'Authentication: Dùng bcrypt để hash password và JWT để tạo token khi đăng nhập. Tạo middleware xác thực token cho các route cần bảo vệ.',
							'Authorization (Phân quyền): chỉ cho phép user có role = "admin" mới được thêm món ăn mới. Tạo middleware kiểm tra role user.',
						],
					},
					{
						id: 'qlnh',
						name: 'Quản lý Nhà hàng & Món ăn',
						items: [
							'/api/restaurants | POST: Thêm nhà hàng mới  <br /><b>Rules:</b>chỉ admin mới được thêm.',
							'/api/restaurants/:id/foods | GET: Lấy danh sách món ăn của nhà hàng - không yêu cầu đăng nhập. Cho phép lọc theo: <b>name, rating</b>',
							'/api/foods | POST: Thêm món ăn mới  <br /><b>Rules:</b> chỉ admin mới được thêm.',
							'/api/foods | GET: Lấy danh sách món ăn - không yêu cầu đăng nhập. Cho phép lọc theo:  <b>name, restaurant_id</b> và sắp xếp theo <b>price</b> hoặc <b>rating</b>.',
						],
					},
					// {
					// 	id: 'qlnh',
					// 	name: 'Luồng Đơn hàng (Nghiệp vụ cốt lõi)',
					// 	items: [
					// 		'Order',
					// 		'/api/orders | POST: Tạo đơn hàng mới. Yêu cầu đăng nhập. Đơn hàng bao gồm customer_id (lấy từ token), danh sách món ăn (food_id và quantity), deliveryAddress.',
					// 	],
					// },
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>

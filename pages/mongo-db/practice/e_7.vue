<template>
	<div class="dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0 printer">
		<div class="w-full flex gap-2">
			<PageHeading text="Đề thi thực hành MongoDB" addOnClass="text-center mx-auto" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>

		<PageHeading text="Mô tả" addOnClass="text-left" markedAs="detail" />
		<p className="text-slate-900 dark:text-white my-4 pl-5">
			Thiết kế cơ sở dữ liệu MongoDB cho một chuỗi phòng khám y tế hoạt động tại nhiều tỉnh thành. <br />
			Mục tiêu: quản lý thông tin chi nhánh, bác sĩ, bệnh nhân, lịch hẹn khám, toa thuốc và báo cáo doanh thu.
		</p>

		<PageHeading text="Phần 1 - Database (8đ)" addOnClass="text-left" markedAs="db-structure" />

		<p className="text-slate-900 dark:text-white my-4 pl-5">Tạo một database tên là <b>clinic_system</b> gồm:</p>
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
						<div v-html="item"></div>
					</li>
					<div v-if="section.coding">
						<VCodeBlock :code="section.coding" highlightjs lang="js" theme="atom-one-dark" />
					</div>
				</ul>
			</li>
		</ul>
		<!-- <p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
			<a href="/seed3.mongodb.js" download target="_blank" class="text-blue-500 dark:text-blue-300 underline">
				File seed!</a
			>
		</p> -->
		<PageHeading text="Phần 2 - Query (12đ)" addOnClass="text-left" markedAs="db-query" />
		<ul v-for="section in tasks" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<div>
					<FilePath>{{ section.name }}</FilePath> - <b>{{ section.point }} điểm</b>:
				</div>
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

		<PageHeading text="Lưu ý" addOnClass="text-left" markedAs="db-query" />
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Đề bài bao gồm 02 phần, tổng số điểm là 20đ.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Thư mục đề bài bao gồm: file đề bài <FilePath>de_thi.pdf</FilePath> và file seed dữ liệu
				<FilePath>seed.mongodb.js</FilePath>.
			</li>
		</ul>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>

		<div class="w-full flex gap-2">
			<PageHeading text="Kết thúc" addOnClass="text-center mx-auto" markedAs="env" />
		</div>
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
				docs: [
					{
						id: 'clinics',
						name: 'Phòng khám',
						items: [
							'Mục đích: Lưu thông tin các chi nhánh.',
							'Validator: </br><b>name</b> và <b>city</b> là bắt buộc. </br><b>code</b> là unique.',
							'Ví dụ: "Hà Nội Care Center", "Đà Nẵng Medical Hub", "Sài Gòn Health Center".',
						],
					},
					{
						id: 'doctors',
						name: 'Bác sĩ',
						items: [
							'Mục đích: Lưu thông tin bác sĩ tại mỗi chi nhánh.',
							"Validator: </br><b>email</b> unique; </br><b>specialty</b> chỉ trong ['general', 'dentist', 'cardiology', 'dermatology', 'pediatrics']; salary >= 0.",
							'Quan hệ: Tham chiếu đến <b>clinic_id (clinics._id)</b>.',
						],
					},
					{
						id: 'patients',
						name: 'Bệnh nhân',
						items: [
							'Mục đích: Lưu thông tin bệnh nhân.',
							'Validator: </br> <b>phone</b> unique </br> <b>name</b> không được trống.',
							'Quan hệ nhúng: chứa mảng <b>addresses [{ label, district, city, street }]</b>.',
						],
					},
					{
						id: 'appointments',
						name: 'Lịch hẹn',
						items: [
							'Mục đích: Ghi nhận lịch khám giữa bệnh nhân và bác sĩ.',
							"Validator: </br><b>fee</b> >= 0; </br><b>status</b> chỉ trong ['scheduled', 'completed', 'cancelled'].",
							'Quan hệ: </br>Tham chiếu đến bác sĩ <b>doctor_id (doctors._id)</b>.</br>Tham chiếu đến bệnh nhân <b>patient_id (patients._id)</b>.</br>Tham chiếu đến phìng khám <b>clinic_id (clinics._id)</b>.',
							'Quan hệ nhúng: mảng <b>symptoms</b> - mảng chuỗi, VD: ["ho", "đau đầu"].',
						],
						coding: `symptoms: ["ho", "đau đầu"]`,
					},
					{
						id: 'prescriptions',
						name: 'Toa thuốc',
						items: [
							'Mục đích: Lưu chi tiết thuốc được kê cho từng lần khám.',
							'Validator: <b>drugs</b> là mảng bắt buộc, là mảng bắt buộc, mỗi phần tử có <b>{ name, dosage, unit_price, quantity }</b>',
							'Quan hệ nhúng: <b>appointment_id (appointments._id)</b>.',
						],
					},
				],
				tasks: [
					{
						id: 'basic',
						name: 'Truy vấn cơ bản:',
						point: 4,
						items: [
							'Tìm tất cả <b>appointments</b> có <b>status = "scheduled"</b> tại <b>"Hà Nội Care Center"</b>, chỉ lấy <b>ten_bac_si (doctor.name)</b>, <b>ten_benh_nhan (patient.name)</b>, <b>lich_hen (scheduled_at)</b>.',
							'Liệt kê danh sách <b>doctors</b> ở "Đà Nẵng Medical Hub", chỉ hiển thị <b>name, specialty</b>.',
							'Tìm các <b>appointments</b> có <b>fee > 500000</b>, sắp xếp giảm dần theo <b>scheduled_at</b>.',
						],
					},
					{
						id: 'orders_logs',
						name: 'Thao tác dữ liệu:',
						point: 3,
						items: [
							'Tăng salary 1000000 cho tất cả bác sĩ có <b>specialty = "cardiology"</b>.',
							'Tạo view <b>clinic_revenue_summary</b> hiển thị mỗi chi nhánh và tổng fee của các <b>appointments</b> trong năm 2025. Chỉ hiển thị <b>ten_phong_kham (clinic.name)</b> và Chỉ hiển thị <b>phi_kham (fee)</b>',
							'Tạo compound index trên <b>appointments</b>: { clinic_id: 1, scheduled_at: -1 }.',
						],
					},
					{
						id: 'aggregation',
						name: 'Aggregation:',
						point: 5,
						items: [
							'Đếm số lượng <b>appointments</b> theo <b>status</b>.',
							'Tính tổng <b>fee<> của từng phòng khám <b>clinics</b>. Trả ra 2 trường <b>ten_phong_kham (clinic.name)</b> và <b>tong_phi_kham (total_fee)</b>.',
							'Liệt kê mỗi bác sĩ và tổng số bệnh nhân đã khám (status = "completed"), sắp xếp giảm dần theo số bệnh nhân. Hiển thị <b>ten_bac_si (doctor.name)</b> và <b>so_benh_nhan (patient_count)</b>.',
							'Top 3 chi nhánh có doanh thu cao nhất trong năm 2025.',
							'Với mỗi <b>appointment</b>, xác định <b>total_prescription_cost</b> = tổng giá trị toa thuốc (quantity * unit_price) của mảng drugs.',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
<style lang="scss" scopped>
	// .printer {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	z-index: 9999;
	// 	border-radius: 0;
	// 	padding: 20px;
	// }
</style>

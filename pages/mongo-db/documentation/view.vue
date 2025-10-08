<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="View trong MongoDB" addOnClass="text-left" markedAs="view" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					View trong MongoDB là một Collection ảo (Virtual Collection), được định nghĩa bởi một Aggregation Pipeline.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							View không lưu trữ dữ liệu vật lý. Thay vào đó, mỗi khi bạn truy vấn View, MongoDB sẽ thực thi Pipeline đã
							được định nghĩa trên Collection nguồn (Source Collection) và trả về kết quả.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Đơn giản hóa truy vấn: Che giấu sự phức tạp của các câu lệnh aggregate lặp đi lặp lại. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Bảo mật dữ liệu: Chỉ hiển thị một tập con (subset) dữ liệu hoặc các trường (fields) cụ thể cho người dùng,
							bảo vệ các thông tin nhạy cảm.
						</span>
					</li>
				</ul>
				<DocFactoryV2Table :headers="headers" :items="items" />

				<PageHeading text="Syntax" addOnClass="text-left mt-3" markedAs="syntax" />
				<PageHeading text="Create" addOnClass="text-left mt-3" markedAs="create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					View được tạo bằng lệnh db.createView(). View luôn phải được tạo trên <b>một Collection đã tồn tại</b>.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ví dụ đơn giản: Tạo View tên là <FilePath>nhan_vien_thong_ke</FilePath> từ Collection
					<FilePath>employees</FilePath>, chỉ dành cho HR/Quản lý cấp cao, chỉ hiển thị tên, phòng ban và lương, nhưng
					ẩn email và không hiển thị những nhân viên phòng Sales.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Seed Data:</p>
				<VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" />
				<!--  -->
				<PageHeading text="Query" addOnClass="text-left mt-3" markedAs="query" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Sau khi tạo, bạn truy vấn View như thể nó là một Collection thông thường bằng các phương thức find(),
					findOne(), aggregate().... <br />
					Ví dụ: Lấy tất cả nhân viên IT trong View <FilePath>nhan_vien_thong_ke</FilePath>, tính tổng tiền lương phòng
					IT. Ngoài ra, bạn có thể áp dụng các bộ lọc (filter), sắp xếp (sort), phân trang (pagination) như với
					Collection.
				</p>
				<PageHeading text="Update & Drop" addOnClass="text-left mt-3" markedAs="query" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Để thay đổi định nghĩa của một View, chúng ta đơn giản là xoá nó đi bằng
					<FilePath>db.view_name.drop()</FilePath> và tạo lại 1 view mới <FilePath>db.createView()</FilePath> thay vì
					dùng <b>collMod</b> như trong collection.
				</p>
				<LessonSum :sumData="lessonSum" />
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import LessonSum from '@/components/Documentation/LessonSum.vue';
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	export default {
		components: {
			LessonSum,
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				lessonSum: [
					'Hiểu bản chất của View trong MongoDB (virtual collection, đọc-only, dựa trên aggregation pipeline)',
					'Tạo và quản lý View bằng db.createView() (và cách sửa / xoá).',
					'Viết Aggregation pipeline dùng cho View, bao gồm $lookup, $unwind, $group, $project.',
					'Hiểu hạn chế (read-only, không có index riêng) và khi nào dùng View.',
				],
				headers: [
					{
						id: 1,
						name: 'Tính năng',
						key: 'command',
					},
					{
						id: 2,
						name: 'Collection Thường (Vật lý)	',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'View (Ảo)',
						key: 'example',
					},
				],
				items: [
					{
						command: 'Dữ liệu',
						syntax: 'Lưu trữ Document vật lý',
						example: 'Không lưu trữ, là kết quả của một truy vấn (Pipeline)',
					},
					{
						command: 'Ghi (Write Operations)',
						syntax: 'Cho phép (Insert, Update, Delete)',
						example: 'Không cho phép (Chỉ đọc - Read Only)',
					},
					{
						command: 'Định nghĩa',
						syntax: 'Không cần',
						example: 'Yêu cầu một Aggregation Pipeline',
					},
				],
				b1: `db.createView(
  "<tên_view>",      // Tên của View mới
  "<collection_nguồn>", // Tên của Collection mà View sẽ dựa vào
  [<pipeline_aggregate>], // Aggregation Pipeline định nghĩa View
  { viewOn: "<collection_nguồn>" } // Tùy chọn, thường không cần thiết
)`,
				b2: `db.createView(
  "nhan_vien_thong_ke", // Tên View
  "employees",          // Collection nguồn
  [
    { $match: { phong_ban: { $ne: "Sales" } } }, // Chỉ lấy nhân viên không thuộc Sales
    { $project: { _id: 0, ten: 1, phong_ban: 1, luong: 1 } } // Chỉ hiển thị 3 trường
  ]
)`,
				b3: `use('company'); 

const departments = ['IT', 'Sales', 'HR', 'Marketing'];
const names = [
  'Nguyễn Văn An', 'Trần Thị Bình', 'Lê Văn Cường', 'Phạm Thị Dung', 'Võ Quốc Duy',
  'Đặng Ngọc Hân', 'Ngô Thanh Hải', 'Huỳnh Minh Hòa', 'Phan Văn Hưng', 'Bùi Thị Lan',
  'Lý Minh Long', 'Đoàn Thanh Mai', 'Tạ Đức Minh', 'Đỗ Phương Nam', 'Mai Thanh Nga',
  'Cao Hoàng Phúc', 'Trương Thị Quỳnh', 'Vũ Minh Quân', 'Hoàng Anh Thư', 'Nguyễn Văn Tiến',
  'Trần Quốc Toàn', 'Phạm Thị Trang', 'Ngô Hữu Trung', 'Lê Thị Tâm', 'Võ Văn Thắng',
  'Đinh Thị Vân', 'Bùi Đức Vũ', 'Đỗ Hữu Lộc', 'Phạm Hồng Sơn', 'Lê Nhật Minh'
];

const users = names.map((ten, index) => {
  const phong_ban = departments[Math.floor(Math.random() * departments.length)];
  const luong = Math.floor(40000 + Math.random() * 40000); 
  const email = ten.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') 
    .replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '.') + '@cty.com';

  return {
    _id: index + 1,
    ten,
    phong_ban,
    luong,
    email
  };
});

db.employees.insertMany(users);`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-10' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

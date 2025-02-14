<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Database Models trong RDBMS" addOnClass="text-left" markedAs="about-rdbms-models" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trong hệ quản trị cơ sở dữ liệu quan hệ (RDBMS), dữ liệu được tổ chức theo nhiều mô hình khác nhau để đảm bảo
					tính linh hoạt và tối ưu hóa hiệu suất. Tiếp theo, chúng ta sẽ "ngó" qua các dạng database model phổ biến
					trong RDBMS:
				</p>
				<PageHeading text="Hierarchical Model" addOnClass="text-left mt-5" markedAs="" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b> Mô Hình Thứ Bậc - Hierarchical Model </b> là một trong những mô hình cơ sở dữ liệu lâu đời nhất, trong đó
					dữ liệu được tổ chức theo <b>cấu trúc cây (Tree Structure)</b>.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							Gồm các thành phần chính:
							<br />
							<br />
							<FilePath>Nút gốc (Root Node)</FilePath>: Nút cao nhất trong cây, không có cha.

							<br />
							<br />
							<FilePath>Nút cha (Parent Node)</FilePath>: Nút có thể có một hoặc nhiều nút con.

							<br />
							<br />
							<FilePath>Nút con (Child Node)</FilePath>: Nút thuộc một nút cha duy nhất.
						</div>
					</li>
				</ul>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_720/https://dataintegrationinfo.com/wp-content/uploads/2020/08/image1-2.png"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ví dụ thực tế: Giả sử công ty có nhiều phòng ban, mỗi phòng ban có nhiều nhân viên.
				</p>
				<div class="col-span-1"><VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" /></div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Quick Notes:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Dữ liệu được tổ chức theo cấp bậc với <b>nút gốc (Root Node)</b> và các <b>nút con (Child Nodes)</b>, dưới
							dạng <b>cấu trúc cây (Tree Structure).</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Mỗi nút cha (Parent Node) có thể <b>có nhiều nút con</b>, nhưng mỗi nút con <b>chỉ có một cha</b>.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Mối quan hệ giữa các bản ghi là <b>1-N (One-to-Many), không hỗ trợ N-N</b> </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Để truy vấn với mô hình dạng này thì người dùng buộc phải nắm được cấu trúc của cây. </span>
					</li>
				</ul>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">✅ Ưu điểm</th>
							<th scope="col" class="px-5 py-3">❌ Nhược điểm</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">✅ Dễ hiểu, trực quan, phù hợp với dữ liệu có cấu trúc cây.</td>
							<td class="px-5 py-4">❌ Không hỗ trợ quan hệ N-N (Many-to-Many), chỉ hỗ trợ 1-N.</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">✅ Truy vấn nhanh khi duyệt theo cấp bậc.</td>
							<td class="px-5 py-4">❌ Khó cập nhật khi có thay đổi trong cấu trúc.</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">✅ Tốt cho tổ chức dữ liệu phân cấp, như tổ chức nhân sự, danh mục sản phẩm.</td>
							<td class="px-5 py-4">❌ JOIN phức tạp khi truy vấn nhiều cấp độ.</td>
						</tr>
					</tbody>
				</table>
				<div class="border rounded px-3 col-span-2 mt-5">
					<p class="text-slate-900 dark:text-white mt-3">
						<b>Khi nào nên dùng?</b>
					</p>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi dữ liệu có <b>cấu trúc phân cấp rõ ràng</b> (tổ chức công ty, danh mục sản phẩm, thư mục hệ thống).
						</li>
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi cần <b>truy vấn theo cấp bậc</b> (ví dụ: tìm tất cả nhân viên dưới quyền một người quản lý).
						</li>
					</ul>
				</div>

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
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
				b1: `const fs = require('fs');

// Đọc tệp một cách không đồng bộ
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
	console.log('đọc file hoàn tất !!');
  console.log(data);
});

console.log('File đang được đọc...');
`,
				b2: `Company (Root)
│── Sales (Department)
│   │── Alice (Employee)
│   │── Bob (Employee)
│
│── IT (Department)
│   │── Charlie (Employee)
│   │── David (Employee)
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

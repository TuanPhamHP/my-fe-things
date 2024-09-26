<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Xây dựng Server Node.js với Routes cơ bản:</p>

		<p className="text-slate-900 dark:text-white mt-5">
			xây dựng một server HTTP cơ bản sử dụng Node.js thuần và thực hiện việc mapping routes (định tuyến) cho các đường
			dẫn khác nhau:
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			1 - Tạo một server Node.js lắng nghe trên cổng <b>`3000`</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">2 - Xử lý các route cơ bản như:</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<span>
					<FilePath>/</FilePath> : Trang chủ, trả về một đoạn HTML đơn giản như "Xin chào các bạn" với định dạng code
					HTML</span
				>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<span>
					<FilePath>/about</FilePath> : Trang giới thiệu, trả về một đoạn HTML đơn giản với 3 dòng thông tin:
					<br />
					- Họ Tên:
					<br />
					- Năm sinh:
					<br />
					- Email:
				</span>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<span> Các route khác: Trả về thông báo "404 Not Found" cho các route không tồn tại. </span>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">3 - Cho danh sách dữ liệu sau:</p>
		<div class="max-h-[200px] overflow-y-scroll rounded-lg mt-3">
			<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />
		</div>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<div>
					Tạo route <FilePath>/user/:id</FilePath> : với <b>`:id`</b> là biến truyền vào từ người dùng. Xử lý tìm kiếm
					và trả ra thông tin user có id tương ứng.
					<br />
					VD: <FilePath>/user/1</FilePath>: sẽ trả ra view thông tin:
					<div class="px-3 py-3 rounded border my-3">
						<h3>- Họ Tên: Nguyễn Văn A</h3>
						<h3>- Năm sinh: 2001</h3>
						<h3>- Email: nguyenvana@gmail.com</h3>
					</div>
				</div>
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
						link: '/nodejs/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/nodejs/practice',
					},
				},
				b1: `const dummyDatas = [
    [
        "id" => 1,
        "name" => "Nguyễn Văn A",
        "email" => "nguyenvana@gmail.com",
        "score" => 85.6,
        "yob" => 2001
    ],
    [
        "id" => 2,
        "name" => "Trần Thị B",
        "email" => "tranthib@gmail.com",
        "score" => 78.4,
        "yob" => 2002
    ],
    [
        "id" => 3,
        "name" => "Lê Văn C",
        "email" => "levanc@gmail.com",
        "score" => 92.1,
        "yob" => 2003
    ],
    [
        "id" => 4,
        "name" => "Phạm Thị D",
        "email" => "phamthid",
        "score" => 88.9,
        "yob" => 2004
    ],
];`,
			};
		},
		computed: {},
		methods: {},
	};
</script>

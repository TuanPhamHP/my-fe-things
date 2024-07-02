<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập PHP - Class & Object" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">
			Tạo 2 Lớp: Tạo hai lớp <b>`Person`</b> và <b>`Employee`</b>. Lớp <b>`Employee`</b> kế thừa từ lớp <b>`Person`</b>.
		</p>
		<div class="py-2"></div>
		<p className="text-slate-900 dark:text-white mt-5">Yêu cầu:</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			1 - Lớp <b>`Person`</b> có các properties để lưu trữ thông tin về tên, tuổi, giới tính.
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">2 - Lớp <b>`Employee`</b> có thêm property tiền lương.</p>
		<div className="text-slate-900 dark:text-white mt-2 pl-5">
			3 - Tạo các methods trong lớp Employee để:
			<br />
			<p class="px-5 pt-3">
				a) Hiển thị thông tin nhân viên bao gồm cả thông tin cá nhân và mức lương.
				<br />EG: $exampleEmployee->getInfo(); <br />
				=> `- Họ tên: Nguyễn Văn A - Giới tính: Nam - Tuổi: 25 - Lương: 1000000 VNĐ`
			</p>
			<p class="px-5 pt-3">
				b) Update tên nhân viên.
				<br />EG: $exampleEmployee->updateName('Trần Văn C'); <br />
				=> `- Họ tên: Trần Văn C - Giới tính: Nam - Tuổi: 25 - Lương: 1000000 VNĐ`
			</p>
		</div>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">Note: Các bạn tự đặt tên của các methods, properties.</p>
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
						title: 'Bài 3',
						link: '/php/practice/e_3',
					},
					prev: {
						title: 'Bài 1',
						link: '/php/practice/e_1',
					},
				},
				b1: `$models = [
    [
        "id" => 1,
        "name" => "Nguyễn Văn A",
        "gender" => "male",
        "score" => 85.6,
        "yob" => 2001
    ],
    [
        "id" => 2,
        "name" => "Trần Thị B",
        "gender" => "female",
        "score" => 78.4,
        "yob" => 2002
    ],
    [
        "id" => 3,
        "name" => "Lê Văn C",
        "gender" => "male",
        "score" => 92.1,
        "yob" => 2003
    ],
    [
        "id" => 4,
        "name" => "Phạm Thị D",
        "gender" => "female",
        "score" => 88.9,
        "yob" => 2004
    ],
    [
        "id" => 5,
        "name" => "Hoàng Văn E",
        "gender" => "male",
        "score" => 74.3,
        "yob" => 2005
    ]
];`,
			};
		},
		computed: {},
		methods: {},
	};
</script>

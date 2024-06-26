<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập PHP" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Cho danh sách học sinh sau:</p>
		<div class="py-2"></div>

		<div class="rounded-xl overflow-hidden">
			<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
		</div>
		<div class="py-2"></div>
		<p className="text-slate-900 dark:text-white mt-5">Từ mảng trên, sử dụng các methods về array đã học để:</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			1 - Tính điểm trung bình của các bạn và lưu vào biến <b>`$avgScore`</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			2 - Lọc ra danh sách các học sinh có điểm cao hơn <b>`$avgScore`</b> và lưu vào mảng
			<b>`$topHigherScores`</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			3 - Viết hàm <b>`$isHigher( $student )`</b> với $student là tham số đầu vào, khi gọi đến hàm này và truyền một bản
			ghi học sinh bất kì thì sẽ in ra màn hình <br />
			'$student_name có điểm cao hơn trung bình' hoặc '$student_name có điểm thấp hơn trung bình'.
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			4 - In ra danh sách các học sinh trên thành các thẻ HTML, mỗi học sinh là một thẻ <b>div</b>
			trong đó có chứa thông tin: Tên, Tuổi, Giới tính, Số điểm.
		</p>
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
						link: '/reactjs-basic/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/reactjs-basic/practice',
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

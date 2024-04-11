<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 1 - Array Methods" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Cho mảng dữ liệu sau:</p>

		<VCodeBlock
			code="const listData = [
		{ id: 1, name: 'Tai nghe Sony WF-1000XM4', price: 2990000 , category: {id:1, name: 'Tai nghe in-ear'}, quantity: 40},
		{ id: 2, name: 'Tai nghe Sony WH-1000XM4', price: 6690000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 23 },
		{ id: 3, name: 'Tai nghe không dây WH-CH510', price: 1190000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 88 },
		{ id: 4, name: 'Tai nghe chống ồn WH-1000XM5', price: 6490000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 12 },
		{ id: 5, name: 'Loa đeo cổ không dây SRS-NS7', price: 6990000, category: {id:3, name: 'Loa'}, quantity: 1 },
];"
			highlightjs
			lang="javascript"
			theme="tomorrow-night-bright"
		/>
		<p className="text-slate-900 dark:text-white mt-5">
			1/ Sử dụng method <b>`filter()`</b> để lọc ra những sản phẩm có giá từ 5.000.000đ
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			2/ Sử dụng method <b>`filter()`</b> để lọc ra những sản phẩm có giá từ 1.000.000đ đến 5.000.000đ và có category id
			là 2
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			3/ Sử dụng method <b>`map()`</b> để tạo ra mảng mới từ mảng <b>`listData`</b>, các sản phẩm ở mảng mới có giá cao
			gấp đôi mảng ban đầu.
		</p>
		<p className="text-slate-900 dark:text-white text-xl mt-5">
			=&gt; Chỉ xem <b>`đáp án`</b> khi đã làm xong và cần kiểm tra. Hãy nhớ rằng việc copy đáp án để hoàn thành bài
			chống đối sẽ không mang lại ý nghĩa gì cho bạn cả.
		</p>
		<Disclosure>
			<DisclosureButton class="py-2">
				<div
					class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Đáp án
				</div>
			</DisclosureButton>
			<DisclosurePanel>
				<div class="mb-5">
					<p className="text-slate-900 dark:text-white text-lg my-2">Câu 1:</p>
					<TabGroup>
						<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded py-1 px-1">
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Kết quả
								</button>
							</Tab>
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Code
								</button>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel
								><VCodeBlock
									:code="`// danh sách các data có price >= 5.000.000
[
${listData1.map(o => JSON.stringify(o)).join(', \n')}
];`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
							<TabPanel
								><VCodeBlock
									:code="`const result1 = listData.filter(item => {
	return item.price >= 5000000
});
console.log(result1);`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
				<div class="mb-5">
					<p className="text-slate-900 dark:text-white text-lg my-2">Câu 2:</p>

					<TabGroup>
						<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded py-1 px-1">
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Kết quả
								</button>
							</Tab>
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Code
								</button>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel
								><VCodeBlock
									:code="`// danh sách các data có price >= 5.000.000
[
${listData2.map(o => JSON.stringify(o)).join(', \n')}
];`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
							<TabPanel
								><VCodeBlock
									:code="`const result2 = listData.filter(item => {
	// tạo biến logic 'isMatchPrice' đóng vai trò kiểm tra xem item có thỏa mãn điều kiện về giá không.
	const isMatchPrice = item.price >= 1000000 && item.price <= 5000000;
	// tạo biến logic 'isMatchCategory' đóng vai trò kiểm tra xem item có thỏa mãn điều kiện về category không.
	const isMatchCategory = item.category.id === 2;
	// kết quả trả ra dựa trên việc dùng phép toàn 'AND' của 2 biến điều kiện trên
	// => chỉ khi item thỏa mãn cả 2 điều kiện thì kết quả mới ra true và item được lưu vào mảng mới.
	return isMatchPrice && isMatchCategory;
});
console.log(result2);`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
				<div class="mb-5">
					<p className="text-slate-900 dark:text-white text-lg my-2">Câu 3:</p>

					<TabGroup>
						<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded py-1 px-1">
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Kết quả
								</button>
							</Tab>
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Code
								</button>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<VCodeBlock
									:code="`// danh sách mới trong đó data có price bằng price cũ x 2
[
${listData3.map(o => JSON.stringify(o)).join(', \n')}
];`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
							<TabPanel
								><VCodeBlock
									:code="`const result3 = listData.map(item => {
	// chúng ta sẽ copy item cũ sang một biến mới để xử lý dữ liệu mà không tác động đến item ban đầu
	const itemCopy = {...item}; // đây là spread-syntax, được sử dụng rất rộng rãi với object, array để copy data
	// lúc này chúng ta sẽ xử lý dữ liệu với biến 'itemCopy' để tránh việc tác động vào data gốc là 'item'
	itemCopy.price *= 2;
	// sau khi thực hiện xong ta sẽ trả ra itemCopy để lưu trữ vào mảng 'result3'
	return itemCopy;
});
console.log(result3);`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
			</DisclosurePanel>
		</Disclosure>
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
				listData: [
					{
						id: 1,
						name: 'Tai nghe Sony WF-1000XM4',
						price: 2990000,
						category: { id: 1, name: 'Tai nghe in-ear' },
						quantity: 40,
					},
					{
						id: 2,
						name: 'Tai nghe Sony WH-1000XM4',
						price: 6690000,
						category: { id: 2, name: 'Tai nghe over-ear' },
						quantity: 23,
					},
					{
						id: 3,
						name: 'Tai nghe không dây WH-CH510',
						price: 1190000,
						category: { id: 2, name: 'Tai nghe over-ear' },
						quantity: 88,
					},
					{
						id: 4,
						name: 'Tai nghe chống ồn WH-1000XM5',
						price: 6490000,
						category: { id: 2, name: 'Tai nghe over-ear' },
						quantity: 12,
					},
					{
						id: 5,
						name: 'Loa đeo cổ không dây SRS-NS7',
						price: 6990000,
						category: { id: 3, name: 'Loa' },
						quantity: 1,
					},
				],
				pagePagination: {
					next: {
						title: 'Comming Soon ...',
						link: '/reactjs-basic/practice/e_1',
					},
					prev: {
						title: 'Danh sách bài tập',
						link: '/reactjs-basic/practice',
					},
				},
			};
		},
		computed: {
			listData1() {
				return this.listData.filter(o => o.price >= 5000000);
			},
			listData2() {
				return this.listData.filter(o => {
					const isMatchPrice = o.price >= 1000000 && o.price <= 5000000;
					const isMatchCategory = o.category.id === 2;
					return isMatchPrice && isMatchCategory;
				});
			},
			listData3() {
				return this.listData.map(o => ({ ...o, price: o.price * 2 }));
			},
		},
		methods: {
			// parseToString(){
			// 	const div = document.createElement('div')
			// 	div.innerText =
			// }
		},
	};
</script>

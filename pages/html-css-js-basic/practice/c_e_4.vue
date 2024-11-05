<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập - Condition & Loop" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Cho mảng dữ liệu sau:</p>

		<VCodeBlock
			code="const listData = [
		{ id: 1, name: 'Tai nghe Sony WF-1000XM4', price: 1000 , category: {id:1, name: 'Tai nghe in-ear'}, quantity: 40},
		{ id: 2, name: 'Tai nghe Sony WH-1000XM4', price: 2000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 23 },
		{ id: 3, name: 'Tai nghe không dây WH-CH510', price: 10000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 88 },
		{ id: 4, name: 'Tai nghe chống ồn WH-1000XM5', price: 50000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 12 },
		{ id: 5, name: 'Loa đeo cổ không dây SRS-NS7', price: 80000, category: {id:3, name: 'Loa'}, quantity: 1 },
];"
			highlightjs
			lang="javascript"
			theme="tomorrow-night-bright"
		/>
		<p className="text-slate-900 dark:text-white mt-5">
			Đây là mảng danh sách các sản phẩm trong một hoá đơn của một cửa hàng, trong đó mỗi sản phẩm có thông tin, giá và
			số lượng.
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			<b style="font-size: 18px">1/</b> Viết hàm <b>calculateTotal</b> nhận vào một hoá đơn và trả ra tổng số tiền của
			hoá đơn đó.
			<br />
			Biết với sản phẩm có price >= 5000 thì được giảm giá 5%
			<br />
			Biết với sản phẩm có price >= 10000 thì được giảm giá 7%
			<br />
			Giá trị của mỗi dòng hàng hoá được tính = price * quantity
			<br />Ví dụ:
		</p>
		<VCodeBlock :code="b1" highlightjs lang="javascript" theme="tomorrow-night-bright" />
		<p className="text-slate-900 dark:text-white mt-5">
			<b style="font-size: 18px">2/</b> Viết hàm <b>getLargestBill</b> nhận vào một mảng hoá đơn và trả ra hoá đơn có
			tổng giá trị lớn nhất của mảng hoá đơn đó.
			<br />
			Biết với sản phẩm có price >= 5000 thì được giảm giá 5%
			<br />
			Biết với sản phẩm có price >= 10000 thì được giảm giá 7%
			<br />
			Giá trị của mỗi dòng hàng hoá được tính = price * quantity
			<br />Ví dụ:
		</p>
		<VCodeBlock :code="b2" highlightjs lang="javascript" theme="tomorrow-night-bright" />
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
				b1: `function calculateTotal (bills){
// code logic
}
calculateTotal(listData); // in ra console: Tổng giá trị hoá đơn là: xyz VNĐ
`,
				b2: `function getLargestBill (bills){
// code logic
}
getLargestBill(listData); // in ra console: Hoá đơn có tổng giá trị lớn nhất là: Tai nghe không dây WH-CH510 - xyz VNĐ
`,
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

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 1 - React Functional Component" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">
			Dùng <b>`JSX`</b> để tạo ra Functional Component <FilePath>ProductCard.jsx</FilePath> có UI như sau:
		</p>
		<div class="py-2"></div>

		<div class="rounded-xl overflow-hidden">
			<iframe
				style="border: 1px solid rgba(0, 0, 0, 0.1)"
				width="100%"
				height="350"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F1bVYxHzzxhGKIyePEwMIOy%2FeCommerce-Website%3Fnode-id%3D2108-3566%26t%3DWrJPI36uBaxY0Qtk-1"
				allowfullscreen
			></iframe>
		</div>
		<div class="py-2"></div>
		<a
			href="https://www.figma.com/design/1bVYxHzzxhGKIyePEwMIOy/eCommerce-Website?node-id=0-1&t=WrJPI36uBaxY0Qtk-1"
			target="_blank"
			rel="noreferrer"
			class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
		>
			Click để view File Figma
		</a>
		<p className="text-slate-900 dark:text-white mt-5">
			<b>Yêu cầu 1:</b> Dựng Component <FilePath>ProductCard.jsx</FilePath> có UI như yêu cầu.
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			Sau khi đã hoàn thành giao diện. Chúng ta có một object chứa thông tin chi tiết của một sản phẩm:
		</p>
		<VCodeBlock
			code="const productData = 	{
						id: 2,
						name: 'Bàn trang điểm Bali kiểu dáng Bắc Âu',
						price: 3500000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvppy59x7ywp8d',
						description:
							'✅ Chất liệu: Ván sợi mật độ trung bình (MDF) \n✅ Kích thước thùng carton: 108x46x15cm \n✅ Quy cách đóng gói: 14kg',
					}"
			highlightjs
			lang="javascript"
			theme="tomorrow-night-bright"
		/>
		<p className="text-slate-900 dark:text-white mt-5">
			<b>Yêu cầu 2:</b> Thay thế data vừa có được vào Component <FilePath>ProductCard.jsx</FilePath>
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
			};
		},
		computed: {},
		methods: {},
	};
</script>

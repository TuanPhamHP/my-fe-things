<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 1 - React Functional Component" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Dựng page có UI như sau:</p>
		<div class="py-2"></div>

		<div class="rounded-xl overflow-hidden">
			<iframe
				style="border: 1px solid rgba(0, 0, 0, 0.1)"
				width="100%"
				height="350"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FEvX4Mjdou6tT4zWTNLdL7O%2FAdmin-Dashboard-(-E-commerce-)design-(Community)-(Copy)%3Fnode-id%3D1-2834%26t%3Di5SjT31e77yuGGSn-1"
				allowfullscreen
			></iframe>
		</div>
		<div class="py-2"></div>
		<a
			href="https://www.figma.com/design/EvX4Mjdou6tT4zWTNLdL7O/Admin-Dashboard-(-E-commerce-)design-(Community)-(Copy)?node-id=1-2834&t=i5SjT31e77yuGGSn-0"
			target="_blank"
			rel="noreferrer"
			class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
		>
			Click để view File Figma
		</a>
		<p className="text-slate-900 dark:text-white mt-5">Yêu cầu:</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			1 - Tạo các components <b>`Header`, `Sidebar`, `Footer`</b> riêng biệt để có thể include vào view của page
			'index.php'
		</p>

		<div className="text-slate-900 dark:text-white mt-2 pl-5">
			2 - Cho data đầu vào là mảng `$products`:
			<div class="mt-4 h-[320px] overflow-y-scroll rounded-lg">
				<VCodeBlock :code="b1" highlightjs lang="jsx" theme="tomorrow-night-bright" />
			</div>

			<p class="px-5 pt-3">
				- Tạo component <b>`productCard`</b> và sử dụng method <FilePath>array_map()</FilePath> để render ra danh sách
				sản phẩm đang bán.
			</p>
			<p className="text-slate-900 dark:text-white mt-2 pl-5">
				3 - Xử lý tính năng search bằng tên của danh sách sản phẩm khi người dùng gõ tên và nhấn 'Enter'.
			</p>
		</div>
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
				b1: `$products = [
    [
        "id" => 1,
        "product_name" => "Toyota Camry",
        "description" => "Toyota Camry là dòng sedan hạng trung với thiết kế hiện đại, nội thất tiện nghi và động cơ mạnh mẽ.",
        "images" => "camry.jpg",
        "regular_price" => 40000,
        "sale_price" => 38000,
        "brand_id" => 1,
        "category_id" => 1,
    ],
    [
        "id" => 2,
        "product_name" => "Honda Civic",
        "description" => "Honda Civic là mẫu xe sedan nhỏ gọn, tiết kiệm nhiên liệu, phù hợp cho việc di chuyển trong thành phố.",
        "images" => "civic.jpg",
        "regular_price" => 25000,
        "sale_price" => 23000,
        "brand_id" => 2,
        "category_id" => 1,
    ],
    [
        "id" => 3,
        "product_name" => "Ford Ranger",
        "description" => "Ford Ranger là xe bán tải mạnh mẽ, có khả năng vượt địa hình tốt, phù hợp cho cả công việc và giải trí.",
        "images" => "ranger.jpg",
        "regular_price" => 35000,
        "sale_price" => 33000,
        "brand_id" => 3,
        "category_id" => 2,
    ],
    [
        "id" => 4,
        "product_name" => "Chevrolet Silverado",
        "description" => "Chevrolet Silverado là dòng xe bán tải cỡ lớn với khả năng vận hành mạnh mẽ và không gian rộng rãi.",
        "images" => "silverado.jpg",
        "regular_price" => 45000,
        "sale_price" => 42000,
        "brand_id" => 4,
        "category_id" => 2,
    ],
    [
        "id" => 5,
        "product_name" => "BMW X5",
        "description" => "BMW X5 là dòng SUV cao cấp với thiết kế thể thao, động cơ mạnh mẽ và nhiều tính năng hiện đại.",
        "images" => "x5.jpg",
        "regular_price" => 60000,
        "sale_price" => 58000,
        "brand_id" => 5,
        "category_id" => 3,
    ],
    [
        "id" => 6,
        "product_name" => "Audi Q7",
        "description" => "Audi Q7 là dòng SUV hạng sang với nội thất sang trọng, công nghệ tiên tiến và khả năng vận hành vượt trội.",
        "images" => "q7.jpg",
        "regular_price" => 65000,
        "sale_price" => 63000,
        "brand_id" => 6,
        "category_id" => 3,
    ],
    [
        "id" => 7,
        "product_name" => "Mercedes-Benz C-Class",
        "description" => "Mercedes-Benz C-Class là dòng sedan hạng sang với thiết kế lịch lãm, động cơ mạnh mẽ và nhiều tính năng an toàn.",
        "images" => "c_class.jpg",
        "regular_price" => 50000,
        "sale_price" => 48000,
        "brand_id" => 7,
        "category_id" => 1,
    ],
    [
        "id" => 8,
        "product_name" => "Lexus RX",
        "description" => "Lexus RX là dòng SUV hạng sang với thiết kế đẹp mắt, nội thất cao cấp và động cơ mạnh mẽ.",
        "images" => "rx.jpg",
        "regular_price" => 70000,
        "sale_price" => 68000,
        "brand_id" => 8,
        "category_id" => 3,
    ]
];
`,
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

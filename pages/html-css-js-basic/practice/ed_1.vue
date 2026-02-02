<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 1 - Array Methods" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<div class="border p-0 rounded-lg mb-3">
			<Disclosure>
				<DisclosureButton class="w-full text-left border p-0 rounded">
					<p className="text-slate-900 dark:text-white p-2 text-xl font-bold cursor-pointer w-full rounded bg-gray-200">
						Bài 1 - Validate data
					</p>
				</DisclosureButton>
				<DisclosurePanel class="px-3 py-2 bg-gray-100:50">
					<p className="text-slate-900 dark:text-white mt-0">Cho object thông tin mẫu</p>
					<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
					<p className="text-slate-900 dark:text-white mt-2">
						Viết hàm <FilePath>validateUser(user)</FilePath> để validate dữ liệu với các yêu cầu sau:
					</p>
					<ul class="pl-7">
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							<b>name</b> không được rỗng
						</li>
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							<b>age</b> phải >= 18
						</li>
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							<b>email</b> phải chứa ký tự @
						</li>
					</ul>
					<p className="text-slate-900 dark:text-white mt-2 font-bold">Output:</p>
					<ul class="pl-7">
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							Nếu hợp lệ:
							<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							Nếu lỗi:
							<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
					</ul>
					<p className="text-slate-900 dark:text-white mt-2">Ví dụ sử dụng:</p>
					<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
				</DisclosurePanel>
			</Disclosure>
		</div>
		<div class="border p-0 rounded-lg mb-3">
			<Disclosure>
				<DisclosureButton class="w-full text-left border p-0 rounded">
					<p className="text-slate-900 dark:text-white p-2 text-xl font-bold cursor-pointer w-full rounded bg-gray-200">
						Bài 2 - Xử lý danh sách
					</p>
				</DisclosureButton>
				<DisclosurePanel class="px-3 py-2 bg-gray-100:50">
					<p className="text-slate-900 dark:text-white mt-0">Cho mảng sản phẩm</p>
					<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
					<p className="text-slate-900 dark:text-white mt-2">
						Viết hàm <FilePath>mapProductToCard(products)</FilePath> để map từ mảng sản phẩm thành mảng mới, với các yêu
						cầu sau:
					</p>
					<ul class="pl-7">
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							Không làm thay đổi mảng gốc
						</li>
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							Mỗi Object data trong mảng sẽ được map thành một chuỗi tương ứng là:
							<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
					</ul>
					<p className="text-slate-900 dark:text-white mt-2 font-bold">Output:</p>
					<ul class="pl-7">
						<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
							Ví dụ item đầu tiên:
							<VCodeBlock :code="b7" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
					</ul>
				</DisclosurePanel>
			</Disclosure>
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
	import { FilePath } from '../../../.nuxt/components';
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
				b1: `const user = {
  name: "An",
  age: 17,
  email: "an@example.com"
};`,
				b2: `{
	passed: true,
	data: user,
	message: null
}`,
				b3: `{
	passed: false,
	data: null,
	errors: [
		"Tên không được rỗng",
		"Tuổi phải lớn hơn hoặc bằng 18",
		"Email không hợp lệ"
	]
}`,
				b4: `function validateUser(user) {
  // viết code
}

const result = validateUser(user)
console.log(result);`,
				b5: `const products = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 80 }
];`,
				b6: `"<div class='product-card'>
	<h2>Tên sản phẩm</h2>
	<p>Price: Giá sản phẩm</p>
</div>"
`,
				b7: `"<div class='product-card'>
	<h2>Laptop</h2>
	<p>Price: 1500</p>
</div>"
`,
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
		computed: {},
		methods: {
			// parseToString(){
			// 	const div = document.createElement('div')
			// 	div.innerText =
			// }
		},
	};
</script>

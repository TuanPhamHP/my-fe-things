<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Number" addOnClass="text-left" markedAs="php-number-method" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, không có đối tượng Number giống như trong JavaScript, vì PHP là ngôn ngữ loosely-typed và không có
					kiểu dữ liệu nguyên thủy cho số nguyên và số thực, Number trong PHP thực tế là sự kết hợp của
					<b>Integers | Float | Numerical Strings | Infinity | NaN</b>.
					<br />
					PHP sử dụng các hàm (functions) để thao tác và làm việc với các giá trị số. Dưới đây là một số hàm phổ biến để
					làm việc với số trong PHP:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Function</th>
								<th scope="col" class="px-6 py-3">Def</th>
								<th scope="col" class="px-6 py-3">Eg</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in stringMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th
									v-if="item.label"
									colspan="3"
									scope="row"
									class="px-6 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
								>
									{{ item.label }}
								</th>
								<th
									v-if="!item.label"
									scope="row"
									class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
								>
									{{ item.name }}
								</th>
								<td v-if="!item.label" class="px-6 py-4">{{ item.desc }}</td>
								<td v-if="!item.label" class="px-6 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ngoài ra ta cũng có những bài toàn với operators như <b> +, -, *, /, ** </b>
				</p>

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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
				stringMethods: [
					{
						id: 1,
						name: 'abs($number)',
						desc: 'Trả về giá trị tuyệt đối của số. - number',
						syntax: `echo abs(-5); // Output: 5`,
					},
					{
						id: 2,
						name: 'round($number, $precision)',
						desc: 'Làm tròn số tới số chữ số thập phân được chỉ định. - number',
						syntax: `echo round(3.14159, 2); // Output: 3.14`,
					},
					{
						id: 3,
						name: 'ceil($number) | floor($number)',
						desc: 'Làm tròn số lên | xuống đến số nguyên gần nhất. - number',
						syntax: `echo round(3.14159, 2); // Output: 4 </br>
						echo floor(3.14159, 2); // Output: 3`,
					},
					{
						id: 4,
						name: 'min($values) | max($values)',
						desc: 'Trả về giá trị nhỏ nhất | lớn nhất trong một mảng hoặc danh sách các params. - number',
						syntax: `echo min(2, 3, 1, 6, 7); // Output: 1; </br>
						echo max(2, 3, 1, 6, 7); // Output: 7`,
					},
					{
						id: 5,
						name: 'sqrt($number) | pow($base, $exp)',
						desc: 'Trả về căn bậc | luỹ thừa - array',
						syntax: `echo sqrt(16); // Output: 4; </br>
						echo pow(2, 3); // Output: 8`,
					},
				] as { id: string | number; name: string; desc: string; syntax: string; label?: string }[],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-6' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z

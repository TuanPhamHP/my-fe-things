<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					<b>`Nested Route`, `Dynamic Routing`</b> là những kỹ thuật được áp dụng một cách rộng rãi trong lập trình web
					nói chung, chúng giúp tăng tính tổ chức cho các path, có tính kế thừa layout, template.
				</p>
				<PageHeading text="Nested route" addOnClass="text-left mt-5" markedAs="nested-routes" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2">
					Để tạo nested route, chúng ta có thể sử dụng cấu trúc folders trong nextjs.
					<br /><br />
					Ví dụ: để tạo nested route: <FilePath>/dashboard/settings</FilePath> ta chỉ cần tạo folder
					<FilePath>settings</FilePath> được lồng trong folder <FilePath>dashboard</FilePath>
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
					<div class="rounded py-1 col-span-1">
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdefining-routes.png&w=1920&q=75"
							alt=""
							class="w-fit rounded"
						/>
					</div>
					<div class="rounded py-1 col-span-1">
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75"
							alt=""
							class="w-fit rounded"
						/>
					</div>
				</div>

				<PageHeading text="Dynamic Routing" addOnClass="text-left mt-5" markedAs="dynamic-route" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					<b>Dynamic Route</b> được sử dụng khi bạn có một path <b>`động`</b>, hay nói cách khác các path này không cố
					địng
					<br />
					VD: <FilePath>/products/:id</FilePath> để xem chi tiết một sản phẩm với id sản phẩm được điền vào
					<b>`:id`</b>, rõ ràng nếu ta có 1000 sản phẩm thì ta không thể nào tạo 1000 route tương ứng được. Khi đó
					<b>Dynamic Route</b> sẽ là giải pháp để chúng ta giải quyết bài toán này.
					<br />
					<br />
					Để tạo ra Dynamic Route ta có thể bao lấy tên của Route folder bằng cặp ngoặc vuông
					<FilePath>[folderName]</FilePath> như: <FilePath>[id]</FilePath>. Các segments sẽ được truyền vào dưới dạng
					<b>params prop</b> cho các component <FilePath>layout | page | route</FilePath>
					<br />
					<br />
					Ví dụ: ta cần tạo <FilePath>/products/:id</FilePath> để xem chi tiết một sản phẩm
				</p>
				<div class="py-3"></div>
				<VCodeBlock
					:code="` // ~/app/products/[id]/page.tsx
export default function Page({ params }: { params: { id: string } }) {
  return <div>
		Bạn đang xem chi tiết của sản phẩm có id là: {params.id}
	</div>
}`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-5">Bảng URL và params tương ứng</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Route</th>
								<th scope="col" class="px-6 py-3">Example URL</th>
								<th scope="col" class="px-6 py-3">params</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<FilePath>app/products/[id]/page.js </FilePath>
								</th>
								<td class="px-6 py-4"><FilePath>/products/1</FilePath></td>
								<td class="px-6 py-4"><FilePath>{id: '1'}</FilePath></td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<FilePath>app/products/[id]/page.js </FilePath>
								</th>
								<td class="px-6 py-4"><FilePath>/products/laptop-msi-gf93</FilePath></td>
								<td class="px-6 py-4"><FilePath>{id: 'laptop-msi-gf93'}</FilePath></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 font-bold text-xl">Catch-All</p>
				<p class="text-slate-900 dark:text-white mt-5">
					Catch-All là tính năng giúp chúng ta cùng lúc có thể matching nhiều sub-routes trong NextJs. Thường tính năng
					này được sử dụng ở những app cần phân chia rất nhiều danh mục.
					<br />
					VD: các trang tin tức ...
				</p>
				<p class="text-slate-900 dark:text-white mt-5">Bảng URL và params tương ứng</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Route</th>
								<th scope="col" class="px-6 py-3">Example URL</th>
								<th scope="col" class="px-6 py-3">params</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<FilePath>app/shop/[...slug]/page.js</FilePath>
								</th>
								<td class="px-6 py-4"><FilePath>/shop/a </FilePath></td>
								<td class="px-6 py-4"><FilePath>{ slug: ['a'] } </FilePath></td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<FilePath>app/shop/[...slug]/page.js </FilePath>
								</th>
								<td class="px-6 py-4"><FilePath>/shop/a/b </FilePath></td>
								<td class="px-6 py-4"><FilePath>{ slug: ['a', 'b'] } </FilePath></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- END -->
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
	// @ts-ignore
	import FilePath from '@/components/FilePath.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, FilePath, VCodeBlock },
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
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-3' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở bài này chúng ta sẽ cùng tìm hiểu về Routers trong NextJs
					<br />
					Next.js sử dụng hệ thống file để định nghĩa Routers, có nghĩa là thay vì phải config như
					<b>react-router-dom</b>
					thì chúng ta chỉ cần tạo file tạo đúng vị trí và namespace được quy ước thì NextJs sẽ tự động render route đó
					cho chúng ta.
					<br />
				</p>
				<PageHeading text="Tạo routes" addOnClass="text-left mt-5" markedAs="create-routes" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Bước đầu tiên, chúng ta sẽ học cách tạo ra các routes hợp lệ trong project của chúng ta.
					<br />
					Trước hết tôi sẽ "mượn" hình ảnh để mô hình hoá cấu trúc routes trong NextJs.
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
				<p class="text-slate-900 dark:text-white mt-5">
					Ở ví dụ trên ta có thể thấy trong folder
					<FilePath>app</FilePath>
					ta tạo những thư mục con như:
					<span class="inline-block px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900"
						>dashboard | settings</span
					>
					mỗi thư mục này đại diện cho một path, để tạo view cho path này thì ta cần tạo ra file
					<FilePath>page.tsx</FilePath> nằm trong mỗi thư mục nói trên.
				</p>
				<PageHeading text="Tạo UI" addOnClass="text-left mt-5" markedAs="create-route-ui" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Đã có path cho routes, tiếp theo chúng ta sẽ định nghĩa UI cho các route này.
					<br />
					Các bạn cần lưu ý là chỉ những components có tên file là
					<FilePath>page.tsx</FilePath> mới được public ra ngoài UI của page nhé.
					<br />
					Ở đây tôi sẽ tạo path là <FilePath>/dashboard</FilePath> với UI render ra message
					<b>Hello, Dashboard Work</b>
				</p>
				<div class="py-3"></div>
				<VCodeBlock
					:code="` // ~/app/dashboard/page.tsx
export default function Page() {
  return <h1>Hello, Dashboard Work!</h1>
}`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-5">Wala, page UI của bạn đã được hiển thị. 👌👌</p>

				<PageHeading text="Layouts, Template" addOnClass="text-left mt-5" markedAs="nextjs-layout-template" />

				<p class="text-slate-900 dark:text-white mt-5">
					Tiếp theo, chúng ta cùng tìm hiểu về <b>`Layout` và `Template`</b>
					trong NextJs.
					<br />
					<b>`Layout`</b> là một giao diện có thể share giữa nhiều routes với nhau, nhưng chúng ta cần lưu ý rằng khi
					chuyển giữa các route layout thì chúng sẽ duy trì state chung của app và sẽ KHÔNG re-render. Ngoài ra chúng ta
					cũng có thể tạo ra các Nested route trong NextJs, việc nested/sharing các layout phụ thuộc vào nơi bạn đặt
					chúng trong dự án.
					<br />
					<br />
					Ví dụ, về việc <b>sharing layout</b>:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // ~/app/dashboard/layout.tsx
export default function DashboardLayout({
  children, // page, layout component
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {/* UI shared */}
      <h1>Tui là Layout của dashboard nha</h1>
      {children}
    </main>
  )
}`"
							highlightjs
							lang="tsx"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="rounded py-1 col-span-1">
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Flayout-special-file.png&w=1920&q=75"
							alt=""
							class="w-fit rounded"
						/>
					</div>
				</div>
				<PageHeading text="Root Layout" addOnClass="text-left mt-5" markedAs="nextjs-layout-root" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Root Layout là file layout được định nghĩa ngoài cùng của folder <FilePath>app</FilePath>, layout này sẽ có
					tác dụng với toàn bộ các routes trong project. Lưu ý: đây là file <b>bắt buộc</b> và phải chứa các thẻ là:
					<b>html, body.</b> Root Layout cho phép bạn định nghĩa các phần html được render ra từ phía Server Side.
				</p>

				<VCodeBlock
					:code="` // ~/app/layout.tsx
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header>Hi, im header from root layout</header>
				{children}
			</body>
		</html>
	);
}
`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<PageHeading text="Nested Layout" addOnClass="text-left mt-5" markedAs="nextjs-layout-nested" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Trong NextJs, các layout có thể lồng vào nhau (nested) và sẽ tự động nested dựa trên vị trí của nó trong cấu
					trúc thư mục mà chúng ta tạo.
				</p>
				<div class="rounded py-1 col-span-1">
					<img
						src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layout.png&w=1920&q=75"
						alt=""
						class="w-fit rounded"
					/>
				</div>
				<p class="text-slate-900 dark:text-white mt-5">
					Với cấu trúc như trên thì ta sẽ thấy <FilePath>app/layout</FilePath> sẽ chứa cả
					<FilePath>app/dashboard/layout</FilePath> => <FilePath>dashboard/page</FilePath> sẽ được áp dụng cả 2 layout.
				</p>
				<PageHeading text="Template" addOnClass="text-left mt-5" markedAs="nextjs-template" />
				<p class="text-slate-900 dark:text-white mt-5">
					Về cơ bản, <b>Template</b> có khá nhiều điểm tương đồng với <b>Layout</b>, nhưng có một số đặc điểm của
					<b>Template</b> mà chúng ta cần nắm được để có thể quyết định sử dụng <b>Layout</b> hay <b>Template</b> trong
					bài toán của mình.
					<br />
					<b>Template</b> sẽ luôn khởi tạo một instance mới mỗi khi chúng ta navigate giữa các route của project. Nói
					cách khác, mỗi khi route change thì một instance của <b>Template</b> sẽ được mounted
					<br />

					=> <b>Template</b> KHÔNG có tính state preserve
					<br />
					=> <b>Template</b> khiến các DOM element được tạo lại
					<br />
					=> <b>Template</b> khiến các effects sẽ re-synchronized => các hooks như useEffect() sẽ được chạy lại mỗi khi
					route-change
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // ~/app/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}`"
							highlightjs
							lang="tsx"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="rounded py-1 col-span-1">
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftemplate-special-file.png&w=1920&q=75"
							alt=""
							class="w-fit rounded"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-5">
					Vậy khi nào ta dùng <FilePath>template</FilePath> và khi nào thì dùng <FilePath>layout</FilePath> ? Nếu trong
					shared UI của bạn có component cần re-render, re-synchronized mỗi khi thay đổi route thì ta sẽ đặt chúng vào
					<FilePath>template</FilePath> còn lại ta có thể sử dụng <FilePath>layout</FilePath>.
					<br />
					<br />
					VD: để tính toán lại active link ở thì <FilePath>Header</FilePath> nên được đặt ở
					<FilePath>Template</FilePath>
					Nhưng <FilePath>Footer</FilePath> là một component không cần re-render thì sẽ đặt ở
					<FilePath>layout</FilePath>
				</p>
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-2' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

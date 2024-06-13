<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở bài này chúng ta sẽ cùng tìm hiểu về việc fetching data trong NextJs App với 2 bên là
					<FilePath>Client Component</FilePath> vs
					<FilePath>Server Component</FilePath>
				</p>

				<PageHeading text="Server Component" addOnClass="text-left mt-5" markedAs="server-component" />
				<PageHeading text="- fetch()" addOnClass="text-left mt-5" markedAs="server-fetch" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					NextJs request extends từ <FilePath>fetch API native</FilePath>, từ đó bạn có thể config phần
					<b>`caching, revalidating`</b> cho mỗi request. Do extends từ <FilePath>fetch API native</FilePath>, nên mặc
					định sẽ memoize các requests khi render Serverside Components.
					<br />
					<br />
					Ngoài ra bạn cũng có thể sử dụng kèm với <FilePath>async/await</FilePath>. Ví dụ:
				</p>
				<div class="py-2"></div>
				<VCodeBlock :code="b3" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<PageHeading text="- 3rd Lib" addOnClass="text-left mt-5" markedAs="server-fetch-lib" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ngoài ra, nếu các bạn không quen với việc dùng <FilePath>fetch API native</FilePath> thì NextJs cũng cho phép
					chúng ta sử dụng các lib ngoài để hỗ trợ việc fetching data (như database, CMS client ...), cần phải lưu ý
					rằng ở đây chúng ta đang làm việc với Server side components do đó chúng ta nên config caching để tăng perform
					của components.
					<br />
					Ví dụ các bạn sử dụng instance <b>`db`</b> của một 3rd-party lib:
				</p>
				<div class="py-2"></div>
				<VCodeBlock :code="b4" highlightjs lang="tsx" theme="tomorrow-night-bright" />
				<PageHeading text="Client Component" addOnClass="text-left mt-5" markedAs="client-component" />
				<PageHeading text="- Route Handlers" addOnClass="text-left mt-5" markedAs="client-fetch" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Tiếp theo ta sẽ tìm hiểu cách fetch data ở Client Components. NextJs có cung cấp cho chúng ta một thứ là
					<FilePath> Route Handler </FilePath>, nó sẽ giúp ta fetching data ở phía client.

					<FilePath> Route Handler </FilePath>
					được excute ở phía server nhưng sẽ không block việc render của NextJs và sẽ trả lại data cho phía client sau
					khi thành công.
					<br />
					<br />

					Do được excute phía Server nên
					<FilePath> Route Handler </FilePath>
					giúp chúng ta tránh được việc rò rỉ thông tin nhạy cảm (như token, api_key ...).
				</p>
				<PageHeading text="- 3rd Lib" addOnClass="text-left mt-5" markedAs="client-fetch-lib" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ngoài ra, nếu các bạn không quen với việc dùng <FilePath>Route Handlers</FilePath> thì NextJs cũng cho phép
					chúng ta sử dụng các lib ngoài để hỗ trợ việc fetching data (như axios, swr ...).
					<br />
					Ví dụ các bạn sử dụng lib
					<a
						href="https://swr.vercel.app/docs/getting-started"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
						><b>`swr`</b>
					</a>
					:
				</p>

				<VCodeBlock :code="b5" highlightjs lang="tsx" theme="tomorrow-night-bright" />
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
				b3: ` // ~/app/my-todo/page.tsx
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 
  if (!res.ok) {
    // throw error sẽ redirect về ErrorBoundary gần nhất
    throw new Error('Failed to fetch data')
  }
 
  // Xử lí khi nhận được data từ api
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <div>
	{data.title}
	</div>
}
`,
				b4: ` // ~/app/utils.ts
import { cache } from 'react'
 
export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id })
  return item
})

// ~/app/item/[id]/page.tsx
import { getItem } from '@/utils/get-item'
 
export const revalidate = 3600 // revalidate the data at most every hour
 
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await getItem(id)
  // ...
}
`,
				b5:
					` // ~/services/todo.tsx
import useSWR from 'swr'
function getDetailData (id) {
  const { data, error, isLoading } = useSWR(` +
					'`https://jsonplaceholder.typicode.com/todos/${id}`' +
					`, fetcher)
 
  return {
    todo: data,
    isLoading,
    isError: error
  }
}

// components/TodoList.tsx
function TodoList ({ id }) {
  const { data, isLoading, isError } = getDetailData(id)
 
  if (isLoading) return <p>Loading ...</p>
  if (isError) return <p>Lỗi lấy dữ liệu</p>
  return <div>
		<p>Title: {data.title}</p>
		<p>id: {data.id}</p>
	</div>
}
`,
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-8' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở bài này chúng ta sẽ tìm hiểu các component thường được dùng để xử lý trạng thái của các page trong ứng dụng
					NextJs.
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Sử dụng <FilePath>Loading</FilePath> component </span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Sử dụng <FilePath>Error</FilePath> component </span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5">
					Tiếp theo chúng ta sẽ cùng tìm hiểu cách sử dụng của từng cách.
				</p>
				<PageHeading text="Loading Component" addOnClass="text-left mt-5" markedAs="redirect-link-component" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					<FilePath>Loading</FilePath> là một page component được tạo ra khi chúng ta sử dụng
					<b>file-system based router </b>.
					<br />
					<br />
					Có nghĩa là ta chỉ cần tạo file <FilePath>loading.tsx</FilePath> trong page folder là được.
					<FilePath>Loading</FilePath> component sử dụng <b>`React Suspense`</b> để tạo ra loading UI cho trang web của
					chúng ta.
				</p>

				<div class="grid grid-cols-2 gap-3">
					<div class="col-span-1">
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-special-file.png&w=1920&q=75"
							alt=""
							class="w-full rounded-lg"
						/>
					</div>
					<div class="col-span-1"><VCodeBlock :code="b3" highlightjs lang="tsx" theme="tomorrow-night-bright" /></div>
				</div>
				<p class="text-slate-900 dark:text-white my-5">
					Khi cùng nằm chung một folder thì <FilePath>loading.tsx</FilePath> sẽ được lồng vào trong
					<FilePath>layout.tsx</FilePath>. Sau đó NextJs sẽ tự động lồng <FilePath>page.tsx</FilePath> vào trong
					<FilePath>Suspense</FilePath> của loading như hình bên dưới:
				</p>
				<div class="">
					<img
						src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-overview.png&w=1920&q=75"
						alt=""
						class="w-full rounded-lg max-w-[700px] block mx-auto"
					/>
				</div>

				<PageHeading text="Error Component" addOnClass="text-left mt-5" markedAs="route-error-component" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Tương tự như loading, <FilePath>Error</FilePath> cũng là một page component được tạo ra khi chúng ta sử dụng
					file-system based router .
					<br />
					<br />
					Components này thường được sử dụng để xử lí các lỗi liên quan đến Route như: HTTP status, unexpected runtime .
					Dưới đây là một số ưu điểm chính của nó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Sử dụng <FilePath> React Error Boundary</FilePath> component. NextJs sẽ tự động wrap các route vào
								Boundary để xử lý
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Sử dụng <FilePath>file-system</FilePath> nên có thể custom UI cho từng route-segment riêng biệt
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Tách biệt việc xử lí lỗi của segment trong khi không ảnh hưởng đến các components khác trong app =>
								tránh crash
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Bởi vì tính tách biệt nên cho phép xử lý lỗi và trở lại trạng thái bình thường mà không cần reload.
							</span>
						</div>
					</li>
				</ul>
				<div class="grid grid-cols-2 gap-3">
					<div class="col-span-1">
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ferror-special-file.png&w=1920&q=75"
							alt=""
							class="w-full rounded-lg"
						/>
						<img
							src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ferror-overview.png&w=1920&q=75"
							alt=""
							class="w-full rounded-lg mt-3"
						/>
					</div>
					<div class="col-span-1"><VCodeBlock :code="b4" highlightjs lang="tsx" theme="tomorrow-night-bright" /></div>
				</div>
				<p class="text-slate-900 dark:text-white mt-5">Vậy <FilePath>Error</FilePath> Hoạt động như thế nào ?</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- <FilePath>error.tsx</FilePath> Sẽ tự động tạo React Error Boundary tạm gọi là
								<FilePath>ErrorBoundary</FilePath> để lồng vào
								<FilePath>page.tsx</FilePath>
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Lúc này, Component <FilePath>Error</FilePath> được return từ <FilePath>error.tsx</FilePath> sẽ được
								sử dụng như fallback component và truyền vào <FilePath>ErrorBoundary</FilePath>
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Trong quá trình sử dụng, nếu có lỗi trong <FilePath>Page</FilePath> thì lỗi đó sẽ được lưu lại và
								truyền vào fallback <FilePath>Error</FilePath>, sau đó NextJs sẽ render ra <FilePath>Error</FilePath>.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Sau khi <FilePath>Error</FilePath> render thì các layouts nằm ngoài
								<FilePath>ErrorBoundary</FilePath> (như <FilePath>Header</FilePath>, <FilePath>SideNav</FilePath>) sẽ
								vẫn giữ nguyên các trạng thái (state) riêng của chúng mà không bị ảnh hưởng. Lúc này
								<FilePath>Error</FilePath> có thể tiến hành xử lý lỗi tuỳ theo logic được code.
							</span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5">Một số component đặc biệt như:</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-6 py-3">Error</th>
							<th scope="col" class="px-6 py-3">File name</th>
							<th scope="col" class="px-2 py-3">Desc</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<FilePath>404</FilePath>
							</th>
							<td class="px-6 py-4"><FilePath>not-found.jsx</FilePath></td>
							<td class="px-2 py-4">
								Được sử dụng để hiển thị trang lỗi 404 khi người dùng truy cập vào một đường dẫn không tồn tại.
							</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<FilePath>500 | runtime</FilePath>
							</th>
							<td class="px-6 py-4"><FilePath>error.jsx</FilePath></td>
							<td class="px-2 py-4">
								Được sử dụng để hiển thị trang lỗi 500 hoặc các lỗi máy chủ khác, hoặc lỗi runtime
							</td>
						</tr>
					</tbody>
				</table>
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
				b3: ` // ~/app/dashboard/loading.tsx
'use client'
import LoadingSkeleton from '@/components/LoadingSkeleton'

export default function Loading() {
 
  return <LoadingSkeleton />
}`,
				b4: `'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}`,
				b5: `import { redirect } from 'next/navigation'
 
async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  }
 
  // ...
}`,
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-5' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

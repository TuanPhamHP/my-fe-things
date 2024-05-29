<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở bài này chúng ta sẽ tìm hiểu cách để chuyển giữa các trang trong ứng dụng NextJs.
					<br />
					Chúng ta có 4 cách để thực hiện việc di chuyển giữa các routes:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Sử dụng <FilePath>Link</FilePath> component </span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Sử dụng <FilePath>useRouter</FilePath> hook (CSR) </span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Sử dụng <FilePath>redirect</FilePath> function (SSR) </span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Sử dụng <FilePath>History Api</FilePath> </span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5">
					Tiếp theo chúng ta sẽ cùng tìm hiểu cách sử dụng của từng cách.
				</p>
				<PageHeading text="Link Component" addOnClass="text-left mt-5" markedAs="redirect-link-component" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2">
					<FilePath>Link</FilePath> là một built-in component được cung cấp bởi NextJs. Về cơ bản, <FilePath>Link</FilePath>
					kế thừa và có vai trò tương tự như thẻ <FilePath>{{`<a>`}}</FilePath> trong HTML. Việc sử dụng
					<FilePath>Link</FilePath> để chuyển giữa các route được khuyến khích cao hơn các cách khác.
				</p>

						<VCodeBlock
					:code="b3"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
					<p class="text-slate-900 dark:text-white mt-2">
					Ta sử dụng props <FilePath>href</FilePath> để truyền vào đường dẫn mong muốn.
				<br>	Ngoài ra, chúng ta có thể dùng thêm hook <FilePath>usePathname()</FilePath> để check 
					trạng thái active của route hiện tại
				</p>
				

				<PageHeading text="userRouter() hook" addOnClass="text-left mt-5" markedAs="route-userouter" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					 <FilePath>userRouter()</FilePath> là một hook phía Client, nghĩa là bạn chỉ có thể dùng hook này nếu
					 component của bạn là loại client-side.
				</p>
				<div class="py-3"></div>
						<VCodeBlock
					:code="b4"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
		
			<PageHeading text="redirect function" addOnClass="text-left mt-5" markedAs="route-redirect-function" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					 <FilePath>redirect()</FilePath> là một function dành cho ServerComponent, nghĩa là bạn chỉ có thể dùng hook này nếu
					 component của bạn là loại server-side.
				</p>
				<div class="py-3"></div>
						<VCodeBlock
					:code="b5"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				
					<PageHeading text="History API" addOnClass="text-left mt-5" markedAs="route-redirect-function" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					NextJS cũng cho phép chúng ta sử dụng History API của browser để update lại history stack mà không phải reload page
					 <br>
					 <br>
					 
					 	<FilePath>window.history.pushState()</FilePath> và
						<FilePath>window.history.replaceState()</FilePath> cho phép bạn sync với 
							<FilePath>usePathname()</FilePath> và <FilePath>useSearchParams()</FilePath>
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
				b3:` // ~/app/layout.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Layout() {
	const pathname = usePathname();

  return <nav>
		<ul>
			<li>
				<Link className={${'`'}${'${'}pathname === '/' ? 'active' : ''}${'`'}} href='/'>Trang chủ</Link>
			</li>
			<li>	
				<Link className={${'`'}${'${'}pathname === '/dashboard' ? 'active' : ''}${'`'}} href='/dashboard'>Dashboard</Link>
			</li>
		</ul>
	</nav>
}`,	
b4:`'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-4' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

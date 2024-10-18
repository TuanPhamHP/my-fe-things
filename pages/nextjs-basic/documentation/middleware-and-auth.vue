<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở bài này chúng ta sẽ tìm hiểu về middleware trong NextJs (P1), đồng thời kết hợp với HOC để có thể tạo ra
					'Auth Middleware' cho ứng dụng của chúng ta (P2). Trước hết chúng ta cần nắm được một số lý thuyết cơ bản của
					middleware:
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- Middleware là một fnc cho phép chúng ta thực thi vào giai đoạn giữa của việc request và complete. Tức
								là, middleware sẽ thực thi sau khi request được gửi đi và trước khi có kết quả trả về. Do đó, chúng ta
								có thể can thiệp vào request này và tuỳ chỉnh respone theo logic riêng.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span>- Middleware chạy trước khi cache và routes match với nhau. </span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5">
					Dựa trên tính chất trên, middleware được ứng dụng rất rộng rãi như:
					<b>`Authentication and Authorization, Server-Side Redirects, Logging and Analytics ...`</b>
					<br />
					<br />
					Mặc dù được ứng dụng rất rộng rãi nhưng chúng ta cần phải hiểu rõ ràng rằng middleware chỉ là một đoạn logic
					nhỏ, chúng không nên xử lý các công việc nặng như data-fetching hoặc data-manipulation (Nên để Route-handlers
					hoặc ssr xử lý ), hay những công việc mang tính chuyên biệt cao.
				</p>
				<PageHeading text="Khởi tạo middleware" addOnClass="text-left mt-5" markedAs="init-middleware" />
				<p class="text-slate-900 dark:text-white mt-5">
					Để khởi tạo middleware trong NextJs thì ta sẽ tạo một file có tên <FilePath>middleware.ts</FilePath> bằng cấp
					với thư mục <FilePath>app</FilePath>. Khi đó, NextJs sẽ tự động nhận biết đây là một middleware và áp dụng cho
					ứng dụng của chúng ta, ngoài ra, để tăng tính cấu trúc thì ta có thể module chúng bằng cách tách nhỏ
					middleware thành các file riêng biệt sau đó import lại vào <FilePath>middleware.ts</FilePath>
				</p>
				<div class="py-2"></div>
				<VCodeBlock :code="b3" highlightjs lang="tsx" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white mt-5">
					<FilePath>middleware</FilePath> function sẽ mặc định được áp dụng với tất cả các route trong ứng dụng của
					chúng ta, ta có thể custom lại bằng hai cách <br /><br />
					- sử dụng field matcher trong <b>config object</b>
					<br />
					- sử dụng conditional statements trong <b>middleware fnc</b>
				</p>
				<PageHeading text="Matcher" addOnClass="text-left mt-5" markedAs="matcher" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					<FilePath>matcher</FilePath> dùng path-to-regex để xác định những route được áp dụng middleware của chúng ta.
				</p>
				<VCodeBlock
					:code="`export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<div class="py-3"></div>
				<VCodeBlock
					:code="`export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5">
					Đọc thêm về matcher tại
					<a
						href="https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						DOC
					</a>
				</p>
				<PageHeading text="Conditional" addOnClass="text-left mt-5" markedAs="conditional" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					Ta có thể check trực tiếp điều kiện tại function <FilePath>middleware</FilePath>
				</p>
				<VCodeBlock
					:code="`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<PageHeading text="NextResponse" addOnClass="text-left mt-5" markedAs="next-response" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					Trong <FilePath>middleware</FilePath> ta có thể tuỳ chỉnh đầu ra thông qua <FilePath>NextResponse</FilePath>
					được cung cấp sẵn bởi NextJs bằng các API của nó. Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- <b>`redirect`</b> chuyển hướng sang một URL khác. <br />Eg: NextResponse.redirect(new URL('/home',
								request.url))
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div>
							<span
								>- <b>`rewrite`</b> hiển thị một URL khác. <br />Eg: NextResponse.rewrite(new URL('/home', request.url))
							</span>
						</div>
					</li>
				</ul>

				<PageHeading text="Cookies" addOnClass="text-left mt-5" markedAs="next-cookies" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					NextJs cung cấp cho chúng ta một cách rất đơn giản để truy cập vào cookies để sử dụng thông qua
					<FilePath>NextRequest</FilePath> và <FilePath>NextResponse</FilePath>. Sau khi truy cập được cookies, ta có
					thể sử dụng các methods: <FilePath>get</FilePath>, <FilePath>set</FilePath>, <FilePath>delete</FilePath>,
					<FilePath>getAll</FilePath> để làm việc với chúng
				</p>

				<VCodeBlock :code="b4" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<p class="text-slate-900 dark:text-white my-5">
					Tìm hiểu thêm về các DOC nâng cao hơn của middleware tại
					<a
						href="https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						đây </a
					>.
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
				b3: ` // ~/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// middleware fnc
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// config của middleware
export const config = {
  matcher: '/about/:path*',
}`,
				b4: `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the RequestCookies API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false
 
  // Setting cookies on the response using the ResponseCookies API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a Set-Cookie:vercel=fast;path=/ header.
 
  return response
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-7' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

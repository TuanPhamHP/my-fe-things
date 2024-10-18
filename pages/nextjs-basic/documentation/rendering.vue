<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Trong Next.js, các phương thức render quyết định cách ứng dụng hiển thị nội dung cho người dùng. Mỗi phương
					pháp đều có ưu và nhược điểm riêng, ở bài này chúng ta sẽ cùng tìm hiểu tổng quát về các phương pháp render
					phổ biến hiện nay như: <b>SSR, SSG, ISR, CSR</b>
				</p>

				<PageHeading text="Server-Side Rendering (SSR)" addOnClass="text-left mt-5" markedAs="server-side-rendering" />
				<p class="text-slate-900 dark:text-white mt-5">
					SSR thực hiện việc render HTML trực tiếp trên server mỗi khi có một request từ người dùng. Kết quả HTML được
					gửi từ server đến client giúp người dùng nhận được nội dung hoàn chỉnh ngay từ đầu.
				</p>

				<div class="grid grid-cols-1 lg:grid-cols-2 my-2 gap-2">
					<div class="col-span-1 border rounded px-3 bg-green-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Ưu điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Nội dung hiển thị ngay khi người dùng truy cập (tốt cho SEO).
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phản hồi nhanh với dữ liệu động.
							</li>
						</ul>
					</div>
					<div class="col-span-1 border rounded px-3 bg-red-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Nhược điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Thời gian phản hồi có thể chậm hơn vì phải render trên server mỗi lần có request.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Gây áp lực lên server khi có nhiều request đồng thời.
							</li>
						</ul>
					</div>
					<div class="border rounded px-3 col-span-2">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Khi nào nên dùng?</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Khi dữ liệu cần được cập nhật theo mỗi lần người dùng truy cập.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phù hợp cho các trang web cần SEO tốt, chẳng hạn như blog hoặc trang tin tức.
							</li>
						</ul>
					</div>
				</div>

				<div class="py-2"></div>
				<VCodeBlock :code="b3" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<PageHeading
					text="Static Site Generation (SSG)"
					addOnClass="text-left mt-5"
					markedAs="static-site-generation"
				/>
				<p class="text-slate-900 dark:text-white mt-5">
					SSG tạo ra HTML tĩnh tại thời điểm build (trong quá trình build-time) và nội dung này không thay đổi cho đến
					khi ứng dụng được build lại.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 my-2 gap-2">
					<div class="col-span-1 border rounded px-3 bg-green-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Ưu điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Tốc độ load rất nhanh vì server chỉ cần gửi HTML tĩnh.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dễ dàng tối ưu cho SEO.
							</li>
						</ul>
					</div>
					<div class="col-span-1 border rounded px-3 bg-red-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Nhược điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Không phù hợp cho nội dung cần thay đổi thường xuyên.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phải rebuild lại toàn bộ trang nếu dữ liệu thay đổi.
							</li>
						</ul>
					</div>
					<div class="border rounded px-3 col-span-2">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Khi nào nên dùng?</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Khi nội dung ít thay đổi và không cần cập nhật theo thời gian thực.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phù hợp cho các trang giới thiệu sản phẩm, blog ít thay đổi. VD: Landing page hoặc trang giới thiệu công
								ty.
							</li>
						</ul>
					</div>
				</div>
				<div class="py-2"></div>
				<VCodeBlock :code="b4" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<PageHeading
					text="Incremental Static Regeneration (ISR)"
					addOnClass="text-left mt-5"
					markedAs="incremental-static-regeneration"
				/>
				<p class="text-slate-900 dark:text-white mt-5">
					ISR là phương pháp kết hợp giữa SSG và khả năng tái tạo trang theo thời gian thực. Với ISR, trang sẽ được tái
					tạo sau một khoảng thời gian định sẵn mà không cần rebuild toàn bộ dự án.
				</p>

				<div class="grid grid-cols-1 lg:grid-cols-2 my-2 gap-2">
					<div class="col-span-1 border rounded px-3 bg-green-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Ưu điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Load nhanh vì sử dụng nội dung tĩnh (giống SSG).
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Nội dung vẫn được cập nhật định kỳ mà không cần rebuild toàn bộ trang.
							</li>
						</ul>
					</div>
					<div class="col-span-1 border rounded px-3 bg-red-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Nhược điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Cần cấu hình thời gian revalidate hợp lý để tối ưu hiệu suất.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dữ liệu có thể không hoàn toàn mới nhất giữa hai lần revalidate.
							</li>
						</ul>
					</div>
					<div class="border rounded px-3 col-span-2">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Khi nào nên dùng?</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Khi cần hiệu suất tốt như SSG, nhưng vẫn phải cập nhật dữ liệu theo thời gian thực.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phù hợp cho các trang bán hàng, danh mục sản phẩm. VD: Trang danh sách sản phẩm với dữ liệu mới mỗi vài
								phút.
							</li>
						</ul>
					</div>
				</div>
				<div class="py-2"></div>
				<VCodeBlock :code="b5" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<PageHeading text="Client-Side Rendering (CSR)" addOnClass="text-left mt-5" markedAs="client-side-rendering" />
				<p class="text-slate-900 dark:text-white mt-5">
					Với CSR, HTML cơ bản được gửi từ server, nhưng nội dung sẽ được fetch và render bằng JavaScript ngay trên
					trình duyệt sau khi người dùng truy cập. Đây là cách render phổ biến trong các ứng dụng React SPA (Single Page
					Application).
				</p>

				<div class="grid grid-cols-1 lg:grid-cols-2 my-2 gap-2">
					<div class="col-span-1 border rounded px-3 bg-green-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Ưu điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Tương tác người dùng nhanh (sau khi tải ứng dụng ban đầu).
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phù hợp cho các ứng dụng phức tạp, nhiều thao tác client-side.
							</li>
						</ul>
					</div>
					<div class="col-span-1 border rounded px-3 bg-red-600/20">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Nhược điểm:</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								SEO kém vì nội dung không có sẵn trên server.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Trải nghiệm ban đầu có thể chậm nếu tải nhiều dữ liệu qua API.
							</li>
						</ul>
					</div>
					<div class="border rounded px-3 col-span-2">
						<p class="text-slate-900 dark:text-white mt-3">
							<b>Khi nào nên dùng?</b>
						</p>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Khi không cần SEO hoặc nội dung chỉ cần hiển thị sau khi người dùng đã đăng nhập.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phù hợp với các dashboard hoặc trang quản lý. VD:Trang quản lý người dùng hoặc ứng dụng quản lý dự án.
							</li>
						</ul>
					</div>
				</div>
				<div class="py-2"></div>
				<VCodeBlock :code="b6" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-6 py-3">Phương pháp</th>
							<th scope="col" class="px-6 py-3">Thời điểm render</th>
							<th scope="col" class="px-2 py-3">Hiệu suất</th>
							<th scope="col" class="px-2 py-3">SEO</th>
							<th scope="col" class="px-2 py-3">Sử dụng khi</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<FilePath>SSR </FilePath>
							</th>
							<td class="px-6 py-4">Mỗi lần request</td>
							<td class="px-2 py-4">Trung bình</td>
							<td class="px-2 py-4">Có</td>
							<td class="px-2 py-4">Nội dung động cần cập nhật theo request, web cần SEO tốt</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<FilePath>SSG</FilePath>
							</th>
							<td class="px-6 py-4">Tại build-time</td>
							<td class="px-2 py-4">Cao</td>
							<td class="px-2 py-4">Có</td>
							<td class="px-2 py-4">Nội dung ít thay đổi</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<FilePath>ISR</FilePath>
							</th>
							<td class="px-6 py-4">Build-time + định kỳ</td>
							<td class="px-2 py-4">Cao</td>
							<td class="px-2 py-4">Có</td>
							<td class="px-2 py-4">Nội dung cần cập nhật định kỳ</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<FilePath>CSR</FilePath>
							</th>
							<td class="px-6 py-4">Sau khi load client</td>
							<td class="px-2 py-4">Thấp (ban đầu)</td>
							<td class="px-2 py-4">Không</td>
							<td class="px-2 py-4">Ứng dụng SPA, dashboard</td>
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
				b3: `// app/products/page.tsx
type Product = {
  id: number;
  title: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  return res.json();
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>SSR Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
`,
				b4: `// app/products/page.tsx
type Product = {
  id: number;
  title: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' });
  return res.json();
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>SSG Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
`,
				b5: `// app/products/page.tsx
type Product = {
  id: number;
  title: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 10 }, // Tái tạo sau mỗi 10 giây
  });
  return res.json();
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>ISR Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
`,
				b6: `'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>CSR Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-6' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

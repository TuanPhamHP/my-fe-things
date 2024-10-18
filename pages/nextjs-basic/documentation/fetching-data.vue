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

				<p class="text-slate-900 dark:text-white mt-5">
					Server Components được render trực tiếp trên server, thích hợp cho các tác vụ cần SSR như lấy dữ liệu thời
					gian thực. Tuỳ thuộc vào dạng render mà chúng ta sẽ có config khác nhau để lấy data với Server Component. Ví
					dụ:
				</p>

				<PageHeading text="SSG" addOnClass="text-left mt-5" markedAs="ssg" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					SSG trong App Router thực hiện fetch dữ liệu khi build và không thay đổi cho đến lần build tiếp theo.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="tsx" theme="tomorrow-night-bright" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>{ cache: 'force-cache' }</FilePath>: Dữ liệu được cache và chỉ thay đổi sau lần build mới.
					</li>
				</ul>

				<PageHeading text="ISR" addOnClass="text-left mt-5" markedAs="isr" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					ISR cho phép trang được tái tạo sau khoảng thời gian nhất định mà không cần rebuild toàn bộ.
				</p>
				<div class="py-2"></div>
				<VCodeBlock :code="b4" highlightjs lang="tsx" theme="tomorrow-night-bright" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>{ next: { revalidate: 30 } }</FilePath>: Trang sẽ được tái tạo mỗi 30 giây nếu có request mới.
					</li>
				</ul>

				<PageHeading text="Client Component" addOnClass="text-left mt-5" markedAs="client-component" />
				<PageHeading text="CSR" addOnClass="text-left mt-5" markedAs="csr" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5">
					Client Components được render trên client và fetch dữ liệu sau khi trang đã load.
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
				b3: `// app/products/page.tsx
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
				b4: `// app/products/page.tsx
type Product = {
  id: number;
  title: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 30 }, // Revalidate sau 30 giây
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
				b5: `'use client';

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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-9' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

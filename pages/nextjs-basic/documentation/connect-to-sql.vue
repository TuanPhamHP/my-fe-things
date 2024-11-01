<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="mysql2" addOnClass="text-left" markedAs="about-sql2" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>mysql2</FilePath>
					là một trong những thư viện phổ biến nhất để kết nối Next.js với MySQL. Nó hỗ trợ các tính năng quan trọng như
					kết nối, thực hiện truy vấn, và xử lý dữ liệu trả về.
					<br />
				</p>

				<PageHeading text="1. Cài đặt mysql2" addOnClass="text-left mt-5" markedAs="step-1" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Bắt đầu tiến hành cài đặt package <FilePath>mysql2</FilePath> để sử dụng
				</p>
				<FakeTerminalUI :textCoppy="'npm install mysql2'">npm install mysql2</FakeTerminalUI>

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					sau khi đã có <b>`mysql2`</b> thì chúng ta bắt đầu tạo kết nối đến cơ sở dữ liệu. Trước hết, chúng ta sẽ tạo
					<FilePath>database/db.ts</FilePath> để chứa các config của database và kết nối:
				</p>

				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đoạn code trên, chúng ta sử dụng <FilePath>mysql</FilePath> để tạo ra một <b>`pool`</b> với các config về
					host, port, db tương ứng.
					<br />
					nếu chạy và nhận được thông báo thành công hoặc lỗi:
					<br />
					<b>Error: Unknown database 'hello_nextjs' ....</b> thì có nghĩa chúng ta đã setup thành công, lỗi ở đây thể
					hiện rằng trong hệ thống của chúng ta hiện chưa có database nào có tên là <b>`hello_nextjs`</b>, chúng ta có
					thể tạo manual hoặc auto bằng code để hoàn thiện việc kết nối.
				</p>
				<PageHeading
					text="2. Tạo API Routes để Quản Lý Sản Phẩm"
					addOnClass="text-left mt-5"
					markedAs="step-1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-5 mb-3 leading-8">
					Ở bước này, các bạn tốt nhất nên lựa chọn một mô hình kiến trúc phù hợp cho dự án mình (VD: MVC, Layered ...),
					còn trong phạm vị ví dụ này mình sẽ viết trực tiếp code vào trong route mang mục đích rút gọn quá trình.
					<br />
					<FilePath>app/api/products/route.ts</FilePath>
				</p>

				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Cuối cùng, các bạn có thể test các API này với các phần mềm hỗ trợ như POSTMAN ...
					<br />
					Hoặc các bạn có thể tự tạo view trong chính Next App của các bạn:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="vs2015" />
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
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
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
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nextjs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nextjs/documentation',
					},
				},
				b0: `my-nextjs-app/
├── app/
│   ├── api/
│   │   ├── users/
│   │   │   ├── route.ts
│   │   └── products/
│   │       ├── route.ts
│   ├── layout.tsx
│   ├── page.tsx
├── .env.local
├── package.json
├── tsconfig.json
└── ...
`,
				b1: `import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	host: 'localhost',
    user: 'root', // Thay đổi tên người dùng
    password: '', // Thay đổi mật khẩu
    database: 'hello_nextjs', // Thay đổi tên cơ sở dữ liệu
    port: 3306, // Thay đổi cổng nếu cần
});

// Hàm khởi tạo bảng
async function initDatabase() {
    try {
        // Tạo bảng products nếu chưa tồn tại
        await pool.query(${'`'}
            CREATE TABLE IF NOT EXISTS products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL
            )
        ${'`'});

        console.log('khởi tạo bảng thành products thành công');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

// Khởi động kết nối và khởi tạo bảng
(async () => {
    await pool.getConnection();
    await initDatabase();
})();

export default pool;
`,

				b2: `import { NextRequest, NextResponse } from 'next/server';
import pool from '@/database/db';

// Lấy danh sách sản phẩm
export async function GET() {
	try {
		const [rows] = await pool.query('SELECT * FROM products');
		return NextResponse.json(rows);
	} catch (error) {
		return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
	}
}

// Thêm sản phẩm mới
export async function POST(request: NextRequest) {
	try {
		const contentType = request.headers.get('content-type');

		let response;

		if (contentType === 'application/json') {
			// Lấy body từ JSON
			const body = await request.json();
			const { name, price } = body;
			response = { type: 'json', name, price };
		} else if (contentType === 'application/x-www-form-urlencoded' || contentType === 'multipart/form-data') {
			// Lấy body từ form data
			const formData = await request.formData();
			const name = formData.get('name');
			const price = formData.get('price');
			response = { type: 'form', name, price };
		} else {
			return NextResponse.json({ error: 'Unsupported Content-Type' }, { status: 415 });
		}
		const { name, price } = response;

		const [result] = await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);

		return NextResponse.json({ id: result.insertId, name, price });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
	}
}
`,
				b3: `// ~/app/products/page.tsx
'use client';
import { useEffect, useState } from 'react';
import withAuth from '@/hoc/withAuth';

type Product = {
	id: number;
	name: string;
};

function Page() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch('/api/products');
			const data = await res.json();
			setProducts(data);
			setLoading(false);
		};
		fetchProducts();
	}, []);

	return (
		<div>
			<h1>CSR Products</h1>
			<ul>
				{products.map(product => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
		</div>
	);
}

export default Page;
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-11' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

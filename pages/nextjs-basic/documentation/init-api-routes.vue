<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Cấu trúc Dự án" addOnClass="text-left" markedAs="setup-routes" />
				<p class="text-slate-900 dark:text-white mb-2 leading-8">
					Đầu tiên, chúng ta sẽ tạo thư mục <FilePath> api</FilePath> để chứa các <b>api routes</b> của app.
				</p>
				<VCodeBlock :code="b0" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mb-2 leading-8">
					Trong đó, chúng ta sẽ phân chia api theo module. VD: các api của users sẽ nằm trong file
					<FilePath>users/routes.ts</FilePath>
				</p>
				<PageHeading text="HTTP method" addOnClass="text-left" markedAs="about-http-method" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong file <FilePath>route.ts</FilePath>, chúng ta có thể định nghĩa các phương thức HTTP để xử lý các yêu cầu
					từ client:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>GET</b>: Được sử dụng để lấy dữ liệu từ server.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>POST</b>: Được sử dụng để gửi dữ liệu mới đến server.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>PUT</b>: Được sử dụng để cập nhật dữ liệu đã tồn tại trên server.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>DELETE</b>: Được sử dụng để xóa dữ liệu khỏi server.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Để định nghĩa các hàm xử lý ứng với các phương thức này trong NextJs chúng ta sẽ định nghĩa tên hàm giống với
					tên phương thức, NextJs sẽ tự map các hàm thành các method tương ứng.
					<br />
					Ví dụ:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="Request & Response" addOnClass="text-left mt-5" markedAs="request-response" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong lập trình web, <b>Request</b> và <b>Response</b> là hai đối tượng quan trọng trong giao tiếp giữa client
					(thường là trình duyệt) và server, chúng ta sẽ cùng định nghĩa về chúng như sau:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Request</b>: là một yêu cầu được gửi từ client đến server, yêu cầu server thực hiện một hành động cụ
							thể, như lấy dữ liệu, cập nhật thông tin, hoặc xóa dữ liệu. Mỗi request thường chứa các thông tin sau:
							<br />
							- Phương thức HTTP (HTTP method)
							<br />
							- Headers
							<br />
							- Body (chứa thông tin muốn gửi lên server, thường dùng với POST/PUT)
							<br />
							- Query, Params
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Response </b>:là thông điệp mà server gửi lại cho client để phản hồi yêu cầu. Mỗi response thường chứa
							các thông tin sau:
							<br />
							- Mã trạng thái (Status Code)
							<br />
							- Headers
							<br />
							- Body
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tiếp theo, chúng ta sẽ cùng tìm hiểu cách làm việc với <b>Request</b> và <b>Response</b>
					trong NextJs.
				</p>
				<PageHeading text="NextRequest" addOnClass="text-left mt-5" :lvl="2" markedAs="nextRequest" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>NextRequest</FilePath> là lớp dùng để đại diện cho các yêu cầu từ client đến server trong Next.js.
					Chúng ta có thể truy cập các thông tin chi tiết từ yêu cầu thông qua lớp này, trong đó chúng ta sẽ sử dụng
					thuộc tính <b>nextUrl</b> để truy cập vào các tham số trong URL như sau:
					<br />
					<b>Lấy Query Parameters:</b>
				</p>

				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Lấy Route Parameters:</b>
					<br />
					Ở đây chúng ta sẽ sử dụng dynamic routes (ví dụ: [id].ts), khi đó ta có thể lấy params từ request như sau:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Lấy Request Body:</b>
					<br />
					Khi dữ liệu được gửi từ client lên, chúng ta cần phải xác định được <b>Content-type</b> ở Request headers, do
					với mỗi <b>Content-type</b> khác nhau thì cách xử lý của chúng ta cũng sẽ khác biệt:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="NextResponse" addOnClass="text-left mt-5" :lvl="2" markedAs="nextResponse" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>NextResponse</FilePath> là một lớp được cung cấp bởi Next.js dùng để phản hồi cho client. Chúng ta
					có thể tạo và trả về các phản hồi HTTP bằng cách sử dụng các phương thức của lớp này.
					<br />
					<b>Json:</b>
					<br />
					Tạo một phản hồi JSON. Thường được sử dụng để trả về dữ liệu từ server cho client.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Redirect:</b>
					<br />
					chuyển hướng đến một URL khác.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Next:</b>
					<br />
					Cho phép tiếp tục xử lý tiếp theo trong middleware (nếu có).
				</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="vs2015" />
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
				b1: `import { NextResponse, NextRequest } from 'next/server';
// Định nghĩa phương thức GET
export async function GET() {
	try {
		return NextResponse.json({
			success: true,
			data: [],
			message: 'Lấy danh sách dữ liệu thành công',
		});
	} catch (error) {
		console.error('Lỗi Server:', error);
		return NextResponse.json({ message: 'Lỗi kết nối database' }, { status: 500 });
	}
}

export async function POST() {
	try {
		return NextResponse.json({
			success: true,
			data: [1],
			message: 'Gửi dữ liệu thành công',
		});
	} catch (error) {
		console.error('Lỗi Server:', error);
		return NextResponse.json({ message: 'Lỗi kết nối database' }, { status: 500 });
	}
}
`,
				b2: `import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Lấy query parameters
    const { searchParams } = request.nextUrl;
    const param1 = searchParams.get('param1'); // ví dụ: /api/example?param1=value1
    const param2 = searchParams.get('param2');

    return NextResponse.json({ param1, param2 });
}
`,
				b3: `import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { pathname } = request.nextUrl; // Lấy URL path
    const id = pathname.split('/').pop(); // Lấy ID từ đường dẫn (ví dụ: /api/example/123)

    return NextResponse.json({ id });
}
`,
				b4: `import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // Kiểm tra Content-Type của Request
    const contentType = request.headers.get('content-type');

    let response;

    if (contentType === 'application/json') {
        // Lấy body từ JSON
        const body = await request.json();
        const { name, age } = body;
        response = { type: 'json', name, age };
    } else if (contentType === 'application/x-www-form-urlencoded' || contentType === 'multipart/form-data') {
        // Lấy body từ form data
        const formData = await request.formData();
        const name = formData.get('name');
        const age = formData.get('age');
        response = { type: 'form', name, age };
    } else {
        return NextResponse.json({ error: 'Unsupported Content-Type' }, { status: 415 });
    }

    return NextResponse.json(response);
}
`,
				b5: `return NextResponse.json({ message: 'Success' });`,
				b6: `return NextResponse.redirect('/new-page');`,
				b7: `return NextResponse.next();`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-10' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

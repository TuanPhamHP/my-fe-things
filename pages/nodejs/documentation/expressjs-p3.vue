<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Router Module" addOnClass="text-left" markedAs="router-module" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Khi xây dựng các ứng dụng lớn với nhiều route, việc quản lý tất cả route trong một file duy nhất sẽ trở nên
					khó khăn và lộn xộn. Thay vì định nghĩa tất cả route trong file chính (app.js hoặc server.js), chúng ta nên
					tách các route theo chức năng hoặc đối tượng (ví dụ: users, products, auth) vào các file module riêng biệt.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau đó, chúng ta có thể import và sử dụng các router module này trong file chính của ứng dụng:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Như vậy, chúng ta đã tách biệt các route theo module, giúp mã nguồn trở nên rõ ràng và dễ bảo trì hơn.
				</p>

				<PageHeading text="RESTful Route Convention" addOnClass="text-left mt-5" markedAs="restful-route" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					REST (Representational State Transfer) là quy tắc thiết kế API chuẩn:
				</p>
				<div class="relative overflow-x-auto my-1 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Method</th>
								<th scope="col" class="px-5 py-3">Endpoint</th>
								<th scope="col" class="px-5 py-3">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in useMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									<FilePath>{{ item.syntax }}</FilePath>
								</th>

								<td class="px-5 py-4">{{ item.scope }}</td>
								<td class="px-5 py-4">
									<div v-html="item.desc"></div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import LessonSum from '@/components/Documentation/LessonSum.vue';
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
			LessonSum,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				httpStatusGroups: [
					{
						id: 1,
						range: '1xx',
						title: 'Informational',
						meaning: 'Thông tin – Request đang được xử lý',
						codeRange: '100–199',
						examples: [100, 101, 102],
					},
					{
						id: 2,
						range: '2xx',
						title: 'Success',
						meaning: 'Thành công – Request hoàn tất và có phản hồi hợp lệ',
						codeRange: '200–299',
						examples: [200, 201, 204],
					},
					{
						id: 3,
						range: '3xx',
						title: 'Redirection',
						meaning: 'Chuyển hướng – Client cần thực hiện hành động khác để hoàn tất request',
						codeRange: '300–399',
						examples: [301, 302, 304],
					},
					{
						id: 4,
						range: '4xx',
						title: 'Client Error',
						meaning: 'Lỗi phía client – Request không hợp lệ hoặc thiếu quyền',
						codeRange: '400–499',
						examples: [400, 401, 403, 404],
					},
					{
						id: 5,
						range: '5xx',
						title: 'Server Error',
						meaning: 'Lỗi phía server – Xảy ra sự cố khi xử lý request hợp lệ',
						codeRange: '500–599',
						examples: [500, 502, 503],
					},
				],
				lessonSum: [
					`Middleware là các hàm trung gian trong Express dùng để xử lý request và response trước khi tới route handler cuối cùng.`,
					`Cấu trúc middleware có ba tham số (req, res, next), và phải gọi next() để tiếp tục chuỗi xử lý.`,
					`Express thực thi middleware theo thứ tự khai báo bằng app.use() hoặc app.METHOD().`,
					`Có bốn loại middleware chính: Application-level, Router-level, Built-in, và Third-party.`,
					`Application-level middleware áp dụng cho toàn bộ ứng dụng thông qua app.use().`,
					`Router-level middleware gắn với một router con, cho phép tách module logic.`,
					`Built-in middleware gồm express.json(), express.urlencoded(), express.static() để xử lý JSON, form data và file tĩnh.`,
					`Third-party middleware như morgan, cors, helmet, express-rate-limit hỗ trợ logging, bảo mật và giới hạn request.`,
					`Middleware xử lý lỗi (error-handling middleware) có 4 tham số: (err, req, res, next) và được đặt cuối cùng trong chuỗi.`,
					`Gọi next(err) trong middleware sẽ bỏ qua các middleware còn lại và chuyển tới error handler.`,
				],
				b1: `import express from 'express';
const router = express.Router(); 

// Định nghĩa các route cho User
router.get('/', (req, res) => {
    res.send('Get all users (ESM)');
});

router.post('/', (req, res) => {
    res.send('Create a new user (ESM)');
});

export default router;
`,
				b2: `import userRouter from "./routes/users.js";
// ... logic 

// mount router với prefix /users
app.use("/users", userRouter);

`,
				b3: `app.use((req, res, next) => {
console.log('App-level middleware');
next();
});`,
				b4: `const authAdmin = (req, res, next) => {
    // Giả định logic kiểm tra user có phải admin
    if (req.headers['authorization'] === 'admin-token') {
        next(); // OK, cho qua
    } else {
        res.status(403).send('Chỉ Admin mới có quyền truy cập khu vực này.');
    }
};
const router = express.Router();
router.use(authAdmin);
app.use('/admin', router);
`,
				b5: `// Middleware xử lý lỗi (LUÔN PHẢI Ở CUỐI CÙNG)
const errorHandler = (err, req, res, next) => {
    console.error("[ERROR] Xảy ra lỗi: " + err.stack);

    // Xác định status code (mặc định là 500 - Internal Server Error)
    const statusCode = err.status || 500;
    
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Lỗi máy chủ nội bộ không xác định.',
        // Không nên gửi err.stack cho client trong môi trường Production
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};

// Route mẫu có thể sinh lỗi
app.get('/bug', (req, res, next) => {
    // Tạo một đối tượng lỗi
    const error = new Error('Không thể tìm thấy tài nguyên bạn yêu cầu.');
    error.status = 404;
    
    // Truyền lỗi vào next() để chuyển đến Error Handler
    next(error); 
});

// *Áp dụng Error Handler*
app.use(errorHandler);
`,
				useMethods: [
					{
						id: 1,
						syntax: 'GET',
						scope: '/users | /users/:id',
						desc: 'Lấy danh sách, hoặc chi tiết',
					},
					{
						id: 2,
						syntax: `POST`,
						scope: '/users',
						desc: 'Tạo mới',
					},
					{
						id: 3,
						syntax: `PUT/PATCH`,
						scope: '/users',
						desc: 'Cập nhật',
					},
					{
						id: 4,
						syntax: `DELETE`,
						scope: '/users/:id',
						desc: 'Xoá',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-8' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

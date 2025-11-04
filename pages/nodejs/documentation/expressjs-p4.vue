<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Middleware" addOnClass="text-left" markedAs="middleware" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Middleware</b> là một hàm trung gian có quyền truy cập vào đối tượng yêu cầu <FilePath>(req)</FilePath>,
					đối tượng phản hồi <FilePath>(res)</FilePath>, và hàm <FilePath>next()</FilePath> tiếp theo trong chu kỳ yêu
					cầu-phản hồi của ứng dụng. Các bạn có thể hiểu nó giống như các trạm kiểm soát giữa đường đi của request từ
					client → server → response.
					<br />
					Đây là cấu trúc của một <b>Middleware</b>
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8">
						<span> <FilePath>next()</FilePath> và Chuỗi Middleware (Middleware Chain)</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>next()</FilePath> Là hàm được gọi để chuyển quyền điều khiển sang hàm middleware kế tiếp trong
							chuỗi xử lý của ứng dụng. <br />
							Nếu một middleware không gọi next() hoặc không tự kết thúc bằng res.send(), request sẽ bị treo (hang) vì
							Express không biết phải làm gì tiếp theo.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Chuỗi xử lý (Chain)</b>: Express xử lý các middleware theo thứ tự chúng được khai báo.</span>
					</li>
				</ul>

				<PageHeading text="Dùng middleware" addOnClass="text-left mt-5" markedAs="middleware-use" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Để áp dụng middleware trong express chúng ta có thể dùng method <FilePath>use()</FilePath>.
				</p>
				<div class="relative overflow-x-auto my-1 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Syntax</th>
								<th scope="col" class="px-5 py-3">Scope</th>
								<th scope="col" class="px-5 py-3">Desc</th>
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
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Ví dụ về việc sử dụng middleware, chain trong Express.js:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />

				<PageHeading text="Phân loại" addOnClass="text-left mt-5" markedAs="types" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					ExpressJS có nhiều loại middleware khác nhau phục vụ các mục đích cụ thể trong quá trình xử lý request và
					response:
				</p>
				<PageHeading text="Application-level Middleware" addOnClass="text-left mt-5" markedAs="lvl1" :lvl="2" />
				<div class="mx-3">
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-2 leading-8 marker:text-sky-400 list-disc">
							<span>
								<b>Mục đích:</b> Áp dụng các chức năng chung cho toàn bộ hoặc một phần lớn ứng dụng (như logger,
								security headers).</span
							>
						</li>
						<li class="text-slate-900 dark:text-white my-2 leading-8 marker:text-sky-400 list-disc">
							<span>
								<b>Sử dụng:</b> <FilePath>app.use()</FilePath> hoặc <FilePath>app.method()</FilePath> (ví dụ: app.get(),
								app.post())</span
							>
						</li>
						<li class="text-slate-900 dark:text-white my-2 marker:text-sky-400 list-disc">
							<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
					</ul>
				</div>
				<PageHeading text="Router-level Middleware" addOnClass="text-left mt-5" markedAs="lvl2" :lvl="2" />
				<div class="mx-3">
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-2 leading-8 marker:text-sky-400 list-disc">
							<span>
								<b>Mục đích:</b> Tổ chức middleware theo từng nhóm route logic (ví dụ: tất cả route /admin đều cần kiểm
								tra quyền admin).</span
							>
						</li>
						<li class="text-slate-900 dark:text-white my-2 leading-8 marker:text-sky-400 list-disc">
							<span> <b>Sử dụng:</b> Được gắn vào một đối tượng <FilePath>express.Router()</FilePath>.</span>
						</li>
						<li class="text-slate-900 dark:text-white my-2 marker:text-sky-400 list-disc">
							<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
					</ul>
				</div>
				<PageHeading text="Built-in Middleware" addOnClass="text-left mt-5" markedAs="lvl3" :lvl="2" />
				<div class="mx-3">
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-2 leading-8 marker:text-sky-400 list-disc">
							<span> <b>Mục đích:</b> Sử dụng các middleware được cung cấp sẵn từ express, hoặc các 3rd lib.</span>
						</li>
						<li class="text-slate-900 dark:text-white my-2 leading-8 marker:text-sky-400 list-disc">
							<span>
								<b>Ví dụ:</b> <FilePath>express.json()</FilePath>,
								<FilePath>express.urlencoded({ extended: true })</FilePath>, <FilePath>CORS</FilePath>,
								<FilePath>Morgan</FilePath>...</span
							>
						</li>
					</ul>
				</div>

				<PageHeading text="Error-Handling" addOnClass="text-left mt-5" markedAs="errors-handling" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Xử lý lỗi toàn cục trong hệ thống bằng cách sử dụng middleware. Middleware xử lý lỗi khác biệt ở chỗ nó có 4
					tham số thay vì 3: <FilePath>(err, req, res, next)</FilePath>.
				</p>
				<div class="mx-3">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<span>
								<b>Vị trí:</b>Middleware xử lý lỗi LUÔN PHẢI được khai báo cuối cùng, sau tất cả các app.use() và Route
								Handler khác.</span
							>
						</li>
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<span> <b>Trigger:</b>Middleware xử lý lỗi sẽ chạy khi:</span>
							<ul class="pl-5">
								<li
									class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
								>
									<span> Một lỗi (Error object) được truyền vào hàm next() (ví dụ: next(error))</span>
								</li>
								<li
									class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
								>
									<span>
										Có lỗi xảy ra trong các hàm bất đồng bộ (async) của route handler, hoặc các kỹ thuật
										try/catch.</span
									>
								</li>
							</ul>
						</li>
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
						</li>
					</ul>
				</div>
				<LessonSum :sumData="lessonSum" />
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
				b1: `const myMiddleware = (req, res, next) => {
    // 1. Thực hiện một công việc nào đó (ví dụ: ghi log, kiểm tra quyền)
    console.log('Đã có một request được gửi đến.');

    // 2. Chỉnh sửa đối tượng req/res (ví dụ: thêm thuộc tính vào req)
    req.requestTime = Date.now();

    // 3. Quyết định tiếp tục hay kết thúc chuỗi xử lý
    // Nếu muốn tiếp tục chuyển giao cho middleware/route handler tiếp theo:
    next();

    // Nếu muốn kết thúc (gửi response ngay lập tức, ví dụ: lỗi 401 Unauthorized):
    // return res.status(401).send('Bạn không có quyền truy cập.');
};
`,
				b2: `// Middleware 1: Logger
const loggerMiddleware = (req, res, next) => {
    console.log("[LOG] Request: " + req.method + req.originalUrl + " | Time: " +new Date().toISOString());
    next(); // Chuyển sang Middleware tiếp theo
};

// Middleware 2: Kiểm tra thời gian
const timeCheckerMiddleware = (req, res, next) => {
    if (new Date().getHours() < 9 || new Date().getHours() > 17) {
        // Tự kết thúc request và không gọi next()
        return res.status(503).send('Ứng dụng đang bảo trì, vui lòng quay lại trong giờ hành chính.');
    }
    next(); // Chuyển sang Route Handler
};
// Áp dụng Middleware toàn cục (chạy trước mọi route)
app.use(loggerMiddleware);
app.use(timeCheckerMiddleware);
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
						syntax: 'app.use(middlewareFunc)',
						scope: 'Áp dụng cho TẤT CẢ các Request.',
						desc: 'Chạy cho mọi Request <b>(GET, POST, /users, /posts,...)</b>',
					},
					{
						id: 2,
						syntax: `app.use('/api', middlewareFunc)`,
						scope: 'Áp dụng cho các Request có đường dẫn BẮT ĐẦU bằng <b>/api</b>.',
						desc: 'Chạy cho <b>/api/v1/users, /api/products,...</b>',
					},
					{
						id: 3,
						syntax: `app.get('/users', middlewareFunc, routeHandler)`,
						scope: 'Áp dụng cho Route cụ thể.',
						desc: 'Chỉ chạy cho Request <b>GET /users.</b>',
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-9' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

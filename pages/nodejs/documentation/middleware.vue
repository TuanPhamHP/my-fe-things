<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Middleware" addOnClass="text-left" markedAs="about" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Middleware trong Express.js là các hàm được thực thi trong quá trình xử lý một yêu cầu HTTP (request) trước
					khi gửi phản hồi (response). Chúng hoạt động như một "lớp trung gian" giữa request và response, cho phép bạn:
				</p>
				<SkyList :docs="middlewareDocs"></SkyList>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Mỗi middleware là một hàm nhận 3 tham số:</p>
				<SkyList :docs="middlewareParams"></SkyList>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Các loại Middleware" addOnClass="text-left" markedAs="types" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Express.js hỗ trợ nhiều loại middleware, bao gồm:</p>
				<PageHeading text="1/ Application-level" addOnClass="text-left" markedAs="application-level" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Application-level Middleware</b> Dùng để xử lý mọi request trong toàn bộ app. Ví dụ:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Application-level Middleware</b> thường được dùng khi:
				</p>
				<SkyList :docs="applicationMiddleware"></SkyList>

				<PageHeading text="2/ Router-level" addOnClass="text-left" markedAs="router-level" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Router-level Middleware</b> Dùng để Gắn middleware cho riêng 1 router (hoặc nhóm route).Ví dụ:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Router-level Middleware</b> thường được dùng khi:
				</p>
				<SkyList :docs="routerMiddleware"></SkyList>

				<PageHeading text="3/ Error handling" addOnClass="text-left" markedAs="error-handling" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Error-handling Middleware</b> Dùng để xử lý lỗi (bắt được từ throw, hoặc next(err)).
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Error-handling Middleware</b> thường được dùng khi:
				</p>
				<SkyList :docs="errHandlingMiddleware"></SkyList>

				<PageHeading text="4/ Built-in Middleware" addOnClass="text-left" markedAs="built-in" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Built-in Middleware</b> là những middleware được express viết sẵn và khi dùng chúng ta chỉ việc gọi ra.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />

				<PageHeading text="5/ Third-party Middleware" addOnClass="text-left mt-2" markedAs="built-in" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ngoài ra, khi làm việc nếu cần các middleware hỗ trợ khác mà không có sẵn (ví dụ cors ...) thì chúng ta hoàn
					toàn có thể cài chúng từ các package ngoài và dùng như 1 module.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Lưu ý</b>: Middleware được xếp theo thứ tự gọi app.use(...) trong code. Middleware nào viết trước thì được
					gọi trước.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="atom-one-dark" />
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
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				middlewareDocs: [
					{
						id: 1,
						content: `Xử lý logic trước khi route xử lý yêu cầu.`,
					},
					{
						id: 2,
						content: `Sửa đổi request hoặc response.`,
					},
					{
						id: 3,
						content: `Kết thúc chu trình request-response.`,
					},
					{
						id: 4,
						content: `Chuyển tiếp yêu cầu đến middleware hoặc route tiếp theo.`,
					},
				],
				middlewareParams: [
					{
						id: 1,
						content: `<b>req:</b> Đối tượng request.`,
					},
					{
						id: 2,
						content: `<b>res:</b> Đối tượng response.`,
					},
					{
						id: 3,
						content: `<b>next:</b> Hàm callback để chuyển điều khiển sang middleware hoặc route tiếp theo.`,
					},
				],
				applicationMiddleware: [
					{
						id: 1,
						content: 'Logging',
					},
					{
						id: 2,
						content: 'Parse request (body, cookies)',
					},
					{
						id: 3,
						content: 'Kiểm tra token toàn app',
					},
				],
				routerMiddleware: [
					{
						id: 1,
						content: 'Bảo vệ một nhóm route (ví dụ: <b>/api/user</b>)',
					},
					{
						id: 2,
						content: 'Phân quyền nội bộ cho các route con',
					},
				],
				errHandlingMiddleware: [
					{
						id: 1,
						content: 'Khi cần xử lý lỗi theo dạng custom',
					},
				],
				b1: `function myMiddleware(req, res, next) {
  console.log('Middleware được gọi!');
  next(); // Chuyển tiếp yêu cầu
}`,
				b2: `app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})`,
				b3: `userRouter.use(authenticate); // áp dụng auth cho tất cả routes của user

userRouter.get("/profile", (req, res) => {
  res.json({ user: req.user });
});`,
				b4: `app.get("/", (req, res) => {
  throw new Error("Boom!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});
`,
				b5: `express.json(); // parse json body
express.urlencoded({ extended: true }); //parse form data
`,
				b6: `import cors from "cors";
import helmet from "helmet";

app.use(cors());
app.use(helmet());
`,
				b7: `Request --> Middleware 1
         --> Middleware 2
         --> Route Handler
         --> (nếu có lỗi) --> Error Middleware
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-10' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

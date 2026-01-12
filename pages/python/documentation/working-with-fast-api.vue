<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Concepts" addOnClass="text-left" markedAs="concept" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>FastAPI</b> là một <b>web framework</b> dành cho Python được thiết kế để xây dựng API với hiệu suất cực cao
					(ngang ngửa với NodeJS và Go) dựa trên tiêu chuẩn Python type hints.
					<br />
					Nó được xây dựng trên đỉnh của Starlette cho phần web và Pydantic cho phần dữ liệu, giúp việc phát triển API
					trở nên nhanh chóng và dễ dàng.
					<br />

					<b>Ưu điểm</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Hiệu suất cao:</b> FastAPI tận dụng khả năng bất đồng bộ của Python để xử lý nhiều yêu cầu cùng lúc một
						cách hiệu quả.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Dễ sử dụng:</b> Cú pháp đơn giản và trực quan giúp việc xây dựng API trở nên nhanh chóng.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Tự động tạo tài liệu:</b> FastAPI tự động tạo tài liệu API tương tác sử dụng Swagger UI và ReDoc.
					</li>
				</ul>
				<PageHeading text="FastAPI" addOnClass="text-left mt-3" markedAs="fastApi" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>1.Chuẩn bị môi trường</b>: <br />Đầu tiên, chúng ta sẽ sử dụng Virtual environment (môi trường ảo) để quản
					lý các package của dự án một cách riêng biệt.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>2.Cài các package</b>: <br />Tiếp theo, bạn cần cài đặt FastAPI và một "ASGI (Asynchronous Server Gateway
					Interface) server" tên là Uvicorn để chạy ứng dụng.
				</p>
				<FakeTerminalUI :textCoppy="'pip install fastapi uvicorn'">pip install fastapi uvicorn</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Về cơ bản, đây sẽ là mô hình hoạt động của hệ thống chúng ta:
				</p>

				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> <b>FastAPI</b> và <b>Uvicorn</b> KHÔNG trùng vai trò và không thay thế nhau.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Thử tạo một <b>GET</b> request đơn giản với FastAPI:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Đến đây, bạn đã có một server FastAPI cơ bản chạy trên Uvicorn. Bạn có thể mở trình duyệt tại địa chỉ:
					<a href="http://127.1.1.1:8000/" target="_blank"><b>http://127.1.1.1:8000/</b></a>
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong thực tế, chúng ta thường ít khi cấu hình server trực tiếp trong file chính của ứng dụng. Thay vào đó,
					chúng ta sẽ sử dụng câu lệnh sau trong terminal để chạy server:
				</p>
				<FakeTerminalUI :textCoppy="'python -m uvicorn main:app --reload'">
					python -m uvicorn main:app --reload
				</FakeTerminalUI>
				<PageHeading text="Path parameters" addOnClass="text-left mt-3" markedAs="path" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta có thể định nghĩa các path parameters trong đường dẫn của API để nhận dữ liệu từ URL.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="Query parameters" addOnClass="text-left mt-3" markedAs="q" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Để nhận các query parameters từ URL, chúng ta chỉ cần định nghĩa các tham số trong hàm xử lý route.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="body" addOnClass="text-left mt-3" markedAs="body" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Với các phương thức như POST, PUT, chúng ta thường gửi dữ liệu trong body của request. FastAPI sử dụng
					Pydantic models để định nghĩa cấu trúc dữ liệu cho body.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Với những trường hợp khác, vui lòng tham khảo tài liệu chính thức của FastAPI để biết thêm chi tiết:
					<a href="https://fastapi.tiangolo.com/tutorial" target="_blank" class="text-green-500 underline"
						><b>https://fastapi.tiangolo.com/tutorial</b></a
					>
				</p>
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
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import base from '../../../services/documentations';
	import { FilePath } from '../../../.nuxt/components';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
			LessonSum,
		},
		data() {
			return {
				lessonSum: [
					`<b>Serialization</b> là quá trình chuyển đổi đối tượng thành định dạng lưu trữ hoặc truyền đi (như JSON, Pickle). <br />`,
					`<b>Deserialization</b> là quá trình ngược lại, chuyển đổi dữ liệu lưu trữ/truyền dẫn về lại đối tượng ban đầu. <br />`,
					`<b>JSON</b> là định dạng phổ biến, nhẹ, dễ đọc và tương thích với nhiều ngôn ngữ. Tuy nhiên chỉ hỗ trợ kiểu dữ liệu cơ bản. <br />`,
					`<b>Pickle</b> là module riêng của Python, có thể serialize hầu hết các đối tượng Python phức tạp. Tuy nhiên chỉ Python mới đọc được và có nguy cơ bảo mật.`,
				],
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/python/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/python/documentation',
					},
				},
				b1: `from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Chào mừng bạn đến với FastAPI Server!"}
		
if __name__ == "__main__":
# Cấu hình
if __name__ == '__main__':
	uvicorn.run(
			"main:app", 
			host="0.0.0.0", 
			port=8000, 
			reload=True
	)`,
				b2: `Client (Browser / App)
        ↓ HTTP
Uvicorn (ASGI Server)
        ↓ ASGI
FastAPI (Application Framework)
        ↓
Business Logic
`,
				b3: `python -m venv venv
.\\venv\\Scripts\\activate
`,
				b4: `@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}`,
				b5: `@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10, q: str | None = None):`,
				b6: `from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    return item`,
				headers: [
					{
						id: 1,
						name: 'Hàm',
						key: 'command',
					},
					{
						id: 2,
						name: 'Mục đích',
						key: 'descr',
					},
				],
				items: [
					{
						command: 'json.dumps(obj)',
						descr: 'Chuyển đối tượng thành chuỗi JSON (S = String).',
					},
					{
						command: 'json.loads(s)',
						descr: 'Chuyển chuỗi JSON về lại đối tượng.',
					},
					{
						command: 'json.dump(obj, file)',
						descr: 'Ghi đối tượng vào file dưới dạng JSON.',
					},
					{
						command: 'json.load(file)',
						descr: 'Đọc file JSON và chuyển về đối tượng.',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				const currentDocId = String(this.$route.path).split('/').pop() || '';

				this.$api.documentations.getPagination({ appIds: 'python', currentDocId }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

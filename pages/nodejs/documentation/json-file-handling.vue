<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="JSON" addOnClass="text-left" markedAs="about-module" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Module</b> (JavaScript Object Notation) là một định dạng trao đổi dữ liệu nhẹ, dễ đọc, dễ viết cho con
					người và dễ dàng phân tích, tạo ra cho máy tính.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Cấu trúc: </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Cặp Key-Value (tên thuộc tính và giá trị). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Mảng (array) của các giá trị hoặc đối tượng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Tính phổ biến: JSON là định dạng tiêu chuẩn được sử dụng rộng rãi nhất để truyền tải dữ liệu giữa Server
							(Node.js) và Client (Trình duyệt) thông qua các API REST.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Để làm việc với JSON trong Node.js, chúng ta sẽ dùng Module <FilePath>fs</FilePath> để đọc và ghi file JSON,
					cùng với các phương thức tích hợp sẵn trong JavaScript như <FilePath>JSON.parse()</FilePath> và
					<FilePath>JSON.stringify()</FilePath>. Đọc thêm về docs chính thức tại
					<a
						href="https://nodejs.org/docs/latest/api/fs.html#fspromisesreadfilepath-options"
						target="_blank"
						class="text-sky-500 underline"
						>Node.js FS Module</a
					>
				</p>

				<PageHeading text="Đọc File JSON" addOnClass="text-left mt-3" markedAs="readFile" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Chúng ta sẽ cùng đọc data ra từ 1 file JSON. Chuẩn bị file <FilePath>data.json</FilePath> với nội dung:
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div class="col-span1-">
						<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
					<div class="col-span1-">
						<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
				</div>
				<PageHeading text="Ghi và Cập Nhật File JSON" addOnClass="text-left mt-3" markedAs="writeFile" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Tiếp theo là ghi vào <FilePath>data.json</FilePath>:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />

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
			LessonSum,
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
				lessonSum: [
					` JSON (JavaScript Object Notation) là định dạng dữ liệu nhẹ, dễ đọc và viết cho con người, đồng thời dễ phân tích và tạo ra cho máy tính.`,
					` Trong Node.js, chúng ta sử dụng module 'fs' để đọc và ghi file JSON một cách bất đồng bộ thông qua các phương thức như readFile và writeFile từ 'fs/promises'.`,
					` Để đọc dữ liệu từ file JSON, chúng ta sử dụng JSON.parse() để chuyển đổi chuỗi JSON thành đối tượng JavaScript.`,
					` Để ghi dữ liệu vào file JSON, chúng ta sử dụng JSON.stringify() để chuyển đổi đối tượng JavaScript thành chuỗi JSON trước khi ghi vào file.`,
					` Cần xử lý lỗi khi làm việc với file JSON, bao gồm việc kiểm tra sự tồn tại của file và xử lý lỗi phân tích cú pháp JSON không hợp lệ.`,
				],
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
				b1: `// Chuẩn bị data
[
    { "id": 101, "productName": "Laptop X" },
    { "id": 102, "productName": "Mouse Y" }
]
`,
				b2: `// file: readData.js
import { writeFile, readFile } from 'node:fs/promises';

const FILE_PATH = 'data.json';

async function readJsonFile() {
    try {
        // 1. Đọc file bất đồng bộ. 'utf8' là Encoding.
        const jsonString = await readFile(FILE_PATH, 'utf8'); 
        const data = JSON.parse(jsonString);
        console.log('Đọc thành công. Số lượng sản phẩm:', data.length);
        console.log('Sản phẩm đầu tiên:', data[0].productName);
        return data;
    } catch (error) {
        // Xử lý khi file không tồn tại, hoặc lỗi JSON không hợp lệ
        if (error.code === 'ENOENT') {
            console.warn('File không tồn tại, trả về mảng rỗng.');
            return [];
        }
        console.error('Lỗi xử lý file JSON:', error.message);
        return null;
    }
}

readJsonFile();
`,
				b3: `async function updateProduct(newProduct) {
    let products = [];
    try {
        const jsonString = await readFile(FILE_PATH, 'utf8');
        products = JSON.parse(jsonString);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw new Error('Lỗi khi đọc file JSON: ' + error.message);
        }
        console.log("File chưa tồn tại, bắt đầu tạo mới...");
    }
    products.push(newProduct);
    const jsonOutput = JSON.stringify(products); 

    try {
        await writeFile(FILE_PATH, jsonOutput);
        console.log('Cập nhật file JSON thành công!');
    } catch (error) {
        console.error('Lỗi khi ghi file:', error.message);
    }
}

const newItem = { "id": 103, "productName": "Keyboard Z", "price": 850 };
updateProduct(newItem);
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-2' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

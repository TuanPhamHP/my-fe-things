<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Storage API" addOnClass="text-left" markedAs="storage-api" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong Javascript, <b>Storage API</b> cho phép chúng ta lưu trữ dữ liệu trực tiếp trên trình duyệt của người
					dùng, giúp ứng dụng có thể truy cập nhanh chóng dữ liệu mà không cần gửi lại yêu cầu đến máy chủ. Nhưng cũng
					cần phải lưu ý rằng dữ liệu được lưu trữ ở phía client nên các dữ liệu này sẽ không được đồng bộ, thường chúng
					ta sẽ lưu các thông tin cài đặt riêng của người dùng tại đây.
					<br />
					Ngoài ra, các trình duyệt hiện nay cũng cung cấp cho chúng ta một giao diện trực quan để quản lý phần storage
					này. Các bạn có thể mở:
					<br />
					<FilePath><b>F12</b> > <b>Application</b> > <b>Storage </b></FilePath>
				</p>
				<div class="p-2 rounded bg-neutral-200 w-fit mb-3">
					<img src="@/assets/images/documentation/pzns1.png" alt="" class="rounded-lg block" />
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phạm vi bài học này chúng ta sẽ tìm hiểu về <b>localStorage</b> và <b>sessionStorage</b>
				</p>
				<PageHeading text="localStorage & sessionStorage" addOnClass="text-left" markedAs="localStorage" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<FilePath>localStorage</FilePath> API trong JavaScript cho phép chúng ta Lưu trữ dữ liệu lâu dài (dữ liệu sẽ
					không mất đi khi người dùng đóng trình duyệt hoặc tắt máy).
					<br />
					<FilePath>sessionStorage</FilePath> Lưu trữ dữ liệu tạm thời cho một phiên làm việc (dữ liệu sẽ bị xóa khi
					người dùng đóng tab hoặc trình duyệt).
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Cách sử dụng:</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 border p-2 rounded-lg">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mb-3 leading-8 text-lg text-content">
							Thêm dữ liệu: <FilePath>Storage.setItem(key, value)</FilePath>
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							Lấy dữ liệu: <FilePath>Storage.getItem(key)</FilePath>
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							Xóa dữ liệu: <FilePath>Storage.removeItem(key)</FilePath>
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							Xóa tất cả dữ liệu: <FilePath>Storage.clear(key)</FilePath>
							<br />
							<br />
							Trong đó:
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							<FilePath>Storage</FilePath>: Tên của storage. VD: localStorage hoặc sessionStorage
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							<FilePath>key</FilePath>: Tên của trường cần thao tác.
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							<FilePath>value</FilePath>: Giá trị của trường tương ứng.
						</p>
					</div>
					<div class="col-span-1"><VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" /></div>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các dữ liệu sẽ được lưu lại dưới dạng <b>key - value</b> như hình dưới:
				</p>
				<div class="p-2 rounded bg-neutral-200 w-fit mb-3">
					<img src="@/assets/images/documentation/pzns2.png" alt="" class="rounded-lg block" />
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Lưu ý rằng các dữ liệu sẽ phải được chuyển đổi sang dạng <b>JSON</b> trước khi lưu vào storage, và khi lấy ra
					cũng cần parse thành dạng data ban đầu để sử dụng.
				</p>
				<PageHeading text="JSON" addOnClass="text-left" markedAs="json" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>JSON (JavaScript Object Notation)</b> là một định dạng để biểu diễn dữ liệu dạng text dễ dàng cho cả người
					đọc và máy tính hiểu. JSON rất phổ biến trong việc truyền dữ liệu giữa client và server.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Cấu trúc JSON:</b>
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 border p-2 rounded-lg">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mb-3 leading-8 text-lg text-content">
							JSON bao gồm các cặp key-value.
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							Key: là chuỗi và phải được đặt trong dấu ngoặc kép.
						</p>
						<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
							Value: có thể là chuỗi, số, boolean, mảng, đối tượng hoặc null.
						</p>
					</div>
					<div class="col-span-1"><VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" /></div>
				</div>

				<p class="font-bold mt-3 text-slate-900 dark:text-white mb-3 leading-8 text-lg text-content">
					Chuyển đổi giữa Object và JSON trong JavaScript:
				</p>
				<p class="my-3 text-slate-900 dark:text-white mb-3 leading-8 text-lg text-content">
					Trong JavaScript, chúng ta có thể sử dụng <FilePath>JSON.stringify</FilePath> và
					<FilePath>JSON.parse</FilePath> để chuyển đổi qua lại giữa đối tượng và JSON.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="js" theme="atom-one-dark" />
				<!-- <p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/html-css-js-basic/practice/c_e_4"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p> -->
				<DocNextPage :pagination="pagePagination" />
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
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
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
				b1: `// Lưu trữ dữ liệu
localStorage.setItem("username", "JohnDoe");
sessionStorage.setItem("sessionID", "123456");

// Truy xuất dữ liệu
console.log(localStorage.getItem("username"));  // Output: JohnDoe
console.log(sessionStorage.getItem("sessionID"));  // Output: 123456

// Xóa một mục
localStorage.removeItem("username");

// Xóa tất cả
sessionStorage.clear();
`,
				b2: `const userName = "";
if (userName) {
  console.log("Người dùng có tên là:" + userName);
} else {
  console.log("Người dùng chưa điền tên.");
}
`,
				b3: `{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "subjects": ["Math", "Science", "History"],
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
}
`,
				b4: `// Đối tượng JavaScript
const user = {
  name: "John",
  age: 30,
  isStudent: false
};

// Chuyển đối tượng thành chuỗi JSON
const jsonString = JSON.stringify(user);
console.log(jsonString);  // Output: '{"name":"John","age":30,"isStudent":false}'

// Chuyển chuỗi JSON thành đối tượng
const userObject = JSON.parse(jsonString);
console.log(userObject.name);  // Output: John
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'html-basic', currentDocId: 'condition-and-statement' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

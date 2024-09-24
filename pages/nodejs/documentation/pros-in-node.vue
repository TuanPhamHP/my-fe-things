<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Hệ thống module trong Node.js" addOnClass="text-left" markedAs="about-nodejs" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Một trong những tính năng quan trọng nhất của Node.js là hệ thống module. Hệ thống này cho phép bạn chia nhỏ
					mã của ứng dụng thành các thành phần nhỏ hơn (module) và quản lý chúng một cách dễ dàng.
					<br />
					Node.js sử dụng chuẩn CommonJS để quản lý module. Theo chuẩn này, mỗi file trong Node.js là một module độc
					lập. Bạn có thể xuất hoặc nhập module sử dụng các từ khóa <FilePath>require</FilePath> và
					<FilePath>module.exports</FilePath>
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> <FilePath>require</FilePath> Được sử dụng để nạp một module vào trong file hiện tại. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<FilePath>module.exports</FilePath> Được sử dụng để xuất các giá trị hoặc chức năng ra khỏi module để các
						module khác có thể sử dụng.
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
					<div class="col-span-1"><VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" /></div>
					<div class="col-span-1"><VCodeBlock :code="b2" highlightjs lang="javascript" theme="vs2015" /></div>
				</div>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Trong ví dụ trên:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>
							<FilePath>math.js</FilePath> là một module và nó xuất ra hai hàm <b>`add()`</b> và <b>`subtract`</b></span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<FilePath>app.js</FilePath> nạp module <FilePath>math.js</FilePath> và sử dụng các hàm mà nó xuất
							ra.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ngoài ra ta có thể xuất các đối tượng khác nhau bằng <FilePath>module.export</FilePath> như sau:
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">Xuất một hàm</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">Xuất một đối tượng</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">Xuất một lớp</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="vs2015" />

				<PageHeading text="Cách tổ chức dự án Node.js" addOnClass="text-left mt-5" markedAs="about-nodejs" />
				<p class="text-slate-900 dark:text-white my-3">
					Chúng ta sẽ sử dụng mô hình MVC để xây dựng hệ thống, chúng ta sẽ cùng tìm hiểu xem:
					<b>
						<br />
						- MVC là gì?
						<br />
						- Các thành phần trong MVC?
						<br />
						- MVC hoạt động như thế nào?
					</b>
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					MVC (Model-View-Controller) là một mô hình kiến trúc phần mềm phổ biến được sử dụng để tổ chức mã nguồn của
					các ứng dụng một cách rõ ràng và dễ bảo trì. Mô hình này chia ứng dụng thành ba thành phần chính:
					<b> Model, View và Controller</b>
					. Luồng hoạt động của mô hình MVC có thể được vẽ lại như sau:
				</p>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
					<img
						style="height: 500px"
						src="https://selftaughtcoders.com/wp-content/uploads/2015/07/mvc_diagram_with_routes.png"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<PageHeading text="1. Model" addOnClass="text-left mt-3" markedAs="mvc-model" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Model đại diện cho dữ liệu của ứng dụng và các quy tắc nghiệp vụ. Khi định nghĩa Model, chúng ta sẽ không thao
					tác gì về giao diện người dùng hoặc cách dữ liệu được hiển thị. Thay vào đó, chúng ta chỉ quan tâm đến việc
					tương tác với DB, định nghĩa các quy tắc dữ liệu ...
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Quản lý dữ liệu của ứng dụng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Tương tác với cơ sở dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Thực hiện các phép xử lý dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Định nghĩa các quy tắc nghiệp vụ của dữ liệu. </span>
					</li>
				</ul>

				<PageHeading text="2. View" addOnClass="text-left mt-3" markedAs="mvc-view" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					View là thành phần chịu trách nhiệm hiển thị dữ liệu cho người dùng. View không chứa logic nghiệp vụ và không
					tương tác trực tiếp với Model. Ở đây, view được tác ra làm 2 phần là routes (tạo request) và View (giao diện /
					response)
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Hiển thị dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Xử lý giao diện người dùng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Nhận đầu vào từ người dùng và gửi nó đến Controller. </span>
					</li>
				</ul>
				<PageHeading text="3. Controller" addOnClass="text-left mt-3" markedAs="mvc-controller" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Ta có thể thấy rằng <b>Model</b> và <b>View</b> không làm việc trực tiếp với nhau, chúng cũng không hề can
					thiệp vào logic của đối tượng còn lại. Như vậy, ta cần một đối tượng thứ 3 để làm cầu nối giữa hai bên,
					<b>Controller</b> đóng vai trò là cầu nối giữa <b>Model</b> và <b>View</b>. Controller nhận đầu vào từ người
					dùng, xử lý các yêu cầu và tương tác với Model để lấy dữ liệu, sau đó chuyển dữ liệu đó đến View để hiển thị.
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Nhận (từ View) và xử lý yêu cầu từ người dùng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Tương tác với Model để truy xuất và lưu trữ dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Lấy dữ liệu sau khi xử lí và gửi dữ liệu đến View để hiển thị. </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">Từ đó, ta có thể tổ chức dự án theo cấu trúc sau:</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Node.js sử dụng hệ thống module theo chuẩn CommonJS, trong đó thì mỗi file .js được coi là một module.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>require() giúp bạn nhập các module, và module.exports cho phép xuất các chức năng từ module. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Việc tổ chức mã bằng cách chia thành các module giúp ứng dụng trở nên dễ bảo trì và mở rộng.</span>
					</li>
				</ul>
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
				b1: `// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Xuất các hàm ra khỏi module để file khác có thể sử dụng
module.exports = { add, subtract };
`,
				b2: `// app.js
// Nạp module từ file math.js
const math = require('./math');

const resultAdd = math.add(5, 3);
const resultSubtract = math.subtract(9, 4);

console.log("Kết quả cộng:" + resultAdd); // Kết quả cộng: 8
console.log("Kết quả trừ:" + resultSubtract); // Kết quả trừ: 5
`,
				b3: `function multiply(a, b) {
    return a * b;
}

module.exports = multiply;
`,
				b4: `const math = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
};

module.exports = math;
`,
				b5: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, my name is " + this.name +" and I'm "+ this.age + " years old."";
    }
}

module.exports = Person;
`,
				b6: `/myapp
│
├── /controllers
│   └── userController.js
├── /models
│   └── userModel.js
├── /routes
│   └── userRoutes.js
├── /utils
│   └──
├── app.js
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-4' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Module" addOnClass="text-left" markedAs="about-module" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Module</b> là một đơn vị độc lập của chương trình, chứa một nhóm logic, hàm, lớp, hoặc biến có liên quan —
					giúp tách chương trình lớn thành các phần nhỏ dễ quản lý hơn. Mỗi module thường được lưu trữ trong một tệp
					riêng biệt và có thể được tái sử dụng trong các phần khác của ứng dụng hoặc trong các dự án khác. Việc sử dụng
					module giúp cải thiện tính tổ chức, khả năng bảo trì và khả năng mở rộng của mã nguồn.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Điểm mạnh của module:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Chia nhỏ chương trình thành các phần độc lập. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Dễ kiểm thử, bảo trì, nâng cấp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Dễ tái sử dụng ở nơi khác. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Giảm xung đột tên (namespace isolation). </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Hiện nay, Node.js hỗ trợ hai hệ thống module chính: <FilePath>CommonJS</FilePath> (sử dụng <b>require</b> và
					<b>module.exports</b>) và <FilePath>ES Modules</FilePath> (sử dụng <b>import</b> và <b>export</b>).
				</p>

				<PageHeading text="CommonJS" addOnClass="text-left mt-3" markedAs="common-js" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Đây là hệ thống module mặc định trong Node.js. Các hành vi chính là <b>export - xuất</b> và
					<b>import - nhập</b>:
				</p>
				<ul class="pl-5 mb-2">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>module.exports</FilePath> hoặc <FilePath>exports</FilePath> để xuất module.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>require()</FilePath> để import module.</span>
					</li>
				</ul>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div class="col-span1-">
						<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
					<div class="col-span1-">
						<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
				</div>
				<PageHeading text="ES Module" addOnClass="text-left mt-3" markedAs="common-js" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					ES Module (chuẩn ECMAScript hiện đại) cũng được Node.js hỗ trợ từ phiên bản 12 trở đi. Các hành vi chính là
					<b>export - xuất</b> và <b>import - nhập</b>:
				</p>
				<ul class="pl-5 mb-2">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>export</FilePath> để xuất module.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>import</FilePath> để import module.</span>
					</li>
				</ul>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div class="col-span1-">
						<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
					<div class="col-span1-">
						<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Lưu ý: chúng ta cần phân biệt 2 loại export/import là <b>named export/import</b> và
					<b>default export/import</b>.
				</p>
				<ul class="pl-5 mb-2">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>named export/import</FilePath> cho phép xuất/nhập nhiều thành phần từ một module, tên các thành
							phần phải chính xác tuyệt đối.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>default export/import</FilePath> chỉ cho phép xuất/nhập một thành phần duy nhất, do đó tên
							module không cần chính xác tuyệt đối.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ngoài ra, vì đây không phải là dạng mặc định trong NodeJs nên để sử dụng ES Module, chúng ta cần khai báo
					trong
					<FilePath>package.json</FilePath> option <FilePath>"type": "module"</FilePath>, hoặc đặt đuôi tệp là
					<FilePath>.mjs</FilePath>.
				</p>
				<DocFactoryV2Table :headers="headers" :items="items" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tạo nhanh file <FilePath>package.json</FilePath> với lệnh:
				</p>
				<FakeTerminalUI :textCoppy="'npm init -y'">npm init -y </FakeTerminalUI>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về <b>`Lập trình bất đồng bộ`</b> trong NodeJs để hiểu cách thức hoạt
					động của chúng.
				</p>
				<PageHeading text="Asynchronous Programming" addOnClass="text-left mt-3" markedAs="async-programming" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Vấn đề:</b> Các thao tác I/O (Input/Output) như đọc file, truy vấn DB, gửi request HTTP mất nhiều thời
					gian. Nếu chúng chạy đồng bộ, chúng sẽ chặn (block) luồng chính (thread) của Node.js, khiến cả Server bị đơ.
					Nên NodeJS sử dụng mô hình bất đồng bộ (asynchronous) để xử lý các tác vụ này mà không làm nghẽn luồng chính.
					Nhưng vấn đề xảy ra ở đây, một số tác vụ buộc phải đợi tác vụ khác hoàn thành mới có thể chạy tiếp được (do
					srs), vậy làm sao để xử lý các tác vụ này một cách hiệu quả trong mô hình bất đồng bộ?
				</p>
				<PageHeading text="Callback Pattern" addOnClass="text-left mt-3" markedAs="callback-pattern" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Giải pháp đầu tiên chúng ta có thể nghĩ đến là sử dụng <b>Callback Pattern</b>.
					<br />
					<b>Callback</b>: Một hàm được truyền vào hàm khác và được gọi lại khi hàm đó hoàn thành. Đây là cách xử lý bất
					đồng bộ sơ khai nhất.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Với đoạn code ở trên, chúng ta đã đảm bảo được một công việc bất đồng bộ (fetchData) hoàn thành trước khi bắt
					đầu công việc tiếp theo (workA). Tuy nhiên, khi có nhiều công việc bất đồng bộ lồng nhau, việc sử dụng
					callbacks có thể dẫn đến tình trạng gọi lại lồng nhau (callback hell), làm mã nguồn trở nên khó đọc và bảo
					trì.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Như bạn thấy, nếu số công việc bất đồng bộ tăng lên, mã nguồn sẽ trở nên rối rắm (theo dạng Pyramid) và khó
					theo dõi. Vậy giờ chúng ta cần một cơ chế xử lý chuỗi bất đồng bộ rõ ràng và cấu trúc hơn.
				</p>
				<PageHeading text="Promise" addOnClass="text-left mt-3" markedAs="promise" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Promise</b> là một đối tượng trong Javascript, đại diện cho một tác vụ bất đồng bộ có thể
					<b>thành công - resolve</b> hoặc <b>thất bại - reject</b> trong tương lai. Promise giúp tránh callback hell và
					làm mã nguồn dễ đọc hơn.
				</p>

				<ul class="pl-5 mb-2">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Chúng ta có thể chia <b>Promise</b> thành 3 trạng thái chính: </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Pending (Đang chờ)</b>: Trạng thái ban đầu, tác vụ đang được xử lý và chưa hoàn thành. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Fullfill (Thành công)</b>: Khi tác vụ bất đồng bộ thành công và gọi <b>resolve()</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Rejected (Thất bại)</b>: Khi tác vụ gặp lỗi và gọi <b>reject()</b></span>
					</li>
				</ul>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Sau khi tạo Promise, chúng ta có thể sử dụng các phương thức <b>then()</b> và <b>catch()</b> để xử lý kết quả
					khi Promise được giải quyết (resolve) hoặc bị từ chối (reject).
				</p>
				<ul class="pl-5 mb-2">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Khi <b>Promise</b> thực thi, chúng ta có thể quản lý thông qua các hàm <FilePath>then()</FilePath>,
							<FilePath>catch()</FilePath> và <FilePath>finally()</FilePath>:
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Xử lý kết quả</b>: <FilePath>.then(onFulfilled, onRejected)</FilePath>, trong đó: </span>
						<ul class="pl-5 mb-2">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>onFulfilled</b>: là hàm xử lý nếu <b>Promise</b> thành công.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>onRejected</b>: là hàm xử lý nếu <b>Promise</b> thất bại.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									<b>Promise Chaining</b>: trong trường hợp cần xử lý theo stage thì chúng ta có thể nối
									<FilePath>then</FilePath> lại với nhau để tạo thành chuỗi các bước xử lý. VD:
									<FilePath>then(task0).then(task1).then(task2)</FilePath>, Mỗi <FilePath>.then()</FilePath> trả về một
									Promise mới, output của then thứ n là input của n+1 với trạng thái (resolve, reject) tương ứng.</span
								>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>.catch(onRejected)</FilePath>: Xử lý các lỗi tập trung.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>.finally(callback)</FilePath>: Xử lý các task khi kết thúc.</span>
					</li>
				</ul>
				<VCodeBlock :code="b8" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Quá ngon, có thêm task cần đợi chỉ cần thêm 1 then(), không cần lồng nhau nữa. Mã nguồn trở nên dễ đọc và bảo
					trì hơn rất nhiều. Nhưng vẫn còn vấn đề cho các then-chain tạo ra, khiến việc xử lý lỗi trở nên phức tạp và
					khó theo dõi. Giờ chúng ta cần thêm 1 cơ chế nữa để xử lý bất đồng bộ một cách trực quan hơn.
				</p>
				<PageHeading text="Async/Await" addOnClass="text-left mt-3" markedAs="async-await" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Async/await</b> thực ra chỉ là cú pháp “đẹp” hơn Promise, chứ không thay thế Promise.
					<br />
					Nó vẫn dùng Promise bên dưới, nhưng giúp ta viết code theo kiểu tuần tự như lập trình đồng bộ.
				</p>
				<ul class="pl-5 mb-2">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Dùng thêm <b>async/await</b> để báo rõ ràng đoạn nào cần 'đồng bộ', đoạn nào cần 'bất đồng bộ'
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>async</b>: Đặt trước một hàm để khai báo rằng hàm đó sẽ luôn trả về một Promise. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>await</b>: Chỉ có thể sử dụng bên trong hàm async. Nó sẽ tạm dừng việc thực thi hàm async cho đến khi
							Promise được theo dõi trả về kết quả (Fulfilled) hoặc lỗi (Rejected).</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Xử lý lỗi</b>: dùng <b>try/catch</b> kết hợp với define các trường hợp lỗi cụ thể.</span>
					</li>
				</ul>
				<VCodeBlock :code="b9" highlightjs lang="javascript" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Node.js là một nền tảng mạnh mẽ cho phát triển ứng dụng web và server-side bằng JavaScript. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Nó mang lại hiệu năng cao, khả năng xử lý nhiều yêu cầu đồng thời nhờ mô hình non-blocking. </span>
					</li>
				</ul>
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
					`CommonJS (CJS): Là hệ thống mặc định của Node.js, sử dụng cú pháp require() và module.exports.`,
					`ES Modules (ESM): Là tiêu chuẩn hiện đại của JavaScript, sử dụng cú pháp import và export. Cần cấu hình trong package.json hoặc dùng đuôi .mjs.`,
					`Callback pattern: Cách xử lý bất đồng bộ cơ bản, nhưng dễ dẫn đến callback hell khi có nhiều tác vụ lồng nhau.`,
					`Promise: Đối tượng đại diện cho tác vụ bất đồng bộ, giúp tránh callback hell và dễ quản lý chuỗi tác vụ.`,
					`Async/await: Cú pháp giúp viết mã bất đồng bộ theo kiểu đồng bộ, sử dụng Promise bên dưới.`,
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
				b1: `// định nghĩa và export hàm
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };
`,
				b2: `// import và sử dụng module
const math = require('./math');
console.log(math.add(2, 3));      
console.log(math.multiply(2, 3)); 
`,
				b3: `export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
`,
				b4: `import { add, multiply } from './math.mjs';

console.log(add(2, 3));
console.log(multiply(2, 3));
`,
				b5: `// hàm bất đồng bộ với callback
function workA(data){
	console.log('Bắt đầu công việc A');
	console.log('Dữ liệu nhận được:', data);
}

function fetchData(callback) {
	setTimeout(() => {
		const data = { id: 1, name: 'Node.js' };
		callback(data);
	}, 2000);
}

fetchData(workA);
`,
				b6: `// hàm bất đồng bộ với callback
				function boilWater(callback) {
  console.log('💧 Đang đun nước...');
  setTimeout(() => {
    console.log('🔥 Nước đã sôi!');
    callback();
  }, 2000);
}

function brewCoffee(callback) {
  console.log('☕ Đang pha cà phê...');
  setTimeout(() => {
    console.log('✅ Cà phê đã pha xong!');
    callback();
  }, 1500);
}

function drinkCoffee(callback) {
  console.log('😋 Uống cà phê...');
  setTimeout(() => {
    console.log('☀️ Đã phê!');
    callback();
  }, 1000);
}

// Callback hell zone 👇👇👇
boilWater(() => {
  brewCoffee(() => {
    drinkCoffee(() => {
      console.log('🎉 Hoàn thành buổi sáng!');
    });
  });
});
`,
				b7: `Promise((resolve, reject)=>{
	// logic xử lý.
})`,
				b8: `// Viết lại logic bất đồng bộ với Promise
function boilWater() {
  console.log('💧 Đang đun nước...');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('🔥 Nước đã sôi!');
      resolve();
    }, 2000);
  });
}

function brewCoffee() {
  console.log('☕ Đang pha cà phê...');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('✅ Cà phê đã pha xong!');
      resolve();
    }, 1500);
  });
}

function drinkCoffee() {
  console.log('😋 Uống cà phê...');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('☀️ Thật sảng khoái!');
      resolve();
    }, 1000);
  });
}

boilWater()
  .then(brewCoffee)
  .then(drinkCoffee)
  .then(() => console.log('🎉 Hoàn thành buổi sáng!'));
`,
				b9: `
async function morningRoutine() {
	try {
		const res1 = await boilWater(); // có thể lấy kết quả nếu cần
		await brewCoffee(); // nếu không cần kết quả thì không cần gán biến
		await drinkCoffee();
		console.log(res1);
		console.log('🎉 Hoàn thành buổi sáng!');
	} catch (error) {
		console.error('❌ Lỗi trong quá trình thực hiện:', error);
	}
}

morningRoutine();
`,
				headers: [
					{
						id: 1,
						name: 'Đặc điểm',
						key: 'command',
					},
					{
						id: 2,
						name: 'CommonJS',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'ES Module',
						key: 'example',
					},
				],
				items: [
					{
						command: 'Cách import',
						syntax: 'require()',
						example: 'import',
					},
					{
						command: 'Cách export',
						syntax: 'module.exports',
						example: 'export',
					},
					{
						command: 'Thời điểm import',
						syntax: 'Runtime (lúc chạy)',
						example: 'Compile time (lúc biên dịch)',
					},
					{
						command: 'Sử dụng trong Node.js',
						syntax: 'Mặc định',
						example: 'Cần cấu hình',
					},
					{
						command: 'Caching',
						syntax: 'Có',
						example: 'Có',
					},
				],
				conceptTable: [
					{
						term: 'Synchronous (Đồng bộ)',
						description: 'Thực hiện từng việc một, theo thứ tự — việc sau phải đợi việc trước xong',
						wait: '✅ Có đợi',
						block: '✅ Gây nghẽn (nếu lâu)',
						example: 'console.log, fs.readFileSync',
					},
					{
						term: 'Asynchronous (Bất đồng bộ)',
						description: 'Giao việc rồi tiếp tục làm việc khác — khi xong sẽ báo lại',
						wait: '❌ Không đợi ngay',
						block: '❌ Không nghẽn',
						example: 'setTimeout, fs.readFile, fetch',
					},
					{
						term: 'Blocking',
						description: 'Tác vụ giữ chặt Call Stack cho đến khi hoàn tất',
						wait: '✅ Có đợi',
						block: '✅ Gây nghẽn',
						example: 'fs.readFileSync, vòng lặp nặng',
					},
					{
						term: 'Non-blocking',
						description: 'Tác vụ được đưa ra khỏi Stack, xử lý ở background',
						wait: '❌ Không đợi ngay',
						block: '❌ Không nghẽn',
						example: 'fs.readFile, callback, promise',
					},
				],
				eventLoopConceptTable: [
					{
						term: 'Microtask Queue',
						description: 'Hàng ưu tiên',
						ft: 'Luôn được xử lý trước Macrotask',
						example: 'Promise.then(), queueMicrotask()',
					},
					{
						term: 'Macrotask Queue',
						description: 'Hàng bình thường',
						ft: 'Xử lý sau khi Microtask rỗng',
						example: 'setTimeout(), setInterval(), I/O, setImmediate()',
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-2' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

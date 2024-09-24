<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Node.js là gì?" addOnClass="text-left" markedAs="about-nodejs" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Node.js là một môi trường runtime mã nguồn mở <b>(an asynchronous event-driven JavaScript runtime)</b>, đa nền
					tảng, cho phép chạy JavaScript trên server. Ban đầu, JavaScript chỉ được sử dụng trên trình duyệt
					(client-side), nhưng với sự ra đời của Node.js, JavaScript giờ đây có thể chạy trên máy chủ (server-side).
				</p>
				<PageHeading text="Điểm mạnh của nodejs" addOnClass="text-left mt-5" markedAs="advantage-of-nodejs" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Node.js có nhiều điểm mạnh khiến nó trở nên phổ biến trong lập trình như:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Non-blocking I/O: `</b>
							Điều này giúp xử lý nhiều yêu cầu cùng lúc một cách hiệu quả hơn so với các ngôn ngữ xử lý đồng bộ như
							PHP. Tức là về cơ bản, các công việc sẽ được thực hiện đồng thời mà không cần đợi nhau, từ đó sẽ tiết kiệm
							được thời gian thực thi.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Hiệu năng cao: `</b>Node.js được xây dựng trên nền tảng V8 của Google Chrome,
							giúp thực thi mã JavaScript rất nhanh.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Cộng đồng lớn: `</b>Node.js có hệ sinh thái rất phong phú với hàng triệu package
							có thể tải về thông qua npm (Node Package Manager).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Không đồng bộ và hướng sự kiện (Asynchronous and Event-driven): `</b>Node.js
							không chờ một tác vụ hoàn thành trước khi tiếp tục tác vụ khác. Ngoài ra, nodejs sử dụng mô hình hướng sự
							kiện, tức là NodeJS sẽ lập trình xoay quanh các event, mỗi tác vụ có thể coi là một event và chúng ta sẽ
							định nghĩa EventEmitter, Listener,
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Single-threaded nhưng có khả năng xử lý đa tác vụ: `</b>Mặc dù Node.js chạy trên
							một luồng (single-thread), nhưng nhờ cơ chế sự kiện, nó có thể xử lý nhiều yêu cầu cùng lúc mà không cần
							chờ yêu cầu trước hoàn thành.
						</span>
					</li>
				</ul>
				<PageHeading text="Node.js hoạt động thế nào?" addOnClass="text-left" markedAs="about-nodejs" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Node.js sử dụng mô hình sự kiện <b>`non-blocking`</b>. Điều này có nghĩa là khi nhận một yêu cầu, Node.js
					không chờ hoàn thành tác vụ đó trước khi chuyển sang xử lý tác vụ khác. Thay vào đó, nó sẽ đưa tác vụ vào một
					hàng đợi và tiếp tục xử lý các yêu cầu mới, khi nào tác vụ hoàn thành thì nó sẽ gọi lại <b>`(callback)`</b> để
					xử lý tiếp.
					<br />
				</p>
				<PageHeading text="Non-blocking" addOnClass="text-left mt-3" markedAs="non-blocking" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Ví dụ về cách hoạt động non-blocking:</p>

				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trong ví dụ trên, Node.js sẽ không đợi việc đọc tệp hoàn tất mà sẽ tiếp tục thực thi câu lệnh
					<br />
					console.log('File đang được đọc...'); <br />trước, sau đó khi việc đọc tệp hoàn thành, kết quả sẽ được trả về.
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về <b>`Event loop`</b> trong NodeJs để hiểu cách thức hoạt động của
					NodeJs.
				</p>

				<PageHeading text="Event loop" addOnClass="text-left mt-3" markedAs="event-loop" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Node.js hoạt động trên một single-thread (chỉ có một luồng duy nhất), nhưng nhờ cơ chế Event Loop, nó có thể
					xử lý nhiều yêu cầu cùng lúc mà không bị chặn (non-blocking). Mô hình của Node.js được thiết kế để xử lý I/O
					không đồng bộ như đọc ghi file, kết nối mạng, truy vấn cơ sở dữ liệu mà không cần phải tạo thêm nhiều luồng
					(threads). Event Loop đảm bảo rằng: <br />

					- Mã đồng bộ được thực thi ngay lập tức.<br />
					- Các tác vụ bất đồng bộ (như đọc file, gọi API, truy vấn cơ sở dữ liệu) sẽ được gửi đến hàng đợi (queue) và
					xử lý khi có kết quả trả về.
					<br />
					<b>Dưới đây là ví dụ về cách thức hoạt động của NodeJs: </b>
				</p>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://media.licdn.com/dms/image/v2/C4D22AQGV-hLhe1r24w/feedshare-shrink_800/feedshare-shrink_800/0/1673854950559?e=2147483647&v=beta&t=6PDe0PtcyOqYpP5OXl1JGgwnAn43jzMdrF2gQhocVZs"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Như vậy, về cơ bản thì <b>`Event loop`</b> là trọng tâm của kiến trúc hướng sự kiện trong NodeJS, nó là một cơ
					chế luồng đơn liên tục kiểm tra các sự kiện đang chờ xử lý và thực thi trình xử lý sự kiện liên quan (trình
					lắng nghe). Nó đảm bảo rằng ứng dụng NodeJS vẫn phản hồi và có thể xử lý nhiều hoạt động đồng thời mà không bị
					chặn. Tiếp theo chúng ta sẽ tìm hiểu về các thành phần trong <b>`Event loop`</b>
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Call Stack : `</b>
							Đây là nơi mà các hàm đồng bộ được thực thi. Khi bạn gọi một hàm, nó được đẩy vào Call Stack. Khi hàm hoàn
							tất, nó sẽ được loại bỏ khỏi Call Stack. Nếu hàm bất đồng bộ (như đọc file, gọi API) được gọi, Node.js sẽ
							xử lý nó bằng cách đẩy nó sang một quy trình khác mà không chặn chương trình.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Web APIs: `</b>(I/O, HTTP Requests, Timers...), Đây là nơi mà các tác vụ bất
							đồng bộ được xử lý. Khi các tác vụ như yêu cầu HTTP, đọc file, hoặc chờ một khoảng thời gian (setTimeout)
							được gọi, chúng sẽ được chuyển tới các APIs này và tiếp tục thực hiện.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b class="min-w-[150px]">`Callback Queue: `</b>Khi các tác vụ bất đồng bộ hoàn thành, kết quả của chúng sẽ
							được đẩy vào hàng đợi callback. Hàng đợi này chứa các hàm callback cần được thực thi ngay khi Call Stack
							trống.
						</span>
					</li>
				</ul>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/nodejs/event-loop-1.png" alt="" class="rounded-lg mt-3 block" />
				</div>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Node.js là một nền tảng mạnh mẽ cho phát triển ứng dụng web và server-side bằng JavaScript. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Nó mang lại hiệu năng cao, khả năng xử lý nhiều yêu cầu đồng thời nhờ mô hình non-blocking. </span>
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
				b1: `const fs = require('fs');

// Đọc tệp một cách không đồng bộ
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
	console.log('đọc file hoàn tất !!');
  console.log(data);
});

console.log('File đang được đọc...');
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

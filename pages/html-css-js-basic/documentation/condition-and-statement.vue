<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Condition" addOnClass="text-left" markedAs="condition" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong Javascript, <b>condition</b> giúp chương trình xử lý các logic dựa trên kết quả đúng hoặc sai của một
					điều kiện (condition) nào đó.
				</p>
				<PageHeading text="If - Else" addOnClass="text-left" markedAs="if-else" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Câu lệnh <FilePath>if</FilePath> sẽ nhận vào một điều kiện (condition) và tiến hành ép kiểu về dạng
					<b>Boolean</b>. Nếu điều kiện đúng (true), khối mã trong if sẽ được thực hiện.
					<br />
					Sau khi ép kiểu dữ liệu, nếu giá trị của condition là:
					<br />
					<b>True</b>: khối mã trong <FilePath>if</FilePath> sẽ được thực hiện.
					<br />
					<b>False</b>: khối mã trong <FilePath>else</FilePath> sẽ được thực hiện.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div class="col-span-1"><VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" /></div>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />
					</div>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, một <b>codition</b> của chúng ta có thể là một biểu thức trả về dữ liệu dạng Boolean (VD: age >= 18).
					<br />
					Hoặc cũng có thể là một kiểu dữ liệu không phải Boolean (VD: userName = "").
					<br />
					Chúng đều được ép kiểu về dạng Boolean trước khi kiểm tra trong vòng if-else.
				</p>

				<PageHeading text="If - Else If - Else" addOnClass="text-left" markedAs="if-elseif" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<FilePath>if-elseif-else</FilePath> được dùng khi có nhiều điều kiện cần kiểm tra.
					<br />
					Sau khi ép kiểu dữ liệu, nếu giá trị của condition là:
					<br />
					<b>True</b>: khối mã trong <FilePath>if</FilePath> sẽ được thực hiện.
					<br />
					<b>False</b>: kiểm tra điều kiện trong <FilePath>else if</FilePath> và làm tương tự với các khối khác.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="Switch - Case" addOnClass="text-left" markedAs="switch-case" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Câu lệnh <FilePath>Switch</FilePath> sẽ nhận vào một giá trị và tiến hành so sánh tuyệt đối với các trường hợp
					(case) được định nghĩa . Nếu giá trị bằng với trường hợp (case) nào, khối mã trong case đó sẽ được thực hiện.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock :code="b4" highlightjs lang="js" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, mỗi <b>case</b> của chúng ta được viết dưới dạng:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="js" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`value`:</b>
						<span>
							Là giá trị được dùng để so sánh tuyệt đối với biến được truyền vào tại <b>switch</b> (VD: status)
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`break`:</b>
						<span>
							Là keywords để thoát ra khỏi switch. Phải có break để tránh chương trình thực thi các case tiếp theo.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`default`:</b>
						<span> Được dùng để bắt các trường hợp mà không match với bất cứ case nào. </span>
					</li>
				</ul>
				<PageHeading text="Loop" addOnClass="text-left" markedAs="loop" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong Javascript, <b>loop-statement</b>giúp lặp lại một khối mã nhiều lần, giúp chương trình xử lý các công
					việc lặp đi lặp lại hiệu quả.
				</p>

				<PageHeading text="For" addOnClass="text-left" markedAs="for" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Vòng lặp <FilePath>for</FilePath> là một vòng lặp vô cùng phổ biến trong JS, nó được sử dụng khi chúng ta đã
					biết trước số lần lặp. Ví dụ:
					<br />
					Lặp qua 1 mảng với số lần lặp = độ dài mảng.
					<br />
					Lặp qua n bước với số bước được xác định sẵn.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div class="col-span-1"><VCodeBlock :code="b6" highlightjs lang="js" theme="atom-one-dark" /></div>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="js" theme="atom-one-dark" />
					</div>
				</div>
				<PageHeading text="While" addOnClass="text-left mt-5" markedAs="while" :lvl="2" />
				<p class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">
					Vòng lặp <FilePath>while</FilePath> kiểm tra điều kiện (while) trước, lặp đến khi điều kiện sai. Ví dụ:
				</p>
				<p class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock :code="b8" highlightjs lang="js" theme="atom-one-dark" />
				<PageHeading text="Do-While" addOnClass="text-left mt-5" markedAs="do-while" :lvl="2" />
				<p class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">
					Vòng lặp <FilePath>do-while</FilePath> thực thi trước (do), sau đó mới kiểm tra điều kiện (while). <br />
					Lặp đến khi điều kiện sai. Ví dụ:
				</p>
				<p class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock :code="b9" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Lưu ý: Dù điều kiện sai, mã bên trong vẫn chạy 1 lần do thực hiện <b>do</b> trước rồi mới kiểm tra điều kiện
					<b>while</b>
					<br />
					<br />
					Ngoài các vòng lặp cơ bản ở trên, chúng ta còn có các vòng lặp như:
					<br />
					<b>for...of</b>: dùng để lặp qua array.
					<br />
					<b>for...in</b>: dùng để lặp qua object.
					<br />
					Các bạn có thể tự tìm hiểu thêm.
				</p>
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/html-css-js-basic/practice/c_e_3"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p>
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
				b1: `const age = 20;
if (age >= 18) {
  console.log("Bạn đủ tuổi để lái xe.");
} else {
  console.log("Bạn chưa đủ tuổi.");
}
`,
				b2: `const userName = "";
if (userName) {
  console.log("Người dùng có tên là:" + userName);
} else {
  console.log("Người dùng chưa điền tên.");
}
`,
				b3: `const score = 85;
if (score >= 90) {
  console.log("Xuất sắc!");
} else if (score >= 70) {
  console.log("Tốt.");
} else if (score >= 50) {
  console.log("Đạt yêu cầu.");
} else {
  console.log("Chưa đạt.");
}
`,
				b4: `const status = 1;
switch (status) {
  case 1:
    console.log("Offline");
    break;
  case 2:
    console.log("Online");
    break;
  case 3:
    console.log("Busy");
    break;
  default:
    console.log("Unknow");
}
`,
				b5: `case value:
// block code sẽ thực thi nếu case này đúng
break; //  câu lệnh để dừng switch/case.
`,
				b6: `for (khởi-tạo; điều_kiện; bước-nhảy) {
  // Khối mã lặp
}
`,
				b7: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}
`,
				b8: `let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
`,
				b9: `let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
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

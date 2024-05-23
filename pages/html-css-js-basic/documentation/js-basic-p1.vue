<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="introduction" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong JavaScript, có nhiều kiểu dữ liệu khác nhau, về cơ bản chúng ta có 8 kiểu dữ liệu dạng basic như:
				</p>
				<ul class="pl-5">
					<li
						v-for="(item, idx) in basicData"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1"
					>
						{{ idx + 1 }}. {{ item }}
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong bài học này chúng ta sẽ tìm hiểu về một số dạng dữ liệu như
					<b>'String', 'Number', 'Bigint', 'Boolean', 'Undefined', 'Null',</b>
				</p>
				<PageHeading text="String" addOnClass="text-left" markedAs="js-data-string" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong JavaScript, <b>String</b> là một <b>kiểu dữ liệu nguyên thủy - primitive</b> đại diện cho chuỗi ký tự.
					Chuỗi ký tự là một tập hợp các ký tự, có thể là chữ cái, số, ký hiệu, hoặc ký tự đặc biệt.
					<br />
					<br />
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="js-data-string-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Chuỗi ký tự trong JavaScript được bao bọc bởi <b>cặp dấu nháy đơn (' ')</b>, <b>dấu nháy kép (" ")</b>, hoặc
					cặp dấu <b>backtick - dấu huyền (` `)</b>.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />
				<div class="py-3"></div>
				<PageHeading text="Example" addOnClass="text-left" markedAs="js-data-string-example" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo là 1 số bài toán chúng ta thường gặp khi thao tác với String.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Nối chuỗi</b>: Bạn có thể nối hai hoặc nhiều chuỗi lại với nhau bằng toán tử +:
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`console.log('Xin chào, ' + lastName); // -> Xin chào, Tuấn
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Nhưng nếu chuỗi tôi cần là dạng:
						<br />
						<b>`Họ: surname, Tên đệm: middleName, Tên: lastName`</b> thì chắc chắn là việc nối chuỗi hơi 'khó viết'.
					</p>
					<VCodeBlock
						:code="`console.log('Họ: ' + surname + ',' + ' Tên đệm: ' + middleName + ',' + ' Tên: ' + lastName);
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						ಠ﹏ಠ Chưa kể đến việc là khả năng rất cao bạn sẽ bị thiếu các dấu space giữa đoạn nối đúng không nào?
						<br />
						Có giải pháp đây, đó là sử dụng <b>`template literals`</b>
					</p>
					<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />

					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Ở ví dụ trên, khi chúng ta dùng cặp dấu <b>backtick (` `)</b> để viết chuỗi thì syntax này còn được gọi là
						<b>`template literals`</b>. Syntax này cho phép chúng ta chèn trực tiếp một biến vào trong chuỗi của chúng
						ta, đồng thời nó cũng tiến hành ép kiểu dữ liệu của biến đó về dạng <b>String.</b> <br />Việc bạn cần làm
						chỉ đơn giản là sử dụng syntax <b>`${tên-biến}`</b> ở trong cặp backtick.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngoài ra còn các bài toán như: <b>Chuyển đổi, Trích xuất, Tìm kiếm, Thay thế và Phân chia ...</b> Hầu hết các
					bài toán này đều có thể xử lí đơn giản bằng các <b>method</b> được cung cấp sẵn bởi js. Nhưng ở những buổi đầu
					chúng ta sẽ không học tới chúng, tôi sẽ để dành đến sau khi các bạn hiểu rõ <b>function, methods ...</b> trong
					js thì ta sẽ quay lại sau.
				</p>
				<!-- NUMBER -->
				<PageHeading text="Number" addOnClass="text-left" markedAs="js-data-number" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo, chúng ta đến với kiểu <b>Number.</b> Đây là một kiểu dữ liệu nguyên thủy đại diện cho cả số nguyên
					(integers) và số thực (floating-point numbers). JavaScript sử dụng chuẩn IEEE 754 cho các số, có thể biểu diễn
					cả số dương và số âm, giá trị Infinity, -Infinity, và NaN (Not-a-Number).
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="js-data-number-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Cách đơn giản nhất bạn có thể khai báo một biến kiểu số là bằng cách gán một giá trị số cho biến đó là được.
				</p>
				<VCodeBlock
					:code="`let userYob = 1996; // số nguyên - int
let userWeight = 65.2; // số thực - float
let binaryNumber = 0b1010; // 10 trong hệ thập phân
 // nếu số vượt quá giới hạn chuẩn IEEE 754 thì có thể dùng n ở cuối để chuyển sang dạng bigint
let bigIntNumber = 1234567890123456789012345678901234567890n;
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<PageHeading text="Example" addOnClass="text-left pt-5" markedAs="js-data-number-example" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo là 1 số bài toán chúng ta thường gặp khi thao tác với Number.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Số học</b>: Các phép toán số học cơ bản như <b>cộng, trừ, nhân, chia ...</b>
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`// Cộng +
let a = 5;
let b = 3;
let sum = a + b; // 8
// trừ (-) | nhân (*) | chia (/) | chia lấy dư (%) | Luỹ thừa (**)
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Tăng Giảm theo bước nhảy</b>: Các phép toán giúp bạn biến đổi giá trị của number với một bước nhảy không
					đổi là <b>`1`</b>
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`// Tăng  ++
let c = 1;
console.log(c++);
// Giảm --
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Note</b>: bằng cách sử dụng toán tử <b>`++` hoặc `--`</b> ta có thể tăng giảm giá trị của number nhưng
						tuỳ vào vị trí đặt mà chúng sẽ có hành vi khác nhau.
					</p>
					<div class="grid grid-cols-2 gap-4">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<b>a++</b>:(postfix increment).
							<br />
							<span class="pl-3 inline-block">
								(1) - Trả về giá trị hiện tại của a trước khi tăng.
								<br />
								(2) - Sau đó tăng giá trị của a lên 1.
							</span>
						</p>
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<b>++a</b>:(prefix increment).
							<br />
							<span class="pl-3 inline-block">
								(1) - Tăng giá trị của a lên 1.
								<br />
								(2) - Trả về giá trị mới của a .
							</span>
						</p>
					</div>
					<VCodeBlock
						:code="`let a = 5;
let b = a++;  // b được gán giá trị của a trước khi a được tăng lên

console.log(a); // Output: 6 (a đã được tăng lên 1)
console.log(b); // Output: 5 (b nhận giá trị của a trước khi a được tăng lên)
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
					<div class="py-3"></div>
					<VCodeBlock
						:code="`let a = 5;
let b = ++a;  // a được tăng lên trước, sau đó b được gán giá trị mới của a

console.log(a); // Output: 6 (a đã được tăng lên 1)
console.log(b); // Output: 6 (b nhận giá trị mới của a sau khi a được tăng lên)
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Toán Tử Gán</b>: Thực hiện các phép toán sau đó gán giá trị mới cho biến
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`// Cộng rồi gán +=
let d = 1;
d += 3
console.log(d);
// tương tự với trừ, nhân, chia ...
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
				</div>

				<!-- BOOLEAN -->
				<PageHeading text="Boolean" addOnClass="text-left" markedAs="js-data-boolean" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Boolean</b> hay còn gọi là dữ liệu dạng logic. Nó chỉ có 2 giá trị là <b>`true`</b> hoặc <b>`false`</b>
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="js-data-boolean-syntax" :lvl="2" />

				<VCodeBlock
					:code="`let anhTuanDepTrai = true;
let isFalse = false;
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Note</b> bên cạnh đó, các biểu thức so sánh, logic ... sẽ luôn trả ra dạng boolean
				</p>

				<PageHeading text="Example" addOnClass="text-left pt-5" markedAs="js-data-boolean-example" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo là 1 số bài toán chúng ta thường gặp khi thao tác với Boolean.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Phép toán so sánh</b>: Các phép toán cơ bản như <b>lớn hơn, nhỏ hơn, ....</b>
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`let x = 10;
let y = 15;
const greater = x > y; // false
const lower = x < y; // true
// Lớn hơn hoặc bằng (>=)
// Nhỏ hơn hoặc bằng (<=)
// Bằng tuyệt đối (===) | tương đối (==)
// Không bằng tuyệt đối (!==) | tương đối (==)
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Phép toán logic</b>: AND | OR
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`const v1 = true;
const v2 = false;
const v3 = true;
const v4 = false;
// AND (&&) - Trả ra 'true' nếu MỌI VẾ trong biểu thức đều là 'true';
const andOpt1 = v1 && v2; // false
const andOpt2 = v1 && v3; // true
const andOpt3 = v2 && v4; // false

// OR (||) - Trả ra 'true' nếu BẤT KÌ VẾ nào trong biểu thức là 'true';
const orOpt1 = v1 || v2; // true
const orOpt2 = v1 || v3; // true
const orOpt3 = v2 || v4; // false
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Phép đảo</b>: (1): ép kiểu dữ liệu về dạng boolean, (2) đảo ngược giá trị của boolean: từ true -> false và
					ngược lại
				</p>
				<div class="lg-5 lg:pl-10">
					<VCodeBlock
						:code="`const flag01 = true;
const flag02 = !flag01; // false
`"
						highlightjs
						lang="js"
						theme="atom-one-dark"
					/>
				</div>
				<!-- END -->

				<PageHeading text="Ép kiểu dữ liệu" addOnClass="text-left pt-5" markedAs="js-data-parse-data" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo chúng ta sẽ tìm hiểu khái niệm <b>`Ép kiểu - Parse data`</b> trong lập trình.
					<br />
					<br />
					<b>`Ép kiểu - Parse data`</b> là hành động biến đổi kiểu dữ liệu của một biến thành một dạng dữ liệu khác nhằm
					phục vụ các bài toán ta gặp phải.
				</p>

				<PageHeading text="String" addOnClass="text-left pt-5" markedAs="js-data-parse-string" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để ép bất kì kiểu dữ liệu gì về dạng String thì ta có thể làm theo các cách như sau:
				</p>
				<VCodeBlock
					:code="`const myScore = 18;
const myScoreAsString = '' + myScore; // Toán tử cộng với chuỗi rỗng
const myScoreAsStringV2 = ${`${b3}`}; // sử dụng template
const myScoreAsStringV3 = String(myScore); // sử dụng String Object
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<PageHeading text="Number" addOnClass="text-left pt-5" markedAs="js-data-parse-number" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để ép về dạng Number thì ta có thể làm theo các cách như sau:
				</p>
				<VCodeBlock
					:code="`const myLength = '18';
const flag = true;
const myLengthAsNumber = +myLength; // Dùng dấu '+'
const flagAsNumberV1 = parseFloat(flag) // sử dụng parseFloat để thành dạng float hoặc parseInt
const flagAsNumberV2 = Number(flag); // sử dụng Number Object
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>

				<PageHeading text="Boolean" addOnClass="text-left pt-5" markedAs="js-data-parse-boolean" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để ép về dạng Boolean thì ta có thể làm theo các cách như sau:
				</p>
				<VCodeBlock
					:code="`const stringAsFalse = '';
const stringAsTrue = ' ';
const toBoolean = !!stringAsFalse; // Thực hiện phép đảo
const toBooleanV2 = Boolean(stringAsTrue); // sử dụng Boolean Object
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Note:</b> Chúng ta thường xuyên phải ép kiểu dữ liệu về dạng Boolean để thực hiện các bài toán điều kiện,
					vì vậy tôi sẽ nói kỹ hơn về thằng này 1 chút:
					<br />
					<br />
					Khi ép kiểu về Boolean thì chúng ta có 2 loại giá trị là
					<br />
					<b>falsy - những giá trị ép kiểu thành false</b>
					<br />
					<b>truthy - những giá trị ép kiểu thành true</b>
					<br />
					<br />
					Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`String`:</b>
						<span> Nếu giá trị là chuỗi rỗng - '' thì sẽ là false, còn lại là true </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Number`:</b>
						<span> Nếu giá trị là số 0 hoặc NaN thì sẽ là false, còn lại là true </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`null, undefined`:</b>
						<span> Luôn là false </span>
					</li>
				</ul>
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
				b1: `const surname = 'Phạm';
const middleName = "Anh";
const lastName = "Tuấn";
`,
				b2: 'console.log(`Họ: ${surname}, Tên đệm: ${middleName}, Tên: ${lastName}`)',
				b3: '${myScore}',
				basicData: ['String', 'Number', 'Bigint', 'Boolean', 'Undefined', 'Null', 'Symbol', 'Object'],
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
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'html-basic', currentDocId: 'js-r1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

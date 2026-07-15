<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Number" addOnClass="text-left" markedAs="php-number-method" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, không có đối tượng Number giống như trong JavaScript, vì PHP là ngôn ngữ loosely-typed và không có
					kiểu dữ liệu nguyên thủy cho số nguyên và số thực, Number trong PHP thực tế là sự kết hợp của
					<b>Integers | Float | Numerical Strings | Infinity | NaN</b>.
					<br />
					PHP sử dụng các hàm (functions) để thao tác và làm việc với các giá trị số. Dưới đây là một số hàm phổ biến để
					làm việc với số trong PHP:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Function</th>
								<th scope="col" class="px-6 py-3">Def</th>
								<th scope="col" class="px-6 py-3">Eg</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in stringMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th
									v-if="item.label"
									colspan="3"
									scope="row"
									class="px-6 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
								>
									{{ item.label }}
								</th>
								<th
									v-if="!item.label"
									scope="row"
									class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
								>
									{{ item.name }}
								</th>
								<td v-if="!item.label" class="px-6 py-4">{{ item.desc }}</td>
								<td v-if="!item.label" class="px-6 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ngoài ra ta cũng có những bài toàn với operators như <b> +, -, *, /, ** </b>
				</p>

				<PageHeading text="Parse data to number" addOnClass="text-left mt-5" markedAs="parse-to-number" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Khi nhận dữ liệu từ <FilePath>$_GET</FilePath>, <FilePath>$_POST</FilePath>, JSON API, file CSV... PHP luôn
					nhận về dưới dạng <b>string</b> — dù người dùng gõ số cũng vậy. Muốn tính toán, so sánh, hay lưu vào DB dưới
					dạng <FilePath>INT</FilePath>/<FilePath>FLOAT</FilePath>, ta phải <b>parse (chuyển kiểu)</b> chuỗi đó thành số.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">3 cách phổ biến:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Cách</th>
								<th scope="col" class="px-5 py-3">Cú pháp</th>
								<th scope="col" class="px-5 py-3">Ví dụ</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Type casting</th>
								<td class="px-5 py-4">
									<FilePath>(int) $val</FilePath> <br />
									<FilePath>(float) $val</FilePath>
								</td>
								<td class="px-5 py-4">
									<FilePath>(int) "42abc"</FilePath> → <b>42</b> <br />
									<FilePath>(float) "3.14"</FilePath> → <b>3.14</b>
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Function</th>
								<td class="px-5 py-4">
									<FilePath>intval($val, $base = 10)</FilePath> <br />
									<FilePath>floatval($val)</FilePath>
								</td>
								<td class="px-5 py-4">
									<FilePath>intval("0x1A", 16)</FilePath> → <b>26</b> <br />
									<FilePath>floatval("1.5e3")</FilePath> → <b>1500.0</b>
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">filter_var (an toàn)</th>
								<td class="px-5 py-4">
									<FilePath>filter_var($val, FILTER_VALIDATE_INT)</FilePath> <br />
									<FilePath>filter_var($val, FILTER_VALIDATE_FLOAT)</FilePath>
								</td>
								<td class="px-5 py-4">
									<FilePath>filter_var("42abc", FILTER_VALIDATE_INT)</FilePath> → <b>false</b> <br />
									<FilePath>filter_var("42", FILTER_VALIDATE_INT)</FilePath> → <b>42</b>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="Sự khác biệt quan trọng" addOnClass="text-left mt-4" markedAs="parse-differences" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>(int)</FilePath> và <FilePath>intval()</FilePath> khá <b>khoan dung</b> — chuỗi bắt đầu bằng số sẽ
					được parse tới ký tự không phải số đầu tiên. Còn <FilePath>filter_var()</FilePath> thì <b>khắt khe</b> — chỉ
					chấp nhận chuỗi <i>toàn</i> số hợp lệ, sai là trả <FilePath>false</FilePath>.
				</p>
				<VCodeBlock :code="parseExample" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Quy tắc chọn:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Dữ liệu nội bộ tin tưởng (từ DB, config) → <FilePath>(int)</FilePath>/<FilePath>(float)</FilePath> gọn nhất.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Cần đổi cơ số (hex, oct, bin) → dùng <FilePath>intval($val, 16)</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Dữ liệu từ user (form, query string, API) → <FilePath>filter_var()</FilePath> để phát hiện input rác.
					</li>
				</ul>

				<PageHeading text="Kiểm tra trước khi parse" addOnClass="text-left mt-4" markedAs="parse-check" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>is_numeric()</FilePath> trả về <FilePath>true</FilePath> nếu chuỗi là số hợp lệ — thường dùng để
					validate trước khi parse:
				</p>
				<VCodeBlock :code="parseCheck" highlightjs lang="php" theme="atom-one-dark" />

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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
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
		},
		data() {
			return {
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
				parseExample: `<?php
// Chuỗi có phần đầu là số → (int) và intval() cắt lấy phần số
var_dump((int) "42abc");                                  // int(42)
var_dump(intval("42abc"));                                // int(42)
var_dump(filter_var("42abc", FILTER_VALIDATE_INT));       // bool(false)

// Chuỗi không bắt đầu bằng số → (int) trả 0, filter_var trả false
var_dump((int) "abc42");                                  // int(0)
var_dump(filter_var("abc42", FILTER_VALIDATE_INT));       // bool(false)

// Số thập phân
var_dump((int)   "3.99");                                 // int(3)   — cắt phần thập phân
var_dump((float) "3.99abc");                              // float(3.99)

// Chuỗi rỗng và null
var_dump((int) "");                                       // int(0)
var_dump((int) null);                                     // int(0)
var_dump(filter_var("",   FILTER_VALIDATE_INT));          // bool(false)
var_dump(filter_var(null, FILTER_VALIDATE_INT));          // bool(false)

// Boolean
var_dump((int) true);                                     // int(1)
var_dump((int) false);                                    // int(0)

// Đổi cơ số (chỉ intval() làm được)
var_dump(intval("0x1A", 16));                             // int(26)
var_dump(intval("1010", 2));                              // int(10)
var_dump(intval("777",  8));                              // int(511)`,
				parseCheck: `<?php
// Pattern chuẩn khi lấy input từ user
$age = $_POST['age'] ?? '';

if (!is_numeric($age)) {
    echo "Tuổi không hợp lệ";
    exit;
}

$age = (int) $age;   // giờ đã an toàn để dùng

// Ngắn gọn hơn — filter_var trả false nếu không hợp lệ
$age = filter_var($_POST['age'] ?? '', FILTER_VALIDATE_INT);
if ($age === false) {
    echo "Tuổi không hợp lệ";
    exit;
}
// $age đã là int, dùng thoải mái

// So sánh — cẩn thận với loose comparison
var_dump("0" == false);   // bool(true)  — nhiều khi gây bug
var_dump("0" === 0);      // bool(false) — string vs int
// → sau khi parse xong, dùng === để an tâm`,
				stringMethods: [
					{
						id: 1,
						name: 'abs($number)',
						desc: 'Trả về giá trị tuyệt đối của số. - number',
						syntax: `echo abs(-5); // Output: 5`,
					},
					{
						id: 2,
						name: 'round($number, $precision)',
						desc: 'Làm tròn số tới số chữ số thập phân được chỉ định. - number',
						syntax: `echo round(3.14159, 2); // Output: 3.14`,
					},
					{
						id: 3,
						name: 'ceil($number) | floor($number)',
						desc: 'Làm tròn số lên | xuống đến số nguyên gần nhất. - number',
						syntax: `echo round(3.14159, 2); // Output: 4 </br>
						echo floor(3.14159, 2); // Output: 3`,
					},
					{
						id: 4,
						name: 'min($values) | max($values)',
						desc: 'Trả về giá trị nhỏ nhất | lớn nhất trong một mảng hoặc danh sách các params. - number',
						syntax: `echo min(2, 3, 1, 6, 7); // Output: 1; </br>
						echo max(2, 3, 1, 6, 7); // Output: 7`,
					},
					{
						id: 5,
						name: 'sqrt($number) | pow($base, $exp)',
						desc: 'Trả về căn bậc | luỹ thừa - array',
						syntax: `echo sqrt(16); // Output: 4; </br>
						echo pow(2, 3); // Output: 8`,
					},
				] as { id: string | number; name: string; desc: string; syntax: string; label?: string }[],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-6' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Syntax & Identifiers" addOnClass="text-left" markedAs="s-n-i" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tiếp theo, chúng ta cùng tìm hiểu về cú pháp và các định danh trong Python. Từ đó giúp chúng ta viết mã nguồn
					một cách chính xác và hiệu quả hơn.
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="syntax" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tiếp theo, chúng ta cùng tìm hiểu về cú pháp và các định danh trong Python. Từ đó giúp chúng ta viết mã nguồn
					một cách chính xác và hiệu quả hơn.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						1. Đặc điểm cú pháp Python
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Python sử dụng <b>thụt lề (indentation)</b> thay vì dấu ngoặc <FilePath>{}</FilePath> để xác định khối
							lệnh.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Mỗi dòng là một câu lệnh riêng lẻ; không cần dấu <FilePath>;</FilePath> (nhưng vẫn có thể dùng nếu muốn).
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">2. Comments</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Tương tự như các ngôn ngữ khác, comments là một phần quan trọng của Python giúp làm rõ hoặc ghi chú về mặt
							logic/todo của một chương trình.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Comment một dòng: Sử dụng <FilePath>#</FilePath>.
							<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Comment nhiều dòng (dùng chuỗi nhiều dòng): <FilePath>""</FilePath>.
							<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						3. Khối lệnh (Code Block)
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Do sử dụng kỹ thuật indentation để xác định khối lệnh, nên tất cả các câu lệnh bên trong một khối phải có
							cùng mức thụt lề. Khuyến nghị
							<a
								href="https://peps.python.org/pep-0008/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:underline"
								>PEP</a
							>
							là sử dụng 4 khoảng trắng (spaces) cho mỗi cấp độ thụt lề.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ví dụ về hàm
							<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Nối dòng: Python tự hiểu mỗi dòng là một statement, Nếu muốn viết dài sang dòng kế tiếp, dùng
							<FilePath>\</FilePath> hoặc <FilePath>()</FilePath>.
							<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<PageHeading text="Identifiers" addOnClass="text-left" markedAs="id" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Định danh (Identifiers) là tên dùng để đặt cho biến, hàm, lớp, module, hoặc các đối tượng khác trong Python.
					Chúng giúp ta tham chiếu và thao tác với các đối tượng này trong mã nguồn.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						1. Quy tắc đặt tên biến
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Chỉ gồm: chữ cái, số, <FilePath>_</FilePath>;
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Không bắt đầu bằng số
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Phân biệt hoa – thường
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Không dùng từ khóa (if, for, class, def…)
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<p class="font-bold mb-1 text-underline"># Hợp lệ:</p>
							<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<p class="font-bold mb-1 text-underline"># KHÔNG hợp lệ:</p>
							<VCodeBlock :code="b7" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						2. Định nghĩa hàm và lớp
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Tạo hàm bằng từ khóa <FilePath>def</FilePath> và lớp bằng từ khóa <FilePath>class</FilePath>.
							<VCodeBlock :code="b8" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						3. Định nghĩa kiểu dữ liệu
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Python hỗ trợ tự động xác định kiểu, không cần khai báo, khá tương tự với JavaScript.
							<VCodeBlock :code="b9" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>NHƯNG</b> nếu bạn muốn khai báo kiểu (type declaration / type hinting) để tăng tính rõ ràng và hỗ trợ
							của công cụ kiểm tra kiểu tĩnh (static type checker) như MyPy, bạn có thể dùng <b>type hints</b>:
							<VCodeBlock :code="b10" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>

				<PageHeading text="Variables" addOnClass="text-left" markedAs="var" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Biến (Variables) là tên dùng để lưu trữ dữ liệu trong bộ nhớ. Chúng cho phép ta tham chiếu và thao tác với dữ
					liệu trong chương trình. Chúng ta sẽ phân biệt các loại biến, scope, và cách khai báo trong Python:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">1. Loại biến</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Về cơ bản, Python không phân biệt biến constants hay variables như một số ngôn ngữ khác. Tuy nhiên, ta có
							thể tuân theo quy ước đặt tên biến theo
							<a
								href="https://peps.python.org/pep-0008/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:underline"
								>PEP</a
							>
							constants bằng chữ in hoa (UPPERCASE).
							<VCodeBlock :code="b11" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Lưu ý: Do đó đây chỉ là hằng số theo quy ước (convention-based constant).
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ngoài ra, với các phiên bản 3.8+ chúng ta có thể dùng module <FilePath>typing.Final</FilePath> để khai báo
							hằng số thực sự.
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">2. Scope</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>Local</FilePath>: nằm trong hàm.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>Global</FilePath>: nằm ngoài hàm.
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<VCodeBlock :code="b12" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						3. Kiểm tra kiểu dữ liệu
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Sử dụng hàm <FilePath>type()</FilePath> và <FilePath>isinstance()</FilePath> để kiểm tra kiểu dữ liệu của
							biến.
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<VCodeBlock :code="b13" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
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
	import { apiResponde } from 'models';
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
			LessonSum,
		},
		data() {
			return {
				lessonSum: [
					`Python sử dụng cú pháp rõ ràng với indentation để xác định khối lệnh, giúp mã nguồn dễ đọc và nhất quán.`,
					`Identifiers phải tuân thủ quy tắc đặt tên và được dùng để định danh biến, hàm, lớp, hoặc các đối tượng trong mã nguồn.`,
					`Python hỗ trợ type hinting để tăng tính rõ ràng và giúp các công cụ kiểm tra kiểu tĩnh hoạt động hiệu quả hơn.`,
					`Biến trong Python có thể là local hoặc global, và hằng số chủ yếu được quản lý theo quy ước hoặc bằng typing.Final (3.8+).`,
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
				b1: `if 10 > 5:
    print("10 lớn hơn 5")
`,
				b2: `# Đây là một comment một dòng trong Python`,
				b3: ` """
This is a comment
that spans multiple lines.
It can be used for documentation.
"""`,
				b4: `def greet():
    print("Hello")
    print("Welcome to Python")`,
				b5: `numbers = (
    1, 2, 3,
    4, 5
)`,
				b6: `age = 25
user_name = "tuan"
is_active = True
`,
				b7: `2user = "abc"     # bắt đầu bằng số
class = 1         # trùng từ khóa
user-name = "x"   # chứa ký tự "-"
`,
				b8: `class DemoClass:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}!"

def demo_function():
    demo_instance = DemoClass("World")
    return demo_instance.greet()
`,
				b9: `age = 30               # int
price = 99.5           # float
name = "Alice"         # string
is_admin = False       # boolean
items = [1, 2, 3]      # list
user = {"id": 1}       # dict
`,
				b10: `# kiểu dữ liệu cơ bản
age: int = 25
price: float = 99.5
name: str = "Tuan"
is_active: bool = True

# kiểu dữ liệu phức tạp
# Sử dụng từ module typing (Python 3.8 trở lên).
from typing import List, Dict, Tuple, Optional 

scores: List[int] = [1, 2, 3]
user: Dict[str, int] = {"id": 1, "age": 25}

# Type Hint cho hàm
def greet(name: str) -> str:
    return f"Hello {name}"

`,
				b11: `PI = 3.14159
MAX_USERS = 100
APP_NAME = "MyApplication"`,
				b12: `x = 10  # global

def test():
    y = 5  # local
    print(x)
    print(y)

def anotherTest():
    print(y) # This will raise an error because y is not defined globally

test();
anotherTest();
`,
				b13: `type(age)       # <class 'int'>
isinstance(age, int)  # True
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'python', currentDocId: 'py-2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Iterators & Iterable" addOnClass="text-left" markedAs="iterators" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trước đây, ta dùng for i in list và thấy nó hoạt động rất mượt mà. Nhưng đằng sau đó là cả một cơ chế tên là
					<b>Iterator Protocol</b>.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						<b>Concept:</b>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Iterable (Đối tượng có thể lặp):</b> Là bất kỳ đối tượng nào có phương thức
							<FilePath>__iter__()</FilePath> (như List, Tuple, String, Dict). Nó giống như một cuốn sách.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Iterator (Đối tượng lặp):</b> Là đối tượng thực hiện việc "lật trang". Nó có phương thức
							<FilePath>__next__()</FilePath> để trả về phần tử tiếp theo.
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ví dụ chúng ta tự define một iterator:
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						Như vậy, chúng ta có thể thấy rằng để tạo nên một iterator, chúng ta cần định nghĩa hai phương thức chính:
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>__iter__()</FilePath>: Trả về chính đối tượng đó.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>__next__()</FilePath>: Trả về phần tử tiếp theo trong chuỗi. Khi không còn phần tử nào, nó sẽ
							ném ra ngoại lệ <FilePath>StopIteration</FilePath> để báo hiệu kết thúc.
						</li>
					</ul>
				</ul>
				<PageHeading text="Useages" addOnClass="text-left" markedAs="u" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Vậy tại sao chúng ta cần <b>iterators</b>, và <b>iterators</b> có thực sự quan trọng không?
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						<FilePath>Iterator</FilePath> chỉ phát huy giá trị khi:
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dữ liệu <b>rất lớn</b>, ở đây tôi đang cố gắng nói đến mức độ từ vài GB trở lên. Khi đó, việc load toàn bộ
							dữ liệu vào bộ nhớ là không khả thi, hoặc vô cùng tốn kém.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dữ liệu được tạo dần <b>theo thời gian</b>, ví dụ như đọc dữ liệu từ một stream, hoặc sinh số Fibonacci vô
							hạn.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Chúng ta cần tách biệt hoàn toàn giữa <b>consume</b> và <b>produce</b> dữ liệu, ví dụ như trong các hệ
							thống xử lý bất đồng bộ (asynchronous processing).
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						<b>Ưu điểm:</b>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>KHÔNG GIỮ TOÀN BỘ DỮ LIỆU TRONG RAM</b>: Khi làm việc với dữ liệu lớn, iterator chỉ giữ trong bộ nhớ
							phần tử hiện tại và một số trạng thái cần thiết để tiếp tục quá trình lặp. Điều này giúp tiết kiệm bộ nhớ
							đáng kể.
							<ul class="pl-5">
								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
								>
									Ví dụ, khi đọc một file lớn, thay vì load toàn bộ file vào RAM, ta có thể sử dụng iterator để đọc từng
									dòng một => RAM ~ constant
								</li>

								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
								>
									Xử lý từng dòng => không cần load toàn bộ file
								</li>
								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
								>
									Có thể dừng giữa chừng => tiết kiệm thời gian xử lý
								</li>
							</ul>
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>XỬ LÝ DỮ LIỆU DẠNG STREAM</b>: Iterator rất hữu ích khi làm việc với dữ liệu dạng stream hoặc dữ liệu
							được tạo dần theo thời gian, như đọc file lớn, dữ liệu từ mạng, hoặc sinh số Fibonacci vô hạn.
						</li>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
							>
								Ví dụ, xử lý các dữ liệu không có sẵn.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
							>
								log realtime, MQ, socket ....
							</li>
						</ul>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>TÁCH BIỆT "consume", "produce"</b>: Từ đó tăng tính độc lập, kiểm thử và tái sử dụng mã nguồn. Đồng
							thời làm nền tảng cho data-pipeline, xử lý bất đồng bộ.
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>PYTHON RUNTIME DỰA VÀO ITERATOR</b>: Về cơ bản, <FilePath>Interators</FilePath> KHÔNG phải là một tính
							năng "phụ", mà nó chính là 1 phần xương sống của Python, giúp tăng tốc, tối ưu bộ nhớ và hiệu năng cho
							ngôn ngữ này.
							<ul class="pl-5">
								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
								>
									Các cấu trúc dữ liệu như <FilePath>List, Tuple, Set, Dict</FilePath> đều là Iterable và sử dụng
									Iterator để duyệt.
								</li>
								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc"
								>
									Hầu hết các vòng lặp như <b>for, while</b> trong Python đều dựa trên Iterator Protocol.
								</li>
							</ul>
						</li>
					</ul>
				</ul>

				<p class="text-slate-900 dark:text-white mt-0 leading-8">Cùng tạo ra một file log lớn để thử nghiệm nhé:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-500 list-disc">
						Tạo file log lớn:
						<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
					</li>
				</ul>
				<PageHeading text="Bài toán tối ưu RAM" addOnClass="text-left" markedAs="ram" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					Bài toán này so sánh cách tiếp cận truyền thống (đọc toàn bộ file vào RAM) và cách tiếp cận sử dụng
					<FilePath>interatos</FilePath>
					(đọc từng dòng một). <br />Chúng ta sẽ đo thời gian và lượng RAM sử dụng trong cả hai trường hợp thông qua thư
					viện <FilePath>psutil</FilePath>.
				</p>
				<ExpandGlobal>
					<template #header>
						<div>
							<p class="text-slate-900 dark:text-white mt-0 leading-8 my-0">
								<b>a/ - Dùng psutil</b>
								Cài đặt môi trường ảo và thư viện cần thiết:
							</p>
						</div>
					</template>
					<template #body>
						<div class="col-span-1 mb-3">
							<VCodeBlock
								:code="`py -m venv venv
.\\venv\\Scripts\\activate
pip install psutil
python bth.py
`"
								highlightjs
								lang="python"
								theme="atom-one-dark"
							/>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
							<div class="col-span-1">
								<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
									Cách 1: Đọc toàn bộ file vào RAM sử dụng <FilePath>readlines()</FilePath>
								</p>
								<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
							</div>
							<div class="col-span-1">
								<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
									Cách 2: Sử dụng iterator để đọc từng dòng một
								</p>
								<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
							</div>
						</div>
					</template>
				</ExpandGlobal>
				<ExpandGlobal>
					<template #header>
						<div>
							<p class="text-slate-900 dark:text-white mt-0 leading-8 my-0">
								<b>b/ - Dùng tracemalloc</b> để theo dõi việc sử dụng bộ nhớ trong Python:
							</p>
						</div>
					</template>
					<template #body>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
							<div class="col-span-1">
								<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
									Cách 1: Đọc toàn bộ file vào RAM sử dụng <FilePath>readlines()</FilePath>
								</p>
								<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
							</div>
							<div class="col-span-1">
								<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">Cách 2: Sử dụng iterator</p>
								<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />
							</div>
						</div>
					</template>
				</ExpandGlobal>

				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					<b>Kết luận</b>: Sử dụng iterator giúp tiết kiệm bộ nhớ đáng kể (tới vài chục lần 😎), đặc biệt khi làm việc
					với dữ liệu lớn. Ngoài ra, nó còn giúp mã nguồn trở nên linh hoạt và dễ bảo trì hơn.
					<br />
					🔥<FilePath>Iterator</FilePath> không làm chương trình nhanh hơn một cách thần kỳ.
					<br />
					🔥<FilePath>Iterator</FilePath> giúp chương trình không ăn RAM theo kích thước dữ liệu.
				</p>
				<PageHeading text="Bài toán tối ưu Số lượng xử lý" addOnClass="text-left" markedAs="ram" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					Vẫn là file log trên, nhưng lúc này tôi chỉ quan tâm đến số lượng dòng log có mức độ ERROR. Hãy cùng so sánh
					giữa hai cách tiếp cận:
				</p>
				<ExpandGlobal>
					<template #header>
						<div>
							<p class="text-slate-900 dark:text-white mt-0 leading-8 my-0">
								<b>Dùng time</b> để theo dõi thời gian hoàn thành trong Python:
							</p>
						</div>
					</template>
					<template #body>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
							<div class="col-span-1">
								<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
									Cách 1: Sử dụng <FilePath>readlines()</FilePath>
								</p>
								<VCodeBlock :code="b7" highlightjs lang="python" theme="atom-one-dark" />
							</div>
							<div class="col-span-1">
								<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
									Cách 2: Sử dụng <FilePath>iterator</FilePath>
								</p>
								<VCodeBlock :code="b8" highlightjs lang="python" theme="atom-one-dark" />
							</div>
						</div>
					</template>
				</ExpandGlobal>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					<b>Kết luận</b>: Sử dụng iterator giúp chương trình hoàn thành nhanh hơn đáng kể khi chỉ cần xử lý một phần dữ
					liệu thay vì toàn bộ. Điều này đặc biệt hữu ích trong các tình huống như tìm kiếm, lọc dữ liệu, hoặc xử lý dữ
					liệu theo yêu cầu. Cực kì quan trọng trong các bài toán như <b>monitoring, incident response, SIEM....</b>
				</p>

				<PageHeading text="Generators" addOnClass="text-left" markedAs="gen" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					<FilePath>Iterators</FilePath> rất quan trọng nhưng lại hơi dài và phức tạp khi implement. Python cung cấp một
					cách đơn giản hơn để tạo iterators thông qua <b>generators</b>.
					<br />
					<b>=> Generator là một iterator mà Python tự quản lý state giúp bạn</b>
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">🤓Chúng ta lo:</li>
					<ul class="pl-10">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Viết logic sinh dữ liệu
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">😎Python lo:</li>
					<ul class="pl-10">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>__iter__</FilePath>
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>__next__</FilePath>
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							lưu state
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>StopIteration</FilePath>
						</li>
					</ul>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					Để làm được việc này, python sử dụng từ khóa <FilePath>yield</FilePath> trong hàm. Mỗi lần hàm được gọi, nó sẽ
					trả về một giá trị và "nghỉ" tại đó, giữ nguyên trạng thái để lần sau tiếp tục từ chỗ dừng.
				</p>
				<VCodeBlock :code="b9" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="function" addOnClass="text-left mt-3" markedAs="f" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-3">
					Generator function là một hàm sử dụng từ khóa <FilePath>yield</FilePath> để trả về các giá trị dần dần, thay
					vì trả về tất cả cùng một lúc. Mỗi lần hàm được gọi, nó sẽ trả về một giá trị và "nghỉ" tại đó, giữ nguyên
					trạng thái để lần sau tiếp tục từ chỗ dừng.
				</p>
				<VCodeBlock :code="b10" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-0">
					Khác với các function thường, Generator function không trả về một giá trị duy nhất và kết thúc. Thay vào đó,
					nó trả về một generator object, có thể được sử dụng để lấy các giá trị tiếp theo thông qua phương thức
					<FilePath>next()</FilePath>. Trong <b>Generator object</b> có:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Local variables
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Instruction pointer
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Call stack của hàm
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Status
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-0">
					Tạm thời chúng ta dừng ở đây về <b>Generators</b>, trong các bài sau (async/await, coroutines) chúng ta sẽ trở
					lại với chủ đề này.
				</p>
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
					`Interable là đối tượng có thể lặp được, Iterator là đối tượng thực hiện việc lặp. Chúng ta cần chủ động quản lý state khi tạo Iterator.`,
					`Iterator KHÔNG phải là syntax, KHÔNG phải là trick, KHÔNG phải là pattern. Iterator là một kiến trúc vô cùng quan trọng trong lập trình.`,
					`Iterator không giúp code đẹp hơn. Iterator giúp backend không chết khi dữ liệu lớn.`,
					`Generator function cho phép backend xử lý dữ liệu lớn như đang xử lý dữ liệu nhỏ.`,
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
				b1: `class CountDown:
	    def __init__(self, start):
	        self.current = start

	    def __iter__(self):
	        return self

	    def __next__(self):
	        if self.current < 0:
	            raise StopIteration # Dừng vòng lặp

	        number = self.current
	        self.current -= 1
	        return number

	# Sử dụng
	for n in CountDown(3):
	    print(n) # Output: 3, 2, 1, 0`,
				b2: `import random

	with open("demo.log", "w") as f:
	    for i in range(3_000_000):
	        if random.random() < 0.001:
	            f.write(f"{i} ERROR something bad happened \\n")
	        else:
	            f.write(f"{i} INFO normal request\\n")
	`,
				b3: `import time
	import psutil
	import os

	def ram_mb():
	    return psutil.Process(os.getpid()).memory_info().rss / 1024 / 1024

	print("RAM before:", ram_mb(), "MB")

	start = time.time()

	with open("demo.log") as f:
	    lines = f.readlines()   # <-- vấn đề ở đây

	errors = 0
	for line in lines:
	    if "ERROR" in line:
	        errors += 1

	print("Errors:", errors)
	print("Time:", time.time() - start)
	print("RAM after:", ram_mb(), "MB")
	`,
				b4: `import time
	import psutil
	import os

	def ram_mb():
	    return psutil.Process(os.getpid()).memory_info().rss / 1024 / 1024

	print("RAM before:", ram_mb(), "MB")

	start = time.time()
	errors = 0

	with open("demo.log") as f:
	    for line in f:          # iterator
	        if "ERROR" in line:
	            errors += 1

	print("Errors:", errors)
	print("Time:", time.time() - start)
	print("RAM after:", ram_mb(), "MB")
	`,
				b5: `import tracemalloc

	tracemalloc.start()

	with open("demo.log") as f:
	    lines = f.readlines()

	current, peak = tracemalloc.get_traced_memory()
	print(f"Current: {current/1024/1024:.2f} MB")
	print(f"Peak: {peak/1024/1024:.2f} MB")

	tracemalloc.stop()
	`,
				b6: `import tracemalloc

	tracemalloc.start()

	with open("demo.log") as f:
	    for line in f:
	        pass

	current, peak = tracemalloc.get_traced_memory()
	print(f"Current: {current/1024/1024:.2f} MB")
	print(f"Peak: {peak/1024/1024:.2f} MB")

	tracemalloc.stop()
	`,
				b7: `import time

start = time.time()
found = 0

with open("demo.log") as f:
    lines = f.readlines()

for line in lines:
    if "ERROR" in line:
        found += 1
    if found == 5:
        break

print("Time:", time.time() - start)
`,
				b8: `import time

start = time.time()
found = 0

with open("demo.log") as f:
    for line in f:
        if "ERROR" in line:
            found += 1
        if found == 5:
            break

print("Time:", time.time() - start)`,
				b9: `def count_down(n):
    print("Start")
    while n > 0:
        print("Yielding", n)
        yield n
        n -= 1
    print("Done")
gen = count_down(3)
next(gen)
next(gen)
`,
				b10: `def demo():
    print("A")
    yield 1
    print("B")
    yield 2
    print("C")
d = demo() # Tạo generator - ở đây generator chưa chạy
d.next() # Giờ mới chạy nè
`,
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

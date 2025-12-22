<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Decorators" addOnClass="text-left" markedAs="deco" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Concept:</b> <FilePath>Decorators</FilePath> cho phép bạn thay đổi hoặc mở rộng hành vi của một hàm/lớp mà
					không cần sửa code bên trong nó. <FilePath>Decorators</FilePath> là một hàm nhận vào một callable (
					<b>func</b> ) và trả về một callable ( <b>wrapper</b> ) khác.
				</p>

				<PageHeading text="Pseudo code:" addOnClass="text-left mt-3" markedAs="methods" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Cùng viết một pseudo code đơn giản để minh họa cách hoạt động của Decorators trong Python:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong ví dụ trên, <FilePath>my_decorator</FilePath> là một hàm decorator nhận vào một hàm ( <b>func</b> ) và
					trả về một hàm mới (<b>wrapper</b>) có thêm các hành động trước và sau khi gọi hàm gốc. Khi bạn gọi
					<FilePath>say_hi()</FilePath>, thực tế bạn đang gọi hàm <b>wrapper</b> đã được decorate.
				</p>
				<PageHeading text="Wrapper" addOnClass="text-left" markedAs="wr" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Chúng ta cần ghi nhớ:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>wrapper</FilePath> là hàm thay thế
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Sau khi decorate: say_hi không còn là hàm gốc, nó trỏ tới wrapper ( check <b>say_hi.__name__</b> ). Điều này
						khá là quan trọng để hiểu về cách hoạt động của decorators. Nếu chúng ta cần gọi hàm gốc, chúng ta phải gọi
						func() bên trong wrapper. hoặc dùng <b>functools.wraps</b> để giữ nguyên tham chiếu gốc.
						<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
					</li>
				</ul>
				<PageHeading text="Triển khai" addOnClass="text-left" markedAs="using" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta cùng triển khai một decorator để rõ hơn các bước:
				</p>
				<PageHeading text="1/ Xây dựng cấu trúc Decorator cơ bản" addOnClass="text-left" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Cấu trúc cơ bản là chúng ta tạo ra 1 hàm lớn, bên trong có hàm <FilePath>wrapper</FilePath> để thêm các chức
					năng:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="2/ Sử dụng Syntactic Sugar" addOnClass="text-left" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Thay vì viết my_func = my_decorator(my_func), Python cung cấp dấu @ đặt ngay trên đầu hàm để làm việc đó tự
					động.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />

				<PageHeading text="Decorator với tham số hàm" addOnClass="text-left" markedAs="param" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong quá trình sử dụng, chúng ta thường cần truyền tham số vào hàm gốc. Để làm được điều này, chúng ta sử
					dụng
					<FilePath>*args</FilePath> và <FilePath>**kwargs</FilePath> trong định nghĩa hàm
					<FilePath>wrapper</FilePath> để chuyển tiếp mọi tham số đến hàm gốc.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>*args</FilePath>: Nhận mọi tham số vị trí (positional arguments).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>**kwargs</FilePath>: Nhận mọi tham số từ khóa (keyword arguments).
					</li>
				</ul>
				<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />

				<PageHeading text="Decorator với tham số" addOnClass="text-left mt-3" markedAs="param" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ngoài ra, chúng ta cũng có thể tạo các decorator nhận tham số riêng. Để làm điều này, chúng ta cần tạo một hàm
					bên ngoài (decorator factory) nhận tham số và trả về một decorator thực sự.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />

				<PageHeading text="Bài tập" addOnClass="text-left mt-3" markedAs="param" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Thực hành xíu bài tập nhé.</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Bài 1: Decorator <FilePath>@slow_down(s)</FilePath> Viết một Decorator nhận vào tham số s (giây). Mỗi khi
						hàm được gọi, nó phải "ngủ" (time.sleep) đúng s giây trước khi thực thi. Ứng dụng để tránh việc spam API
						hoặc cào dữ liệu (Rate Limiting).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Bài 2: Decorator <FilePath>@withHTMLtag(name)</FilePath> Viết một Decorator nhận vào tên một thẻ HTML (ví
						dụ: "b", "i", "u"). Nó sẽ bọc kết quả trả về của hàm trong thẻ đó. <br />Ví dụ: input: "Hello" với thẻ "b"
						sẽ trả về "{{ `<b>Hello</b>` }}". Ứng dụng để tạo nội dung HTML động.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Bài 3: Decorator <FilePath>@check_security(level)</FilePath> Viết một Decorator nhận vào mức độ bảo mật
						(level) với 3 cấp độ <b>LOW (cho qua hết), MEDIUM (phải đăng nhập), HIGH (phải là admin)</b>, kiểm tra vai
						trò người dùng (role) trước khi cho phép thực thi hàm. Nếu vai trò không đủ, in ra thông báo từ chối. Ứng
						dụng để bảo vệ các chức năng nhạy cảm.
						<VCodeBlock :code="b7" highlightjs lang="python" theme="atom-one-dark" />
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
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import base from '../../../services/documentations';
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
					`**Decorators** là một công cụ mạnh mẽ trong Python, cho phép bạn mở rộng hoặc thay đổi hành vi của hàm/lớp mà không cần sửa code gốc.`,
					`Decorators hoạt động bằng cách nhận vào một callable (hàm/lớp) và trả về một callable khác, thường là một lớp vỏ bọc (wrapper) xung quanh hàm/lớp gốc.`,
					`Bạn có thể sử dụng cú pháp @ để áp dụng decorators một cách dễ dàng và trực quan.`,
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
				b1: `def my_decorator(func):
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper

def say_hi():
  print("hello")
# Dùng decorator
say_hi = my_decorator(say_hi)
say_hi()
`,
				b2: `from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper
`,
				b3: `def my_decorator(func):
    def wrapper():
        print("--- Chuẩn bị thực thi hàm... ---")
        func() # Gọi hàm gốc
        print("--- Thực thi xong! ---")
    return wrapper # Trả về lớp vỏ bọc`,
				b4: `@my_decorator
def say_hello():
    print("Hello World!")

say_hello()`,
				b5: `from functools import wraps
def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"call {func.__name__}")
        print(f"Tham số truyền vào: args={args}, kwargs={kwargs}")
        return func(*args, **kwargs)
    return wrapper
		
@log_call
def add(a, b, key= None):
    if key:
        print(f"key = {key}")
    return a + b

add(2, 3, key="value")`,
				b6: `from functools import wraps

def repeat(num_times):
    """Decorator Factory: Nhận vào số lần cần lặp."""
    def decorator_repeat(func):
        """Decorator thực sự: Nhận vào hàm gốc."""
        @wraps(func)
        def wrapper(*args, **kwargs):
            """Wrapper: Thực thi logic lặp."""
            result = None
            for i in range(num_times):
                print(f"--- Lần lặp thứ {i + 1} của hàm '{func.__name__}' ---")
                result = func(*args, **kwargs)
            return result # Trả về kết quả của lần chạy cuối cùng
        return wrapper
    return decorator_repeat

# Cách sử dụng: truyền tham số trực tiếp vào
@repeat(num_times=3)
def chao_buoi_sang(ten):
    print(f"Xin chào, {ten}!")

chao_buoi_sang("Pythonista")`,
				b7: `guest = {"logged_in": False}
admin = {"logged_in": True, "role": "admin"}
				
@check_security(level="HIGH")
def xoa_nguoi_dung(user_role, target_user_email):
    return f"✅ Đã xóa người dùng {target_user_email}."

@check_security(level="MEDIUM")
def xem_thong_tin_noi_bo(user_role):
    return "✅ Đây là thông tin nội bộ - phải đăng nhập."
		
@check_security(level="LOW")
def xem_thong_tin(user_role):
    return "✅ Đây là thông tin công khai."

# Thử nghiệm
print(xoa_nguoi_dung(guest, "hacker@gmail.com")) # Từ chối
print(xoa_nguoi_dung(admin, "hacker@gmail.com")) # Thành công
print(xem_thong_tin_noi_bo(admin)) # Thành công
print(xem_thong_tin(guest))              # Thành công`,
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

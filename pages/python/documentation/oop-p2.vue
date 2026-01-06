<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Abstraction" addOnClass="text-left" markedAs="oop" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Tính trừu tượng là nguyên lý OOP cho phép:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Che giấu chi tiết cài đặt phức tạp
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Chỉ phơi bày những hành vi (behavior) cần thiết cho người sử dụng
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nói cách khác: Người dùng chỉ biết “làm được gì”, không cần biết “làm như thế nào”.
					<br />
					Ví dụ đời thực:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Bạn lái xe: chỉ cần biết đạp ga, phanh, đánh lái
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Bạn không cần biết động cơ đốt trong vận hành ra sao
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-0 leading-8">Tại sao chúng ta cần Abstraction:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Giảm độ phức tạp của hệ thống</b>: Người dùng không cần quan tâm đến chi tiết bên trong, giúp họ tập
						trung vào việc sử dụng đối tượng một cách hiệu quả.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Ràng buộc (Enforcement)</b>: Nó đóng vai trò như một bản hợp đồng. Nếu bạn kế thừa từ lớp trừu tượng, bạn
						bắt buộc phải thực hiện các phương thức mà lớp đó yêu cầu.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Giảm sự phụ thuộc (Decoupling)</b>: Giúp hệ thống linh hoạt, dễ thay đổi logic bên dưới mà không ảnh
						hưởng đến code đang sử dụng đối tượng đó.
					</li>
				</ul>
				<PageHeading text="Thành phần" addOnClass="text-left" markedAs="list" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong Python, các thành phần được sử dụng để thực hiện Abstraction bao gồm:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Abstract Class (Lớp trừu tượng)
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Abstract Method (Phương thức trừu tượng)
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Interface (không có keyword riêng, mô phỏng bằng abstract class)
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Duck Typing (trừu tượng hành vi, không cần kế thừa)
					</li>
				</ul>
				<PageHeading text="Abstract Class" addOnClass="text-left" markedAs="st" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Abstract Class là lớp không thể khởi tạo đối tượng trực tiếp, mà chỉ dùng làm khuôn mẫu cho các lớp con, chúng
					có thể chứa Method đã implement và Method chưa implement (abstract method).
				</p>

				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>ABC</FilePath>: Lớp cha phải kế thừa từ lớp này để trở thành lớp trừu tượng.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>@abstractmethod</FilePath>: Một decorator để đánh dấu phương thức đó là "trừu tượng" (chỉ có tên,
						không có nội dung). Mọi class kế thừa phải override phương thức này.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					<b>Bài toán ví dụ:</b> Hệ thống Thanh toán (Payment System)
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Vấn đề:</b> Bạn đang xây dựng một website bán hàng. Bạn có nhiều phương thức thanh toán: Thẻ tín dụng
						(Credit Card), Ví điện tử (Momo), Chuyển khoản (Bank Transfer).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Yêu cầu:</b> Mọi phương thức thanh toán đều phải có hàm process_payment(), nhưng cách xử lý của mỗi cái
						là hoàn toàn khác nhau.
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="Polymorphism" addOnClass="text-left mt-4" markedAs="polymo" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tính đa hình (Polymorphism) là khả năng của các đối tượng thuộc các lớp khác nhau có thể được xử lý thông qua
					cùng một giao diện (interface) chung. Điều này cho phép các đối tượng có thể được sử dụng thay thế cho nhau mà
					không cần biết đối tượng cụ thể là gì.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Giúp giảm sự phụ thuộc (Decoupling): Giúp hệ thống linh hoạt, dễ thay đổi logic bên dưới mà không ảnh hưởng
						đến code đang sử dụng đối tượng đó.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Người dùng hàm không cần biết đối tượng cụ thể là gì, chỉ cần biết nó có phương thức cần thiết.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ví dụ: Hàm <FilePath>start_device(device)</FilePath> không quan tâm đối tượng truyền vào là
						<FilePath>Speaker</FilePath>, <FilePath>TV</FilePath> hay <FilePath>Radio</FilePath>, miễn là đối tượng đó
						có phương thức <FilePath>play()</FilePath>.
					</li>
				</ul>
				<VCodeBlock :code="b7" highlightjs lang="python" theme="atom-one-dark" />

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
	import { FilePath } from '../../../.nuxt/components';
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
					`**Abstraction** là nguyên lý OOP giúp che giấu chi tiết phức tạp và chỉ phơi bày hành vi cần thiết cho người dùng.`,
					`Sử dụng **Abstract Class** và **Abstract Method** để định nghĩa các khuôn mẫu mà các lớp con phải tuân theo.`,
					`Abstraction giúp giảm độ phức tạp, ràng buộc các lớp con phải triển khai các phương thức quan trọng, và giảm sự phụ thuộc trong hệ thống.`,
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
				b1: `class Animal(ABC):

@abstractmethod
def make_sound(self):
		pass`,
				b2: `from abc import ABC, abstractmethod

# 1. Định nghĩa Lớp trừu tượng (Interface/Contract)
class Payment(ABC):
    @abstractmethod
    def process_payment(self, amount):
        """Phương thức này bắt buộc các lớp con phải tự triển khai."""
        pass

    def print_receipt(self, amount):
        """Lớp trừu tượng vẫn có thể có các phương thức thông thường."""
        print(f"--- HÓA ĐƠN: Đã thanh toán {amount} VNĐ ---")

# 2. Triển khai các lớp cụ thể (Concrete Classes)
class CreditCardPayment(Payment):
    def process_payment(self, amount):
        print(f"Đang kết nối cổng Visa/MasterCard để trừ {amount} VNĐ...")

class MomoPayment(Payment):
    def process_payment(self, amount):
        print(f"Đang tạo mã QR Momo cho số tiền {amount} VNĐ...")

# 3. Sử dụng
# payment = Payment() # Dòng này sẽ gây lỗi: Can't instantiate abstract class Payment

def thanh_toan_gio_hang(phuong_thuc: Payment, so_tien):
    # Người dùng hàm này không cần biết 'phuong_thuc' là gì, 
    # chỉ cần biết nó CÓ hàm process_payment()
    phuong_thuc.process_payment(so_tien)
    phuong_thuc.print_receipt(so_tien)

# Chạy thử
hinh_thuc_momo = MomoPayment()
thanh_toan_gio_hang(hinh_thuc_momo, 500000)`,
				b3: `class BankAccount:
    def __init__(self, chu_tk, so_du_ban_dau):
        self.chu_tk = chu_tk
        self.__so_du = so_du_ban_dau # Private attribute

    def gui_tien(self, so_tien):
        if so_tien > 0:
            self.__so_du += so_tien
            print(f"Đã gửi {so_tien}. Số dư hiện tại: {self.__so_du}")
        else:
            print("Số tiền gửi không hợp lệ!")

    def rut_tien(self, so_tien):
        if 0 < so_tien <= self.__so_du:
            self.__so_du -= so_tien
            return so_tien
        print("Giao dịch thất bại: Số dư không đủ!")
        return 0

    # Getter để xem số dư (không cho sửa)
    def xem_so_du(self):
        return self.__so_du

# Thử nghiệm
acc = BankAccount("Anh Tuấn", 1000)
acc.gui_tien(500)
print(f"Số dư bảo mật: {acc.xem_so_du()}") # OK! Sử dụng getter để truy cập
print(f"Số dư bảo mật: {acc.__so_du}") # LỖI! Không thể truy cập trực tiếp`,
				b4: `class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def get_details(self):
        return f"Nhân viên: {self.name} | Lương: {self.salary}"

class Manager(Employee):
    def __init__(self, name, salary, bonus):
        # Gọi hàm khởi tạo của lớp cha để gán name và salary
        super().__init__(name, salary) 
        self.bonus = bonus

    # Overriding phương thức get_details
    def get_details(self):
        # Gọi lại kết quả từ cha và cộng thêm thông tin bonus
        base_info = super().get_details()
        return f"{base_info} | Thưởng: {self.bonus}"

# Thực thi
mgr = Manager("Quang Trần", 2000, 500)
print(mgr.get_details()) 
# Output: Nhân viên: Quang Trần | Lương: 2000 | Thưởng: 500`,
				b5: ``,
				b6: `class A:
    def greet(self): print("Hello từ A")

class B(A):
    def greet(self): print("Hello từ B")

class C(A):
    def greet(self): print("Hello từ C")

class D( C, B ):
    pass

d_obj = D()
d_obj.greet() # Python sẽ chọn B hay C?
print(D.__mro__) # Kết quả: Là thứ tự tìm kiếm methods`,
				b7: `class Speaker:
    def play(self):
        return "Loa đang phát nhạc: Bass cực mạnh!"

class TV:
    def play(self):
        return "TV đang chiếu phim: Âm thanh vòm!"

class Radio:
    def play(self):
        return "Radio đang phát tin tức: Âm thanh Mono."

# Hàm đa hình: không quan tâm 'device' là gì, miễn là có hàm play()
def start_device(device):
    print(device.play())

# Sử dụng
devices = [Speaker(), TV(), Radio()]
for d in devices:
    start_device(d)`,
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

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Object-Oriented Programming (OOP)" addOnClass="text-left" markedAs="oop" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta đều đã quen với lập trình hướng thủ tục, nơi chúng ta viết các hàm để thực hiện các tác vụ cụ thể.
					Tuy nhiên, những hạn chế của phương pháp này cũng rất rõ ràng:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dữ liệu và hành vi tách rời
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Khó mở rộng khi hệ thống lớn
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dễ phát sinh lỗi khi nhiều hàm cùng thao tác trên dữ liệu
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Lập trình hướng đối tượng (OOP) ra đời để giải quyết những vấn đề này bằng cách kết hợp dữ liệu và hành vi vào
					trong các đối tượng (objects). Mỗi đối tượng là một thực thể riêng biệt, có trạng thái (dữ liệu) và hành vi
					(phương thức). Điều này giúp tổ chức mã nguồn tốt hơn, dễ bảo trì và mở rộng.
					<br />Chúng ta sẽ cùng tìm hiểu về 2 khái niệm cốt lõi trong OOP: <b>Lớp (Class)</b> và
					<b>Đối tượng (Object)</b>.
				</p>
				<PageHeading text="Class" addOnClass="text-left" markedAs="c" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Concept:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Class là một khuôn mẫu logic mô tả một loại đối tượng trong thế giới thực
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Nó trả lời câu hỏi: "Một đối tượng thuộc loại này có những đặc điểm và hành vi gì?"
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Class không phải là dữ liệu cụ thể, mà là định nghĩa.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Kết luận: Class là <b>Bản thiết kế (Blueprint)</b>. Trên bản thiết kế có ghi xe gồm những bộ phận gì
						<b>properties (thuộc tính)</b> và chạy như thế nào <b>methods - (phương thức)</b>. Bản thân bản thiết kế
						không chạy được.
					</li>
				</ul>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="cs" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Để định nghĩa một Class, ta dùng từ khóa <FilePath>class</FilePath>.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>__init__</FilePath>: còn được gọi là <b>constructor</b> - phương thức khởi tạo, được gọi tự động
						để gán các giá trị ban đầu khi một đối tượng mới được tạo từ lớp.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>self</FilePath>: đại diện cho chính đối tượng đó.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>so_banh_xe</FilePath>: chính là thuộc tính lớp (class attribute) - dùng chung cho tất cả các đối
						tượng của lớp này.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>khoi_dong</FilePath>: là một phương thức (method) - hành động mà đối tượng có thể thực hiện.
					</li>
				</ul>
				<PageHeading text="Attributes" addOnClass="text-left" markedAs="ca" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">Trong Class có hai loại thuộc tính chính:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						<FilePath>Instance Attribute</FilePath>:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phạm vi: Riêng biệt cho mỗi đối tượng.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Cách truy cập: <FilePath>self.ten_thuoc_tinh</FilePath>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						<FilePath>Class Attribute</FilePath>:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Phạm vi: Dùng chung cho tất cả đối tượng của lớp đó.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Cách truy cập: <FilePath>ClassName.ten_thuoc_tinh</FilePath>
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="Method" addOnClass="text-left" markedAs="cm" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Sử dụng <FilePath>@Decorator</FilePath> của bài trước, chúng ta có 3 loại methods chính trong python:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>Instance Method</FilePath>: Nhận self làm tham số đầu tiên. Dùng để thay đổi dữ liệu của đối
						tượng.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>Class Method (@classmethod)</FilePath>: Nhận <b>cls</b> (lớp) làm tham số. Dùng để thao tác với
						các thuộc tính của lớp.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>Static Method (@staticmethod)</FilePath>: Không nhận <b>self</b> hay <b>cls</b>. Nó giống như một
						hàm bình thường nhưng được đặt trong class cho gọn.
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="Encapsulation" addOnClass="text-left" markedAs="encap" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Đóng gói (Encapsulation) là một nguyên tắc quan trọng trong OOP, nhằm bảo vệ dữ liệu bên trong đối tượng khỏi
					sự truy cập trực tiếp từ bên ngoài. Điều này giúp duy trì tính toàn vẹn của dữ liệu và ngăn ngừa các thay đổi
					không mong muốn.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Trong Python, không có từ khóa <b>private</b> như Java/C++, nhưng chúng ta dùng Quy ước dấu gạch dưới:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Public</b>: <FilePath>name</FilePath> (Truy cập tự do từ bên ngoài).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Protected</b>: <FilePath>_name</FilePath> (chỉ nên dùng trong nội bộ lớp và lớp con).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Private</b>: <FilePath>__name</FilePath> (Mang tính bảo mật cao hơn, Python sẽ đổi tên biến này để tránh
						truy cập trực tiếp).
					</li>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						<b>Bài toán thực tế:</b> Hệ thống tài khoản ngân hàng
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Vấn đề</b>: Không được để người dùng tự ý sửa <FilePath>so_du = 999999999</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Giải pháp</b>: Để <FilePath>__so_du</FilePath> là private và dùng hàm nội bộ để nạp/rút tiền.
					</li>
				</ul>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />

				<PageHeading text="Inheritance" addOnClass="text-left mt-3" markedAs="inher" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Kế thừa (Inheritance) là một tính năng quan trọng trong OOP, cho phép một lớp con (subclass) thừa hưởng các
					thuộc tính và phương thức từ một lớp cha (superclass). Điều này giúp tái sử dụng mã nguồn và tạo ra các cấu
					trúc phân cấp trong hệ thống.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						Kế thừa giúp ta định nghĩa một lớp dựa trên một lớp đã có sẵn.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Lớp cha (Parent/Base Class)</b>: Chứa các đặc điểm chung nhất.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Lớp con (Child/Derived Class)</b>: Thừa hưởng từ cha và bổ sung các đặc điểm riêng biệt.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Quy tắc vàng: Một lớp con phải có mối quan hệ "là một" (is-a) với lớp cha. Ví dụ:
						<FilePath>Warrior</FilePath> (Chiến binh) is-a <FilePath>Character</FilePath> (Nhân vật trong game).
					</li>
				</ul>
				<PageHeading text="Method Overriding & Hàm super" addOnClass="text-left mt-3" markedAs="mor" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					<b>Method Overriding</b>: Lớp con có thể định nghĩa lại một phương thức đã có ở lớp cha để phù hợp với logic
					riêng của nó. Trong khi Overriding, đôi khi ta không muốn thay thế hoàn toàn mà chỉ muốn bổ sung thêm logic
					vào phương thức của cha. <FilePath>super()</FilePath> cho phép ta gọi các phương thức của lớp cha từ lớp con.
					<br /><br />
					Ví dụ: Bài toán Hệ thống quản lý nhân sự
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Bài toán:</b> Có lớp <FilePath>Employee</FilePath> cho Nhân viên toàn công ty. Nhân viên nào cũng có
						lương cơ bản. Nhưng Quản lý (Manager) thì có thêm tiền thưởng (bonus).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Giải pháp:</b> Dùng <FilePath>super()</FilePath> để tận dụng lại hàm tính lương của lớp cha.
					</li>
				</ul>
				<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						Python linh hoạt hơn nhiều ngôn ngữ khác (như Java) vì nó hỗ trợ nhiều kiểu kế thừa:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Single Inheritance (Kế thừa đơn):</b> Một con - Một cha.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Multilevel Inheritance (Kế thừa đa cấp):</b> Cháu kế thừa Cha, Cha kế thừa Ông.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Multiple Inheritance (Đa kế thừa):</b>Một con kế thừa từ nhiều cha cùng lúc.
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="Method Resolution Order" addOnClass="text-left mt-3" markedAs="mro" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Nhưng khi sử dụng đa kế thừa, cần cẩn thận với <b>Diamond Problem</b> - khi hai lớp cha có cùng một lớp ông,
					dẫn đến nhầm lẫn trong việc xác định phương thức nào sẽ được gọi. Để xử lý vấn đề này, chúng ta có khái niệm
					<b>Method Resolution Order (MRO)</b> trong Python, xác định thứ tự tìm kiếm phương thức trong đa kế thừa.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Quy tắc cơ bản: <b>Từ trái sang phải, từ dưới lên trên</b>.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Bạn có thể kiểm tra thứ tự này bằng thuộc tính <FilePath>__mro__</FilePath> hoặc hàm
						<FilePath>mro()</FilePath>.
					</li>
				</ul>
				<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />
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
					`<strong>Class</strong> là bản thiết kế (blueprint) để tạo ra các <strong>Object</strong> (đối tượng). Class định nghĩa các thuộc tính (properties) và phương thức (methods) mà các đối tượng của nó sẽ có.`,
					`Có <b>hai</b> loại thuộc tính chính trong Class: <strong>Instance Attributes</strong> (riêng cho từng đối tượng) và <strong>Class Attributes</strong> (dùng chung cho tất cả đối tượng).`,
					`Có <b>ba</b> loại phương thức trong Class: <strong>Instance Methods</strong> (thao tác với dữ liệu đối tượng), <strong>Class Methods</strong> (thao tác với dữ liệu lớp) và <strong>Static Methods</strong> (hàm bình thường trong class).`,
					`<strong>Encapsulation</strong> (đóng gói) giúp bảo vệ dữ liệu bên trong đối tượng khỏi truy cập trực tiếp từ bên ngoài, thường sử dụng quy ước dấu gạch dưới để biểu thị mức độ truy cập (public, protected, private).`,
					`<strong>Inheritance</strong> (kế thừa) cho phép một lớp con thừa hưởng các thuộc tính và phương thức từ một lớp cha, giúp tái sử dụng mã nguồn và tạo cấu trúc phân cấp.`,
					`<strong>Method Overriding</strong> cho phép lớp con định nghĩa lại phương thức của lớp cha để phù hợp với logic riêng của nó. Hàm <code>super()</code> được sử dụng để gọi phương thức của lớp cha từ lớp con.`,
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
				b1: `class Car:
    # Thuộc tính lớp (Class Attribute) - Dùng chung cho mọi chiếc xe
    so_banh_xe = 4

    def __init__(self, thuong_hieu, mau_sac):
        # Thuộc tính đối tượng (Instance Attribute) - Riêng cho từng chiếc xe
        self.thuong_hieu = thuong_hieu
        self.mau_sac = mau_sac

    # Phương thức (Method) - Hành động của đối tượng
    def khoi_dong(self):
        print(f"Chiếc xe {self.thuong_hieu} màu {self.mau_sac} đang nổ máy... Vroom!")
`,
				b2: `class Student:
    school_name = "Đại học Thuỷ Lợi" # Class attribute

    def __init__(self, name):
        self.name = name # Instance attribute

    # Instance Method
    def introduce(self):
        print(f"Tôi là {self.name}, sinh viên trường {self.school_name}")

    # Class Method
    @classmethod
    def change_school(cls, new_name):
        cls.school_name = new_name

    # Static Method
    @staticmethod
    def is_legal_age(age):
        return age >= 18
`,
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

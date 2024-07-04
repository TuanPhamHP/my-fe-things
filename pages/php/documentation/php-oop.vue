<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng học về OOP - Object-Oriented Programming trong PHP.
				</p>

				<PageHeading text="OOP" addOnClass="text-left" markedAs="php-oop" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Lập trình hướng đối tượng (OOP - Object-Oriented Programming) là một trong những phương pháp lập trình phổ
					biến và mạnh mẽ, và PHP hỗ trợ rất tốt cho việc này. Trong OOP, chúng ta tổ chức mã nguồn thành các đối tượng
					(objects), mỗi đối tượng là một thực thể của một lớp (class).
					<br />Tiếp theo là một số khái niệm cơ bản về OOP trong PHP:
				</p>
				<PageHeading text="Class và Object" addOnClass="text-left" markedAs="php-class-and-object" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trước hết, chúng ta sẽ làm rõ hai đối tượng chính trong OOP rồi sau đó sẽ tới các đặc tính của OOP.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>1 - Lớp (Class):</b>
					<br />
					Nó định nghĩa các thuộc tính (properties) và phương thức (methods) mà đối tượng sẽ có. Ngoài ra, tại class
					chúng ta sẽ quyết định được loại properties và methods của đối tượng như <b>`private, public, static ...`</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>2- Đối tượng (Object):</b>
					<br />
					Là một thực thể (instance) của một lớp. Đối tượng có thể truy cập các thuộc tính và phương thức của lớp. tuỳ
					thuộc vào loại chúng được khai báo. Ngoài ra, các đối tượng sẽ kế thừa các thuộc tính của class. Để tạo ra một
					instance từ một class thì ta sẽ sử dụng keyword <b>`new`</b> với class đó.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />

				<PageHeading text="Tính kế thừa (Inheritance)" addOnClass="text-left mt-5" markedAs="php-inherit" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Inheritance:</b>
					<br />
					Một class có thể kế thừa các thuộc tính và phương thức từ một class khác. Điều này giúp tăng tính tái sử dụng
					và tăng tính linh hoạt.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />

				<PageHeading
					text="Tính đóng gói (Encapsulation)"
					addOnClass="text-left mt-5"
					markedAs="php-encapsulation"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Encapsulation:</b>
					<br />
					Tính đóng gói cung cấp một giao diện công khai để tương tác với đối tượng đó, như vậy nó giúp bảo vệ dữ liệu
					bên trong đối tượng và chỉ cho phép truy cập và sửa đổi dữ liệu đó thông qua các phương thức được định nghĩa
					trong lớp. Trong PHP, chúng ta tạo ra các mức độ truy cập như sau: <b>`private, public, protected`</b>
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="tomorrow-night-bright" />

				<PageHeading
					text="Tính đa hình (Polymorphism)"
					addOnClass="text-left mt-5"
					markedAs="php-polymorphism"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Polymorphism:</b>
					<br />
					Tính đa hình cho phép các phương thức trong các lớp khác nhau có cùng tên nhưng thực hiện các hành động khác
					nhau. Từ đó giúp ta định nghĩa sớm các phương thức chung cần thiết nhưng lại đảm bảo được tính riêng của các
					class.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<PageHeading
					text="Tính trừu tượng (Abstraction)"
					addOnClass="text-left mt-5"
					markedAs="php-abstraction"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Abstraction:</b>
					<br />
					Lớp trừu tượng là một lớp không thể tạo đối tượng từ nó, chỉ có thể kế thừa. Nó có thể chứa các phương thức
					trừu tượng (phương thức không có thân hàm) mà các lớp con phải triển khai. Nói cách khác, một lớp trừu tượng
					được ta tạo ra khi muốn định nghĩa sẵn các method chung cho các lớp con của nó mà không cần phải khai báo cụ
					thể nội dung method đó.
					<br />
					Như vậy Abstraction là đơn giản hóa các đối tượng phức tạp bằng cách chỉ hiển thị các thuộc tính và phương
					thức cần thiết, trong khi ẩn đi các chi tiết không cần thiết. Điều này giúp tập trung vào những gì một đối
					tượng có thể làm, thay vì cách nó thực hiện điều đó.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />
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
				b1: `class Person { // khởi tạo class
    public $name;         // public
    protected $age;       // protected
    private $password;    // private
    
    public function setPassword($password) {
        $this->password = $password;
    }
    
    public function getPassword() {
        return $this->password;
    }
}

$person = new Person(); // $person là Object - 1 instance của class 'Person', được tạo ra bằng cách dùng keyword new
$person->name = "John"; // OK
// $person->age = 25;   // Lỗi, không thể truy cập protected property từ bên ngoài
$person->setPassword("123456");
echo $person->getPassword();  // Output: 123456
`,
				b2: `class Animal {
    public function makeSound() {
        echo "Animal sound";
    }
}

class Dog extends Animal {
    public function makeSound() {
        echo "Bark";
    }
}

$dog = new Dog();
$dog->makeSound();  // Output: Bark`,
				b3: `class Shape {
    public function draw() {
        echo "Drawing a shape";
    }
}

class Circle extends Shape {
    public function draw() {
        echo "Drawing a circle";
    }
}

class Square extends Shape {
    public function draw() {
        echo "Drawing a square";
    }
}

$shapes = [new Circle(), new Square()];

foreach ($shapes as $shape) {
    $shape->draw();  // Output: Drawing a circle, Drawing a square
}
`,
				b4: `abstract class Animal {
    abstract public function makeSound();

    public function sleep() {
        echo "Sleeping...";
    }
}

class Dog extends Animal {
    public function makeSound() {
        echo "Bark";
    }
}

class Cat extends Animal {
    public function makeSound() {
        echo "Meow";
    }
}

$dog = new Dog();
$dog->makeSound();  // Output: Bark
$dog->sleep();      // Output: Sleeping...

$cat = new Cat();
$cat->makeSound();  // Output: Meow
$cat->sleep();      // Output: Sleeping...
`,
				b5: `class Person { // khởi tạo class
    public $name;         // public
    protected $age;       // protected
    private $password;    // private
}

$person = new Person();
$person->name = "John"; // OK
// $person->age = 25;   // Lỗi, không thể truy cập protected property từ bên ngoài
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z

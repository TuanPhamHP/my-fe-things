<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="OOP trong PHP" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					OOP (Object-Oriented Programming) tổ chức code thành các đối tượng, mỗi đối tượng kết hợp dữ liệu và hành
					vi liên quan. PHP hỗ trợ đầy đủ OOP và đây là nền tảng của toàn bộ Laravel. Bài này đi sâu vào 4 tính chất
					cốt lõi, Interface, Magic Methods và Method Chaining.
				</p>

				<PageHeading text="Tính kế thừa (Inheritance)" addOnClass="text-left" markedAs="inheritance" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Class con (<b>subclass</b>) kế thừa toàn bộ <FilePath>public</FilePath> và
					<FilePath>protected</FilePath> property/method từ class cha, đồng thời có thể <b>override</b> (ghi đè) để
					thay đổi hành vi. Dùng <FilePath>parent::method()</FilePath> để gọi lại phiên bản của class cha bên trong
					override.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Tính đóng gói (Encapsulation)" addOnClass="text-left" markedAs="encapsulation" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Encapsulation ẩn dữ liệu bên trong, chỉ cho phép tương tác qua các method được kiểm soát. Điều này ngăn
					bên ngoài đưa dữ liệu không hợp lệ vào — logic validation nằm trong class, không rải rác khắp nơi.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Tính đa hình (Polymorphism)" addOnClass="text-left" markedAs="polymorphism" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Các object thuộc class khác nhau nhưng cùng kế thừa một class cha có thể được xử lý thống nhất qua cùng
					một interface. Kết hợp với <FilePath>instanceof</FilePath> để kiểm tra kiểu cụ thể khi cần.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Tính trừu tượng (Abstraction)" addOnClass="text-left" markedAs="abstraction" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Abstract class</b> định nghĩa khung chung (gồm cả code dùng chung) nhưng bắt buộc subclass phải tự
					implement các phần còn trống (<FilePath>abstract method</FilePath>). Không thể khởi tạo trực tiếp abstract
					class.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Interface" addOnClass="text-left" markedAs="interface" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Interface chỉ định nghĩa <b>contract</b> — danh sách method mà class phải implement — không chứa code
					thực thi. Khác với <FilePath>extends</FilePath> chỉ được kế thừa 1 class, một class có thể
					<FilePath>implements</FilePath> nhiều interface cùng lúc.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />

				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-3">Abstract Class vs Interface</p>
					<div class="overflow-x-auto">
						<table class="w-full text-sm text-slate-900 dark:text-white">
							<thead>
								<tr class="border-b border-neutral-200 dark:border-gray-600">
									<th class="text-left py-2 pr-4 font-semibold"></th>
									<th class="text-left py-2 pr-4 font-semibold">Abstract Class</th>
									<th class="text-left py-2 font-semibold">Interface</th>
								</tr>
							</thead>
							<tbody class="space-y-1">
								<tr class="border-b border-neutral-200 dark:border-gray-700">
									<td class="py-2 pr-4 font-medium">Method body</td>
									<td class="py-2 pr-4">Có thể có</td>
									<td class="py-2">Không (chỉ signature)</td>
								</tr>
								<tr class="border-b border-neutral-200 dark:border-gray-700">
									<td class="py-2 pr-4 font-medium">Properties</td>
									<td class="py-2 pr-4">Có thể có</td>
									<td class="py-2">Không</td>
								</tr>
								<tr class="border-b border-neutral-200 dark:border-gray-700">
									<td class="py-2 pr-4 font-medium">Kế thừa</td>
									<td class="py-2 pr-4"><FilePath>extends</FilePath> 1 class</td>
									<td class="py-2"><FilePath>implements</FilePath> nhiều interface</td>
								</tr>
								<tr>
									<td class="py-2 pr-4 font-medium">Dùng khi</td>
									<td class="py-2 pr-4">Có code dùng chung + contract</td>
									<td class="py-2">Chỉ định nghĩa contract</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mt-3">
						Trong Laravel, <b>Contracts</b> (trong <FilePath>Illuminate/Contracts/</FilePath>) đều là interface — cho
						phép bạn swap implementation mà không đổi code phụ thuộc vào nó.
					</p>
				</div>

				<PageHeading text="Magic Methods" addOnClass="text-left" markedAs="magic-methods" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					PHP gọi tự động các method có tên bắt đầu bằng <FilePath>__</FilePath> trong các tình huống đặc biệt. Một
					số magic method hay gặp khi đọc source Eloquent và các framework PHP:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Method Chaining" addOnClass="text-left" markedAs="method-chaining" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Mỗi method <FilePath>return $this</FilePath> cho phép gọi method tiếp theo ngay trên kết quả — gọi là
					<b>Fluent Interface</b>. Laravel's Query Builder hoạt động theo đúng pattern này:
					<FilePath>->where()->orderBy()->limit()->get()</FilePath>.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="atom-one-dark" />

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
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				pagePagination: null,
				b1: `<?php
class Animal {
    public function __construct(public readonly string $name) {}

    public function makeSound(): string {
        return "{$this->name} tạo ra âm thanh";
    }
}

class Dog extends Animal {
    // Override: ghi đè method của class cha
    public function makeSound(): string {
        return parent::makeSound() . ' → Woof!';  // gọi lại phiên bản cha, rồi thêm vào
    }

    public function fetch(): string {
        return "{$this->name} bắt bóng!";
    }
}

$animal = new Animal('Mèo');
echo $animal->makeSound(); // Mèo tạo ra âm thanh

$dog = new Dog('Rex');
echo $dog->makeSound();    // Rex tạo ra âm thanh → Woof!
echo $dog->fetch();        // Rex bắt bóng!`,
				b2: `<?php
class BankAccount {
    private float $balance = 0;

    public function deposit(float $amount): void {
        if ($amount <= 0) {
            throw new InvalidArgumentException('Số tiền phải lớn hơn 0');
        }
        $this->balance += $amount;
    }

    public function withdraw(float $amount): void {
        if ($amount > $this->balance) {
            throw new RuntimeException('Số dư không đủ');
        }
        $this->balance -= $amount;
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$account = new BankAccount();
$account->deposit(500_000);
$account->withdraw(200_000);
echo $account->getBalance(); // 300000

// $account->balance = 9_999_999; // Fatal error — private, validation bị bypass`,
				b3: `<?php
class Shape {
    public function area(): float { return 0; }
}

class Circle extends Shape {
    public function __construct(private float $radius) {}
    public function area(): float { return M_PI * $this->radius ** 2; }
}

class Rectangle extends Shape {
    public function __construct(private float $w, private float $h) {}
    public function area(): float { return $this->w * $this->h; }
}

$shapes = [new Circle(5), new Rectangle(4, 6)];

foreach ($shapes as $shape) {
    echo round($shape->area(), 2);  // gọi cùng method, kết quả khác nhau: 78.54, 24

    // instanceof kiểm tra kiểu cụ thể khi cần xử lý riêng
    if ($shape instanceof Circle) {
        echo ' — hình tròn';
    }
    echo "\n";
}`,
				b4: `<?php
abstract class Payment {
    // Method này subclass BẮT BUỘC phải implement
    abstract public function process(float $amount): bool;

    // Method dùng chung — subclass thừa kế, không cần viết lại
    public function log(float $amount): void {
        echo "Xử lý thanh toán: {$amount} VND\n";
    }
}

class CreditCard extends Payment {
    public function process(float $amount): bool {
        $this->log($amount);
        return true; // logic thẻ tín dụng
    }
}

class BankTransfer extends Payment {
    public function process(float $amount): bool {
        $this->log($amount);
        return true; // logic chuyển khoản
    }
}

// new Payment(); // Lỗi — không thể khởi tạo abstract class

$payment = new CreditCard();
$payment->process(150_000); // Xử lý thanh toán: 150000 VND`,
				b5: `<?php
interface Printable {
    public function print(): void;  // chỉ signature, không có body
}

interface Exportable {
    public function export(string $format): string;
}

// implements nhiều interface — không thể làm với extends
class Invoice implements Printable, Exportable {
    public function __construct(private float $total) {}

    public function print(): void {
        echo "Hóa đơn: {$this->total} VND";
    }

    public function export(string $format): string {
        return match ($format) {
            'pdf' => 'Xuất PDF',
            'csv' => 'Xuất CSV',
            default => 'Format không hỗ trợ',
        };
    }
}

$invoice = new Invoice(299_000);
$invoice->print();                  // Hóa đơn: 299000 VND
echo $invoice->export('pdf');       // Xuất PDF
echo ($invoice instanceof Printable ? 'có thể in' : ''); // có thể in`,
				b6: `<?php
class User {
    private array $extra = [];

    public function __construct(public readonly string $name) {}

    // __toString: tự động gọi khi echo $object hoặc dùng object trong string context
    public function __toString(): string {
        return "User({$this->name})";
    }

    // __get: gọi khi đọc property không tồn tại (hoặc không accessible)
    public function __get(string $key): mixed {
        return $this->extra[$key] ?? null;
    }

    // __set: gọi khi gán vào property không tồn tại (hoặc không accessible)
    public function __set(string $key, mixed $value): void {
        $this->extra[$key] = $value;
    }
}

$user = new User('Tuấn');
echo $user;             // User(Tuấn) — __toString()

$user->role = 'admin';  // __set('role', 'admin')
echo $user->role;       // __get('role') → admin

echo $user->missing;    // __get('missing') → null`,
				b7: `<?php
class QueryBuilder {
    private string $table = '';
    private array $conditions = [];
    private ?int $limitVal = null;

    public function from(string $table): static {
        $this->table = $table;
        return $this;   // trả về $this để chain tiếp
    }

    public function where(string $condition): static {
        $this->conditions[] = $condition;
        return $this;
    }

    public function limit(int $n): static {
        $this->limitVal = $n;
        return $this;
    }

    public function build(): string {
        $sql = "SELECT * FROM {$this->table}";
        if ($this->conditions) {
            $sql .= ' WHERE ' . implode(' AND ', $this->conditions);
        }
        if ($this->limitVal !== null) {
            $sql .= " LIMIT {$this->limitVal}";
        }
        return $sql;
    }
}

$sql = (new QueryBuilder())
    ->from('users')
    ->where('age > 18')
    ->where('active = 1')
    ->limit(10)
    ->build();

echo $sql;
// SELECT * FROM users WHERE age > 18 AND active = 1 LIMIT 10`,
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

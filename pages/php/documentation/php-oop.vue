<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="OOP trong PHP" addOnClass="text-left mt-2" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					OOP (Object-Oriented Programming) tổ chức code thành các đối tượng, mỗi đối tượng kết hợp dữ liệu và hành vi
					liên quan. PHP hỗ trợ đầy đủ OOP và đây là nền tảng của toàn bộ Laravel. Bài này đi sâu vào 4 tính chất cốt
					lõi, Interface, Magic Methods và Method Chaining. Tất cả ví dụ xuyên suốt bài đều thuộc hệ thống
					<b>bán hàng online (e-commerce)</b> để dễ liên hệ thực tế.
				</p>

				<!-- ===================== 1. INHERITANCE ===================== -->
				<PageHeading
					text="1. Tính kế thừa (Inheritance)"
					addOnClass="text-left mt-2"
					markedAs="inheritance"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					Class con (<b>subclass</b>) kế thừa toàn bộ <FilePath>public</FilePath> và
					<FilePath>protected</FilePath> property/method từ class cha, đồng thời có thể <b>override</b> (ghi đè) để
					thay đổi hành vi.
				</p>
				<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white my-3 text-sm">
					<li>
						Dùng <FilePath>parent::__construct()</FilePath> khi subclass có constructor riêng — bắt buộc phải gọi để
						khởi tạo phần cha.
					</li>
					<li>
						Dùng <FilePath>parent::method()</FilePath> bên trong override để tái sử dụng kết quả của class cha rồi
						thêm vào, thay vì viết lại từ đầu.
					</li>
				</ul>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />

				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">
						Từ khoá <FilePath>final</FilePath>
					</p>
					<p class="text-slate-900 dark:text-white text-sm">
						<FilePath>final class Foo</FilePath> — không class nào được <FilePath>extends</FilePath> nó.
						<FilePath>final public function bar()</FilePath> — subclass không được override method đó. Dùng khi muốn
						đảm bảo hành vi không bị ghi đè (ví dụ: tính toán giá, logic bảo mật).
					</p>
				</div>

				<!-- ===================== 2. ENCAPSULATION ===================== -->
				<PageHeading
					text="2. Tính đóng gói (Encapsulation)"
					addOnClass="text-left mt-2"
					markedAs="encapsulation"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					Encapsulation ẩn dữ liệu bên trong, chỉ cho phép tương tác qua các method được kiểm soát. Logic validation
					nằm trong class — ngăn bên ngoài đưa dữ liệu không hợp lệ vào và tránh trạng thái lỗi rải rác khắp codebase.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 3. POLYMORPHISM ===================== -->
				<PageHeading
					text="3. Tính đa hình (Polymorphism)"
					addOnClass="text-left mt-2"
					markedAs="polymorphism"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					Các object thuộc class khác nhau nhưng cùng kế thừa một class cha có thể được xử lý thống nhất qua cùng một
					method. Code gọi không cần biết đây là loại discount nào — chỉ cần gọi <FilePath>apply()</FilePath>, mỗi class
					tự quyết định cách tính. Kết hợp với <FilePath>instanceof</FilePath> khi cần xử lý riêng theo kiểu cụ thể.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 4. ABSTRACTION ===================== -->
				<PageHeading
					text="4. Tính trừu tượng (Abstraction)"
					addOnClass="text-left mt-2"
					markedAs="abstraction"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Abstract class</b> định nghĩa khung chung: chứa code dùng chung (<FilePath>protected</FilePath> method) và
					bắt buộc subclass tự implement phần còn trống (<FilePath>abstract method</FilePath>). Không thể khởi tạo trực
					tiếp abstract class.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 5. INTERFACE ===================== -->
				<PageHeading text="5. Interface" addOnClass="text-left mt-2" markedAs="interface" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Interface chỉ định nghĩa <b>contract</b> — danh sách method mà class phải implement — không chứa code thực
					thi. Khác với <FilePath>extends</FilePath> chỉ được kế thừa 1 class, một class có thể
					<FilePath>implements</FilePath> nhiều interface cùng lúc. Type hint bằng interface giúp code linh hoạt — không
					cần biết class cụ thể, chỉ cần nó implements đúng contract.
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
							<tbody>
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

				<!-- ===================== 6. MAGIC METHODS ===================== -->
				<PageHeading text="6. Magic Methods" addOnClass="text-left mt-2" markedAs="magic-methods" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					PHP tự động gọi các method có tên bắt đầu bằng <FilePath>__</FilePath> trong các tình huống đặc biệt. Bốn
					magic method hay gặp khi đọc source Eloquent và các framework PHP:
				</p>
				<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white my-3 text-sm">
					<li><FilePath>__toString()</FilePath> — gọi khi dùng object trong string context (echo, concatenation).</li>
					<li><FilePath>__get($key)</FilePath> — gọi khi đọc property không tồn tại hoặc không accessible.</li>
					<li><FilePath>__set($key, $value)</FilePath> — gọi khi gán vào property không tồn tại.</li>
					<li><FilePath>__invoke($arg)</FilePath> — gọi khi dùng object như một function: <FilePath>$obj()</FilePath>.</li>
				</ul>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 7. METHOD CHAINING ===================== -->
				<PageHeading
					text="7. Method Chaining (Fluent Interface)"
					addOnClass="text-left mt-2"
					markedAs="method-chaining"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					Mỗi method <FilePath>return $this</FilePath> (hoặc <FilePath>return static</FilePath> để hỗ trợ subclass) cho
					phép gọi method tiếp theo ngay trên kết quả — gọi là <b>Fluent Interface</b>. Laravel's Query Builder hoạt
					động theo đúng pattern này:
					<FilePath>->where()->orderBy()->limit()->get()</FilePath>.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="atom-one-dark" />

				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">
						<FilePath>return $this</FilePath> vs <FilePath>return static</FilePath>
					</p>
					<p class="text-slate-900 dark:text-white text-sm">
						<FilePath>return $this</FilePath> trả về chính instance hiện tại. <FilePath>return static</FilePath> trả về
						kiểu của class <i>đang gọi</i> — khi subclass extends và chain method cha, kiểu trả về vẫn là subclass.
						Dùng <FilePath>static</FilePath> để builder có thể được extend mà không mất type.
					</p>
				</div>

				<!-- ===================== LUYỆN TẬP ===================== -->
				<PageHeading text="Luyện tập" addOnClass="text-left mt-2" markedAs="oop-practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					3 bài tập bên dưới tăng dần độ khó. Đọc yêu cầu, copy starter code, tự hoàn thiện phần
					<FilePath>TODO</FilePath>.
				</p>

				<!-- Bài 1 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							01
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Kế thừa — Vehicle & ElectricVehicle</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: Constructor Promotion, <FilePath>parent::__construct()</FilePath>, override với
						<FilePath>parent::method()</FilePath>.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Hoàn thiện <b>Vehicle</b>: Constructor Promotion (<FilePath>name</FilePath>,
							<FilePath>year</FilePath>, <FilePath>fuelType</FilePath>), method
							<FilePath>getInfo(): string</FilePath> trả về <FilePath>"[year] name (fuel: fuelType)"</FilePath>.
						</li>
						<li>
							Hoàn thiện <b>ElectricVehicle</b>: constructor gọi <FilePath>parent::__construct()</FilePath>, thêm
							<FilePath>batteryKwh (float)</FilePath>; override <FilePath>getInfo()</FilePath> dùng
							<FilePath>parent::getInfo()</FilePath> rồi thêm <FilePath>"(battery: Xkwh)"</FilePath>.
						</li>
						<li>
							Viết <FilePath>charge(float $addKwh): void</FilePath> — cộng thêm vào <FilePath>$batteryKwh</FilePath>.
						</li>
					</ul>
					<VCodeBlock :code="p1" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 2 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							02
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Abstract + Đa hình — TaxCalculator</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: <FilePath>abstract class</FilePath>, <FilePath>abstract method</FilePath>, polymorphism qua loop.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Viết <FilePath>abstract calculate(float $amount): float</FilePath> và
							<FilePath>abstract getName(): string</FilePath>.
						</li>
						<li>
							Viết <FilePath>getBreakdown(float $amount): string</FilePath> trong abstract class — dùng
							<FilePath>calculate()</FilePath> và <FilePath>getName()</FilePath> (code dùng chung).
						</li>
						<li>
							Implement <b>VATCalculator</b> (10%) và <b>ImportTaxCalculator</b> (20%): chỉ implement 2 abstract
							method, không cần viết lại <FilePath>getBreakdown()</FilePath>.
						</li>
					</ul>
					<VCodeBlock :code="p2" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 3 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							03
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Interface + Method Chaining — OrderReport</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: <FilePath>implements</FilePath> interface, <FilePath>return static</FilePath>, fluent builder,
						<FilePath>match</FilePath>.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							<FilePath>title(string $t): static</FilePath> — set tiêu đề, return $this.
						</li>
						<li>
							<FilePath>addRow(string $orderId, float $amount): static</FilePath> — thêm dòng vào
							<FilePath>$rows</FilePath>.
						</li>
						<li>
							<FilePath>export(string $format): string</FilePath>: <FilePath>'json'</FilePath> →
							<FilePath>json_encode([...])</FilePath>; <FilePath>'text'</FilePath> → chuỗi đọc được;
							<FilePath>default</FilePath> → ném <FilePath>InvalidArgumentException</FilePath>.
						</li>
					</ul>
					<VCodeBlock :code="p3" highlightjs lang="php" theme="atom-one-dark" />
				</div>

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

				// ── 1. INHERITANCE ──────────────────────────────────────────────
				b1: `<?php
class Product {
    public function __construct(
        protected readonly string $name,
        protected float $price,
        protected string $sku,
    ) {}

    public function getLabel(): string {
        return "[{$this->sku}] {$this->name} — {$this->price} VND";
    }
}

class PhysicalProduct extends Product {
    public function __construct(
        string $name,
        float $price,
        string $sku,
        private float $weightKg,
    ) {
        parent::__construct($name, $price, $sku);  // bắt buộc gọi constructor cha
    }

    // Override — thêm thông tin cân nặng vào label cha
    public function getLabel(): string {
        return parent::getLabel() . " ({$this->weightKg}kg)";
    }
}

class DigitalProduct extends Product {
    public function __construct(
        string $name,
        float $price,
        string $sku,
        private string $downloadUrl,
    ) {
        parent::__construct($name, $price, $sku);
    }

    public function getLabel(): string {
        return parent::getLabel() . ' [Digital Download]';
    }
}

$book = new PhysicalProduct('PHP 8 Handbook', 299_000, 'BOOK-001', 0.5);
echo $book->getLabel();
// [BOOK-001] PHP 8 Handbook — 299000 VND (0.5kg)

$course = new DigitalProduct('PHP OOP Course', 499_000, 'COURSE-001', 'https://cdn.example.com/course.zip');
echo $course->getLabel();
// [COURSE-001] PHP OOP Course — 499000 VND [Digital Download]`,

				// ── 2. ENCAPSULATION ────────────────────────────────────────────
				b2: `<?php
class Cart {
    private array $items = [];
    private float $discountPercent = 0;

    public function addItem(string $sku, int $qty, float $price): void {
        if ($qty <= 0) {
            throw new InvalidArgumentException('Số lượng phải lớn hơn 0');
        }
        $this->items[$sku] = ['qty' => $qty, 'price' => $price];
    }

    public function applyDiscount(float $percent): void {
        if ($percent < 0 || $percent > 100) {
            throw new InvalidArgumentException('Discount phải từ 0–100%');
        }
        $this->discountPercent = $percent;
    }

    public function getTotal(): float {
        $subtotal = array_sum(
            array_map(fn($item) => $item['qty'] * $item['price'], $this->items)
        );
        return $subtotal * (1 - $this->discountPercent / 100);
    }

    public function getItemCount(): int {
        return array_sum(array_column($this->items, 'qty'));
    }
}

$cart = new Cart();
$cart->addItem('BOOK-001', 2, 299_000);
$cart->addItem('COURSE-001', 1, 499_000);
$cart->applyDiscount(10);

echo $cart->getItemCount(); // 3
echo $cart->getTotal();     // 952200

// $cart->items = [];              // Fatal error — private, validation bị bypass
// $cart->applyDiscount(150);      // InvalidArgumentException`,

				// ── 3. POLYMORPHISM ──────────────────────────────────────────────
				b3: `<?php
class Discount {
    public function apply(float $total): float { return $total; }
    public function getLabel(): string { return 'Không giảm'; }
}

class PercentDiscount extends Discount {
    public function __construct(private float $percent) {}

    public function apply(float $total): float {
        return $total * (1 - $this->percent / 100);
    }

    public function getLabel(): string { return "-{$this->percent}%"; }
}

class FixedDiscount extends Discount {
    public function __construct(private float $amount) {}

    public function apply(float $total): float {
        return max(0, $total - $this->amount);
    }

    public function getLabel(): string { return "-{$this->amount} VND"; }
}

$discounts = [new PercentDiscount(10), new FixedDiscount(50_000)];
$orderTotal = 500_000;

foreach ($discounts as $d) {
    $after = $d->apply($orderTotal);
    echo $d->getLabel() . ': ' . number_format($after) . ' VND';
    // Code không cần biết đây là loại discount nào — chỉ gọi apply()

    if ($d instanceof PercentDiscount) {
        echo ' (áp dụng phần trăm)';
    }
}
// -10%: 450,000 VND (áp dụng phần trăm)
// -50000 VND: 450,000 VND`,

				// ── 4. ABSTRACTION ───────────────────────────────────────────────
				b4: `<?php
abstract class Notification {
    // Subclass BẮT BUỘC phải implement — không có body
    abstract public function send(string $to, string $message): bool;

    // Code dùng chung — subclass kế thừa, không cần viết lại
    protected function log(string $channel, string $to): void {
        echo "[{$channel}] Gửi tới: {$to}";
    }
}

class EmailNotification extends Notification {
    public function send(string $to, string $message): bool {
        $this->log('EMAIL', $to);
        // ... logic gửi email thực tế (SMTP, Mailgun, SES, ...)
        return true;
    }
}

class SmsNotification extends Notification {
    public function send(string $to, string $message): bool {
        $this->log('SMS', $to);
        // ... logic gửi SMS thực tế (Twilio, VNPT, ...)
        return true;
    }
}

// new Notification(); // Fatal error — không thể khởi tạo abstract class

$channels = [new EmailNotification(), new SmsNotification()];
foreach ($channels as $notif) {
    $notif->send('customer@example.com', 'Đơn hàng #ORD-001 đã được xác nhận!');
}
// [EMAIL] Gửi tới: customer@example.com
// [SMS] Gửi tới: customer@example.com`,

				// ── 5. INTERFACE ─────────────────────────────────────────────────
				b5: `<?php
interface Printable {
    public function print(): void;  // chỉ signature, không có body
}

interface Exportable {
    public function export(string $format): string;
}

// implements nhiều interface — không thể làm với extends
class Invoice implements Printable, Exportable {
    public function __construct(
        private string $orderId,
        private float $total,
    ) {}

    public function print(): void {
        echo "Hóa đơn #{$this->orderId}: " . number_format($this->total) . ' VND';
    }

    public function export(string $format): string {
        return match ($format) {
            'pdf' => "Xuất PDF hóa đơn #{$this->orderId}",
            'csv' => "Xuất CSV hóa đơn #{$this->orderId}",
            default => throw new InvalidArgumentException("Format không hỗ trợ: {$format}"),
        };
    }
}

// Type hint bằng interface — chỉ cần implements Printable, không quan tâm class cụ thể
function sendToAccounting(Printable $doc): void {
    $doc->print();
}

$invoice = new Invoice('ORD-2024-001', 1_299_000);
$invoice->print();                  // Hóa đơn #ORD-2024-001: 1,299,000 VND
echo $invoice->export('pdf');       // Xuất PDF hóa đơn #ORD-2024-001
sendToAccounting($invoice);         // works — Invoice implements Printable
echo ($invoice instanceof Exportable ? 'có thể export' : '');  // có thể export`,

				// ── 6. MAGIC METHODS ─────────────────────────────────────────────
				b6: `<?php
class Order {
    private array $meta = [];

    public function __construct(
        public readonly string $id,
        private float $total,
    ) {}

    // __toString: tự động gọi khi echo $order hoặc dùng trong string context
    public function __toString(): string {
        return "Order#{$this->id}(total=" . number_format($this->total) . ')';
    }

    // __get: gọi khi đọc property không tồn tại — lưu metadata tự do
    public function __get(string $key): mixed {
        return $this->meta[$key] ?? null;
    }

    // __set: gọi khi gán vào property không tồn tại
    public function __set(string $key, mixed $value): void {
        $this->meta[$key] = $value;
    }

    // __invoke: gọi object như function — hữu ích cho handler, middleware
    public function __invoke(string $action): string {
        return "Order#{$this->id}: thực hiện '{$action}'";
    }
}

$order = new Order('ORD-001', 599_000);
echo $order;                      // Order#ORD-001(total=599,000)

$order->note = 'Giao nhanh';      // __set('note', 'Giao nhanh')
echo $order->note;                // __get('note') → Giao nhanh
echo $order->missing;             // __get('missing') → null

echo $order('confirm');           // __invoke → Order#ORD-001: thực hiện 'confirm'`,

				// ── 7. METHOD CHAINING ───────────────────────────────────────────
				b7: `<?php
class ProductFilter {
    private ?string $category = null;
    private ?float $maxPrice  = null;
    private ?string $orderBy  = null;
    private int $limitVal     = 20;

    public function category(string $cat): static {
        $this->category = $cat;
        return $this;  // trả về $this để chain tiếp
    }

    public function maxPrice(float $price): static {
        $this->maxPrice = $price;
        return $this;
    }

    public function orderBy(string $field): static {
        $this->orderBy = $field;
        return $this;
    }

    public function limit(int $n): static {
        $this->limitVal = $n;
        return $this;
    }

    public function toSql(): string {
        $sql   = 'SELECT * FROM products';
        $where = [];
        if ($this->category) $where[] = "category = '{$this->category}'";
        if ($this->maxPrice)  $where[] = "price <= {$this->maxPrice}";
        if ($where) $sql .= ' WHERE ' . implode(' AND ', $where);
        if ($this->orderBy)   $sql .= " ORDER BY {$this->orderBy}";
        return $sql . " LIMIT {$this->limitVal}";
    }
}

// Fluent API — đọc như câu tiếng Anh, giống Laravel Query Builder
$sql = (new ProductFilter())
    ->category('books')
    ->maxPrice(500_000)
    ->orderBy('price ASC')
    ->limit(12)
    ->toSql();

echo $sql;
// SELECT * FROM products WHERE category = 'books' AND price <= 500000 ORDER BY price ASC LIMIT 12`,

				// ── PRACTICE 1 ───────────────────────────────────────────────────
				p1: `<?php
class Vehicle {
    // TODO 1: Constructor Promotion — name (string), year (int), fuelType (string)
    // TODO 2: getInfo(): string — trả về "[year] name (fuel: fuelType)"
}

class ElectricVehicle extends Vehicle {
    // TODO 3: Constructor — gọi parent::__construct(), thêm batteryKwh (float)
    // TODO 4: Override getInfo() — dùng parent::getInfo(), nối thêm "(battery: Xkwh)"
    // TODO 5: charge(float $addKwh): void — cộng thêm vào batteryKwh
}

// Expected:
// $ev = new ElectricVehicle('VinFast VF9', 2024, 'electric', 92.0);
// echo $ev->getInfo();
// => [2024] VinFast VF9 (fuel: electric) (battery: 92kwh)
//
// $ev->charge(20.0);
// echo $ev->getInfo();
// => [2024] VinFast VF9 (fuel: electric) (battery: 112kwh)`,

				// ── PRACTICE 2 ───────────────────────────────────────────────────
				p2: `<?php
abstract class TaxCalculator {
    // TODO 1: abstract calculate(float $amount): float
    // TODO 2: abstract getName(): string
    // TODO 3: getBreakdown(float $amount): string — code dùng chung
    //         Dùng calculate() và getName()
    //         VD: "VAT (10%): 50,000 VND"
}

class VATCalculator extends TaxCalculator {
    // TODO 4: implement — thuế suất 10%
}

class ImportTaxCalculator extends TaxCalculator {
    // TODO 5: implement — thuế suất 20%
}

// Expected:
// $calcs = [new VATCalculator(), new ImportTaxCalculator()];
// foreach ($calcs as $calc) {
//     echo $calc->getBreakdown(500_000);
// }
// => VAT (10%): 50,000 VND
// => Import Tax (20%): 100,000 VND`,

				// ── PRACTICE 3 ───────────────────────────────────────────────────
				p3: `<?php
interface Exportable {
    public function export(string $format): string;
}

class OrderReport implements Exportable {
    private string $title = 'Order Report';
    private array $rows   = [];

    // TODO 1: title(string $t): static — set tiêu đề, return $this
    // TODO 2: addRow(string $orderId, float $amount): static — push vào $rows
    // TODO 3: export(string $format): string
    //         'json' => json_encode(['title' => ..., 'rows' => ..., 'count' => ...])
    //         'text' => "=== title ===\\norderId: amount VND\\n..."
    //         default => throw new InvalidArgumentException("Format không hỗ trợ: ...")
}

// Expected:
// $report = (new OrderReport())
//     ->title('Báo cáo tháng 6')
//     ->addRow('ORD-001', 1_200_000)
//     ->addRow('ORD-002', 850_000);
//
// echo $report->export('json');
// => {"title":"Báo cáo tháng 6","rows":[...],"count":2}
//
// echo $report->export('text');
// === Báo cáo tháng 6 ===
// ORD-001: 1,200,000 VND
// ORD-002: 850,000 VND`,
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

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="PHP Class & Object" addOnClass="text-left mt-2" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					<b>Class</b> là bản thiết kế (blueprint) — định nghĩa dữ liệu và hành vi. <b>Object</b> là thực thể cụ thể
					được tạo ra từ bản thiết kế đó. Bài này xây dựng class <FilePath>Product</FilePath> từng bước, từ khai báo cơ
					bản đến các tính năng PHP 8 hiện đại.
				</p>

				<!-- ===================== 1. KHAI BÁO CLASS ===================== -->
				<PageHeading text="Khai báo Class" addOnClass="text-left mt-2" markedAs="class-def" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Một class gồm <b>properties</b> (dữ liệu) và <b>methods</b> (hành vi). Từ PHP 7.4 trở đi, mỗi property nên
					khai báo kèm kiểu dữ liệu — PHP sẽ phát hiện lỗi kiểu ngay khi gán thay vì khi dùng.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Ba mức <b>access modifier</b> kiểm soát ai được phép đọc/ghi property hay gọi method đó:
				</p>
				<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white my-3 text-sm">
					<li><FilePath>public</FilePath> — truy cập từ bất kỳ đâu (trong class, ngoài class, subclass).</li>
					<li><FilePath>protected</FilePath> — chỉ trong class này và các class kế thừa (subclass).</li>
					<li><FilePath>private</FilePath> — chỉ trong chính class này, subclass cũng không truy cập được.</li>
				</ul>

				<!-- ===================== 2. $this & METHODS ===================== -->
				<PageHeading
					text="$this & Methods — Getter / Setter"
					addOnClass="text-left mt-2"
					markedAs="this-methods"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>$this</FilePath> là đại từ tự trỏ đến <b>instance đang thực thi method</b>. Mỗi object có bộ nhớ
					riêng cho properties của nó — <FilePath>$this->price</FilePath> trên object <FilePath>$laptop</FilePath> khác
					hoàn toàn với <FilePath>$this->price</FilePath> trên <FilePath>$mouse</FilePath>.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Tại sao cần getter/setter thay vì để property là <FilePath>public</FilePath>?</b> Setter cho phép kiểm tra
					dữ liệu đầu vào trước khi gán — ngăn chặn trạng thái không hợp lệ bên trong object. Đây là nền tảng của tính
					đóng gói (Encapsulation).
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 3. CONSTRUCTOR ===================== -->
				<PageHeading text="Constructor" addOnClass="text-left mt-2" markedAs="constructor" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>__construct()</FilePath> là method đặc biệt tự động chạy khi dùng <FilePath>new</FilePath>. Dùng nó
					để gán giá trị ban đầu cho properties và chạy các validation cần thiết ngay lúc khởi tạo.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Lưu ý <FilePath>private bool $active = true</FilePath>: property có default value thì không cần xuất hiện
					trong constructor — PHP tự gán khi tạo object.
				</p>

				<!-- ===================== 4. CONSTRUCTOR PROMOTION ===================== -->
				<PageHeading
					text="Constructor Property Promotion (PHP 8)"
					addOnClass="text-left mt-2"
					markedAs="promotion"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					PHP 8 cho phép viết access modifier trực tiếp vào tham số constructor — PHP tự động tạo property và gán giá
					trị, không cần khai báo lại ở đầu class hay viết <FilePath>$this->x = $x</FilePath>. Laravel dùng pattern này
					khắp nơi.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Named Arguments</b> (PHP 8): truyền tham số theo tên thay vì theo thứ tự. Rất hữu ích khi constructor có
					nhiều tham số hoặc có giá trị mặc định xen kẽ.
				</p>

				<div class="mt-2 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">
						<FilePath>readonly</FilePath> property (PHP 8.1)
					</p>
					<p class="text-slate-900 dark:text-white text-sm mb-3">
						Thêm <FilePath>readonly</FilePath> vào promotion để tạo property chỉ gán được đúng 1 lần trong constructor,
						sau đó bất biến. Thường dùng cho ID, SKU, các giá trị định danh không được thay đổi sau khi tạo.
					</p>
					<VCodeBlock :code="bReadonly" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- ===================== 5. NULLABLE & UNION TYPES ===================== -->
				<PageHeading
					text="Nullable, Default Values & Union Types"
					addOnClass="text-left mt-2"
					markedAs="nullable-union"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					PHP 8 mở rộng hệ thống kiểu dữ liệu với ba tính năng thường gặp trong code thực tế:
				</p>
				<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white my-3 text-sm">
					<li>
						<FilePath>?string</FilePath> — <b>nullable type</b>: nhận giá trị kiểu <FilePath>string</FilePath> hoặc
						<FilePath>null</FilePath>.
					</li>
					<li>
						<FilePath>$stock = 0</FilePath> — <b>default value</b>: tham số tuỳ chọn, không cần truyền vào khi gọi.
					</li>
					<li><FilePath>string|int</FilePath> — <b>union type</b> (PHP 8.0): chấp nhận nhiều kiểu khác nhau.</li>
				</ul>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 6. STATIC & CONSTANTS ===================== -->
				<PageHeading text="Static & Constants" addOnClass="text-left mt-2" markedAs="static-const" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Constants</b> (<FilePath>const</FilePath>) và <b>static properties/methods</b> thuộc về <b>class</b>, không
					phải instance — dùng qua <FilePath>ClassName::</FilePath> mà không cần <FilePath>new</FilePath>. Bên trong
					class, dùng <FilePath>self::</FilePath> để trỏ đến class hiện tại.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Static factory method</b> là pattern hay dùng trong Laravel (<FilePath>User::create()</FilePath>,
					<FilePath>Carbon::now()</FilePath>): đặt tên rõ nghĩa hơn <FilePath>new</FilePath> và cho phép thêm logic
					trước khi tạo object.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />

				<!-- ===================== 7. OBJECT ===================== -->
				<PageHeading text="Object — Khởi tạo & Clone" addOnClass="text-left mt-2" markedAs="object" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Mỗi lần gọi <FilePath>new</FilePath>, PHP cấp phát một vùng nhớ mới và trả về object đó. Điểm dễ nhầm: phép
					gán <FilePath>=</FilePath> với object <b>không sao chép</b> — nó chỉ tạo thêm một biến trỏ đến
					<b>cùng một vùng nhớ</b>. Dùng <FilePath>clone</FilePath> để tạo bản sao thực sự độc lập.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="atom-one-dark" />

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Tóm tắt</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>
							Property <FilePath>private</FilePath> + getter/setter → kiểm soát dữ liệu vào, ngăn trạng thái không hợp
							lệ.
						</li>
						<li>Constructor Property Promotion (PHP 8) → khai báo + gán trong 1 bước, ít code lặp.</li>
						<li><FilePath>readonly</FilePath> (PHP 8.1) → bất biến sau khi khởi tạo, dùng cho ID, SKU, định danh.</li>
						<li>
							<FilePath>static</FilePath> / <FilePath>const</FilePath> → thuộc về class, dùng qua
							<FilePath>ClassName::</FilePath>.
						</li>
						<li><FilePath>$b = $a</FilePath> → cùng object; <FilePath>$b = clone $a</FilePath> → bản sao độc lập.</li>
					</ul>
				</div>

				<!-- ===================== LUYỆN TẬP ===================== -->
				<PageHeading text="Luyện tập" addOnClass="text-left mt-2" markedAs="practice" :lvl="1" />
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
						<p class="text-slate-900 dark:text-white font-semibold">BankAccount — getter/setter & validation</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: <FilePath>private</FilePath> property, getter/setter, validation trong method.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Viết <FilePath>deposit(float $amount): void</FilePath> — cộng vào số dư, ném
							<FilePath>InvalidArgumentException</FilePath> nếu <FilePath>$amount <= 0</FilePath>.
						</li>
						<li>
							Viết <FilePath>withdraw(float $amount): void</FilePath> — trừ khỏi số dư, ném
							<FilePath>RuntimeException</FilePath> nếu không đủ tiền.
						</li>
						<li>Viết <FilePath>getBalance(): float</FilePath>.</li>
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
						<p class="text-slate-900 dark:text-white font-semibold">
							Inventory — Constructor Promotion, static & const
						</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: Constructor Property Promotion, <FilePath>readonly</FilePath>, <FilePath>static</FilePath>,
						<FilePath>const</FilePath>, <FilePath>self::</FilePath>.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Khai báo property qua <b>Constructor Property Promotion</b>:
							<FilePath>public readonly string $sku</FilePath>, <FilePath>private int $quantity = 0</FilePath>.
						</li>
						<li>Trong constructor: tăng <FilePath>self::$totalCreated</FilePath> mỗi lần tạo object mới.</li>
						<li>Static factory <FilePath>create(string $sku, int $qty): static</FilePath>.</li>
						<li>
							<FilePath>isLowStock(): bool</FilePath> — trả về <FilePath>true</FilePath> nếu
							<FilePath>$quantity &lt;= self::LOW_STOCK</FilePath>.
						</li>
						<li>Static getter <FilePath>getTotalCreated(): int</FilePath>.</li>
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
						<p class="text-slate-900 dark:text-white font-semibold">CartItem — nullable, default value & clone</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: nullable type (<FilePath>?string</FilePath>), default value, <FilePath>clone</FilePath> vs reference.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Khai báo: <FilePath>public readonly string $name</FilePath>, <FilePath>private int $quantity</FilePath>,
							<FilePath>private float $unitPrice</FilePath>, <FilePath>private ?string $coupon = null</FilePath>.
						</li>
						<li><FilePath>applyCoupon(string $code): void</FilePath> — gán <FilePath>$coupon</FilePath>.</li>
						<li><FilePath>getSubtotal(): float</FilePath> — nếu có coupon: giảm 10%; không có: nhân bình thường.</li>
						<li><FilePath>getCoupon(): ?string</FilePath> — trả về coupon hoặc <FilePath>null</FilePath>.</li>
						<li>Demo <b>clone</b>: tạo bản copy rồi áp coupon — chứng minh object gốc không bị ảnh hưởng.</li>
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

				// 1. Khai báo Class
				b1: `<?php
class Product {
    public string  $name;           // public: ai cũng đọc/ghi được
    protected string $category;     // protected: class này + subclass
    private float  $price;          // private: chỉ trong class này
    private int    $stock  = 0;     // khai báo kèm default value
    private bool   $active = true;
}`,

				// 2. $this & getter/setter
				b2: `<?php
class Product {
    public string $name = '';
    private float $price = 0.0;
    private int   $stock = 0;

    // $this luôn trỏ đến instance đang thực thi method này
    public function getPrice(): float {
        return $this->price;
    }

    // Setter: validate trước khi gán — bên ngoài không thể bypass validation
    public function setPrice(float $price): void {
        if ($price < 0) {
            throw new InvalidArgumentException('Giá không thể âm');
        }
        $this->price = $price;
    }

    public function getStock(): int {
        return $this->stock;
    }

    public function addStock(int $qty): void {
        $this->stock += $qty;
    }

    public function reduceStock(int $qty): void {
        if ($qty > $this->stock) {
            throw new RuntimeException('Không đủ hàng trong kho');
        }
        $this->stock -= $qty;
    }
}

$p = new Product();
$p->name = 'Laptop';
$p->setPrice(15_000_000);
$p->addStock(50);

echo $p->getPrice(); // 15000000
echo $p->getStock(); // 50

// $p->price = -999;  // Fatal error — private property
// $p->setPrice(-1);  // InvalidArgumentException: Giá không thể âm`,

				// 3. Constructor
				b3: `<?php
class Product {
    public string $name;
    private float $price;
    private int   $stock;
    private bool  $active = true;   // default — không đi qua constructor

    public function __construct(string $name, float $price, int $stock = 0) {
        if ($price < 0) {
            throw new InvalidArgumentException('Giá không thể âm');
        }
        $this->name  = $name;   // gán param vào property
        $this->price = $price;
        $this->stock = $stock;
    }

    public function getPrice(): float { return $this->price; }
    public function getStock(): int   { return $this->stock; }
    public function isActive(): bool  { return $this->active; }
    public function setPrice(float $price): void {
        if ($price < 0) throw new InvalidArgumentException('Giá không thể âm');
        $this->price = $price;
    }
}

$laptop = new Product('Laptop', 15_000_000, 50);
$mouse  = new Product('Mouse', 200_000);        // $stock = 0 theo default

echo $laptop->name;        // Laptop
echo $laptop->getPrice();  // 15000000
echo $laptop->getStock();  // 50
echo $mouse->isActive();   // 1 (true)
// new Product('X', -1);  // InvalidArgumentException — validation trong constructor`,

				// 4. Constructor Property Promotion + Named Arguments
				b4: `<?php
// PHP 8: viết access modifier trước param → PHP tự tạo property + gán, không cần khai báo lại
class Product {
    private bool $active = true;   // property ngoài constructor vẫn khai báo như bình thường

    public function __construct(
        public string $name,        // = public string $name; + $this->name = $name;
        private float $price,       // = private float $price; + $this->price = $price;
        private int   $stock = 0,
    ) {
        if ($price < 0) throw new InvalidArgumentException('Giá không thể âm');
    }

    public function getPrice(): float { return $this->price; }
    public function getStock(): int   { return $this->stock; }
    public function isActive(): bool  { return $this->active; }
    public function setPrice(float $price): void {
        if ($price < 0) throw new InvalidArgumentException('Giá không thể âm');
        $this->price = $price;
    }
}

// Named Arguments (PHP 8) — truyền theo tên, thứ tự tuỳ ý, bỏ qua tham số có default
$laptop = new Product(
    name:  'Laptop',
    price: 15_000_000,
    stock: 50,
);
$mouse = new Product(price: 200_000, name: 'Mouse');  // thứ tự hoán đổi — vẫn đúng

echo $laptop->name;       // Laptop
echo $laptop->getStock(); // 50`,

				// readonly (note box)
				bReadonly: `<?php
class OrderId {
    public function __construct(
        public readonly string $value,   // readonly + promotion
        public readonly int    $userId,
    ) {}
}

$id = new OrderId('ORD-2024-001', 42);
echo $id->value;       // ORD-2024-001
echo $id->userId;      // 42

// $id->value = 'new'; // Error: Cannot modify readonly property OrderId::$value`,

				// 5. Nullable, Default, Union Types
				b5: `<?php
class Product {
    public function __construct(
        public string   $name,
        private float   $price,
        private int     $stock   = 0,          // default value — tham số tuỳ chọn
        private ?string $sku     = null,        // nullable: string | null
        private string|int $code = 'N/A',      // union type (PHP 8.0): string hoặc int
    ) {}

    public function getSku(): ?string       { return $this->sku; }
    public function getCode(): string|int   { return $this->code; }
    public function getPrice(): float       { return $this->price; }
}

$p1 = new Product('Laptop', 15_000_000);                        // sku = null, code = 'N/A'
$p2 = new Product('Mouse', 200_000, 100, 'MOUSE-001', 7749);   // đủ tham số

// null coalescing (??) — trả về vế phải nếu vế trái là null
echo $p1->getSku() ?? 'Chưa có SKU';  // Chưa có SKU
echo $p2->getSku();                    // MOUSE-001
echo $p2->getCode();                   // 7749 (int)`,

				// 6. Static & Constants
				b6: `<?php
class Product {
    const STATUS_ACTIVE   = 'active';
    const STATUS_INACTIVE = 'inactive';

    private static int $totalCreated = 0;   // dùng chung cho toàn bộ class, không phải instance

    public function __construct(
        public string $name,
        private float $price,
        private string $status = self::STATUS_ACTIVE,   // self:: trong constructor
    ) {
        self::$totalCreated++;   // self:: trỏ đến class, không phải $this
    }

    // Static factory: đặt tên rõ hơn new Product(...) và có thể thêm logic riêng
    public static function create(string $name, float $price): static {
        return new static($name, $price);
    }

    public static function createDraft(string $name): static {
        return new static($name, 0.0, self::STATUS_INACTIVE);
    }

    public static function getTotalCreated(): int {
        return self::$totalCreated;
    }

    public function getPrice(): float   { return $this->price; }
    public function getStatus(): string { return $this->status; }
    public function setPrice(float $price): void {
        if ($price < 0) throw new InvalidArgumentException('Giá không thể âm');
        $this->price = $price;
    }
}

// Dùng :: để gọi static — không cần new
$laptop = Product::create('Laptop', 15_000_000);
$draft  = Product::createDraft('Sản phẩm nháp');

echo Product::getTotalCreated();  // 2
echo Product::STATUS_ACTIVE;      // active
echo $laptop->getStatus();        // active
echo $draft->getStatus();         // inactive`,

				// Practice 1 — BankAccount
				p1: `<?php
class BankAccount {
    private float $balance = 0.0;

    // TODO 1: deposit(float $amount): void
    //   validate: $amount > 0, ném InvalidArgumentException nếu không
    //   cộng $amount vào $balance

    // TODO 2: withdraw(float $amount): void
    //   validate: $amount <= $balance, ném RuntimeException nếu không đủ
    //   trừ $amount khỏi $balance

    // TODO 3: getBalance(): float
}

// Kết quả mong đợi sau khi hoàn thành:
$acc = new BankAccount();
$acc->deposit(500_000);
$acc->deposit(200_000);
$acc->withdraw(100_000);
echo $acc->getBalance(); // 600000
// $acc->deposit(-1);   // InvalidArgumentException: ...
// $acc->withdraw(999_999); // RuntimeException: ...`,

				// Practice 2 — Inventory
				p2: `<?php
class Inventory {
    const LOW_STOCK = 5;
    private static int $totalCreated = 0;

    // TODO 1: Constructor Property Promotion
    //   public readonly string $sku
    //   private int $quantity = 0
    //   Trong constructor body: self::$totalCreated++

    // TODO 2: public static function create(string $sku, int $qty): static

    // TODO 3: public function addStock(int $qty): void

    // TODO 4: public function isLowStock(): bool
    //   true nếu $quantity <= self::LOW_STOCK

    // TODO 5: public static function getTotalCreated(): int
}

// Kết quả mong đợi:
$a = Inventory::create('SKU-001', 3);
$b = Inventory::create('SKU-002', 20);

echo Inventory::getTotalCreated();                  // 2
echo $a->sku;                                       // SKU-001 (readonly)
echo $a->isLowStock() ? 'Tồn kho thấp' : 'Đủ';    // Tồn kho thấp (3 <= 5)
echo $b->isLowStock() ? 'Tồn kho thấp' : 'Đủ';    // Đủ           (20 > 5)
$a->addStock(10);
echo $a->isLowStock() ? 'Tồn kho thấp' : 'Đủ';    // Đủ           (13 > 5)`,

				// Practice 3 — CartItem
				p3: `<?php
class CartItem {
    // TODO 1: Constructor Property Promotion
    //   public readonly string $name
    //   private int $quantity
    //   private float $unitPrice
    //   private ?string $coupon = null    ← nullable, default null

    // TODO 2: public function applyCoupon(string $code): void
    //   gán $this->coupon = $code

    // TODO 3: public function getSubtotal(): float
    //   nếu $coupon !== null → giảm 10%: $unitPrice * $quantity * 0.9
    //   ngược lại           → $unitPrice * $quantity

    // TODO 4: public function getCoupon(): ?string
}

// Kết quả mong đợi:
$original   = new CartItem('Laptop', 2, 15_000_000);
$discounted = clone $original;        // bản sao ĐỘC LẬP
$discounted->applyCoupon('SAVE10');

echo $original->getSubtotal();         // 30000000 — không đổi dù $discounted bị sửa
echo $discounted->getSubtotal();       // 27000000 — giảm 10%
echo $original->getCoupon() ?? 'N/A'; // N/A       — clone không chia sẻ state
echo $discounted->getCoupon();         // SAVE10`,

				// 7. Object — new, reference vs clone
				b7: `<?php
// Dùng class Product từ phần "Constructor Property Promotion"

// new: mỗi lần gọi tạo vùng nhớ mới, object hoàn toàn độc lập
$laptop = new Product('Laptop', 15_000_000, 10);
$mouse  = new Product('Mouse', 200_000, 50);

echo $laptop->name; // Laptop
echo $mouse->name;  // Mouse — độc lập, thay đổi $laptop không ảnh hưởng $mouse

// ─── Phép gán = KHÔNG sao chép object ──────────────────────────────────────
// $p2 và $laptop cùng trỏ vào 1 vùng nhớ
$p2 = $laptop;
$p2->name = 'Gaming Laptop';    // thay đổi qua $p2...
echo $laptop->name; // Gaming Laptop — $laptop cũng đổi theo!

// ─── clone: tạo bản sao ĐỘC LẬP trong vùng nhớ mới ────────────────────────
$p3 = clone $laptop;
$p3->name = 'Budget Laptop';
$p3->setPrice(8_000_000);

echo $laptop->name;        // Gaming Laptop — không đổi ✓
echo $laptop->getPrice();  // 15000000      — không đổi ✓
echo $p3->name;            // Budget Laptop
echo $p3->getPrice();      // 8000000

// Tóm lại:
// $b = $a       → cùng 1 object, thay đổi 1 bên ảnh hưởng bên kia
// $b = clone $a → object mới, độc lập hoàn toàn`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-11' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

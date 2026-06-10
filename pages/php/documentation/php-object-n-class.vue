<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="PHP Class & Object" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Class là bản thiết kế (blueprint) định nghĩa dữ liệu và hành vi; Object là thực thể được tạo ra từ bản thiết
					kế đó. Đây là nền tảng để đọc hiểu mọi framework PHP — bao gồm Laravel.
				</p>

				<PageHeading text="Khai báo Class" addOnClass="text-left" markedAs="class-def" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Một class gồm <b>properties</b> (dữ liệu) và <b>methods</b> (hành vi). Từ PHP 7.4 trở đi, property nên được
					khai báo kèm kiểu dữ liệu — giúp PHP phát hiện lỗi sớm và code dễ đọc hơn.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Ba mức truy cập (<b>access modifier</b>) kiểm soát ai được đọc/ghi property và method:
				</p>
				<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white my-3">
					<li><FilePath>public</FilePath> — truy cập từ bất kỳ đâu.</li>
					<li><FilePath>protected</FilePath> — chỉ trong class và các class kế thừa (subclass).</li>
					<li><FilePath>private</FilePath> — chỉ trong chính class đó.</li>
				</ul>

				<PageHeading text="Constructor" addOnClass="text-left" markedAs="constructor" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>__construct()</FilePath> tự động chạy khi bạn dùng <FilePath>new</FilePath>. Thêm kiểu và return
					type cho tất cả method — đây là convention bắt buộc trong Laravel.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi class con (subclass) có constructor riêng, gọi <FilePath>parent::__construct()</FilePath> để khởi tạo
					phần của class cha trước:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Constructor Property Promotion (PHP 8)" addOnClass="text-left" markedAs="promotion" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					PHP 8 cho phép khai báo property và gán giá trị ngay trong danh sách tham số constructor — giảm đáng kể code
					lặp. Laravel dùng pattern này khắp nơi.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Static Properties & Methods" addOnClass="text-left" markedAs="static" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Property và method <FilePath>static</FilePath> thuộc về <b>class</b>, không phải instance — dùng được mà
					không cần <FilePath>new</FilePath>. Bên trong class, dùng <FilePath>self::</FilePath> để trỏ đến class hiện
					tại.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Class Constants" addOnClass="text-left" markedAs="constants" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>const</FilePath> khai báo hằng số gắn với class. Hằng số không đổi sau khi khai báo và truy cập
					qua <FilePath>::</FilePath> — thường dùng cho trạng thái, cấu hình cố định. Ví dụ:
					<FilePath>Logger::DEBUG</FilePath>, <FilePath>Response::HTTP_OK</FilePath>.
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Object" addOnClass="text-left" markedAs="object" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Object là thực thể cụ thể được tạo từ class bằng từ khoá <FilePath>new</FilePath>. Mỗi object có bộ nhớ
					riêng cho properties của nó (trừ <FilePath>static</FilePath>).
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
class User {
    public string $name;      // public — truy cập từ bất kỳ đâu
    protected int $age;       // protected — class này và subclass
    private string $email;    // private — chỉ trong class này

    public function getEmail(): string {
        return $this->email;  // method public đọc hộ private property
    }

    protected function getAge(): int {
        return $this->age;
    }
}`,
				b2: `<?php
class User {
    public string $name;
    protected int $age;
    private string $email;

    public function __construct(string $name, int $age, string $email) {
        $this->name  = $name;
        $this->age   = $age;
        $this->email = $email;
    }

    public function getEmail(): string {
        return $this->email;
    }
}`,
				b3: `<?php
class AdminUser extends User {
    private string $role;

    public function __construct(string $name, int $age, string $email, string $role = 'admin') {
        parent::__construct($name, $age, $email);  // khởi tạo phần của User trước
        $this->role = $role;
    }

    public function getRole(): string {
        return $this->role;
    }
}

$admin = new AdminUser('Tuấn', 28, 'tuan@example.com');
echo $admin->getRole(); // admin`,
				b4: `<?php
// PHP 7 — phải khai báo property rồi gán thủ công trong constructor
class ProductOld {
    public string $name;
    private float $price;

    public function __construct(string $name, float $price) {
        $this->name  = $name;
        $this->price = $price;
    }
}

// PHP 8 — Constructor Property Promotion: khai báo + gán trong 1 bước
class Product {
    public function __construct(
        public readonly string $name,  // readonly: không thể gán lại sau khi khởi tạo
        private float $price,
    ) {}

    public function getPrice(): float {
        return $this->price;
    }
}

$p = new Product('Laptop', 15_000_000);
echo $p->name;        // Laptop
echo $p->getPrice();  // 15000000
// $p->name = 'PC';   // Lỗi — readonly`,
				b5: `<?php
class Counter {
    private static int $count = 0;  // dùng chung cho toàn bộ class

    public static function increment(): void {
        self::$count++;  // self:: trỏ đến class hiện tại
    }

    public static function getCount(): int {
        return self::$count;
    }

    public static function reset(): void {
        self::$count = 0;
    }
}

Counter::increment();   // dùng :: không cần new
Counter::increment();
echo Counter::getCount(); // 2

Counter::reset();
echo Counter::getCount(); // 0`,
				b6: `<?php
class OrderStatus {
    const PENDING  = 'pending';
    const PAID     = 'paid';
    const SHIPPED  = 'shipped';
    const CANCELED = 'canceled';
}

$status = OrderStatus::PAID;
echo $status; // paid

$message = match ($status) {
    OrderStatus::PAID     => 'Đơn đã thanh toán',
    OrderStatus::SHIPPED  => 'Đang giao hàng',
    OrderStatus::CANCELED => 'Đã huỷ',
    default               => 'Chờ xử lý',
};
echo $message; // Đơn đã thanh toán`,
				b7: `<?php
$user  = new User('Tuấn', 28, 'tuan@example.com');
$admin = new AdminUser('Lan', 30, 'lan@example.com', 'superadmin');

// Truy cập public property trực tiếp
echo $user->name;          // Tuấn
echo $admin->name;         // Lan

// Phải qua method để đọc private/protected property
echo $user->getEmail();    // tuan@example.com
echo $admin->getRole();    // superadmin

// $user->email;           // Fatal error: Cannot access private property
// $user->age;             // Fatal error: Cannot access protected property

// Mỗi object có bộ nhớ riêng — thay đổi $user không ảnh hưởng $admin
$user->name = 'Phạm Tuấn';
echo $user->name;   // Phạm Tuấn
echo $admin->name;  // Lan — không đổi`,
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

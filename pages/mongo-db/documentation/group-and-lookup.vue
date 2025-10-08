<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="$Group" addOnClass="text-left" markedAs="group-stage" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Stage <b>$group</b> là quá trình tổng hợp các Document dựa trên một hoặc nhiều trường được chỉ định, sau đó áp
					dụng các toán tử tích lũy (accumulator operators) để tính toán các giá trị tổng hợp (như tổng, trung bình,
					đếm, v.v.) cho mỗi nhóm.
				</p>

				<PageHeading text="Syntax" addOnClass="text-left mt-3" markedAs="group-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cú pháp của <b>$group</b> luôn yêu cầu một trường <b>_id</b> để định nghĩa tiêu chí nhóm:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Các loại <b>_id</b>:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Nhóm theo một trường </b>Syntax: <FilePath>_id: "$ten_truong"</FilePath> -> Nhóm tất cả Documents có
							cùng giá trị ten_truong</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Nhóm theo nhiều trường </b>Syntax: <FilePath>_id: { field1: "$f1", field2: "$f2" }</FilePath> -> Nhóm
							Documents có cùng cặp giá trị của f1 và f2.</span
						>
					</li>

					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Tổng hợp toàn bộ Collection</b>Syntax: <FilePath>_id: null hoặc _id: "$literals_value" </FilePath> ->
							Nhóm tất cả Documents vào một nhóm duy nhất (ví dụ: tính tổng toàn bộ).
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Một số accumulator operators phổ biến:</p>
				<DocFactoryV2Table :headers="headers" :items="items" />
				<div class="grid grid-cols-2 gap-2">
					<div class="col-span-1 max-h-[300px] overflow-hidden rounded-lg">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">Seed Data:</p>
						<VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" />
					</div>

					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">Ví dụ: Tổng doanh thu theo khách hàng</p>
						<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Từ dữ liệu seed trên hãy:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Tổng hợp số lượng và giá trị đơn hàng theo Khách hàng và Địa chỉ</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Thống kê số lần mua của từng loại sản phẩm</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Tìm đơn hàng đầu tiên và cuối cùng của mỗi khách hàng</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-2 leading-8">Một số lưu ý khi dùng $group nè:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>_id: null</b> → nhóm toàn bộ collection lại (ví dụ tính tổng doanh thu toàn hệ thống). Chuyên xài cho
							mấy bài tính tổng</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Nếu cần lấy dữ liệu cụ thể từ từng nhóm (ví dụ order mới nhất), $sort trước rồi dùng $first.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Có thể group theo nhiều cấp</span>
						<FilePath>_id: { name: "$customer.name", address: "$customer.address" },</FilePath>
					</li>
				</ul>
				<!--  -->
				<PageHeading text="$Lookup" addOnClass="text-left" markedAs="lookup-stage" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Stage $lookup thực hiện một phép <b>left outer join</b> giữa Document từ Collection đang được xử lý
					(Collection nguồn) với Document từ một Collection khác (Collection tham chiếu) trong cùng một Database. Đây là
					cách chính để thực hiện quan hệ (Join) trong môi trường NoSQL của MongoDB.
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Một số Arithmetic Expressions phổ biến:</p>
				<DocFactoryV2Table :headers="headers2" :items="items2" />
				<PageHeading text="Syntax" addOnClass="text-left mt-3" markedAs="lookup-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cú pháp của <b>$lookup</b> cần xác định rõ Collection tham chiếu, trường khóa trong cả hai Collection và tên
					trường mới để lưu kết quả:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="js" theme="atom-one-dark" />

				<div class="col-span-1 max-h-[300px] overflow-hidden rounded-lg mb-3">
					<p class="text-slate-900 dark:text-white mt-2 leading-8">Seed Data:</p>
					<VCodeBlock :code="b5" highlightjs lang="js" theme="atom-one-dark" />
				</div>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Từ dữ liệu seed trên hãy:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Liên kết đơn giản orders → customers: Lấy danh sách đơn hàng cùng thông tin khách hàng tương ứng.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Liên kết đơn giản products → categories: Lấy danh sách sản phẩm kèm danh mục.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Lookup 2 tầng: orders → items.product_id → products: Hiển thị chi tiết sản phẩm của từng đơn hàng.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Lookup kết hợp 3 bảng: orders → customers, orders → products: Hiển thị danh sách chi tiết đơn hàng gồm
							(Tên khách hàng, Tên sản phẩm, Số lượng, giảm giá, Giá gốc, thành tiền từng dòng)</span
						>
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
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	export default {
		components: {
			LessonSum,
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				lessonSum: [
					'Stage $group tổng hợp các Document dựa trên một hoặc nhiều trường được chỉ định, sau đó áp dụng các toán tử tích lũy.',
					'Cú pháp của $group luôn yêu cầu một trường _id để định nghĩa tiêu chí nhóm.',
					'_id có thể là một, nhiều trường hoặc toàn bộ collection',
					'Stage $lookup thực hiện một phép left outer join giữa Document từ Collection.',
					'$lookup luôn trả về một mảng kết quả, ngay cả khi chỉ có một Document khớp.',
					'dùng $unwind để tách mảng kết quả nếu cần.',
				],
				headers: [
					{ id: 1, name: 'Tên Accumulator', key: 'name' },
					{ id: 2, name: 'Mô tả', key: 'description' },
					{ id: 3, name: 'Ví dụ', key: 'example' },
				],
				items: [
					{
						name: '$sum',
						description: 'Tính tổng các giá trị trong nhóm hoặc đếm số document nếu không truyền field.',
						example: `{ _id: "$category", total: { $sum: "$price" } }`,
					},
					{
						name: '$avg',
						description: 'Tính giá trị trung bình của các phần tử trong nhóm.',
						example: `{ _id: "$class", avgScore: { $avg: "$score" } }`,
					},
					{
						name: '$min',
						description: 'Lấy giá trị nhỏ nhất trong nhóm.',
						example: `{ _id: "$dept", minSalary: { $min: "$salary" } }`,
					},
					{
						name: '$max',
						description: 'Lấy giá trị lớn nhất trong nhóm.',
						example: `{ _id: "$dept", maxSalary: { $max: "$salary" } }`,
					},
					{
						name: '$push',
						description: 'Tạo mảng chứa tất cả các giá trị từ mỗi document trong nhóm.',
						example: `{ _id: "$dept", employees: { $push: "$name" } }`,
					},
					{
						name: '$addToSet',
						description: 'Tạo mảng chứa các giá trị duy nhất (loại bỏ trùng lặp).',
						example: `{ _id: "$dept", uniqueRoles: { $addToSet: "$role" } }`,
					},
					{
						name: '$first',
						description: 'Lấy giá trị đầu tiên trong nhóm (theo thứ tự xuất hiện).',
						example: `{ _id: "$dept", firstJoined: { $first: "$joinDate" } }`,
					},
					{
						name: '$last',
						description: 'Lấy giá trị cuối cùng trong nhóm (theo thứ tự xuất hiện).',
						example: `{ _id: "$dept", lastJoined: { $last: "$joinDate" } }`,
					},
					{
						name: '$count',
						description: 'Đếm số lượng document trong nhóm (MongoDB 5.0+).',
						example: `{ _id: "$status", count: { $count: {} } }`,
					},
					{
						name: '$stdDevPop',
						description: 'Tính độ lệch chuẩn của toàn bộ population trong nhóm.',
						example: `{ _id: "$class", stdDev: { $stdDevPop: "$score" } }`,
					},
					{
						name: '$stdDevSamp',
						description: 'Tính độ lệch chuẩn mẫu (sample) trong nhóm.',
						example: `{ _id: "$class", stdDev: { $stdDevSamp: "$score" } }`,
					},
					{
						name: '$mergeObjects',
						description: 'Gộp các document con thành một object duy nhất.',
						example: `{ _id: "$userId", mergedData: { $mergeObjects: "$info" } }`,
					},
				],
				headers2: [
					{ id: 1, name: 'Tên toán tử', key: 'operator' },
					{ id: 2, name: 'Mô tả', key: 'description' },
					{ id: 3, name: 'Ví dụ', key: 'example' },
				],
				items2: [
					{
						operator: '$add',
						description: 'Cộng hai hoặc nhiều giá trị số lại với nhau.',
						example: '{ $add: [ "$price", 1000 ] } // price + 1000',
					},
					{
						operator: '$subtract',
						description: 'Trừ giá trị thứ hai khỏi giá trị thứ nhất.',
						example: '{ $subtract: [ "$total", "$discount" ] } // total - discount',
					},
					{
						operator: '$multiply',
						description: 'Nhân hai hoặc nhiều giá trị số.',
						example: '{ $multiply: [ "$qty", "$price" ] } // qty * price',
					},
					{
						operator: '$divide',
						description: 'Chia giá trị thứ nhất cho giá trị thứ hai.',
						example: '{ $divide: [ "$revenue", "$orders" ] } // revenue / orders',
					},
					{
						operator: '$mod',
						description: 'Trả về phần dư khi chia giá trị thứ nhất cho thứ hai.',
						example: '{ $mod: [ "$count", 2 ] } // remainder of count / 2',
					},
					{
						operator: '$abs',
						description: 'Trả về giá trị tuyệt đối của số.',
						example: '{ $abs: "$change" }',
					},
					{
						operator: '$ceil',
						description: 'Làm tròn lên số gần nhất (trần).',
						example: '{ $ceil: "$averagePrice" }',
					},
					{
						operator: '$floor',
						description: 'Làm tròn xuống số gần nhất (sàn).',
						example: '{ $floor: "$averagePrice" }',
					},
					{
						operator: '$round',
						description: 'Làm tròn số với số chữ số thập phân tùy chọn.',
						example: '{ $round: [ "$rating", 1 ] } // round rating to 1 decimal',
					},
					{
						operator: '$exp',
						description: 'Trả về e mũ với giá trị đầu vào.',
						example: '{ $exp: "$growthRate" }',
					},
					{
						operator: '$ln',
						description: 'Trả về log tự nhiên (ln) của giá trị.',
						example: '{ $ln: "$value" }',
					},
					{
						operator: '$log',
						description: 'Trả về log cơ số tuỳ chọn.',
						example: '{ $log: [ "$value", 10 ] } // log base 10',
					},
					{
						operator: '$log10',
						description: 'Trả về log cơ số 10 của giá trị.',
						example: '{ $log10: "$value" }',
					},
					{
						operator: '$pow',
						description: 'Tính lũy thừa (số mũ).',
						example: '{ $pow: [ "$base", "$exponent" ] }',
					},
					{
						operator: '$sqrt',
						description: 'Tính căn bậc hai của giá trị.',
						example: '{ $sqrt: "$area" }',
					},
					{
						operator: '$trunc',
						description: 'Cắt phần thập phân của số (không làm tròn).',
						example: '{ $trunc: "$price" }',
					},
					{
						operator: '$sin',
						description: 'Trả về sin của giá trị (radian).',
						example: '{ $sin: "$angle" }',
					},
					{
						operator: '$cos',
						description: 'Trả về cos của giá trị (radian).',
						example: '{ $cos: "$angle" }',
					},
					{
						operator: '$tan',
						description: 'Trả về tan của giá trị (radian).',
						example: '{ $tan: "$angle" }',
					},
					{
						operator: '$atan2',
						description: 'Trả về góc arctan2 của hai giá trị (theo radian).',
						example: '{ $atan2: [ "$y", "$x" ] }',
					},
					{
						operator: '$degreesToRadians',
						description: 'Chuyển đổi độ sang radian.',
						example: '{ $degreesToRadians: "$angleInDegrees" }',
					},
					{
						operator: '$radiansToDegrees',
						description: 'Chuyển đổi radian sang độ.',
						example: '{ $radiansToDegrees: "$angleInRadians" }',
					},
				],
				b1: `{
	  $group: {
	    _id: <biểu thức hoặc trường để nhóm>, // BẮT BUỘC: Giá trị nhóm (giống GROUP BY trong SQL)
	    <trường_output_1>: { <toán tử tích lũy>: <biểu thức> },
	    <trường_output_2>: { <toán tử tích lũy>: <biểu thức> },
	    ...
	  }
	}`,
				b2: `db.orders.aggregate([
	  {
	    $group: {
	      _id: "$customer.name",
	      totalSpent: { $sum: "$total" },
	      orderCount: { $sum: 1 }
	    }
	  },
	  { $sort: { totalSpent: -1 } }
	]);`,
				b3: `const mockOrders = [
	  // Khách hàng An
	  {
	    _id: 101,
	    "customer": { "name": "An", "address": "Hà Nội" },
	    "total": 100000,
	    "items": ["Laptop", "Mouse"],
	    "date": new Date("2025-10-01")
	  },
	  {
	    _id: 102,
	    "customer": { "name": "An", "address": "Hà Nội" },
	    "total": 50000,
	    "items": ["Keyboard"],
	    "date": new Date("2025-10-02")
	  },
	  {
	    _id: 103,
	    "customer": { "name": "An", "address": "Hà Nội" },
	    "total": 100000,
	    "items": ["Monitor"],
	    "date": new Date("2025-10-03")
	  },

	  // Khách hàng Bình
	  {
	    _id: 201,
	    "customer": { "name": "Bình", "address": "TP.HCM" },
	    "total": 150000,
	    "items": ["Phone"],
	    "date": new Date("2025-10-01")
	  },

	  // Khách hàng Cường (Để tăng sự đa dạng)
	  {
	    _id: 301,
	    "customer": { "name": "Cường", "address": "Đà Nẵng" },
	    "total": 80000,
	    "items": ["Webcam"],
	    "date": new Date("2025-10-05")
	  },
	  {
	    _id: 302,
	    "customer": { "name": "Cường", "address": "Đà Nẵng" },
	    "total": 70000,
	    "items": ["Headset"],
	    "date": new Date("2025-10-06")
	  }
	];`,
				b4: `{
	  $lookup: {
	    from: "<collection_tham_chieu>", // Tên Collection muốn Join vào
	    localField: "<trường_key_nguồn>", // Trường trong Collection hiện tại (Collection nguồn)
	    foreignField: "<trường_key_tham_chieu>", // Trường trong Collection tham chiếu (Collection from)
	    as: "<tên_mảng_kết_quả>" // Tên của trường mới được thêm vào, chứa kết quả Join (luôn là MẢNG)
	  }
	}`,
				b5: `
	const products = [
	  { _id: 1, name: "Laptop X1", price: 15000000, category_code: "DM001" },
	  { _id: 2, name: "Bàn phím cơ", price: 2000000, category_code: "DM002" },
	  { _id: 3, name: "Màn hình 27 inch", price: 5000000, category_code: "DM002" },
	  { _id: 4, name: "Chuột Gaming", price: 500000, category_code: "DM002" },
	  { _id: 5, name: "Ghế công thái học", price: 3500000, category_code: "DM003" }
	];
	db.products.insertMany(products);
	const categories = [
		{ code: "DM001", name: "Laptop" },
		{ code: "DM002", name: "Phụ kiện máy tính" },
		{ code: "DM003", name: "Nội thất văn phòng" }
	];
	db.categories.insertMany(categories);
	const customers = [
	  { _id: 101, name: "Nguyễn Văn An", phone: "0901234567" },
	  { _id: 102, name: "Trần Thị Bình", phone: "0909876543" },
	  { _id: 103, name: "Lê Văn Cường", phone: "0912345678" }
	];
	db.customers.insertMany(customers);
	const orders = [
	  {
	    _id: 1001,
	    customer_id: 101,
	    date: new Date("2025-10-01"),
	    items: [
	      { product_id: 1, qty: 1, discount: 0 },
	      { product_id: 4, qty: 2, discount: 0.1 }
	    ]
	  },
	  {
	    _id: 1002,
	    customer_id: 102,
	    date: new Date("2025-10-02"),
	    items: [
	      { product_id: 3, qty: 1, discount: 0 },
	      { product_id: 5, qty: 1, discount: 0 }
	    ]
	  },
	  {
	    _id: 1003,
	    customer_id: 101,
	    date: new Date("2025-10-03"),
	    items: [
	      { product_id: 2, qty: 5, discount: 0.15 }
	    ]
	  }
	];
	db.orders.insertMany(orders);
	`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-10' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

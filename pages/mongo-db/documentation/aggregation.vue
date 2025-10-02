<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Aggregation" addOnClass="text-left" markedAs="aggregation" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Aggregation Pipeline là một tính năng mạnh mẽ trong MongoDB cho phép bạn thực hiện phân tích dữ liệu phức tạp
					trực tiếp trên database server. Nó hoạt động bằng cách truyền dữ liệu qua một chuỗi các
					<b>stage (giai đoạn)</b>, mỗi stage thực hiện một thao tác cụ thể trên dữ liệu trước khi truyền đến stage tiếp
					theo.
					<br />
					Hãy tưởng tượng nó như một băng chuyền xử lý dữ liệu có khả năng tùy chỉnh cao: dữ liệu thô của bạn được đưa
					vào đầu băng chuyền, đi qua các stage để được lọc, biến đổi, nhóm, sắp xếp... và cuối cùng cho ra kết quả mong
					muốn.
				</p>
				<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">Điểm mạnh của Aggregation:</li>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Hiệu năng vượt trội (Optimized Performance):</b> Pipeline có khả năng tận dụng các chỉ mục (Index) đã
							có để lọc ($match) và sắp xếp ($sort) tài liệu ngay từ giai đoạn đầu, giúp giảm đáng kể số lượng dữ liệu
							cần xử lý trong các giai đoạn tiếp theo. Bên cạnh đó, toàn bộ quá trình tính toán và chuyển đổi dữ liệu
							diễn ra ngay trên server MongoDB, giảm thiểu việc phải truyền lượng lớn dữ liệu thô về ứng dụng.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Vô cùng linh hoạt:</b> Chúng ta có thể xâu chuỗi hàng chục giai đoạn (stage) lại với nhau, mỗi giai
							đoạn thực hiện một phép toán cụ thể (lọc, nhóm, biến đổi, nối).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Biến đổi dữ liệu:</b> Aggregation cung cấp hàng trăm toán tử (Operators) như toán học ($add,
							$multiply), xử lý chuỗi ($concat, $substr), xử lý ngày tháng, và logic điều kiện, cho phép tính toán mọi
							giá trị mong muốn. Ngoài ra, với output chúng ta có thể chuyển đổi cấu trúc của tài liệu đầu ra theo bất
							kỳ định dạng nào yêu cầu, bao gồm việc thêm, xóa, hoặc đổi tên trường ($project, $addFields, $set).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Khả năng kết nối (Joining):</b> Aggregation có <b>$lookup</b> - Cung cấp chức năng tương tự như LEFT
							OUTER JOIN trong SQL, cho phép bạn kết hợp dữ liệu từ một collection khác vào tài liệu hiện tại trong
							pipeline.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Túm lại:</b> <b>Aggregation</b> là quá trình xử lý dữ liệu để tóm gọn, nhóm, tính toán hoặc biến đổi dữ
					liệu từ nhiều document, và MongoDB dùng <b>aggregation pipeline</b> để thực hiện.
				</p>
				<PageHeading text="Aggregation Pipeline" addOnClass="text-left" markedAs="sort" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Một pipeline là tập hợp các stage (các bước xử lý).</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Mỗi stage nhận input từ stage trước, xử lý, rồi trả output cho stage sau. </span>
					</li>
				</ul>
				<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">Ví dụ:</li>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="Các stage quan trọng" addOnClass="text-left mt-3" markedAs="states" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cùng liệt kê xem các state và ý nghĩa của chúng cũng như vị trí nên sử dụng trong pipeline nào:
				</p>
				<div class="flex items-center gap-2 my-2">
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img
							src="@/assets/images/documentation/agg-pipeline.png"
							alt="just vibing"
							class="d-block h-[350px] mt-3"
						/>
					</div>
				</div>
				<div v-for="item in states" :key="item.name" class="mb-2 col-span-1 border rounded-lg h-fit">
					<Disclosure>
						<DisclosureButton as="div" class="cursor-pointer flex items-center justify-between py-1 px-3 rounded-lg">
							<p class="text-slate-900 dark:text-white my-1 leading-8 text-lg text-content font-bold">
								{{ item.name }}:
							</p>
						</DisclosureButton>
						<transition
							enter-active-class="transition duration-100 ease-out"
							enter-from-class="transform scale-95 opacity-0"
							enter-to-class="transform scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-out"
							leave-from-class="transform scale-100 opacity-100"
							leave-to-class="transform scale-95 opacity-0"
						>
							<DisclosurePanel>
								<div class="mx-3">
									<ul class="pl-5">
										<li
											v-for="content in item.contents"
											:key="content"
											class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
										>
											<span> {{ content }}</span>
										</li>
									</ul>
									<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">Ví dụ:</p>
									<VCodeBlock :code="item.example" highlightjs lang="js" theme="atom-one-dark" />
									<ul class="pl-5">
										<li
											class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
										>
											<span> <b>Mục đích:</b> {{ item.target }}</span>
										</li>
										<li
											class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
										>
											<span> <b>Vị trí Tối ưu:</b> {{ item.placed }}</span>
										</li>
									</ul>
								</div>
							</DisclosurePanel>
						</transition>
					</Disclosure>
				</div>

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
				states: [
					{
						name: '🔥$match',
						contents: ['Tương tự WHERE trong SQL', 'Lọc document dựa trên điều kiện.'],
						target: 'Giảm dữ liệu đầu vào càng sớm càng tốt.',
						placed: 'Nên đặt ở đầu pipeline để tận dụng index.',
						example: `db.users.aggregate([
	  { $match: { age: { $gte: 18, $lte: 30 } } }
	])`,
					},
					{
						name: '🔥$project',
						contents: ['Chọn/biến đổi các field trong output', 'Có thể thêm field mới, ẩn field, đổi cấu trúc.'],
						target: 'Chỉ giữ lại dữ liệu cần thiết, giảm tải cho các stage sau.',
						placed: 'Thường đặt ngay sau $match để loại bỏ field dư thừa.',
						example: `db.users.aggregate([
	  { $project: { _id: 0, name: 1, birthYear: { $year: "$dob" } } }
	])`,
					},
					{
						name: '🔥$group',
						contents: [
							'Gom nhóm dữ liệu theo một hoặc nhiều field',
							'Thường dùng với hàm tích lũy ($sum, $avg, $max, $min...).',
						],
						target: 'Tạo báo cáo thống kê, tổng hợp dữ liệu.',
						placed: 'Nên sau $match và $project để giảm lượng dữ liệu cần group.',
						example: `db.orders.aggregate([
	  { $group: {
	      _id: "$customerId",
	      totalSpent: { $sum: "$amount" },
	      avgSpent: { $avg: "$amount" },
	      orders: { $sum: 1 }
	  } }
	])`,
					},
					{
						name: '🔥$sort',
						contents: ['Sắp xếp document theo field.'],
						target: 'Trả dữ liệu theo một thứ tự cụ thể.',
						placed: 'Đặt sau $match/$group, nhưng cẩn trọng vì tốn RAM.',
						example: `db.orders.aggregate([
	  { $sort: { total: -1 } }
	])`,
					},
					{
						name: '$limit & $skip',
						contents: ['$limit: giới hạn số lượng document', '$skip: bỏ qua một số document.'],
						target: 'Phân trang dữ liệu hoặc giới hạn kết quả.',
						placed: 'Đặt sau $sort để lấy dữ liệu top/bottom.',
						example: `db.products.aggregate([
	  { $sort: { price: -1 } },
	  { $skip: 5 },
	  { $limit: 10 }
	])`,
					},
					{
						name: '$unwind',
						contents: ['Phẳng hóa (deconstruct) mảng thành nhiều document riêng biệt.'],
						target: 'Phân tách mảng để xử lý từng phần tử.',
						placed: 'Đặt trước $group hoặc $lookup khi cần làm việc với từng item trong mảng.',
						example: `db.users.aggregate([
	  { $unwind: "$hobbies" }
	])`,
					},
					{
						name: '🔥$lookup',
						contents: ['Join dữ liệu giữa các collection.', 'Tương tự JOIN trong SQL.'],
						target: 'Kết hợp dữ liệu từ nhiều collection.',
						placed: 'Đặt sau $match để giảm dữ liệu cần join.',
						example: `db.orders.aggregate([
  {
    $lookup: {
      from: "menus",
      localField: "items",
      foreignField: "_id",
      as: "menuDocs"
    }
  },
	{ $unwind: "$menuDocs" },
  {
    $lookup: {
      from: "restaurants",
      localField: "menuDocs.restaurant_id",
      foreignField: "_id",
      as: "restaurantDocs"
    }
  },
	{ $unwind: "$restaurantDoc" },
  {
    $project: {
      orderId: "$_id",
      status: 1,
      customer_id: 1,
      menus: "$menuDocs.name",
      restaurants: "$restaurantDocs.name"
    }
  }
])`,
					},
					{
						name: '$addFields',
						contents: ['Thêm hoặc tính toán thêm field mới.'],
						target: 'Tạo field tính toán, enrich dữ liệu.',
						placed: 'Đặt sau $match/$project, trước khi $group nếu cần field mới để group. Hoặc đổi loại dữ liệu.',
						example: `db.products.aggregate([
	  { $addFields: { discountPrice: { $multiply: ["$price", 0.9] } } }
	])`,
					},
					{
						name: '$set',
						contents: ['Alias của $addFields (MongoDB 4.2+).'],
						target: "Tương tự $addFields, dễ nhớ hơn khi 'set' giá trị.",
						placed: 'Giống $addFields.',
						example: `db.products.aggregate([
	  { $set: { finalPrice: { $multiply: ["$price", 0.8] } } }
	])`,
					},
					{
						name: '$unset',
						contents: ['Loại bỏ field khỏi output.'],
						target: 'Ẩn dữ liệu nhạy cảm hoặc field không cần thiết.',
						placed: 'Đặt sau khi đã tính toán xong các field cần thiết.',
						example: `db.users.aggregate([
	  { $unset: ["password", "ssn"] }
	])`,
					},
					{
						name: '$facet',
						contents: ['Chạy nhiều pipeline song song trong một aggregation.', 'Thường dùng để phân tích đa chiều.'],
						target: 'Trả nhiều góc nhìn phân tích trong một lần query.',
						placed: 'Thường đặt cuối pipeline vì trả về nhiều nhánh kết quả.',
						example: `db.users.aggregate([
	  { $facet: {
	      byAge: [
	        { $bucket: {
	            groupBy: "$age",
	            boundaries: [0,18,30,50,100],
	            default: "Other",
	            output: { count: { $sum: 1 } }
	        } }
	      ],
	      byGender: [
	        { $group: { _id: "$gender", count: { $sum: 1 } } }
	      ]
	  } }
	])`,
					},
					{
						name: '$bucket & $bucketAuto',
						contents: [
							'$bucket: tự định nghĩa khoảng (range).',
							'$bucketAuto: MongoDB tự chia khoảng dựa trên số lượng bucket mong muốn.',
						],
						target: 'Phân loại dữ liệu theo khoảng giá trị.',
						placed: 'Thường đặt sau $match để bucket ít dữ liệu hơn.',
						example: `db.users.aggregate([
	  { $bucket: {
	      groupBy: "$age",
	      boundaries: [0,18,30,50,100],
	      default: "Other",
	      output: { count: { $sum: 1 } }
	  } }
	])`,
					},
					{
						name: '$merge & $out',
						contents: ['$merge: merge dữ liệu vào collection khác (MongoDB 4.2+).', '$out: ghi đè toàn bộ collection.'],
						target: 'Lưu kết quả aggregation ra collection để tái sử dụng.',
						placed: 'Thường đặt cuối pipeline.',
						example: `db.sales.aggregate([
	  { $group: { _id: "$region", total: { $sum: "$amount" } } },
	  { $merge: "sales_summary" }
	])`,
					},
				],
				lessonSum: [
					'Aggregation là quá trình xử lý, phân tích, gom nhóm và biến đổi dữ liệu ngay trên MongoDB server.',
					'Aggregation Pipeline là chuỗi các stage, mỗi stage nhận input → xử lý → trả output cho stage tiếp theo.',
					'Ưu điểm: hiệu năng cao nhờ tận dụng index, giảm dữ liệu sớm, toàn bộ xử lý trên server thay vì client.',
					'Thứ tự tối ưu thường dùng: $match (lọc sớm) → $project (giữ field cần thiết) → $group/$lookup (tính toán, join) → $sort → $limit/$skip.',
					'Có thể kết hợp nhiều stage để xây dựng báo cáo phức tạp, thống kê, và tái cấu trúc dữ liệu.',
				],
				b1: `db.orders.aggregate([
	  { $match: { status: "completed" } },     // Lọc dữ liệu
	  { $group: { _id: "$customerId", total: { $sum: "$amount" } } }, // Gom nhóm
	  { $sort: { total: -1 } }                 // Sắp xếp
	])
	`,
				b2: `db.users.aggregate([
	  { $match: { age: { $gte: 18, $lte: 30 } } }
	])`,
				b3: `db.users.aggregate([
	  { $project: { _id: 0, name: 1, birthYear: { $year: "$dob" } } }
	])`,
				b4: `db.orders.aggregate([
	  { $group: {
	      _id: "$customerId",
	      totalSpent: { $sum: "$amount" },
	      avgSpent: { $avg: "$amount" },
	      orders: { $sum: 1 }
	  } }
	])`,
				b5: `db.orders.aggregate([
	  { $sort: { total: -1 } } // giảm dần
	])`,
				b6: `// Sử dụng Cursor-based Pagination
	db.foods.find({ _id: { $lt: ObjectId("64f0c8e2e1b1c8a1b2c3d4e5") } })

	// Sử dụng keyset pagination với trường createdAt
	db.foods.find({ createdAt: { $lt: ISODate("2025-09-01T00:00:00Z") } })
	  .sort({ createdAt: -1 })
	  .limit(10);`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-7' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Truy vấn nâng cao trong MongoDB" addOnClass="text-left" markedAs="qa" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ở bài này, chúng ta tìm hiểu sâu hơn về các phương thức truy vấn nâng cao trong MongoDB, ứng dụng thực tiễn
					khi làm việc với dữ liệu phức tạp.
				</p>
				<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
					Trong thực tế, một hệ thống đặt món ăn online (food delivery) cần xử lý rất nhiều truy vấn phức tạp:
				</li>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Khách hàng muốn xem top 5 món bán chạy nhất. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Trang menu cần phân trang, sắp xếp theo giá hoặc đánh giá. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Khách hàng muốn tìm kiếm nhanh “trà sữa” hoặc “cà phê” bằng từ khóa. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Admin muốn xem danh sách đơn hàng mới nhất. </span>
					</li>
				</ul>
				<PageHeading text="Sorting (Sắp xếp dữ liệu)" addOnClass="text-left" markedAs="sort" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Dùng hàm <FilePath>sort()</FilePath> để sắp xếp kết quả theo một hoặc nhiều trường:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>1</b> = tăng dần (ASC)</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>2</b> = giảm dần (DESC)</span>
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Sort</b> tương tự với <b>ORDER BY trong SQL</b>, có thể sắp xếp nhiều trường cùng lúc. MongoDB thực hiện
					sắp xếp trong bộ nhớ (in-memory) nếu không tìm thấy index phù hợp. Khi kết quả trả về quá lớn và vượt quá giới
					hạn bộ nhớ cho phép (thường là 100 MB), MongoDB sẽ gặp lỗi Sort operation exceeded memory limit. Để khắc phục
					vấn đề này chúng ta có thể:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>Tạo index trên trường cần sắp xếp.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							>Cho phép sắp xếp trên đĩa cứng bằng tùy chọn { allowDiskUse: true }, nhưng điều này sẽ làm giảm đáng kể
							hiệu năng vì việc ghi/đọc dữ liệu từ ổ cứng chậm hơn rất nhiều so với RAM.</span
						>
					</li>
				</ul>
				<PageHeading text="Limit & Skip" addOnClass="text-left" markedAs="sort" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Syntax:</b>
				</p>
				<VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Ví dụ:</b>
				</p>
				<VCodeBlock :code="b4" highlightjs lang="js" theme="atom-one-dark" />
				<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">Trong thực tế:</li>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> App hiển thị menu theo trang (pagination), mỗi trang 10 món. </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Lưu ý:</b> Khi dùng skip để phân trang, hiệu năng sẽ giảm dần khi trang càng lớn vì MongoDB vẫn phải duyệt
					qua tất cả các document bị bỏ qua. Để cải thiện hiệu năng, chúng ta có thể sử dụng kỹ thuật "range-based
					pagination".
				</p>
				<PageHeading text="Pagination Patterns" addOnClass="text-left" markedAs="pagination" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Trong thực tế, chúng ta sẽ sử dụng 2 cách chính để phân trang dữ liệu cho hiệu quả:
				</p>
				<PageHeading text="1/ skip + limit" addOnClass="text-left" markedAs="skip_and_limit" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>Dễ dùng, Phù hợp khi dữ liệu nhỏ</span>
					</li>
				</ul>
				<VCodeBlock :code="b5" highlightjs lang="js" theme="atom-one-dark" />
				<PageHeading text="2/ range-based pagination" addOnClass="text-left mt-3" markedAs="range_based" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							>Ý tưởng chính của kỹ thuật này là sử dụng một trường độc nhất (unique) và được index làm điểm neo
							<b>(anchor point)</b> để xác định điểm bắt đầu và kết thúc của mỗi trang</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Hiệu suất vượt trội:</b> Trong trường hợp có số lượng bản ghi cực lớn thì kỹ thuật này có hiệu suất vô
							cùng vượt trội khi so với việc dùng bộ đôi <FilePath>skip + limit</FilePath></span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Độ tin cậy cực cao:</b><FilePath>skip + limit</FilePath> có thể bị sai lệch nếu dữ liệu thay đổi (ví
							dụ: thêm/xóa document) giữa các lần tải trang. Range-based pagination thì không bị ảnh hưởng vì mỗi truy
							vấn đều dựa trên một điểm neo cố định từ trang trước đó.</span
						>
					</li>
				</ul>
				<VCodeBlock :code="b6" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Để so sánh rõ ràng hơn chúng ta có thể sử dụng <FilePath>explain('executionStats')</FilePath>
					để xem chi tiết hiệu năng của từng truy vấn. Ví dụ tốt nhất với collection có số lượng bản ghi cực lớn (> 500
					nghìn document).
				</p>

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
					'Sorting: dùng sort({ field: 1/-1 }) để sắp xếp tăng/giảm, có thể nhiều trường cùng lúc. Tối ưu bằng index, tránh lỗi memory limit.',
					'Limit & Skip: dùng limit(n), skip(n) để giới hạn và bỏ qua dữ liệu. Hữu ích cho phân trang cơ bản nhưng kém hiệu quả khi dữ liệu lớn.',
					'Pagination Patterns:',
					'- skip + limit: dễ dùng, phù hợp dữ liệu nhỏ. Ví dụ trang 3, mỗi trang 10 món → skip(20).limit(10).',
					'- range-based pagination (cursor/keyset): hiệu suất cao, ổn định khi dữ liệu thay đổi.',
				],
				b1: `db.collection.find(query).sort({ field: 1/-1 })`,
				b2: `// Sắp xếp món ăn theo giá tăng dần
db.foods.find().sort({ price: 1 })

// Sắp xếp món ăn theo số lượng bán giảm dần
db.foods.find().sort({ sold: -1 })

// Sắp xếp nhiều trường: theo rating giảm dần, nếu bằng thì theo giá tăng
db.foods.find().sort({ rating: -1, price: 1 })
`,
				b3: `db.collection.find(query).limit(n)
db.collection.find(query).skip(n)
`,
				b4: `// Lấy 5 món ăn đầu tiên
db.foods.find().limit(5)

// Bỏ qua 10 món đầu tiên, lấy 5 món tiếp theo
db.foods.find().skip(10).limit(5)
`,
				b5: `// Trang 3, mỗi trang 10 món
db.foods.find()
  .sort({ createdAt: -1 })
  .skip(20)
  .limit(10)
`,
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

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Document" addOnClass="text-left" markedAs="document" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong MongoDB, một tài liệu (Document) đơn vị dữ liệu cơ bản để chứa các thông tin, tương tự như row trong
					SQL. MongoDB cho phép bạn tạo, xóa và quản lý các Document một cách dễ dàng.
				</p>
				<PageHeading text="Create" addOnClass="text-left" markedAs="create" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Để thêm một Document vào Collection, chúng ta có thể sử dụng phương thức <b>insertOne()</b> hoặc
					<b>insertMany()</b>.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Được biểu diễn dưới dạng <b>BSON (Binary JSON)</b> – cho phép: </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Lưu kiểu dữ liệu mở rộng (ngày giờ, nhị phân, ObjectId, Decimal128, …). Dễ dàng nhúng dữ liệu (nested
							document).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Khác với record/row trong SQL, document có thể linh hoạt về cấu trúc, không cần tất cả record có cùng
							schema.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Có thể tự sinh <b>_id</b> cho mỗi document nếu không cung cấp, đảm bảo tính duy nhất. </span>
					</li>
				</ul>
				<DocFactoryV2Table :headers="headers" :items="items" />
				<div class="bg-neutral-100 rounded-lg px-3 py-3 mt-3">
					<img src="@/assets/images/documentation/mongodb-4.png" alt="just vibing" class="d-block h-[250px] mt-3" />
				</div>

				<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
					<b>🔥Đặc điểm hoạt động</b>
				</li>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Atomicity:</b> Việc chèn document là nguyên tử trên từng document → hoặc thêm thành công toàn bộ
							document, hoặc thất bại.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Không atomic trên nhiều document (trừ khi dùng Transaction – từ MongoDB 4.0 trở đi). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Với <b>insertMany()</b>, tùy thuộc vào <b>ordered</b> mà MongoDB sẽ bỏ qua document lỗi và tiếp tục thêm
							document khác, hay dừng lại.
						</span>
					</li>
				</ul>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="Read" addOnClass="text-left mt-2" markedAs="read" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cơ chế đọc dữ liệu (Read) với truy vấn đơn giản sử dụng phương thức <b>find()</b> và <b>pretty()</b>
					<br />
					<b>Trong đó:</b>
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> MongoDB sử dụng <b>ngôn ngữ truy vấn JSON.</b> </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>query:</b> điều kiện lọc → tương tự <b>WHERE</b> trong SQL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>projection:</b> chọn trường hiển thị → tương tự <b>SELECT column</b> trong SQL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>find:</b> trả về <b>cursor</b>, cho phép duyệt nhiều document. </span>
					</li>
				</ul>
				<DocFactoryV2Table :headers="headers2" :items="items2" />
				<PageHeading text="Query" addOnClass="text-left mt-2" markedAs="query" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Trong MongoDB, <b>query</b> là một đối tượng JavaScript được sử dụng để lọc dữ liệu khi thực hiện các thao tác
					đọc. Nó được sử dụng trong các phương thức như <FilePath>find()</FilePath> và
					<FilePath>findOne()</FilePath> để chỉ định các tài liệu (documents) mà chúng ta muốn truy xuất từ một
					collection.
					<br />
					Một query object về cơ bản là một đối tượng BSON (Binary JSON) mô tả các điều kiện cần thỏa mãn. Cú pháp cơ
					bản của một query là <b>{ field:value }</b>, trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>field:</b> là tên của trường dữ liệu </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>value:</b> là giá trị muốn tìm. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Các truy vấn thường dùng: </span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> Truy vấn chính xác </span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> Truy vấn so sánh (>, &lt, =, ...) </span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> Truy vấn logic (AND, OR, NOT, …) </span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> Truy vấn trên mảng </span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> Truy vấn trên document lồng nhau </span>
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="Cách viết Query" addOnClass="text-left mt-2" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Tiếp theo, cùng tìm hiểu các cách viết query phổ biến trong MongoDB:
				</p>
				<PageHeading text="1/ Truy vấn đơn giản (Exact Match)" addOnClass="text-left my-2" :lvl="3" />
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="2/ Toán tử so sánh" addOnClass="text-left mt-2" :lvl="3" />
				<DocFactoryV2Table :headers="headers3" :items="items3" />
				<p class="text-slate-900 dark:text-white my-2 leading-8"><b>Ví dụ:</b> tìm sinh viên từ 18–22 tuổi</p>
				<VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="3/ Toán tử logic" addOnClass="text-left mt-2" :lvl="3" />
				<DocFactoryV2Table :headers="headers4" :items="items4" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Ví dụ:</b> tìm sinh viên lớp CNTT1 hoặc có GPA ≥ 3.5
				</p>
				<VCodeBlock :code="b4" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="4/ Truy vấn mảng" addOnClass="text-left mt-2" :lvl="3" />
				<DocFactoryV2Table :headers="headers5" :items="items5" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Ví dụ:</b> tìm sinh viên biết cả MongoDB và Node.js
				</p>
				<VCodeBlock :code="b5" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="5/ Truy vấn document lồng nhau (Embedded Document)" addOnClass="text-left mt-2" :lvl="3" />
				<!-- <DocFactoryV2Table :headers="headers6" :items="items5" /> -->
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Nếu field là một object lồng nhau, ta truy vấn bằng <b>dot notation</b> (field.subfield).
				</p>
				<VCodeBlock :code="b6" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="6/ Truy vấn bằng Regex (biểu thức chính quy)" addOnClass="text-left mt-2" :lvl="3" />
				<!-- <DocFactoryV2Table :headers="headers6" :items="items5" /> -->
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Truy vấn này giống như sử dụng LIKE trong SQL, giúp tìm kiếm các chuỗi con trong trường văn bản.
					<br />
					<b>Ví dụ:</b> Lấy sinh viên có tên bắt đầu bằng "Nguyễn" (không phân biệt hoa thường).
				</p>
				<VCodeBlock :code="b7" highlightjs lang="js" theme="atom-one-dark" />
				<PageHeading text="Projection" addOnClass="text-left mt-2" markedAs="projection" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Projection</b> là cách để chọn các trường (fields) cụ thể mà bạn muốn hiển thị trong kết quả truy vấn. Mặc
					định, khi bạn thực hiện một truy vấn mà không chỉ định projection, MongoDB sẽ trả về tất cả các trường của các
					document.
					<br />
					<b>Ví dụ:</b>Lấy 1 sinh viên đầu tiên có GPA ≥ 3.5, chỉ hiển thị name và gpa.
				</p>
				<VCodeBlock :code="b8" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Kết hợp toán tử:</b>Lấy Sinh viên có GPA >= 3.0 và thuộc CNTT1 hoặc CNTT2.
				</p>
				<VCodeBlock :code="b9" highlightjs lang="js" theme="atom-one-dark" />
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
					`Hiểu khái niệm Document trong MongoDB (tương tự row trong SQL, nhưng linh hoạt schema).`,
					`Document được lưu dưới dạng BSON, hỗ trợ kiểu dữ liệu mở rộng và nhúng (embedded document).`,
					`Mỗi document có trường _id duy nhất (tự sinh nếu không cung cấp).`,
					`Thêm dữ liệu: <b>insertOne()</b> để thêm 1 document, <b>insertMany()</b> để thêm nhiều documents.`,
					`Đặc điểm: atomic trên từng document; nhiều documents cần transaction (MongoDB 4.0+).`,
					`Truy vấn: <b>findOne()</b> trả về document đầu tiên, <b>find()</b> trả về cursor; có thể dùng <b>pretty()</b> để hiển thị đẹp.`,
					`Query sử dụng JSON object: so sánh ($eq, $gt, $lte...), logic ($and, $or, $not, $nor), mảng ($in, $all, $size...), embedded document (dot notation), regex.`,
					`Projection: chọn trường cần hiển thị (1 = hiển thị, 0 = ẩn).`,
					`Có thể kết hợp nhiều toán tử trong cùng query để lọc dữ liệu phức tạp.`,
				],
				headers: [
					{
						id: 1,
						name: 'Hàm',
						key: 'command',
					},
					{
						id: 2,
						name: 'Cú pháp',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Mô tả',
						key: 'example',
					},
				],
				items: [
					{
						command: 'insertOne(document)',
						syntax: 'db.collection.insertOne(document)',
						example: 'Thêm một document',
					},
					{
						command: 'insertMany([document1, document2, ...], options)',
						syntax: 'db.collection.insertMany([doc1, doc2, ...])',
						example: 'Thêm nhiều documents',
					},
				],
				b1: `// Thêm 1 document
db.students.insertOne({
  name: "Nguyễn Văn B",
  age: 20,
  class: "CNTT1",
  gpa: 3.2
})

// Thêm nhiều document, bỏ qua lỗi
db.students.insertMany(
  [
    { name: "Trần Thị C", age: 'abc', class: "CNTT2" },
    { name: "Lê Văn D", age: 19, class: "CNTT1" }
  ],
  { ordered: false }
)`,
				b2: `db.students.find({ name: "Nguyễn Văn A" });`,
				b3: `db.students.find({ age: { $gte: 18, $lte: 22 } });`,
				b4: `db.students.find({ $or: [ { class: "CNTT1" }, { gpa: { $gte: 3.5 } } ] });`,
				b5: `// tìm sinh viên có kỹ năng “MongoDB”
db.students.find({ skills: "MongoDB" })
// tìm sinh viên biết cả MongoDB và Node.js
db.students.find({ skills: { $all: ["MongoDB", "Node.js"] } })`,
				b6: `// Document có dạng:
{
  name: "Nguyễn Văn A",
  address: { city: "Hà Nội", zip: "100000" }
}

// Truy vấn city
db.students.find({ "address.city": "Hà Nội" })
`,
				b7: `db.students.find({ name: { $regex: /^Nguyễn/, $options: "i" } });`,
				b8: `db.students.findOne(
  { gpa: { $gte: 3.5 } },
  { name: 1, gpa: 1, _id: 0 }
)`,
				b9: `db.students.find({
  $and: [
    { gpa: { $gte: 3.0 } },
    {
      $or: [
        { class: "CNTT1" },
        { class: "CNTT2" }
      ]
    }
  ]
})
`,
				headers2: [
					{
						id: 1,
						name: 'Hàm',
						key: 'command',
					},
					{
						id: 2,
						name: 'Cú pháp',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Mô tả',
						key: 'example',
					},
				],
				items2: [
					{
						command: 'findOne()',
						syntax: 'db.collection.findOne(query, projection)',
						example: 'Lấy 1 document đầu tiên khớp query',
					},
					{
						command: 'find()',
						syntax: 'db.collection.find(query, projection)',
						example: 'Lấy nhiều documents dưới dạng cursor',
					},
					{
						command: 'pretty()',
						syntax: 'db.collection.find().pretty()',
						example: 'Hiển thị JSON đẹp hơn',
					},
				],
				headers3: [
					{
						id: 1,
						name: 'Toán tử',
						key: 'operator',
					},
					{
						id: 2,
						name: 'Ý nghĩa',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items3: [
					{
						operator: '$eq',
						syntax: 'Bằng (=)',
						example: '{ age: { $eq: 20 } }',
					},
					{
						operator: '$ne',
						syntax: 'Khác (!=)',
						example: '{ age: { $ne: 20 } }',
					},
					{
						operator: '$gt',
						syntax: 'Lớn hơn (>)',
						example: '{ age: { $gt: 18 } }',
					},
					{
						operator: '$gte',
						syntax: 'Lớn hơn hoặc bằng (>=)',
						example: '{ age: { $gte: 18 } }',
					},
					{
						operator: '$lt',
						syntax: 'Nhỏ hơn (<)',
						example: '{ age: { $lt: 30 } }',
					},
					{
						operator: '$lte',
						syntax: 'Nhỏ hơn hoặc bằng (<=)',
						example: '{ age: { $lte: 30 } }',
					},
				],
				headers4: [
					{
						id: 1,
						name: 'Toán tử',
						key: 'operator',
					},
					{
						id: 2,
						name: 'Ý nghĩa',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items4: [
					{
						operator: '$and',
						syntax: 'Tất cả điều kiện đúng',
						example: '{ $and: [ { age: { $gt: 18 } }, { gpa: { $gte: 3.0 } } ] }',
					},
					{
						operator: '$or',
						syntax: 'Một trong các điều kiện đúng',
						example: '{ $or: [ { class: "CNTT1" }, { class: "CNTT2" } ] }',
					},
					{
						operator: '$not',
						syntax: 'Phủ định điều kiện',
						example: '{ age: { $not: { $gt: 30 } } }',
					},
					{
						operator: '$nor',
						syntax: 'Tất cả điều kiện đều sai',
						example: '{ $nor: [ { age: 20 }, { class: "CNTT1" } ] }',
					},
				],
				headers5: [
					{
						id: 1,
						name: 'Toán tử',
						key: 'operator',
					},
					{
						id: 2,
						name: 'Ý nghĩa',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items5: [
					{
						operator: 'Truy vấn phần tử',
						syntax: 'Khớp một giá trị trong mảng',
						example: '{ skills: "MongoDB" }',
					},
					{
						operator: '$all',
						syntax: 'Chứa tất cả giá trị trong mảng',
						example: '{ skills: { $all: ["MongoDB", "Node.js"] } }',
					},
					{
						operator: '$in',
						syntax: 'Khớp với 1 trong nhiều giá trị',
						example: '{ class: { $in: ["CNTT1", "CNTT2"] } }',
					},
					{
						operator: '$nin',
						syntax: 'Không khớp giá trị nào trong danh sách',
						example: '{ age: { $nin: [18, 19, 20] } }',
					},
					{
						operator: '$size',
						syntax: 'Độ dài mảng',
						example: '{ skills: { $size: 3 } }',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-5' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

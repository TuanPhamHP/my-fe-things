<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Collection" addOnClass="text-left" markedAs="about" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong MongoDB, một collection là một tập hợp các document cùng ngữ cảnh, chúng không có tính ép buộc về schema
					(schema-less). Điều này có nghĩa là các document trong cùng một collection có thể có cấu trúc khác nhau.
					Collection tương tự như bảng (table) trong RDBMS. Tuy nhiên chúng ta có thể dùng các tùy chọn (capped,
					validator, collation) để kiểm soát hành vi của collection.
				</p>
				<PageHeading text="Tạo mới" addOnClass="text-left mt-5" markedAs="create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Về cơ bản chúng ta có 2 cách để tạo collection:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Tạo ngầm (Implicitly):</b> Đây là cách đơn giản nhất. Khi bạn thêm document đầu tiên vào một
							collection chưa tồn tại, MongoDB sẽ tự động tạo collection đó cho chúng ta.</span
						>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ví dụ: Bạn chưa có collection <b>menus</b>. Khi bạn chạy lệnh
							<FilePath>db.menus.insertOne({ name: "Bánh mì", price: 20000 })</FilePath>, MongoDB sẽ tự động tạo
							collection <b>menus</b> và chèn document vào.
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Tạo tường minh (Explicitly):</b> Sử dụng lệnh <FilePath>db.createCollection()</FilePath> giúp bạn có
							thể cấu hình collection trước khi chèn dữ liệu, chẳng hạn như thêm <b>validator</b> hoặc tạo
							<b>Capped Collection</b>.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Lưu ý:</b> Trong MongoDB không có hàm kiểu createCollectionIfNotExist như trong SQL đâu.
					MongoDB theo triết lý lười tạo (lazy creation). 
					<br>Nếu chúng ta tạo theo kiểu <b>explicit</b> sẽ bị báo lỗi 
					<b><em>Collection already exists.</em></b> nhe. Trong trường hợp này có thể dùng <FilePath>db.getCollectionNames()</FilePath>
					để kiểm tra collection đã tồn tại chưa trước khi tạo.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					=> Đây là cách rất phổ biến nếu bạn phải tạo một collection capped hoặc có validator.
				</p>
				<PageHeading text="Xóa" addOnClass="text-left mt-2" markedAs="drop" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Để xóa một collection, chúng ta có thể dùng <FilePath>drop()</FilePath> trong mongosh.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Xóa dữ liệu trong collection:</b> Nếu chúng ta chỉ muốn xóa dữ liệu trong collection, ta có thể dùng
							lệnh <FilePath>deleteMany()</FilePath>
							để xóa mọi document nhưng giữ lại collection & index (thích hợp khi muốn giữ cấu trúc/index).
						</span>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ví dụ: Bạn có collection <b>menus</b>, và muốn xóa tất cả document bên trong nhưng giữ lại collection &
							index, bạn có thể chạy lệnh <FilePath>db.menus.deleteMany({})</FilePath>.
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Xóa luôn collection:</b> Trong trường hợp bạn muốn xóa toàn bộ collection + toàn bộ index của nó.
							Không thể hoàn tác.</span
						>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Ví dụ: Bạn có collection <b>menus</b>, và muốn xóa nguyên cả cái collection này và các index liên quan:
								<FilePath>db.menus.drop()</FilePath>.
							</li>
						</ul>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Trong trường hợp bạn muốn xóa bằng <FilePath>drop()</FilePath>, bạn nên lấy đúng thông tin collection để tránh
					thao tác nhầm, ngoài ra bạn có thể đếm ước lượng số document trong collection trước khi xóa để có thể đánh giá
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Các bạn có thể làm theo các bước sau: </span>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<span
								>1/ <FilePath>db.getCollectionInfos({ name: "menus" })</FilePath> để kiểm tra collection có tồn tại
								không.
							</span>
						</li>
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<span
								>2/ <FilePath>db.menus.estimatedDocumentCount()</FilePath> để đếm số document trong collection (ước
								lượng nhanh).
							</span>
						</li>
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<span>3/ <FilePath>db.menus.drop()</FilePath> để xóa collection. </span>
						</li>
					</ul>
				</ul>

				<PageHeading text="Capped Collection" addOnClass="text-left mt-5" markedAs="capped" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Capped Collection</b> là một loại collection đặc biệt với kích thước cố định, hoạt động như một hàng đợi
					vòng tròn. Khi collection đạt đến giới hạn dung lượng, document mới sẽ ghi đè lên document cũ nhất.
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span><b>🔥Đặc điểm:</b> </span>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Kích thước cố định:</b> Bạn phải xác định kích thước tối đa (byte) khi tạo.
						</li>
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Ghi vòng:</b> Khi đầy, document mới sẽ thay thế document đầu tiên được thêm vào.
						</li>
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Hỗ trợ tốc độ ghi rất nhanh</b> vì MongoDB không phải quản lý lại dung lượng mỗi lần insert. Do các
							document có thứ tự chèn (insert order) được duy trì.
						</li>
					</ul>
				</ul>

				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Hữu ích cho Log/Stream: Loại collection này rất lý tưởng để lưu trữ các bản ghi log, dữ liệu theo thời gian,
					hoặc bất kỳ dữ liệu nào mà bạn chỉ cần giữ lại các bản ghi gần nhất. Nó giúp tiết kiệm bộ nhớ và dễ dàng quản
					lý.
					<br />
					Một số ví dụ best-choice cho capped collection:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Real-time data stream:</b> Dữ liệu IoT sensor, Bảng giá chứng khoán, tiền điện tử, Dữ liệu stream chat.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Ghi log hệ thống (System logs / Application logs):</b> Lưu log server, log request API, log lỗi ...
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Cache tạm thời:</b> Các snapshot kết quả tính toán real-time, trạng thái người dùng ...
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Ví dụ:</b> tạo một capped-collection <b>order_logs</b> dung lượng 1 MB, tối đa 50 documents.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="Collation" addOnClass="text-left mt-5" markedAs="capped" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Collation</b> định nghĩa các quy tắc để so sánh chuỗi (string), ví dụ như việc so sánh có phân biệt chữ
					hoa/thường hay có dấu/không dấu không.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span><b>Mặc định:</b> </span> Khi không chỉ định, MongoDB sẽ so sánh theo quy tắc nhị phân (binary
						comparison), phân biệt chữ hoa/thường và có dấu.
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Ví dụ:</b> Khi sắp xếp, <b>A</b> sẽ đứng trước <b>a</b>, và <b>á</b> sẽ đứng sau <b>a</b>.
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span><b>Sử dụng trong Collection:</b> </span> Chúng ta có thể định nghĩa collation khi tạo collection để
						thay đổi hành vi sắp xếp và truy vấn.
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Ví dụ:</b> Để sắp xếp các tên sản phẩm tiếng Việt một cách chính xác mà không phân biệt chữ
								hoa/thường hoặc có dấu, bạn có thể tạo collection với collation-locale:
							</li>
							<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
								<FilePath>db.createCollection("sanPham", { collation: { locale: "vi", strength: 1 } })</FilePath>
							</li>
						</ul>
					</li>
				</ul>

				<PageHeading text="Validation" addOnClass="text-left mt-5" markedAs="validation" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Validation </b> là một tính năng mạnh mẽ cho phép bạn đặt ra các quy tắc để kiểm tra cấu trúc và nội dung
					của các document trước khi chúng được chèn hoặc cập nhật vào một collection. Điều này giúp duy trì tính nhất
					quán và chất lượng của dữ liệu, ngay cả khi MongoDB không yêu cầu một schema cứng.
					<br />
					=> Chúng ta định nghĩa một validation rule trong lệnh <FilePath>db.createCollection()</FilePath> hoặc collMod.
					Rule này sử dụng toán tử truy vấn MongoDB để kiểm tra các trường dữ liệu. Nếu một document vi phạm rule, thao
					tác chèn hoặc cập nhật sẽ bị từ chối.
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Ví dụ:</b>
				</p>
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Trong đó:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>validator</b> </span> nơi định nghĩa rule (thường dùng <FilePath>$jsonSchema</FilePath>).
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>validationLevel</b> </span> Định nghĩa kiểu kiểm tra.
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<FilePath>strict</FilePath> mọi document đều bị kiểm tra.
								<br>
								<li class="ml-3 text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-gray-400 list-disc">Mọi document (cũ & mới) đều phải tuân thủ schema khi insert hoặc update.
								</li>
								<li class="ml-3 text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-gray-400 list-disc">Nếu document cũ trong collection đang vi phạm schema, thì update bất kỳ field nào cũng sẽ fail.
								</li>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<FilePath>moderate</FilePath> chỉ kiểm tra document mới hoặc khi có field bị thay đổi.
								<li class="ml-3 text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-gray-400 list-disc">Chỉ kiểm tra document mới thêm hoặc document có field bị thay đổi.
								</li>
								<li class="ml-3 text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-gray-400 list-disc">Document cũ (vi phạm) vẫn tồn tại, và nếu update không động chạm đến field vi phạm thì vẫn được.
								</li>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>validationAction</b> </span> Hành động khi vi phạm rule.
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>error</b> chặn document vi phạm.
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>warn</b> cho phép insert/update nhưng ghi cảnh báo.
							</li>
						</ul>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-2 mb-0 leading-8">
					<b>Các loại "bsonType":</b>
				</p>
				<DocFactoryV2Table :headers="headers" :items="items" />
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
  `Hiểu khái niệm Collection trong MongoDB: tập hợp document, schema-less.`,
  `Collection có thể tạo ngầm khi insert đầu tiên, hoặc tường minh bằng <b>db.createCollection()</b> (có thể gắn capped, validator, collation).`,
  `Xóa dữ liệu nhưng giữ Collection & Index: <b>deleteMany({})</b>; Xóa hẳn Collection + Index: <b>drop()</b>.`,
  `Capped Collection: dung lượng cố định, ghi vòng, tốc độ ghi cao; ứng dụng cho log, stream, cache.`,
  `Collation: quy tắc so sánh chuỗi (locale, strength), dùng để xử lý chữ hoa/thường, dấu tiếng Việt.`,
  `Validation: dùng <b>$jsonSchema</b> để ràng buộc cấu trúc dữ liệu; hỗ trợ strict/moderate và action error/warn.`,
],
				headers: [
    { "id": 1, "name": "Nhóm", "key": "group" },
    { "id": 2, "name": "bsonType", "key": "command" },
    { "id": 3, "name": "Ý nghĩa", "key": "function" },
    { "id": 4, "name": "Ví dụ", "key": "example" },
		{ "id": 5, "name": "Cú pháp trong validator", "key": "syntax" }
  ],
				items: [
    {
      "group": "Numeric Types",
      "command": "double",
      "function": "Số thực 64-bit",
      "example": "{ price: 19.99 }",
      "syntax": "{ price: { bsonType: \"double\" } }"
    },
    {
      "group": "Numeric Types",
      "command": "int",
      "function": "Số nguyên 32-bit",
      "example": "{ quantity: 42 }",
      "syntax": "{ quantity: { bsonType: \"int\" } }"
    },
    {
      "group": "Numeric Types",
      "command": "long",
      "function": "Số nguyên 64-bit",
      "example": "{ bigNumber: NumberLong(\"9007199254740991\") }",
      "syntax": "{ bigNumber: { bsonType: \"long\" } }"
    },
    {
      "group": "Numeric Types",
      "command": "decimal",
      "function": "Decimal128 (tài chính, chính xác cao)",
      "example": "{ salary: NumberDecimal(\"12345.67\") }",
      "syntax": "{ salary: { bsonType: \"decimal\" } }"
    },
    {
      "group": "String Types",
      "command": "string",
      "function": "Chuỗi UTF-8",
      "example": "{ name: \"Tuan\" }",
      "syntax": "{ name: { bsonType: \"string\" } }"
    },
    {
      "group": "Date/Time Types",
      "command": "date",
      "function": "Ngày giờ (ms từ epoch)",
      "example": "{ createdAt: ISODate(\"2025-09-04T10:00:00Z\") }",
      "syntax": "{ createdAt: { bsonType: \"date\" } }"
    },
    {
      "group": "Date/Time Types",
      "command": "timestamp",
      "function": "Timestamp đặc biệt (khác date)",
      "example": "{ ts: Timestamp(1693812345, 1) }",
      "syntax": "{ ts: { bsonType: \"timestamp\" } }"
    },
    {
      "group": "Object & Array Types",
      "command": "object",
      "function": "Document (sub-document)",
      "example": "{ address: { city: \"Hanoi\", zip: 10000 } }",
      "syntax": "{ address: { bsonType: \"object\" } }"
    },
    {
      "group": "Object & Array Types",
      "command": "array",
      "function": "Mảng",
      "example": "{ tags: [\"food\", \"drink\"] }",
      "syntax": "{ tags: { bsonType: \"array\" } }"
    },
    {
      "group": "Binary Data",
      "command": "binData",
      "function": "Dữ liệu nhị phân",
      "example": "{ file: BinData(0, \"c3VwZXJzZWNyZXQ=\") }",
      "syntax": "{ file: { bsonType: \"binData\" } }"
    },
    {
      "group": "ObjectId",
      "command": "objectId",
      "function": "ObjectId 12-byte",
      "example": "{ _id: ObjectId(\"64f98c7f5b...\") }",
      "syntax": "{ _id: { bsonType: \"objectId\" } }"
    },
    {
      "group": "Boolean",
      "command": "bool",
      "function": "Giá trị Boolean",
      "example": "{ active: true }",
      "syntax": "{ active: { bsonType: \"bool\" } }"
    },
    {
      "group": "Null",
      "command": "null",
      "function": "Giá trị null",
      "example": "{ deletedAt: null }",
      "syntax": "{ deletedAt: { bsonType: \"null\" } }"
    },
    {
      "group": "Regular Expression",
      "command": "regex",
      "function": "Biểu thức chính quy",
      "example": "{ pattern: /abc.*/ }",
      "syntax": "{ pattern: { bsonType: \"regex\" } }"
    },
    {
      "group": "Code Types",
      "command": "javascript",
      "function": "Code JavaScript",
      "example": "{ func: function() { return 1+1; } }",
      "syntax": "{ func: { bsonType: \"javascript\" } }"
    },
    {
      "group": "Code Types",
      "command": "javascriptWithScope",
      "function": "JavaScript với scope",
      "example": "{ code: Code(\"x + y\", { x: 1, y: 2 }) }",
      "syntax": "{ code: { bsonType: \"javascriptWithScope\" } }"
    },
    {
      "group": "Deprecated Types",
      "command": "undefined",
      "function": "Undefined (không khuyến khích dùng)",
      "example": "{ oldField: undefined }",
      "syntax": "{ oldField: { bsonType: \"undefined\" } }"
    },
    {
      "group": "Deprecated Types",
      "command": "dbPointer",
      "function": "Tham chiếu DB cũ (deprecated)",
      "example": "{ ref: DBPointer(\"db\",\"507f1f77bcf86cd799439011\") }",
      "syntax": "{ ref: { bsonType: \"dbPointer\" } }"
    },
    {
      "group": "Deprecated Types",
      "command": "symbol",
      "function": "Biểu tượng (giống string, deprecated)",
      "example": "{ symbol: Symbol(\"A\") }",
      "syntax": "{ symbol: { bsonType: \"symbol\" } }"
    },
    {
      "group": "Special Types",
      "command": "minKey",
      "function": "Giá trị nhỏ nhất (so sánh)",
      "example": "{ min: MinKey }",
      "syntax": "{ min: { bsonType: \"minKey\" } }"
    },
    {
      "group": "Special Types",
      "command": "maxKey",
      "function": "Giá trị lớn nhất (so sánh)",
      "example": "{ max: MaxKey }",
      "syntax": "{ max: { bsonType: \"maxKey\" } }"
    }
  ],
				b1: `use restaurantDB

db.createCollection("order_logs", {
  capped: true,
  size: 1024 * 1024,  // 1 MB
  max: 50           // tối đa 50 document
})
`,
				b2: `{
	validator: {
		$jsonSchema: {
				bsonType: "object",
				required: [ "name", "email", "age" ],
				properties: {
					name: {
							bsonType: "string",
							description: "bắt buộc phải là chuỗi"
					},
					age: {
						bsonType: "int",
						minimum: 0,
						maximum: 120,
						description: "Tuổi từ 0 đến 120"
					},
					email: {
							bsonType: "string",
							description: "bắt buộc phải là chuỗi và không được rỗng"
					},
				}
		}
	},
	validationLevel: "strict", // strict | moderate
	validationAction: "error" // error | warn
}`,
b3:`if (!db.getCollectionNames().includes('logs')) {
	db.createCollection('logs', { capped: true, size: 100000, max: 50 });
}`
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-4' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

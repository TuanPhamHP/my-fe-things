<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Tổng quan" addOnClass="text-left" markedAs="about" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong bài học này, chúng ta sẽ cùng tìm hiểu về các khái niệm cốt lõi trong MongoDB, bao gồm kiến trúc, các
					thành phần chính và cách chúng hoạt động cùng nhau.
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded w-fit">
					<img src="@/assets/images/documentation/mongodb-3.png" alt="" class="rounded-lg mt-3 block max-w-[700px]" />
				</div>
				<PageHeading text="Collections" addOnClass="text-left mt-5" markedAs="collections" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Trong MongoDB, một <b>Collection (tập hợp)</b> tương tự như một <b>bảng (table)</b> trong cơ sở dữ liệu quan
					hệ (SQL). Nó là một nhóm các <b>Document (tài liệu)</b> có liên quan với nhau.
					<br />
					=> Giống như một ngăn kéo chứa các tài liệu (document), mỗi collection có thể chứa nhiều tài liệu với cấu trúc
					khác nhau.
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Đặc điểm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Không có schema:</b> Đây là điểm khác biệt lớn nhất. Các document trong cùng một collection không bắt
							buộc phải có cùng cấu trúc hoặc trường dữ liệu. Điều này mang lại sự linh hoạt tối đa, cho phép chúng ta
							thay đổi cấu trúc dữ liệu dễ dàng.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Tạo tự động:</b> Collection sẽ được tự động tạo khi chúng ta chèn document đầu tiên vào nó. Không cần
							phải định nghĩa trước như khi tạo bảng trong SQL.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Lưu trữ vật lý:</b> Dữ liệu của một collection được lưu trữ trong các tệp trên ổ đĩa. Khi chúng ta sử
							dụng sharding, một collection có thể được phân tán trên nhiều máy chủ khác nhau.
						</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>So sánh với SQL:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>SQL: CREATE TABLE products (id INT, name VARCHAR(255), price DECIMAL);</FilePath>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>MongoDB: db.createCollection("products");</FilePath> (lệnh này là tùy chọn, thường collection được
						tạo tự động khi chèn dữ liệu).
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 rounded p-2 border">
					<div class="col-span-1">
						<PageHeading text="Tóm tắt" addOnClass="text-left" markedAs="" :lvl="3" />
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>✨Ưu điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Không có schema
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Tạo tự động
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Lưu trữ vật lý
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>

				<PageHeading text="Documents" addOnClass="text-left mt-5" markedAs="document" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Trong MongoDB, <b>Document (Tài liệu)</b> tương tự như một <b>hàng (row)</b> trong SQL, nhưng linh hoạt hơn
					nhiều. Một document là một tập hợp các cặp khóa-giá trị (key-value) được lưu trữ dưới dạng BSON (Binary JSON).
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Đặc điểm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Tự sinh khoá chính:</b>Mỗi document bắt buộc phải có một trường <FilePath>_id</FilePath> duy nhất. Nếu
							chúng ta không cung cấp, MongoDB sẽ tự động tạo một giá trị ObjectId cho nó. Trường này tương đương với
							khóa chính (Primary Key) trong SQL.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>Cấu trúc lồng nhau:</b> Một document có thể chứa các document hoặc mảng (array) khác bên trong. Điều
							này cho phép chúng ta lưu trữ các dữ liệu có quan hệ lồng ghép trong cùng một document, giảm thiểu các
							thao tác join phức tạp.
						</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Khi cần liên kết với các <b>Collection</b> khác thì chúng ta có 2 cách chính:</b>
				</p>
				<PageHeading text="Embedding (nhúng)" addOnClass="text-left mt-5" markedAs="embed" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dùng khi dữ liệu liên quan ít, không thay đổi nhiều. Ví dụ:
					</li>
				</ul>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />

				<div class="grid grid-cols-1 lg:grid-cols-2 rounded p-2 border mt-3">
					<div class="col-span-1">
						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
								<span> <b>✨Ưu điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Truy xuất nhanh:</b> chỉ cần query một document đã có đầy đủ thông tin (không cần join).
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Đảm bảo tính toàn vẹn:</b> dữ liệu liên quan nằm chung trong một object → giảm nguy cơ mất đồng
										bộ. Trong mongodb, mọi thao tác ghi (write operation) trên một document đều là atomic (nguyên tử).
										Điều này có nghĩa là một thao tác hoặc hoàn thành toàn bộ, hoặc thất bại hoàn toàn, đảm bảo rằng dữ
										liệu bên trong document luôn trong trạng thái nhất quán. Nhưng lưu ý, <b>toàn vẹn</b> ở đây là về
										mặt dữ liệu, không phải về mặt tham chiếu.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Phù hợp dữ liệu ít thay đổi:</b> như profile user kèm địa chỉ, order kèm order_items. Mô hình này
										thực ra phù hợp với dữ liệu có mối quan hệ 1-đến-ít (one-to-few) hoặc dữ liệu mà chúng ta thường
										xuyên truy vấn cùng lúc.
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="col-span-1">
						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
								<span> <b>❌Nhược điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Document quá to:</b> MongoDB giới hạn 16MB/document → khó quản lý nếu mảng con quá lớn.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Cập nhật cồng kềnh:</b> thay đổi nhỏ trong mảng con → phải update cả document.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Dữ liệu lặp lại:</b> cùng 1 "reviewer" xuất hiện ở nhiều product → khó tái sử dụng.
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						<PageHeading text="Ví dụ:" addOnClass="text-left" markedAs="" :lvl="3" />
						<ul class="pl-5 col-span-1">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Lịch sử giao dịch của người dùng: Khi người dùng truy cập trang tài khoản của họ, họ thường chỉ cần xem
								một vài giao dịch gần nhất. Việc nhúng một mảng các giao dịch gần đây giúp tải trang nhanh chóng mà
								không cần truy vấn đến một collection giao dịch lớn. Đối với lịch sử giao dịch đầy đủ, chúng ta vẫn có
								thể sử dụng một collection riêng và tham chiếu đến tài liệu người dùng.
							</li>
						</ul>
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading
					text="Referenced Documents (tham chiếu)"
					addOnClass="text-left mt-5"
					markedAs="referenced"
					:lvl="2"
				/>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dùng khi dữ liệu liên quan thường thay đổi, cần đảm bảo tính "đúng đắn" và tái sử dụng. Ví dụ:
					</li>
				</ul>

				<div class="grid grid-cols-1 lg:grid-cols-2 rounded p-2 border mt-3">
					<div class="col-span-1">
						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
								<span> <b>✨Ưu điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Tránh trùng lặp:</b> Trong mô hình tham chiếu, một document con (ví dụ: đơn hàng) sẽ chứa tham
										chiếu (thường là _id) đến document cha (users). Điểm mạnh thực sự là việc giảm sự trùng lặp dữ liệu
										nếu một thông tin chung được sử dụng bởi nhiều tài liệu khác nhau.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Quản lý mảng lớn:</b> Giới hạn kích thước tài liệu 16MB của MongoDB là một trong những lý do
										chính khiến mô hình tham chiếu được ưu tiên. Khi một document có thể có một mảng các đối tượng con
										(ví dụ: một bài viết có hàng triệu bình luận) thì việc nhúng tất cả vào một document là không khả
										thi. Mô hình tham chiếu cho phép chúng ta lưu trữ các bình luận này trong một collection riêng biệt,
										và chỉ lưu _id của chúng trong tài liệu cha, giúp chúng ta vượt qua giới hạn 16MB và dễ dàng mở
										rộng.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Cập nhật linh hoạt:</b> Điểm mạnh của mô hình tham chiếu là việc cập nhật một tài liệu con không
										ảnh hưởng đến tài liệu cha. Điều này làm giảm chi phí hoạt động, đặc biệt khi một tài liệu cha có
										nhiều tài liệu con và các tài liệu con được cập nhật liên tục.
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="col-span-1">
						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
								<span> <b>❌Nhược điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Phải join (lookup):</b> Việc sử dụng mô hình tham chiếu yêu cầu chúng ta phải thực hiện nhiều
										truy vấn để lấy được dữ liệu đầy đủ. ở đây chúng ta có thể truy vấn các bảng liên quan và map, hoặc
										là sử dụng aggregation pipeline với toán tử <FilePath>$lookup</FilePath>. Cả hai phương pháp này đều
										tốn thời gian hơn so với việc truy xuất một tài liệu duy nhất trong mô hình embed.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Tính toàn vẹn yếu hơn:</b> hay có thể nói là cực kỳ yếu. MongoDB không hỗ trợ ràng buộc khóa
										ngoại (foreign key constraints), hay toàn vẹn tham chiếu (referential integrity) như các hệ cơ sở dữ
										liệu quan hệ. Điều này có nghĩa là chúng ta phải tự quản lý tính toàn vẹn của dữ liệu giữa các
										Document. Ví dụ: ếu bạn xóa một tài liệu con (ví dụ: một review) mà không xóa tham chiếu đến nó
										trong tài liệu cha (ví dụ: product), tài liệu cha sẽ chứa một _id "mồ côi" không trỏ đến bất kỳ dữ
										liệu nào.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										<b>Truy vấn phức tạp hơn:</b> So với mô hình nhúng, mô hình tham chiếu đòi hỏi logic phức tạp hơn.
										Bạn phải viết code để thực hiện các thao tác $lookup hoặc chạy nhiều truy vấn và sau đó kết hợp dữ
										liệu lại trong code ứng dụng.
									</li>
								</ul>
							</li>
						</ul>
					</div>
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
				lessonSum: [
					`Hiểu khái niệm Collection.`,
					`Điểm mạnh của Collection: <b>Không có schema</b>, <b>Tạo tự động</b>, <b>Lưu trữ vật lý</b>.`,
					`Document có 2 cách chính để liên kết với nhau: <b>Embedding</b> và <b>Referencing</b>.`,
					`<b>Embedded</b>: khi dữ liệu luôn đi chung, ít thay đổi, số lượng con nhỏ (order, profile)`,
					`<b>Referenced</b>: khi dữ liệu nhiều, dùng lại ở nhiều nơi, hoặc cần quản lý riêng (user, comments)`,
				],
				b1: `// Embedding (nhúng) thẳng reviews vào document sản phẩm
{
  "_id": 1,
  "name": "Laptop XPS",
  "brand": "Dell",
  "reviews": [
    { "author": "Alice", "rating": 5, "comment": "Sản phẩm tuyệt vời!" },
    { "author": "Bob", "rating": 4, "comment": "Thiết kế đẹp." }
  ]
}

`,
				b2: `{
  "user_id": "U-789",
  "username": "Michael",
  "account_balance": 1500,
  "recent_transactions": [
    {
      "transaction_id": "T-001",
      "amount": -50.00,
      "type": "payment",
      "date": "2023-10-25"
    },
    {
      "transaction_id": "T-002",
      "amount": 200.00,
      "type": "deposit",
      "date": "2023-10-26"
    }
  ]
}
`,
				b3: `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);`,
				b4: `ALTER TABLE users ADD COLUMN age INT;
ALTER TABLE users DROP COLUMN age;
ALTER TABLE users RENAME COLUMN name TO full_name;
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
`,
				b5: `DROP TABLE users;`,
				b6: `TRUNCATE TABLE users;`,
				b7: `INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

UPDATE users SET name = 'Johnny' WHERE id = 1;

DELETE FROM users WHERE id = 1;`,
				b8: `SELECT name, email FROM users WHERE email LIKE '%@gmail.com' ORDER BY name;`,
				b9: `BEGIN;
UPDATE users SET name = 'Alice' WHERE id = 2;
ROLLBACK;`,
				b10: `GRANT SELECT, INSERT ON users TO 'john';
REVOKE INSERT ON users FROM 'john';`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-2' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

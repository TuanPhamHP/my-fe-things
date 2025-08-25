<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Tổng quan về NoSQL" addOnClass="text-left" markedAs="about-nosql" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>NoSQL - Not Only SQL</b> là một loại cơ sở dữ liệu phi quan hệ, được thiết kế để xử lý lượng dữ liệu khổng
					lồ với tốc độ cao, linh hoạt và dễ dàng mở rộng.
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded w-fit">
					<img src="@/assets/images/documentation/nosql-1.webp" alt="" class="rounded-lg mt-3 block max-w-[700px]" />
				</div>
				<PageHeading text="Điểm khác biệt với SQL:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>Mô hình dữ liệu:</b> NoSQL không sử dụng các bảng, hàng và cột truyền thống. Thay vào đó, nó sử dụng
							nhiều mô hình khác nhau như <b>tài liệu (document)</b>, cặp <b>khóa-giá trị (key-value)</b>,
							<b>đồ thị (graph)</b> và <b>cột rộng (column-family)</b>.
						</span>
					</li>

					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>Schema (cấu trúc):</b> SQL có <b>schema cố định</b>, mọi hàng trong một bảng phải tuân theo cấu trúc đã
							định. NoSQL có <b>schema linh hoạt</b>, các tài liệu trong một collection có thể có cấu trúc khác nhau.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>Khả năng mở rộng:</b> SQL mở rộng theo chiều dọc (vertical scaling), tức là nâng cấp phần cứng (CPU,
							RAM). NoSQL mở rộng theo chiều ngang (horizontal scaling), tức là thêm nhiều máy chủ (cluster) vào hệ
							thống.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Làm rõ hơn về khả năng mở rộng (scaling) của NoSQL và SQL:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 rounded p-2 border">
					<div class="col-span-1">
						<PageHeading
							text=" SQL – Vertical Scaling (mở rộng theo chiều dọc)"
							addOnClass="text-left"
							markedAs=""
							:lvl="3"
						/>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>🔥Ý tưởng:</b>tăng sức mạnh của một server duy nhất. </span>
							</li>

							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>Ví dụ:</b> bạn đang chạy MySQL trên 1 máy. </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Bắt đầu: 4 CPU, 16GB RAM, SSD 256GB
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Khi hệ thống nhiều user quá → nâng lên: 16 CPU, 128GB RAM, SSD 2TB
									</li>
								</ul>
							</li>

							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>✨Ưu điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Quản lý đơn giản (1 server).
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Dữ liệu nhất quán (ACID).
									</li>
								</ul>
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>❌Nhược điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Giới hạn phần cứng (không thể nâng mãi).
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Chi phí máy “xịn” rất cao.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Single point of failure (nếu server hỏng → downtime).
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="col-span-1">
						<PageHeading
							text=" NoSQL – Horizontal Scaling (mở rộng theo chiều ngang)"
							addOnClass="text-left"
							markedAs=""
							:lvl="3"
						/>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>🔥Ý tưởng:</b>chia dữ liệu ra nhiều server (cluster). </span>
							</li>

							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>Ví dụ:</b> dùng MongoDB, Cassandra. </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Bắt đầu: ít user, ít dữ liệu => 1 server.
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Khi hệ thống nhiều user quá → thêm server thứ 2, thứ 3, … dữ liệu được phân tán
										(sharding/replication).
									</li>
								</ul>
							</li>

							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>✨Ưu điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Gần như mở rộng vô hạn (chỉ cần thêm máy).
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Chịu lỗi tốt (1 node hỏng thì cluster vẫn chạy).
									</li>
								</ul>
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> <b>❌Nhược điểm:</b> </span>
								<ul class="pl-5 col-span-1">
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Quản lý phức tạp (phân tán dữ liệu, đồng bộ, partitioning).
									</li>
									<li
										class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
									>
										Tính nhất quán (consistency) có thể phải hy sinh (theo CAP theorem).
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div class="border rounded px-3 col-span-2 mt-5">
					<p class="text-slate-900 dark:text-white mt-3">
						<b>Khi nào nên dùng?</b>
					</p>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi ứng dụng cần xử lý dữ liệu lớn, có tốc độ thay đổi nhanh (ví dụ: IoT, mạng xã hội). Không quá chặt chẽ
							về quan hệ giữa các thực thể.
						</li>
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi cấu trúc dữ liệu không cố định và cần linh hoạt (ví dụ: log files, hồ sơ người dùng).
						</li>
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi cần hiệu suất cao cho các thao tác đọc/ghi.
						</li>
					</ul>
				</div>

				<PageHeading text="Giới thiệu về MongoDB" addOnClass="text-left mt-5" markedAs="about-mongodb" />

				<PageHeading text="Khái niệm cơ bản" addOnClass="text-left mt-5" markedAs="mongodb-desc" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Làm rõ hơn về MongoDB - một trong những hệ quản trị cơ sở dữ liệu NoSQL phổ biến nhất hiện nay.:
				</p>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> MongoDB là <b>cơ sở dữ liệu NoSQL dạng document.</b> </span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>Ra đời năm 2009 bởi MongoDB Inc. </span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> Dữ liệu lưu trữ theo <b>document JSON/BSON,</b> thay vì bảng (table) như SQL. </span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>
							Được thiết kế cho: Dữ liệu lớn, phi cấu trúc, thay đổi linh hoạt như Ứng dụng web, mobile, IoT, big
							data.</span
						>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về các thành phần có trong <b>RDBMS</b> để làm rõ hơn về cấu trúc cũng
					như chức năng của chúng.
				</p>
				<PageHeading
					text="Các thành phần chính của MongoDB"
					addOnClass="text-left mt-5"
					markedAs="mongodb-structure"
					:lvl="2"
				/>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
					<ul class="pl-5 col-span-1">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<span
								><b>Database:</b> Tập hợp các Collection. Bạn có thể có nhiều database trong một MongoDB instance.
							</span>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<span
								><b>Collection:</b> Tập hợp các Document, tương đương với một bảng (table) trong SQL. Một collection
								không có schema cố định.
							</span>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<span
								><b>Document:</b> Một bản ghi dữ liệu, tương đương với một hàng (row) trong SQL. Dữ liệu trong document
								được lưu trữ dưới dạng <b>BSON (Binary JSON)</b>, cho phép lưu trữ nhiều kiểu dữ liệu hơn JSON như Date,
								Binary data...
							</span>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<span
								><b>Field:</b> Một cặp <b>key - value</b> trong một document, tương đương với một cột trong SQL.
							</span>
						</li>
					</ul>

					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mt-3 leading-8">So sánh với RDBMS:</p>
						<div class="bg-neutral-100 px-5 py-1 rounded w-fit">
							<img
								src="@/assets/images/documentation/mongodb-2.png"
								alt=""
								class="rounded-lg mt-3 block max-w-[500px]"
							/>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mt-3 leading-8">Mô hình hoá MongoDB:</p>
						<div class="bg-neutral-100 px-5 py-1 rounded w-fit">
							<img
								src="@/assets/images/documentation/mongodb-3.png"
								alt=""
								class="rounded-lg mt-3 block max-w-[600px]"
							/>
						</div>
					</div>
				</div>

				<PageHeading text="Ví dụ" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Ví dụ về một document trong collection "users":</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />
				<PageHeading text="Đặc điểm nổi bật" addOnClass="text-left mt-5" markedAs="mongodb-structure" :lvl="2" />
				<PageHeading text="1/ Schema-less (linh hoạt)" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> Không cần định nghĩa trước cấu trúc bảng. </span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> Các <b>document</b> trong <b>cùng một collection có thể khác nhau về field</b>. </span>
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="2/ Ngôn ngữ truy vấn JSON-like" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> Truy vấn dễ học vì gần giống JavaScript. </span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>
							CRUD operations: <b>insertOne, find, updateOne, deleteOne</b> đều có tính thân thiện với người dùng.
						</span>
					</li>
				</ul>

				<PageHeading text="Cài đặt" addOnClass="text-left mt-5" markedAs="setup" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ở phần này, chúng ta sẽ cài đặt MongoDB Server & MongoDB Compass (giao diện đồ hoạ) trên máy tính cá nhân.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>1/ Cài đặt MongoDB và MongoDB Compass</b>
				</p>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>
							Truy cập: <a href="https://www.mongodb.com/try/download/community">MongoDB Community Server</a>
						</span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> Chọn bản <b>MSI Installer</b> → Download → cài đặt bình thường. </span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>
							Chọn các option theo mặc định, nhớ tích chọn <b>"Install MongoDB as a Service"</b> để MongoDB tự chạy ngầm
							luôn khi bật máy.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>2/ Kết nối với MongoDB Compass</b>
				</p>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>
							Mở MongoDB Compass, kết nối với máy chủ MongoDB cục bộ bằng địa chỉ mặc định
							<FilePath>mongodb://localhost:27017/</FilePath>
						</span>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span> Tạo connection, sau đó connect với Database và Collection </span>
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
					`Hiểu khái niệm <b>NoSQL</b> và sự khác biệt với SQL (RDBMS).`,
					`Nắm được kiến trúc cơ bản của MongoDB.`,
					`Cài đặt MongoDB & công cụ hỗ trợ.`,
					`Tạo database, collection và document đầu tiên.`,
				],
				b1: `// Document trong collection students
{
  "name": "Nguyen Van A",
  "age": 21,
  "class": "12A1",
  "subjects": ["Math", "Physics"],
  "address": { "city": "Hanoi", "zipcode": "10000" }
}
`,
				b2: `// 2 document trong cùng 1 collection
{ "name": "Nguyen Van A", "age": 21 }
{ "name": "Nguyen Van B", "email": "b@example.com" }
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

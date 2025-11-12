<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Mongoose" addOnClass="text-left" markedAs="mongoose" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Mongoose</b> là một thư viện ODM (Object Data Modeling) cho Node.js và MongoDB, cung cấp một giải pháp dễ
					dàng và mạnh mẽ để làm việc với cơ sở dữ liệu MongoDB trong ứng dụng Node.js. Mongoose giúp định nghĩa các mô
					hình dữ liệu (schemas), thực hiện các thao tác CRUD (Create, Read, Update, Delete) và quản lý kết nối với cơ
					sở dữ liệu MongoDB một cách hiệu quả.
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8">
						<span> Các thành phần cốt lõi của Mongoose</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>Schema:</FilePath> </span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									Định nghĩa cấu trúc của Document (các trường, kiểu dữ liệu:
									<FilePath>String, Number, Date,...</FilePath>).
								</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									Thiết lập ràng buộc (Validation)
									<FilePath>required: true, unique: true, min/max</FilePath>.
								</span>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>Model:</FilePath> </span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> Được tạo từ Schema, là lớp (Class) để tương tác trực tiếp với Collection trong CSDL. </span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									Chứa các phương thức để thực hiện các thao tác CSDL như
									<FilePath>find(), create(), update(), delete()</FilePath>.
								</span>
							</li>
						</ul>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-1 leading-8">Cài đặt Mongoose trong dự án Node.js:</p>
				<FakeTerminalUI :text-coppy="'npm install mongoose'">npm install mongoose</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-1 leading-8">Import và sử dụng:</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Schema" addOnClass="text-left mt-5" markedAs="schema" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Schema</b> là bản thiết kế (blueprint) cho document trong MongoDB, giúp định nghĩa:
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Tên các trường (field) </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Kiểu dữ liệu (type) </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Ràng buộc (required, unique, validate) </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Giá trị mặc định (default) </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Liên kết (ref đến collection khác) </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Về cơ bản, Schema trong Mongoose tương tự Model trong ORM như Eloquent (Laravel) hay Entity trong TypeORM.
				</p>
				<PageHeading text="Cấu trúc cơ bản" addOnClass="text-left mt-3" markedAs="schema-structure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Cấu trúc cơ bản để tạo một Schema trong Mongoose như sau:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>schemaOptions</FilePath> là một object tùy chọn dùng để cấu hình thêm cho Schema, theo dạng
					<FilePath>key: value</FilePath>. Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>key</FilePath> có thể là các config đặc biệt <b>(timestamps, versionKey...)</b> hoặc các config
							cho các trường (tương tự như validation)
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>value</FilePath> là giá trị tương ứng với <FilePath>key</FilePath> đã định nghĩa ở trên.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Với các trường (fields) trong Schema, chúng ta có thể sử dụng nhiều thuộc tính (properties) để định nghĩa:
				</p>
				<div class="relative overflow-x-auto my-1 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Property</th>
								<th scope="col" class="px-5 py-3">Desc</th>
								<th scope="col" class="px-5 py-3">Eg:</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in useMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									{{ item.property }}
								</th>

								<td class="px-5 py-4">{{ item.desc }}</td>
								<td class="px-5 py-4">
									<FilePath>{{ item.code }}</FilePath>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta có thể xem các 'types' của dữ liệu mà Mongoose hỗ trợ tại
					<a href="https://mongoosejs.com/docs/schematypes.html">đây</a>
					<br />
					Ví dụ tạo một Schema đơn giản:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Tạo Model" addOnClass="text-left mt-5" markedAs="model-create" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tương tự như Model trong MVC, Model trong Mongoose đại diện cho một Collection trong MongoDB và cung cấp các
					phương thức để tương tác với dữ liệu trong Collection đó.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8">
						<span> Chức năng chính của Model:</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Tương tác với cơ sở dữ liệu: Cung cấp phương thức để thực hiện các thao tác CRUD (Create, Read, Update,
							Delete) lên các tài liệu trong một bộ sưu tập MongoDB cụ thể.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Xây dựng dựa trên Schema: Model là lớp bao bọc trên một schema. Schema định nghĩa cấu trúc, validation của
							tài liệu, v.v.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Khởi tạo tài liệu: Model đóng vai trò là một constructor, cho phép bạn tạo các phiên bản của một document.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Chúng ta có thể tạo trực tiếp Model thông qua Schema:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />

				<PageHeading text="CRUD cơ bản" addOnClass="text-left mt-5" markedAs="crud" :lvl="2" />
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
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
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			LessonSum,
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
				httpStatusGroups: [
					{
						id: 1,
						range: '1xx',
						title: 'Informational',
						meaning: 'Thông tin – Request đang được xử lý',
						codeRange: '100–199',
						examples: [100, 101, 102],
					},
					{
						id: 2,
						range: '2xx',
						title: 'Success',
						meaning: 'Thành công – Request hoàn tất và có phản hồi hợp lệ',
						codeRange: '200–299',
						examples: [200, 201, 204],
					},
					{
						id: 3,
						range: '3xx',
						title: 'Redirection',
						meaning: 'Chuyển hướng – Client cần thực hiện hành động khác để hoàn tất request',
						codeRange: '300–399',
						examples: [301, 302, 304],
					},
					{
						id: 4,
						range: '4xx',
						title: 'Client Error',
						meaning: 'Lỗi phía client – Request không hợp lệ hoặc thiếu quyền',
						codeRange: '400–499',
						examples: [400, 401, 403, 404],
					},
					{
						id: 5,
						range: '5xx',
						title: 'Server Error',
						meaning: 'Lỗi phía server – Xảy ra sự cố khi xử lý request hợp lệ',
						codeRange: '500–599',
						examples: [500, 502, 503],
					},
				],
				lessonSum: [
					`Schema là bản thiết kế cho document trong MongoDB, định nghĩa cấu trúc, kiểu dữ liệu và ràng buộc.`,
					`Model đại diện cho một Collection trong MongoDB, cung cấp phương thức để tương tác với dữ liệu trong Collection đó.`,
					`Sử dụng Mongoose để kết nối, định nghĩa Schema, tạo Model và thực hiện các thao tác CRUD với MongoDB.`,
				],
				b1: `import mongoose from 'mongoose';
const URI = 'mongodb://localhost:27017/my_app_db';
async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log('Kết nối MongoDB thành công!');
    
    // Khởi động server chỉ sau khi kết nối CSDL thành công
    app.listen(PORT, () => {
      console.log("Server đang chạy ....");
    });
    
  } catch (err) {
    console.error('Lỗi kết nối MongoDB:', err.message);
    process.exit(1); 
  }
}

connectDB();
`,
				b2: `import mongoose from 'mongoose';
const schemaOptions = {
		timestamps: true, // Tự động thêm createdAt và updatedAt
		versionKey: false, // Loại bỏ trường __v
		[fieldName] : fieldOptions, // Định nghĩa các trường và ràng buộc
}
const userSchema = new mongoose.Schema(schemaOptions);
`,
				b3: `const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true 
  },
  role: { 
    type: String, 
    enum: ['user', 'admin', 'moderator'], 
    default: 'user' 
  }
});`,
				b4: `const User = mongoose.model('User', userSchema);
export default User;
`,
				b5: `// Create
const newUser = await User.create({ name: 'Tuan', email: 'tuan@example.com' });

// Read
const users = await User.find();

// Update
await User.updateOne({ email: 'tuan@example.com' }, { role: 'admin' });

// Delete
await User.deleteOne({ email: 'tuan@example.com' });
`,
				useMethods: [
					{
						id: 1,
						property: 'type',
						code: '{ type: String }',
						desc: 'Xác định kiểu dữ liệu của trường',
					},
					{
						id: 2,
						property: 'required',
						code: '{ required: true }',
						desc: 'Bắt buộc nhập giá trị cho trường',
					},
					{
						id: 3,
						property: 'unique',
						code: '{ unique: true }',
						desc: 'Đảm bảo giá trị không bị trùng lặp trong collection',
					},
					{
						id: 4,
						property: 'default',
						code: '{ default: Date.now }',
						desc: 'Giá trị mặc định nếu không truyền vào',
					},
					{
						id: 5,
						property: 'enum',
						code: "{ enum: ['admin', 'user', 'moderator'] }",
						desc: 'Giới hạn giá trị hợp lệ trong một danh sách cho phép',
					},
					{
						id: 6,
						property: 'min / max',
						code: '{ min: 0, max: 100 }',
						desc: 'Giới hạn giá trị nhỏ nhất và lớn nhất cho kiểu Number hoặc Date',
					},
					{
						id: 7,
						property: 'match',
						code: '{ match: /.+\\@.+\\..+/ }',
						desc: 'Sử dụng regex để kiểm tra định dạng chuỗi',
					},
					{
						id: 8,
						property: 'validate',
						code: '{ validate: v => v.length > 3 }',
						desc: 'Tự định nghĩa hàm kiểm tra giá trị hợp lệ',
					},
					{
						id: 9,
						property: 'trim',
						code: '{ trim: true }',
						desc: 'Tự động loại bỏ khoảng trắng ở đầu và cuối chuỗi',
					},
					{
						id: 10,
						property: 'lowercase / uppercase',
						code: '{ lowercase: true }',
						desc: 'Tự động chuyển chữ thành thường (hoặc hoa)',
					},
					{
						id: 11,
						property: 'ref',
						code: "{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }",
						desc: 'Thiết lập liên kết (reference) tới model khác, dùng cho populate()',
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-10' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

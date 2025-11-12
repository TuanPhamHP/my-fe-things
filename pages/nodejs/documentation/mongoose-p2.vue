<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Model" addOnClass="text-left mt-5" markedAs="model" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Model là “lớp” (class) được tạo từ mongoose.model(), đại diện cho một collection trong MongoDB.
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
						<span> Định nghĩa hành vi tùy chỉnh (statics, methods, hooks) </span>
					</li>
				</ul>
				<PageHeading text="Create" addOnClass="text-left mt-3" markedAs="create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tạo (Create) một document mới trong collection thông qua Model:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Read" addOnClass="text-left mt-3" markedAs="read" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Đọc (Read) document từ collection thông qua Model:</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Update" addOnClass="text-left mt-5" markedAs="update" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Cập nhật (Update) document trong collection thông qua Model:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Delete" addOnClass="text-left mt-3" markedAs="delete" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Xoá (Delete) document từ collection thông qua Model:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />

				<PageHeading text="Query Helpers" addOnClass="text-left mt-3" markedAs="query-helpers" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong thực tế, khi làm việc với dữ liệu liên quan giữa các collection trong MongoDB, ta thường cần phải liên
					kết (populate) dữ liệu từ các collection khác nhau, hay là limit, sort kết quả truy vấn. Mongoose cung cấp các
					phương thức hỗ trợ truy vấn nâng cao thông qua Model - chúng còn được gọi là <b>Query Helpers</b>.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="populate()" addOnClass="text-left mt-3" markedAs="populate" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					populate() giúp tự động thay ObjectId trong field ref bằng document thực tế từ model khác (giống như JOIN
					trong SQL).
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="aggregate()" addOnClass="text-left mt-3" markedAs="aggregate" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Chính là MongoDB Aggregation Pipeline:</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="other methods" addOnClass="text-left mt-3" markedAs="o-m" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Dưới đây là tổng hợp các method thường dùng khi làm việc với Model trong Mongoose:
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
									<FilePath>{{ item.method }}</FilePath>
								</th>

								<td class="px-5 py-4">{{ item.desc }}</td>
								<td class="px-5 py-4">
									<FilePath>{{ item.example }}</FilePath>
								</td>
							</tr>
						</tbody>
					</table>
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
				lessonSum: [
					`Mongoose Model là lớp đại diện cho một collection trong MongoDB, cung cấp các phương thức để tương tác với dữ liệu.`,
					`Model hỗ trợ các thao tác CRUD: Create (tạo), Read (đọc), Update (cập nhật), Delete (xóa) tài liệu trong collection.`,
					`Query Helpers trong Mongoose Model giúp thực hiện các truy vấn nâng cao như lọc, sắp xếp, giới hạn kết quả.`,
					`Phương thức populate() cho phép liên kết dữ liệu giữa các collection khác nhau, tương tự như JOIN trong SQL.`,
					`Phương thức aggregate() cho phép thực hiện các truy vấn phức tạp sử dụng MongoDB Aggregation Pipeline.`,
				],
				b1: `// Cách 1: dùng create()
const user = await User.create({ name: 'Alice', email: 'alice@example.com', age: 22 });

// Cách 2: khởi tạo instance và save()
const newUser = new User({ name: 'Bob', email: 'bob@example.com', age: 25 });
await newUser.save();
`,
				b2: `const allUsers = await User.find();                      // tất cả user
const oneUser = await User.findOne({ email: 'alice@example.com' });  // 1 user cụ thể
const byId = await User.findById('6735abf8d9b');         // tìm theo id
`,
				b3: `await User.updateOne({ email: 'bob@example.com' }, { age: 30 });
// Tìm và update
await User.findByIdAndUpdate('6735abf8d9b', { name: 'Bob Updated' }, { new: true });
`,
				b4: `await User.deleteOne({ email: 'alice@example.com' });
// Tìm và delete
await User.findByIdAndDelete('6735abf8d9b');
`,
				b5: `// Trường hợp lấy toàn bộ thông tin ref
const post = await Post.findById(postId).populate('author');

// Trường hợp chỉ lấy các trường cần thiết của ref
const post = await Post.findById(postId).populate('author', 'name');

// Trường hợp muốn loại bỏ một số trường không cần thiết
const post = await Post.findById(postId).populate('author', '-email');

// Trường hợp cần populate chain cho các ref lồng nhau
const result = await Model.find().populate(q1).populate(q2);
`,
				b6: `const result = await Post.aggregate([
  { $group: { _id: '$author', totalPosts: { $sum: 1 } } },
  { $sort: { totalPosts: -1 } },
  {
    $lookup: {
      from: 'users', // collection name (plural!)
      localField: '_id',
      foreignField: '_id',
      as: 'authorInfo'
    }
  },
  { $unwind: '$authorInfo' },
  { $project: { _id: 0, author: '$authorInfo.name', totalPosts: 1 } }
]);`,
				b7: `// Chaining query helpers
const users = await User.find({ age: { $gte: 18 } })
  .sort({ age: -1 })
  .limit(5)
  .select('name email');
`,
				b8: `const course1 = await Course.create({ title: 'NodeJS Fundamentals', code: 'NODE101' });
const course2 = await Course.create({ title: 'Database Design', code: 'DB102' });

const student = await Student.create({
  name: 'Alice',
  email: 'alice@example.com',
  courses: [course1._id, course2._id]
});

// Cập nhật ngược lại cho course
await Course.updateMany(
  { _id: { $in: [course1._id, course2._id] } },
  { $push: { students: student._id } }
);`,
				b9: `
// dùng collection trung gian
const enrollmentSchema = new mongoose.Schema({
	student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
	course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
	enrolledAt: Date
});
`,
				b10: `const alice = await Student.create({ name: 'Alice', email: 'alice@example.com' });
const bob = await Student.create({ name: 'Bob', email: 'bob@example.com' });

const nodeCourse = await Course.create({ title: 'NodeJS Fundamentals', code: 'NODE101' });
const dbCourse = await Course.create({ title: 'Database Design', code: 'DB102' });

// Tạo quan hệ Enrollment
await Enrollment.create({ student: alice._id, course: nodeCourse._id });
await Enrollment.create({ student: alice._id, course: dbCourse._id });
await Enrollment.create({ student: bob._id, course: dbCourse._id });

// truy vấn 
const students = await Enrollment.find({ course: dbCourse._id })
  .populate('student', 'name email')
  .select('student grade');
`,
				useMethods: [
					{
						id: 1,
						method: '.find(conditions)',
						desc: 'Tìm các document khớp với điều kiện (giống SELECT * WHERE)',
						example: `User.find({ age: { $gt: 18 } })`,
					},
					{
						id: 2,
						method: '.findOne(conditions)',
						desc: 'Tìm 1 document đầu tiên khớp điều kiện',
						example: `User.findOne({ email: 'abc@gmail.com' })`,
					},
					{
						id: 3,
						method: '.where(field)',
						desc: 'Tạo điều kiện cho một trường cụ thể, có thể chain thêm',
						example: `User.where('age').gt(18).lt(40)`,
					},
					{
						id: 4,
						method: '.equals(value)',
						desc: 'So sánh chính xác bằng giá trị (==)',
						example: `User.where('status').equals('active')`,
					},
					{
						id: 5,
						method: '.gt(value)',
						desc: 'Lớn hơn (>)',
						example: `User.where('age').gt(21)`,
					},
					{
						id: 6,
						method: '.gte(value)',
						desc: 'Lớn hơn hoặc bằng (>=)',
						example: `User.where('price').gte(1000)`,
					},
					{
						id: 7,
						method: '.lt(value)',
						desc: 'Nhỏ hơn (<)',
						example: `User.where('age').lt(50)`,
					},
					{
						id: 8,
						method: '.lte(value)',
						desc: 'Nhỏ hơn hoặc bằng (<=)',
						example: `User.where('rating').lte(5)`,
					},
					{
						id: 9,
						method: '.in(array)',
						desc: 'Nằm trong danh sách giá trị cho phép',
						example: `User.where('role').in(['admin', 'editor'])`,
					},
					{
						id: 10,
						method: '.nin(array)',
						desc: 'Không nằm trong danh sách giá trị',
						example: `User.where('role').nin(['banned', 'inactive'])`,
					},
					{
						id: 11,
						method: '.ne(value)',
						desc: 'Khác giá trị (!=)',
						example: `User.where('status').ne('deleted')`,
					},
					{
						id: 12,
						method: '.regex(pattern)',
						desc: 'Tìm theo biểu thức chính quy (regex)',
						example: `User.where('name').regex(/^A/i)`,
					},
					{
						id: 13,
						method: '.sort(criteria)',
						desc: 'Sắp xếp kết quả (1 = ASC, -1 = DESC)',
						example: `Post.find().sort({ createdAt: -1 })`,
					},
					{
						id: 14,
						method: '.limit(number)',
						desc: 'Giới hạn số lượng kết quả trả về',
						example: `Post.find().limit(10)`,
					},
					{
						id: 15,
						method: '.skip(number)',
						desc: 'Bỏ qua một số lượng document đầu (phân trang)',
						example: `Post.find().skip(10).limit(10)`,
					},
					{
						id: 16,
						method: '.select(fields)',
						desc: 'Chọn các trường cần lấy hoặc loại bỏ',
						example: `User.find().select('name email -_id')`,
					},
					{
						id: 17,
						method: '.populate(path, select)',
						desc: 'Join dữ liệu từ collection khác (ref)',
						example: `Post.find().populate('author', 'name')`,
					},
					{
						id: 18,
						method: '.countDocuments()',
						desc: 'Đếm số lượng document khớp điều kiện',
						example: `User.where('status').equals('active').countDocuments()`,
					},
					{
						id: 19,
						method: '.distinct(field)',
						desc: 'Lấy danh sách giá trị duy nhất của 1 field',
						example: `User.distinct('city')`,
					},
					{
						id: 20,
						method: '.exists(field)',
						desc: 'Kiểm tra document có chứa field đó hay không',
						example: `User.where('deletedAt').exists(false)`,
					},
					{
						id: 21,
						method: '.lean()',
						desc: 'Trả về plain object (không phải mongoose doc)',
						example: `User.find().lean()`,
					},
					{
						id: 22,
						method: '.aggregate(pipeline)',
						desc: 'Thực hiện truy vấn pipeline nâng cao (group, lookup, match, ...)',
						example: `Order.aggregate([{ $group: { _id: '$status', total: { $sum: 1 } } }])`,
					},
					{
						id: 23,
						method: '.or([conditions])',
						desc: 'Thực hiện OR giữa nhiều điều kiện',
						example: `User.find().or([{ role: 'admin' }, { age: { $gt: 50 } }])`,
					},
					{
						id: 24,
						method: '.and([conditions])',
						desc: 'Thực hiện AND giữa nhiều điều kiện',
						example: `User.find().and([{ active: true }, { verified: true }])`,
					},
					{
						id: 25,
						method: '.cursor()',
						desc: 'Trả về cursor để đọc dần dữ liệu (stream)',
						example: `for await (const user of User.find().cursor()) { console.log(user.name); }`,
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-12' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

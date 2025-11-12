<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
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

				<PageHeading text="Embedded" addOnClass="text-left mt-5" markedAs="nested" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Embedded document là một kỹ thuật trong MongoDB cho phép chúng ta nhúng một document bên trong một document
					khác.
				</p>

				<PageHeading text="One to One" addOnClass="text-left mt-3" markedAs="e-oto" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Mối quan hệ One to One (1:1) trong MongoDB có thể được mô hình hóa bằng cách nhúng (Embedded) một document bên
					trong document khác:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="One to Many" addOnClass="text-left mt-3" markedAs="e-otm" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Mối quan hệ One to Many (1:N) trong MongoDB có thể được mô hình hóa bằng cách nhúng (Embedded) một mảng
					document bên trong document khác:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="References" addOnClass="text-left mt-5" markedAs="ref" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					References document là một kỹ thuật trong MongoDB cho phép chúng ta liên kết các document với nhau bằng cách
					sử dụng ObjectId thay vì nhúng trực tiếp document.
				</p>
				<PageHeading text="One to One" addOnClass="text-left mt-3" markedAs="r-oto" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Mối quan hệ One to One (1:1) trong MongoDB có thể được mô hình hóa bằng cách sử dụng references:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong trường hợp truy vấn cần lấy thông tin profile cùng với user, chúng ta có thể sử dụng phương thức
					populate() của Mongoose để tự động thay thế ObjectId bằng document tham chiếu:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="One to Many" addOnClass="text-left mt-3" markedAs="r-otm" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Mối quan hệ One to Many (1:N) trong MongoDB có thể được mô hình hóa bằng cách sử dụng references:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Truy vấn kèm quan hệ:</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Many to Many" addOnClass="text-left mt-3" markedAs="r-mtm" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Mối quan hệ Many to Many (N:N) trong MongoDB thường được mô hình hóa bằng cách sử dụng references ở cả hai bên
					của mối quan hệ. Tuy nhiên, trong một số trường hợp, chúng ta có thể sử dụng một collection trung gian để quản
					lý mối quan hệ này.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 font-semibold">1/ Đặt ref ở 2 bên:</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Thêm & truy vấn</p>
				<VCodeBlock :code="b8" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 font-semibold">2/ Sử dụng collection trung gian:</p>
				<VCodeBlock :code="b9" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Thêm & truy vấn</p>
				<VCodeBlock :code="b10" highlightjs lang="javascript" theme="atom-one-dark" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8">
						<span>Dữ liệu N–N trong MongoDB không có join thật sự, nên ta cần:</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Dùng ref 2 phía (đơn giản, dễ dùng cho project nhỏ). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Hoặc tạo collection trung gian để quản lý mối quan hệ rõ ràng. </span>
					</li>
				</ul>
				<PageHeading text="Instance method" addOnClass="text-left mt-5" markedAs="method" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Schema cũng hỗ trợ định nghĩa các phương thức (methods) tùy chỉnh cho các document thông qua instance methods.
					Điều này cho phép chúng ta thêm các hàm xử lý dữ liệu liên quan trực tiếp đến document đó. Chúng ta chỉ cần
					thêm các phương thức vào thuộc tính <FilePath>methods</FilePath> hoặc <FilePath>statics</FilePath> của schema:
				</p>
				<VCodeBlock :code="b11" highlightjs lang="javascript" theme="atom-one-dark" />

				<PageHeading text="Hooks" addOnClass="text-left mt-5" markedAs="hooks" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Hooks trong Mongoose giống “middleware” của Express, cho phép chạy logic trước hoặc sau các hành động như
					<FilePath>save, update, delete</FilePath>.
				</p>
				<VCodeBlock :code="b12" highlightjs lang="javascript" theme="atom-one-dark" />

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
					`Mô hình hóa quan hệ dữ liệu trong MongoDB qua Embedded document và References document.`,
					`Embedded document: Nhúng document bên trong document khác để thể hiện quan hệ 1-1 và 1-n.`,
					`References document: Sử dụng ObjectId để liên kết document với nhau, thích hợp cho quan hệ 1-1, 1-n và n-n.`,
				],
				b1: `const addressSchema = new mongoose.Schema({
  city: String,
  country: String,
  zip: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: addressSchema // nhúng trực tiếp
});

// Thêm user
await User.create({
  name: 'Tuan',
  email: 'tuan@example.com',
  address: { city: 'Hanoi', country: 'Vietnam', zip: '10000' }
});
`,
				b2: `const addressSchema = new mongoose.Schema({
  city: String,
  country: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  addresses: [addressSchema] // danh sách địa chỉ
});
// thêm user
await User.create({
  name: 'Linh',
  addresses: [
    { city: 'Hanoi', country: 'VN' },
    { city: 'Tokyo', country: 'JP' }
  ]
});
`,
				b3: `const profileSchema = new mongoose.Schema({
  bio: String,
  avatar: String
});

const userSchema = new mongoose.Schema({
  name: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
});

// Lưu
const profile = await Profile.create({ bio: 'Fullstack Dev', avatar: 'me.png' });
await User.create({ name: 'Tuan', profile: profile._id });
`,
				b4: `// Truy vấn kèm populate
const user = await User.findOne({ name: 'Tuan' }).populate('profile');
`,
				b5: `const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // tham chiếu sẽ đặt ở n
});
`,
				b6: `// Trường hợp lấy toàn bộ thông tin author
const post = await Post.findById(postId).populate('author');

// Trường hợp chỉ lấy tên author
const post = await Post.findById(postId).populate('author', 'name');
`,
				b7: `
// dùng ref ở cả hai bên
const studentSchema = new mongoose.Schema({
  name: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const courseSchema = new mongoose.Schema({
  title: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

// truy vấn
const result = await Student.findOne({ name: 'Alice' })
  .populate('courses', 'title code');

console.log(result);
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
  .select('student enrolledAt');
`,
				b11: `// 1. thêm vào methods
userSchema.methods.getNameAndEmail = function() {
  // this bên trong hàm method trỏ đến Model Instance (document) hiện tại
  return { name: this.name, email: this.email};
};
// dùng
const user = await User.findById(userId);
const info = user.getNameAndEmail(); 

// 2. thêm vào statics
userSchema.statics.findByEmail = function (email) {
	// this bên trong hàm static trỏ đến Model (User)
  return this.findOne({ email });
};

// dùng
const foundUser = await User.findByEmail('alice@example.com');
`,
				b12: `userSchema.pre('save', function (next) {
  console.log('Preparing to save user: ' + this.name);
  next();
});

userSchema.post('save', function (doc) {
  console.log('User ' +doc.name+ ' has been saved!');
});`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-11' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

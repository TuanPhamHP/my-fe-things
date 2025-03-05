<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Constraints trong SQL" addOnClass="text-left mt-5" markedAs="about-constraints" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Constraints (ràng buộc dữ liệu)</b> giúp đảm bảo tính toàn vẹn của dữ liệu khi thao tác với bảng. Chúng
					giúp kiểm soát những giá trị có thể nhập vào bảng và đảm bảo tính chính xác của dữ liệu.
				</p>
				<PageHeading
					text="Các loại Constraints quan trọng"
					addOnClass="text-left mt-5"
					markedAs="primary-constraints"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi sử dụng Constraints, chúng ta cần lưu ý các nhóm lệnh chính tạo lên cấu trúc của SQL và nhiệm vụ riêng của
					từng nhóm:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://storage.googleapis.com/algodailyrandomassets/curriculum/databases/Constraints%20in%20SQL/constraints%20sql.PNG"
						alt=""
						class="rounded-lg mt-3 block max-w-[800px]"
					/>
				</div>
				<PageHeading text="- PK - PRIMARY KEY" addOnClass="text-left h-0 opacity-0" markedAs="pk" :lvl="2" />
				<PageHeading text="1) PRIMARY KEY - Khóa chính" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Xác định cột duy nhất đại diện cho mỗi hàng trong bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Không được phép NULL và không trùng lặp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Mỗi bảng chỉ có một khóa chính. </span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ở bảng <FilePath>Users</FilePath>, cột id là khóa chính, đảm bảo mỗi user có một ID duy nhất.
				</p>
				<!--  -->
				<PageHeading text="- FK - FOREIGN KEY" addOnClass="text-left h-0 opacity-0" markedAs="fk" :lvl="2" />
				<PageHeading text="2) FOREIGN KEY - Khóa ngoại" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Ràng buộc dữ liệu trong một bảng phải tồn tại trong bảng khác. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dùng để tạo mối quan hệ giữa các bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Mỗi bảng chỉ có một khóa chính. </span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">
					<FilePath>Users</FilePath> liên kết với <FilePath>Departments</FilePath> thông qua
					<FilePath>Users.department_id</FilePath> với <FilePath>Departments.id</FilePath>
					<br />
					Nếu một <FilePath>department</FilePath> bị xóa, cần quyết định có <FilePath>cascading delete</FilePath> hay
					không <b>(ON DELETE CASCADE hoặc SET NULL)</b>.
				</p>

				<PageHeading text="- UNIQUE" addOnClass="text-left h-0 opacity-0" markedAs="unique" :lvl="2" />
				<PageHeading text="3) UNIQUE - Duy nhất" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Ràng buộc dữ liệu trong cùng 1 cột sẽ không trùng lặp </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>VD: email, sđt ...</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">Đảm bảo không có hai nhân viên có cùng email.</p>
				<!--  -->
				<PageHeading text="- NOT NULL" addOnClass="text-left h-0 opacity-0" markedAs="notnull" :lvl="2" />
				<PageHeading text="4) NOT NULL - Trường dữ liệu bắt buộc" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Ràng buộc dữ liệu của một cột khi tạo mới là bắt buộc </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>VD: username, account ...</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">
					name và email không thể để trống khi thêm nhân viên mới.
				</p>
				<!--  -->
				<PageHeading text="- CHECK" addOnClass="text-left h-0 opacity-0" markedAs="check" :lvl="2" />
				<PageHeading text="5) CHECK -Điều kiện dữ liệu hợp lệ" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Ràng buộc dữ liệu của một cột khi tạo mới phải thỏa bãn điều kiện <FilePath>CHECK</FilePath> đặt
							ra.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>VD: username, account ...</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">Không chấp nhận nhân viên dưới 18 tuổi.</p>
				<!--  -->
				<PageHeading text="- DEFAULT" addOnClass="text-left h-0 opacity-0" markedAs="default" :lvl="2" />
				<PageHeading text="5) DEFAULT - Giá trị mặc định" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Tự động điền giá trị của cột này trong trường hợp không có dữ liệu truyền lên</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>VD: username, account ...</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">
					Nếu không nhập status, mặc định sẽ là "Active".
				</p>
				<!--  -->

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_3"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p>
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
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
				b1: `CREATE TABLE Users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department_id INT,
    position_id INT
);
`,
				b2: `CREATE TABLE Departments (
    id INT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Positions (
    id INT PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL
);

ALTER TABLE Users
ADD CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES Departments(id),
ADD CONSTRAINT fk_position FOREIGN KEY (position_id) REFERENCES Positions(id);
`,
				b3: `ALTER TABLE Users ADD CONSTRAINT unique_email UNIQUE (email);
`,
				b4: `ALTER TABLE Users
ALTER COLUMN name SET NOT NULL,
ALTER COLUMN email SET NOT NULL;
`,
				b5: `ALTER TABLE Users ADD COLUMN age INT CHECK (age >= 18);
`,
				b6: `CREATE TABLE Salaries (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,
    amount DECIMAL(10,2) CHECK (amount > 0),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
`,
				b7: `ALTER TABLE Users ADD COLUMN status VARCHAR(20) DEFAULT 'Active';
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-8' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

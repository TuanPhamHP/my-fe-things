<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="SQL VIEW" addOnClass="text-left mt-5" markedAs="about-view" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>View</b> là một bảng ảo (Virtual Table) được tạo ra từ một hoặc nhiều bảng khác trong database. Nó giúp
					trích xuất dữ liệu mà không cần truy vấn trực tiếp các bảng gốc.
				</p>

				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://miro.medium.com/v2/resize:fit:1400/0*MkqbJXTLHBSkpDI2.png"
						alt=""
						class="rounded-lg mt-3 block max-w-[800px]"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lợi ích khi sử dụng <b>View</b>:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Bảo mật dữ liệu:</b> Chỉ hiển thị một phần dữ liệu cho người dùng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Đơn giản hóa truy vấn:</b> Giúp tổ chức truy vấn phức tạp thành đơn giản.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Tái sử dụng truy vấn:</b> Không cần viết lại câu lệnh SQL nhiều lần.</span>
					</li>
				</ul>
				<PageHeading text="Tạo VIEW" addOnClass="text-left my-5" markedAs="create-view" :lvl="2" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
					Tạo một View hiển thị danh sách nhân viên và phòng ban
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">Truy vấn View:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<PageHeading text="Xóa VIEW" addOnClass="text-left my-5" markedAs="drop-view" :lvl="2" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
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
				b1: `CREATE VIEW ten_view AS
SELECT cot1, cot2, ... FROM ten_bang WHERE dieu_kien;
`,
				b2: `CREATE VIEW v_user_department AS
SELECT e.id, e.name, e.email, d.name AS department
FROM users e
LEFT JOIN departments d ON e.department_id = d.id;`,
				b3: `SELECT * FROM v_user_department;`,
				b4: `DROP VIEW v_employee_department;`,
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

<!-- -- create
CREATE TABLE EMPLOYEE (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department_id INTEGER
);

CREATE TABLE DEPARTMENT(
 id INTEGER PRIMARY KEY,
 name TEXT
);

-- insert

INSERT INTO DEPARTMENT VALUES (1, 'IT');
INSERT INTO DEPARTMENT VALUES (2, 'SALES');

INSERT INTO EMPLOYEE VALUES (1, 'Clark', 1);
INSERT INTO EMPLOYEE VALUES (2, 'Dave', 1);
INSERT INTO EMPLOYEE VALUES (3, 'Ava', 2);

CREATE VIEW VIEW_E_D as
select e.id, e.name, e.deparment as DEPARTMENT
from EMPLOYEE e
left join DEPARTMENT on e.department_id = d.id; -->

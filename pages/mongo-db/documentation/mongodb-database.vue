<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Database" addOnClass="text-left" markedAs="database" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong MongoDB, một cơ sở dữ liệu (database) là một tập hợp các collection. Mỗi database có thể chứa nhiều
					collection khác nhau, và mỗi collection chứa các document. MongoDB cho phép bạn tạo, xóa và quản lý các
					database một cách dễ dàng.
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Database là không gian logic chứa nhiều collections; </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Tên DB được khuyến nghị dùng <b>a-z0-9_</b> (tránh ký tự đặc biệt); tối đa 64 byte. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							DB chỉ xuất hiện khi trong DB có ít nhất 1 collection có dữ liệu (hoặc tạo tường minh bằng
							<FilePath>createCollection</FilePath>).
						</span>
					</li>
				</ul>
				<PageHeading text="Command" addOnClass="text-left" markedAs="command" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Tiếp theo, chúng ta sẽ cùng xem các lệnh được sử dụng để quản lý database trong MongoDB.
				</p>
				<DocFactoryV2Table :headers="headers" :items="items" />
				<PageHeading text="Advanced" addOnClass="text-left mt-5" markedAs="advanced" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ở trên là các lệnh cơ bản của database, ngoài ra còn có một số lệnh nâng cao khác khi làm việc như:
				</p>
				<PageHeading text="a/ Sao chép và di chuyển dữ liệu" addOnClass="text-left" markedAs="copyDB" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Chúng ta có thể sao chép dữ liệu giữa các database hoặc server khác nhau.
					<br />
					<b class="text-xl">* Cách 1:</b> Sử dụng lệnh <FilePath>db.copyDatabase()</FilePath> để sao chép dữ liệu từ
					một database
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>db.copyDatabase('tên_db_nguồn', 'tên_db_đích', 'server_nguồn')</FilePath> Sao chép một database.
						</span>
					</li>

					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Ví dụ:</b> Để sao chép database <b>oldDB</b> từ một server khác sang database <b>newDB</b> trên server
							hiện tại, bạn có thể chạy:
							<FilePath>db.copyDatabase("oldDB", "newDB", "192.168.1.10:27017")</FilePath> Sao chép một database.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b class="text-xl">* Cách 2:</b> Sử dụng lệnh <FilePath>mongodump</FilePath> &
					<FilePath>mongostore</FilePath> với
					<a href="https://www.mongodb.com/try/download/shell" target="_blank" class="text-underline"
						><b>MongoDB Database Tools</b></a
					>
					<br />
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8 text-xl text-content">
					<b> <span class="">mongodump - Sao lưu database</span></b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Cú pháp cơ bản:</b> <FilePath>mongorestore --db tên_db thư_mục_sao_lưu</FilePath>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Ví dụ:</b> <FilePath>mongodump --db hello-mongo-2 ./backup/hello_mongo</FilePath>. sẽ khôi phục dữ
							liệu từ thư mục backup/hello_mongo vào database hello-mongo-2
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Một số flag mở rộng:</b></span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--collection tên_collection:</b> Chỉ khôi phục một collection cụ thể.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--drop </b> Xóa các collection hiện có trước khi khôi phục, đảm bảo dữ liệu mới sạch sẽ.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--dir:</b> Khôi phục từ một thư mục sao lưu đã nén hoặc không nén.</span>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Ví dụ:</b> Để khôi phục dữ liệu từ bản sao lưu đã nén backup_db vào database newSchoolDB, bạn sẽ chạy:
							<br />
							<FilePath>mongorestore --db hello-mongo-2 --dir students --gzip --out ./backup_db</FilePath>.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8 text-xl text-content">
					<b> <span class="">mongostore - Phục hồi database</span></b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Cú pháp cơ bản:</b> <FilePath>mongodump --db tên_db --out thư_mục_sao_lưu</FilePath>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Ví dụ:</b> <FilePath>mongodump --db hello-mongo --out ./backup</FilePath>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Một số flag mở rộng:</b></span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--collection tên_collection:</b> Chỉ sao lưu một collection cụ thể.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--query query_JSON:</b> Chỉ sao lưu các document khớp với truy vấn.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--archive:</b> Lưu bản sao lưu vào một tệp tin duy nhất, tiện lợi cho việc di chuyển.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--gzip:</b> Nén bản sao lưu để tiết kiệm dung lượng.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span><b>--host hostname --port port:</b> Chỉ định server MongoDB để kết nối.</span>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Ví dụ:</b> Để sao lưu chỉ collection students trong database schoolDB và nén lại, bạn sẽ chạy: <br />
							<FilePath>mongodump --db schoolDB --collection students --gzip --out ./backup_students</FilePath>.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Lưu ý</b> Cách số 1 đã lỗi thời và không được khuyến nghị (deprecated) sử dụng trong các phiên bản MongoDB
					mới (từ 4.0 trở đi). Thay vào đó, bạn nên sử dụng công cụ dòng lệnh <FilePath>mongodump</FilePath> và
					<FilePath>mongorestore</FilePath> để sao lưu và phục hồi.
				</p>

				<PageHeading text="b/ Lệnh tạo và quản lý người dùng" addOnClass="text-left" markedAs="userDB" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Quản lý quyền truy cập là rất quan trọng để bảo mật cơ sở dữ liệu của chúng ta.
				</p>

				<p class="text-slate-900 dark:text-white my-3 leading-8 text-xl text-content">
					<b> <span class="">Tạo người dùng:</span></b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Cú pháp cơ bản:</b>
							<FilePath
								>db.createUser({ user: "tên_người_dùng", pwd: passwordPrompt(), roles: [ { role: "vai_trò", db: "tên_db"
								} ] })</FilePath
							>.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Ví dụ:</b> Để tạo một người dùng có tên admin với quyền đọc và ghi trên database schoolDB, bạn sẽ sử
							dụng lệnh sau:
							<FilePath
								>db.createUser({ user: "admin", pwd: passwordPrompt(), roles: [{ role: "readWrite", db: "schoolDB"
								}]})</FilePath
							>.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8 text-xl text-content">
					<b> <span class="">Xác thực người dùng:</span></b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Cú pháp cơ bản:</b> <FilePath>db.auth("tên_người_dùng", "mật_khẩu")</FilePath>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Ví dụ:</b> <FilePath>db.auth("admin", "matkhaucuaban")</FilePath>. </span>
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
					`Hiểu khái niệm Database trong MongoDB.`,
					`Database là không gian logic chứa nhiều Collection.`,
					`Tên DB nên dùng [a-z0-9_], tối đa 64 byte; chỉ xuất hiện khi có dữ liệu.`,
					`Các lệnh cơ bản: <b>use &lt;db&gt;</b> (chuyển/tạo DB), <b>show dbs</b> (liệt kê), <b>db.stats()</b> (thống kê), <b>db.dropDatabase()</b> (xóa).`,
					`Sao lưu &amp; phục hồi: dùng <b>mongodump</b> (backup) và <b>mongorestore</b> (restore); <b>db.copyDatabase()</b> đã lỗi thời.`,
					`Quản lý user: <b>db.createUser()</b> để tạo tài khoản với vai trò, <b>db.auth()</b> để xác thực.`,
				],
				headers: [
					{
						id: 1,
						name: 'Nhóm',
						key: 'group',
					},
					{
						id: 2,
						name: 'Lệnh',
						key: 'command',
					},
					{
						id: 3,
						name: 'Chức năng',
						key: 'function',
					},
					{
						id: 4,
						name: 'Cú pháp',
						key: 'syntax',
					},
					{
						id: 5,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items: [
					{
						group: 'Điều hướng',
						command: 'use <db>',
						function: 'Chuyển/tạo DB (lưới tạo)',
						syntax: 'use schoolDB',
						example: 'use schoolDB',
					},
					{
						group: 'Liệt kê',
						command: 'show dbs',
						function: 'Liệt kê DB có dữ liệu',
						syntax: 'show dbs',
						example: '-',
					},
					{
						group: 'Thông tin',
						command: 'db.getName()',
						function: 'Lấy tên DB hiện tại',
						syntax: 'db.getName()',
						example: '→ "schoolDB"',
					},
					{
						group: 'Thông tin',
						command: 'db.stats()',
						function: 'Thống kê DB',
						syntax: 'db.stats()',
						example: '→ dung lượng, số collection',
					},
					{
						group: 'Xóa',
						command: 'db.dropDatabase()',
						function: 'Xóa DB hiện tại',
						syntax: 'db.dropDatabase()',
						example: 'Xóa schoolDB nếu đang ở đó',
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
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-3' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

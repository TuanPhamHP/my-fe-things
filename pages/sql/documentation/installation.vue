<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">Hướng dẫn tạo ứng dụng MySQL</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trước khi bắt đầu cài đặt thì bạn cần kiểm tra máy tính của bạn đã có
					<a
						href="https://dev.mysql.com/downloads/mysql/8.4.html"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						MySQL Server
					</a>
					hay chưa. hay chưa bạn có thể mở Terminal và gõ:
				</p>
				<FakeTerminalUI :textCoppy="'mysql --version'">
					<p>mysql --version</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nếu máy bạn đã cài đặt MySQL thì CLI sẽ trả về kết quả là version hiện tại của MySQL. Ví dụ:
				</p>
				<FakeTerminalUI>
					<p>mysql Ver 8.4.4 for Win64 on x86_64 (MySQL Community Server - GPL)</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold py-2 italic xl:text-xl">
					Trong trường hợp máy bạn chưa cài MySQL, bạn có thể cài đặt một trong 2 cách sau:
				</p>
				<PageHeading text="1 - MySQL Server (Recommend)" addOnClass="text-left" markedAs="mysql-server-ins" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Cài đặt phiên bản LTS (Long Time Support) của MySQL Server từ trang chính thức:
					<a
						href="https://dev.mysql.com/downloads/mysql/8.4.html"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						MySQL Server
					</a>
				</p>
				<PageHeading text="2 - XAMPP" addOnClass="text-left" markedAs="xampp" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nhiều thứ phải tải quá? Tôi có giải pháp cho bạn đây <b>`XAMPP`</b> - ứng dụng hỗ trợ chúng ta tạo ra một môi
					trường (environments) tích hợp sẵn <FilePath>MySQL</FilePath>, <FilePath>Web Server</FilePath>.
					<br />
					"XAMPP" là viết tắt của "X" (cho các hệ điều hành khác nhau), "Apache", "MySQL", "PHP", và "Perl". XAMPP cung
					cấp một môi trường phát triển web đầy đủ, bao gồm các thành phần như máy chủ web Apache, hệ quản trị cơ sở dữ
					liệu MySQL, ngôn ngữ lập trình PHP và Perl, cũng như các công cụ quản lý cơ sở dữ liệu phpMyAdmin.
					<br />
					<br />
					Như vậy, chỉ cần cài đặt XAMPP thì chúng ta sẽ có luôn combo n trong 1. Tải

					<a
						href="https://www.apachefriends.org/download.html"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						XAMPP.
					</a>
					Khi cài đặt chúng ta có thể chọn ở Disk C:/ để tiện cho các config tiếp theo.
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold py-2 italic">
					Note: Phần cài đặt này không quá khó, các bạn có thể search trên Youtube hoặc các diễn đàn công nghệ để cài
					theo. Vui lòng đảm bảo rằng bạn ghi nhớ các thông tin về server (host, port) và root user để sử dụng.
				</p>
				<PageHeading text="Tạo Database" addOnClass="text-left mt-5" markedAs="first-database" />
				<p class="text-slate-900 dark:text-white my-2">
					Dùng MySQL Command Line (CMD) để tạo Database trước.
					<br />
					<br />
					<b>1) </b>Mở Command Prompt (cmd) hoặc PowerShell để tiến hành kết nối với MySQL:
				</p>
				<FakeTerminalUI text-coppy="mysql -u root -p">
					<p>mysql -u root -p</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-2">Nhập mật khẩu user của bạn.</p>

				<p class="text-slate-900 dark:text-white my-2"><b>2)</b> Tạo một database mới</p>
				<FakeTerminalUI text-coppy="CREATE DATABASE my_first_database;">
					<p>CREATE DATABASE my_first_database;</p>
				</FakeTerminalUI>
				<div class="bg-neutral-100 rounded-lg px-3 py-3">
					<img
						src="@/assets/images/documentation/create-db-1.png"
						alt="just vibing"
						class="d-block h-[150px] mt-3 rounded-lg"
					/>
				</div>

				<p class="text-slate-900 dark:text-white my-2"><b>3)</b> Kiểm tra database đã tạo</p>
				<FakeTerminalUI text-coppy="SHOW DATABASES;">
					<p>SHOW DATABASES;</p>
				</FakeTerminalUI>
				<div class="bg-neutral-100 rounded-lg px-3 py-3">
					<img
						src="@/assets/images/documentation/create-db-2.png"
						alt="just vibing"
						class="d-block h-[200px] mt-3 rounded-lg"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-2">Done! Bây giờ, bạn đã có database "my_first_database".</p>

				<PageHeading text="Tạo Connection" addOnClass="text-left" markedAs="first-connection" />
				<p class="text-slate-900 dark:text-white mt-2">
					Bài hướng dẫn này sẽ giúp bạn làm quen với MySQL thông qua dòng lệnh (MySQL Command Line) và MySQL Workbench
					(GUI). Sau đó là biết cách truy cập, tạo database và làm việc với các bảng. Trong bài này, tôi sẽ hướng dẫn
					các bạn kết nối và viết SQL với VSCODE.
				</p>
				<PageHeading
					text=" Sử dụng Visual Studio Code với SQLTools"
					addOnClass="text-left mt-5"
					markedAs="sqltools"
					:lvl="2"
				/>
				<div class="text-slate-900 dark:text-white mt-2">
					1) Cài đặt extension <b>SQLTools</b> trên VS Code.
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img
							src="@/assets/images/documentation/sql-tools-1.png"
							alt="just vibing"
							class="d-block h-[200px] mt-3 rounded-lg"
						/>
					</div>
					2) Mở <b>Command Palette (Ctrl + Shift + P)</b> hoặc chọn từ toolbar <b>SQLTools: Add New Connection</b>.
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img
							src="@/assets/images/documentation/sql-tools-2.png"
							alt="just vibing"
							class="d-block h-[200px] mt-3 rounded-lg"
						/>
					</div>
					3) Chọn loại kết nối <b>MySQL/MariaDB</b>. Nếu không thấy loại kết nối thì mở extensions để cài thêm.
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img
							src="@/assets/images/documentation/sql-tools-3.png"
							alt="just vibing"
							class="d-block h-[200px] mt-3 rounded-lg"
						/>
					</div>
					4) Nhập thông tin kết nối: <FilePath>Host | User | Password | Database</FilePath> tương ứng. Trong trường hợp
					nếu <FilePath>Database</FilePath> là bắt buộc, chúng ta cần chuyển sang bước tạo Database trước.
					<br />
					Test Connect & Save
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img
							src="@/assets/images/documentation/sql-tools-4.png"
							alt="just vibing"
							class="d-block h-[450px] mt-3 rounded-lg"
						/>
					</div>
					<br />
					5) Connect.
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img
							src="@/assets/images/documentation/sql-tools-5.png"
							alt="just vibing"
							class="d-block h-[450px] mt-3 rounded-lg"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-2">
					Done! Như vậy là các chế đã thiết lập thành công, giờ các bạn có thể tạo các query và run thôi ~~
				</p>
				<div class="bg-neutral-100 rounded-lg px-3 py-3">
					<img
						src="@/assets/images/documentation/sql-tools-6.png"
						alt="just vibing"
						class="d-block h-[250px] mt-3 rounded-lg"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-2">
					<b>Lưu ý:</b> ngoài ra các bạn hoàn toàn có thể sử dụng các app chuyên dụng như <b>Microsoft Workbench</b> để
					làm việc.
				</p>

				<PageHeading text="Tạo Project" addOnClass="text-left" markedAs="first-project" />
				<p class="text-slate-900 dark:text-white my-2">
					Tạo thư mục <FilePath>sql-basic</FilePath>
					để tổ chức các file sql của chúng ta. Tiếp theo chúng ta tạo ra file
					<FilePath>hello_sql.sql</FilePath> để viết & thực thi SQL
				</p>
				<div>
					<ClientOnly>
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="vs2015" />
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white my-2">
					Tiếp theo, chúng ta có thể chạy file sql trên bằng cách chọn <b>`Run on active connection`</b> như trên. Hoặc
					chúng ta có thể sử dụng <b>`MySQL CLI`</b> để chạy.
					<br />
					Mở <b>Terminal</b> và thực thi:
				</p>
				<FakeTerminalUI text-coppy="mysql -u root -p">
					<p>mysql -u root -p</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-2">
					sau khi đăng nhập chúng ta sẽ thực thi file SQL bằng câu lệnh <b>SOURCE</b>
				</p>
				<FakeTerminalUI text-coppy="SOURCE hello_sql.sql">
					<p>SOURCE hello_sql.sql</p>
				</FakeTerminalUI>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					Nếu thực thi thành công, bạn sẽ nhận được thông báo: <b>Query OK</b> và hiển thị danh sách table.
				</p>
				<div class="col-span-1 bg-neutral-100 rounded-lg px-3 py-3">
					<img
						src="@/assets/images/documentation/sql-tools-7.png"
						alt="just vibing"
						class="d-block h-[250px] mt-3 rounded-lg"
					/>
				</div>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					Như vậy, chúng ta vừa thực thi xong một file sql cùng với việc sử dụng <b>SQL Server, SQL Tools(VSCode)</b>
				</p>

				<p class="col-span-1 text-slate-900 dark:text-white my-2 lg:text-3xl font-bold">Tổng kết</p>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">Chúng ta cùng tổng kết bài học:</p>
				<p class="col-span-1 text-slate-900 dark:text-white mt-2 font-bold">Cài đặt MySQL</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Kiểm tra phiên bản MySQL hiện có bằng <FilePath>mysql --version</FilePath> </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Cài đặt MySQL thông qua <b>MySQL Server</b> (recommend) hoặc <b>XAMPP</b> để có môi trường tích hợp sẵn.
						</span>
					</li>
				</ul>

				<p class="col-span-1 text-slate-900 dark:text-white mt-2 font-bold">Tạo Database & Kết nối</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Sử dụng MySQL CLI <FilePath>(mysql -u root -p)</FilePath> để tạo database
							<FilePath>(CREATE DATABASE my_first_database;)</FilePath>.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Kiểm tra danh sách database bằng <FilePath>SHOW DATABASES;</FilePath> </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Kết nối MySQL từ VSCode với <b>SQLTools</b> hoặc các công cụ GUI như <b>MySQL Workbench</b>. </span>
					</li>
				</ul>

				<p class="col-span-1 text-slate-900 dark:text-white mt-2 font-bold">Viết & Chạy SQL</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Tổ chức project trong thư mục <FilePath>sql-basic</FilePath> và viết SQL trong file
							<FilePath>hello_sql.sql</FilePath>.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Chạy file SQL với MySQL CLI bằng lệnh <FilePath>SOURCE</FilePath></span>
					</li>
				</ul>

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
	import { apiResponde } from 'models';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			VCodeBlock,
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
				b1: `USE my_first_database;

CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

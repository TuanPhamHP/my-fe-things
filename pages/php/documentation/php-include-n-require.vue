<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="include & require" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Khi project lớn dần, bạn không thể nhét toàn bộ code vào một file duy nhất. PHP cho phép bạn chia code thành
					nhiều file và nhúng chúng vào nhau bằng <FilePath>include</FilePath> và <FilePath>require</FilePath> — cả hai đều
					chèn toàn bộ nội dung file đích vào vị trí gọi. Điểm khác nhau duy nhất là cách xử lý khi file không tồn tại.
				</p>

				<PageHeading text="include vs require" addOnClass="text-left" markedAs="include-vs-require" :lvl="1" />
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Từ khóa</th>
								<th scope="col" class="px-5 py-3">File không tìm thấy</th>
								<th scope="col" class="px-5 py-3">Dùng khi</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-mono font-bold text-black dark:text-white">include</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">Warning, chương trình vẫn tiếp tục chạy</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">File không bắt buộc (sidebar, widget, banner...)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-mono font-bold text-black dark:text-white">require</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">Fatal error, dừng toàn bộ chương trình</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">File bắt buộc (config, database, core module...)</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="include_once & require_once" addOnClass="text-left" markedAs="once-variants" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Thêm hậu tố <FilePath>_once</FilePath> để đảm bảo file chỉ được nhúng <b>đúng một lần</b>, dù bạn gọi nó bao
					nhiêu lần. Điều này rất quan trọng khi file chứa khai báo <b>function</b> hoặc <b>class</b> — nhúng hai lần sẽ
					gây lỗi <i>"Cannot redeclare"</i>.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Ví dụ thực tế" addOnClass="text-left" markedAs="practical-example" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Một cấu trúc project PHP cơ bản hay dùng include/require như sau:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>config.php</FilePath> chứa các hằng số dùng toàn app. <FilePath>header.php</FilePath> và
					<FilePath>footer.php</FilePath> là các phần giao diện tái sử dụng:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3">Kết hợp lại trong <FilePath>index.php</FilePath>:</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Truyền data vào file nhúng" addOnClass="text-left" markedAs="passing-data" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					File được nhúng có thể truy cập tất cả các biến đã khai báo trước thời điểm gọi
					<FilePath>include/require</FilePath>. Điều này cho phép truyền data vào các "component" PHP đơn giản:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="php" theme="atom-one-dark" />
					</div>
				</div>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>
							Luôn dùng <FilePath>require_once</FilePath> cho config và class files — tránh lỗi redeclare và đảm bảo app
							dừng khi thiếu file quan trọng.
						</li>
						<li>
							Dùng <FilePath>__DIR__</FilePath> thay vì relative path: <FilePath>require_once __DIR__ .
							'/config.php'</FilePath> — tránh lỗi đường dẫn khi file được gọi từ nhiều vị trí khác nhau.
						</li>
						<li>
							Khi project lớn, quản lý include/require thủ công rất dễ lỗi. Đó là lý do <b>namespace + autoload</b> ra đời
							— sẽ học ở bài sau.
						</li>
					</ul>
				</div>

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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				b1: `// include_once / require_once — chỉ nhúng 1 lần dù gọi nhiều lần
require_once 'config.php';
require_once 'config.php'; // lần 2 bị bỏ qua, không gây lỗi
`,
				b2: `project/
├── components/
│   ├── header.php
│   └── footer.php
├── config.php
└── index.php`,
				b3: `<?php
// config.php
define('APP_NAME', 'Todo App');
define('DB_HOST', 'localhost');
define('DB_NAME', 'todo_db');
`,
				b4: `<!-- components/header.php -->
<header>
    <h1><?php echo APP_NAME; ?></h1>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/todos">Todo</a>
    </nav>
</header>`,
				b5: `<?php
// index.php
require_once __DIR__ . '/config.php';   // bắt buộc, dừng nếu thiếu
?>
<!DOCTYPE html>
<html>
<body>
    <?php include __DIR__ . '/components/header.php'; ?>

    <main>
        <h2>Chào mừng đến <?php echo APP_NAME; ?></h2>
    </main>

    <?php include __DIR__ . '/components/footer.php'; ?>
</body>
</html>`,
				b6: `<?php
// index.php — truyền biến $todos trước khi include
$todos = [
    ['title' => 'Học PHP', 'done' => true],
    ['title' => 'Làm bài tập', 'done' => false],
];

include __DIR__ . '/components/todo-list.php';
`,
				b7: `<!-- components/todo-list.php -->
<!-- $todos được dùng trực tiếp từ scope của file gọi -->
<ul>
<?php foreach ($todos as $todo): ?>
    <li>
        <?php echo $todo['title']; ?>
        <?php echo $todo['done'] ? '✓' : ''; ?>
    </li>
<?php endforeach; ?>
</ul>`,
				pagePagination: null,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-11.2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

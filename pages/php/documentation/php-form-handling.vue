<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng học về Form, cách xử lý form trong PHP.
				</p>

				<PageHeading text="Form" addOnClass="text-left" markedAs="php-form" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, xử lý form thường bao gồm các bước: tạo form HTML, gửi dữ liệu từ form, và xử lý dữ liệu trong PHP.
					Chúng ta sẽ làm một ví dụ đơn giản để hiểu cách làm việc với form trong PHP.
				</p>
				<PageHeading text="Khai báo" addOnClass="text-left" markedAs="php-class-def" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Bước 1: Tạo form HTML</b>
					<br />
					Chúng ta sẽ tạo một form HTML đơn giản để thu thập tên và email của người dùng.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">Trong Form trên chúng ta có:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						Thuộc tính <b>`method="post"`</b> chỉ định rằng form sẽ gửi dữ liệu sử dụng phương thức POST.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						Thuộc tính <b>`action="handle_form.php"`</b> chỉ định rằng dữ liệu form sẽ được gửi đến file
						<b>`handle_form.php`</b>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Bước 2: Xử lý dữ liệu từ form tại file </b> <FilePath>~/handle_form.php</FilePath>
					<br />
					Chúng ta sẽ tạo một đoạn PHP đơn giản để xử lý dữ liệu được gửi từ form.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">Giải thích về file handle_form.php:</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content gap-1">
						<b>` $_SERVER["REQUEST_METHOD"] | $_POST `</b> đây chính là một biến global được cung cấp sẵn bởi PHP, nó sẽ
						trả ra phương thức được yêu cầu khi truy cập vào file <b>handle_form.php</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content gap-1">
						Hàm <b>`htmlspecialchars()`</b> để chuyển đổi các ký tự đặc biệt thành các thực thể HTML, từ đó chúng ta sẽ
						tránh việc user dùng XSS để tấn công trang web. Sau đó gán các giá trị <b>name, email</b> được gửi từ người
						dùng thành các biến là <b>$name, $email</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content gap-1">
						Hàm <b>`empty()`</b> Giúp kiểm tra các giá trị của ta có rỗng hay không.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/php/practice/e_3"
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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
				b1: `// ~/form.php
<h2>PHP Form Example</h2>
<form method="POST" action="handle_form.php">
	Name: <input type="text" name="name"><br><br>
	Email: <input type="text" name="email"><br><br>
	<input type="submit">
</form>
`,
				b2: `// ~/handle_form.php
<h2>Form Data</h2>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);

  if (empty($name) || empty($email)) {
    echo "Name and email are required.";
  } else {
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
  }
} else {
  echo "Invalid request method.";
}
?>`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-12' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Chào mừng anh em đến với series thực hành HTML basic.
					<br />
					Ở phần này chúng ta bắt đầu với việc thực hành tạo một khối <b>Header</b> cho trang web.
				</p>
				<img src="@/assets/images/html5-basic/header-01-overview.svg" alt="" class="rounded-lg mt-3 block bg-white" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Đầu tiên chúng ta cần phân tích component <b>Header</b> trước.
					<br />
					Ở đây chúng ta có:
					<br />
					<br />
					<b>Khối container-fluid:</b> sẽ là khối bao ngoài cùng, rộng full trang web.
					<br />
					<b>Khối container:</b> sẽ là khối bao lấy nội dung trang web, nằm ở giữa.
					<br />
					<small
						><em
							>Note: Vui lòng tự tìm hiểu về tính chất của <b>Khối container-fluid</b> và <b>Khối container</b> để có
							thể theo dõi bài</em
						></small
					>
				</p>

				<PageHeading text="Chuẩn bị tài nguyên" addOnClass="text-left mb-3" markedAs="resource" :lvl="2" />
				<div>
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Trước hết chúng ta sẽ tải các tài nguyên cần thiết về:
					</p>
					<div class="rounded text-slate-900 dark:text-white">
						<p class="text-slate-900 dark:text-white my-1 leading-8 text-lg text-content">
							Link ảnh, fonts...:
							<a
								href="https://drive.google.com/file/d/1QjOI37hx6KpVmz64m1uU9SkufmcEtoUw/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
								>Click để mở link</a
							>
						</p>
					</div>
					<p class="text-slate-900 dark:text-white my-1 leading-8 text-lg text-content">Font chữ: 'Oswald'</p>
					<div class="rounded pb-3 px-0 mt-0 text-slate-900 dark:text-white">
						<p class="text-slate-900 dark:text-white my-0 leading-8 text-lg text-content">Các mã màu:</p>
						<div class="flex items-center gap-1 pl-3">
							<div class="w-5 h-5 rounded" style="background-color: #2d2723"></div>
							<span>#2D2723</span>
						</div>
						<div class="flex items-center gap-1 pl-3">
							<div class="w-5 h-5 rounded" style="background-color: #c3a27c"></div>
							<span>#C3A27C</span>
						</div>
						<div class="flex items-center gap-1 pl-3">
							<div class="w-5 h-5 rounded" style="background-color: #faf1e3"></div>
							<span>#FAF1E3</span>
						</div>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ta tạo một thư mục tên <b>coffee-shop</b> để làm project này.

					<br />Sau khi tải các file về ta sẽ giải nén ra và để vào thư mục <b>coffee-assets</b>. <br />
					Cuối cùng ta sẽ được cây thư mục như sau:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`coffee-shop
|- coffee-assets
	|-- css
	|-- fonts
	|-- images
|- index.html
`"
							highlightjs
							lang="HTML"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<img
							src="@/assets/images/html5-basic/coffee-pj-structure.svg"
							alt=""
							class="rounded-lg mt-0 block bg-white"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tất nhiên trong thư mục <b>~/coffee-assets/css</b> ta sẽ tạo file <b>header.css</b> để css riêng cho phần
					header của chúng ta. Và file <b>style.css</b> để chứa các CSS chung cho cả trang (flex-box, container ...)
					<br />
					Sau đó link file ở trên vào file <b>~/index.html</b> bằng thẻ <b>{{ '<link />' }}</b>
					<br />
					Đồng thời trong thư mục <b>~/coffee-assets/fonts</b> có file <b>fonts.css</b> cũng cần chúng ta link vào file
					html, mục đích là để sử dụng được các font offline.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Vậy ta có folder <b>css</b> như sau:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`coffee-shop
|- coffee-assets
	|-- css
			|--- style.css
			|--- header.css
	...
|- index.html
`"
							highlightjs
							lang="HTML"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<img
							src="@/assets/images/html5-basic/coffee-pj-structure-02.svg"
							alt=""
							class="rounded-lg mt-0 block bg-white"
						/>
					</div>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">File <b>index.html</b></p>
				<VCodeBlock
					:code="`<!-- index.html -->
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Coffee Shop</title>
	<!-- CÁC FILE CSS CHUNG -->
  <link rel='stylesheet' href='./coffee-assets/css/style.css'>
  <link rel='stylesheet' href='./coffee-assets/fonts/font.css'>

	<!-- CÁC FILE CSS RIÊNG CHO TỪNG PHẦN -->
	<link rel='stylesheet' href='./coffee-assets/css/header.css'>
</head>

<body>

</body>

</html>`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					(❁´◡`❁) Buổi 01 - Setup & download resource đã xong.
					<br />
					<br />
					Mệt quá, nghỉ ngơi đợi bài sau làm tiếp nào.
				</p>
				<!-- END -->
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Note: Trong các thẻ còn rất nhiều thuộc tính riêng khác nhưng tôi tạm thời chỉ viết tới đây. Các bạn có thể
					đọc thêm về các thẻ khác tại
					<a
						href="https://www.w3schools.com/css/default.asp"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						W3 School
					</a>
				</p>
				<DocNextPage :pagination="pagePagination" />
			</div>
			<!-- <PageMarkBook /> -->
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
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
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
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.trainingTask
					.getPagination({ appIds: 'html-basic', currentDocId: 'htmle_01' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

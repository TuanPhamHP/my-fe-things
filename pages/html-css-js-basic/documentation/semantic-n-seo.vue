<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Nhúng Iframe" addOnClass="text-left mb-3" markedAs="iframe" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Iframe cho phép nhúng một trang web hoặc nội dung bên ngoài vào trang web của bạn.
				</p>

				<VCodeBlock :code="p1" highlightjs lang="HTML" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Thẻ iframe thường được sử dụng để nhúng nhanh một trang web hoặc nội dung bên ngoài vào trang web của bạn, và
					bạn sẽ không có quyền tác động tới nội dung được nhúng. Một số nội dung hay được nhúng như: Youtube, Google
					Map ....
				</p>
				<PageHeading
					text="Nhúng Multimedia(Audio và Video)"
					addOnClass="text-left mb-3"
					markedAs="media-embed"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					HTML5 hỗ trợ nhúng audio và video mà không cần plugin hay cài thêm package, thay vào đó chúng ta có thể sử
					dụng các thẻ được hỗ trợ sẵn như <FilePath>audio</FilePath>, <FilePath>video</FilePath>...
					<br />
					<br />
					<b>Nhúng Audio</b>
				</p>

				<VCodeBlock :code="p2" highlightjs lang="HTML" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Nhúng Video</b>
				</p>
				<VCodeBlock :code="p3" highlightjs lang="HTML" theme="vs2015" />
				<PageHeading text="Semantic Tags" addOnClass="text-left my-3" markedAs="semantic-tags" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					HTML5 cung cấp các thẻ có ý nghĩa giúp cải thiện SEO và khả năng truy cập, ngoài ra chúng còn hỗ trợ tăng tính
					"đọc" với code của chúng ta. Một số các semantic giúp ta phân tách rõ các bố cục của một trang:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath
								>{{ `
								<header></header>
								` }}</FilePath
							>: Phần đầu trang, chứa logo hoặc thanh điều hướng.</span
						>
					</li>

					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath
								>{{ `
								<section></section>
								` }}</FilePath
							>: Phân chia trang thành các phần chính như banner, khối thông tin sản phẩm ...</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath
								>{{ `
								<nav></nav>
								` }}</FilePath
							>: Chứa các phần điều hướng.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath
								>{{ `
								<article></article>
								` }}</FilePath
							>: Chứa nội dung độc lập (như bài viết).</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath
								>{{ `
								<footer></footer>
								` }}</FilePath
							>: Phần cuối trang, chứa thông tin tóm tắt, bản quyền.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Ví dụ sử dụng semantic tags:</b>
				</p>
				<VCodeBlock :code="p4" highlightjs lang="HTML" theme="vs2015" />
				<PageHeading text="SEO và Meta Data" addOnClass="text-left my-3" markedAs="seo-tags" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Việc <b>`tối ưu hóa SEO`</b>(Search Engine Optimization) và sử dụng <b>`metadata`</b> đúng cách là rất quan
					trọng để cải thiện khả năng hiển thị của trang web trên công cụ tìm kiếm. Chúng ta sẽ cùng tìm hiểu cách khai
					báo thẻ meta, tiêu đề, và những phương pháp SEO cơ bản.
				</p>
				<PageHeading text="Meta Data" addOnClass="text-left my-3" markedAs="meta-data" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`Metadata`</b> là thông tin mô tả nội dung của trang web nhưng <b>`không hiển thị trực tiếp`</b> trên
					trang, thay vào đó chúng cung cấp thông tin cho các worker hoặc bot của các công cụ tìm kiếm thông tin. Như
					vậy, SEO tốt có nghĩa là khi người dùng tìm kiếm các thông tin liên quan đến lĩnh vực của chúng ta thì các
					meta-data sẽ giúp các công cụ tìm kiếm biết trang web của chúng mình có phù hợp nhu cầu người dùng hay không.
					Các thông tin này có thể được chứa ở các thẻ siêu thông tin: <FilePath>{{ `<meta />` }}</FilePath>
				</p>

				<PageHeading text="Meta Tags" addOnClass="text-left my-3" markedAs="meta-tags" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`Meta charset`</b> Xác định bảng mã ký tự, thường dùng UTF-8 để hỗ trợ tiếng Việt.
				</p>
				<VCodeBlock :code="p5" highlightjs lang="HTML" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`Meta viewport`</b>Tối ưu giao diện trên các thiết bị di động.
				</p>
				<VCodeBlock :code="p6" highlightjs lang="HTML" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`Meta description`</b>Mô tả nội dung trang web. Đây là thông tin mà Google hiển thị trên kết quả tìm kiếm.
				</p>
				<VCodeBlock :code="p7" highlightjs lang="HTML" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`Meta robots`</b>Kiểm soát cách công cụ tìm kiếm lập chỉ mục trang web.
				</p>
				<VCodeBlock :code="p9" highlightjs lang="HTML" theme="vs2015" />
				<PageHeading text="Tối ưu SEO" addOnClass="text-left my-3" markedAs="seo" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngoài việc sử dụng các thẻ meta thì còn một vài cách giúp trang web của bạn có chỉ số SEO tốt hơn như:
					<br />
					Tối ưu SEO bằng các thẻ HTML
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b
						>- Tiêu đề <FilePath>{{ `<title></title>` }}</FilePath></b
					>: Tiêu đề là phần quan trọng nhất cho SEO, hiển thị trên tab trình duyệt và kết quả tìm kiếm. Nên có tiêu đề
					ngắn gọn, chứa từ khóa chính.
				</p>
				<VCodeBlock :code="p10" highlightjs lang="HTML" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b
						>- Sử dụng Heading  <FilePath>{{ `<h1>, <h2> ...` }}</FilePath></b
					>: 
							<br>
							<FilePath>{{ `<h1>` }}</FilePath>	Dùng cho tiêu đề chính (chỉ 1 lần mỗi trang).
								<br>
							<FilePath>{{ `<h2>, <h3>` }}</FilePath>	Dùng cho các tiêu đề phụ.
				</p>
				<VCodeBlock :code="p11" highlightjs lang="HTML" theme="vs2015" />
				<DocNextPage :pagination="pagePagination" />
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
				p1: `<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9111425550577!2d105.79992551512843!3d21.035760792916896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab54396b4435%3A0x7b8c5f7bbdca1dbb!2sHanoi!5e0!3m2!1sen!2s!4v1631639095856!5m2!1sen!2s" 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
`,
				p2: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  Trình duyệt của bạn không hỗ trợ audio.
</audio>
`,
				p3: `<video width="600" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Trình duyệt của bạn không hỗ trợ video.
</video>
`,
				p4: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Trang Web Cá Nhân</title>
</head>
<body>
  <header>
    <h1>Chào mừng đến với Trang Web của tôi</h1>
    <nav>
      <a href="#">Trang chủ</a> | 
      <a href="#">Giới thiệu</a> | 
      <a href="#">Liên hệ</a>
    </nav>
  </header>

  <section>
    <h2>Giới thiệu</h2>
    <p>Đây là trang web cá nhân của tôi, nơi tôi chia sẻ những thông tin thú vị về bản thân.</p>
  </section>

  <article>
    <h3>Bài viết đầu tiên</h3>
    <p>Nội dung bài viết của tôi sẽ được cập nhật tại đây.</p>
  </article>

  <footer>
    <p>&copy; 2024 Bản quyền thuộc về tôi.</p>
  </footer>
</body>
</html>
`,
				p5: `<meta charset="UTF-8">`,
				p6: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
				p7: `<meta name="description" content="Trang web cá nhân của tôi, nơi chia sẻ các bài viết thú vị.">`,
				p8: `<meta name="keywords" content="blog cá nhân, chia sẻ, công nghệ, học lập trình">`,
				p9: `<meta name="robots" content="index, follow">`,
				p10: `<title>Blog Công Nghệ - Chia Sẻ Kiến Thức Lập Trình</title>`,
				p11: `<h1>Chào mừng đến với Blog Công Nghệ</h1>
<h2>Bài viết mới nhất</h2>
<h3>Lợi ích của việc học lập trình từ sớm</h3>
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 11 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

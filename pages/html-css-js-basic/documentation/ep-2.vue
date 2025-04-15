<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Links" addOnClass="text-left" markedAs="links" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong HTML5, thẻ link được dùng để gán đường dẫn vào một nột dung bất kỳ (ảnh, text, v.v).
					<br />
					Thẻ link được sử dụng để cho phép người dùng chuyển, mở một trang mới từ liên kết đã được gán.
				</p>
				<PageHeading text="Syntax" addOnClass="text-left mb-3" markedAs="links-syntax" :lvl="2" />
				<VCodeBlock
					:code="`<a href='https://www.google.com/' target='_blank'>Click me to view Google</a>`"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`href`:</b> <span>
							Là attribute quan trọng nhất của thẻ {{ `<a>` }}, nó được dùng để chứa liên kết mà chúng ta muốn hướng người dùng đến.
							<br>
							Tuỳ thuộc vào giá trị mà nó chứa thì nó sẽ có các hành vi khác nhau như sau:
							<br> - Liên kết : điều hướng người dùng đến liên kết đó.
							<br> - #idName : cuộn trang tới phần tử có id = idName.
							<br> - mailto:example@gmail.com : mở app soạn email tới mail `example@gmail.com` trên máy người dùng
							<br> - tel:+0989989989 : mở liên kết để gọi tới số điện thoại đã điền.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`target`:</b> Là attribute xác định cửa sổ nào sẽ được sử dụng khi người dùng click vào liên kết
						<br>
							Tuỳ thuộc vào giá trị mà nó chứa thì nó sẽ có các hành vi khác nhau như sau:
							<br> - _self : mở liên kết ngay tại trang hiện tại.
							<br> - _blank : mở liên kết tại trang, tab mới.
							<br> - _parent : mở liên kết tại trang, tab cha của trang hiện tại, trong trường hợp nó không có tab cha, nó sẽ hoạt động như _self.
							<br> - _top : mở liên kết tại trang, tab chính, bỏ qua các tab khác.
					</li>
				</ul>
				<PageHeading text="Image" addOnClass="text-left" markedAs="image" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Image là thẻ được dùng để hiển thị nội dung là ảnh ra ngoài trang web, thường các ảnh sẽ là đường dẫn (link) tới tài nguyên ảnh hoặc các dạng data base64.
					Trong phạm vi bài học này, chúng ta sẽ chỉ xét đến các đường dẫn ảnh.
				</p>
				<PageHeading text="Syntax" addOnClass="text-left mb-3" markedAs="image-syntax" :lvl="2" />
				<VCodeBlock
					:code="imageTag"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
			
				<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?size=338&ext=jpg" alt="no-stress, just vibing memes" class="d-block mt-3">
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`src`:</b> <span>
							Là attribute quan trọng nhất của thẻ {{ `<img>` }}, nó được dùng để chứa liên kết của ảnh.
							<br>
						các bạn có thể lấy một link ảnh online bằng cách <b>click chuột phải vào ảnh => copy image address</b>
						<br> Tới đây chúng ta đã copy được đường dẫn của ảnh mà chúng ta cần.
						<img src="@/assets/images/documentation/pzns.png" alt="">
						<br>
						Giờ thì chỉ cần <b>Ctrl + v</b> để paste ra đường dẫn vừa copy.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`alt`:</b> Là attribute dùng để hiển thị nội dung text nếu đường dẫn ảnh bị lỗi, ngoài ra nó cho phép các bot đọc để tăng SEO cho trang của các bạn.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`loading`:</b> được dùng để quy định kiểu load của ảnh trên trang web của các bạn.
							<br> - lazy : Lazy load, khi cần thiết mới load ảnh.
							<br> - eager : Load ảnh ngay lập tức khi trang được truy cập.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`width`:</b> Quy định độ rộng của ảnh
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`height`:</b> Quy định độ cao của ảnh
					</li>
				</ul>

				<PageHeading text="List" addOnClass="text-left" markedAs="list" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các thẻ dạng list trong HTML được dùng để tạo danh sách các mục, giúp tổ chức nội dung một cách dễ đọc và logic. Có 3 loại danh sách chính:
					<br>
					<FilePath>ul</FilePath> : Danh sách không thứ tự 
					<br>
					<FilePath>ol</FilePath> : Danh sách có thứ tự 
					<br>
					<FilePath>dl</FilePath> : Danh sách mô tả (định nghĩa)
				</p>
				<PageHeading text="UL - Unordered List" addOnClass="text-left mb-3" markedAs="ul-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Thường dùng cho danh sách mà thứ tự không quan trọng (như danh sách sở thích, ghi chú, v.v.).
				</p>
		
				
				<VCodeBlock
					:code="p1"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
			
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`ul`:</b> Được dùng để tạo ra vùng danh sách.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`li`:</b> Đại diện cho các phần tử trong danh sách (List Item).
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngoài ra, chúng ta còn có thể thay đổi kiểu markup cho list bằng CSS style:
				</p>
			
				<VCodeBlock
					:code="p11"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các kiểu khác như: <b>disc</b> (mặc định), <b>circle, square, none</b> (không hiển thị ký hiệu).
				</p>
				<PageHeading text="OL - Ordered List" addOnClass="text-left mb-3" markedAs="ol-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Thường dùng cho danh sách mà cần phải đánh số thứ tự (như bước thực hiện, danh sách xếp hạng).
				</p>
				
				<VCodeBlock
					:code="p2"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
			
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`ol`:</b> Được dùng để tạo ra vùng danh sách.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`li`:</b> Đại diện cho các phần tử trong danh sách (List Item).
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngoài ra, chúng ta còn có thể thay đổi kiểu markup cho list bằng HTML atrribute <FilePath>type</FilePath>
				</p>
			
				<VCodeBlock
					:code="p21"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các kiểu khác như:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`1`:</b> Số (1, 2, 3, …)
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`A`:</b> Chữ hoa (A, B, C, …)
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`a`:</b> Chữ thường (a, b, c, …)
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`I`:</b> Số La Mã (I, II, III, …)
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`i`:</b> Số La Mã chữ thường (i, ii, iii, …)
					</li>
				</ul>
				<!-- END -->
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/html-css-js-basic/practice/c_e_1"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p>
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
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage },
		data() {
			return {
				imageTag:`<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
			p1:`<ul>
  <li>Đi ăn</li>
  <li>Đi chơi</li>
  <li>Về ngủ</li>
</ul>
`,
			p11:`<ul style="list-style-type: square;">
  <li>Mục vuông</li>
  <li>Mục tròn</li>
</ul>
`,
			p2:`<ol>
  <li>Nguyễn Văn A</li>
  <li>Nguyễn Văn B</li>
  <li>Nguyễn Văn C</li>
</ol>
`,
			p21:`<ol type="A">
  <li>Mục A</li>
  <li>Mục B</li>
</ol>
`,
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
		mounted(){
			this.getPagination();
		},
		methods:{
			getPagination(){
				this.$api.documentations.getPagination({appIds: 'html-basic',currentDocId:7})
				.then((res: apiResponde)=>{
				this.pagePagination= res?.data?.pagination || []
			})
			}
		}
	};
</script>

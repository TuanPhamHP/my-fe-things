<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="CSS Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này, chúng ta sẽ tìm hiểu về <b>Element Box</b> và <b>Spacing Box</b>.
					<br />
				</p>
				<PageHeading text="Syntax" addOnClass="text-left mb-3" markedAs="syntax-css" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong CSS, <b>Element Box</b> là cách mà trình duyệt hiển thị mỗi phần tử HTML trên trang web. Mỗi phần tử
					HTML được hiểu như một hộp (box) có các thuộc tính như <b>kích thước (width x height)</b>,
					<b> vị trí (position)</b>, <b>đường viền (border)</b>, <b>padding, margin</b> và nhiều thuộc tính khác, tất cả
					được xác định bởi CSS.
				</p>

				<div class="flex items-center gap-2">
					<div class="bg-neutral-100 rounded-lg px-3 py-3">
						<img src="@/assets/images/html5-basic/spacing-01.svg" alt="just vibing" class="d-block h-[250px] mt-3" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`content`:</b>
						<div>
							<span>
								Là phần kích thước của nội dung thẻ, chẳng hạn như văn bản, hình ảnh, hoặc các phần tử con khác.
							</span>
							<div class="bg-neutral-100 rounded-lg px-3 py-3">
								<img
									src="@/assets/images/html5-basic/spacing-02.svg"
									alt="just vibing"
									class="d-block h-[250px] mt-3"
								/>
							</div>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`padding `:</b>
						<div>
							<span> Là khoảng cách giữa nội dung của phần tử và đường viền (border) của nó. </span>
							<div class="bg-neutral-100 rounded-lg px-3 py-3">
								<img
									src="@/assets/images/html5-basic/spacing-03.svg"
									alt="just vibing"
									class="d-block h-[250px] mt-3"
								/>
							</div>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`border `:</b>
						<div>
							<span>
								Là đường viền bao quanh phần tử, xác định ranh giới của nó. Mọi thành phần nằm trong phần border đều
								được tính vào kích thước của phần tử</span
							>
							<div class="bg-neutral-100 rounded-lg px-3 py-3">
								<img
									src="@/assets/images/html5-basic/spacing-04.svg"
									alt="just vibing"
									class="d-block h-[250px] mt-3"
								/>
							</div>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`margin `:</b>
						<div>
							<span> Là khoảng cách giữa phần tử và các phần tử xung quanh.</span>
							<div class="bg-neutral-100 rounded-lg px-3 py-3">
								<img
									src="@/assets/images/html5-basic/spacing-05.svg"
									alt="just vibing"
									class="d-block h-[250px] mt-3"
								/>
							</div>
						</div>
					</li>
				</ul>

				<PageHeading text="Cách khai báo" addOnClass="text-left mb-3" markedAs="css-pading" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo chúng ta sẽ tìm hiểu cách khai báo giá trị cho các thành phần trên.
				</p>
				<PageHeading text="Border" addOnClass="text-left mb-3" markedAs="spacing-border" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Border phần đường bao của phần tử theo 4 hướng là
					<b>top, left, bottom, right.</b> Ngoài ra, <b>border</b> bao gồm các thuộc tính: <b>color, width, style</b>.

					<br />
					Chúng ta sẽ có 2 cách cơ bản để viết <b>border</b>:
					<br />
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[250px]">`border-direction-attribute*`:</b>
						<div class="w-full">
							<span>
								Giá trị <b>`direction`</b> chính là giá trị chỉ hướng của padding bao gồm:
								<b>top, left, bottom, right.</b>
								<br />
								<br />
								Giá trị <b>`attribute`</b> để xác định thuộc tính nào của border mà ta muốn tác động đến bao gồm:
								<b>color, width, style</b>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<p class='my-demo-block'>Hello anh em</p>

`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.my-demo-block {
	border-top-width: 10px;
	border-top-color: black;
	border-top-style: solid;
	border-right-width: 6px;
	border-right-color: red;
	border-right-style: solid;
	border-bottom-width: 8px;
	border-bottom-color: blue;
	border-bottom-style: solid;
	border-left-width: 6px;
	border-left-color: red;
	border-left-style: solid;

	border-top-right-radius: 4px;
	border-bottom-right-radius: 8px;
	border-top-left-radius: 12px;
	border-bottom-left-radius: 16px;
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
									<div class="col-span-1">
										<div
											style="
												border-top-width: 10px;
												border-top-color: black;
												border-top-style: solid;
												border-right-width: 6px;
												border-right-color: red;
												border-right-style: solid;
												border-bottom-width: 8px;
												border-bottom-color: blue;
												border-bottom-style: solid;
												border-left-width: 6px;
												border-left-color: red;
												border-left-style: solid;

												border-top-right-radius: 4px;
												border-bottom-right-radius: 8px;
												border-top-left-radius: 12px;
												border-bottom-left-radius: 16px;
											"
										>
											Hello anh em:
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[180px]">`border`:</b>
						<div class="w-full">
							<span>
								Đây là cách viết shorthand cho <b>border</b>, tuỳ thuộc vào cách viết của value mà padding sẽ được khai
								báo khác nhau.

								<div class="grid grid-cols-1 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<p class='my-demo-block'>Hello anh em</p>

`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.my-demo-block {
	/* bao gồm width, style, color - Không quan trọng thứ tự */
	border: 1px solid #000;
	border-radius: 8px;
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
									<div style="border: 1px solid #000; border-radius: 8px">Hello anh em:</div>
								</div>

								<br />
								<br />
							</span>
						</div>
					</li>
				</ul>
				<PageHeading text="Padding" addOnClass="text-left mb-3" markedAs="spacing-padding" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Padding là khoảng cách từ <b>`content`</b> so với <b>`border`</b> của phần tử theo 4 hướng là
					<b>top, left, bottom, right.</b> Chúng ta sẽ có 2 cách cơ bản để viết padding:
					<br />
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[180px]">`padding-suffix*`:</b>
						<div class="w-full">
							<span>
								Giá trị <b>`suffix`</b> chính là giá trị chỉ hướng của padding bao gồm: <b>top, left, bottom, right.</b>

								<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<p class='my-demo-block'>Hello anh em</p>

`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.my-demo-block {
	border: 1px solid #000;
	padding-top: 8px;
	padding-left: 12px;
	padding-bottom: 16px;
	padding-right: 24px;
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
									<div class="col-span-1">
										<div
											style="
												border: 1px solid #000;
												padding-top: 8px;
												padding-left: 12px;
												padding-bottom: 16px;
												padding-right: 24px;
											"
										>
											Hello anh em:
										</div>
									</div>
								</div>

								<br />
								<br />
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[180px]">`padding`:</b>
						<div class="w-full">
							<span>
								Đây là cách viết shorthand cho padding, tuỳ thuộc vào cách viết của value mà padding sẽ được khai báo
								khác nhau.

								<div class="grid grid-cols-1 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<p class='my-demo-block'>Hello anh em</p>

`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.my-demo-block {
	border: 1px solid #000;
	/* 1 giá trị: áp dụng cho cả 4 hướng */
	padding: 12px; 
	/* 2 giá trị: lần lượt là top-bottom và left-right */
	/* padding: 12px 24px;  */
	/* 3 giá trị: lần lượt là top, left-right và bottom */
	/* padding: 12px 24px; 40px;  */
	/* 4 giá trị: lần lượt là top, left, bottom, right */
	/* padding: 12px 24px; 40px; 100px */
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
								</div>

								<br />
								<br />
							</span>
						</div>
					</li>
				</ul>

				<PageHeading text="Margin" addOnClass="text-left mb-3" markedAs="spacing-margin" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Margin Là khoảng cách giữa phần tử và các phần tử xung quanh theo 4 hướng là
					<b>top, left, bottom, right.</b> Chúng ta sẽ có 2 cách cơ bản để viết margin:
					<br />
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[180px]">`margin-suffix*`:</b>
						<div class="w-full">
							<span>
								Giá trị <b>`suffix`</b> chính là giá trị chỉ hướng của margin bao gồm: <b>top, left, bottom, right.</b>

								<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<p class='my-demo-block'>Hello anh em</p>
<p class='another-demo-block'>Tui là thẻ khác nha</p>

`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.my-demo-block {
	border: 1px solid #000;
	padding: 12px 16px;
	margin-top: 8px;
	margin-left: 12px;
	margin-bottom: 16px;
	margin-right: 24px;
}
.another-demo-block{
	border: 1px solid #000;
	margin-top: 24px;
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
									<div class="col-span-1">
										<div
											style="
												border: 1px solid #000;
												padding: 12px 16px;
												margin-top: 8px;
												margin-left: 12px;
												margin-bottom: 16px;
												margin-right: 24px;
											"
										>
											Hello anh em:
										</div>
										<div style="border: 1px solid #000; margin-top: 24px">Tui là một thẻ khác nha</div>
									</div>
								</div>

								<br />
								<br />
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[180px]">`margin`:</b>
						<div class="w-full">
							<span>
								Đây là cách viết shorthand cho margin, tuỳ thuộc vào cách viết của value mà padding sẽ được khai báo
								khác nhau.

								<div class="grid grid-cols-1 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<p class='my-demo-block'>Hello anh em</p>

`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.my-demo-block {
	border: 1px solid #000;
	/* 1 giá trị: áp dụng cho cả 4 hướng */
	margin: 12px; 
	/* 2 giá trị: lần lượt là top-bottom và left-right */
	/* margin: 12px 24px;  */
	/* 3 giá trị: lần lượt là top, left-right và bottom */
	/* margin: 12px 24px; 40px;  */
	/* 4 giá trị: lần lượt là top, left, bottom, right */
	/* margin: 12px 24px; 40px; 100px */
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
								</div>

								<br />
								<br />
							</span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Margin khá là tương tự với padding nhỉ (❁´◡`❁). Nhưng ngoài ra margin cũng nhận thêm 1 giá trị rất đặc biệt đó
					là <b>`auto`.</b> Khi nhận giá trị là auto thì phần tử sẽ dồn toàn bộ khoảng trống của thẻ về phía được khai
					báo là margin (chỉ có tác dụng với main axis). Như vậy, để căn 1 phần tử ra giữa phần tử cha của nó ta có thể
					set auto cho cả 2 phía left và right
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`.parent-block {
	border: 1px solid #000;
	width: 200px;
	height: 200px;
	background-color: #47c9b1;
}
.child-block {
	border: 1px solid #fff;
	width: 80px;
	background-color: blueviolet;
	color:white;
}
.mx-auto{
	/* căn ra giữa */
	margin-left: auto;
	margin-right: auto;
}
.ml-auto{
	/* chuyển toàn bộ margin về bên trái */
	margin-left: auto;
}
.mr-auto{
	/* chuyển toàn bộ margin về bên phải */
	margin-left: auto;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- HTML -->
<div class='parent-block'>
	<p class='child-block'>Tui là thẻ con nè</p>
</div>

`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<div class="flex gap-2">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>.child-block:</b>
								</p>
								<div
									v-for="item in 3"
									:key="item"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										margin === item ? 'text-info-700 dark:text-info-100 bg-info-300' : 'text-slate-900 dark:text-white'
									}`"
									@click="margin = item"
								>
									<Icon :name="`${margin === item ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ getMarginClassName(item) }}
								</div>
							</div>
							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 250px; width: 250px; height: 250px; background-color: #47c9b1"
							>
								<p
									class="child-block transition-all"
									:class="{
										'ml-auto': margin === 1,
										'mx-auto': margin === 2,
										'mr-auto': margin === 3,
									}"
									style="border: 1px solid #000000; width: 80px; background-color: blueviolet; color: white"
								>
									Tui là thẻ con nè
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- CONTENT -->
				<PageHeading text="Content" addOnClass="text-left mb-3" markedAs="spacing-content" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Phần <b>`content`</b> được thiết lập thông qua 3 giá trị:
					<br />
					<br />
					<b>`box-sizing`:</b> Được sử dụng để xác định giá trị <b>`width, height`</b> được khai báo cho thành phần nào
					của thẻ
					<br />
					<br />
					<b>`width`:</b> Chiều rộng của phần tử.
					<br />
					<br />
					<b>`height`:</b> Chiều cao của phần tử.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`border-box`:</b>
						<div>
							<span>
								Giá trị <b>`width, height`</b> được khai báo sẽ tính cho toàn bộ nội dung từ border trở vào.

								<VCodeBlock
									:code="`.my-demo-block {
	box-sizing: border-box;
	width: 100px;
	height: 100px;
	padding: 16px;
}
`"
									highlightjs
									lang="CSS"
									theme="atom-one-dark"
								/>
								Tổng chiều rộng của phần tử là: 100px và sẽ không thay đổi kể cả khi bạn thay đổi padding, border.
								<br />
								<br />
								Trong trường hợp này là: 100px;
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`content-box`:</b>
						<div>
							<span>
								Giá trị <b>`width, height`</b> được khai báo sẽ chỉ tính cho phần content.

								<VCodeBlock
									:code="`.my-demo-block {
	box-sizing: content-box;
	width: 100px;
	height: 100px;
	padding: 16px;
}
`"
									highlightjs
									lang="CSS"
									theme="atom-one-dark"
								/>
								Tổng chiều rộng của phần tử là: 100px + padding(trái, phải) + border (trái, phải).
								<br />
								<br />
								Trong trường hợp này là: 100px + 16px + 16px = 132px;
							</span>
						</div>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">VD:</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- HTML -->
<div class='my-demo-block'>
	Hi! i'm Demo
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<VCodeBlock
							:code="`.my-demo-block {
	width: 200px;
	height: 200px;
	padding: 16px;
	background-color: #47c9b1;
}
.box-sizing-border{
	box-sizing: border-box;
}
.box-sizing-content{
	box-sizing: content-box;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="py-1"></div>
						<div class="flex gap-2">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>.my-demo-block:</b>
								</p>
								<div
									v-for="item in 2"
									:key="item"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										boxSizing === item
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="boxSizing = item"
								>
									<Icon :name="`${boxSizing === item ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ getBoxSizingClassName(boxSizing) }}
								</div>
							</div>
							<div
								class="parent-block transition-all"
								:class="{
									'box-border': boxSizing === 1,
									'box-content': boxSizing === 2,
								}"
								style="min-width: 200px; width: 200px; height: 200px; padding: 16px; background-color: #47c9b1"
							>
								Hi! i'm Demo
							</div>
						</div>
					</div>
				</div>
				<!-- END -->

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
				margin: 1,
				boxSizing: 1,
			};
		},
		mounted() {
			this.getPagination();
		},
		computed: {},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'html-basic', currentDocId: 'r8-1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
			getMarginClassName(margin: number) {
				switch (margin) {
					case 1:
						return 'ml-auto';
					case 2:
						return 'mx-auto';
					case 3:
						return 'mr-auto';

					default:
						return 'unknow';
				}
			},
			getBoxSizingClassName(boxSizing: number) {
				switch (boxSizing) {
					case 1:
						return 'box-sizing-border';
					case 2:
						return 'box-sizing-content';

					default:
						return 'unknow';
				}
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="CSS Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này, chúng ta sẽ tìm hiểu về <b>position</b> trong CSS.
					<br />
				</p>
				<PageHeading text="Tổng quan" addOnClass="text-left mb-3" markedAs="overview-css" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong CSS, <b>position</b> là thuộc tính được dùng để thay đổi vị trí của một đối tượng.
					<br />
					Khi sử dụng position thì ta cần định nghĩa được 2 thứ là <b>`điểm gốc`</b> và <b>`toạ độ`</b> so với điểm mốc
					đó.
					<br />
					Ví dụ trong thực tế ta có câu: Cái hộp nằm cách <b>`cái bàn`</b> <b>`5m về phía bên trái.`</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`điểm gốc`:</b>
						<div>
							<span> cái bàn </span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`toạ độ`:</b>
						<div>
							<span> 5m về phía bên trái. </span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tuỳ vào mỗi giá trị của position mà ta sẽ có <b>`điểm gốc`</b> khác nhau. Và ta sẽ sử dụng các thuộc tính
					<b>`top, left, bottom, right`</b> để định vị <b>`toạ độ`</b>
					<br />
					<br />
					<b> Các loại position trong CSS:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>static (mặc định)</FilePath>: Không thể di chuyển vị trí, không chịu ảnh hưởng của các thuộc
							tính top, left, bottom, right.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>relative</FilePath>: Điểm gốc là <b>vị trí ban đầu</b> của nó.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>absolute</FilePath>: Điểm gốc là <b>phần tử cha gần nhất có position khác static</b> của
							nó.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>fixed</FilePath>: Điểm gốc là <b>cửa sổ trình duyệt</b> của nó.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>sticky</FilePath>: Kết hợp giữa <FilePath>relative</FilePath> và <FilePath>fixed</FilePath>, chỉ
							hoạt động trong vùng content của thẻ cha</span
						>
					</li>
				</ul>
				<PageHeading text="Cách khai báo" addOnClass="text-left mb-3" markedAs="css-syntax" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo chúng ta sẽ tìm hiểu cách khai báo giá trị cho các thành phần trên.
					<br />
					Trước hết mình sẽ tạo 2 block là <b>'parent-block'</b> và <b>'my-demo-block'</b> để code
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="w-full">
							<span>
								<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1">
										<VCodeBlock
											:code="`<!-- HTML -->
<div class='parent-block'>
	<p class='my-demo-block'>Demo</p>
</div>
`"
											highlightjs
											lang="HTML"
											theme="atom-one-dark"
										/>
										<div class="py-1"></div>
										<VCodeBlock
											:code="`.parent-block{
	width:350px;
	height:400px;
	background-color:blueviolet;
}
.my-demo-block {
	width:150px;
	height:200px;
	background-color:cadetblue;
	top: 100px;
	left: 100px;
}
`"
											highlightjs
											lang="CSS"
											theme="atom-one-dark"
										/>
									</div>
									<div class="col-span-1">
										<div class="parent-block" style="width: 350px; height: 400px; background-color: blueviolet">
											<div style="width: 150px; height: 200px; background-color: cadetblue">Demo</div>
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
				</ul>

				<PageHeading text="Static" addOnClass="text-left mb-3" markedAs="static" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Đây là giá trị mặc định của một thẻ, với giá trị này thì thẻ sẽ không thể di chuyển theo giá trị của toạ độ
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="w-full">
							<span>
								<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1 border rounded p-4">
										<div>
											<p>
												<b>.my-demo-block {</b>
												<br />
												<span class="pl-3">position: static;</span>
											</p>
											<textarea
												v-model="f1"
												class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												cols="30"
												rows="3"
											></textarea>
										</div>
										<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
											Bạn có thể thử chỉnh sửa toạ độ của các khối trên. Như bạn thấy, <b>`.my-demo-block`</b> sẽ không
											di chuyển.
										</p>
									</div>

									<div class="col-span-1">
										<div class="parent-block" style="width: 350px; height: 400px; background-color: blueviolet">
											<div :style="`width: 150px; height: 200px; background-color: cadetblue;position: static; ${f1}`">
												Demo
											</div>
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
				</ul>
				<PageHeading text="Relative" addOnClass="text-left mb-3" markedAs="relative" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Điểm gốc là vị trí ban đầu của nó.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="w-full">
							<span>
								<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1 border rounded p-4">
										<div>
											<p>
												<b>.my-demo-block {</b>
												<br />
												<span class="pl-3">position: relative;</span>
											</p>
											<textarea
												class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												cols="30"
												rows="3"
												v-model="f2"
											></textarea>
										</div>
									</div>

									<div class="col-span-1">
										<div class="parent-block" style="width: 350px; height: 400px; background-color: blueviolet">
											<div
												class="demo-transition-all"
												:style="`width: 150px; height: 200px; background-color: cadetblue;position: relative; ${f2}`"
											>
												Demo
											</div>
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
				</ul>
				<PageHeading text="Absolute" addOnClass="text-left mb-3" markedAs="absolute" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Điểm gốc là <b>phần tử cha gần nhất có position khác static</b> của nó. Tức là điểm gốc phải thoả mãn 2 điều
					kiện sau: <br /><br />
					- Phải có position khác static
					<br />
					- Nếu nhiều level cha thoả mãn thì sẽ chọn level gần với thẻ nhất
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="w-full">
							<span>
								<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1 border rounded p-4">
										<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
											Class được áp dụng cho <b>.parent-block:</b>
										</p>
										<div
											v-for="item in [1, 2]"
											:key="item"
											class="flex items-center mb-1 gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
											:class="`${
												parentBlock1 === item
													? 'text-info-700 dark:text-info-100 bg-info-300'
													: 'text-slate-900 dark:text-white'
											}`"
											@click="parentBlock1 = item"
										>
											<Icon :name="`${parentBlock1 === item ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
											{{ getPositionClassName(item) }}
										</div>
										<div>
											<br />
											<p>
												<b>.my-demo-block {</b>
												<br />
												<span class="pl-3">position: absolute;</span>
											</p>
											<textarea
												class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												cols="30"
												rows="3"
												v-model="f3"
											></textarea>
										</div>

										<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
											Khi postion của <b>.parent-block</b> là <b>static</b> thì sẽ không thoả mãn điều kiện của
											absolute, lúc đó <b>.my-demo-block</b> sẽ không lấy <b>.parent-block</b> làm gốc nữa, nó sẽ tìm
											kiếm lên level cha tiếp theo, cuối cùng nó sẽ tìm đến thẻ <b>body</b> làm gốc.
										</p>
									</div>

									<div class="col-span-1">
										<div
											class="parent-block"
											:class="parentBlock1 === 2 ? 'relative' : ''"
											style="width: 350px; height: 400px; background-color: blueviolet"
										>
											<div
												class="demo-transition-all"
												:style="`width: 150px; height: 200px; background-color: cadetblue;position: absolute; ${f3}`"
											>
												Demo
											</div>
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
				</ul>
				<PageHeading text="Fixed" addOnClass="text-left mb-3" markedAs="fixed" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Điểm gốc là <b>cửa sổ trình duyệt</b>, tức là nó sẽ bám theo cửa sổ trình duyệt cho dù bạn cuộn trang tới đâu
					cũng được
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="w-full">
							<span>
								<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1 border rounded p-4">
										<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
											Class được áp dụng cho <b>.my-demo-block:</b>
										</p>
										<div
											v-for="item in [1, 3]"
											:key="item"
											class="flex items-center mb-1 gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
											:class="`${
												parentBlock2 === item
													? 'text-info-700 dark:text-info-100 bg-info-300'
													: 'text-slate-900 dark:text-white'
											}`"
											@click="parentBlock2 = item"
										>
											<Icon :name="`${parentBlock2 === item ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
											{{ getPositionClassName(item) }}
										</div>
										<div>
											<br />
											<p>
												<b>.my-demo-block {</b>
												<br />
											</p>
											<textarea
												class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												cols="30"
												rows="3"
												v-model="f3"
											></textarea>
										</div>

										<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
											Khi postion của <b>.parent-block</b> là <b>static</b> thì sẽ không thoả mãn điều kiện của
											absolute, lúc đó <b>.my-demo-block</b> sẽ không lấy <b>.parent-block</b> làm gốc nữa, nó sẽ tìm
											kiếm lên level cha tiếp theo, cuối cùng nó sẽ tìm đến thẻ <b>body</b> làm gốc.
										</p>
									</div>

									<div class="col-span-1">
										<div class="parent-block" style="width: 350px; height: 400px; background-color: blueviolet">
											<div
												class="demo-transition-all"
												:style="`width: 150px; height: 200px; background-color: cadetblue;position: ${
													parentBlock2 === 1 ? 'static' : 'fixed'
												}; ${f4}`"
											>
												Demo
											</div>
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
				</ul>

				<PageHeading text="Sticky" addOnClass="text-left mb-3" markedAs="sticky" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<file-path>sticky </file-path> là sự kết hợp giữa <b>relative</b> và <b>fixed</b>. Ban đầu, phần tử có vị trí
					bình thường trong trang (giống như relative), nhưng khi người dùng cuộn trang và phần tử đạt đến một điều kiện
					được thiết lập (ví dụ: top: 0), nó sẽ bám cố định tại vị trí đó (giống như fixed). Khi không còn ở trong vùng
					chứa (parent), nó sẽ dừng lại mà không di chuyển theo nữa (trở lại như relative).
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="w-full">
							<span>
								<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
									<div class="col-span-1 border rounded p-4">
										<div>
											<br />
											<p>
												<b>.my-demo-block {</b>
												<br />
												<span class="pl-3">position: sticky;</span>
											</p>
											<textarea
												class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												cols="30"
												rows="3"
												v-model="f5"
											></textarea>
										</div>

										<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
											Khi vị trí của <b>.my-demo-block</b> chưa đạt điều kiện được thiết lập (top : 30px so với browser)
											thì <b>.my-demo-block</b> sẽ có trạng thái tương tự như <b>relative</b> và sẽ nằm im trong khối
											cha.
											<br />
											<br />
											Khi chúng ta cuộn trang xuống và thoả mãn điều kiện (top: 30px) thì lúc này
											<b>.my-demo-block</b> sẽ có trạng thái tương tự như <b>fixed</b>, nó sẽ đi theo màn hình của chúng
											ta khi cuộn trang và vẫn giữ được toạ độ là top: 30px
											<br />
											<br />
											Khi <b>.my-demo-block</b> chạm vào điểm cuối của <b>.parent-block</b> thì nó sẽ dừng lại và trở
											lại trạng thái
											<b>relative</b>
										</p>
									</div>

									<div class="col-span-1">
										<div style="max-height: 600px; overflow-y: scroll">
											<div class="pb-10 pt-5 font-bold">Chặn trên nè</div>
											<div class="parent-block" style="width: 350px; height: 400px; background-color: blueviolet">
												<div
													class="demo-transition-all"
													:style="`width: 150px; height: 200px; background-color: cadetblue; position: sticky; ${f5}`"
												>
													Demo
												</div>
											</div>
											<div class="h-[400px]"></div>
											<div class="pb-10 pt-5 font-bold">Hết trang</div>
										</div>
									</div>
								</div>
							</span>
						</div>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Lưu ý:</b> Như các bạn thấy ở trên chúng ta thường dùng <b>top, left</b> để định vị toạ độ. Trong thực tế
					thì các bạn hoàn toàn có thể sử dụng <b>bottom, right</b> để làm việc tương tự. Nhưng bạn cần lưu ý là thông
					thường khi xuất hiện cả 2 giá trị để định vị của 1 trục như <b>top - bottom</b> hoặc <b>left - right</b>, thì
					CSS sẽ ưu tiên <b>top, left</b> hơn, ngoài ra có những trường hợp đặc biệt mà chúng có thể làm việc chung với
					nhau như trong <b>position - fixed</b>...
					<br />
					<br />
					Và đó là một số kiến thức cơ bản của phần position (～￣▽￣)～(～￣▽￣)～
				</p>
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
				parentBlock1: 2,
				parentBlock2: 1,
				boxSizing: 1,
				f1: `top: 100px;
left: 100px;`,
				f2: `top: 100px;
left: 100px;`,
				f3: `top: 100px;
left: 100px;`,
				f4: `top: 300px;
left: 300px;`,
				f5: `top: 30px;`,
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
			getPositionClassName(parentBlock1: number) {
				switch (parentBlock1) {
					case 1:
						return 'position-static';
					case 2:
						return 'position-relative';
					case 3:
						return 'position-fixed';

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

<style lang="scss" scoped>
	.demo-transition-all {
		transition: 0.5s ease;
	}
</style>

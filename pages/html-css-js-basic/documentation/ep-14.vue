<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này, chúng ta sẽ tìm hiểu về việc ứng dụng <b>Flexbox</b> để tạo ra các layout linh hoạt, có tính hệ
					thống trong các website hiện nay.
				</p>
				<PageHeading text="Hệ thống lưới trục" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Hệ thống lưới | trục của chúng ta dựa trên việc sử dụng <b>Flexbox</b> tạo ra các <b>hàng</b> và <b>cột</b>,
					sau đó căn chỉnh và phân phối không gian giữa các phần tử trong một hàng. Dưới đây là các khái niệm cơ bản và
					cách sử dụng hệ thống lưới và trục trong hệ thống.
				</p>
				<PageHeading text="Cấu trúc cơ bản" addOnClass="text-left" markedAs="flexbox-syntax" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Containers`:</b>
						<div>
							<span>
								Là các phần tử gốc để chứa các hàng và cột. Thường ta nên có 1 container riêng cho mỗi flexbox</span
							>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Rows`:</b>
						<div>
							<span
								>Được sử dụng để tạo thành 1 khối gồm n hàng, mà mỗi hàng trong đó đều được chia thành số lượng cột bằng
								nhau, ta dựa vào số lượng cột trong một hàng để phân chia kích thước, vị trí cho các phần tử.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Cols`:</b>
						<div>
							<span
								>Là đơn vị tính kích thước cho một phần tử. <br />
								VD: 1 row có 12 cột, nếu ta muốn tạo một phần tử chiếm 1/3 dòng thì số cột nó chiếm sẽ là 12/3 = 4 cột
							</span>
						</div>
					</li>
				</ul>
				<VCodeBlock
					:code="`<!-- Container -->
<div class='container'>
	<!-- row - Tạo ra khối flexbox -->
	<div class='row'>
		<!-- col - Khai báo số lượng cột mà phần tử này muốn chiếm = 3 -->
		<div class='col-3'>
			<!-- Phần tử -->
		</div>
	</div>
</div>
`"
					highlightjs
					lang="HTML"
					theme="atom-one-dark"
				/>
				<div class="py-2"></div>
				<PageHeading text="Row" addOnClass="text-left" markedAs="row" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ta thấy class <b>`row`</b> đóng vai trò tạo ra khối flexbox nên chắc chắn row sẽ là <b>`flex-container`.</b>
					<br />
					<br />
					Đồng thời, để giữ đúng kích thước của các cột bên trong nó thì <b>`row`</b> cũng phải cho phép các phần tử con
					tạo thành dòng mới nếu không đủ chỗ chứa => <b>`row`</b> sẽ cho phép phần tử con tạo dòng mới.
				</p>
				<VCodeBlock
					:code="`.row{
	display:flex;
	flex-wrap: wrap;
}
`"
					highlightjs
					lang="CSS"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Thông thường, để đơn giản hoá việc tính toán và sắp xếp thì chúng ta thường chia 1 row thành nhiều cột. Số
					lượng cột sẽ tuỳ thuộc vào hệ thống hoặc mong muốn của người lập trình. Nhưng nhìn chung ta sẽ lấy số lượng
					cột là bội số của 12 (VD: 12, 24, 48...). Ở đây tôi sẽ lấy số lượng cột = 12.
					<br />
					<br />
					Tức là cứ mỗi 1 hàng thì đều được chia nhỏ ra làm 12 cột, nếu phần tử tiếp theo không còn đủ khoảng trống thì
					sẽ tạo dòng mới (chính là thuộc tính flex-wrap ở trên).
					<br />
					<br />
					VD:
				</p>
				<div class="grid grid-cols-1 grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='container'>
	<div class='row'>
		<div class='col-3'>
			<p>Tui là phần tử 01</p>
		</div>
		<div class='col-5'>
			<p>Tui là phần tử 02</p>
		</div>
		<div class='col-7'>
			<p>Tui là phần tử 03</p>
		</div>
	</div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						Chúng ta mặc định class <b>col-x</b> với <b>x</b> là số cột mà phần tử chiếm (VD: col-3 => phần tử chiếm 3
						cột ...). Tôi sẽ giải thích rõ hơn ở phần <b>cols</b> tiếp theo
						<br />
						<br />
						Ở ví dụ vừa rồi thì <b>phần tử thứ 03</b> sẽ tạo thành dòng mới, lí do bởi vì tôi sẽ chia
						<br />
						<b>một hàng thành 12 cột,</b>
						<br />
						<b>phần tử thứ 01, 02 đã chiếm tổng 8 cột (5 + 3)</b> => còn trống 4 (12 - 8) cột
						<br />
						<b>phần tử thứ 03 chiếm 7 cột</b> => không đủ khoảng trống để chứa phần tử này nên <b>row</b> sẽ tự tạo thêm
						1 dòng mới.
						<div>
							<img src="@/assets/images/html5-basic/flex-03.svg" alt="just vibing" class="d-block w-full mt-3" />
						</div>
					</div>
				</div>

				<div class="py-2"></div>
				<PageHeading text="Cols" addOnClass="text-left" markedAs="cols" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`col`</b> là một đơn vị tính trong <b>row</b>, ta có class <b>col-x</b> nói chung với <b>x</b> là số lượng
					cột mà phần tử sẽ chiếm trong 1 dòng.
					<br />
					=> x có giá trị nhỏ nhất là 1 và lớn nhất là 12 (do ta đã mặc định từ đầu là sẽ chia row thành 12 cột)
				</p>
				<VCodeBlock
					:code="`.col-1{
	width: calc(100% / 12 );
	box-sizing: border-box;
	padding: 12px;
}
`"
					highlightjs
					lang="CSS"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở đây ta sử dụng hàm <b>calc()</b> của css để tính toán chiều rộng mà col chiếm.
					<br />
					<b>100% / 12</b> là độ rộng của 1 cột, sau đó ta nhân với số lượng cột mà nó chiếm. <br />VD: col-3 = calc(3 *
					100% / 12);
					<br />
					<br />
					<b>box-sizing: border-box</b> để đảm bảo chiều rộng của phần tử sẽ không vượt quá số cột mà nó chiếm dù có cả
					padding vả border.
					<br />
					<br />
					Ở đây chúng ta cần có <b>padding</b> vì trong 1 row thì sẽ không có khoảng trống giữa các col, như vậy nếu
					muốn tạo khoảng cách giữa 2 phần content của col thì ta sẽ dùng padding để thêm vào
				</p>

				<div class="grid grid-cols-1 grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='container'>
	<div class='row'>
		<div class='col-4'>
			<p>Tui là phần tử 01</p>
		</div>
		<div class='col-4'>
			<p>Tui là phần tử 02</p>
		</div>
		<div class='col-4'>
			<p>Tui là phần tử 03</p>
		</div>
	</div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<VCodeBlock
							:code="`/** row và cols set như phần đầu **/
.p-0 {
	padding: 0;
}
.p-3 {
	padding: 12px;
}`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex flex-col gap-2 w-full">
							<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
								Class được áp dụng cho <b>col-*:</b>
							</p>
							<div
								v-for="item in flexItemsOrder"
								:key="item.id"
								class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
								:class="`${
									selectedItem === item.id
										? 'text-info-700 dark:text-info-100 bg-info-300'
										: 'text-slate-900 dark:text-white'
								}`"
								@click="selectedItem = item.id"
							>
								<Icon :name="`${selectedItem === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
								{{ item.name }}
							</div>
						</div>
						<div class="grid grid-cols-3 my-3 border-t-2 py-3" :class="selectedItemOrderComputed?.returnedClass">
							<div class="col-span-1">
								<div class="product-card bg-cadetblue" style="background-color: cadetblue">Tui là phần tử 01</div>
							</div>
							<div class="col-span-1">
								<div class="product-card bg-red" style="background-color: red">Tui là phần tử 02</div>
							</div>
							<div class="col-span-1">
								<div class="product-card bg-" style="background-color: chocolate">Tui là phần tử 03</div>
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					ヾ(•ω•`)o, Xong phần lý thuyết cơ bản, tiếp đến chúng ta sẽ thực hành:
					<a
						href="https://tuanphamhp.github.io/bai-tap/bai-tap-flex.html"
						target="_blank"
						noopener
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
						>Bài 1</a
					>
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
				margin: 1,
				boxSizing: 1,
				selectedFlexDirection: 1,
				flexDirectionActive: [
					{
						id: 1,
						name: 'flex-row',
						returnedClass: 'flex',
					},
					{
						id: 2,
						name: 'flex-row-reverse',
						returnedClass: 'flex-row-reverse',
					},
					{
						id: 3,
						name: 'flex-col',
						returnedClass: 'flex-col',
					},
					{
						id: 4,
						name: 'flex-col-reverse',
						returnedClass: 'flex-col-reverse',
					},
				],

				selectedFlexWrap: 1,
				flexWrapActive: [
					{
						id: 1,
						name: 'flex-nowrap',
						returnedClass: 'flex-nowrap',
					},
					{
						id: 2,
						name: 'flex-wrap',
						returnedClass: 'flex-wrap',
					},
					{
						id: 3,
						name: 'flex-wrap-reverse',
						returnedClass: 'flex-wrap-reverse',
					},
				],

				selectedJustifyContent: 1,
				flexJustifyContentActive: [
					{
						id: 1,
						name: 'justify-content-start',
						returnedClass: 'justify-start',
					},
					{
						id: 2,
						name: 'justify-content-center',
						returnedClass: 'justify-center',
					},
					{
						id: 3,
						name: 'justify-content-end',
						returnedClass: 'justify-end',
					},
					{
						id: 4,
						name: 'justify-space-between',
						returnedClass: 'justify-between',
					},
					{
						id: 5,
						name: 'justify-space-around',
						returnedClass: 'justify-around',
					},
					{
						id: 6,
						name: 'justify-space-evenly',
						returnedClass: 'justify-evenly',
					},
				],

				selectedAlignItemsContent: 1,
				flexAlignItemsContentActive: [
					{
						id: 1,
						name: 'align-items-stretch',
						returnedClass: 'items-stretch',
					},
					{
						id: 2,
						name: 'align-items-start',
						returnedClass: 'items-start',
					},
					{
						id: 3,
						name: 'align-items-center',
						returnedClass: 'items-center',
					},
					{
						id: 4,
						name: 'align-items-end',
						returnedClass: 'items-end',
					},
					{
						id: 5,
						name: 'align-items-baseline',
						returnedClass: 'items-baseline',
					},
				],

				selectedItem: 1,
				flexItemsOrder: [
					{
						id: 1,
						name: 'p-0',
						returnedClass: 'gap-0',
					},
					{
						id: 2,
						name: 'p-3',
						returnedClass: 'gap-3',
					},
				],
				selectedItemGrow: 1,
				flexItemsGrow: [
					{
						id: 1,
						name: 'flex-grow-1',
						returnedClass: 'grow',
					},
					{
						id: 2,
						name: 'flex-grow-2',
						returnedClass: 'grow-[2]',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		computed: {
			selectedFlexDirectionComputed() {
				return this.flexDirectionActive.find(o => o.id === this.selectedFlexDirection);
			},
			selectedFlexWrapComputed() {
				return this.flexWrapActive.find(o => o.id === this.selectedFlexWrap);
			},
			selectedFlexJustifyComputed() {
				return this.flexJustifyContentActive.find(o => o.id === this.selectedJustifyContent);
			},
			selectedFlexAlignItemsComputed() {
				return this.flexAlignItemsContentActive.find(o => o.id === this.selectedAlignItemsContent);
			},
			selectedItemOrderComputed() {
				return this.flexItemsOrder.find(o => o.id === this.selectedItem);
			},
			selectedItemGrowComputed() {
				return this.flexItemsGrow.find(o => o.id === this.selectedItemGrow);
			},
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 14 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
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

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="HTML Table" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Table</b> là một nhóm thẻ giúp ta hiển thị dữ liệu theo dạng <b>row-hàng</b> và <b>column-cột.</b>

					<br />
					Về cơ bản, mọi data trong bảng sẽ được quản lý thông qua 2 khái niệm là row và col.
					<br />
					<br />
				</p>
				<PageHeading text="Syntax" addOnClass="text-left mb-3" markedAs="syntax-css" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Dưới đây là cú pháp cơ bản để tạo một bảng trong HTML5
				</p>
				<VCodeBlock
					:code="`<table>
<thead>
		<tr> <!-- Dòng (row) đầu tiên của bảng -->
        <th>Heading 1</th> <!-- Cột (column) đầu tiên -->
        <th>Heading 2</th> <!-- Cột thứ hai -->
        <th>Heading 3</th> <!-- Cột thứ ba -->
    </tr>	
</thead>
<tbody>
		<tr> <!-- Dòng thứ hai của bảng -->
        <td>Data 1</td> <!-- Dữ liệu ở cột đầu tiên -->
        <td>Data 2</td> <!-- Dữ liệu ở cột thứ hai -->
        <td>Data 3</td> <!-- Dữ liệu ở cột thứ ba -->
  	</tr>
</tbody>
  <!-- Thêm các dòng và cột khác nếu cần -->
<tfoot>
		<tr>
			<td>Data 4</td> <!-- Dữ liệu ở cột đầu tiên -->
			<td>Data 5</td> <!-- Dữ liệu ở cột thứ hai -->
			<td>Data 6</td> <!-- Dữ liệu ở cột thứ ba -->
		</tr>
</tfoot>
</table>
`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, khi tạo một bảng ta cần tạo thẻ <b>`table`</b> trước để định nghĩa vùng hoạt động cho các thẻ con.
					<br />
					Sau đó ta có thể thêm các thẻ chia khối như: <b>`thead`, `tbody`, `tfoot` ...</b> <br />
					Hay các thẻ tạo dòng, cột như: <b>`tr`, `th`, `td` ...</b>
					<br />
					<br />
					<b>`thead`, `tbody`, `tfoot`:</b> Được sử dụng để giúp chúng ta phân chia các khối trong table, từ đó khiển
					code 'sạch' hơn, dễ để collect data.
					<br />
					Lưu ý: Do các thẻ này chỉ dùng để phân chia, làm sạch code chứ không thay đổi UI nên về cơ bản chúng ta có thể
					không cần dùng tới chúng để tạo bảng.
				</p>
				<PageHeading text="Row và Col" addOnClass="text-left" markedAs="table-row-and-col" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo, chúng ta sẽ tìm hiểu cách để tạo ra row-hàng và col-cột trong table.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="w-20">`tr`</b>
						<span>
							Viết tắt của table-row, có tác dụng định nghĩa một hàng trong bảng, mỗi một thẻ tr được hiển thị như 1
							hàng và trong nó sẽ chứa các cột.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="w-20">`th,td`</b> Viết tắt của table-heading và table-data, có tác dụng định nghĩa một ô trong
						hàng, <br />
						Điểm khác biệt của th và td là nội dung của thẻ th sẽ luôn được viết in đậm.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, khi tạo một table trong html chúng ta luôn tạo một row trước, sau đó sẽ định nghĩa số lượng col trong
					row và tiếp tục điền dữ liệu.
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<table>
	<tr> <!-- Dòng (row) đầu tiên của bảng -->
			<th>Heading 1</th> <!-- Tiêu đề cột đầu tiên -->
			<th>Heading 2</th> <!-- Cột thứ hai -->
			<th>Heading 3</th> <!-- Cột thứ ba -->
	</tr>	
	<tr> <!-- Dòng thứ hai của bảng -->
			<td>Data 1</td> <!-- Dữ liệu ở cột đầu tiên -->
			<td>Data 2</td> <!-- Dữ liệu ở cột thứ hai -->
			<td>Data 3</td> <!-- Dữ liệu ở cột thứ ba -->
	</tr>
</table>
`"
							highlightjs
							lang="HTML"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`  /* CSS kẻ border cho các thành phần trong table */
th,td {
border: 1px solid;
}
`"
							highlightjs
							lang="CSS"
							theme="vs2015"
						/>
						<img src="@/assets/images/html5-basic/table-preview-01.png" alt="" class="rounded-lg mt-3 block" />
					</div>
				</div>
				<PageHeading text="Merge Col, Row" addOnClass="text-left mb-3" markedAs="table-merge-row-col" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong thực tế ta sẽ gặp nhiều table mà một số dòng, cột của chúng được gộp lại với nhau:
					<br />
					<br />
					VD:
				</p>
				<img src="@/assets/images/html5-basic/table-preview-02.svg" alt="" class="rounded-lg w-full my-3 block" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để có thể thực hiện việc gộp các cột, dòng trong bảng với nhau thì ta sẽ sử dụng các attributes:
					<b>`colspan` và `rowspan`</b> của td,th
				</p>
				<PageHeading text="Merge Col" addOnClass="text-left mb-3" markedAs="table-merge-col" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Syntax</p>

				<ul class="pl-5 w-full">
					<li class="text-slate-900 w-full dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="">`colspan="x"`</b>
						<div>
							Được dùng để khai báo số lượng cột mà ô dữ liệu này chiếm bằng với <b>`x`</b>
							<div class="grid grid-cols-2 md:gap-10 items-center mt-4">
								<div class="col-span-1">
									<VCodeBlock
										:code="`<table>
	<tr> <!-- Dòng (row) đầu tiên của bảng -->
		<th colspan='2'>Tui chiếm 2 cột</th> <!-- Ô này chiếm 2 cột -->
		<th>Tui chiếm 1 cột</th> <!-- Cột thứ hai -->
		<th>Tui chiếm 1 cột</th> <!-- Cột thứ ba -->
	</tr>	
	<tr> <!-- Dòng thứ hai của bảng -->
			<td>Data 1</td> <!-- Dữ liệu ở cột đầu tiên -->
			<td>Data 2</td> <!-- Dữ liệu ở cột thứ hai -->
			<td>Data 3</td> <!-- Dữ liệu ở cột thứ ba -->
			<td>Data 4</td> <!-- Dữ liệu ở cột thứ tư -->
	</tr>
</table>`"
										highlightjs
										lang="HTML"
										theme="vs2015"
									/>
								</div>
								<div class="col-span-1">
									<table>
										<tr>
											<!-- Dòng (row) đầu tiên của bảng -->
											<th colspan="2">Tui chiếm 2 cột</th>
											<!-- Ô này chiếm 2 cột -->
											<th>Tui chiếm 1 cột</th>
											<!-- Cột thứ hai -->
											<th>Tui chiếm 1 cột</th>
											<!-- Cột thứ ba -->
										</tr>
										<tr>
											<!-- Dòng thứ hai của bảng -->
											<td>Data 1</td>
											<!-- Dữ liệu ở cột đầu tiên -->
											<td>Data 2</td>
											<!-- Dữ liệu ở cột thứ hai -->
											<td>Data 3</td>
											<!-- Dữ liệu ở cột thứ ba -->
											<td>Data 4</td>
											<!-- Dữ liệu ở cột thứ tư -->
										</tr>
									</table>
									<!-- <img src="@/assets/images/html5-basic/table-preview-02.png" alt="" class="rounded-lg  w-full my-3 block" > -->
								</div>
							</div>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở ví dụ trên, thẻ <b>`th`</b> đầu tiên chúng ta đã khai báo <b>colspan="2",</b> do đó thẻ này sẽ chiếm lấy 2
					cột cùng hàng cho bản thân nó. Như vậy, dữ liệu sẽ được bắt đầu từ cột thứ 3.
				</p>
				<PageHeading text="Merge Row" addOnClass="text-left mb-3" markedAs="table-merge-row" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Syntax</p>

				<ul class="pl-5 w-full">
					<li class="text-slate-900 w-full dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="">`rowspan="y"`</b>
						<div>
							Được dùng để khai báo số lượng hàng mà ô dữ liệu này chiếm bằng với <b>`y`</b>
							<div class="grid grid-cols-2 md:gap-10 items-center mt-4">
								<div class="col-span-1">
									<VCodeBlock
										:code="`<table>
	<tr> <!-- Dòng (row) đầu tiên của bảng -->
		<th rowspan=2>Tui chiếm 2 hàng</th> <!-- Cột đầu tiên -->
		<th >Tui chiếm 1 hàng</th> <!-- Cột thứ hai -->
		<th>Tui chiếm 1 hàng</th> <!-- Cột thứ ba -->
	</tr>	
	<tr> <!-- Dòng thứ hai của bảng -->
			<td>Data 1</td> <!-- Dữ liệu ở cột thứ hai -->
			<td>Data 2</td> <!-- Dữ liệu ở cột thứ ba -->
	</tr>
</table>`"
										highlightjs
										lang="HTML"
										theme="vs2015"
									/>
								</div>
								<div class="col-span-1">
									<table>
										<tr>
											<!-- Dòng (row) đầu tiên của bảng -->
											<th rowspan="2">Tui chiếm 2 hàng</th>
											<!-- Cột đầu tiên -->
											<th>Tui chiếm 1 hàng</th>
											<!-- Cột thứ hai -->
											<th>Tui chiếm 1 hàng</th>
											<!-- Cột thứ ba -->
										</tr>
										<tr>
											<!-- Dòng thứ hai của bảng -->
											<td>Data 1</td>
											<!-- Dữ liệu ở cột thứ hai -->
											<td>Data 2</td>
											<!-- Dữ liệu ở cột thứ ba -->
										</tr>
									</table>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở ví dụ trên, thẻ <b>`th`</b> đầu tiên chúng ta đã khai báo <b>rowspan="2",</b> do đó thẻ này sẽ chiếm lấy cột
					đầu tiên của 2 hàng liên tiếp. Như vậy, ở hàng tiếp theo thì dữ liệu sẽ được bắt đầu từ cột thứ 2.
				</p>

				<PageHeading text="Border trong Table" addOnClass="text-left mb-3" markedAs="table-border" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tới đây chúng ta đã có thể tạo bảng, điều chỉnh hay hợp nhất các cột dữ liệu theo mong muốn nhưng lại có một
					vấn đề về border trong table. Như các bạn thấy, các cell-th,td hiện đã có border nhưng lại có một khoảng trống
					giữa chúng:
				</p>
				<img src="@/assets/images/html5-basic/table-preview-03.svg" alt="" class="rounded-lg my-3 block" />

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Việc này khiến cho UI của chúng ta trông khá tệ, để bỏ đi khoảng trống này chúng ta sẽ sử dụng css
					<b>border-spacing</b> để tác động vào thẻ table
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`/* CSS */
table {
	border-spacing: 0; /* Dùng để set khoảng trống của các border về 0 */
}`"
							highlightjs
							lang="CSS"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<table style="border-spacing: 0px">
							<tr>
								<!-- Dòng (row) đầu tiên của bảng -->
								<th rowspan="2">Tui chiếm 2 hàng</th>
								<!-- Cột đầu tiên -->
								<th>Tui chiếm 1 hàng</th>
								<!-- Cột thứ hai -->
								<th>Tui chiếm 1 hàng</th>
								<!-- Cột thứ ba -->
							</tr>
							<tr>
								<!-- Dòng thứ hai của bảng -->
								<td>Data 1</td>
								<!-- Dữ liệu ở cột thứ hai -->
								<td>Data 2</td>
								<!-- Dữ liệu ở cột thứ ba -->
							</tr>
						</table>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					(❁´◡`❁) Chúng ta đã thành công xoá đi khoảng trống giữa các cell rồi.
					<br />
					<br />

					Nhưng lại có THÊM một vấn đề về border nữa, đó là các border của cell liền kề đang dày gấp đôi so với phía
					ngoài (ಥ_ಥ) .
					<img src="@/assets/images/html5-basic/table-preview-04.svg" alt="" class="rounded-lg my-3 block" />
					<br />
					<br />
					Để giải quyết vấn đề này ta sẽ sử dụng css <b>border-collapse</b> để tác động vào thẻ table
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`/* CSS */
table {
	border-spacing: 0;
	border-collapse: collapse; /* Dùng để xếp chồng các border nằm cạnh lên nhau */
}`"
							highlightjs
							lang="CSS"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<table style="border-spacing: 0px; border-collapse: collapse">
							<tr>
								<!-- Dòng (row) đầu tiên của bảng -->
								<th rowspan="2">Tui chiếm 2 hàng</th>
								<!-- Cột đầu tiên -->
								<th>Tui chiếm 1 hàng</th>
								<!-- Cột thứ hai -->
								<th>Tui chiếm 1 hàng</th>
								<!-- Cột thứ ba -->
							</tr>
							<tr>
								<!-- Dòng thứ hai của bảng -->
								<td>Data 1</td>
								<!-- Dữ liệu ở cột thứ hai -->
								<td>Data 2</td>
								<!-- Dữ liệu ở cột thứ ba -->
							</tr>
						</table>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					(～￣▽￣)～ Done, đến đây là đã kết thúc phần cơ bản của table.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Luyện tập: thực hiện bài tập sau
					<a
						href="https://tuanphamhp.github.io/bai-tap/bai-tap-b3-table.html"
						target="_blank"
						noopener
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
						>Bài 1</a
					>
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 8 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
<style lang="scss" scoped>
	th,
	td {
		border: 1px solid;
	}
	table {
		border-spacing: 2px;
		border-collapse: separate;
	}
</style>

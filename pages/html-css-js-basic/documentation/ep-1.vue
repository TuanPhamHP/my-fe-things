<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="HTML Tag" addOnClass="text-left" markedAs="tags" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong HTML5, thuật ngữ "tag" thường được sử dụng để chỉ các thẻ (tag) HTML. Mỗi thẻ HTML định nghĩa cấu trúc
					và ý nghĩa của một phần của trang web. Các thẻ HTML được sử dụng để tạo ra các thành phần như văn bản, hình
					ảnh, liên kết, biểu mẫu, bảng, vv.
					<br />
					Một thẻ HTML bắt đầu bằng dấu <b>`&lt;`</b> và kết thúc bằng dấu <b>`>`</b>. Có hai loại thẻ: thẻ mở và thẻ
					đóng.
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content font-bold">Thẻ mở - Opening tag:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Thẻ mở bắt đầu với dấu <b>`&lt;`</b> và kết thúc bằng dấu <b>`>`</b>, ở giữa chúng là <b>`tag name | Tên thẻ`</b>. 
						<br>
						Ví dụ: {{ `<p>, <div>, <img>, <a>, <input>, <h1>` }}, vv. 
						<br>
						Trong phần mở của thẻ thường sẽ chứa các <b>`attribute | thuộc tính`</b> của thẻ, giúp cung cấp thêm thông tin về thẻ hoặc điều chỉnh hành vi của nó.
						<br>
						Trong ví dụ trên, <b>`p, div, img ...`</b> là tên của các thẻ tương ứng.
					</li>
				</ul>
				
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content font-bold">Thẻ đóng  - End tag:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Thẻ đóng bắt đầu với dấu <b>`&lt;`</b> và kết thúc bằng dấu <b>`/>`</b>, ở giữa chúng là <b>`tag name | Tên thẻ`</b>. 
						<br>
						Ví dụ: {{ `</p>, </div>, </a>, </h1>` }}, vv. 
						<br>
						Phần đóng của một thẻ được dùng để đóng lại chính nó và xác định phần <b>`content | nội dung`</b> của thẻ, <b>`content`</b> của thẻ được xác định là phần nằm giữa <b>thẻ mở</b> và <b>thẻ đóng</b>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content font-bold">Nội dung - Content:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Content của một thẻ là các thành phần nằm giữa <b>`Opening Tag`</b> và <b>`End Tag`</b>.
					<br>
					Bao gồm: 
					<br>
					- Text
					<br>
					- Các thẻ khác, các thẻ này được gọi là con của thẻ chứa nó.

					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-xl text-content font-bold">Ví dụ:</p>
				
				<VCodeBlock
					:code="`<p class='text'>Hello World</p>`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
				
				<div class="">
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				</div>
				<img src="@/assets/images/html5-basic/tag-structure.png" class="w-full rounded-xl block" alt="">
				
				<div class="py-3"></div>
				<PageHeading text="Cấu trúc cơ bản" addOnClass="text-left" markedAs="html-structure" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				 Cấu trúc cơ bản của một trang HTML được trình bày như sau: <br />
					
				</p>
			
			
				<VCodeBlock
					:code="`${htmlStructure}`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
						<p class="pl-5 inline-block mb-1"><b>{{ `<!DOCTYPE html>` }}</b>: Thẻ được dùng để chỉ định phiên bản HTML được sử dụng.<br /></p>	
						<p class="pl-5 inline-block mb-1"><b >{{ `<html lang="en">` }}</b>: Thẻ dùng để bao bọc toàn bộ nội dung của trang web, attribute <b>lang</b> được dùng để xác định ngôn ngữ của trang. ở đây là 'en' = tiếng anh <br /></p>
						<p class="pl-5 inline-block mb-1">	<b>{{ `<head>` }}</b>: Thẻ được dùng để chứa các thông tin liên quan về trang web như title, meta-data, link liên kết tài nguyên (css, js ...). Các thông tin ở phần <b>head</b> không phải là phần hiển thị của trang web. </p>
						<p  class="pl-5 inline-block mb-1">	<b>{{ `<body>` }}</b>: Thẻ được dùng để hiển thị về trang web, hầu hết các phần có thể view ở trang Web đều được định nghĩa trong thẻ <b>body</b>.</p>
				</div>
				<div class="my-10"></div>
				<PageHeading text="Một số thẻ cơ bản" addOnClass="text-left" markedAs="use-effect" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở phần này chúng ta sẽ bắt đầu làm quen với một số loại thẻ thông dụng trong HTML hiện nay
				</p>
				<PageHeading text="I - Thẻ văn bản" :lvl="2" addOnClass="text-left" markedAs="text-tags" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Về cơ bản, các văn bản có thể được trình bày ở nhiều loại thẻ khác nhau mà vẫn được hiển thị ra giao diện, tuy nhiên ta có một số thẻ có mục đích, chức năng chuyên dùng để chứa các nội dung là văn bản như: 
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các thẻ chứa nội dung thường: p,span, label ...
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các thẻ chứa nội dung tiêu đề: h1, h2, ... h6
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các thẻ có tác động đến kiểu hiển thị nội dung: pre, em, i, b, strong, small ...
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					Coding:
				</p>
				<div class="grid-cols-2 grid gap-3">
					<div class="col-span-1">
						<VCodeBlock
					:code="`<p>Đây là nội dung từ thẻ p thứ nhất</p>
<p>Đây là nội dung từ thẻ p thứ hai</p>
<span>Đây là nội dung từ thẻ span thứ nhất</span>
<span>Đây là nội dung từ thẻ span thứ hai</span>
`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
					</div>
				<div class="bg-white rounded-lg px-2 py-2 col-span-1">
					<p>Đây là nội dung từ thẻ p thứ nhất</p>
<p>Đây là nội dung từ thẻ p thứ hai</p>
<span>Đây là nội dung từ thẻ span thứ nhất</span>
<span>Đây là nội dung từ thẻ span thứ hai</span>
				</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Mặc dù cùng để hiển thị text, nhưng thẻ <b>`p`</b> và <b>`span`</b> có 2 kiểu hiển thị khác nhau. <br>
					Lí do bởi vì thẻ <b>`p`</b> được coi là dạng thẻ <b>block</b> <br>
					còn thẻ <b>`span`</b> là dạng thẻ <b>inline</b>
				</p>
				



				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  
                </th>
                <th scope="col" class="px-6 py-3">
                    BLOCK
                </th>
                <th scope="col" class="px-6 py-3">
                    INLINE
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              		 Kiểu hiển thị
                </th>
                <td class="px-6 py-4">
									Phần tử block chiếm toàn bộ chiều rộng của vùng chứa nó và bắt đầu trên một dòng mới.
									Nói cách khác, một phần tử block sẽ không nằm cùng dòng với bất kì phần tử nào khác.
                </td>
                <td class="px-6 py-4">
									Phần tử inline chỉ chiếm vừa đủ khoảng rộng chứa nội dung của chúng và không bắt đầu trên dòng mới.
									Nói các khác, một phần tử inline sẽ tự chèn vào phần trống còn lại của môt dòng
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									VD:
                </th>
                <td class="px-6 py-4">
									<b>{{ `<p>` }}</b>,
									<b>{{ `<h1> -> <h6>` }}</b>,
									<b>{{ `<div>...` }}</b>
                </td>
                <td class="px-6 py-4">
									<b>{{ `<span>` }}</b>,
									<b>{{ `<a>` }}</b>,
									<b>{{ `<b>...` }}</b>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>
<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Dưới đây ta sẽ tô màu cho phần content của các thẻ để phân biệt:
					</p>
<div class="grid grid-cols-2 gap-3">
	
	<div class="bg-white rounded-lg px-2 py-2 col-span-1">
		<p class="text-slate-900  my-5 leading-8 text-lg text-content">
				Thẻ BLOCK:
					</p>
					<p class="bg-green-300">Đây là nội dung từ thẻ p thứ nhất</p>
<p class="bg-blue-300">Đây là nội dung từ thẻ p thứ hai</p>
				</div>
				<div class="bg-white rounded-lg px-2 py-2 col-span-1">
					<p class="text-slate-900  my-5 leading-8 text-lg text-content">
				Thẻ INLINE:
					</p>
<span class="bg-green-300">Đây là nội dung từ thẻ span thứ nhất</span>
<span class="bg-blue-300">Đây là nội dung từ thẻ span thứ hai</span>
				</div>
</div>
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Note: Còn rất nhiều thẻ khác nhưng tôi tạm thời chỉ viết tới đây, lí do thì đương nhiên là lười rồi. Các bạn
					có thể đọc thêm về các thẻ khác tại
					<a
						href="https://www.w3schools.com/html/html_paragraphs.asp"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
					W3 School
					</a>
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
				htmlStructure:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
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
				this.$api.documentations.getPagination({appIds: 'html-basic',currentDocId:6})
				.then((res: apiResponde)=>{
				this.pagePagination= res?.data?.pagination || []
			})
			}
		}
	};
</script>

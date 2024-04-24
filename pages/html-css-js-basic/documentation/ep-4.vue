<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="CSS Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					CSS - Cascading Style Sheets, ta có thể coi đây là một ngôn ngữ tạo kiểu. CSS được dùng để kiểm soát, thay đổi
					giao diện của các thẻ HTML,
					ví dụ như: thay đổi màu sắc chữ, màu nền, ảnh nền, font, kiểu hiển thị v.v..
					<br />
					Về cơ bản, css quản lý các thuộc tính của nó thông qua các cặp giá trị dạng: <b>key: value;</b>
					<br />
					<br />

				</p>
				<PageHeading text="Syntax" addOnClass="text-left mb-3" markedAs="syntax-css" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Về cơ bản CSS sẽ luôn được cấu tạo từ 3 thành phần là <b>`selector`</b>, <b>`scope`</b>, <b>`các cặp key:
						value;`</b>
				</p>

				<div class="flex items-center gap-2">
					<div class=" bg-neutral-100 rounded-lg px-3 py-3">
						<img src="@/assets/images/html5-basic/css-syntax-01.svg" alt="just vibing" class="d-block h-[150px] mt-3">
					</div>
					<div class=" bg-neutral-100 rounded-lg px-3 py-3">
						<img src="@/assets/images/html5-basic/css-syntax-02.svg" alt="just vibing" class="d-block h-[150px] mt-3">
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>

				<ul class="pl-5">
					<li>
						<PageHeading text="Selector" addOnClass="text-left h-0 opacity-0" markedAs="selector" :lvl="2" />
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">

						<b>`selector`:</b> 
						<div class="grow">
							Được biết đến là bộ chọn, chúng được sử dụng để xác định chính xác các phần tử HTML sẽ được áp dụng các
							style.
							<br />
							Có rất nhiều kiểu Selector trong CSS nhưng ta có thể kể đến các loại cơ bản hay dùng như:
							<br />
							<br />
							<Disclosure v-slot="{ open }" as="div" class="border-2 border-dashed border-indigo-300 dark:border-teal-500 w-full px-2 rounded-lg py-2">
								<DisclosureButton class="w-full flex items-center justify-between"><b>- By Tag Name</b>	<Icon name="solar:list-arrow-down-minimalistic-bold" :class="open && 'rotate-180 transform '" size="24"></Icon>
								</DisclosureButton>

								<!-- Use the built-in `transition` component to add transitions. -->
								<transition enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-out"
									leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
									<DisclosurePanel as="div" class=" border-t-2 pt-2 border-solid border-indigo-300 dark:border-white w-full mt-2">
										Chọn phần tử thông qua tên của thẻ. <br />VD: p, h1, a, div ...
										<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
											<div class="col-span-1">
												<VCodeBlock :code="`/* chọn các thẻ có tag-name là p */
p {
	color: red;
	font-size: 24px;
}`" highlightjs lang="CSS" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<VCodeBlock :code="`<!--  thẻ này được chọn do tag-name là p -->
<p>Thẻ này sẽ được chọn</p> 

<!--  thẻ này không được chọn do tag-name không phải p -->
<span>Thẻ này không được chọn</span>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
										</div>
									</DisclosurePanel>
								</transition>
							</Disclosure>
							<br />
							<!-- NS -->
							<Disclosure v-slot="{ open }" as="div" class="border-2 border-dashed border-indigo-300 dark:border-teal-500 w-full px-2 rounded-lg py-2">
								<DisclosureButton class="w-full flex items-center justify-between"><b>- By Id</b>	<Icon name="solar:list-arrow-down-minimalistic-bold" :class="open && 'rotate-180 transform '" size="24"></Icon>
								</DisclosureButton>

								<!-- Use the built-in `transition` component to add transitions. -->
								<transition enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-out"
									leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
									<DisclosurePanel as="div" class=" border-t-2 pt-2 border-solid border-indigo-300 dark:border-white w-full mt-2">
										Chọn các phần tử mà attribute <b>id</b> của chúng có id được chọn.
										<br />VD: <b>#title</b> sẽ chọn đến các phần tử mà <b>id</b> có chứa <b>title</b>.

										<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
											<div class="col-span-1">
												<VCodeBlock :code="`/* chọn các thẻ mà id có chứa title */
#title {
	color: cadetblue;
	font-size: 42px;
}`" highlightjs lang="CSS" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<VCodeBlock :code="`<!--  thẻ này được chọn do id có chứa: title -->
<h1 id='title' >Thẻ này sẽ được chọn</h1> 

<!--  thẻ này không được chọn do id không chứa: title -->
<h1 >Thẻ này không được chọn</h1>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
										</div>

										Selector bằng id (id-name) sẽ buộc phải sử dụng một dấu <b># - thăng</b> đằng trước tên id. VD:
										<b>#title</b>
									</DisclosurePanel>
								</transition>
							</Disclosure>
							<br />
							<!-- NS -->
							<Disclosure v-slot="{ open }" as="div" class="border-2 border-dashed border-indigo-300 dark:border-teal-500 w-full px-2 rounded-lg py-2">
								<DisclosureButton class="w-full flex items-center justify-between"><b>- By Class Name</b>	<Icon name="solar:list-arrow-down-minimalistic-bold" :class="open && 'rotate-180 transform '" size="24"></Icon>
								</DisclosureButton>

								<!-- Use the built-in `transition` component to add transitions. -->
								<transition enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-out"
									leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
									<DisclosurePanel as="div" class=" border-t-2 pt-2 border-solid border-indigo-300 dark:border-white w-full mt-2">
										Chọn các phần tử mà attribute <b>class</b> của chúng có chứa lớp được chọn.
										<br />VD: <b>.text-blue</b> sẽ chọn đến các phần tử mà <b>class</b> có chứa <b>text-blue</b>.

										<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
											<div class="col-span-1">
												<VCodeBlock :code="`/* chọn các thẻ mà class có chứa text-blue */
.text-blue {
	color: blue;
	font-size: 40px;
}`" highlightjs lang="CSS" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<VCodeBlock :code="`<!--  thẻ này được chọn do class có chứa: text-blue -->
<span class='text-blue title'>Thẻ này sẽ được chọn</span> 

<!--  thẻ này không được chọn do class không chứa: text-blue -->
<span class='text blue title'>Thẻ này không được chọn</span>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
										</div>
										Selector bằng tên lớp (class-name) sẽ buộc phải sử dụng một dấu <b>. - chấm</b> đằng trước tên lớp.
										VD:
										<b>.text-blue</b>
									</DisclosurePanel>
								</transition>
							</Disclosure>
							<br />
							<!-- NS -->
							<Disclosure v-slot="{ open }" as="div" class="border-2 border-dashed border-indigo-300 dark:border-teal-500 w-full px-2 rounded-lg py-2">
								<DisclosureButton class="w-full flex items-center justify-between">
									<b>- By Attribute</b>	<Icon name="solar:list-arrow-down-minimalistic-bold" :class="open && 'rotate-180 transform '" size="24"></Icon>
								</DisclosureButton>

								<!-- Use the built-in `transition` component to add transitions. -->
								<transition enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-out"
									leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
									<DisclosurePanel as="div" class=" border-t-2 pt-2 border-solid border-indigo-300 dark:border-white w-full mt-2">
										Chọn các phần tử mà <b>attribute</b> của chúng thoả mãn điều kiện đặt ra.
										<br />VD: <b>.mini-title[name="first-title"]</b> sẽ chọn đến các phần tử mà <b>class</b> có chứa <b>mini-title</b> Và attribute <b>name</b> có giá trị bằng 'first-title'.

										<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
											<div class="col-span-1">
												<VCodeBlock :code="`/* chọn các thẻ mà class có chứa mini-title
 và có attribute name = first-title */
.mini-title[name='first-title'] {
	color: chocolate;
	font-size: 12px;
}`" highlightjs lang="CSS" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<VCodeBlock :code="`<!--  thẻ này được chọn do class có chứa: mini-title
và attribute name có giá trị  = 'first-title' -->
<h3 class='mini-title title' name='first-title'>Thẻ này sẽ được chọn</h3> 

<!--  thẻ này không được chọn do attribute name không bằng 'first-title' -->
<h3 class='mini-title title'>Thẻ này không được chọn</h3>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
										</div>
										Selector bằng tên lớp (class-name) sẽ buộc phải sử dụng một dấu <b>. - chấm</b> đằng trước tên lớp.
										VD:
										<b>.text-blue</b>
									</DisclosurePanel>
								</transition>
							</Disclosure>
							<br />
							<!-- NS -->
							<Disclosure v-slot="{ open }" as="div" class="border-2 border-dashed border-indigo-300 dark:border-teal-500 w-full px-2 rounded-lg py-2">
								<DisclosureButton class="w-full flex items-center justify-between">
									<b>- Combine Selector</b>
									<Icon name="solar:list-arrow-down-minimalistic-bold" :class="open && 'rotate-180 transform '" size="24"></Icon>
									
								</DisclosureButton>

								<!-- Use the built-in `transition` component to add transitions. -->
								<transition enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-out"
									leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
									<DisclosurePanel as="div" class=" border-t-2 pt-2 border-solid border-indigo-300 dark:border-white w-full mt-2">
										Đây là selector được tạo ra từ việc kết hợp nhiều selector với nhau kèm theo
										mối quan hệ giữa chúng.
										<br />VD: <b>div .big-title</b>: là một selector được kết hợp bởi
										<b>Selector Tag-Name: `div`</b> và <b>Selector Class-Name: `.big-title`</b>, chúng được nối với nhau
										bằng
										space-(dấu cách),
										thể hiện răng về bên phải sẽ là phần tử con của vế bên trái.
										<br />=> sẽ chọn đến các phần tử mà <b>class</b> có chứa <b>big-title</b> VÀ là con của thẻ
										<b>div</b>.
										<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
											<div class="col-span-1">
												<VCodeBlock :code="`/* chọn các thẻ mà class có chứa big-title VÀ là con của thẻ div */
div .big-title {
	color: purple;
	font-size: 32px;
}`" highlightjs lang="CSS" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<VCodeBlock :code="`<!--  thẻ này được chọn do vừa là con của div vừa có class big-title -->
<div>
	<h1 class='big-title marked' >Thẻ này sẽ được chọn</h1> 
</div>

<!--  thẻ này không được chọn do không phải con của thẻ div -->
<h1 class='big-title' >Thẻ này không được chọn</h1> `" highlightjs lang="HTML" theme="vs2015" />
											</div>
										</div>
										Như vậy <b>Combine Selector</b> đơn giản là việc chúng ta kết hợp, ràng buộc các selector với nhau để tạo lên mối quan hệ giữa chúng.
										<br>
										Tuỳ thuộc vào các dấu nối (operator) khác nhau sẽ cho ra các mỗi quan hệ khác nhau.
										<br /> <b> - space:</b> vế phải sẽ là con (bất kể cấp bậc) của vế trái. 
										<br /><br />	Ví dụ:
										<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
											<div class="col-span-1">
												<p><b>div p</b> => p là con của div</p>
												<VCodeBlock :code="`<div>
	<p>Thẻ này sẽ được chọn</p> 
</div>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<p><b>div p span</b> => span là con của p và đồng thời là con của div</p>
												<VCodeBlock :code="`<div>
	<span>Thẻ này không được chọn</span>
	<p>
		<span>Thẻ này sẽ được chọn</span>
	</p> 
</div>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
										</div>
									</DisclosurePanel>
								</transition>
							</Disclosure>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
					<span>Trên đây là một số selector thường được dùng. Ngoài ra còn rất nhiều loại selectors khác, các bạn có thể research thêm.</span>
					</li>
					<li>
						<PageHeading text="Properties" addOnClass="text-left h-0 opacity-0" markedAs="properties" :lvl="2" />
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`properties`:</b> 
						<div>
							Là các cặp giá trị dạng <b>key: value</b>, được dùng để xác định <b>thuộc tính</b> nào được tác động và <b>giá trị</b> mới của nó.
						<br />
							Mỗi cặp giá trị <b>key: value</b> được ngăn cách nhau bởi dấu <b>";" - chấm phẩy</b>/
							<br>
							VD:
							<VCodeBlock :code="`.page-title {
	color: red;
	font-size: 24px;
}`" highlightjs lang="CSS" theme="vs2015" />
						<br>
							Trong cùng một thẻ thì <b>key</b> là duy nhất. Có nghĩa là nếu ta định nghĩa các key trùng nhau thì chỉ một trong số chúng sẽ được áp dụng.
							<br>
							<br>
							VD: 
							<VCodeBlock :code="`.text-success {
	color: red;
	color: green;
	/* bị trùng key 'color'. */
}`" highlightjs lang="CSS" theme="vs2015" />
Như ví dụ trên ta có thể thấy key <b>color</b> bị trùng, lúc này một trong hai giá trị <b>red</b> hoặc <b>green</b> sẽ được áp dụng. Dựa theo quy tắc ưu tiên của css (css priority) thì giá trị
<b>green</b> sẽ ghi đè lên <b>red</b> và được áp dụng.
						</div>
					</li>
					<li>
						<PageHeading text="Scope" addOnClass="text-left h-0 opacity-0" markedAs="scope" :lvl="2" />
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content  flex items-start gap-1">
						<b>`scope`:</b> 
						<div>
							Là vùng quy định các <b>properties</b> được viết ra sẽ áp dụng cho <b>selector</b> nào
						<br />
							Scope thường được định nghĩa bằng cặp ngoặc nhọn <b>{}</b>
						</div>
					</li>
				</ul>
				
				<PageHeading text="Insert CSS" addOnClass="text-left mb-3" markedAs="insert-css" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Giờ chúng ta sẽ tìm cách để nhúng code CSS vào trong HTML.
					<br>
					CSS thường được nhúng theo 3 kiểu chính như sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1 font-bold">
						1) Inline CSS
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1 font-bold">
						2) Internal CSS
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1 font-bold">
						3) External CSS
					</li>
				</ul>
				<PageHeading text="Inline" addOnClass="text-left mb-3" markedAs="inline-css" :lvl="2" />
		
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Inline css - cách viết css này giống như tên của nó, css sẽ được viết trực tiếp vào trong thẻ HTML thông qua
					attribute <b>`style`.</b>
					<br>
					Bởi vì CSS được code trực tiếp vào thẻ HTML nên ta đã xác định được các thành phần là <b>`selector`</b>, <b>`scope`.</b>
					<br> 
					Như vậy, với cách viết Inline này chúng ta không cần phải khai báo<b>`selector`</b> và <b>`scope`.</b> => chỉ còn lại <b>`properties`</b>
				</p>
				
				<VCodeBlock :code="`<a href='https://www.google.com/' target='_blank' style='color:red; font-size:40px;'>
	Click me to view Google
</a>`" highlightjs
					lang="HTML" theme="vs2015" />
				
				
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">

					<br>Như vậy ta đã viết được CSS trong HTML rồi. 				<b>	(❁´◡`❁)</b> 
					<br>
					<br>Nhưng giả sử trong trang HTML của chúng mình có khoảng 100 cái link như trên và đều cần css giống nhau.
					Chúng ta sẽ phải copy cái đoạn css <b>`color:red; font-size:40px;`</b> 100 lần mặc dù nó không khác gì nhau cả.
					<br> <b>(＃°Д°)	</b>
					<br>
					<br> Chưa kể đến việc nếu ta cần update lại css, ví dụ như đổi từ màu đỏ sang màu xanh. Thì ta sẽ phải update 100 lần.
					<br> <b>(┬┬﹏┬┬)</b>
					<br> Không sao, để giải quyết những điểm yếu đó và tiếp tục được "lười", chúng ta sẽ đến với kiểu CSS thứ 2 - Internal CSS.
				</p>
					<PageHeading text="Internal" addOnClass="text-left mb-3" markedAs="internal-css" :lvl="2" />
		
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Internal css - Ở đây ta sẽ gom toàn bộ code CSS vào cùng một vùng và giải quyết luôn cái "điểm yếu" của thằng Inline CSS.
					 	<br>	CSS sẽ được viết lại trong thẻ <b>{{ `<style></style>` }}</b> của file HTML. Thường ta nên đặt thẻ <b>{{ `<style></style>` }}</b> 
						ở phần <b>{{ `<head>` }}</b> của file HTML để nó áp dụng cho toàn bộ <b>{{ `<body>` }}</b>
						<br>
						Ngược lại với Inline CSS, chúng ta cần xác định rõ cả	<b>`selector`</b>, <b>`scope`.</b>
					</p>
					
					<VCodeBlock :code="`<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
  <style>
    /* CSS viết ở đây nha */
    .my-special-link {
      color: red;
      font-size: 40px;
    }
  </style>
</head>

<body>
  <a href='https://www.google.com/' target='_blank' class='my-special-link'>
    Click me to view Google
  </a>
</body>

</html>`" highlightjs
					lang="HTML" theme="vs2015" />
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<br>Ngon lành, như vậy dù ta có thêm 100 cái link nữa thì cũng chỉ cần khai báo class <b>`my-special-link`</b> cho chúng là xong. 				<b>	(❁´◡`❁)</b> 
					<br>
					<br>NHƯNG giả sử Website của chúng mình không chỉ có 1 trang như trên, mà là 20 trang. Mỗi trang đều có thẻ <b>{{ `<a>` }}</b>
						và cần css cũng y như thế. 
					<br>
					Chúng ta sẽ phải copy cái cục <b>`{{ '<style> ... </style>' }}`</b> 20 lần mặc dù nó không khác gì nhau cả.
					<br> <b>(＃°Д°)	</b>
					<br>
					<br> Và nỗi khổ đó cũng kéo dài khi ta cần update lại css cho class <b>`my-special-link`</b>
					<br> <b>\(＞︿＜)/</b>
					<br> Không saooooo, để giải quyết những điểm yếu đó và tiếp tục được "lười" tập 3, chúng ta sẽ đến với kiểu CSS thứ 3 - External CSS.
				</p>	
					<PageHeading text="External" addOnClass="text-left mb-3" markedAs="external-css" :lvl="2" />
		
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						External Css - Về mặt ý tưởng, ta sẽ tìm cách gom toàn bộ đoạn code trong <b>`{{ '<style>...</style>' }}`</b> lại thành 1 file - mình tạm gọi tên là <b>`style.css`</b>,
						sau đó ta sẽ nhúng <b>`style.css`</b> vào các trang HTML mà chúng ta muốn. Khi đó, bất cứ thay đổi nào ở file <b>`style.css`</b>
						thì các trang HTML đã nhúng nó sẽ được update theo.
					</p>

					<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
						<div class="col-span-1">
												<VCodeBlock :code="`<!-- File: ~/index.html -->
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
  <!-- Sử dụng đường dẫn tương đối để link đến file style.css qua thẻ link -->
  <link rel='stylesheet' href='./style.css'>
</head>

<body>
  <a href='https://www.google.com/' target='_blank' class='my-special-link'>
    Click me to view Google
  </a>
</body>

</html>`" highlightjs lang="HTML" theme="vs2015" />
											</div>
											<div class="col-span-1">
												<VCodeBlock :code="`/* File: ~/style.css */
.my-special-link {
	color: red;
	font-size: 40px;
}
`" highlightjs lang="CSS" theme="vs2015" />


<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
	Cây thư mục trông sẽ như thế này.
</p>
<img src="@/assets/images/html5-basic/css-link.svg" alt="" class="rounded-lg mt-3 block" >
											</div>
										</div>


					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Ở trên mình đã dùng đường dẫn tương đối (Relative path) để trỏ đến địa chỉ file CSS,
						trong trường hợp bạn chưa rõ về đường dẫn tương đối, tuyệt đối thì vui lòng re-search trên google nhé. Yên tâm, nó rất dễ để hiểu.
						<br>
						Ngoài ra, ở bài này chúng ta thấy xuất hiện một thẻ mới là thẻ <b>`{{ '<link />' }}`</b>, cũng tự tìm hiểu luôn nhớ. 

					</p>
				<!-- END -->
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Note: Trong các thẻ còn rất nhiều thuộc tính riêng khác nhưng tôi tạm thời chỉ viết tới đây. Các bạn
					có thể đọc thêm về các thẻ khác tại
					<a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500">
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
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/vue'
export default {
	components: {
		PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage, Disclosure,
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
			this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 8 })
				.then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || []
				})
		}
	}
};
</script>

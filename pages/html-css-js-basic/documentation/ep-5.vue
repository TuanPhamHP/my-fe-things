<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="HTML Form" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Form</b> là một nhóm thẻ cho phép người dùng tiến hành nhập liệu và gửi dữ liệu lên trên server,
					<b>Form</b> còn hỗ trợ ta validate dữ liệu của người dùng.
				</p>
				<PageHeading text="Syntax" addOnClass="text-left mb-3" markedAs="syntax-css" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Dưới đây là cú pháp cơ bản để tạo một form trong HTML5
				</p>
				<VCodeBlock
					:code="`<form action='https://www.google.com/search' method='GET'>
	<!-- các thành phần của form sẽ được khai báo trong content của thẻ form -->
	<p>Tìm kiếm:</p>
	<input type='text' name='q' />
	<button>Gửi</button>
</form>
`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, khi tạo một form ta cần tạo thẻ <b>`form`</b> trước để định nghĩa vùng hoạt động cho các thẻ con.
					<br />
					Sau đó ta có thể thêm các loại thẻ dùng để nhập liệu vào trong <b>`form`</b> để cho phép người dùng thao tác
					với hệ thống.
					<br>
					<br>
					Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`action: `</b>
						<div>
							<span>
								Đây là thuộc tính được sử dụng để xác định URL mà dữ liệu từ form sẽ được gửi đến khi form được submit.
								 Khi người dùng nhấn nút "submit" trong form, trình duyệt sẽ gửi dữ liệu được nhập trong form đó đến địa chỉ được chỉ định trong thuộc tính "action".
								 <br>
								 <br>
								 => ta có thể sử dụng attribute <b>`target`</b> như thẻ <b>`a`</b> để điều hướng việc submit này
							</span>
							
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`method: `</b>
						<div>
							<span>
								Là thuộc tính được dùng để xác định phương thức gửi dữ liệu từ form đến máy chủ khi form được submit. Có hai giá trị phổ biến cho thuộc tính "method": "GET" và "POST".
							</span>
							<p class="my-2">
								<b>- "GET":</b> Khi sử dụng phương thức "GET", dữ liệu từ form sẽ được gửi dưới dạng query string được đính kèm vào URL. 
							</p>
							<p class="my-2">
								<b>- "POST":</b>Khi sử dụng phương thức "POST", dữ liệu từ form sẽ được gửi dưới dạng một yêu cầu HTTP độc lập với thông tin về dữ liệu được đính kèm ẩn. 
								Dữ liệu này được gửi tách biệt với URL và không hiển thị trực tiếp trong trình duyệt.
							</p>
						</div>
					</li>
				
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Khi form được submit, trình duyệt sẽ gửi dữ liệu theo phương thức được chỉ định 
				(GET hoặc POST) đến địa chỉ được xác định trong thuộc tính "action".
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về các thẻ nhập liệu trong <b>`form`.</b> Tôi sẽ chia ra làm 2 loại là
					typing (nhập liệu từ bàn phím), và select (nhập liệu bằng cách check options)
				</p>
				<PageHeading text="Form input - Typing" addOnClass="text-left" markedAs="form-input" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Input</b> là một thẻ dùng để cho phép người dùng nhập liệu từ bàn phím (gõ văn bản), hay chọn file, check
					options.
					<br />
					Sau đây là một số thuộc tính cơ bản của thẻ <b>`input`</b>
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`type: `</b>
						<div>
							<span>
								Đây là thuộc tính được sử dụng để quyết định xem kiểu nhập liệu của người dùng. VD: text, password ....
								Như vậy, tuỳ thuộc vào dạng giá trị của <b>type=" "</b> mà chúng ta sẽ có những dạng nhập liệu khác
								nhau.
								<br />
								Chúng ta sẽ tìm hiểu kỹ hơn về các dạng <b>type=" "</b> ở section tiếp theo.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`placeholder: `</b>
						<div>
							<span>
								Là thuộc tính được dùng để hiển thị lời gợi ý cho thẻ <b>`input`.</b> Dòng gợi ý sẽ biến mất ngay khi
								người dùng bắt đầu nhập vào ký tự bất kỳ.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`value: `</b>
						<div>
							<span>
								Là thuộc tính được dùng để set giá trị mặc định cho thẻ <b>`input`.</b> Khi <b>`value`</b> được set thì
								dòng gợi ý từ <b>`placeholder`</b> sẽ bị ẩn đi do <b>`value`</b> được coi như giá trị người dùng đã nhập
								vào.
							</span>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Preview:</b>
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<form class='user-info-form'>
	<div class='user-name'>
		<p>Họ và tên</p>
		<input type='text' placeholder='Nhập tên của bạn' />	
	</div>
	<div class='user-email'>
		<p>Email</p>
		<input type='email' placeholder='Email của bạn' value='example@gmail.com' />	
	</div>
	<div class='user-password'>
		<p>Mật khẩu</p>
		<input type='password' placeholder='Mật khẩu từ 6 - 10 ký tự' value='12345678' />	
	</div>
</form>
`"
							highlightjs
							lang="HTML"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
						<img src="@/assets/images/html5-basic/form-01.svg" alt="" class="rounded-lg mt-3 block" />
					</div>
				</div>

				<PageHeading text="Input type" addOnClass="text-left" markedAs="form-input-type" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo chúng ta sẽ tìm hiểu về một số dạng type của input hay được sử dụng:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`text: `</b>
						<div>
							<span> Đây là loại phổ biến nhất của input, được sử dụng để nhập dữ liệu văn bản ngắn.
								Nếu cần nhập văn bản dài thì ta sử dụng thẻ <b>{{ `<textarea>` }}</b> để nhập liệu.	
							</span>
							<VCodeBlock
								:code="`<input type='text' placeholder='Nhập tên của bạn' />`"
								highlightjs
								lang="HTML"
								theme="vs2015"
							/>
						</div>
					</li>

					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`password: `</b>
						<div>
							<span>
								Loại này cho phép người dùng nhập mật khẩu một cách an toàn, với dữ liệu được ẩn đi, chống copy.</span
							>
							<VCodeBlock
								:code="`<input type='password' placeholder='Mật khẩu từ 6 - 10 ký tự' value='12345678' />`"
								highlightjs
								lang="HTML"
								theme="vs2015"
							/>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`email: `</b>
						<div>
							<span>
								Cho phép người dùng nhập kí tự như <b>'text'</b> ngoài ra còn có tính năng kiểm tra xem dữ liệu nhập vào
								có phải là một địa chỉ email hợp lệ không.
							</span>
							<VCodeBlock
								:code="`<input type='email' placeholder='Email của bạn' value='example@gmail.com' />`"
								highlightjs
								lang="HTML"
								theme="vs2015"
							/>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`number: `</b>
						<div>
							<span>
								Cho phép người dùng nhập một giá trị số, hoặc ký tự phù hợp với numberType <b>(+, -, e ...)</b>
							</span>
							<VCodeBlock
								:code="`<input type='number' placeholder='Số lượng' />`"
								highlightjs
								lang="HTML"
								theme="vs2015"
							/>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`file: `</b>
						<div>
							<span>
								Cho phép người dùng chọn file local để gửi lên
								<br />
								<br />
								Sử dụng attribute <b>multiple</b> để tải nhiều
								<br />
								<br />
								Sử dụng attribute <b>accept</b> để chọn loại file cho phép tải. Eg:
								<b class="px-1 rounded bg-neutral-400 mx-1 whitespace-nowrap">image/* -(chỉ ảnh)</b>
								<b class="px-1 rounded bg-neutral-400 mx-1 whitespace-nowrap">image/*,.pdf -(chỉ ảnh và file pdf)</b>
								<b class="px-1 rounded bg-neutral-400 mx-1 whitespace-nowrap">image/png -(chỉ ảnh đuổi png)</b>
								<br />
								<br />
							</span>
							<VCodeBlock
								:code="`<input type='number' placeholder='Số lượng' />`"
								highlightjs
								lang="HTML"
								theme="vs2015"
							/>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở trên là một số loại <b>`type`</b> thường được sử dụng. Ngoài ra còn rất nhiều loại type nữa như
					<b>color, time, date ...</b>, các bạn vui lòng tìm hiểu thêm tại
					<a
						href="https://www.w3schools.com/html/html_form_input_types.asp"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						W3 School
					</a>
				</p>
				<PageHeading text="Textarea" addOnClass="text-left" markedAs="form-textarea" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như đã giới thiệu ở phần <b>type='text'</b> của thẻ input, trong trường hợp
					người dùng cần nhập liệu với văn bản dài (VD: nhập địa chỉ, viết comment, viết blog ...)
					thì ta có thể sử dụng thẻ <b>{{ `<textarea>` }}</b> để thực hiện việc này.
				</p>

			<div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
				<div class="col-span-1">
					<VCodeBlock
								:code="`<textarea
	cols='30'
	rows='10'
	placeholder='Nhập địa chỉ cụ thể của bạn ...'
></textarea>`"
								highlightjs
								lang="HTML"
								theme="vs2015"
							/>
				</div>
				<div class="col-span-1">
					<textarea
	cols='30'
	rows='6'
	placeholder='Nhập địa chỉ cụ thể của bạn ...'
	class="px-3 py-1 rounded-lg"
></textarea>
				</div>
			</div>
			<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó: 
			</p>
			<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[100px]">`cols: `</b>
						<div>
							<span> được sử dụng để chỉ định số lượng cột (chiều ngang) của vùng văn bản trong textarea. Nó xác định số ký tự ngang tối đa mà
								 textarea có thể hiển thị trước khi cuộn ngang xuất hiện.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[100px]">`rows: `</b>
						<div>
							<span> được sử dụng để chỉ định số lượng hàng (chiều dọc) của vùng văn bản trong textarea. Nó xác định số ký tự ngang tối đa mà
								 textarea có thể hiển thị trước khi cuộn dọc xuất hiện.
							</span>
						</div>
					</li>
				</ul>

				<PageHeading text="Form input - Select" addOnClass="text-left" markedAs="form-input-select" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về các thẻ nhập dạng select trong <b>`form`.</b>
				</p>
				<PageHeading text="Checkboxes" addOnClass="text-left" markedAs="form-input-checkbox" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Checkboxes đưa ra một danh sách các lựa chọn cho người dùng và cho phép người dùng
					chọn nhiều phần tử trong danh sách đó. VD: Lựa chọn sở thích ....
				</p>

				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
							<VCodeBlock
														:code="`<p>Sở thích của bạn là:</p>
<div>
	<input type='checkbox' name='hobbies' value='1' /> <span>Ăn ngon</span>
</div>
<div>
	<input type='checkbox' name='hobbies' value='2' checked /> <span>Ngủ kỹ</span>
</div>
<div>
	<input type='checkbox' name='hobbies' value='3' disabled /> <span>Đi chơi</span>
</div>`"
														highlightjs
														lang="HTML"
														theme="vs2015"
													/>
					</div>
<div class="col-span-1 px-3 py-3 bg-gray-200 rounded-lg text-xl">
	<p class="mb-3">Sở thích của bạn là:</p>
	<div>
		<input type='checkbox' name='hobbies' value='1' /> <span>Ăn ngon</span>
	</div>
	<div>
		<input type='checkbox' name='hobbies' value='2' checked /> <span>Ngủ kỹ</span>
	</div>
	<div>
		<input type='checkbox' name='hobbies' value='3' disabled /> <span>Đi chơi</span>
	</div>
</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Các checkbox sẽ được liên kết với nhau nếu có cùng giá trị của attribute <b>name.</b> Trong ví dụ trên,
				cả 3 input sẽ được liên kết với nhau do có name='hobbies'.
				<br>
				<br>
				Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[100px]">`name: `</b>
						<div>
							<span> Được dùng để liên kết các thẻ checkbox vào chung một nhóm.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[100px]">`value: `</b>
						<div>
							<span> Đây là giá trị thực sử gửi lên server, thay vì đoạn text được hiển thị bên cạnh.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[100px]">`checked: `</b>
						<div>
							<span>để chỉ định rằng checkbox đó được chọn mặc định khi trang web được tải lần đầu hoặc khi phần tử được render.
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[100px]">`disabled: `</b>
						<div>
							<span> được sử dụng để làm cho checkbox không thể tương tác được từ phía người dùng.
							</span>
						</div>
					</li>
				</ul>
				<PageHeading text="Radio" addOnClass="text-left" markedAs="form-input-radio" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tương tự như <b>Checkbox,</b>	<b>Radio</b> đưa ra một danh sách các lựa chọn cho người dùng nhưng chỉ cho phép người dùng
					chọn một phần tử trong danh sách đó.
				</p>

				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
							<VCodeBlock
														:code="`<p>Lựa chọn phương thức thanh toán</p>
<div>
	<input type='radio' name='paymentMethod' value='1' /> <span>Thanh toán khi nhận hàng</span>
</div>
<div>
	<input type='radio' name='paymentMethod' value='2' checked /> <span>Thẻ Visa/Master Card</span>
</div>
<div>
	<input type='radio' name='paymentMethod' value='3' disabled /> <span>Tài khoản ngân hàng</span>
</div>`"
														highlightjs
														lang="HTML"
														theme="vs2015"
													/>
					</div>
<div class="col-span-1 px-3 py-3 bg-gray-200 rounded-lg text-xl">
	<p class="mb-3">Lựa chọn phương thức thanh toán</p>
	<div>
		<input type='radio' name='paymentMethod' value='1' /> <span>Thanh toán khi nhận hàng</span>
	</div>
	<div>
		<input type='radio' name='paymentMethod' value='2' checked /> <span>Thẻ Visa/Master Card</span>
	</div>
	<div>
		<input type='radio' name='paymentMethod' value='3' disabled /> <span>Tài khoản ngân hàng</span>
	</div>
</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các attributes như <b>name, value, checked, disabled</b> đều tương tự với Checkbox.
				</p>
				<PageHeading text="Select/Options" addOnClass="text-left" markedAs="form-select-options" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong trường hợp bạn vẫn muốn cho người dùng chọn phần tử như <b>radio, checkbox</b>, NHƯNG danh sách
					lựa chọn lại quá nhiều (gây ra việc giao diện trông rất xấu), hoặc nếu sử dụng <b>radio</b> sẽ
					gây ra vỡ giao diện thì bạn có thể lựa chọn việc sử dụng thẻ <b>select/option</b>.
					Cặp thẻ này sẽ thể hiện danh sách phần tử dưới dạng dropdown.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Select chọn một phần tử - Tương tự radio
				</p>
<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
							<VCodeBlock
														:code="`<p>Bạn đang làm công việc chính là:</p>
<select name='job'>
  <option value='1'>Học sinh / Sinh viên</option>
  <option value='2' selected>Nhân viên văn phòng</option>
  <option disabled>------------</option>
  <option value='3'>Nội trợ</option>
  <option value='4'>Lập trình viên</option>
  <option value='5'>Không rõ</option>
</select>
`"
														highlightjs
														lang="HTML"
														theme="vs2015"
													/>
					</div>
<div class="col-span-1 px-3 py-3 bg-gray-200 rounded-lg text-xl">
	<p>Bạn đang làm công việc chính là:</p>
<select name='job'>
  <option value='1'>Học sinh / Sinh viên</option>
  <option value='2' selected>Nhân viên văn phòng</option>
  <option disabled>------------</option>
  <option value='3'>Nội trợ</option>
  <option value='4'>Lập trình viên</option>
  <option value='5'>Không rõ</option>
</select>
</div>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Select chọn nhiều phần tử - Tương tự checkboxes.
					<br><br>
					Bằng cách giữ phím Control (Windows) hoặc Command (Mac) và nhấp chuột vào các tùy chọn mong muốn.
					Bạn cũng có thể sử dụng phím Shift để chọn một phạm vi các lựa chọn liên tiếp.
				</p>
<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
							<VCodeBlock
														:code="`<p>Bạn đang làm công việc chính là:</p>
<select name='job' multiple>
  <option value='1'>Học sinh / Sinh viên</option>
  <option value='2' selected>Nhân viên văn phòng</option>
  <option disabled>------------</option>
  <option value='3'>Nội trợ</option>
  <option value='4'>Lập trình viên</option>
  <option value='5'>Không rõ</option>
</select>
`"
														highlightjs
														lang="HTML"
														theme="vs2015"
													/>
					</div>
<div class="col-span-1 px-3 py-3 bg-gray-200 rounded-lg text-xl">
	<p>Bạn đang làm công việc chính là:</p>
<select name='job' multiple>
  <option value='1'>Học sinh / Sinh viên</option>
  <option value='2' selected>Nhân viên văn phòng</option>
  <option disabled>------------</option>
  <option value='3'>Nội trợ</option>
  <option value='4'>Lập trình viên</option>
  <option value='5'>Không rõ</option>
</select>
</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các attributes như <b>name, value,  disabled</b> đều tương tự với Checkbox, Radio, duy chỉ có <b>checked</b> sẽ được thay thế bằng <b>selected</b>.
				</p>
				
				<PageHeading text="Additional " addOnClass="text-left" markedAs="form-additional" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Sử dụng thẻ <b>label</b> để viết title cho một ô nhập liệu,
					Chúng ta nên ưu tiên việc sử dụng thẻ <b>`{{ `<label></label>` }}`</b> để viết title cho một thẻ, lí do bởi vì
					với thẻ <b>`{{ `<label></label>` }}`</b> ta có thẻ sử dụng attribute <b>`for="#inputId"`</b> để liên kết một <b>`label`</b>
					với một thẻ input khác. Từ đó ta có thể focus/check một input thông qua việc click vào <b>`label`</b> được liên kết.
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
							<VCodeBlock
														:code="`<p>Lựa chọn phương thức thanh toán</p>
<div>
	<input id='payment-01' type='radio' name='pm' value='1' />
	<label for='payment-01'>Thanh toán khi nhận hàng</label>
</div>
<div>
	<input id='payment-02' type='radio' name='pm' value='2' checked />
	<label for='payment-02'>Thẻ Visa/Master Card</label>
</div>
<div>
	<input id='payment-03' type='radio' name='pm' value='3' disabled />
	 <label for='payment-03'>Tài khoản ngân hàng</label>
</div>
`"
														highlightjs
														lang="HTML"
														theme="vs2015"
													/>
					</div>
<div class="col-span-1 px-3 py-3 bg-gray-200 rounded-lg text-xl">
	<h2 class="mb-2 font-bold">Có link label và input</h2>
	<p>Lựa chọn phương thức thanh toán</p>
<div>
	<input id='payment-01' type='radio' name='pm' value='1' />
	<label for='payment-01'>Thanh toán khi nhận hàng</label>
</div>
<div>
	<input id='payment-02' type='radio' name='pm' value='2' checked />
	<label for='payment-02'>Thẻ Visa/Master Card</label>
</div>
<div>
	<input id='payment-03' type='radio' name='pm' value='3' disabled />
	 <label for='payment-03'>Tài khoản ngân hàng</label>
</div>

<h2 class="mt-8 mb-2 font-bold">Không link label và input</h2>
<p>Lựa chọn phương thức thanh toán</p>
<div>
	<input type='radio' name='pm' value='1' />
	<label >Thanh toán khi nhận hàng</label>
</div>
<div>
	<input  type='radio' name='pm' value='2' checked />
	<label >Thẻ Visa/Master Card</label>
</div>
<div>
	<input type='radio' name='pm' value='3' disabled />
	 <label>Tài khoản ngân hàng</label>
</div>
</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Bên cạnh đó còn có một số thẻ, thông tin thêm về form trong HTML:
					<br><br>
					Một số attrubute khác của các thẻ trong form:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[120px]">`readonly`</b>
						<div>
							<span> Được dùng để chuyển thẻ sang dạng chỉ đọc, lúc này user có thể đọc, thao tác với 
								nội dung của thẻ (bôi đen, copy ...) nhưng không thể nhập liệu với thẻ
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[120px]">`required`</b>
						<div>
							<span> <b>validate</b> nếu dữ liệu của thẻ rỗng thì sẽ báo lỗi
							</span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[120px]">`min | max`</b>
						<div>
							<span>áp dụng cho các phần tử type = number, date, range .... Nó xác định giá trị tối thiểu | tối đa mà người dùng có thể chọn hoặc nhập vào phần tử.
							</span>
						 <br>	Ví dụ, với {{ `<input type="number" min="1" max="10">` }}, người dùng chỉ có thể chọn giá trị từ 1 đến 10.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[120px]">`minlength | maxlength`</b>
						<div>
							<span>áp dụng cho các phần tử type = text, password .... Nó xác định độ dài tối thiểu | tối đa mà người dùng có thể nhập vào phần tử.
							</span>
						 <br>	Ví dụ, với {{ `<input type="text" minlength="3">` }}, người dùng phải nhập ít nhất 3 ký tự vào trường input trước khi nó được coi là hợp lệ.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[120px]">`pattern`</b>
						<div>
							<span> cho phép ta chỉ định một biểu thức chính quy mà người dùng phải tuân thủ khi nhập liệu
							</span>
						 <br>	Ví dụ, với {{ `<input type="text" pattern="[0-9]{5}" title="Vui lòng nhập 5 chữ số">` }},
						 Trong ví dụ này, <b>pattern="[0-9]{5}"</b> yêu cầu người dùng nhập chính xác 5 chữ số từ 0 đến 9. Nếu họ nhập vào một giá trị không phù hợp, thông báo "Vui lòng nhập 5 chữ số" sẽ hiển thị.
						</div>
					</li>
				</ul>
				
			
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
				checkSelect:''
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 10 }).then((res: apiResponde) => {
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

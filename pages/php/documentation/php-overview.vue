<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ có cái nhìn tổng quan về PHP — PHP là gì, dùng làm gì trong thực tế,
					hoạt động như thế nào trên server, đồng thời điểm qua các tính năng nổi bật của
					<FilePath>PHP 8.x</FilePath> so với <FilePath>PHP 7.x</FilePath>.
				</p>

				<!-- ===== INTRODUCTION ===== -->
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>PHP</b> — "Hypertext Preprocessor" là ngôn ngữ lập trình <b>phía server (server-side)</b>.
					Code PHP chạy trên máy chủ web, xử lý logic, kết nối database rồi trả kết quả về trình duyệt
					dưới dạng HTML/JSON — người dùng <b>không bao giờ thấy code PHP gốc</b>, chỉ thấy kết quả đã
					được render.
				</p>
				<p class="text-slate-900 dark:text-white mt-4 leading-8">
					PHP được sử dụng bởi hơn <b>75% website</b> trên Internet. Nhiều sản phẩm và framework lớn
					được xây dựng bằng PHP:
				</p>
				<ul class="list-disc list-inside text-slate-900 dark:text-white mt-3 leading-9 ml-4">
					<li><b>WordPress</b> — CMS phổ biến nhất thế giới, chiếm ~43% tổng số website</li>
					<li><b>Laravel</b> — PHP framework hiện đại và được yêu thích nhất hiện nay</li>
					<li><b>Facebook</b> — khởi đầu hoàn toàn bằng PHP (sau chuyển sang Hack/HHVM)</li>
					<li><b>Wikipedia</b> — dùng PHP làm backend chính cho đến nay</li>
					<li><b>Magento / WooCommerce</b> — các nền tảng e-commerce lớn nhất thế giới</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-4 mb-2 leading-8 font-bold py-2 italic">
					=> PHP là ngôn ngữ server-side: xử lý logic, query DB, trả HTML/JSON về client.<br />
					=> Hỗ trợ nhiều DB: MySQL, PostgreSQL, Oracle, MS SQL, MongoDB ...<br />
					=> Hoàn toàn miễn phí, chạy trên mọi OS: Linux, Windows, macOS.
				</p>

				<!-- ===== PHP DÙNG ĐỂ LÀM GÌ? ===== -->
				<PageHeading text="PHP Dùng Để Làm Gì?" addOnClass="text-left" markedAs="php-use-cases" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong các dự án web thực tế, PHP thường đảm nhận những nhiệm vụ sau:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Nhiệm vụ</th>
								<th scope="col" class="px-6 py-3">Ví dụ thực tế</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">Xử lý form</th>
								<td class="px-6 py-4">Nhận dữ liệu đăng ký / đăng nhập, validate rồi lưu vào database</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">CRUD Database</th>
								<td class="px-6 py-4">Tạo / đọc / sửa / xoá bài viết, sản phẩm, đơn hàng trong MySQL</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">Xây dựng REST API</th>
								<td class="px-6 py-4">Cung cấp API endpoint cho mobile app hoặc frontend React / Vue</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">Authentication</th>
								<td class="px-6 py-4">Quản lý session, JWT token, OAuth đăng nhập qua Google / Facebook</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">Upload & xử lý file</th>
								<td class="px-6 py-4">Upload ảnh, resize thumbnail, generate PDF / export Excel</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">Gửi email</th>
								<td class="px-6 py-4">Email xác nhận đơn hàng, reset mật khẩu, gửi newsletter hàng loạt</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ví dụ thực tế: đây là luồng xử lý form đăng nhập đơn giản bằng PHP thuần:
				</p>
				<VCodeBlock
					:code="loginFormCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<!-- ===== PHP HOẠT ĐỘNG NHƯ THẾ NÀO? ===== -->
				<PageHeading text="PHP Hoạt Động Như Thế Nào?" addOnClass="text-left" markedAs="php-how-it-works" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Khi bạn truy cập một trang web PHP, quá trình diễn ra theo tuần tự sau:
				</p>
				<div class="relative overflow-x-auto mt-4 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-4 py-3 w-10">Bước</th>
								<th scope="col" class="px-6 py-3">Ai thực hiện</th>
								<th scope="col" class="px-6 py-3">Mô tả</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-4 py-4 font-bold text-gray-900 dark:text-white">1</td>
								<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">Trình duyệt</td>
								<td class="px-6 py-4">Gửi HTTP Request tới server (ví dụ: <code>GET /products?page=2</code>)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-4 py-4 font-bold text-gray-900 dark:text-white">2</td>
								<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">Web Server (Apache / Nginx)</td>
								<td class="px-6 py-4">Nhận request, thấy file <code>.php</code> → chuyển sang PHP Interpreter xử lý</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-4 py-4 font-bold text-gray-900 dark:text-white">3</td>
								<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">PHP Interpreter</td>
								<td class="px-6 py-4">Thực thi code PHP: xử lý logic, validate, tính toán, query database ...</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-4 py-4 font-bold text-gray-900 dark:text-white">4</td>
								<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">Database (MySQL ...)</td>
								<td class="px-6 py-4">Trả dữ liệu về cho PHP nếu có câu query</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-4 py-4 font-bold text-gray-900 dark:text-white">5</td>
								<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">PHP Interpreter</td>
								<td class="px-6 py-4">Render HTML từ dữ liệu nhận được, trả HTTP Response về browser</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-4 py-4 font-bold text-gray-900 dark:text-white">6</td>
								<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">Trình duyệt</td>
								<td class="px-6 py-4">Nhận HTML / CSS / JS → render trang cho người dùng xem</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Điểm mấu chốt: người dùng chỉ nhận được <b>HTML thuần</b> — không bao giờ thấy code PHP
					hay câu lệnh SQL của bạn. Đây chính là bảo mật tự nhiên của mô hình server-side.
					Ví dụ một trang danh sách sản phẩm động:
				</p>
				<VCodeBlock
					:code="phpFlowCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<!-- ===== VERSION 8.x ===== -->
				<div class="py-2"></div>
				<PageHeading text="Version 8.x" addOnClass="text-left" markedAs="php-version" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					PHP 8.0 (phát hành năm 2020) là một bản <b>major release</b> với rất nhiều cải tiến lớn
					so với 7.x — từ hiệu suất, type system cho đến cú pháp. Dưới đây là những tính năng quan
					trọng nhất mà mọi PHP developer cần nắm:
				</p>

				<!-- JIT -->
				<PageHeading text="JIT" addOnClass="text-left" markedAs="feature-jit" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>JIT (Just-In-Time Compiler)</b> — PHP 8.0 tích hợp JIT compiler vào bản thân ngôn ngữ.
					Thay vì phải dịch code sang bytecode mỗi lần chạy, JIT <b>biên dịch và cache lại machine code
					đã tối ưu</b>, giúp tăng tốc đáng kể cho các tác vụ tính toán nặng.
				</p>
				<div class="relative overflow-x-auto mt-4 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Loại tác vụ</th>
								<th scope="col" class="px-6 py-3">JIT có tác dụng?</th>
								<th scope="col" class="px-6 py-3">Ví dụ thực tế</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">CPU-heavy</th>
								<td class="px-6 py-4 text-green-500 font-semibold">✓ Tăng tốc rõ rệt</td>
								<td class="px-6 py-4">Xử lý ảnh hàng loạt, tính toán số liệu phức tạp, ML inference</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">I/O-heavy</th>
								<td class="px-6 py-4 text-orange-400 font-semibold">~ Ít tác dụng</td>
								<td class="px-6 py-4">REST API đọc/ghi DB — bottleneck là network/disk, không phải CPU</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Với app web thông thường (CRUD, REST API), bạn sẽ không cảm nhận rõ sự khác biệt của JIT
					vì bottleneck thường là database I/O. Nhưng nếu bạn viết tool xử lý ảnh, phân tích dữ liệu
					lớn bằng PHP thuần thì JIT là một nâng cấp rất đáng kể.
				</p>

				<!-- Internal Functions Handler -->
				<div class="py-2"></div>
				<PageHeading
					text="Internal Functions Handler"
					addOnClass="text-left"
					markedAs="feature-internal-function-handler"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					PHP 8.0 xử lý lỗi kiểu dữ liệu <b>chặt chẽ hơn nhiều</b>. Ở các phiên bản cũ, truyền sai
					kiểu thường chỉ ra warning hoặc tự động convert ngầm — gây ra các bug rất khó tìm trên
					production. Từ 8.0, PHP sẽ <b>throw <FilePath>TypeError</FilePath> ngay lập tức</b>:
				</p>
				<VCodeBlock
					:code="internalFunctionCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Hành vi này có vẻ "khắt khe" hơn, nhưng thực tế giúp bạn <b>phát hiện bug sớm</b> ngay
					trong quá trình phát triển — tốt hơn rất nhiều so với để lỗi âm thầm xảy ra trên production.
				</p>

				<!-- Named Arguments -->
				<PageHeading text="Named Arguments" addOnClass="text-left" markedAs="feature-named-argument" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Named Arguments</b> (PHP 8.0) cho phép gọi hàm bằng cách <b>đặt tên tham số</b> thay vì
					phải nhớ đúng thứ tự. Tính năng này cực kỳ hữu ích với các <b>hàm built-in của PHP</b> vốn
					có nhiều tham số và thứ tự dễ nhầm. Bạn còn có thể <b>bỏ qua optional param ở giữa</b> mà
					không cần truyền <FilePath>null</FilePath> làm placeholder:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="namedArgsBefore"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="namedArgsAfter"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<!-- Constructor Property Promotion -->
				<PageHeading
					text="Constructor Property Promotion"
					addOnClass="text-left mt-5"
					markedAs="feature-constructor-property-promotion"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Constructor Property Promotion</b> (PHP 8.0) cho phép khai báo và khởi tạo property của
					class ngay trong tham số constructor, loại bỏ hoàn toàn boilerplate thừa. Với các model có
					nhiều field như <FilePath>Product</FilePath>, sự khác biệt rất rõ rệt:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="constructorBefore"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="constructorAfter"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<!-- Null-safe Operator -->
				<PageHeading text="Null-safe Operator" addOnClass="text-left mt-5" markedAs="feature-null-safe" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Null-safe Operator (<FilePath>?-></FilePath>)</b> cho phép gọi method hoặc truy cập
					property mà <b>không cần kiểm tra null ở từng bước</b>. Trong thực tế khi làm việc với
					dữ liệu quan hệ nhiều tầng (đơn hàng → khách hàng → địa chỉ giao hàng → tên thành phố),
					đây là tính năng tiết kiệm cực nhiều dòng code:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="nullSafeBefore"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="nullSafeAfter"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Nếu bất kỳ bước nào trong chain trả về <FilePath>null</FilePath>, toàn bộ biểu thức trả
					về <FilePath>null</FilePath> ngay lập tức mà không throw exception. An toàn và cực gọn.
				</p>

				<!-- Union Types -->
				<PageHeading text="Union Types" addOnClass="text-left mt-5" markedAs="feature-union-types" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Union Types</b> (PHP 8.0) cho phép khai báo tường minh rằng một tham số có thể nhận
					<b>nhiều kiểu dữ liệu</b>. Thay vì dùng docblock (<FilePath>@param int|float</FilePath>) mà
					PHP không thực sự enforce, giờ đây PHP sẽ <b>kiểm tra và throw lỗi tại runtime</b>:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="unionTypesBefore"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="unionTypesAfter"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<!-- Match Expression -->
				<PageHeading text="Match Expression" addOnClass="text-left mt-5" markedAs="feature-match-expression" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Match Expression</b> là bản nâng cấp mạnh mẽ của <FilePath>switch-case</FilePath>, với
					strict comparison và khả năng return trực tiếp. So sánh chi tiết:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Đặc điểm</th>
								<th scope="col" class="px-6 py-3">switch-case</th>
								<th scope="col" class="px-6 py-3">match</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Cần break
								</th>
								<td class="px-6 py-4">Có</td>
								<td class="px-6 py-4">Không</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Return trực tiếp giá trị
								</th>
								<td class="px-6 py-4">Không</td>
								<td class="px-6 py-4">Có</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Kiểu so sánh
								</th>
								<td class="px-6 py-4">Lỏng (loose) — <FilePath>'8' == 8</FilePath> là true</td>
								<td class="px-6 py-4">Chặt (strict) — <FilePath>'8' === 8</FilePath> là false</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Gộp nhiều case
								</th>
								<td class="px-6 py-4">Phải viết nhiều <FilePath>case</FilePath> lặp lại</td>
								<td class="px-6 py-4">Dùng dấu phẩy: <FilePath>301, 302 => ...</FilePath></td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Throw khi không khớp
								</th>
								<td class="px-6 py-4">Không (chạy tiếp xuống default hoặc bỏ qua)</td>
								<td class="px-6 py-4">Throw <FilePath>UnhandledMatchError</FilePath> nếu không có default</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ví dụ thực tế: xử lý HTTP status code — một use case cực kỳ phổ biến trong các web app:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-2">
					<div class="col-span-1">
						<VCodeBlock
							:code="matchBefore"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="matchAfter"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Với <FilePath>match</FilePath>, bạn có thể gộp nhiều case có cùng kết quả bằng dấu phẩy
					(<FilePath>301, 302 => 'Redirect'</FilePath>) — không cần viết lặp lại như
					<FilePath>switch</FilePath>. Code ngắn hơn, dễ đọc hơn và ít lỗi hơn.
				</p>

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
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
				loginFormCode: `<?php
// login.php — xử lý form đăng nhập phía server
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        $error = 'Vui lòng nhập đầy đủ thông tin!';
    } else {
        $user = findUserByUsername($username); // query database

        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            header('Location: /dashboard'); // redirect sau khi login thành công
            exit();
        } else {
            $error = 'Sai tên đăng nhập hoặc mật khẩu!';
        }
    }
}
?>
<!-- HTML form — PHP và HTML có thể viết chung trong 1 file .php -->
<form method="POST" action="/login.php">
    <?php if (isset($error)): ?>
        <p style="color: red"><?= $error ?></p>
    <?php endif; ?>
    <input type="text"     name="username" placeholder="Tên đăng nhập">
    <input type="password" name="password" placeholder="Mật khẩu">
    <button type="submit">Đăng nhập</button>
</form>`,
				phpFlowCode: `<?php
// products.php — PHP render trang danh sách sản phẩm động từ database

// Nhận tham số phân trang từ URL: /products.php?page=2
$page    = max(1, (int) ($_GET['page'] ?? 1));
$perPage = 12;
$offset  = ($page - 1) * $perPage;

// Query database — người dùng KHÔNG bao giờ thấy câu SQL này
$products = $db->query(
    "SELECT id, name, price, thumbnail FROM products
     WHERE is_active = 1
     LIMIT $perPage OFFSET $offset"
)->fetchAll(PDO::FETCH_ASSOC);

$total     = $db->query("SELECT COUNT(*) FROM products WHERE is_active = 1")->fetchColumn();
$totalPage = ceil($total / $perPage);
?>

<!-- PHP render HTML động — browser chỉ nhận HTML thuần bên dưới -->
<div class="product-grid">
    <?php foreach ($products as $product): ?>
        <div class="product-card">
            <img src="<?= htmlspecialchars($product['thumbnail']) ?>" alt="">
            <h3><?= htmlspecialchars($product['name']) ?></h3>
            <p><?= number_format($product['price'], 0, ',', '.') ?>đ</p>
            <a href="/products/<?= $product['id'] ?>">Xem chi tiết</a>
        </div>
    <?php endforeach; ?>
</div>
<p>Trang <?= $page ?> / <?= $totalPage ?></p>`,
				internalFunctionCode: `<?php
function multiply(int $a, int $b): int {
    return $a * $b;
}

// PHP 7.x: tự động convert '10' (string) → 10 (int), không báo lỗi
echo multiply(5, '10'); // Output: 50 — bug âm thầm, không có cảnh báo

// PHP 8.x: throw TypeError ngay lập tức, rõ ràng và an toàn hơn
echo multiply(5, '10');
// Fatal error: TypeError: multiply(): Argument #2 ($b) must be of type int, string given

// Cách đúng: truyền đúng kiểu ngay từ đầu
echo multiply(5, 10);  // 50`,
				namedArgsBefore: `// Trước PHP 8.0 — phải nhớ đúng thứ tự tham số
// array_slice(array, offset, length, preserve_keys)
$items = ['Táo', 'Cam', 'Chuối', 'Xoài', 'Ổi', 'Lê'];

// Dễ nhầm: tham số thứ 4 là preserve_keys
// Phải truyền đúng vị trí, không thể bỏ qua tham số giữa
$page2 = array_slice($items, 2, 3, true);

// htmlspecialchars — muốn set double_encode=false phải truyền
// đủ 3 tham số trước nó, dù không cần dùng
$safe = htmlspecialchars($html, ENT_QUOTES, 'UTF-8', false);`,
				namedArgsAfter: `// PHP 8.0 trở đi — Named Arguments
$items = ['Táo', 'Cam', 'Chuối', 'Xoài', 'Ổi', 'Lê'];

// Tên tham số rõ ràng, không cần nhớ thứ tự
$page2 = array_slice(
    $items,
    offset: 2,
    length: 3,
    preserve_keys: true
);

// Bỏ qua param ở giữa không cần dùng — không cần truyền null
$safe = htmlspecialchars($html, double_encode: false);`,
				constructorBefore: `// Trước PHP 8.0 — rất nhiều boilerplate
class Product {
    public string  $name;
    public float   $price;
    public int     $stock;
    public string  $category;
    public bool    $isActive;

    public function __construct(
        string $name,
        float  $price,
        int    $stock,
        string $category,
        bool   $isActive = true
    ) {
        $this->name     = $name;
        $this->price    = $price;
        $this->stock    = $stock;
        $this->category = $category;
        $this->isActive = $isActive;
    }
}`,
				constructorAfter: `// PHP 8.0 trở đi — gọn hơn rất nhiều
// Khai báo property và khởi tạo ngay trong constructor param
class Product {
    public function __construct(
        public string $name,
        public float  $price,
        public int    $stock,
        public string $category,
        public bool   $isActive = true
    ) {} // body rỗng — PHP tự xử lý phần còn lại
}

// Cách dùng hoàn toàn giống nhau
$p = new Product('Áo thun basic', 299000, 150, 'Thời trang');
echo $p->name;     // Áo thun basic
echo $p->price;    // 299000
echo $p->isActive; // true (default)`,
				nullSafeBefore: `// Trước PHP 8.0 — phải kiểm tra null từng bước
// Scenario: lấy tên thành phố giao hàng của đơn hàng

$city = null;

if ($order !== null) {
    $customer = $order->getCustomer();

    if ($customer !== null) {
        $address = $customer->getShippingAddress();

        if ($address !== null) {
            $city = $address->getCity();
        }
    }
}

echo $city ?? 'Chưa có địa chỉ giao hàng';`,
				nullSafeAfter: `// PHP 8.0 trở đi — Null-safe Operator (?->)
// Nếu bất kỳ bước nào là null → toàn chain trả null ngay

$city = $order
    ?->getCustomer()
    ?->getShippingAddress()
    ?->getCity();

echo $city ?? 'Chưa có địa chỉ giao hàng';

// Một ví dụ khác: lấy avatar của user đang login
$avatar = Auth::user()
    ?->getProfile()
    ?->getAvatarUrl()
    ?? '/images/default-avatar.png';`,
				unionTypesBefore: `// Trước PHP 8.0 — docblock không được PHP enforce
class Cart {
    private float $total = 0;

    /**
     * Áp dụng giảm giá
     * @param int|float $discount  số tiền hoặc tỉ lệ %
     */
    public function applyDiscount($discount) {
        // PHP 7 không check type → nhận bất cứ giá trị nào
        $this->total -= $discount;
    }
}

$cart = new Cart();
$cart->applyDiscount(50000);   // OK
$cart->applyDiscount(0.1);     // OK
$cart->applyDiscount('fifty'); // Không lỗi! Bug âm thầm`,
				unionTypesAfter: `// PHP 8.0 trở đi — Union Types được PHP enforce
class Cart {
    private float $total = 0;

    public function applyDiscount(int|float $discount): void {
        // PHP đảm bảo $discount luôn là int hoặc float
        $this->total -= $discount;
    }
}

$cart = new Cart();
$cart->applyDiscount(50000);   // OK — int
$cart->applyDiscount(0.1);     // OK — float (10%)
$cart->applyDiscount('fifty'); // TypeError! Bắt lỗi ngay`,
				matchBefore: `// switch-case với HTTP status codes
$statusCode = 404;
$message = '';
$type    = '';

switch ($statusCode) {
    case 200:
        $message = 'OK';
        $type    = 'success';
        break;
    case 301:
        $message = 'Moved Permanently';
        $type    = 'redirect';
        break;
    case 302:
        $message = 'Found';
        $type    = 'redirect'; // phải lặp lại
        break;
    case 404:
        $message = 'Not Found';
        $type    = 'error';
        break;
    case 500:
        $message = 'Server Error';
        $type    = 'error';  // phải lặp lại
        break;
    default:
        $message = 'Unknown';
        $type    = 'unknown';
}
echo "$statusCode: $message ($type)";
// 404: Not Found (error)`,
				matchAfter: `// match — gọn hơn, strict comparison, return trực tiếp
$statusCode = 404;

[$message, $type] = match($statusCode) {
    200      => ['OK', 'success'],
    301, 302 => ['Redirect', 'redirect'],  // gộp nhiều case!
    400      => ['Bad Request', 'error'],
    404      => ['Not Found', 'error'],
    500      => ['Server Error', 'error'],
    default  => ['Unknown', 'unknown'],
};

echo "$statusCode: $message ($type)";
// 404: Not Found (error)

// match cũng dùng được trong biểu thức
$label = '<span class="' . match($type) {
    'success'  => 'text-green-500',
    'redirect' => 'text-blue-500',
    'error'    => 'text-red-500',
    default    => 'text-gray-500',
} . '">' . $message . '</span>';`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

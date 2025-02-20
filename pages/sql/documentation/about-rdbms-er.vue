<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Tổng quan về RDBMS" addOnClass="text-left" markedAs="about-rdbms" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>RDBMS - Relational Database Management System</b> là hệ quản trị cơ sỡ dữ liệu quan hệ. giúp lưu trữ, quản
					lý và truy vấn dữ liệu theo mô hình bảng (table). Dữ liệu trong RDBMS được tổ chức theo hàng (row) và cột
					(column), với các bảng có thể liên kết với nhau thông qua khóa chính (Primary Key) và khóa ngoại (Foreign
					Key). RDBMS cũng là cơ sở cho các hệ quản trị CSDL hiện đại như MySQL, PostgreSQL ... Access.
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/rdbms-01.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<PageHeading text="Khái niệm và vai trò của RDBMS:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							RDBMS là hệ quản trị cơ sở dữ liệu quan hệ, lưu trữ dữ liệu dưới dạng bảng (table) có quan hệ với nhau.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Dữ liệu được tổ chức thành hàng (row) và cột (column). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Các hệ quản trị RDBMS phổ biến: MySQL, PostgreSQL, SQL Server, Oracle. </span>
					</li>
				</ul>
				<PageHeading text="Lợi ích của RDBMS:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Đảm bảo tính toàn vẹn dữ liệu và tránh trùng lặp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Cung cấp khả năng truy vấn dữ liệu mạnh mẽ với SQL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Hỗ trợ quản lý quyền truy cập và bảo mật dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Cung cấp khả năng thao tác với dữ liệu cực kì đơn giản và hiệu quả. </span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về các thành phần có trong <b>RDBMS</b> để làm rõ hơn về cấu trúc cũng
					như chức năng của chúng.
				</p>
				<PageHeading text="Các thành phần chính của RDBMS" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Entity (Thực thể)</b> là một thực thể đại diện cho một đối tượng thực tế hoặc trừu tượng có thuộc tính
							(attributes) và được lưu trữ dưới dạng bảng (table) trong CSDL.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Table (Bảng)</b> Cấu trúc dữ liệu dạng hàng và cột. </span>
					</li>
					<!--	<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Row (Hàng)</b> Một bản ghi trong bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Column (Cột)</b> Một thuộc tính của bảng. </span>
					</li>
					 <li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>PK - Primary Key (Khóa chính) | Constraints </b> Dùng để định danh duy nhất một hàng trong bảng.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>FK - Foreign Key (Khóa ngoại) | Constraints </b> Dùng để liên kết giữa các bảng. </span>
					</li> -->
				</ul>
				<PageHeading text="1) Entity - Thực thể:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Entity là một thực thể đại diện cho một đối tượng thực tế hoặc trừu tượng có thuộc tính (attributes) và được
					lưu trữ dưới dạng bảng (table) trong CSDL.
				</p>
				<PageHeading text="2) Bảng - Table:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Dữ liệu trong một RDBMS được lưu trữ trong các đối tượng cơ sở dữ liệu được gọi là các <b>bảng (table)</b>.
					Bảng này về cơ bản là một bộ sưu tập các mục nhập dữ liệu có liên quan và nó bao gồm nhiều cột và hàng. Bảng
					là hình thức lưu trữ dữ liệu phổ biến và đơn giản nhất trong một cơ sở dữ liệu quan hệ:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/rdbms-table.png" alt="" class="rounded-lg mt-3 block" />
				</div>

				<PageHeading text="3) Hàng - Row:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một bản ghi cũng được gọi là một hàng dữ liệu là từng mục riêng lẻ tồn tại trong một bảng. Ví dụ: có 3 bản ghi
					trong bảng KHACH_HANG trên.
				</p>
				<PageHeading text="4) Cột - Column:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một cột là một thực thể thẳng đứng trong một bảng có chứa tất cả các thông tin liên kết với một trường cụ thể
					trong một bảng.
				</p>
				<PageHeading text="5) Ràng buộc dữ liệu - Constraints:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Constraints giúp đảm bảo dữ liệu chính xác và toàn vẹn. Các loại constraints phổ biến:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>PRIMARY KEY</b> Khoá chính, dùng để định danh cho row. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>FOREIGN KEY</b> Khoá phụ, tạo quan hệ giữa các table. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>UNIQUE</b> Đảm bảo giá trị không trùng lặp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>NOT NULL</b> Ngăn không cho giá trị NULL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>CHECK</b> Kiểm tra điều kiện hợp lệ. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>DEFAULT</b> Giá trị mặc định nếu không có dữ liệu. </span>
					</li>
				</ul>

				<PageHeading text="6) Schema:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Schema là cấu trúc logic chứa các bảng, ràng buộc (constraints), index, views, triggers và các đối tượng khác
					trong database.
				</p>
				<PageHeading text="Entity Relationship" addOnClass="text-left mt-5" markedAs="er-model" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>ER Model - Entity Relationship Model</b> là mô hình giúp biểu diễn dữ liệu và mối quan hệ giữa chúng một
					cách trực quan trước khi triển khai thành database. Mô hình này thường được dùng ở giai đoạn thiết kế hệ thống
					CSDL.
				</p>

				<PageHeading text="Thành phần chính" addOnClass="text-left mt-5" markedAs="er-component" :lvl="2" />
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/ErdComponents.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Thực thể (Entity)</b> Là đối tượng trong hệ thống có dữ liệu lưu trữ.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Thuộc tính (Attribute)</b> Các đặc điểm mô tả thực thể.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Quan hệ (Relationship)</b> Liên kết giữa các thực thể.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 text-xl">
					<b>1) Các loại thực thể</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>- Thực thể mạnh (Strong Entity)</b>Có khóa chính riêng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>- Thực thể yếu (Weak Entity)</b>Không có khóa chính riêng, phụ thuộc vào thực thể mạnh.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Sinh viên (Students)</b> có mã sinh viên (student_id) làm khóa chính.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Học phí (Tuition Fee)</b> không có khóa chính riêng, nếu không có sinh viên nào tồn tại, thì dữ liệu học
						phí cũng không có ý nghĩa.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 text-xl">
					<b>2) Các loại quan hệ</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Quan hệ 1-1 (One-to-One - 1:1)</b>Một thực thể A chỉ liên kết với một thực thể B duy nhất.</span>
						<ul class="pl-10">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Mỗi nhân viên có một số CMND duy nhất.
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Quan hệ 1-N (One-to-Many - 1:N)</b> Một thực thể A có thể liên kết với nhiều thực thể B, nhưng một
							thực thể B chỉ thuộc về một thực thể A.</span
						>
						<ul class="pl-10">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Một khách hàng có thể đặt nhiều đơn hàng, nhưng mỗi đơn hàng chỉ thuộc về một khách hàng.
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Quan hệ N-N (Many-to-Many - M:N)</b>Một thực thể A có thể liên kết với nhiều thực thể B, và ngược
							lại.</span
						>
						<ul class="pl-10">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Một sinh viên có thể đăng ký nhiều khóa học, và một khóa học có nhiều sinh viên theo học.
							</li>
						</ul>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Đây là một ví dụ về mô hình ERD được thiết kế để quản lý thông tin nhân sự trong một tổ chức. Hệ thống tập
					trung vào việc lưu trữ dữ liệu về nhân viên, phòng ban, vị trí công việc, cùng với thông tin chi tiết của từng
					nhân viên.
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/erd-2.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<PageHeading text="Chuẩn hoá dữ liệu" addOnClass="text-left mt-5" markedAs="normalization" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chuẩn hóa cơ sở dữ liệu (Database Normalization) là quá trình biểu diễn dữ liệu theo các tiêu chuẩn nhất định,
					nhằm loại bỏ dữ liệu trùng lặp, tối ưu hóa lưu trữ và đảm bảo tính nhất quán, độ tin cậy của dữ liệu
					<br />
					Mục tiêu chính của chuẩn hóa là đưa dữ liệu về dạng tối ưu bằng cách chia nhỏ các bảng sao cho chúng tuân theo
					các dạng chuẩn <b>(Normal Forms - NF)</b>.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 text-xl">
					<b>Các Dạng Chuẩn Chính</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chuẩn hóa thường gồm 5 mức (1NF → 5NF), nhưng trong thực tế, 3NF là đủ cho hầu hết các hệ thống.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-xl">
					<b>1NF - First Normal Form (Dạng chuẩn thứ nhất)</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Không có thuộc tính đa trị (multivalued attributes)</b>: Mỗi ô trong bảng chỉ chứa một giá trị đơn lẻ.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Mỗi hàng (row) là duy nhất</b>: Phải có khóa chính (Primary Key) để xác định duy nhất mỗi dòng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Các cột có cùng kiểu dữ liệu.</b>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Ví dụ:</b> Bảng <b>Employees</b> có cột <b>phone_numbers</b> chứa nhiều số điện thoại trong một ô:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/1nf-1.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>❌❌ Lỗi:</b> Cột <b>phone_numbers</b> chứa nhiều giá trị trong một ô => chưa chuẩn hoá 1N-F. Ta có thể
					chuẩn hoá lại bằng cách tách các số điện thoại ra bảng riêng:
				</p>
				<div class="grid grid-cols-2 gap-2">
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng Employees</b>
						</p>
						<img src="@/assets/images/documentation/1nf-2.png" alt="" class="rounded-lg mt-3 block" />
					</div>
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng EmployeePhones</b>
						</p>
						<img src="@/assets/images/documentation/1nf-3.png" alt="" class="rounded-lg mt-3 block" />
					</div>
				</div>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-xl">
					<b>2NF - Second Normal Form (Dạng chuẩn thứ hai)</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Phải đạt 1NF</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Không có phụ thuộc hàm từng phần</b>: Mọi thuộc tính không phải khóa chính phải
						<b>phụ thuộc toàn bộ vào khóa chính</b>, không chỉ một phần của nó.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Ví dụ:</b> Bảng <b>StudentCourses</b> lưu thông tin sinh viên đăng ký môn học:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/2nf-1.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>❌❌ Lỗi:</b>
					<br />
					<b>student_name</b> chỉ phụ thuộc vào <b>student_id</b>, không liên quan đến <b>course_id</b>.
					<br />
					<b>course_name</b> chỉ phụ thuộc vào <b>course_id</b>, không liên quan đến <b>student_id</b>.
					<br />
					=> Nếu đổi tên môn "Toán" thành "Toán cao cấp", phải cập nhật nhiều dòng. Nếu xóa một sinh viên, có thể mất
					luôn thông tin môn học. Như vậy, chúng ta cần loại bỏ sự phụ thuộc từng phần để đáp ứng được 2NF:
				</p>
				<div class="grid grid-cols-2 gap-2">
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng Students</b>
						</p>
						<img src="@/assets/images/documentation/2nf-2.png" alt="" class="rounded-lg mt-3 block" />
					</div>
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng Courses</b>
						</p>
						<img src="@/assets/images/documentation/2nf-3.png" alt="" class="rounded-lg mt-3 block" />
					</div>
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng StudentCourses</b>
						</p>
						<img src="@/assets/images/documentation/2nf-4.png" alt="" class="rounded-lg mt-3 block" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Kết quả:</b> Không còn thuộc tính nào chỉ phụ thuộc vào một phần của khóa chính. Mỗi bảng chỉ chứa dữ liệu
					liên quan đến chính nó.
				</p>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-xl">
					<b>3NF - Third Normal Form (Dạng Chuẩn Thứ Ba)</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Phải đạt 2NF</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Không có phụ thuộc bắc cầu (Transitive Dependency)</b>: Nếu <b>A → B</b> và <b>B → C</b>, thì
						<b>A không được phụ thuộc gián tiếp vào C</b>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Ví dụ:</b> Bảng <b>Orders</b> lưu thông đơn hàng:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/3nf-1.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>customer_name</b>, <b>customer_address</b> phụ thuộc vào <b>customer_id</b>, nhưng lại được lưu trong bảng
					Employees.
					<br />
					<b>customer_id </b> lại phụ thuộc vào <b>order_id</b>, như vậy đây là phụ thuộc bắc cầu. Lúc này
					<b>customer_address</b> cũng sẽ phụ thuộc vào <b>order_id</b>.
					<br />
					=> Nếu khách hàng đổi địa chỉ, phải cập nhật nhiều dòng.
				</p>
				<div class="grid grid-cols-2 gap-2">
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng Orders </b>
						</p>
						<img src="@/assets/images/documentation/3nf-2.png" alt="" class="rounded-lg mt-3 block" />
					</div>
					<div class="bg-neutral-100 px-5 py-1 rounded col-span-1">
						<p class="text-slate-900 dark:text-white mt-2 leading-8">
							<b>Bảng Customers </b>
						</p>
						<img src="@/assets/images/documentation/3nf-3.png" alt="" class="rounded-lg mt-3 block" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Kết quả:</b> Không còn phụ thuộc bắc cầu. Nếu khách hàng đổi địa chỉ, chỉ cần cập nhật trong bảng
					<b>Customers</b>.
				</p>

				<p class="col-span-1 text-slate-900 dark:text-white my-2 lg:text-3xl font-bold">Tổng kết</p>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					Chúng ta cùng tổng kết bài học:
					<br />
					<b>1 - Tổng quan về RDBMS </b>
				</p>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					Là hệ quản trị cơ sở dữ liệu quan hệ, lưu trữ dữ liệu dưới dạng bảng (table) với các hàng (row) và cột
					(column). Các hệ RDBMS phổ biến gồm MySQL, PostgreSQL, SQL Server, Oracle...
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Đảm bảo tính toàn vẹn dữ liệu và tránh trùng lặp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Hỗ trợ truy vấn mạnh mẽ với SQL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Kiểm soát quyền truy cập và bảo mật dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Dễ dàng thao tác, quản lý dữ liệu. </span>
					</li>
				</ul>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					<b>Các thành phần chính của RDBMS</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Entity (Thực thể)</b>: Đại diện cho một đối tượng có thuộc tính, lưu dưới dạng bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Table (Bảng)</b>: Cấu trúc chứa dữ liệu gồm nhiều hàng và cột. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Row (Hàng)</b>: Một bản ghi dữ liệu trong bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Column (Cột)</b>: Một trường dữ liệu chứa giá trị của một loại thông tin cụ thể.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Constraints (Ràng buộc dữ liệu)</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Schema</b>: Cấu trúc logic chứa các bảng, ràng buộc, index, views, triggers...</span>
					</li>
				</ul>
				<p class="col-span-1 text-slate-900 dark:text-white mt-3 mb-2">
					<br />
					<b class="text-lg">2 - Entity Relationship (ER Model)</b>
					<br />
					ER Model giúp biểu diễn dữ liệu và quan hệ trực quan trước khi triển khai database.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Entity (Thực thể)</b>: Đối tượng có dữ liệu lưu trữ. <b>Strong Entity, Weak Entity</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Thuộc tính (Attribute)</b>: Đặc điểm mô tả thực thể.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Quan hệ (Relationship)</b>: Liên kết giữa thực thể.</span>
					</li>
				</ul>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					<b>Các loại quan hệ:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>1-1 (One-to-One) | 1-N (One-to-Many) | N-N (Many-to-Many)</b></span>
					</li>
				</ul>

				<p class="col-span-1 text-slate-900 dark:text-white mt-3 mb-2">
					<br />
					<b class="text-lg">3 - Chuẩn hóa dữ liệu (Database Normalization)</b>
					<br />
					Chuẩn hóa là quá trình tối ưu dữ liệu bằng cách loại bỏ trùng lặp và đảm bảo tính nhất quán.
					<br />
					<b>Các dạng chuẩn chính: </b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>1NF</b>: Mỗi ô chứa một giá trị duy nhất. Mỗi hàng là duy nhất (có khóa chính).</span>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>2NF</b>: Thỏa mãn 1NF. Không có phụ thuộc hàm từng phần (mỗi thuộc tính phải phụ thuộc toàn bộ vào khóa
							chính).</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>3NF</b>: Thỏa mãn 2NF. Không có phụ thuộc bắc cầu (transitive dependency).</span>
					</li>
				</ul>
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
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				b1: `const fs = require('fs');

// Đọc tệp một cách không đồng bộ
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
	console.log('đọc file hoàn tất !!');
  console.log(data);
});

console.log('File đang được đọc...');
`,
				b2: `Company (Root)
│── Sales (Department)
│   │── Alice (Employee)
│   │── Bob (Employee)
│
│── IT (Department)
│   │── Charlie (Employee)
│   │── David (Employee)
`,
				b3: `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);`,
				b4: `ALTER TABLE users ADD COLUMN age INT;
ALTER TABLE users DROP COLUMN age;
ALTER TABLE users RENAME COLUMN name TO full_name;
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
`,
				b5: `DROP TABLE users;`,
				b6: `TRUNCATE TABLE users;`,
				b7: `INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

UPDATE users SET name = 'Johnny' WHERE id = 1;

DELETE FROM users WHERE id = 1;`,
				b8: `SELECT name, email FROM users WHERE email LIKE '%@gmail.com' ORDER BY name;`,
				b9: `BEGIN;
UPDATE users SET name = 'Alice' WHERE id = 2;
ROLLBACK;`,
				b10: `GRANT SELECT, INSERT ON users TO 'john';
REVOKE INSERT ON users FROM 'john';`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-1' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

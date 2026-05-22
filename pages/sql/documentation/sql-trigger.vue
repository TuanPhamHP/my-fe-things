<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<!-- ───────────────────────── INTRO ───────────────────────── -->
				<PageHeading text="Trigger trong SQL" addOnClass="text-left mt-5" markedAs="about-trigger" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Trigger</b> là một khối lệnh SQL được tự động kích hoạt khi có một thao tác (INSERT, UPDATE, DELETE) diễn
					ra trên bảng. Triggers thường được sử dụng để đảm bảo toàn vẹn dữ liệu, đồng bộ các thay đổi và tự động thực
					thi các quy tắc nghiệp vụ trong hệ thống.
					<br />
					<b>Lợi ích của Trigger</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Tự động hóa:</b> Giúp giảm bớt việc phải viết code ứng dụng để xử lý các tác vụ.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Giảm nguy cơ sai sót:</b> Đảm bảo dữ liệu được xử lý đúng quy tắc.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Bảo mật và kiểm soát dữ liệu:</b> Ngăn chặn việc xóa hoặc thay đổi sai quy tắc.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Tăng hiệu suất:</b> Giúp câu lệnh SQL ngắn gọn hơn và tự động hóa tác vụ.</span>
					</li>
				</ul>

				<!-- ─────────────────── CHUẨN BỊ DỮ LIỆU ─────────────────── -->
				<PageHeading text="Chuẩn bị dữ liệu" addOnClass="text-left mt-5" markedAs="seed-data" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tất cả ví dụ trong bài dùng chung database <FilePath>trigger_demo</FilePath>. Hãy chạy script dưới đây
					<b>một lần trước khi bắt đầu</b>, sau đó có thể chạy lại bất cứ lúc nào để reset về trạng thái ban đầu.
				</p>
				<ClientOnly>
					<VCodeBlock :code="seedData" highlightjs lang="sql" theme="atom-one-dark" />
				</ClientOnly>

				<!-- ─────────────────── TRIGGER TYPES ─────────────────── -->
				<PageHeading text="Trigger Types" addOnClass="text-left mt-5" markedAs="types" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Về cơ bản, có 2 loại Trigger chính:</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p>
							<b>DML Trigger</b>: giám sát, can thiệp vào các thao tác liên quan đến Data. Chia ra làm 2 loại nhỏ:
						</p>
						<ul class="pl-5 marker:text-gray-800 list-disc">
							<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
								<p>
									<b>BEFORE Trigger</b>: Kích hoạt <b>trước</b> khi thao tác được thực thi. Dùng để validate dữ liệu
									hoặc ngăn chặn thao tác không hợp lệ.
								</p>
							</li>
							<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
								<p>
									<b>AFTER Trigger</b>: Kích hoạt <b>sau</b> khi thao tác hoàn thành thành công. Dùng để ghi log,
									cập nhật bảng liên quan.
								</p>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>DDL Trigger</b>: giám sát các thao tác thay đổi cấu trúc bảng (CREATE, ALTER, DROP). MySQL/MariaDB
							hiện tại chưa hỗ trợ DDL Trigger.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Kết hợp <b>BEFORE/AFTER</b> với <b>INSERT/UPDATE/DELETE</b>, chúng ta có 6 loại DML Trigger:
				</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Loại Trigger</th>
							<th scope="col" class="px-5 py-3">Thời điểm kích hoạt</th>
							<th scope="col" class="px-5 py-3">Dùng khi nào</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in triggerTypes"
							:key="item.type"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td class="px-5 py-4 font-mono font-bold text-sky-400">{{ item.type }}</td>
							<td class="px-5 py-4">{{ item.timing }}</td>
							<td class="px-5 py-4">{{ item.useCase }}</td>
						</tr>
					</tbody>
				</table>

				<!-- ─────────────────── NEW & OLD ─────────────────── -->
				<PageHeading text="Từ khóa NEW và OLD" addOnClass="text-left mt-5" markedAs="new-old" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Bên trong trigger, MySQL cung cấp 2 từ khóa đặc biệt để truy cập dữ liệu của hàng (row) đang được xử lý:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><FilePath>NEW</FilePath>: Tham chiếu đến <b>dữ liệu mới</b> (dữ liệu đang được thêm hoặc cập nhật). Có
							thể dùng trong <b>INSERT</b> và <b>UPDATE</b> trigger.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><FilePath>OLD</FilePath>: Tham chiếu đến <b>dữ liệu cũ</b> (dữ liệu trước khi bị cập nhật hoặc xóa). Có
							thể dùng trong <b>UPDATE</b> và <b>DELETE</b> trigger.</span
						>
					</li>
				</ul>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Trigger</th>
							<th scope="col" class="px-5 py-3">NEW</th>
							<th scope="col" class="px-5 py-3">OLD</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in newOldTable"
							:key="item.trigger"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td class="px-5 py-4 font-mono font-bold text-sky-400">{{ item.trigger }}</td>
							<td class="px-5 py-4">{{ item.hasNew ? '✅ Dùng được' : '❌ Không có' }}</td>
							<td class="px-5 py-4">{{ item.hasOld ? '✅ Dùng được' : '❌ Không có' }}</td>
						</tr>
					</tbody>
				</table>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ví dụ: Trong trigger UPDATE trên bảng <FilePath>employees</FilePath>, <FilePath>OLD.salary</FilePath> là
					lương cũ trước khi cập nhật, <FilePath>NEW.salary</FilePath> là lương mới sau khi cập nhật.
				</p>

				<!-- ─────────────────── THAO TÁC ─────────────────── -->
				<PageHeading text="Thao tác với Trigger" addOnClass="text-left mt-5" markedAs="trigger" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Cùng tìm hiểu các cách thao tác với Trigger nào:</p>

				<PageHeading text="Tạo" addOnClass="text-left mt-5" markedAs="create-trigger" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Lưu ý khi dùng <b>MySQL Workbench</b>: phải dùng <FilePath>DELIMITER //</FilePath> trước khi tạo trigger vì
					bên trong <FilePath>BEGIN...END</FilePath> có dấu <FilePath>;</FilePath>. Nếu không, Workbench sẽ hiểu nhầm
					dấu <FilePath>;</FilePath> đầu tiên là kết thúc câu lệnh và báo lỗi cú pháp.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="syntaxCreate" highlightjs lang="sql" theme="atom-one-dark" />
							<ul class="pl-5 marker:text-sky-400 list-disc">
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span
										><b>{BEFORE | AFTER}</b>: Chỉ ra loại Trigger. Giá trị này quyết định Trigger thực thi trước hay
										sau hành động.</span
									>
								</li>
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span
										><b>{INSERT | UPDATE | DELETE}</b>: Chỉ ra loại hành động mà chúng ta muốn gán Trigger.</span
									>
								</li>
							</ul>
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ: Ghi log khi thêm nhân viên mới
							</p>
							<VCodeBlock :code="exCreate" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Xem danh sách" addOnClass="text-left mt-5" markedAs="show-trigger" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Xem danh sách các Trigger đang có trong database.
				</p>
				<ClientOnly>
					<VCodeBlock :code="syntaxShow" highlightjs lang="sql" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Xoá" addOnClass="text-left mt-5" markedAs="drop-trigger" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xoá một Trigger đã được tạo.</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="syntaxDrop" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Ví dụ</p>
							<VCodeBlock :code="exDrop" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<!-- ─────────────────── VÍ DỤ THỰC HÀNH ─────────────────── -->
				<PageHeading text="Ví dụ thực hành" addOnClass="text-left mt-5" markedAs="examples" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Các ví dụ dưới đây đều dùng database <FilePath>trigger_demo</FilePath> đã khởi tạo ở đầu bài. Mỗi ví dụ bắt
					đầu bằng <FilePath>DROP TRIGGER IF EXISTS</FilePath> nên có thể chạy lại nhiều lần mà không bị lỗi.
				</p>

				<!-- Example 1 -->
				<PageHeading
					text="Ví dụ 1: AFTER INSERT – Ghi log khi thêm nhân viên"
					addOnClass="text-left mt-5"
					markedAs="ex-1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Bài toán:</b> Mỗi khi có nhân viên mới được thêm vào bảng <FilePath>employees</FilePath>, hệ thống tự
					động ghi lại vào bảng <FilePath>employee_logs</FilePath>.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Tạo Trigger:</p>
							<VCodeBlock :code="ex1Trigger" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Chạy thử:</p>
							<VCodeBlock :code="ex1Test" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<ul class="pl-5 marker:text-sky-400 list-disc mt-3">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							><FilePath>NEW.id</FilePath> lấy <b>id</b> vừa được INSERT. Vì là AFTER trigger, AUTO_INCREMENT đã hoàn
							tất nên <FilePath>NEW.id</FilePath> có giá trị chính xác.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							><FilePath>NEW.salary</FilePath> lấy <b>lương</b> của nhân viên vừa được INSERT vào bảng.</span
						>
					</li>
				</ul>

				<!-- Example 2 -->
				<PageHeading
					text="Ví dụ 2: BEFORE INSERT – Kiểm tra lương tối thiểu"
					addOnClass="text-left mt-5"
					markedAs="ex-2"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Bài toán:</b> Trước khi thêm nhân viên mới, kiểm tra lương phải từ <b>3.000.000 VNĐ</b> trở lên. Nếu
					không hợp lệ thì báo lỗi và không cho INSERT.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Tạo Trigger:</p>
							<VCodeBlock :code="ex2Trigger" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Chạy thử:</p>
							<VCodeBlock :code="ex2Test" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<ul class="pl-5 marker:text-sky-400 list-disc mt-3">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							><FilePath>SIGNAL SQLSTATE '45000'</FilePath> dùng để tự định nghĩa lỗi. Mã <b>45000</b> là mã dành
							cho lỗi do người dùng tự tạo trong MySQL.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Trigger <b>BEFORE INSERT</b> có thể dừng lệnh INSERT bằng cách raise lỗi — dữ liệu sẽ không được lưu
							vào bảng.</span
						>
					</li>
				</ul>

				<!-- Example 3 -->
				<PageHeading
					text="Ví dụ 3: AFTER UPDATE – Theo dõi thay đổi lương"
					addOnClass="text-left mt-5"
					markedAs="ex-3"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Bài toán:</b> Mỗi khi lương nhân viên thay đổi, ghi lại lương cũ và lương mới vào
					<FilePath>employee_logs</FilePath>.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Tạo Trigger:</p>
							<VCodeBlock :code="ex3Trigger" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Chạy thử:</p>
							<VCodeBlock :code="ex3Test" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<ul class="pl-5 marker:text-sky-400 list-disc mt-3">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Dùng <FilePath>OLD.salary</FilePath> và <FilePath>NEW.salary</FilePath> để so sánh giá trị trước và
							sau khi UPDATE.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Điều kiện <FilePath>IF OLD.salary &lt;&gt; NEW.salary</FilePath> giúp chỉ ghi log khi lương thực sự
							thay đổi, tránh ghi log thừa khi UPDATE các cột khác như <FilePath>name</FilePath>.</span
						>
					</li>
				</ul>

				<!-- Example 4 -->
				<PageHeading
					text="Ví dụ 4: BEFORE DELETE – Ngăn xóa nhân viên phòng IT"
					addOnClass="text-left mt-5"
					markedAs="ex-4"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Bài toán:</b> Không cho phép xóa nhân viên thuộc phòng <b>IT</b>. Nếu cố xóa thì báo lỗi.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Tạo Trigger:</p>
							<VCodeBlock :code="ex4Trigger" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Chạy thử:</p>
							<VCodeBlock :code="ex4Test" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<ul class="pl-5 marker:text-sky-400 list-disc mt-3">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Trong trigger DELETE, chỉ có <FilePath>OLD</FilePath> — không có <FilePath>NEW</FilePath> vì dữ liệu
							đang bị xóa, không có hàng mới.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Trigger <b>BEFORE DELETE</b> raise lỗi trước khi xóa → câu lệnh DELETE bị hủy hoàn toàn.</span
						>
					</li>
				</ul>

				<!-- ─────────────────── CÂU HỎI THỰC HÀNH ─────────────────── -->
				<PageHeading text="Câu hỏi thực hành" addOnClass="text-left mt-5" markedAs="questions" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Dựa trên database <FilePath>trigger_demo</FilePath> đã có, hãy thử viết các trigger sau:
				</p>
				<ol class="pl-5 list-decimal">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>AFTER INSERT – Tự động lưu lịch sử lương khi thêm nhân viên mới.</b>
							<br />
							Viết trigger: mỗi khi có nhân viên mới được INSERT vào <FilePath>employees</FilePath>, tự động thêm một
							bản ghi vào <FilePath>salary_history</FilePath> với lương ban đầu và ngày hiệu lực là
							<FilePath>CURDATE()</FilePath>.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>BEFORE UPDATE – Không cho phép giảm lương.</b>
							<br />
							Viết trigger ngăn cập nhật lương nhân viên xuống thấp hơn lương hiện tại. Nếu
							<FilePath>NEW.salary &lt; OLD.salary</FilePath> thì báo lỗi
							<FilePath>'Khong duoc phep giam luong'</FilePath>.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>AFTER DELETE – Ghi log khi xóa nhân viên.</b>
							<br />
							Viết trigger: sau khi xóa nhân viên bất kỳ, ghi một bản ghi vào <FilePath>employee_logs</FilePath> với
							<FilePath>action = 'DELETE'</FilePath> và lưu lại lương cũ vào <FilePath>old_salary</FilePath>.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>BEFORE INSERT – Tự động viết hoa tên nhân viên.</b>
							<br />
							Viết trigger: trước khi INSERT, tự động chuyển <FilePath>NEW.name</FilePath> thành chữ hoa bằng hàm
							<FilePath>UPPER()</FilePath>. Gợi ý: trong BEFORE trigger có thể gán lại giá trị bằng
							<FilePath>SET NEW.name = UPPER(NEW.name)</FilePath>.
						</div>
					</li>
				</ol>

				<!-- ─────────────────── TỔNG KẾT ─────────────────── -->
				<p class="text-slate-900 dark:text-white mt-5 mb-3 leading-8 font-bold text-xl">Tổng kết:</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">
						<p>Có 2 loại Trigger là <b>DML</b> và <b>DDL</b> — MySQL/MariaDB chưa hỗ trợ DDL Trigger.</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p><b>DML Trigger</b> gồm 6 loại: BEFORE/AFTER kết hợp với INSERT, UPDATE, DELETE.</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p>
							Dùng <FilePath>NEW</FilePath> để truy cập dữ liệu mới (INSERT, UPDATE), dùng <FilePath>OLD</FilePath>
							để truy cập dữ liệu cũ (UPDATE, DELETE).
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p>
							<b>BEFORE Trigger</b>: validate dữ liệu, ngăn thao tác sai — dùng
							<FilePath>SIGNAL SQLSTATE '45000'</FilePath> để báo lỗi.
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p><b>AFTER Trigger</b>: ghi log, cập nhật bảng liên quan, đồng bộ dữ liệu.</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p>
							Khi dùng MySQL Workbench luôn nhớ dùng <FilePath>DELIMITER //</FilePath> trước và
							<FilePath>DELIMITER ;</FilePath> sau khi tạo trigger.
						</p>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_8"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
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
					next: { title: 'HTML Styles', link: '/nodejs/documentation/ep-2' },
					prev: { title: 'Trở về danh sách Doc', link: '/nodejs/documentation' },
				},
				triggerTypes: [
					{ type: 'BEFORE INSERT', timing: 'Trước khi thêm dữ liệu', useCase: 'Validate dữ liệu, kiểm tra ràng buộc' },
					{ type: 'AFTER INSERT', timing: 'Sau khi thêm dữ liệu', useCase: 'Ghi log, cập nhật bảng liên quan' },
					{ type: 'BEFORE UPDATE', timing: 'Trước khi cập nhật dữ liệu', useCase: 'Kiểm tra giá trị mới có hợp lệ không' },
					{ type: 'AFTER UPDATE', timing: 'Sau khi cập nhật dữ liệu', useCase: 'Ghi lịch sử thay đổi' },
					{ type: 'BEFORE DELETE', timing: 'Trước khi xóa dữ liệu', useCase: 'Ngăn xóa dữ liệu quan trọng' },
					{ type: 'AFTER DELETE', timing: 'Sau khi xóa dữ liệu', useCase: 'Ghi log xóa, dọn dữ liệu liên quan' },
				],
				newOldTable: [
					{ trigger: 'INSERT', hasNew: true, hasOld: false },
					{ trigger: 'UPDATE', hasNew: true, hasOld: true },
					{ trigger: 'DELETE', hasNew: false, hasOld: true },
				],
				// ── Seed ──────────────────────────────────────────────────────────
				seedData: `-- Tạo và chọn database
CREATE DATABASE IF NOT EXISTS trigger_demo;
USE trigger_demo;

-- Xóa bảng cũ để chạy lại được (thứ tự quan trọng nếu có FK)
DROP TABLE IF EXISTS salary_history;
DROP TABLE IF EXISTS employee_logs;
DROP TABLE IF EXISTS employees;

-- Bảng chính
CREATE TABLE employees (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    department  VARCHAR(50)  NOT NULL,
    salary      DECIMAL(10,2) NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng lưu lịch sử thao tác (INSERT / UPDATE / DELETE)
CREATE TABLE employee_logs (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    action      VARCHAR(20),
    old_salary  DECIMAL(10,2),
    new_salary  DECIMAL(10,2),
    log_time    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng lưu lịch sử lương theo thời gian
CREATE TABLE salary_history (
    id             INT PRIMARY KEY AUTO_INCREMENT,
    employee_id    INT,
    salary         DECIMAL(10,2),
    effective_date DATE
);

-- Dữ liệu mẫu
INSERT INTO employees (name, department, salary) VALUES
('Nguyen Van A', 'IT',    15000000),
('Tran Thi B',  'HR',    12000000),
('Le Van C',    'Sales', 10000000);

SELECT * FROM employees;
`,
				// ── Syntax ────────────────────────────────────────────────────────
				syntaxCreate: `DELIMITER //
CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON table_name
FOR EACH ROW
BEGIN
    -- Logic xử lý
END //
DELIMITER ;
`,
				exCreate: `DELIMITER //
CREATE TRIGGER trg_after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_logs (employee_id, action, new_salary)
    VALUES (NEW.id, 'INSERT', NEW.salary);
END //
DELIMITER ;
`,
				syntaxShow: `-- Xem tất cả triggers trong database hiện tại
SHOW TRIGGERS;

-- Xem triggers trong một database cụ thể
SHOW TRIGGERS FROM trigger_demo;
`,
				syntaxDrop: `DROP TRIGGER IF EXISTS trigger_name;
`,
				exDrop: `-- Xóa trigger vừa tạo ở ví dụ trên
DROP TRIGGER IF EXISTS trg_after_employee_insert;
`,
				// ── Examples ─────────────────────────────────────────────────────
				// Mỗi block bắt đầu bằng DROP IF EXISTS → có thể chạy lại nhiều lần
				ex1Trigger: `DROP TRIGGER IF EXISTS trg_after_employee_insert;

DELIMITER //
CREATE TRIGGER trg_after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_logs (employee_id, action, new_salary)
    VALUES (NEW.id, 'INSERT', NEW.salary);
END //
DELIMITER ;
`,
				ex1Test: `-- Thêm nhân viên mới
INSERT INTO employees (name, department, salary)
VALUES ('Pham Van D', 'IT', 18000000);

-- Kết quả: employee_logs có 1 bản ghi mới
SELECT * FROM employee_logs;
`,
				ex2Trigger: `DROP TRIGGER IF EXISTS trg_before_employee_insert;

DELIMITER //
CREATE TRIGGER trg_before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 3000000 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Luong khong duoc thap hon 3,000,000 VND';
    END IF;
END //
DELIMITER ;
`,
				ex2Test: `-- Test 1: lương hợp lệ → thành công
INSERT INTO employees (name, department, salary)
VALUES ('Hoang Van E', 'Sales', 8000000);

-- Test 2: lương quá thấp → lỗi, không INSERT
INSERT INTO employees (name, department, salary)
VALUES ('Vu Thi F', 'HR', 1000000);
`,
				ex3Trigger: `DROP TRIGGER IF EXISTS trg_after_salary_update;

DELIMITER //
CREATE TRIGGER trg_after_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO employee_logs (employee_id, action, old_salary, new_salary)
        VALUES (OLD.id, 'UPDATE', OLD.salary, NEW.salary);
    END IF;
END //
DELIMITER ;
`,
				ex3Test: `-- Tăng lương nhân viên id = 1 (Nguyen Van A)
UPDATE employees SET salary = 20000000 WHERE id = 1;

-- Kết quả: employee_logs có bản ghi action = 'UPDATE'
-- old_salary = 15000000, new_salary = 20000000
SELECT * FROM employee_logs;
`,
				ex4Trigger: `DROP TRIGGER IF EXISTS trg_before_employee_delete;

DELIMITER //
CREATE TRIGGER trg_before_employee_delete
BEFORE DELETE ON employees
FOR EACH ROW
BEGIN
    IF OLD.department = 'IT' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Khong the xoa nhan vien thuoc phong IT';
    END IF;
END //
DELIMITER ;
`,
				ex4Test: `-- Test 1: xóa nhân viên Sales (id=3, Le Van C) → thành công
DELETE FROM employees WHERE id = 3;

-- Test 2: xóa nhân viên IT (id=1, Nguyen Van A) → lỗi
DELETE FROM employees WHERE id = 1;

-- Kiểm tra: Nguyen Van A vẫn còn trong bảng
SELECT * FROM employees;
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-13' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

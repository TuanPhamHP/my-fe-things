<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading
					text="Control Flow Statements trong SQL"
					addOnClass="text-left mt-5"
					markedAs="about-cfs"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi làm việc với Stored Procedure, Function, Trigger hoặc Event trong SQL, chúng ta cần điều khiển luồng thực
					thi của chương trình. Điều này giúp tạo ra các logic xử lý phức tạp như kiểm tra điều kiện, lặp lại một thao
					tác nhiều lần hoặc thoát khỏi vòng lặp khi cần.
					<br />
					Bài giảng này sẽ giúp bạn hiểu và sử dụng các <b>Control Flow Statements</b> trong SQL.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Control Flow Statements</b> là các câu lệnh giúp bạn kiểm soát luồng thực thi của chương trình SQL. Các câu
					lệnh này thường được sử dụng trong Stored Procedure, Function, Trigger hoặc Event. Chúng ta có thể chia chúng
					thành ba nhóm chính:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Cấu trúc rẽ nhánh - Conditional Statements</b> - Quyết định luồng thực thi dựa trên điều kiện.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Cấu trúc vòng lặp</b> - Thực hiện một khối lệnh nhiều lần.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Điều khiển vòng lặp</b> - Điều chỉnh hoạt động của vòng lặp, như thoát hoặc bỏ qua một lần lặp.</span
						>
					</li>
				</ul>

				<!-- Conditional Statements -->
				<PageHeading
					text="Conditional Statements"
					addOnClass="text-left mt-5"
					markedAs="conditional-statements"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong nhiều tình huống, chúng ta cần kiểm tra điều kiện và thực hiện một số hành động dựa trên điều đó. Ví dụ:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu đơn hàng có giá trị trên 1 triệu, khách hàng được giảm giá.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu một tài khoản bị khóa, không cho phép đăng nhập.</span>
					</li>
				</ul>

				<!-- IF -->
				<PageHeading
					text="1. IF ... THEN ... ELSE ... END IF"
					addOnClass="text-left mt-5"
					markedAs="conditional-if-else"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần kiểm tra <b>một hoặc nhiều điều kiện.</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Chỉ sử dụng được trong <b>Stored Procedure, Function, Trigger hoặc Event.</b></span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8"><b>Syntax</b></p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ thực tế — Phân loại sản phẩm theo giá:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1ex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lưu ý:</b> <FilePath>IF...END IF</FilePath> không dùng được trong câu lệnh SELECT thông thường — chỉ dùng
					được trong Stored Procedure hoặc Function. Trong SELECT dùng <FilePath>CASE...END</FilePath> thay thế.
				</p>

				<!-- CASE -->
				<PageHeading
					text="2. CASE ... WHEN ... THEN ... ELSE ... END CASE"
					addOnClass="text-left mt-5"
					markedAs="conditional-case-then"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần <b>so sánh</b> một biến với nhiều giá trị khác nhau.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Có thể sử dụng trong <b>Stored Procedure, Function và cả trong câu lệnh SELECT thông thường.</b></span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8"><b>Syntax (trong Stored Procedure — dùng END CASE)</b></p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ thực tế — Procedure chuyển mã danh mục:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2ex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8"><b>Syntax (trong SELECT thường — dùng END, không cần CASE sau END)</b></p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lưu ý:</b> Trong Stored Procedure dùng <FilePath>END CASE</FilePath>, trong SELECT thường dùng
					<FilePath>END</FilePath> (không kèm từ CASE).
				</p>

				<!-- Loop Statements -->
				<PageHeading text="Loop Statements" addOnClass="text-left mt-5" markedAs="loop-statements" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Có những trường hợp chúng ta cần thực hiện một công việc nhiều lần. Ví dụ:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Lặp qua danh sách sản phẩm để cập nhật giá.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Gửi email cho tất cả khách hàng có sinh nhật hôm nay.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Trong SQL, có ba loại vòng lặp chính:</p>

				<!-- WHILE -->
				<PageHeading
					text="1. WHILE ... DO ... END WHILE"
					addOnClass="text-left mt-5"
					markedAs="conditional-while-do"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Khi cần lặp lại một công việc nhiều lần với <b>điều kiện kiểm tra trước mỗi lần lặp</b>. Nếu điều kiện
							sai ngay từ đầu, vòng lặp không chạy lần nào.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8"><b>Syntax</b></p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ thực tế — Tính tổng giá trị tồn kho:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4ex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- LOOP -->
				<PageHeading
					text="2. LOOP ... END LOOP"
					addOnClass="text-left mt-5"
					markedAs="conditional-loop"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Khi cần tạo một vòng lặp và <b>chủ động thoát bằng LEAVE</b>. Phù hợp khi điều kiện thoát phức tạp hoặc
							cần thoát từ nhiều điểm khác nhau.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8"><b>Syntax</b></p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ thực tế — Tìm sản phẩm hết hàng đầu tiên:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b5ex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- REPEAT -->
				<PageHeading
					text="3. REPEAT ... UNTIL ... END REPEAT"
					addOnClass="text-left mt-5"
					markedAs="conditional-repeat"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Khi cần đảm bảo <b>vòng lặp chạy ít nhất một lần</b> trước khi kiểm tra điều kiện (do-while). Điều kiện
							được kiểm tra ở cuối mỗi lần lặp.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8"><b>Syntax</b></p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ thực tế — Tăng giá đến khi vượt ngưỡng:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b6ex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- Loop Control -->
				<PageHeading text="Loop Control" addOnClass="text-left mt-5" markedAs="loop-control" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Là những câu lệnh có nhiệm vụ điều chỉnh vòng lặp.</p>

				<!-- LEAVE -->
				<PageHeading text="LEAVE" addOnClass="text-left mt-5" markedAs="leave-control" :lvl="2" />
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Thoát khỏi vòng lặp <b>ngay lập tức</b>, tương đương <FilePath>break</FilePath> trong các ngôn ngữ lập
							trình khác. Cần đặt <b>label</b> cho vòng lặp để LEAVE biết cần thoát vòng lặp nào.</span
						>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- ITERATE -->
				<PageHeading text="ITERATE" addOnClass="text-left mt-5" markedAs="ITERATE-control" :lvl="2" />
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Bỏ qua phần còn lại của vòng lặp hiện tại và <b>tiếp tục lần lặp tiếp theo</b>, tương đương
							<FilePath>continue</FilePath> trong các ngôn ngữ khác.</span
						>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b8" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- Others -->
				<PageHeading text="Others..." addOnClass="text-left mt-5" markedAs="others" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ngoài ra, khi làm việc với Stored Procedure trong SQL, chúng ta thường sử dụng các câu lệnh điều khiển như
					<b>DECLARE, CURDATE(), SET</b> ... để xử lý logic.
				</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Lệnh</th>
							<th scope="col" class="px-5 py-3">Chức năng</th>
							<th scope="col" class="px-5 py-3">Syntax</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in others" :key="item.code" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">
								<FilePath>{{ item.code }}</FilePath>
							</td>
							<td class="px-5 py-4">{{ item.desc }}</td>
							<td class="px-5 py-4">
								<FilePath>{{ item.syntax }}</FilePath>
							</td>
						</tr>
					</tbody>
				</table>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ — DECLARE, SET, CURDATE() kết hợp trong một procedure:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bOthers" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- Demo tổng hợp -->
				<PageHeading
					text="Demo tổng hợp — Seed Data"
					addOnClass="text-left mt-5"
					markedAs="demo-seed"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tạo bảng <b>san_pham</b> với 10 dòng dữ liệu mẫu, sau đó chạy lần lượt tất cả các stored procedure đã học ở
					trên để thấy kết quả thực tế.
				</p>

				<PageHeading text="Bước 1 — Tạo bảng và insert dữ liệu" addOnClass="text-left mt-5" markedAs="demo-setup" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chạy file seed <FilePath>seeds/sql/san_pham.sql</FilePath> để tạo bảng và insert 10 dòng dữ liệu mẫu:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bSeed" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="Bước 2 — Tạo tất cả Stored Procedures" addOnClass="text-left mt-5" markedAs="demo-procedures" :lvl="2" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bProcs" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="Bước 3 — Chạy và xem kết quả" addOnClass="text-left mt-5" markedAs="demo-run" :lvl="2" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bRun" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<p class="text-slate-900 dark:text-white leading-8 mt-5">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_6"
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
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				others: [
					{
						code: 'DECLARE',
						desc: 'Khai báo biến cục bộ bên trong stored procedure / function.',
						syntax: 'DECLARE ten_bien kieu_dl [DEFAULT gia_tri];',
					},
					{
						code: 'SET',
						desc: 'Gán hoặc thay đổi giá trị của biến.',
						syntax: 'SET ten_bien = gia_tri;',
					},
					{
						code: 'CURDATE()',
						desc: 'Trả về ngày hiện tại (YYYY-MM-DD).',
						syntax: 'SET v_ngay = CURDATE();',
					},
					{
						code: 'NOW()',
						desc: 'Trả về ngày và giờ hiện tại (YYYY-MM-DD HH:MM:SS).',
						syntax: 'SET v_tg = NOW();',
					},
					{
						code: 'RETURN',
						desc: 'Trả về giá trị từ Function (không dùng trong Procedure).',
						syntax: 'RETURN gia_tri;',
					},
				],
				b1: `IF dieu_kien THEN
    -- Hanh dong khi dieu kien dung
ELSEIF dieu_kien_khac THEN
    -- Hanh dong neu dieu kien truoc do sai
ELSE
    -- Hanh dong neu tat ca dieu kien deu sai
END IF;`,
				b1ex: `DELIMITER $$
CREATE PROCEDURE sp_phan_loai_sp(IN p_id INT)
BEGIN
    DECLARE v_gia       DECIMAL(10,2);
    DECLARE v_phan_loai VARCHAR(30);

    SELECT gia INTO v_gia FROM san_pham WHERE id = p_id;

    IF v_gia >= 10000000 THEN
        SET v_phan_loai = 'Cao cap';
    ELSEIF v_gia >= 2000000 THEN
        SET v_phan_loai = 'Tam trung';
    ELSE
        SET v_phan_loai = 'Pho thong';
    END IF;

    SELECT ten, FORMAT(gia, 0) AS gia, v_phan_loai AS phan_loai
    FROM san_pham WHERE id = p_id;
END$$
DELIMITER ;

CALL sp_phan_loai_sp(1);  -- Laptop Dell XPS | 22,000,000 | Cao cap
CALL sp_phan_loai_sp(5);  -- Ban phim co     |    850,000 | Pho thong
CALL sp_phan_loai_sp(8);  -- SSD Samsung 1TB |  2,200,000 | Tam trung`,
				b2: `CASE bien_can_kiem_tra
    WHEN gia_tri_1 THEN
        -- Hanh dong neu bien = gia_tri_1
    WHEN gia_tri_2 THEN
        -- Hanh dong neu bien = gia_tri_2
    ELSE
        -- Hanh dong neu khong co gia tri nao khop
END CASE;`,
				b2ex: `DELIMITER $$
CREATE PROCEDURE sp_mo_ta_danh_muc(IN p_dm VARCHAR(50), OUT mo_ta VARCHAR(100))
BEGIN
    CASE p_dm
        WHEN 'dien-tu'  THEN SET mo_ta = 'Thiet bi dien tu';
        WHEN 'phu-kien' THEN SET mo_ta = 'Phu kien may tinh';
        WHEN 'luu-tru'  THEN SET mo_ta = 'Thiet bi luu tru';
        ELSE                 SET mo_ta = 'Danh muc khac';
    END CASE;
END$$
DELIMITER ;

CALL sp_mo_ta_danh_muc('dien-tu', @mo_ta);
SELECT @mo_ta;  -- Thiet bi dien tu

CALL sp_mo_ta_danh_muc('luu-tru', @mo_ta);
SELECT @mo_ta;  -- Thiet bi luu tru`,
				b3: `-- CASE dung duoc truc tiep trong SELECT (dung END, khong can END CASE)
SELECT
    ten,
    FORMAT(gia, 0)  AS gia,
    CASE
        WHEN gia >= 10000000 THEN 'Cao cap'
        WHEN gia >= 2000000  THEN 'Tam trung'
        ELSE                      'Pho thong'
    END AS phan_loai,
    CASE danh_muc
        WHEN 'dien-tu'  THEN 'Dien tu'
        WHEN 'phu-kien' THEN 'Phu kien'
        WHEN 'luu-tru'  THEN 'Luu tru'
        ELSE                 'Khac'
    END AS danh_muc_vn
FROM san_pham
ORDER BY gia DESC;`,
				b4: `WHILE dieu_kien DO
    -- Hanh dong lap lai
    -- Neu dieu kien sai ngay tu dau -> khong chay lan nao
END WHILE;`,
				b4ex: `DELIMITER $$
CREATE PROCEDURE sp_tong_ton_kho()
BEGIN
    DECLARE v_id   INT DEFAULT 1;
    DECLARE v_max  INT;
    DECLARE v_gia  DECIMAL(10,2);
    DECLARE v_ton  INT;
    DECLARE v_tong DECIMAL(15,2) DEFAULT 0;

    SELECT MAX(id) INTO v_max FROM san_pham;

    WHILE v_id <= v_max DO
        SELECT gia, ton_kho INTO v_gia, v_ton
        FROM san_pham WHERE id = v_id;

        -- Chi tinh san pham con hang
        IF v_ton > 0 THEN
            SET v_tong = v_tong + (v_gia * v_ton);
        END IF;

        SET v_id = v_id + 1;
    END WHILE;

    SELECT FORMAT(v_tong, 0) AS tong_gia_tri_ton_kho;
END$$
DELIMITER ;

CALL sp_tong_ton_kho();
-- tong_gia_tri_ton_kho: 289,300,000`,
				b5: `ten_label: LOOP
    -- Hanh dong lap lai
    IF dieu_kien_thoat THEN
        LEAVE ten_label;  -- Thoat khoi vong lap
    END IF;
END LOOP ten_label;`,
				b5ex: `DELIMITER $$
CREATE PROCEDURE sp_tim_het_hang()
BEGIN
    DECLARE v_id  INT DEFAULT 1;
    DECLARE v_max INT;
    DECLARE v_ton INT;
    DECLARE v_ten VARCHAR(100);

    SELECT MAX(id) INTO v_max FROM san_pham;

    tim_label: LOOP
        -- Duyet het ma khong tim thay
        IF v_id > v_max THEN
            SELECT 'Khong co san pham nao het hang' AS ket_qua;
            LEAVE tim_label;
        END IF;

        SELECT ton_kho, ten INTO v_ton, v_ten FROM san_pham WHERE id = v_id;

        -- Tim thay san pham het hang -> bao cao va thoat ngay
        IF v_ton = 0 THEN
            SELECT v_ten AS san_pham_het_hang, v_id AS id;
            LEAVE tim_label;
        END IF;

        SET v_id = v_id + 1;
    END LOOP tim_label;
END$$
DELIMITER ;

CALL sp_tim_het_hang();
-- san_pham_het_hang: Monitor LG 27 inch | id: 4`,
				b6: `REPEAT
    -- Hanh dong lap lai
    -- Chac chan chay it nhat 1 lan truoc khi kiem tra
UNTIL dieu_kien
END REPEAT;`,
				b6ex: `-- Tang gia 5%/lan cho den khi gia vuot nguong dat ra
DELIMITER $$
CREATE PROCEDURE sp_tang_gia_den_nguong(IN p_id INT, IN p_nguong DECIMAL(10,2))
BEGIN
    DECLARE v_gia DECIMAL(10,2);
    DECLARE v_lan INT DEFAULT 0;

    SELECT gia INTO v_gia FROM san_pham WHERE id = p_id;

    REPEAT
        SET v_gia = ROUND(v_gia * 1.05, 0);  -- tang 5%
        SET v_lan = v_lan + 1;
    UNTIL v_gia >= p_nguong
    END REPEAT;

    SELECT v_lan AS so_lan_tang, FORMAT(v_gia, 0) AS gia_moi;
END$$
DELIMITER ;

-- Ban phim co gia 850,000 -> tang 5%/lan cho den khi vuot 2,000,000
CALL sp_tang_gia_den_nguong(5, 2000000);
-- so_lan_tang: 18 | gia_moi: 2,042,672

-- Khac voi WHILE:
-- REPEAT luon chay it nhat 1 lan du dieu kien co sai ngay tu dau
-- WHILE gia >= nguong ngay tu dau -> khong chay lan nao`,
				b7: `-- LEAVE: thoat khoi vong lap ngay lap tuc (tuong duong break)
DELIMITER $$
CREATE PROCEDURE sp_kiem_tra_danh_muc(IN p_danh_muc VARCHAR(50))
BEGIN
    DECLARE v_id  INT DEFAULT 1;
    DECLARE v_max INT;
    DECLARE v_ton INT;

    SELECT MAX(id) INTO v_max FROM san_pham;

    check_label: LOOP
        IF v_id > v_max THEN
            SELECT 'Tat ca san pham trong danh muc deu con hang' AS ket_qua;
            LEAVE check_label;  -- Duyet het, thoat
        END IF;

        SELECT ton_kho INTO v_ton FROM san_pham
        WHERE id = v_id AND danh_muc = p_danh_muc;

        IF v_ton IS NOT NULL AND v_ton = 0 THEN
            SELECT ten AS san_pham_het_hang FROM san_pham WHERE id = v_id;
            LEAVE check_label;  -- Tim thay -> LEAVE thoat ngay, khong quet tiep
        END IF;

        SET v_id = v_id + 1;
    END LOOP check_label;
END$$
DELIMITER ;

CALL sp_kiem_tra_danh_muc('dien-tu');
-- san_pham_het_hang: Monitor LG 27 inch

CALL sp_kiem_tra_danh_muc('luu-tru');
-- Tat ca san pham trong danh muc deu con hang`,
				b8: `-- ITERATE: bo qua phan con lai cua vong lap, chay tiep lap sau (tuong duong continue)
DELIMITER $$
CREATE PROCEDURE sp_dem_sp_con_hang()
BEGIN
    DECLARE v_id   INT DEFAULT 1;
    DECLARE v_max  INT;
    DECLARE v_ton  INT;
    DECLARE v_dem  INT DEFAULT 0;

    SELECT MAX(id) INTO v_max FROM san_pham;

    dem_label: LOOP
        IF v_id > v_max THEN
            LEAVE dem_label;
        END IF;

        SELECT ton_kho INTO v_ton FROM san_pham WHERE id = v_id;
        SET v_id = v_id + 1;

        -- San pham het hang -> ITERATE: bo qua, khong dem, chay tiep
        IF v_ton = 0 THEN
            ITERATE dem_label;
        END IF;

        -- Chi den duoc day neu ton_kho > 0
        SET v_dem = v_dem + 1;
    END LOOP dem_label;

    SELECT v_dem AS so_san_pham_con_hang;
END$$
DELIMITER ;

CALL sp_dem_sp_con_hang();
-- so_san_pham_con_hang: 8  (10 san pham - 2 het hang)`,
				bOthers: `DELIMITER $$
CREATE PROCEDURE sp_bao_cao_hang_ton()
BEGIN
    DECLARE v_ngay     DATE;           -- Khai bao bien kieu DATE
    DECLARE v_so_sp    INT;            -- Dem so san pham con hang
    DECLARE v_tong_ton DECIMAL(15,2);  -- Tong gia tri ton kho

    SET v_ngay = CURDATE();            -- Gan ngay hien tai vao bien

    -- Tinh tong gia tri ton kho chi voi san pham con hang
    SELECT COUNT(*), SUM(gia * ton_kho)
    INTO v_so_sp, v_tong_ton
    FROM san_pham WHERE ton_kho > 0;

    SELECT
        v_ngay               AS ngay_bao_cao,
        v_so_sp              AS so_san_pham_con_hang,
        FORMAT(v_tong_ton, 0) AS tong_gia_tri_ton_kho;
END$$
DELIMITER ;

CALL sp_bao_cao_hang_ton();
-- ngay_bao_cao | so_san_pham_con_hang | tong_gia_tri_ton_kho
-- 2026-05-20   | 8                    | 289,300,000`,
				bSeed: `-- Tao bang san_pham de chay tat ca demo
CREATE TABLE san_pham (
    id       INT AUTO_INCREMENT PRIMARY KEY,
    ten      VARCHAR(100)  NOT NULL,
    gia      DECIMAL(10,2) NOT NULL,
    ton_kho  INT           NOT NULL DEFAULT 0,
    danh_muc VARCHAR(50)   NOT NULL
);

INSERT INTO san_pham (ten, gia, ton_kho, danh_muc) VALUES
('Laptop Dell XPS',    22000000,  5, 'dien-tu'),
('iPhone 15',          20000000,  3, 'dien-tu'),
('Samsung Galaxy S24', 17000000,  8, 'dien-tu'),
('Monitor LG 27 inch',  6500000,  0, 'dien-tu'),   -- het hang
('Ban phim co',           850000, 30, 'phu-kien'),
('Chuot Logitech MX',     420000, 25, 'phu-kien'),
('Tai nghe Sony WH',    1500000,  12, 'phu-kien'),
('SSD Samsung 1TB',     2200000,  18, 'luu-tru'),
('RAM Corsair 16GB',    1600000,  22, 'luu-tru'),
('USB Hub 7 cong',        320000,  0, 'phu-kien');  -- het hang

SELECT * FROM san_pham;`,
				bProcs: `-- Tao tat ca stored procedures (chay theo thu tu)

-- 1. IF: phan loai san pham theo gia
DELIMITER $$
CREATE PROCEDURE sp_phan_loai_sp(IN p_id INT)
BEGIN
    DECLARE v_gia DECIMAL(10,2);
    DECLARE v_phan_loai VARCHAR(30);
    SELECT gia INTO v_gia FROM san_pham WHERE id = p_id;
    IF v_gia >= 10000000 THEN
        SET v_phan_loai = 'Cao cap';
    ELSEIF v_gia >= 2000000 THEN
        SET v_phan_loai = 'Tam trung';
    ELSE
        SET v_phan_loai = 'Pho thong';
    END IF;
    SELECT ten, FORMAT(gia, 0) AS gia, v_phan_loai AS phan_loai FROM san_pham WHERE id = p_id;
END$$
DELIMITER ;

-- 2. CASE: chuyen ten danh muc
DELIMITER $$
CREATE PROCEDURE sp_mo_ta_danh_muc(IN p_dm VARCHAR(50), OUT mo_ta VARCHAR(100))
BEGIN
    CASE p_dm
        WHEN 'dien-tu'  THEN SET mo_ta = 'Thiet bi dien tu';
        WHEN 'phu-kien' THEN SET mo_ta = 'Phu kien may tinh';
        WHEN 'luu-tru'  THEN SET mo_ta = 'Thiet bi luu tru';
        ELSE                 SET mo_ta = 'Danh muc khac';
    END CASE;
END$$
DELIMITER ;

-- 3. WHILE: tinh tong gia tri ton kho
DELIMITER $$
CREATE PROCEDURE sp_tong_ton_kho()
BEGIN
    DECLARE v_id INT DEFAULT 1;
    DECLARE v_max INT;
    DECLARE v_gia DECIMAL(10,2);
    DECLARE v_ton INT;
    DECLARE v_tong DECIMAL(15,2) DEFAULT 0;
    SELECT MAX(id) INTO v_max FROM san_pham;
    WHILE v_id <= v_max DO
        SELECT gia, ton_kho INTO v_gia, v_ton FROM san_pham WHERE id = v_id;
        IF v_ton > 0 THEN
            SET v_tong = v_tong + (v_gia * v_ton);
        END IF;
        SET v_id = v_id + 1;
    END WHILE;
    SELECT FORMAT(v_tong, 0) AS tong_gia_tri_ton_kho;
END$$
DELIMITER ;

-- 4. LOOP + LEAVE: tim san pham het hang dau tien
DELIMITER $$
CREATE PROCEDURE sp_tim_het_hang()
BEGIN
    DECLARE v_id INT DEFAULT 1;
    DECLARE v_max INT;
    DECLARE v_ton INT;
    DECLARE v_ten VARCHAR(100);
    SELECT MAX(id) INTO v_max FROM san_pham;
    tim_label: LOOP
        IF v_id > v_max THEN
            SELECT 'Khong co san pham nao het hang' AS ket_qua;
            LEAVE tim_label;
        END IF;
        SELECT ton_kho, ten INTO v_ton, v_ten FROM san_pham WHERE id = v_id;
        IF v_ton = 0 THEN
            SELECT v_ten AS san_pham_het_hang, v_id AS id;
            LEAVE tim_label;
        END IF;
        SET v_id = v_id + 1;
    END LOOP tim_label;
END$$
DELIMITER ;

-- 5. REPEAT: tang gia den khi dat nguong
DELIMITER $$
CREATE PROCEDURE sp_tang_gia_den_nguong(IN p_id INT, IN p_nguong DECIMAL(10,2))
BEGIN
    DECLARE v_gia DECIMAL(10,2);
    DECLARE v_lan INT DEFAULT 0;
    SELECT gia INTO v_gia FROM san_pham WHERE id = p_id;
    REPEAT
        SET v_gia = ROUND(v_gia * 1.05, 0);
        SET v_lan = v_lan + 1;
    UNTIL v_gia >= p_nguong
    END REPEAT;
    SELECT v_lan AS so_lan_tang, FORMAT(v_gia, 0) AS gia_moi;
END$$
DELIMITER ;

-- 6. ITERATE: dem san pham con hang (bo qua het hang)
DELIMITER $$
CREATE PROCEDURE sp_dem_sp_con_hang()
BEGIN
    DECLARE v_id INT DEFAULT 1;
    DECLARE v_max INT;
    DECLARE v_ton INT;
    DECLARE v_dem INT DEFAULT 0;
    SELECT MAX(id) INTO v_max FROM san_pham;
    dem_label: LOOP
        IF v_id > v_max THEN LEAVE dem_label; END IF;
        SELECT ton_kho INTO v_ton FROM san_pham WHERE id = v_id;
        SET v_id = v_id + 1;
        IF v_ton = 0 THEN ITERATE dem_label; END IF;
        SET v_dem = v_dem + 1;
    END LOOP dem_label;
    SELECT v_dem AS so_san_pham_con_hang;
END$$
DELIMITER ;

-- 7. DECLARE + SET + CURDATE: bao cao hang ton
DELIMITER $$
CREATE PROCEDURE sp_bao_cao_hang_ton()
BEGIN
    DECLARE v_ngay DATE;
    DECLARE v_so_sp INT;
    DECLARE v_tong_ton DECIMAL(15,2);
    SET v_ngay = CURDATE();
    SELECT COUNT(*), SUM(gia * ton_kho)
    INTO v_so_sp, v_tong_ton
    FROM san_pham WHERE ton_kho > 0;
    SELECT v_ngay AS ngay_bao_cao, v_so_sp AS so_sp_con_hang,
           FORMAT(v_tong_ton, 0) AS tong_gia_tri_ton_kho;
END$$
DELIMITER ;`,
				bRun: `-- === CHAY VA XEM KET QUA ===

-- IF: phan loai theo gia
CALL sp_phan_loai_sp(1);   -- Laptop Dell XPS  | Cao cap
CALL sp_phan_loai_sp(5);   -- Ban phim co       | Pho thong
CALL sp_phan_loai_sp(8);   -- SSD Samsung 1TB   | Tam trung

-- CASE: chuyen ten danh muc
CALL sp_mo_ta_danh_muc('dien-tu', @mo_ta);  SELECT @mo_ta;  -- Thiet bi dien tu
CALL sp_mo_ta_danh_muc('luu-tru', @mo_ta);  SELECT @mo_ta;  -- Thiet bi luu tru

-- CASE trong SELECT (khong can procedure)
SELECT ten, CASE WHEN gia >= 10000000 THEN 'Cao cap'
                 WHEN gia >= 2000000  THEN 'Tam trung'
                 ELSE 'Pho thong' END AS phan_loai
FROM san_pham ORDER BY gia DESC;

-- WHILE: tong gia tri ton kho
CALL sp_tong_ton_kho();    -- 289,300,000

-- LOOP + LEAVE: san pham het hang dau tien
CALL sp_tim_het_hang();    -- Monitor LG 27 inch (id: 4)

-- REPEAT: tang gia ban phim co den khi vuot 2 trieu
CALL sp_tang_gia_den_nguong(5, 2000000);  -- 18 lan, gia moi: 2,042,672

-- ITERATE: dem san pham con hang
CALL sp_dem_sp_con_hang();  -- 8 san pham (10 - 2 het hang)

-- DECLARE + SET + CURDATE: bao cao tong hop
CALL sp_bao_cao_hang_ton();
-- 2026-05-20 | 8 sp con hang | tong: 289,300,000

-- Don dep sau khi demo xong
-- DROP TABLE san_pham;
-- DROP PROCEDURE sp_phan_loai_sp;
-- DROP PROCEDURE sp_mo_ta_danh_muc;
-- DROP PROCEDURE sp_tong_ton_kho;
-- DROP PROCEDURE sp_tim_het_hang;
-- DROP PROCEDURE sp_tang_gia_den_nguong;
-- DROP PROCEDURE sp_dem_sp_con_hang;
-- DROP PROCEDURE sp_bao_cao_hang_ton;`,
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

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Transactions trong SQL" addOnClass="text-left mt-5" markedAs="about-transaction" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong quá trình làm việc với cơ sở dữ liệu, có nhiều trường hợp chúng ta cần đảm bảo rằng một loạt các thao
					tác phải được thực hiện trọn vẹn, hoặc không thực hiện gì cả. Đây chính là lúc Transactions phát huy vai trò
					của mình.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Transaction (giao dịch) trong SQL là một tập hợp các câu lệnh SQL thực thi như một đơn vị duy nhất.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu tất cả các câu lệnh trong transaction thành công, dữ liệu sẽ được lưu (<b>COMMIT</b>).</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu có lỗi xảy ra, tất cả thay đổi sẽ bị hủy bỏ (<b>ROLLBACK</b>).</span>
					</li>
				</ul>

				<PageHeading text="Chuẩn bị dữ liệu" addOnClass="text-left mt-5" markedAs="seed-data" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tất cả ví dụ trong bài sử dụng database <FilePath>transaction_demo</FilePath> với hai bảng
					<FilePath>accounts</FilePath> (tài khoản ngân hàng) và <FilePath>transaction_logs</FilePath> (lịch sử giao
					dịch). Hãy chạy script dưới đây trước khi bắt đầu.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="seedData" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="ACID của Transactions" addOnClass="text-left mt-5" markedAs="acid" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					ACID là viết tắt của 4 đặc điểm quan trọng giúp Transactions đảm bảo tính toàn vẹn dữ liệu.
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Atomicity (Tính nguyên tử)</b>: Transaction phải được thực hiện toàn bộ hoặc không thực hiện gì cả.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Alice chuyển 500,000 VNĐ cho Bob. Nếu tiền đã bị trừ khỏi tài khoản Alice nhưng chưa cộng vào Bob thì
									hệ thống bị lỗi — Atomicity đảm bảo hoặc cả hai thao tác thành công, hoặc không thao tác nào xảy ra.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Consistency (Tính nhất quán)</b>: Dữ liệu phải duy trì trạng thái nhất quán trước và sau transaction.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Tổng số dư toàn hệ thống không đổi sau giao dịch chuyển tiền. Nếu Alice chuyển 500,000 cho Bob, tổng
									tài sản vẫn giữ nguyên — tiền chỉ di chuyển từ tài khoản này sang tài khoản khác.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Isolation (Tính độc lập)</b>: Các transaction độc lập và không ảnh hưởng lẫn nhau.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Hai giao dịch cùng lúc đọc số dư của Alice (5,000,000) và đều muốn trừ tiền — Isolation đảm bảo mỗi
									giao dịch xử lý tuần tự, tránh trường hợp trừ tiền hai lần cùng một lúc.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Durability (Tính bền vững)</b>: Khi một transaction được commit, dữ liệu sẽ được lưu vĩnh viễn.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Sau khi COMMIT thành công, dù server bị restart hay mất điện đột ngột, số dư trong tài khoản vẫn được
									bảo toàn và không bị mất.
								</li>
							</ul>
						</div>
					</li>
				</ul>

				<PageHeading text="Transactions Syntax" addOnClass="text-left mt-5" markedAs="syntax" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong MySQL, chúng ta quản lý transactions thông qua ba lệnh chính:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="syntaxBasic" highlightjs lang="sql" theme="atom-one-dark" />
							<ul class="pl-5 marker:text-sky-400 list-disc mt-3">
								<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
									<b>START TRANSACTION</b>: Bắt đầu một giao dịch mới.
								</li>
								<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
									<b>COMMIT</b>: Lưu vĩnh viễn tất cả thay đổi trong giao dịch.
								</li>
								<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
									<b>ROLLBACK</b>: Hủy bỏ tất cả thay đổi, khôi phục dữ liệu về trạng thái trước START TRANSACTION.
								</li>
							</ul>
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ: Alice chuyển 200,000 cho Bob.
							</p>
							<VCodeBlock :code="exBasic" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Savepoint trong Transactions" addOnClass="text-left mt-5" markedAs="save-point" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Savepoint giúp chia nhỏ transaction — khi có lỗi ta có thể rollback về một điểm cụ thể thay vì hủy toàn bộ.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="syntaxSavepoint" highlightjs lang="sql" theme="atom-one-dark" />
							<ul class="pl-5 marker:text-sky-400 list-disc mt-3">
								<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
									<b>SAVEPOINT sp_name</b>: Tạo điểm đánh dấu tại vị trí hiện tại trong transaction.
								</li>
								<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
									<b>ROLLBACK TO sp_name</b>: Quay lại điểm đánh dấu, hủy các thay đổi sau đó nhưng vẫn giữ transaction
									đang chạy.
								</li>
								<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
									<b>RELEASE SAVEPOINT sp_name</b>: Xóa điểm đánh dấu (không rollback, không commit).
								</li>
							</ul>
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ: Alice thanh toán 3 hóa đơn, hủy hóa đơn cuối.
							</p>
							<VCodeBlock :code="exSavepoint" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Isolation Levels" addOnClass="text-left mt-5" markedAs="iso-level" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Isolation Level kiểm soát mức độ tách biệt giữa các transactions chạy đồng thời. MySQL mặc định dùng
					<b>REPEATABLE READ</b>. Để kiểm tra hoặc thay đổi:
				</p>
				<ClientOnly>
					<div class="col-span-1 mb-3">
						<VCodeBlock :code="syntaxIsolation" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Có 4 mức độ cô lập tiêu chuẩn (theo ANSI/ISO), từ thấp đến cao:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Read Uncommitted (Đọc chưa cam kết)</b>: Giao dịch có thể đọc dữ liệu mà giao dịch khác đã thay đổi
							nhưng chưa COMMIT.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Bạn đang xem số dư tài khoản Alice trong khi một giao dịch khác đang trừ 1,000,000 nhưng chưa COMMIT.
									Với Read Uncommitted, bạn thấy số dư đã giảm. Nếu giao dịch đó ROLLBACK, số dư bạn thấy là không chính
									xác — gọi là "dirty read".
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Read Committed (Đọc đã cam kết)</b>: Giao dịch chỉ đọc dữ liệu đã được COMMIT bởi giao dịch khác.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Bạn đọc số dư Alice là 5,000,000. Trong lúc đó, một giao dịch khác COMMIT xong và trừ 500,000. Lần đọc
									tiếp theo bạn thấy 4,500,000 — dữ liệu thay đổi trong cùng một transaction của bạn, gọi là
									"non-repeatable read".
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Repeatable Read (Đọc lặp lại được)</b>: Đảm bảo dữ liệu đã đọc trong giao dịch không bị thay đổi bởi
							giao dịch khác cho đến khi giao dịch kết thúc.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Bạn đọc số dư Alice là 5,000,000. Dù giao dịch khác có COMMIT thay đổi số dư, bạn vẫn đọc được
									5,000,000 trong suốt transaction. Tuy nhiên nếu giao dịch khác chèn thêm bản ghi mới, bạn có thể thấy
									dữ liệu "ma" — gọi là "phantom read".
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Serializable (Tuần tự hóa)</b>: Mức cô lập cao nhất — các transaction thực thi như thể tuần tự, không
							đồng thời.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Hai giao dịch cùng đặt mua 1 vé máy bay cuối cùng. Serializable khóa toàn bộ tập dữ liệu liên quan,
									đảm bảo giao dịch thứ hai phải chờ giao dịch đầu tiên xong. Không xảy ra dirty read, non-repeatable
									read hay phantom read — nhưng hiệu suất thấp hơn.
								</li>
							</ul>
						</div>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Tóm tắt các vấn đề có thể gặp theo mức isolation:</b>
				</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Isolation Level</th>
							<th scope="col" class="px-5 py-3">Dirty Read</th>
							<th scope="col" class="px-5 py-3">Non-Repeatable Read</th>
							<th scope="col" class="px-5 py-3">Phantom Read</th>
							<th scope="col" class="px-5 py-3">Use case</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in isolations"
							:key="item.level"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td class="px-5 py-4">{{ item.level }}</td>
							<td class="px-5 py-4">{{ item.dirty_read ? '✅' : '❌' }}</td>
							<td class="px-5 py-4">{{ item.non_repeatable_read ? '✅' : '❌' }}</td>
							<td class="px-5 py-4">{{ item.phantom_read ? '✅' : '❌' }}</td>
							<td class="px-5 py-4">{{ item.use_case }}</td>
						</tr>
					</tbody>
				</table>

				<PageHeading text="Ví dụ thực hành" addOnClass="text-left mt-5" markedAs="vi-du-thuc-hanh" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tất cả ví dụ dưới đây sử dụng database <FilePath>transaction_demo</FilePath> đã tạo ở trên. Nếu cần reset dữ
					liệu về trạng thái ban đầu, hãy chạy lại script seed ở phần <b>Chuẩn bị dữ liệu</b>.
				</p>

				<PageHeading
					text="Ví dụ 1: Chuyển tiền thành công (COMMIT)"
					addOnClass="text-left mt-5"
					markedAs="ex1-commit"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Alice chuyển 500,000 VNĐ cho Bob. Cả hai lệnh UPDATE đều thành công → COMMIT để lưu thay đổi.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="ex1Code" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading
					text="Ví dụ 2: Số dư không đủ – ROLLBACK"
					addOnClass="text-left mt-5"
					markedAs="ex2-rollback"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Charlie chỉ có 1,000,000 VNĐ nhưng muốn chuyển 2,000,000 cho Alice. Sau khi thực hiện UPDATE, ta kiểm tra số
					dư bị âm rồi dùng ROLLBACK để hủy toàn bộ giao dịch.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="ex2Code" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading
					text="Ví dụ 3: Transaction trong Stored Procedure"
					addOnClass="text-left mt-5"
					markedAs="ex3-procedure"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Thực tế, logic kiểm tra thường được đóng gói trong Stored Procedure. Procedure
					<FilePath>TransferMoney</FilePath> tự động kiểm tra số dư và ROLLBACK nếu không đủ tiền, COMMIT nếu hợp lệ,
					đồng thời ghi lại log vào bảng <FilePath>transaction_logs</FilePath>.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<b>Tạo Procedure</b>
							<VCodeBlock :code="ex3Procedure" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<b>Kiểm tra</b>
							<VCodeBlock :code="ex3Test" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Câu hỏi thực hành" addOnClass="text-left mt-5" markedAs="cau-hoi-thuc-hanh" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Dùng database <FilePath>transaction_demo</FilePath>. Chạy lại seed data trước mỗi câu nếu cần reset số dư về
					ban đầu.
				</p>
				<ul class="pl-5">
					<li
						class="text-slate-900 dark:text-white mb-8 leading-8 text-lg text-content marker:text-sky-400 list-decimal"
					>
						<p class="mt-0 mb-1">
							<b>Câu 1 – COMMIT cơ bản:</b> Bob muốn chuyển 1,000,000 VNĐ cho Charlie. Viết một transaction thực hiện
							hai lệnh UPDATE. Kiểm tra số dư của Bob và Charlie trước và sau khi COMMIT để xác nhận kết quả đúng.
						</p>
						<p class="text-slate-500 dark:text-slate-400 text-base mt-1">
							<i>Gợi ý: Bob bắt đầu với 3,000,000 → sau COMMIT còn 2,000,000. Charlie 1,000,000 → 2,000,000.</i>
						</p>
					</li>
					<li
						class="text-slate-900 dark:text-white mb-8 leading-8 text-lg text-content marker:text-sky-400 list-decimal"
					>
						<p class="mt-0 mb-1">
							<b>Câu 2 – SAVEPOINT:</b> Alice cần thanh toán 3 hóa đơn trong một transaction: tiền điện 200,000 → tiền
							nước 100,000 → tiền thuê nhà 5,000,000. Dùng SAVEPOINT sau mỗi lần thanh toán. Sau khi trừ tiền thuê nhà,
							kiểm tra số dư Alice — nếu âm thì ROLLBACK về điểm sau khi trả tiền nước và COMMIT phần còn lại.
						</p>
						<p class="text-slate-500 dark:text-slate-400 text-base mt-1">
							<i
								>Gợi ý: Alice bắt đầu 5,000,000. Sau điện + nước còn 4,700,000. Sau thuê nhà còn -300,000 → âm →
								ROLLBACK TO savepoint sau nước → COMMIT → kết quả cuối: 4,700,000.</i
							>
						</p>
					</li>
					<li
						class="text-slate-900 dark:text-white mb-8 leading-8 text-lg text-content marker:text-sky-400 list-decimal"
					>
						<p class="mt-0 mb-1">
							<b>Câu 3 – Procedure với Transaction:</b> Viết stored procedure
							<FilePath>SafeDeposit(account_name VARCHAR(100), amount DECIMAL(10,2))</FilePath> để nạp tiền vào tài
							khoản. Điều kiện: nếu <FilePath>amount &lt;= 0</FilePath> thì báo lỗi bằng
							<FilePath>SIGNAL SQLSTATE '45000'</FilePath>. Nếu hợp lệ thì START TRANSACTION → UPDATE balance → INSERT
							log vào <FilePath>transaction_logs</FilePath> → COMMIT.
						</p>
						<p class="text-slate-500 dark:text-slate-400 text-base mt-1">
							<i
								>Gợi ý: Dùng <FilePath>SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...'</FilePath> để báo lỗi. Kiểm tra:
								CALL SafeDeposit('Alice', 500000) → thành công. CALL SafeDeposit('Bob', -100) → báo lỗi.</i
							>
						</p>
					</li>
				</ul>

				<PageHeading text="Tổng kết" addOnClass="text-left mt-5" markedAs="tong-ket" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Trong bài này, chúng ta đã học:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Khái niệm Transaction và 4 tính chất ACID (Atomicity, Consistency, Isolation, Durability)
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Sử dụng <FilePath>START TRANSACTION</FilePath>, <FilePath>COMMIT</FilePath>,
						<FilePath>ROLLBACK</FilePath> để kiểm soát giao dịch
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dùng <FilePath>SAVEPOINT</FilePath> để rollback một phần transaction thay vì hủy toàn bộ
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						4 Isolation Levels và khi nào nên dùng từng mức (Read Uncommitted → Serializable)
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Tích hợp Transaction vào Stored Procedure kết hợp với xử lý lỗi bằng
						<FilePath>SIGNAL SQLSTATE</FilePath>
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
				isolations: [
					{
						level: 'READ UNCOMMITTED',
						dirty_read: true,
						non_repeatable_read: true,
						phantom_read: true,
						use_case:
							'Dùng cho hệ thống báo cáo thời gian thực, nơi dữ liệu có thể chưa chính xác nhưng cần tốc độ cao.',
					},
					{
						level: 'READ COMMITTED',
						dirty_read: false,
						non_repeatable_read: true,
						phantom_read: true,
						use_case: 'Phù hợp cho hệ thống ngân hàng khi kiểm tra số dư tài khoản.',
					},
					{
						level: 'REPEATABLE READ',
						dirty_read: false,
						non_repeatable_read: false,
						phantom_read: true,
						use_case: 'Hữu ích cho hệ thống đặt vé máy bay để tránh việc khách hàng nhìn thấy cùng một vé nhiều lần.',
					},
					{
						level: 'SERIALIZABLE',
						dirty_read: false,
						non_repeatable_read: false,
						phantom_read: false,
						use_case: 'Sử dụng trong hệ thống đấu giá để đảm bảo không có hai người cùng đặt giá thầu một lúc.',
					},
				],
				seedData: `CREATE DATABASE IF NOT EXISTS transaction_demo;
USE transaction_demo;

DROP TABLE IF EXISTS transaction_logs;
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    id      INT PRIMARY KEY AUTO_INCREMENT,
    name    VARCHAR(100) NOT NULL,
    balance DECIMAL(10,2) NOT NULL DEFAULT 0
);

CREATE TABLE transaction_logs (
    id           INT PRIMARY KEY AUTO_INCREMENT,
    from_account VARCHAR(100),
    to_account   VARCHAR(100),
    amount       DECIMAL(10,2),
    status       VARCHAR(20) DEFAULT 'SUCCESS',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO accounts (name, balance) VALUES
    ('Alice',   5000000.00),
    ('Bob',     3000000.00),
    ('Charlie', 1000000.00);

-- Kiểm tra dữ liệu
SELECT * FROM accounts;`,
				syntaxBasic: `START TRANSACTION;  -- Bắt đầu giao dịch

-- Thực hiện các câu lệnh SQL tại đây

COMMIT;    -- Lưu tất cả thay đổi vào database
-- ROLLBACK; -- Hoặc hủy bỏ nếu phát hiện lỗi`,
				exBasic: `USE transaction_demo;

START TRANSACTION;

-- Alice chuyển 200,000 cho Bob
UPDATE accounts SET balance = balance - 200000 WHERE id = 1;
UPDATE accounts SET balance = balance + 200000 WHERE id = 2;

COMMIT;

-- Kiểm tra kết quả
-- Alice: 5,000,000 - 200,000 = 4,800,000
-- Bob:   3,000,000 + 200,000 = 3,200,000
SELECT * FROM accounts;`,
				syntaxSavepoint: `SAVEPOINT ten_savepoint;          -- Tạo điểm đánh dấu
ROLLBACK TO ten_savepoint;        -- Quay lại điểm đánh dấu
RELEASE SAVEPOINT ten_savepoint;  -- Xóa điểm đánh dấu`,
				exSavepoint: `USE transaction_demo;

START TRANSACTION;

-- Thanh toán hóa đơn điện: 300,000
UPDATE accounts SET balance = balance - 300000 WHERE name = 'Alice';
SAVEPOINT sp_after_electricity;

-- Thanh toán hóa đơn nước: 150,000
UPDATE accounts SET balance = balance - 150000 WHERE name = 'Alice';
SAVEPOINT sp_after_water;

-- Thanh toán hóa đơn internet: 500,000 → giả sử gặp lỗi
UPDATE accounts SET balance = balance - 500000 WHERE name = 'Alice';

-- Hủy chỉ hóa đơn internet, giữ lại điện + nước
ROLLBACK TO sp_after_water;

COMMIT;

-- Kết quả: 5,000,000 - 300,000 - 150,000 = 4,550,000
SELECT * FROM accounts WHERE name = 'Alice';`,
				syntaxIsolation: `-- Xem mức isolation hiện tại của session
SELECT @@TRANSACTION_ISOLATION;

-- Thay đổi cho session hiện tại
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Thay đổi chỉ cho transaction tiếp theo
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`,
				ex1Code: `USE transaction_demo;

-- Số dư ban đầu: Alice 5,000,000 | Bob 3,000,000
SELECT * FROM accounts;

START TRANSACTION;

UPDATE accounts SET balance = balance - 500000 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 500000 WHERE name = 'Bob';

COMMIT;

-- Kết quả sau COMMIT:
-- Alice: 5,000,000 - 500,000 = 4,500,000
-- Bob:   3,000,000 + 500,000 = 3,500,000
SELECT * FROM accounts;`,
				ex2Code: `USE transaction_demo;

-- Charlie chỉ có 1,000,000
SELECT * FROM accounts WHERE name = 'Charlie';

START TRANSACTION;

-- Charlie muốn chuyển 2,000,000 cho Alice → số dư sẽ âm
UPDATE accounts SET balance = balance - 2000000 WHERE name = 'Charlie';
UPDATE accounts SET balance = balance + 2000000 WHERE name = 'Alice';

-- Kiểm tra: Charlie bị âm (-1,000,000) → cần ROLLBACK
SELECT balance FROM accounts WHERE name = 'Charlie';

ROLLBACK;

-- Số dư khôi phục về trạng thái ban đầu: 1,000,000
SELECT * FROM accounts WHERE name = 'Charlie';`,
				ex3Procedure: `DELIMITER //
DROP PROCEDURE IF EXISTS TransferMoney //
CREATE PROCEDURE TransferMoney(
    IN from_name VARCHAR(100),
    IN to_name   VARCHAR(100),
    IN amount    DECIMAL(10,2)
)
BEGIN
    DECLARE sender_balance DECIMAL(10,2);

    -- Kiểm tra số dư trước khi bắt đầu transaction
    SELECT balance INTO sender_balance
    FROM accounts WHERE name = from_name;

    IF sender_balance < amount THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Số dư không đủ để thực hiện giao dịch';
    ELSE
        START TRANSACTION;

        UPDATE accounts
            SET balance = balance - amount
            WHERE name = from_name;

        UPDATE accounts
            SET balance = balance + amount
            WHERE name = to_name;

        INSERT INTO transaction_logs (from_account, to_account, amount, status)
        VALUES (from_name, to_name, amount, 'SUCCESS');

        COMMIT;
    END IF;
END //
DELIMITER ;`,
				ex3Test: `-- Test 1: Giao dịch thành công
-- Alice (5,000,000) chuyển 1,000,000 cho Bob
CALL TransferMoney('Alice', 'Bob', 1000000);

SELECT * FROM accounts;
SELECT * FROM transaction_logs;

-- Test 2: Giao dịch thất bại
-- Charlie chỉ có 1,000,000, muốn chuyển 3,000,000
CALL TransferMoney('Charlie', 'Alice', 3000000);
-- Kết quả: Error - Số dư không đủ để thực hiện giao dịch`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-11' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

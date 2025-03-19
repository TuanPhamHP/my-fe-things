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
						<span>Nếu tất cả các câu lệnh trong transaction thành công, dữ liệu sẽ được lưu (COMMIT).</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu có lỗi xảy ra, tất cả thay đổi sẽ bị hủy bỏ (ROLLBACK).</span>
					</li>
				</ul>
				<PageHeading text="ACID của Transactions" addOnClass="text-left mt-5" markedAs="acid" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					ACID là viết tắt của 4 đặc điểm nổi bật của Transactions giúp chúng ta đảm bảo tính toàn vẹn dữ liệu.
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Atomicity (Tính nguyên tử)</b>:Transaction phải được thực hiện toàn bộ hoặc không thực hiện gì cả.
							<br />
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Giả sử bạn rút 500.000 VNĐ từ tài khoản ngân hàng để chuyển sang một ví điện tử. Nếu số tiền đã bị trừ
									khỏi tài khoản nhưng chưa cộng vào ví điện tử, thì giao dịch bị lỗi. Atomicity đảm bảo rằng hoặc cả
									hai thao tác (trừ tiền và cộng tiền) đều thành công, hoặc không thao tác nào diễn ra.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Consistency (Tính nhất quán)</b>: Dữ liệu phải duy trì trạng thái nhất quán trước và sau transaction.

							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Một cửa hàng có 10 chiếc điện thoại trong kho. Nếu một khách hàng đặt hàng, số lượng tồn kho phải giảm
									xuống còn 9. Nếu transaction bị lỗi giữa chừng (ví dụ: giảm số lượng tồn kho thành công nhưng không
									ghi nhận đơn hàng), thì hệ thống cần rollback để đảm bảo tính nhất quán.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Isolation (Tính độc lập)</b>: Các transaction độc lập và không ảnh hưởng lẫn nhau.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Hai khách hàng cùng lúc đặt hàng một chiếc điện thoại duy nhất còn trong kho. Nếu không có cơ chế
									isolation phù hợp, cả hai giao dịch có thể đọc cùng một số lượng tồn kho (1 chiếc) và cả hai đều được
									xác nhận. Điều này dẫn đến việc có nhiều đơn hàng hơn số lượng thực tế. Isolation đảm bảo rằng mỗi
									giao dịch sẽ được thực thi tách biệt mà không bị ảnh hưởng bởi các giao dịch khác.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Durability (Tính bền vững)</b>: Khi một transaction được commit, dữ liệu sẽ được lưu vĩnh viễn.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Một công ty chuyển lương cho nhân viên. Nếu hệ thống báo đã chuyển thành công, nhưng sau đó bị mất
									điện đột ngột, thì số tiền vẫn phải được ghi nhận là đã chuyển trong tài khoản nhân viên khi hệ thống
									khởi động lại. Điều này đảm bảo rằng dữ liệu đã được commit sẽ không bị mất dù có sự cố xảy ra.
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<PageHeading text="Transactions Syntax" addOnClass="text-left mt-5" markedAs="syntax" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong MySQL và MariaDB, chúng ta có thể quản lý transactions thông qua các lệnh sau:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
							<ul class="pl-5 marker:text-sky-400 list-disc">
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span
										>Giả sử chúng ta có tình huống Alice chuyển 200$ cho Bob. Nếu một trong các thao tác thất bại, dữ
										liệu cần được khôi phục về trạng thái ban đầu.</span
									>
								</li>
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span
										><b>COMMIT</b> Nếu cả hai câu lệnh UPDATE thành công, số dư của Alice và Bob sẽ được cập nhật.</span
									>
								</li>
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span><b>ROLLBACK</b> Nếu một trong hai câu lệnh thất bại, transaction sẽ bị rollback.</span>
								</li>
							</ul>
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ thực tế: Chuyển tiền giữa 2 tài khoản.
							</p>
							<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Viết một procedure <FilePath>Transfers_Between(IN source_id, IN des_id, IN amount)</FilePath>
					để chuyển khoản giữa 2 tài khoản.
					<br />
					<b>COMMIT</b>: nếu đúng stk, số tiền chuyển đúng (không lớn hơn tài nguồn, không âm). Còn lại thì
					<b>ROLLBACK</b>.
				</p>

				<PageHeading text="Savepoint trong Transactions" addOnClass="text-left mt-5" markedAs="save-point" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong một số tình huống, chúng ta có thể muốn rollback một phần của transaction thay vì toàn bộ. Savepoint
					giúp chia nhỏ transactions để rollback từng phần.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
							<ul class="pl-5 marker:text-sky-400 list-disc">
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span>
										Giả sử chúng ta có một hệ thống thanh toán hóa đơn tiện ích (điện, nước, internet). Một khách hàng
										thực hiện thanh toán ba hóa đơn khác nhau trong một transaction.
									</span>
								</li>
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span>
										Lệnh <b>ROLLBACK TO sp2;</b> giúp giữ lại thanh toán hóa đơn điện và nước, nhưng hủy thanh toán hóa
										đơn internet.
									</span>
								</li>
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span>Cuối cùng, transaction được commit để xác nhận các thay đổi hợp lệ.</span>
								</li>
							</ul>
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ thực tế: Chuyển tiền giữa 2 tài khoản.
							</p>
							<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Isolation Levels" addOnClass="text-left mt-5" markedAs="iso-level" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong SQL, mức độ cô lập (isolation level) là một khái niệm thuộc về quản lý giao dịch (transaction
					management) trong cơ sở dữ liệu. Nó định nghĩa mức độ mà một giao dịch được tách biệt khỏi các giao dịch khác
					đang chạy đồng thời. Nói cách khác, mức độ cô lập kiểm soát cách các giao dịch tương tác với nhau và đảm bảo
					tính toàn vẹn dữ liệu khi nhiều người dùng hoặc tiến trình truy cập cùng một dữ liệu cùng lúc.
					<br />
					<br />
					Mức độ cô lập quyết định cách các transactions tương tác với nhau. Một số mức độ phổ biến trong MySQL và
					MariaDB. Có 4 mức độ cô lập tiêu chuẩn được định nghĩa trong SQL (theo chuẩn ANSI/ISO), từ thấp đến cao:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Read Uncommitted (Đọc chưa cam kết)</b>: Giao dịch có thể đọc dữ liệu mà giao dịch khác đã thay đổi
							nhưng chưa được cam kết.
							<br />
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Giả sử bạn đang xem số dư tài khoản ngân hàng trong khi một giao dịch khác đang trừ 1.000.000 VNĐ
									nhưng chưa hoàn tất. Với mức Read Uncommitted, bạn có thể thấy số dư đã giảm dù giao dịch kia chưa cam
									kết. Nếu giao dịch đó bị hủy (rollback), số dư bạn thấy sẽ không chính xác. Đây gọi là "dirty read".
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Read Committed (Đọc đã cam kết)</b>: Giao dịch chỉ đọc dữ liệu đã được cam kết bởi giao dịch khác.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Trong một cửa hàng online, bạn kiểm tra số lượng tồn kho của một sản phẩm (10 chiếc). Trong lúc bạn
									xem, một khách hàng khác mua 2 chiếc và giao dịch của họ đã hoàn tất. Với Read Committed, bạn sẽ thấy
									số lượng tồn kho cập nhật còn 8 chiếc, tránh được "dirty read". Tuy nhiên, nếu bạn kiểm tra lại sau đó
									và có giao dịch khác hoàn tất, số lượng có thể thay đổi (non-repeatable read).
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
									Hai khách hàng cùng đặt mua một sản phẩm còn 1 chiếc trong kho. Với Repeatable Read, khi khách hàng
									đầu tiên đọc số lượng tồn kho (1 chiếc), dữ liệu này được "khóa" cho đến khi giao dịch của họ hoàn
									tất. Khách hàng thứ hai sẽ không thấy số lượng thay đổi cho đến khi giao dịch đầu tiên kết thúc, tránh
									được "non-repeatable read". Tuy nhiên, nếu khách hàng khác thêm sản phẩm mới vào kho, "phantom read"
									vẫn có thể xảy ra.
								</li>
							</ul>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Serializable (Tuần tự hóa)</b>: Mức cô lập cao nhất, đảm bảo các giao dịch hoàn toàn tách biệt như thể
							được thực hiện tuần tự.
							<ul class="rounded p-3 border border-gray-300 mt-2">
								<li class="text-slate-900 dark:text-white leading-8 text-lg text-content">
									Một công ty bán vé xem phim với 100 ghế. Hai khách hàng cùng đặt mua 2 vé cuối cùng (ghế 99 và 100).
									Với Serializable, giao dịch của khách hàng đầu tiên sẽ khóa toàn bộ danh sách ghế cho đến khi hoàn
									tất, đảm bảo khách hàng thứ hai không thể đặt trùng vé. Điều này tránh được tất cả vấn đề như dirty
									read, non-repeatable read, và phantom read, nhưng có thể làm chậm hệ thống do khóa chặt chẽ.
								</li>
							</ul>
						</div>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Tại sao cần mức độ cô lập?</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>Đảm bảo tính toàn vẹn dữ liệu (data integrity):</b>Khi nhiều giao dịch chạy đồng thời, nếu không có cô
							lập, dữ liệu có thể bị hỏng hoặc không nhất quán (ví dụ: hai giao dịch cùng cập nhật một giá trị dẫn đến
							xung đột).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>Cân bằng giữa hiệu suất và độ tin cậy:</b>Mức cô lập cao (như Serializable) đảm bảo an toàn tuyệt đối
							nhưng tốn tài nguyên và làm chậm hệ thống. Mức thấp (như Read Uncommitted) nhanh hơn nhưng dễ gặp lỗi. Tùy
							ứng dụng, ta chọn mức phù hợp.
						</span>
					</li>
				</ul>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
				<!--  -->

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
				b1: `START TRANSACTION;  -- Bắt đầu giao dịch
-- Thực hiện các câu lệnh SQL
COMMIT;  -- Lưu thay đổi nếu tất cả các câu lệnh thành công
ROLLBACK;  -- Hủy bỏ thay đổi nếu có lỗi
`,
				b2: `CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    balance DECIMAL(10,2)
);

INSERT INTO accounts (name, balance) VALUES ('Alice', 1000.00), ('Bob', 500.00);

START TRANSACTION;

UPDATE accounts SET balance = balance - 200 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 200 WHERE name = 'Bob';

ROLLBACK -- Nếu thất bại;
COMMIT -- Nếu thành công;
`,
				b3: `SAVEPOINT savepoint_name;  -- Tạo điểm lưu
ROLLBACK TO savepoint_name;  -- Quay lại điểm lưu
RELEASE SAVEPOINT savepoint_name;  -- Xóa điểm lưu
`,
				b4: `START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
SAVEPOINT sp1; -- Thanh toán hóa đơn điện

UPDATE accounts SET balance = balance - 50 WHERE name = 'Alice';
SAVEPOINT sp2; -- Thanh toán hóa đơn nước

UPDATE accounts SET balance = balance - 200 WHERE name = 'Alice';
SAVEPOINT sp3; -- Thanh toán hóa đơn internet

-- Giả sử có lỗi xảy ra khi thanh toán hóa đơn internet
ROLLBACK TO sp2;  -- Quay lại trạng thái sau khi thanh toán hóa đơn nước
COMMIT;`,
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

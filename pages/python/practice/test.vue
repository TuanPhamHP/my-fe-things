<template>
	<div class="dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0 printer">
		<div class="w-full flex gap-2">
			<PageHeading text="Đề thi thực hành Python" addOnClass="text-center mx-auto" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>

		<PageHeading text="Mô tả" addOnClass="text-left" markedAs="detail" />
		<p className="text-slate-900  my-4 pl-0">
			Bạn đang xây dựng hệ thống quản lý mượn thiết bị nội bộ cho một công ty:
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Nhân viên có thể mượn thiết bị
			</li>
			<li class="text-slate-900 my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Một phiếu mượn có thể chứa nhiều thiết bị
			</li>
			<li class="text-slate-900 my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Theo dõi trạng thái phiếu mượn
			</li>
			<li class="text-slate-900 my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Quản lý số lượng thiết bị còn khả dụng
			</li>
		</ul>
		<PageHeading text="Phần 1 - Database (6đ)" addOnClass="text-left" markedAs="db-structure" />

		<p className="text-slate-900  my-4 pl-0">Tạo một database tên là <b>equipment_management</b> gồm các bảng:</p>
		<p className="text-slate-900  my-4 pl-0 font-bold">employees (nhân viên)</p>
		<table class="db-table w-full mb-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead>
				<tr class="text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
					<th class="border border-gray-500 p-2" style="width: 160px; max-width: 160px">Field</th>
					<th class="border border-gray-500 p-2">Type</th>
					<th class="border border-gray-500 p-2">Validation</th>
					<th class="border border-gray-500 p-2">Ghi chú</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">PK</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">name</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">string</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Tối thiểu 5 ký tự</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Tên nhân viên</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">email</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">string</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Unique</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Email nhân viên</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">created_at</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">datetime</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Thời gian tạo bản ghi
					</td>
				</tr>
			</tbody>
		</table>
		<p className="text-slate-900  my-4 pl-0 font-bold">equipments (thiết bị)</p>
		<table class="db-table w-full mb-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead>
				<tr class="text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
					<th class="border border-gray-500 p-2" style="width: 160px; max-width: 160px">Field</th>
					<th class="border border-gray-500 p-2">Type</th>
					<th class="border border-gray-500 p-2">Validation</th>
					<th class="border border-gray-500 p-2">Ghi chú</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">PK</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">name</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">string</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Tối thiểu 5 ký tự, Unique
					</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Tên thiết bị</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">total_qty</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">int</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">>= 0</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Tổng số thiết bị</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">available_qty</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">int</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">>= 0</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Số lượng có thể mượn</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">status</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Enum</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">active / inactive</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Trạng thái của thiết bị
					</td>
				</tr>
			</tbody>
		</table>
		<p className="text-slate-900  my-4 pl-0 font-bold">lendings (phiếu mượn)</p>
		<table class="db-table w-full mb-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead>
				<tr class="text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
					<th class="border border-gray-500 p-2" style="width: 160px; max-width: 160px">Field</th>
					<th class="border border-gray-500 p-2">Type</th>
					<th class="border border-gray-500 p-2">Validation</th>
					<th class="border border-gray-500 p-2">Ghi chú</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">PK</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">employee_id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">FK → employees.id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Khoá ngoại đến employee tương ứng
					</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">status</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Enum</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Trạng thái: new / approved / borrowing / returned / cancelled
					</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Trạng thái phiếu</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">note</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">string</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Nullable</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Lý do huỷ (Bắt buộc nếu huỷ)
					</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">status</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Enum</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">active / inactive</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Trạng thái của thiết bị
					</td>
				</tr>
			</tbody>
		</table>
		<p className="text-slate-900  my-4 pl-0 font-bold">lending_items (thiết bị trong phiếu mượn)</p>
		<table class="db-table w-full mb-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead>
				<tr class="text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
					<th class="border border-gray-500 p-2" style="width: 160px; max-width: 160px">Field</th>
					<th class="border border-gray-500 p-2">Type</th>
					<th class="border border-gray-500 p-2">Validation</th>
					<th class="border border-gray-500 p-2">Ghi chú</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">PK</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">lending_id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">FK → lendings.id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Khoá ngoại đến phiếu mượn tương ứng
					</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">equipment_id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">FK → equipments.id</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						Khoá ngoại đến thiết bị tương ứng
					</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">quantity</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">int</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">> 0</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">Số lượng mượn</td>
				</tr>
				<tr>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">snapshot_qty</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">int</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">-/-</td>
					<td class="p-1 border border-gray-500 font-semibold text-gray-900 whitespace-nowrap">
						available_qty của thiết bị tại thời điểm mượn
					</td>
				</tr>
			</tbody>
		</table>
		<ul v-for="section in tasks1" :key="section.id" class="pl-0">
			<li class="text-slate-900 my-5 leading-8 text-lg text-content">
				<div>
					<FilePath>{{ section.name }}</FilePath> - <b>{{ section.point }} điểm</b>:
				</div>
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						<div v-html="item"></div>
					</li>
				</ul>
			</li>
		</ul>
		<div class="page-break"></div>
		<PageHeading text="Phần 2 - Restful API (10đ)" addOnClass="text-left " markedAs="db-query " />
		<p class="text-slate-900 dark:text-white mt-0 leading-8 text-bold">Tạo Restful API:</p>
		<SkyList
			:docs="[
				{
					id: 1,
					content: '<b>employees: (2đ)</b>',
					subList: [
						'<b>GET | /employees</b>: lấy danh sách nhân viên. Có thể truyền <b>search</b> để lọc email/name',
						'<b>GET | /employees/:id </b>: lấy thông tin một nhân viên ứng với id',
						'<b>POST | /employees/seed </b>: Seed 10 employees.',
					],
				},
				{
					id: 2,
					content: '<b>equipments: (3đ)</b>',
					subList: [
						'<b>GET | /equipments/</b>: lấy danh sách thiết bị. Có thể truyền <b>search</b> để lọc name. Trả ra đầy đủ các trường.',
						'<b>POST | /equipments/ </b>: Truyền body để tạo mới thiết bị. </br>Validate: </br>- total_qty > 0. </br>- name required. </br>- available_qty tự động tăng thêm 1 số lượng bằng với total_qty khi tạo mới. </br> <b>Lưu ý</b>: có thể viết hàm deserialization để validate dữ liệu đầu vào (phần 3 của đề) hoặc dùng pydantic tạo DTO.',
						'<b>POST | /equipments/seed </b>: Seed 10 equipments.',
					],
				},
				{
					id: 3,
					content: '<b>lendings: (5đ)</b>',
					subList: [
						'<b>GET | /lendings/</b>: lấy danh sách lendings. Chỉ trả ra các lendings của employee_id truyền vào, không cần chi tiết lending_items.',
						'<b>GET | /lendings/:id </b>: lấy chi tiết phiếu mượn. Trả ra đầy đủ các trường, bao gồm các <b>lending_items</b> tương ứng.',
						'<b>POST | /lendings/ </b>: Truyền body để tạo mới phiếu mượn.  </br>Validate:  </br>- <b>employee_id</b> tồn tại  </br>- Tất cả <b>equipment_id</b> trong items tồn tại và có available_qty <= item.quantity  </br>- Phiếu mới có status mặc định là <b>new</b>. </br> Payload được ví dụ ở dưới.',
						'<b>POST | /lendings/:id/cancel </b>: Huỷ phiếu mượn - Update status của phiếu mượn về trạng thái <b>cancelled</b>. </br>Validate: </br> - Không thể huỷ phiếu ở trạng thái <b>returned</b> </br> - Bắt buộc phải nhập lý do hủy phiếu mượn <b>note</b> </br> - Khi huỷ phiếu thì <b>available_qty</b> của các equipments tương ứng phải được cập nhật lại.',
					],
				},
			]"
		/>

		<div class="pl-10">
			<VCodeBlock highlightjs lang="python" theme="atom-one-dark" :code="b3" />
		</div>

		<div class="page-break"></div>
		<PageHeading text="Phần 3 - Chuẩn hoá hệ thống (4đ)" addOnClass="text-left mt-4" markedAs="sys-t" />

		<ul class="pl-0 mt-3">
			<li class="text-slate-900 my-1 leading-8 text-lg text-content">
				<div><b>Chuẩn hoá API Response</b> - <b>(2đ)</b>:</div>
				<ul class="pl-10">
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Tạo một hàm utils tên là <FilePath>ApiResponse</FilePath> để build response chuẩn, hàm này không được phụ
						thuộc vào framework đang sử dụng (Ví dụ FastAPI) nhưng được phép sử dụng các module có sẵn như
						<FilePath>json, datetime ...</FilePath>.
						<br />
						Mọi API đều cần đưa ra định dạng chung (Bất kể thành công/thất bại - trừ trường hợp lỗi server 500):
						<VCodeBlock highlightjs lang="python" theme="atom-one-dark" :code="b1" />
					</li>
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Khi response chỉ được gọi hàm utils, không tự format response. VD:
						<VCodeBlock highlightjs lang="python" theme="atom-one-dark" :code="b0" />
					</li>
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Lưu ý:</b> status_code trong hàm ApiResponse phải tương ứng với HTTP Status Code của response trả về.
					</li>
				</ul>
			</li>
			<li class="text-slate-900 my-3 leading-8 text-lg text-content">
				<div><b>Serialization & Deserialization</b> - <b>(2đ)</b>:</div>
				<ul class="pl-10">
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Deserialization: Tạo hàm <b>deserialize_equipment_create</b> để validate dữ liệu đầu vào cho API thêm mới
						<b>equipments</b>: <b>POST - /equipments</b>:
					</li>
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Validate: <br />
						<b>name</b> là string, không rỗng.<br />
						<b>total_qty</b> là int, > 0.<br />
						raise ValueError nếu validate không thành công.
					</li>
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ví dụ sử dụng:
						<VCodeBlock highlightjs lang="python" theme="atom-one-dark" :code="b2" />
					</li>
					<li class="text-slate-900 my-1 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Hoặc có thể sử dụng <b>pydantic</b> để tạo DTO cho việc deserialization.
					</li>
				</ul>
			</li>
		</ul>
		<PageHeading text="Lưu ý" addOnClass="text-left" markedAs="db-query" />
		<ul class="pl-10">
			<li class="text-slate-900 my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Đề bài bao gồm 03 phần, tổng số điểm là 20đ.
			</li>
			<li class="text-slate-900 my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Thư mục đề bài bao gồm: file đề bài <FilePath>de_thi.pdf</FilePath>.
			</li>
			<li class="text-slate-900 my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Các package được phép sử dụng: Flask, FastAPI, Django, SQLAlchemy, Peewee, Pydantic, Marshmallow, SQLite,
				PostgreSQL, MySQL ...
			</li>
		</ul>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>

		<div class="w-full flex gap-2">
			<PageHeading text="Kết thúc" addOnClass="text-center mx-auto" markedAs="env" />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
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
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/mongo-db/practice/e_3',
					},
					prev: {
						title: 'Danh sách',
						link: '/mongo-db/practice',
					},
				},
				tasks1: [
					{
						id: 'basic',
						name: 'Tạo bảng và ràng buộc:',
						point: 6,
						items: [
							'Sử dụng python để tạo các bảng theo mô tả ở trên với các ràng buộc phù hợp.',
							'Có thể sử dụng sqlalchemy để tạo ORM',
						],
					},
				],
				tasks: [
					{
						id: 'basic',
						name: 'Logger:',
						point: 4,
						items: [
							'Tạo một hệ thống logging để ghi lại các hoạt động mượn và trả thiết bị của nhân viên.',
							'Ghi lại thông tin như: thời gian mượn/trả, nhân viên thực hiện, thiết bị liên quan, số lượng, trạng thái phiếu mượn vào một bảng logs.',
						],
					},
				],
				b0: `# Logic code
return ApiResponse(data=result, message="Lấy thiết bị thành công", status_code=200)`,
				b1: `{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": null, # Data có thể là một dict, list, None tuỳ theo ngữ cảnh
}
`,
				b2: `try:
		data = deserialize_equipment_create(payload)
		# Logic code
		response = ApiResponse(data=new_equipment, message="Tạo thiết bị thành công", status_code=201)
except ValueError as e:
		response = {"error": str(e)}`,
				b3: `{
  "employee_id": 1,
  "items": [{"equipment_id": 2,"quantity": 100}]
}`,
			};
		},
		computed: {},
		methods: {},
	};
</script>
<style lang="scss" scopped>
	@media print {
		.page,
		.page-break {
			break-after: page;
		}
	}
	// .printer {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100vw;
	// 	height: 200vh;
	// 	z-index: 9999;
	// 	border-radius: 0;
	// 	padding: 20px;
	// 	overflow: auto;
	// }
</style>

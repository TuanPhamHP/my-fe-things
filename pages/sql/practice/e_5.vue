<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">
			Xây dựng một hệ thống API <b> quản lý chi tiêu cá nhân.</b> đơn giản bằng Node.js, trong đó người dùng có thể thực
			hiện các thao tác CRUD cho các giao dịch và phương thức thanh toán. <b>`Sử dụng mô hình MVC`</b>, kết nối với
			<b>`cơ sở dữ liệu MySQL`</b>, và xây dựng <b>`RESTful API`</b> để phục vụ các yêu cầu từ phía client.
		</p>

		<p className="text-slate-900 dark:text-white mt-5">
			<b> 1/ Thiết kế cơ sở dữ liệu MySQL:</b>
			<br />
			Tạo cơ sở dữ liệu tên là <b>`money_management`</b> gồm các bảng sau:
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3">
			<div class="col-span-1 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">
					Bảng <FilePath>categories</FilePath> (Danh mục chi tiêu) với các trường sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Tên danh mục.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>description</FilePath>: Mô tả.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ví dụ: <FilePath>Tiền ăn</FilePath>, <FilePath>Tiền nhà</FilePath> ...
					</li>
				</ul>
			</div>
			<div class="col-span-1 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">
					Bảng <FilePath>payment_methods</FilePath> (Phương thức thanh toán) với các trường sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Tên phương thức.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>description</FilePath>: Mô tả.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ví dụ: <FilePath>Chuyển khoản</FilePath>, <FilePath>Tiền mặt</FilePath> ...
					</li>
				</ul>
			</div>
			<div class="col-span-1 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">
					Bảng <FilePath>transaction_types</FilePath> (Loại giao dịch) với các trường sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Tên phương thức.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ví dụ: <FilePath>Thu nhập</FilePath>, <FilePath>Chi tiêu</FilePath> ...
					</li>
				</ul>
			</div>
			<div class="col-span-1 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">
					Bảng <FilePath>transactions</FilePath> (Giao dịch) với các trường sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>amount</FilePath>: float, số tiền.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>category_id </FilePath>: int, liên kết với danh mục chi tiêu.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>payment_method_id</FilePath>: int, liên kết với phương thức thanh toán.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>transaction_type_id</FilePath>: int, liên kết với loại giao dịch.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>created_at</FilePath>: timestamp.
					</li>
				</ul>
			</div>
		</div>

		<div class="w-fit">
			<img src="@/assets/images/documentation/pe_5.png" alt="pe_4" class="max-w-100" />
			<p className="text-center text-slate-900 dark:text-white italic">ERD</p>
		</div>
		<p className="text-slate-900 dark:text-white mt-5">
			<b> 2/ Tạo cấu trúc thư mục theo mô hình MVC:</b>
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>models</FilePath>: Xử lý các thao tác với cơ sở dữ liệu.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>controllers</FilePath>: Chứa logic điều khiển cho các API.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>routes</FilePath>: Định tuyến các API đến controller tương ứng.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>database</FilePath>: Cấu hình kết nối MySQL, và tạo các bảng tương ứng.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-5">
			<b> 3/ Chức năng RESTful API:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			<b> Categories API:</b>
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /categories</b>: Lấy danh sách danh mục.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>POST | /categories</b>: Thêm danh mục mới. Rules: <FilePath>name - required</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>DELETE | /categories/:id</b>: Xóa danh mục.
			</li>
		</ul>

		<p className="text-slate-900 dark:text-white mt-5">
			<b> TransactionTypes API:</b>
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /transaction-types</b>: Lấy danh sách loại giao dịch.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>POST | /transaction-types</b>: Thêm loại giao dịch. Rules: <FilePath>name - required</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>DELETE | /transaction-types/:id</b>: Xóa loại giao dịch.
			</li>
		</ul>

		<p className="text-slate-900 dark:text-white mt-5">
			<b> PaymentMethods API:</b>
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /payment-methods</b>: Lấy danh sách phương thức thanh toán.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>POST | /payment-methods</b>: Thêm phương thức thanh toán. Rules: <FilePath>name - required</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>DELETE | /payment-methods/:id</b>: Xóa phương thức thanh toán.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-5">
			<b> Transactions API:</b>
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /transactions</b>: Lấy danh sách phương giao dịch.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>POST | /transactions</b>: Thêm giao dịch. Rules:
				<FilePath>category_id | payment_method_id | transaction_type_id | amount - required</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>PUT | /transactions/:id</b>: Sửa giao dịch. Rules:
				<FilePath>category_id | payment_method_id | transaction_type_id | amount - required</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>DELETE | /transactions/:id</b>: Xóa giao dịch.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-5">
			<b>Lưu ý:</b> kết quả của các apis trên phải là JSON với định dạng ví dụ như sau:
		</p>
		<VCodeBlock
			:code="`{
	success: true,
	message:'',
	data: {
		data:{
			'id': 1,
			'amount': 150.00,
			'transaction_date': '2024-10-14',
			'category': {
				'id': 1,
				'name': 'Đồ ăn uống',
				'description': 'Chi tiêu cho thực phẩm'
			},
			'payment_method': {
				'id': 1,
				'name': 'Tiền mặt',
				'details': 'Thanh toán trực tiếp'
			},
			'transaction_type': {
				'id': 2,
				'name': 'Chi tiêu'
			}
		}
	}
}`"
			highlightjs
			lang="javascript"
			theme="tomorrow-night-bright"
		/>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { formatDateHMDMY } from '@/helpers/formatter';
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
	import BlockInput from '@/components/Form/BlockInput.vue';
	import NormalButton from '@/components/Buttons/NormalButton.vue';
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
			BlockInput,
			NormalButton,
		},
		data() {
			return {
				ableToViewAnswer: false,
				flagSubmitRegister: false,
				flagSubmitLogin: false,
				message: '',
				listData: [],
				counter: 0,
				register_email: '',
				register_password: '',
				register_password_confirmation: '',
				register_name: '',
				email: '',
				password: '',
				currentTab: 'login',
				listAccount: [] as Record<string, any>,
				pagePagination: {
					next: {
						title: 'Comming soon...',
						link: '',
					},
					prev: {
						title: 'Bài 3',
						link: '/nodejs/practice/e_3',
					},
				},
			};
		},
		watch: {
			currentTab() {
				this.flagSubmitRegister = false;
				this.flagSubmitLogin = false;
			},
		},
		computed: {
			loginDataRules(): Record<string, string[]> {
				return {
					email: ['required', 'email'],
					password: ['required'],
				};
			},
			loginDataErrors() {
				const obj = {
					email: this.email,
					password: this.password,
				};
				return this.$globalHelpers.getDataErrors(this.loginDataRules, obj);
			},
			registerDataRules(): Record<string, string[]> {
				return {
					register_name: ['required', 'min:8'],
					register_email: ['required', 'min:8', 'email'],
					register_password: ['required', 'min:8'],
				};
			},
			registerDataErrors() {
				const obj = {
					register_name: this.register_name,
					register_email: this.register_email,
					register_password: this.register_password,
				};
				const ro = this.$globalHelpers.getDataErrors(this.registerDataRules, obj);
				if (this.register_password_confirmation !== this.register_password) {
					ro.register_password_confirmation = 'Mật khẩu không chính xác';
				}
				return ro;
			},
		},
		methods: {
			// parseToString(){
			// 	const div = document.createElement('div')
			// 	div.innerText =
			// }
			formatDateHMDMY,
			submitForm() {
				this.flagSubmitLogin = true;
				if (Object.values(this.loginDataErrors).length) {
					return;
				}
				// @ts-ignore
				const account = this.listAccount.find(o => o.email === this.email);
				if (!account || account.password !== this.password) {
					alert('Sai tài khoản hoặc mật khẩu');
					return;
				}
				alert(`Đăng nhập thành công. Xin chào: ${account.name}`);
			},
			submitFormRegister() {
				this.flagSubmitRegister = true;
				if (Object.values(this.registerDataErrors).length) {
					const msg = Object.values(this.registerDataErrors).join('\n');

					return;
				}
				if (this.register_password_confirmation !== this.register_password) {
					alert('Xác nhận mật khẩu không chính xác.');
					return;
				}
				this.listAccount.push({
					id: new Date().getTime(),
					name: this.register_name,
					email: this.register_email,
					password: this.register_password,
				});
				alert('Đăng ký thành công');
			},
		},
	};
</script>
<style lang="scss" scoped>
	.todo-card {
		transition: 0.2s ease;
		transform: scale(0.7);
		animation: fullfill 0.3s forwards;
	}

	@keyframes fullfill {
		0% {
			transform: scale(0.7);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

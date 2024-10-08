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
			Xây dựng một hệ thống <b>quản lý thực phẩm (bánh kẹo, đồ uống)</b> đơn giản bằng Node.js, trong đó người dùng có
			thể thực hiện các thao tác CRUD cho các mặt hàng trong hệ thống. <b>`Sử dụng mô hình MVC`</b>, kết nối với
			<b>`cơ sở dữ liệu MySQL`</b>, và xây dựng <b>`RESTful API`</b> để phục vụ các yêu cầu từ phía client.
		</p>

		<p className="text-slate-900 dark:text-white mt-5">
			<b> 1/ Thiết kế cơ sở dữ liệu MySQL:</b>
			<br />
			Tạo cơ sở dữ liệu tên là <b>`food_management`</b> gồm các bảng sau:
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3">
			<div class="col-span-1 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">Bảng <FilePath>brands</FilePath> (thương hiệu) với các trường sau:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Tên thương hiệu .
					</li>
				</ul>
			</div>
			<div class="col-span-1 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">
					Bảng <FilePath>categories</FilePath> (danh mục) với các trường sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Tên thương hiệu .
					</li>
				</ul>
			</div>
			<div class="col-span-2 border rounded-lg px-3 pt-2 dark:hover:bg-slate-600 hover:bg-gray-100">
				<p class="text-slate-900 dark:text-white">Bảng <FilePath>products</FilePath> (sản phẩm) với các trường sau:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Khóa chính, tự động tăng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Tên sản phẩm .
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>price</FilePath>: Giá sản phẩm .
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>category_id</FilePath>: ID của danh mục, khóa ngoại từ bảng <FilePath>categories</FilePath> .
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>brand_id</FilePath>: ID của thương hiệu, khóa ngoại từ bảng <FilePath>brands</FilePath> .
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>created_at</FilePath>: Ngày tạo (TIMESTAMP).
					</li>
				</ul>
			</div>
		</div>

		<div class="w-fit">
			<img src="@/assets/images/documentation/pe_4.png" alt="pe_4" class="max-w-100" />
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
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /brands</b>: Lấy danh sách các thương hiệu.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /categories</b>: Lấy danh sách các danh mục.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /products</b>: Lấy danh sách tất cả các sản phẩm có bao gồm chi tiết của brand và category tương ứng.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>GET | /products/:id</b>: Lấy thông tin chi tiết của một sản phẩm dựa trên id có bao gồm chi tiết của brand và
				category tương ứng.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>POST | /products</b>: Tạo một sản phẩm mới.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>PUT | /products/:id</b>: Cập nhật thông tin sản phẩm dựa trên id.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>DELETE | /products/:id</b>: Xoá sản phẩm dựa trên id.
			</li>
			<p className="text-slate-900 dark:text-white mt-5">
				<b>Lưu ý:</b> kết quả của các apis trên phải là JSON với định dạng ví dụ như sau:
			</p>
			<VCodeBlock
				:code="`{
	success: true,
	message:'',
	data: {
			product: [
			{
				'id': 1,
				'name': 'Coca-Cola',
				'price': 1.00,
				'created_at': '2024-10-08T12:00:00Z',
				'category': {
					'id': 1,
					'name': 'Đồ uống'
				},
				'brand': {
					'id': 1,
					'name': 'Coca-Cola'
				}
			}
		]
	}
}`"
				highlightjs
				lang="javascript"
				theme="tomorrow-night-bright"
			/>
		</ul>
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

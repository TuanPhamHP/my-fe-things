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
			Xây dựng trang <b>Đăng ký/Đăng nhập</b> đơn giản với các tính năng sau:
		</p>

		<p className="text-slate-900 dark:text-white mt-5">
			1/ Cho phép người dùng đăng ký tài khoản thông qua việc nhập nội dung vào ô input, khi người dùng click button
			<b>`Đăng ký`</b>, thì kiểm tra thông tin đăng ký sau với điều kiện sau:
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				<b>1 -</b> Tên người dùng: Không được để trống, không chứa số, dài ít nhất 8 ký tự.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				<b>2 -</b> email: Không được để trống, không trùng với các email đã có. Phải là định dạng email (dùng regex).
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				<b>3 -</b> Mật khẩu: Không được để trống, chứa một số, một ký tự viết Hoa, dài ít nhất 8 ký tự (dùng regex).
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				<b>4 -</b> Xác nhận mật khẩu: Không được để trống, phải trùng với mật khẩu ở trên.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white my-5">
			2/ Nếu đăng ký thành công, lưu thông tin tài khoản vừa đăng ký vào Database (có thể giả lập tạm khi chưa học đến
			phần kết nối DB), cho phép người dùng đăng nhập ở tab
			<b>Đăng nhập</b>
			bằng tài khoản vừa đăng ký. Mỗi tài khoản sẽ được lưu lại như model sau:
		</p>
		<VCodeBlock
			:code="`{
		id: number;
		name: string;
		email: string;
		password: string;
}`"
			highlightjs
			lang="javascript"
			theme="tomorrow-night-bright"
		/>
		<p className="text-slate-900 dark:text-white mt-5">
			Trong đó:
			<br />
			<br />
			<b>`id`:</b> là khóa chính của bản ghi, có dạng number, unique - có thể gen ra bằng cách lấy time tại thời điểm
			tạo.
			<br />
			<br />
			<b>`name`:</b> Tên người dùng, được nhập từ ô input.
			<br />
			<br />
			<b>`email`:</b> email người dùng, dùng để đăng nhập được nhập từ ô input.
			<br />
			<br />
			<b>`password`:</b> password người dùng, dùng để đăng nhập được nhập từ ô input.
			<br />
			<br />
		</p>

		<p className="text-slate-900 dark:text-white mt-5">Mẫu về UI & Function:</p>
		<div class="rounded px-4 py-10 border border-gray-400 my-5 bg-neutral-100">
			<div class="grid grid-cols-2 gap-4">
				<div class="col-span-1">
					<img
						src="https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg"
						class="h-full w-full object-cover"
						alt=""
					/>
				</div>
				<div class="col-span-1">
					<div v-show="currentTab === 'login'" class="flex items-center gap-4 my-5">
						<div class="max-w-sm w-full mx-auto">
							<h1 class="text-center text-2xl font-bold mb-5">Đăng nhập</h1>
							<div class="mb-5">
								<label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
								<input
									v-model="email"
									type="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="emailexample@gmail.com"
									required
									:class="flagSubmitLogin && loginDataErrors.email ? 'border-red-500' : ''"
								/>
								<small v-if="flagSubmitLogin && loginDataErrors.email" class="text-red-500">{{
									loginDataErrors.email
								}}</small>
							</div>
							<div class="mb-5">
								<label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
								<input
									v-model="password"
									type="password"
									id="password"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Password"
									:class="flagSubmitLogin && loginDataErrors.password ? 'border-red-500' : ''"
								/>
								<small v-if="flagSubmitLogin && loginDataErrors.password" class="text-red-500">{{
									loginDataErrors.password
								}}</small>
							</div>
							<div class="flex items-start mb-5">
								<div class="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
										required
									/>
								</div>
								<label for="remember" class="ms-2 text-sm font-medium text-gray-900">Lưu đăng nhập</label>
							</div>
							<p class="text-sm mb-3">
								Chưa có tài khoản?
								<span class="cursor-pointer hover:underline text-blue-400" @click="currentTab = 'register'"
									>Đăng ký ngay</span
								>
							</p>
							<button
								type="submit"
								@click="submitForm"
								class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Đăng nhập
							</button>
						</div>
					</div>

					<div v-show="currentTab === 'register'" class="flex items-center gap-4 my-5">
						<div class="max-w-sm w-full mx-auto">
							<h1 class="text-center text-2xl font-bold mb-5">Đăng ký tài khoản</h1>
							<div class="mb-5">
								<label for="register_name" class="block mb-2 text-sm font-medium text-gray-900">Tên</label>
								<input
									v-model="register_name"
									type="text"
									id="register_name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Phạm Anh Tuấn"
									required
									:class="flagSubmitRegister && registerDataErrors.register_name ? 'border-red-500' : ''"
								/>
								<small v-if="flagSubmitRegister && registerDataErrors.register_name" class="text-red-500">{{
									registerDataErrors.register_name
								}}</small>
							</div>
							<div class="mb-5">
								<label for="register_email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
								<input
									v-model="register_email"
									type="email"
									id="register_email"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									:class="flagSubmitRegister && registerDataErrors.register_email ? 'border-red-500' : ''"
									placeholder="emailexample@gmail.com"
									required
								/>
								<small v-if="flagSubmitRegister && registerDataErrors.register_email" class="text-red-500">{{
									registerDataErrors.register_email
								}}</small>
							</div>
							<div class="mb-5">
								<label for="register_password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
								<input
									v-model="register_password"
									type="password"
									id="register_password"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Mật khẩu"
									:class="flagSubmitRegister && registerDataErrors.register_password ? 'border-red-500' : ''"
									required
								/>
								<small v-if="flagSubmitRegister && registerDataErrors.register_password" class="text-red-500">{{
									registerDataErrors.register_password
								}}</small>
							</div>
							<div class="mb-5">
								<label for="register_password_confirmation" class="block mb-2 text-sm font-medium text-gray-900"
									>Xác nhận mật khẩu</label
								>
								<input
									v-model="register_password_confirmation"
									type="password"
									id="register_password_confirmation"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Xác nhận mật khẩu"
									required
									:class="
										flagSubmitRegister && registerDataErrors.register_password_confirmation ? 'border-red-500' : ''
									"
								/>
								<small
									v-if="flagSubmitRegister && registerDataErrors.register_password_confirmation"
									class="text-red-500"
									>{{ registerDataErrors.register_password_confirmation }}</small
								>
							</div>

							<p class="text-sm mb-3">
								Đã có tài khoản?
								<span class="cursor-pointer hover:underline text-blue-400" @click="currentTab = 'login'"
									>Đăng nhập ngay</span
								>
							</p>
							<button
								type="submit"
								@click="submitFormRegister"
								class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Đăng ký
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

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
						title: 'Bài 4',
						link: '/nodejs/practice/e_4',
					},
					prev: {
						title: 'Bài 2',
						link: '/nodejs/practice/e_2',
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

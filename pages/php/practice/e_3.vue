<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập PHP - Form Handler" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Tạo một form đăng nhập có UI như sau:</p>
		<div class="py-2"></div>
		<div class="w-full rounded-lg dark:bg-black bg-gray-200 px-4 py-3">
			<div class="flex items-center gap-4 my-5">
				<div class="max-w-sm w-full mx-auto">
					<div class="mb-5">
						<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
						<input
							v-model="email"
							type="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="emailexample@gmail.com"
							required
						/>
					</div>
					<div class="mb-5">
						<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Your password</label
						>
						<input
							v-model="password"
							type="password"
							id="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Password"
							required
						/>
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
						<label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
					</div>
					<button
						type="submit"
						@click="submitForm"
						class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
		<p className="text-slate-900 dark:text-white mt-5">Yêu cầu:</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			1 - Sử dụng phương thức <b>`POST`</b> để gửi thông tin, tạo file có tên <b>`login_handle.php`</b> để xử lý thông
			tin của người dùng.
		</p>
		<div className="text-slate-900 dark:text-white mt-2 pl-5">
			2 - Tại file <b>`login_handle.php`</b> tiến hành kiểm tra thông tin người dùng gửi lên gồm <b>email, password</b>
			<br />
			<p class="px-5 pt-3">
				Nếu <b>email === 'useremail@gmail.com'</b> và <b>password === '123456'</b>
				thì thông báo "Đăng nhập thành công." Còn lại sẽ thông báo "Thông tin đăng nhập không chính xác."
			</p>
		</div>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">Note: Các bạn tự đặt tên của các methods, properties.</p>
		<DocNextPage :pagination="pagePagination" />
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
						title: 'Danh sách',
						link: '/php/practice',
					},
					prev: {
						title: 'Bài 2',
						link: '/php/practice/e_2',
					},
				},

				email: '',
				password: '',
			};
		},
		computed: {},
		methods: {
			submitForm() {
				if (!this.email || !this.password) {
					alert('Vui lòng điền đủ thông tin.');
					return;
				}
				if (this.email !== 'useremail@gmail.com' || this.password !== '123456') {
					alert('Thông tin đăng nhập không chính xác');
					return;
				}
				alert('Đăng nhập thành công');
			},
		},
	};
</script>

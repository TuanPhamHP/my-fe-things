<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 2 - React Functional Component" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">
			Dùng <b>`JSX`</b> để tạo ra một Functional Component trong đó:
		</p>

		<p className="text-slate-900 dark:text-white mt-5">
			1/ Sử dụng hook <b>useState()</b> để tạo ra một state tên <b>`counter`</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			2/ Tại phần view dùng <b>jsx</b> để hiển thị state <b>`counter`</b> ra ngoài view
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			3/ Tạo 2 button và hàm để tăng, giảm giá trị của <b>`counter`</b>. Gán hàm vừa tạo vào sự kiện click của button.
			<br />
			Khi click các button thì giá trị của <b>`counter`</b> sẽ thay đổi tương ứng
		</p>

		<p className="text-slate-900 dark:text-white text-xl mt-5">
			=&gt; Chỉ xem <b>`đáp án`</b> khi đã làm xong và cần kiểm tra. Hãy nhớ rằng việc copy đáp án để hoàn thành bài
			chống đối sẽ không mang lại ý nghĩa gì cho bạn cả.
		</p>
		<Disclosure>
			<DisclosureButton class="py-2">
				<div
					class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Đáp án
				</div>
			</DisclosureButton>
			<DisclosurePanel>
				<div class="mb-5">
					<p className="text-slate-900 dark:text-white text-lg my-2"></p>
					<TabGroup>
						<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Kết quả
								</button>
							</Tab>
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Code
								</button>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<div class="w-full rounded-lg bg-black px-4 py-3">
									<p className="text-white ">Giá trị hiện tại của `counter` là: {{ counter }}</p>
									<div class="flex items-center gap-4 mt-5">
										<div
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
											@click="counter++"
										>
											Tăng
										</div>
										<div
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
											@click="counter--"
										>
											Giảm
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel
								><VCodeBlock
									:code="`// Import hook useState() từ thư viện 'react'
import React, { useState } from 'react';

// tạo functional component
function Example() {
	// khởi tạo state với syntax của useState();
	const [count, setCount] = useState(0);
	// trong đó:
	// - 'count': Biến chứa giá trị state hiện tại.
	// - 'setCount': Hàm sử dụng để cập nhật giá trị của 'count'.
	// - '0': Giá trị khởi tạo cho state 'count'.

	// tạo hàm để tăng giá trị của 'count'
	const increase = ()=>{
		setCount(count + 1)
	}

	// phần view
	return (
		<div>
			<p>Giá trị hiện tại của ${'`'}counter ${'`'} là: {count}</p>
			{/* gán hàm 'increase' vào sự kiện onClick */}
			<button onClick={increase}>
				Tăng
			</button>
			{/* Cách 2 - viết trực tiếp */}
			<button onClick={() => setCount(count - 1)}>
				Giảm
			</button>
		</div>
	);
}
export default Example;`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
			</DisclosurePanel>
		</Disclosure>

		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Tạo một form đăng nhập cơ bản trong ReactJS giống với UI sau:</p>

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
		<p className="text-slate-900 dark:text-white mt-5">1/ Form chứa 2 thông tin là <b>Email</b> và <b>Password</b></p>

		<p className="text-slate-900 dark:text-white mt-5">
			2/ Khi người dùng điền thông tin vào các ô input thì lưu trữ lại thông tin tương ứng vào state.
			<br />
			Thông báo kết quả bằng hàm <b>`alert()`</b>
			<br />
			Khi click button <b>`Submit`</b> tiến hành kiểm tra thông tin người dùng vừa điền.<br />
			- Trường hợp: email hoặc password trống thì báo 'Vui lòng điền đủ thông tin.' <br />
			- Trường hợp: email === 'useremail@gmail.com' VÀ password === '123456' thì báo 'Đăng nhập thành công'. Ngược lại
			thì báo 'Sai tài khoản hoặc mật khẩu'
		</p>

		<p className="text-slate-900 dark:text-white text-xl mt-5">
			=&gt; Chỉ xem <b>`đáp án`</b> khi đã làm xong và cần kiểm tra. Hãy nhớ rằng việc copy đáp án để hoàn thành bài
			chống đối sẽ không mang lại ý nghĩa gì cho bạn cả.
		</p>
		<Disclosure>
			<DisclosureButton class="py-2">
				<div
					class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Đáp án
				</div>
			</DisclosureButton>
			<DisclosurePanel>
				<div class="mb-5">
					<p className="text-slate-900 dark:text-white text-lg my-2"></p>
					<TabGroup>
						<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Kết quả
								</button>
							</Tab>
							<Tab as="template" v-slot="{ selected }">
								<button
									:class="{
										'bg-blue-500 text-white': selected,
										' text-black': !selected,
										'px-3 py-1 rounded': true,
									}"
								>
									Code
								</button>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<div class="w-full rounded-lg bg-black px-4 py-3">
									<div class="flex items-center gap-4 my-5">
										<div class="max-w-sm w-full mx-auto">
											<div class="mb-5">
												<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>Your email</label
												>
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
												<label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
													>Remember me</label
												>
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
							</TabPanel>
							<TabPanel
								><VCodeBlock
									:code="`// Import hook useState() từ thư viện 'react'
import React, { useState } from 'react';

// tạo functional component
function FormExample() {
	// khởi tạo state với syntax của useState();
	// ở đây tôi tạo 'form' ở dạng object do tôi muốn gom các thông tin của form vào trong một object dạng {email:'',password:''}
	// bạn hoàn toàn có thể tách 'email' và 'password' ra thành 2 state riêng biệt
	const [form, setForm] = useState({email: '', password: ''});

	// tạo hàm submit
	const submitForm = ()=>{
		// Trường hợp form thiếu thông tin
		if (!form.email || !form.password) {
			alert('Vui lòng điền đủ thông tin.');
			return;
		}
		// Trường hợp form đủ thông tin nhưng thông tin sai
		if (form.email !== 'useremail@gmail.com' || form.password !== '123456') {
			alert('Sai tài khoản hoặc mật khẩu');
			return;
		}
		// Thành công
		alert('Đăng nhập thành công');
	}
	const setFormData = (event)=>{
		// event ở đây là HTMLInputEvent
		// lấy đối tượng của event và gán vào biến 'target'
		const target = event.target;

		// ta lấy attribute 'name' của 'target' để làm key của state 'form'
		const key = target.getAttribute('name');

		// update form với key tương ứng
		// lưu ý: ta cần copy lại giá trị của 'form' trước, sau đó mới tiến hành update
		setForm({
			...form,
			[key]: target.value
		})
	}

	// phần view - Ở đây do lười nên tôi chỉ xét tới phần logic render, các bạn cần tự style css.
	return (
		<div>
			<div className=''>
				<label for='email'>Your email</label>
				<input 
					value={form.email} 
					id='email' 
					type='email' 
					className='' 
					placeholder='emailexample@gmail.com' 
					name='email'
					required 
					onChange={(e)=>{setFormData(e)}}
				/>
			</div>
			<div className=''>
				<label for='password' className=''>
					Your password
				</label>
				<input 
					value={form.password} 
					type='password' 
					id='password'
					className='' 
					placeholder='Password' 
					name='password'
					required 
					onChange={(e)=>{setFormData(e)}}
				/>
			</div>
			<div className=''>
				<div className=''>
					<input id='remember' type='checkbox' value='' className='' required />
				</div>
				<label for='remember' className=''>
					Remember me
				</label>
			</div>
			<button type='submit' className='' onClick={submitForm}>
				Submit
			</button>
		</div>
	);
}
export default FormExample;`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
			</DisclosurePanel>
		</Disclosure>

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
				listData: [
					{
						id: 1,
						name: 'Tai nghe Sony WF-1000XM4',
						price: 2990000,
						category: { id: 1, name: 'Tai nghe in-ear' },
						quantity: 40,
					},
					{
						id: 2,
						name: 'Tai nghe Sony WH-1000XM4',
						price: 6690000,
						category: { id: 2, name: 'Tai nghe over-ear' },
						quantity: 23,
					},
					{
						id: 3,
						name: 'Tai nghe không dây WH-CH510',
						price: 1190000,
						category: { id: 2, name: 'Tai nghe over-ear' },
						quantity: 88,
					},
					{
						id: 4,
						name: 'Tai nghe chống ồn WH-1000XM5',
						price: 6490000,
						category: { id: 2, name: 'Tai nghe over-ear' },
						quantity: 12,
					},
					{
						id: 5,
						name: 'Loa đeo cổ không dây SRS-NS7',
						price: 6990000,
						category: { id: 3, name: 'Loa' },
						quantity: 1,
					},
				],
				counter: 0,
				email: '',
				password: '',
				pagePagination: {
					next: {
						title: 'Comming soon...',
						link: '/reactjs-basic/practice/e_2',
					},
					prev: {
						title: 'Bài 1 - Array Methods',
						link: '/reactjs-basic/practice/e_1',
					},
				},
			};
		},
		computed: {
			listData1() {
				return this.listData.filter(o => o.price >= 5000000);
			},
			listData2() {
				return this.listData.filter(o => {
					const isMatchPrice = o.price >= 1000000 && o.price <= 5000000;
					const isMatchCategory = o.category.id === 2;
					return isMatchPrice && isMatchCategory;
				});
			},
			listData3() {
				return this.listData.map(o => ({ ...o, price: o.price * 2 }));
			},
		},
		methods: {
			// parseToString(){
			// 	const div = document.createElement('div')
			// 	div.innerText =
			// }
			submitForm() {
				if (!this.email || !this.password) {
					alert('Vui lòng điền đủ thông tin.');
					return;
				}
				if (this.email !== 'useremail@gmail.com' || this.password !== '123456') {
					alert('Sai tài khoản hoặc mật khẩu');
					return;
				}
				alert('Đăng nhập thành công');
			},
		},
	};
</script>

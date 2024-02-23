<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 3 - To do List" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Xây dựng ứng dụng Todo List đơn giản với các tính năng sau:</p>

		<p className="text-slate-900 dark:text-white mt-5">
			1/ Cho phép người dùng nhập nội dung vào ô input,
			<br />khi người dùng nhấn <b>`Enter`</b> hoặc click button <b>`Lưu`</b>, thì lưu lại nội dung người dùng vừa nhập
			dưới dạng 1 thẻ todo, xóa trắng ô input. <br />
			Nếu ô input trống thì disable button <b>`Lưu`</b>, Không lưu lại nội dung khi người dùng nhấn <b>`Enter`</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-5">
			2/ Mỗi todo sẽ được lưu lại vào state (mảng todo) dưới dạng như model sau:
		</p>
		<VCodeBlock
			:code="`{
		id: number;
		content: string;
		status_id: number;
		created_at: datetime;
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
			<b>`content`:</b> nội dung bản ghi, được nhập từ ô input.
			<br />
			<br />
			<b>`status_id`:</b> trạng thái của todo, <b>1 - Mới </b> | <b>2 - Hoàn thành</b> | <b>3 - Đã hủy</b>.
		</p>

		<p className="text-slate-900 dark:text-white mt-5">
			3/ Từ mảng todo được lưu lại ở bước 2, render ra danh sách todo có giao diện như bên dưới:
		</p>
		<div class="rounded px-4 py-10 border border-gray-400 my-5 bg-neutral-100">
			<div class="grid grid-cols-3 gap-4">
				<div class="col-span-1">
					<h3 class="text-xl bg-indigo-500 text-white rounded text-center py-2">Mới</h3>
					<div
						v-for="exampleData in newData"
						:key="exampleData.id"
						class="px-4 py-3 w-full rounded bg-neutral-100 mt-5 border border-solid border-neutral-500 todo-card"
					>
						<div class="py-0 mb-2 flex items-start justify-between">
							<p class="text-sm mb-0">{{ formatDateHMDMY(exampleData.created_at) }}</p>
							<div class="flex items-start gap-2">
								<Icon
									name="solar:archive-check-linear"
									class="cursor-pointer text-green-500 text-2xl"
									@click="changeTaskStatus(exampleData.id, 2)"
								/>
								<Icon
									name="solar:trash-bin-minimalistic-linear"
									class="cursor-pointer text-red-500 text-2xl"
									@click="changeTaskStatus(exampleData.id, 3)"
								/>
							</div>
						</div>

						<div>
							<p class="text-xl">{{ exampleData.content }}</p>
						</div>
					</div>
				</div>
				<div class="col-span-1">
					<h3 class="text-xl bg-green-500 text-white rounded text-center py-2">Đã hoàn thành</h3>
					<div
						v-for="exampleData in finishedata"
						:key="exampleData.id"
						class="px-4 py-3 w-full rounded bg-neutral-100 mt-5 border border-solid border-green-500 todo-card"
					>
						<div class="py-0 mb-2 flex items-start justify-between">
							<p class="text-sm mb-0">{{ formatDateHMDMY(exampleData.created_at) }}</p>
							<div class="flex items-start gap-2">
								<Icon
									name="solar:trash-bin-minimalistic-linear"
									class="cursor-pointer text-red-500 text-2xl"
									@click="changeTaskStatus(exampleData.id, 3)"
								/>
							</div>
						</div>

						<div>
							<p class="text-xl">{{ exampleData.content }}</p>
						</div>
					</div>
				</div>
				<div class="col-span-1">
					<h3 class="text-xl bg-red-500 text-white rounded text-center py-2">Đã hủy</h3>
					<div
						v-for="exampleData in deletedata"
						:key="exampleData.id"
						class="px-4 py-3 w-full transition ease-in-out delay-150 rounded bg-neutral-100 mt-5 border border-solid border-red-500 todo-card"
					>
						<div class="py-0 mb-2 flex items-start justify-between">
							<p class="text-sm mb-0">{{ formatDateHMDMY(exampleData.created_at) }}</p>
							<div class="flex items-start gap-2">
								<Icon
									name="bi:arrow-counterclockwise"
									class="cursor-pointer text-indigo-500 text-2xl"
									@click="changeTaskStatus(exampleData.id, 1)"
								/>
							</div>
						</div>

						<div>
							<p class="text-xl">{{ exampleData.content }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p className="text-slate-900 dark:text-white mt-5">
			Trong đó:
			<br />
			<br />
			a/ Từ mảng state todo tách thành 3 mảng nhỏ là: <b>Mới </b> | <b>Hoàn thành</b> | <b>Đã hủy</b>.
			<br />
			Tách bằng cách sử dụng method <b>`filter()`</b> với điều kiện dựa vào field <b>`status_id`</b> đã giải thích ở
			bước 2
			<br />
			<br />
			b/ Ứng với mỗi trạng thái khác nhau thì thẻ todo được xếp vào hàng khác nhau. và có border, button khác nhau.

			<br />
			<br />
			c/ Ứng với mỗi trạng thái khác nhau thì thẻ todo có các button tương ứng trong đó:
			<br />
			<br />
			<span>
				<Icon name="solar:archive-check-linear" class="cursor-pointer text-green-500 text-2xl" /> : chuyển todo từ trạng
				thái <b>mới => hoàn thành</b>
			</span>
			<br />
			<span>
				<Icon name="solar:trash-bin-minimalistic-linear" class="cursor-pointer text-red-500 text-2xl" /> : chuyển todo
				từ trạng thái <b>mới | hoàn thành => đã hủy</b>
			</span>
			<br />
			<span>
				<Icon name="bi:arrow-counterclockwise" class="cursor-pointer text-indigo-500 text-2xl" /> : chuyển todo từ trạng
				thái <b>đã hủy => mới</b>
			</span>
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
									<div class="rounded px-4 py-10 border border-gray-400 my-5 bg-neutral-100">
										<form class="max-w-2xl mx-auto flex gap-2 items-center mb-4" @submit.prevent="saveTask">
											<BlockInput
												v-model="message"
												title=""
												placeholder="Bạn có kế hoạch gì ...."
												container-class="w-full"
												input-class="py-4"
												rounded="lg"
												size="xxl"
											/>
											<NormalButton
												size="xxl"
												type="submit"
												:container-class="'block w-fit px-3 rounded-xl font-semibold'"
												:text-size="'md'"
											>
												Lưu
											</NormalButton>
										</form>
										<div class="grid grid-cols-3 gap-4">
											<div class="col-span-1">
												<h3 class="text-xl bg-indigo-500 text-white rounded text-center py-2">Mới</h3>
												<div
													v-for="exampleData in newData"
													:key="exampleData.id"
													class="px-4 py-3 w-full rounded bg-neutral-100 mt-5 border border-solid border-neutral-500 todo-card"
												>
													<div class="py-0 mb-2 flex items-start justify-between">
														<p class="text-sm mb-0">{{ formatDateHMDMY(exampleData.created_at) }}</p>
														<div class="flex items-start gap-2">
															<Icon
																name="solar:archive-check-linear"
																class="cursor-pointer text-green-500 text-2xl"
																@click="changeTaskStatus(exampleData.id, 2)"
															/>
															<Icon
																name="solar:trash-bin-minimalistic-linear"
																class="cursor-pointer text-red-500 text-2xl"
																@click="changeTaskStatus(exampleData.id, 3)"
															/>
														</div>
													</div>

													<div>
														<p class="text-xl">{{ exampleData.content }}</p>
													</div>
												</div>
											</div>
											<div class="col-span-1">
												<h3 class="text-xl bg-green-500 text-white rounded text-center py-2">Đã hoàn thành</h3>
												<div
													v-for="exampleData in finishedata"
													:key="exampleData.id"
													class="px-4 py-3 w-full rounded bg-neutral-100 mt-5 border border-solid border-green-500 todo-card"
												>
													<div class="py-0 mb-2 flex items-start justify-between">
														<p class="text-sm mb-0">{{ formatDateHMDMY(exampleData.created_at) }}</p>
														<div class="flex items-start gap-2">
															<Icon
																name="solar:trash-bin-minimalistic-linear"
																class="cursor-pointer text-red-500 text-2xl"
																@click="changeTaskStatus(exampleData.id, 3)"
															/>
														</div>
													</div>

													<div>
														<p class="text-xl">{{ exampleData.content }}</p>
													</div>
												</div>
											</div>
											<div class="col-span-1">
												<h3 class="text-xl bg-red-500 text-white rounded text-center py-2">Đã hủy</h3>
												<div
													v-for="exampleData in deletedata"
													:key="exampleData.id"
													class="px-4 py-3 w-full transition ease-in-out delay-150 rounded bg-neutral-100 mt-5 border border-solid border-red-500 todo-card"
												>
													<div class="py-0 mb-2 flex items-start justify-between">
														<p class="text-sm mb-0">{{ formatDateHMDMY(exampleData.created_at) }}</p>
														<div class="flex items-start gap-2">
															<Icon
																name="bi:arrow-counterclockwise"
																class="cursor-pointer text-indigo-500 text-2xl"
																@click="changeTaskStatus(exampleData.id, 1)"
															/>
														</div>
													</div>

													<div>
														<p class="text-xl">{{ exampleData.content }}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<VCodeBlock
									:code="`// Import hook useState() từ thư viện 'react'
import React, { useState } from 'react';

// Lưu ý, bài giải chi giải thích về logic, về phần styling các bạn cần tự chủ động.

function Example() {
	// khởi tạo state 'todo' để ghi lại nội dung người dùng nhập dưới dạng string
	const [todo, setTodo] = useState('');
	// Giá trị khởi tạo sẽ là chuỗi rỗng

	// khởi tạo state listTask để lưu lại danh sách task
	const [listTask, setListTask] = useState([]);
	// Giá trị khởi tạo sẽ là mảng rỗng

	// tạo hàm để ghi lại giá trị người dùng nhập vào state 'todo'
	const handleOnChange = e => {
		// ở đây ta gán hàm 'handleOnChange' với sự kiện 'change' của 'input'. Như vậy mỗi lần giá trị của ô 'input' thay đổi thì hàm này sẽ được call lại
		// Tham số 'e' sẽ đại diện cho 'event' của sự kiện 'change'.

		// target là element vừa tạo ra sự kiện 'change' => target ở đây là thẻ 'input'
		const target = e.target;

		// lấy giá trị của ô 'input' bằng thuộc tính value và update lại state
		setTodo(target.value);
	};

	// tạo hàm để kiểm tra và lưu lại bản ghi todo khi người dùng nhấn 'Lưu'
	const submitTodo = () => {
		// kiểm tra 'todo' có thỏa mãn điều kiện không

		if (!todo.trim()) {
			// nếu giá trị todo sau khi trim là rỗng thì dừng ở đây và cảnh báo
			alert('Vui lòng nhập kế hoạch của bạn');
			return;
		}
		// tạo một object tương ứng với model đã cho ở để bài b1 để lưu lại bản ghi
		const obj = {
			id: new Date().getTime(),
			content: todo,
			status_id: 1,
			created_at: new Date().getTime(),
		};
		// reset
		setTodo('');
		// lưu trữ lại obj vào state
		setListTask([...listTask, obj]);
	};

	// Dựa vào listTask ta tiến hành chia nhỏ data làm 3 phần theo status_id
	// status_id = 1 : Mới
	// status_id = 2 : Hoàn thành
	// status_id = 3 : Đã hủy

	const listTaskNew = listTask.filter(task => task.status_id === 1);
	const listTaskFinished = listTask.filter(task => task.status_id === 2);
	const listTaskCanceled = listTask.filter(task => task.status_id === 3);

	// Ta tạo ra 3 hàm để thay đổi trạng thái của task
	const setTaskFinished = task => {
		// clone lại state 'listTask' để thao tác
		const cloneListTask = [...listTask];
		// tìm ra phần tử ứng với task được truyền vào.
		// đọc thêm về method findIndex() để hiểu kĩ hơn.
		const idx = cloneListTask.findIndex(item => item.id === task.id);
		if (idx === -1) {
			// trường hợp không tìm được phần tử thỏa mãn
			return;
		}
		// copy lại task và thay đổi status của bản ghi sang trạng thái mới
		const obj = { ...cloneListTask[idx], status_id: 2 };
		// thay thế task hiện tại trong 'cloneListTask' bằng 'obj' vừa làm ở trên;
		cloneListTask.splice(idx, 1, obj);
		// update lại state 'listTask' thành 'cloneListTask'
		setListTask(cloneListTask);
	};

	const setTaskCanceled = task => {
		const cloneListTask = [...listTask];
		const idx = cloneListTask.findIndex(item => item.id === task.id);
		if (idx === -1) {
			return;
		}
		const obj = { ...cloneListTask[idx], status_id: 3 };
		cloneListTask.splice(idx, 1, obj);
		setListTask(cloneListTask);
	};

	const setTaskNew = task => {
		const cloneListTask = [...listTask];
		const idx = cloneListTask.findIndex(item => item.id === task.id);
		if (idx === -1) {
			return;
		}
		const obj = { ...cloneListTask[idx], status_id: 1 };
		cloneListTask.splice(idx, 1, obj);
		setListTask(cloneListTask);
	};

	// phần view
	return (
		<div>
			{/* Khối nhập liệu */}
			<div>
				<input type='text' value={todo} placeholder='Bạn có kế hoạch gì ....' onChange={handleOnChange} />
				<button onClick={submitTodo}>Lưu</button>
			</div>

			{/* Khối kết quả */}
			<div className='row'>
				<div className='col-4'>
					<h3>Mới</h3>
					{listTaskNew.map(task => (
						<NewTask key={task.id} task={task} setTaskFinished={setTaskFinished} setTaskCanceled={setTaskCanceled} />
					))}
				</div>
				<div className='col-4'>
					<h3>Đã hoàn thành</h3>
					{listTaskFinished.map(task => (
						<FinishedTask key={task.id} task={task} setTaskCanceled={setTaskCanceled} />
					))}
				</div>
				<div className='col-4'>
					<h3>Đã hủy</h3>
					{listTaskCanceled.map(task => (
						<CanceledTask key={task.id} task={task} setTaskNew={setTaskNew} />
					))}
				</div>
			</div>
		</div>
	);
}

// Tạo ra 3 component ứng với 3 trạng thái task
// props của component này là 'task'
function NewTask({ task, setTaskFinished, setTaskNew }) {
	return (
		<div>
			<p>{task.created_at}</p>
			<p>{task.content}</p>
			<div>
				<button
					onClick={() => {
						setTaskFinished(task);
					}}
				>
					Hoàn thành
				</button>
				<button
					onClick={() => {
						setTaskNew(task);
					}}
				>
					Hủy
				</button>
			</div>
		</div>
	);
}
function FinishedTask({ task, setTaskCanceled }) {
	return (
		<div>
			<p>{task.created_at}</p>
			<p>{task.content}</p>
			<div>
				<button
					onClick={() => {
						setTaskCanceled(task);
					}}
				>
					Hủy
				</button>
			</div>
		</div>
	);
}
function CanceledTask({ task, setTaskNew }) {
	return (
		<div>
			<p>{task.created_at}</p>
			<p>{task.content}</p>
			<div>
				<button
					onClick={() => {
						setTaskNew(task);
					}}
				>
					Khôi phục
				</button>
			</div>
		</div>
	);
}

export default Example;`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
								/>
							</TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
			</DisclosurePanel>
		</Disclosure>

		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '../../components/Documentation/PageMarkBook.vue';
	import PageHeading from '../../components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '../../components/FakeTerminalUI.vue';
	import DocNextPage from '../../components/DocNextPage.vue';
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
				message: '',
				listData: [
					{
						id: 1,
						content: 'Làm bài tập về nhà',
						status_id: 1,
						created_at: new Date().getTime(),
					},
					{
						id: 2,
						content: 'Tập gym',
						status_id: 2,
						created_at: new Date().setHours(2, 0, 0, 4),
					},
					{
						id: 3,
						content: 'Đi coffee',
						status_id: 3,
						created_at: new Date().setHours(2, 0, 0, 4),
					},
					{
						id: 4,
						content: 'Dọn nhà đón tết',
						status_id: 1,
						created_at: new Date().setHours(5, 0, 0, 4),
					},
					{
						id: 5,
						content: 'Gói bánh',
						status_id: 1,
						created_at: new Date().setHours(16, 0, 0, 4),
					},
				],
				counter: 0,
				email: '',
				password: '',
				pagePagination: {
					next: {
						title: 'Comming soon...',
						link: '/practice/e_2',
					},
					prev: {
						title: 'Bài 1 - Array Methods',
						link: '/practice/e_1',
					},
				},
			};
		},
		computed: {
			newData() {
				return this.listData.filter(o => o.status_id === 1);
			},
			finishedata() {
				return this.listData.filter(o => o.status_id === 2);
			},
			deletedata() {
				return this.listData.filter(o => o.status_id === 3);
			},
		},
		methods: {
			// parseToString(){
			// 	const div = document.createElement('div')
			// 	div.innerText =
			// }
			formatDateHMDMY,
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
			changeTaskStatus(taskId: number, newStatus: number = 1) {
				if (!taskId) {
					return;
				}
				const matchIdx = this.listData.findIndex(o => o.id === taskId);
				if (matchIdx !== -1) {
					const obj = { ...this.listData[matchIdx] };
					obj.status_id = newStatus;
					this.listData.splice(matchIdx, 1, obj);
				}
			},
			saveTask() {
				if (!this.message.trim()) {
					alert('Vui lòng nhập kế hoạch của bạn');
					return;
				}
				const obj = {
					id: new Date().getTime(),
					content: this.message,
					status_id: 1,
					created_at: new Date().getTime(),
				};
				this.message = '';
				this.listData.push(obj);
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

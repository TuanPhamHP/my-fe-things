<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Sử dụng <b>`ejs template`</b> để dựng UI như sau:</p>
		<div class="py-2"></div>
		<div class="w-full rounded-lg dark:bg-black bg-gray-200 px-4 py-3">
			<nav class="bg-white border-gray-200">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a @click="currentTab = 1" class="flex items-center space-x-3 rtl:space-x-reverse">
						<span class="self-center text-2xl font-semibold whitespace-nowrap">MEGA</span>
					</a>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div class="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul
							class="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
						>
							<li>
								<a
									class="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0"
									@click="currentTab = 1"
									>Home</a
								>
							</li>

							<li>
								<a
									class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
									>Contact</a
								>
							</li>
							<li>
								<button
									type="button"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
									@click="currentTab = 2"
								>
									Get started
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div class="bg-white">
				<div v-if="currentTab === 1" class="max-w-screen-xl bg-white mx-auto p-4">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<img
								src="https://img.freepik.com/free-vector/orange-blue-background-list_23-2149020601.jpg"
								alt=""
								class="rounded-lg d-block mb-5"
							/>
						</div>
						<div class="col-span-1">
							<h1
								class="mb-4 text-4xl text-right pb-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
							>
								We invest in the world’s potential
							</h1>

							<p class="mb-3 text-gray-500 dark:text-gray-400">
								Track work across the enterprise through an open, collaborative platform. Link issues across Jira and
								ingest data from other software development tools, so your IT support and operations teams have richer
								contextual information to rapidly respond to requests, incidents, and changes.
							</p>
							<p class="text-gray-500 dark:text-gray-400">
								Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate
								critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for
								every change.
							</p>
							<button
								type="button"
								class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-1/2 block mx-auto mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								@click="currentTab = 2"
							>
								Get started
							</button>
						</div>
					</div>
				</div>
				<div v-if="currentTab === 2" class="max-w-screen-xl bg-white mx-auto p-4">
					<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
						<div class="col-span-1 h-auto max-w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
							<textarea
								v-model="content"
								name=""
								class="w-full block h-full resize-none text-white bg-transparent p-4 outline-0 placeholder:text-white"
								rows="5"
								placeholder="Xin chào, bạn có ý tưởng gì..."
								@keyup.exact.enter="handleSubmit"
							></textarea>
						</div>

						<div
							v-for="item in listTodo"
							:key="item.id"
							class="col-span-1 p-4 min-h-[150px] h-auto max-w-full rounded-lg bg-gradient-to-r from-cyan-500/50 to-blue-500/50"
						>
							<small class="block mb-3">
								{{ formatDateHMDMY(item.created_at) }}
							</small>
							{{ item.content }}
						</div>
					</div>
				</div>
				<footer class="bg-white rounded-lg shadow">
					<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
						<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
							>© 2024 Notes App by Phạm Anh Tuấn. All Rights Reserved.
						</span>
					</div>
				</footer>
			</div>
		</div>
		<p className="text-slate-900 dark:text-white mt-5">Yêu cầu:</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			1 - Sử dụng layout để tái sử dụng phần <b>`header`</b> và <b>`footer`</b>.
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			2 - Sử dụng Routes để chuyển các route <b>'/' - Home</b> và <b>`/notes` - Note</b> (phần Note) được hiển thị khi
			click vào btn <b>Get started</b>.
		</p>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { formatDateHMDMY } from '../../../helpers/formatter';
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
				content: '',
				listTodo: [] as {
					id: number;
					content: string;
					status_id: number;
					created_at: number;
				}[],
				pagePagination: {
					next: {
						title: 'Danh sách',
						link: '/nodejs/practice',
					},
					prev: {
						title: 'Bài 1',
						link: '/nodejs/practice/e_1',
					},
				},

				currentTab: 1,
			};
		},
		computed: {},
		methods: {
			formatDateHMDMY,
			handleSubmit() {
				if (!this.content.trim()) {
					return;
				}
				const obj = {
					id: new Date().getTime(),
					created_at: new Date().getTime(),
					content: this.content,
					status_id: 1,
				};
				this.content = '';
				this.listTodo.push(obj);
			},
		},
	};
</script>

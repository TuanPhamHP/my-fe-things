<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp nối bài trước, chúng ta sẽ dựng phần khung HTML cho Component Header trước.
				</p>

				<div class="mb-5">
					<p className="text-slate-900 dark:text-white text-lg my-2">Câu 1:</p>
					<TabGroup>
						<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded py-1 px-1">
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
							<TabPanel
								><VCodeBlock
									:code="`// danh sách các data có price >= 5.000.000
[

];`"
									highlightjs
									lang="javascript"
									theme="tomorrow-night-bright"
							/></TabPanel>
							<TabPanel
								><VCodeBlock
									:code="`
`"
									highlightjs
									lang="HTML"
									theme="tomorrow-night-bright"
							/></TabPanel>
						</TabPanels>
					</TabGroup>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					(❁´◡`❁) Buổi 01 - Setup & download resource đã xong.
					<br />
					<br />
					Mệt quá, nghỉ ngơi đợi bài sau làm tiếp nào.
				</p>
				<!-- END -->
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Note: Trong các thẻ còn rất nhiều thuộc tính riêng khác nhưng tôi tạm thời chỉ viết tới đây. Các bạn có thể
					đọc thêm về các thẻ khác tại
					<a
						href="https://www.w3schools.com/css/default.asp"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						W3 School
					</a>
				</p>
				<DocNextPage :pagination="pagePagination" />
			</div>
			<!-- <PageMarkBook /> -->
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
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.trainingTask
					.getPagination({ appIds: 'html-basic', currentDocId: 'htmle_01' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

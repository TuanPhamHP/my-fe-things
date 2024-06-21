<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp nối bài trước, ở bài này chúng ta tiếp tục học về <b>`JSX`</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					JSX cho phép chúng ta viết logic và view cùng một lúc, thông thường chúng ta sẽ viết kèm cả logic nằm trong
					view. Bài này sẽ giúp ta hiểu rõ và làm được vấn đề nói trên.
				</p>

				<PageHeading text="JS in view" addOnClass="text-left" markedAs="jsx-passing-strings" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong trường hợp chúng ta muốn truyền một chuỗi cố định (fixed) vào JSX thì chúng ta chỉ đơn giản ném chúng
					vào single-quote (nháy đơn: '') hoặc double-quotes (nháy đôi: "") là được
					<br />
					<br />
					Ví dụ nè:
				</p>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`// ~/src/components/Avatar.jsx
import React from 'react';

export default function Avatar() {
  return (
    <img
      className='avatar'
      src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png'
      alt='User Avatar'
			width='64px'
    />
  );
}
`"
							highlightjs
							lang="javascript"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					NHƯNG, nếu data của chúng ta là data động, tức là đường link ảnh không còn cố định mà sẽ được trả ra từ một
					object data thì sao nhỉ?
					<br />
					<br />
					Lúc này rõ ràng ta sẽ phải tìm cách để inject cái dynamic data kia vào trong view, hay nói cách khác - chúng
					ta cần tìm cách viết Javascript trong phần view.
					<b>Để viết JS trong view chúng ta sử cụng cặp curly-braces (cặp ngoặc nhọn {{ `{ }` }}).</b>
				</p>
				<VCodeBlock
					:code="`// ~/src/components/Avatar.jsx
import React from 'react';

export default function Avatar() {
	const user = {
		avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png',
		name: 'John Doe'
	}
  return (
    <img
      className='avatar'
      src={user.avatar}
      alt={user.name}
			width='64px'
    />
  );
}
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>

				<PageHeading text="Rule" addOnClass="text-left mt-5" markedAs="jsx-rules-03" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, để viết JS trong phần view, chúng ta sẽ sử dụng cặp curly-braces bao lấy đoạn JS chúng ta muốn viết.
					NHƯNG không phải cứ dùng curly-braces là sẽ viết được JS. Thực tế, curly-braces chỉ có tác dụng khi bạn viết
					theo một trong hai cách sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`As content`</b> nếu bạn viết vào phần content của thẻ
						<FilePath
							>{{`
							<h1>Tên người dùng: {user.name}</h1>
							`}}</FilePath
						>
						thì nó sẽ có tác dụng, nhưng nếu bạn dùng nó như tên thẻ thì không.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`As attributes`</b> nếu bạn viết vào phần attributes của thẻ
						<FilePath
							>{{`
							<img src="{user.avatar}" />
							`}}</FilePath
						>
						thì nó sẽ có tác dụng.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Thực hành nào:
					<button
						class="btn px-2 py-1 bg-green-400 rounded dark:bg-green-500"
						@click="$router.push('/reactjs-basic/practice/ee_2')"
					>
						Click me
					</button>
				</p>
				<!-- END -->
				<DocNextPage :pagination="pagePagination" />
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
	import { apiResponde } from 'models';
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
				pagePagination: {
					next: {
						title: 'Render List Data',
						link: 'reactjs-basic/documentation/render-list-data',
					},
					prev: {
						title: 'Hooks',
						link: 'reactjs-basic/documentation/hooks',
					},
				},
				number: 0,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 'r-6' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
			demoFnc1() {
				this.number++;
				alert(this.number - 1);
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-6">
		<div class="w-full flex gap-2">
			<div class="grow">
				<PageHeading text="CSS trong ReactJS" addOnClass="text-left" markedAs="styled-component" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Trong phần này chúng ta sẽ làm quen với một vài cách thường được sử dụng để css trong ứng dụng ReactJs.
				</p>
				<PageHeading text="Inline Style" addOnClass="text-left" markedAs="inline-style" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Cũng giống như <b>`Inline style`</b> trong HTML 5, ta có thể viết css trực tiếp vào trong các thẻ ở phần view
					của component thông qua attribute style.
				</p>
				<VCodeBlock
					:code="`import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {

	return (
		<div style={{ backgroundColor:'red' }}>
			<p style={{ fontSize:'40px', color:'#ffffff' }}> Hello world</p>
		</div>
	);
};

export default ExampleComponent;`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg">
					Cần lưu ý là phần view của component được viết bằng JSX nên style cần được viết dưới dạng object.
					<br />
					<br />
					Các property name phải chuyển từ dạng 'dash' sang 'carmelCase'. <br />
					Eg: font-size => fontSize; background-color => backgroundColor;ư
					<br />
					<br />
					Giữa các cặp giá trị property: value sẽ ngăn cách nhau bởi dấu "," thay vì ";" do được viết dưới dạng object.
					<br />
					Eg: {fontSize:'40px', color:'#ffffff'}
				</p>
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Doc chưa hoàn thành. Comming soon ...
				</p>
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Note: Còn rất nhiều hooks khác nhưng tôi tạm thời chỉ viết tới đây, lí do thì đương nhiên là lười rồi. Các bạn
					có thể đọc thêm về hooks tại
					<a
						href="https://react.dev/reference/react/hooks"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						DOC
					</a>
				</p>
				<div class="py-2 mt-5 border-t text-indigo-500 dark:text-white flex w-full items-center justify-between">
					<div
						class="text-indigo-500 dark:text-white cursor-pointer flex items-center gap-2 hover:bg-gray-100/25 w-fit px-2 rounded-lg"
						@click="$router.push('/documentation')"
					>
						<Icon name="solar:double-alt-arrow-left-bold" size="32px" />
						<span>Trở về danh sách Document</span>
					</div>
				</div>
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '../../components/Documentation/PageMarkBook.vue';
	import PageHeading from '../../components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '../../components/FakeTerminalUI.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock },
	};
</script>

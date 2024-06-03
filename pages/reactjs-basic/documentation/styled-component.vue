<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="CSS trong ReactJS" addOnClass="text-left" markedAs="styled-component" :lvl="0" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phần này chúng ta sẽ làm quen với một vài cách thường được sử dụng để css trong ứng dụng ReactJs.
				</p>
				<PageHeading text="Inline Style" addOnClass="text-left" markedAs="inline-style" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Cũng giống như <b>`Inline style`</b> trong HTML 5, ta có thể viết css trực tiếp vào trong các thẻ ở phần view
					của component thông qua attribute style.
				</p>
				<VCodeBlock
					:code="`import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
	// C1: tạo object chứa style
	const myButtonStyle = {
		display:'block',
		width: 'fit-content',
		padding: '12px 16px',
		color: '#fff',
		backgroundColor: '#146eb4'
	}
	return (
		{/*C2: Gán trực tiếp*/}
		<div style={{ backgroundColor:'red' }}>
			<p style={{ fontSize:'40px', color:'#ffffff' }}> Hello world</p>
			<button style={myButtonStyle}>Read more</button>
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
				<PageHeading text="External Stylesheets" addOnClass="text-left" markedAs="external-stylesheets" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ta có thể viết css vào các file <b>`.css `</b> riêng biệt sau đó import vào trong component.
					<br />
					<br />
					<em
						>Note: Nên ưu tiên tạo file <b>`styles.css `</b> tại thư mục
						<label for="" class="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-500">assets/styles</label> hoặc cùng cấp
						với component để dễ quản lý</em
					>
				</p>

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
								CSS
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
								Component
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<VCodeBlock
								:code="` /* file styles.css */
.myComponent {
  color: blue;
  font-size: 16px;
}
`"
								highlightjs
								lang="css"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`// MyComponent.jsx
import React from 'react';
import './styles.css';

const MyComponent = () => {
  return <div className='myComponent'>Hello, World!</div>;
};

export default MyComponent;
`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<div class="mb-5"></div>
				<PageHeading text="Styled Components" addOnClass="text-left" markedAs="css-module" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Gần như tương tự với <b>`Inline Style`</b> Ta có thể viết css vào một biến ngay tại component. Cách này cần
					bạn sự dụng lib <b>`styled-components`</b>
				</p>
				<VCodeBlock :code="styledComponentCode" highlightjs lang="javascript" theme="tomorrow-night-bright" />
				<div class="mb-5"></div>
				<PageHeading text="CSS Module (Recommend)" addOnClass="text-left" markedAs="css-module" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Gần như tương tự với <b>`External Stylesheets`</b> Ta có thể viết css vào các file riêng biệt, những file này
					sẽ có đuôi là <b>.module.css</b>. Bằng cách viết này, mỗi file sẽ export cho ta một object và ta sẽ sử dụng
					object này để style cho component. Cách viết này sẽ giúp ta tách biệt css thành các module cụ thể, đây là cách
					được sử dụng rất rộng rãi trong React.
					<br />
					<br />
					<em
						>Note: Nên ưu tiên tạo file <b>`styles.module.css `</b> tại thư mục
						<label for="" class="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-500">assets/styles</label> hoặc cùng cấp
						với component để dễ quản lý</em
					>
				</p>

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
								CSS
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
								Component
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<VCodeBlock
								:code="` /* file styles.module.css */
.myComponent {
  color: blue;
  font-size: 16px;
}
`"
								highlightjs
								lang="css"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`// MyComponent.jsx
import React from 'react';
import styles from './styles.module.css';

const MyComponent = () => {
  return <div className={styles.myComponent}>Hello, World!</div>;
};

export default MyComponent;
`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>

				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Ngoài ra còn 1 số cách như viết JSS bằng các lib như <b>`emotion`</b>, <b>`jss`</b> ..., các bạn có thể
					research thêm nếu cần.
				</p>
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
						title: 'State và Props',
						link: 'reactjs-basic/documentation/state-and-prop',
					},
					prev: {
						title: 'Hooks',
						link: 'reactjs-basic/documentation/hooks',
					},
				},
				styledComponentCode:
					"import styled from 'styled-components'; \n\nconst StyledDiv = styled.div` color: blue;\n font-size: 16px; `; \n\nconst MyComponent = () => { \n  return <StyledDiv\>Hello, World!</StyledDiv\>; \n}; \n export default MyComponent ;",
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 3 })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

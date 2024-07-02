<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này, chúng ta sẽ cùng tìm hiểu cách xử lý event (VD: click, keypress ...) trong <b>`JSX`</b>
				</p>

				<PageHeading text="Thêm event handlers" addOnClass="text-left" markedAs="jsx-event-handlers" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để thêm một event-handler, chúng ta cần định nghĩa một function để xử lý sự kiện. Sau đó truyền trực tiếp
					function đó vào trong element JSX như một prop.
					<br />
					<br />
					Ví dụ nè:
				</p>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
					<div class="col-span-2">
						<VCodeBlock
							:code="`// ~/src/components/Avatar.jsx
import React from 'react';

export default function Avatar() {
	// b1: định nghĩa hàm xử lý 
	const clickHandler = ()=>{
		alert('Yay, you just clicked the Avatar component')
	}

	// b2: truyền vào element qua prop 'onClick'
  return (
    <img
		className='avatar'
		src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png' alt='User Avatar'
		width='64px'
		onClick={clickHandler}
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
					Quá đơn giản, lúc này hàm <FilePath>clickHandler</FilePath> được gọi là một <b>` event handler `</b>
					<br />
					<br />
					Dưới đây là một số tính chất (optional) của <b>` event handler `</b> nói chung:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Thường được định nghĩa trực tiếp tại component.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Tên bắt đầu bằng từ <b>handle</b> vào tiếp sau là tên của event mà ta muốn xử lý . VD: handleClick,
						handleSubmit ...
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngoài ra, <b>` event handler `</b> cũng có thể được định nghĩa trực tiếp tại JSX.
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
		onClick={ 
			()=>{alert('Okey')}
		}
    />
  )};
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Lưu ý:</b> khi truyền event-handler vào JSX, các bạn cần phải đảm bảo việc các bạn truyền vào một define,
					không phải excuted-function. Lý do: JSX sẽ luôn thực thi các đoạn code JS nằm trong <b>`{{ `{ }` }}`</b>
					trước khi render.
					<br />
					<br />
					=> Nếu bạn truyền vào một <b>excuted-function</b> thì thằng này sẽ được thực thi ngay lập tức khi render mà
					không cần sự kiện xảy ra.
				</p>

				<VCodeBlock
					:code="` const handleClick = ()=>{
	alert('You clicked me!')
}					
// ❌❌ Thằng này sẽ được thực thi ngay khi render mà không cần người dùng click
<button onClick={ handleClick() }>
// ✅✅ Thằng này chỉ thực thi khi người dùng click
<button onClick={ handleClick }>`"
					highlightjs
					lang="jsx"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Hiểu điều này là cực kì quan trọng, trong trường hợp <b>`event-handler`</b> tác động đến state (gây ra
					unlimit-render) hoặc cần truyền params (sẽ sai params) vào handler.
				</p>
				<PageHeading text="Một số lưu ý" addOnClass="text-left mt-5" markedAs="note" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Dưới đây là một số lưu ý nhanh khi chúng ta làm việc với <b>` event handler `</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`Event as default params`</b> cũng giống như <FilePath>addEventListeners</FilePath> trong DOM,
						<b>event-handlers</b> cũng sẽ có một param là <b>event</b>, param này là một object chứa những thông tin của
						event vừa xảy ra và cung cấp một số methods xử lý tương ứng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`Event propagation`</b> JSX cũng có tính chất ` Event propagation ` (sự lan truyền của event). Tức là,
						nếu bạn có component <FilePath> {{`<A> </A>`}}</FilePath> bao lấy <FilePath> {{`<B> </B>`}}</FilePath>, thì
						sự kiện click của <b>B</b> cũng sẽ trigger sự kiện click của <b>A</b>. Nếu muốn bỏ qua tính năng này ta có
						thể dùng <FilePath>event.stopPropagation()</FilePath> tại <b>event handler</b> của thằng B,
						<FilePath>event</FilePath> ở đây chính là object ta đề cập đến ở ý trên.
					</li>
				</ul>

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
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 'r-6-1' })
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

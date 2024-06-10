<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`useReducer`</b> là một hook được sử dụng để ung cấp cách tiếp cận thay thế cho quản lý state trong các
					component. Nó đặc biệt hữu ích cho các state phức tạp và khi logic cập nhật state trở nên phức tạp, ví dụ như
					khi có nhiều kiểu hành động hoặc khi state là một đối tượng phức tạp.
				</p>

				<PageHeading text="B1: Setup Reducer" addOnClass="mt-3" markedAs="reducer-init" :lvl="2" />
				<VCodeBlock
					:code="` // ~src/reducers/counterReducer.js

// initialState là Reducer State
export const initialState = { count: 0 };

// reducer là Reducer Function
export function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: action.payload };
    default:
      throw new Error('Unhandled action type');
  }
}
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ta vừa khởi tạo một reducer có tên là <b>`counterReducer`</b>, tại đây chúng ta có 3 đối tượng chính khi sử
					dụng reducer:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`Reducer Function`: </b> Đây là một hàm nhận vào hai đối số: state hiện tại và một action. Reducer trả về
						state mới dựa trên hành động đó. <br /><span>Cú pháp: <b>`(state, action) => newState`</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`Reducer State`: </b> useReducer trả về một mảng gồm hai phần tử: state hiện tại và hàm dispatch.
						Dispatch là hàm mà bạn gọi để gửi hành động đến reducer.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`Action`: </b>Action là một đối tượng có ít nhất một thuộc tính <b>`type`</b> mô tả hành động đó là gì.
						Nó có thể chứa các dữ liệu bổ sung cần thiết cho việc cập nhật state.
					</li>
				</ul>
				<PageHeading text="B2: Sử dụng reducer trong App" addOnClass="mt-3" markedAs="reducer-using" :lvl="2" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bước trên chúng ta đã hoàn thành việc khởi tạo một reducer, tiếp theo chúng ta sẽ sử dụng reducer này trong
					component:

					<br />
					<br />
					<VCodeBlock
						:code="`// ~/components/Counter.js
import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/counterReducer';

const Counter = () => {
  const [counterState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {counterState.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
    </div>
  );
};

export default Counter;
`"
						highlightjs
						lang="javascript"
						theme="tomorrow-night-bright"
					/>
					<br />
					<b>`{{ `reducer, initialState` }}`</b> Lần lượt là <FilePath>Reducer Function</FilePath> và
					<FilePath>Reducer State</FilePath>
					chúng ta vừa khởi tạo ở bước 1. Ta dùng 2 giá trị này làm biến đầu vào cho hook
					<FilePath>useReducer</FilePath> của react, hook này sẽ trả ra cho chúng ta mảng 2 giá trị lần lượt là
					<b>`state`</b>, và <b>`dispatch`</b>. Ta tiến hành gán chúng vào 2 biến là <b>`counterState`</b> và
					<b>`dispatch`</b> (tương tự như useState á). Lúc này <b>`counterState`</b> đại diện cho object
					<b>`initialState `</b> của reducer => <b>`counterState.count`</b> sẽ trả ra giá trị count ta cần:

					<br />
					<br />
					<VCodeBlock
						:code="` //... code above
return (
    <div>
      <p>Count: {counterState.count}</p>
    </div>
  );
`"
						highlightjs
						lang="javascript"
						theme="tomorrow-night-bright"
					/>

					<br />
					Khi muốn thay đổi giá trị của state <b>count</b> ta cũng buộc phải sử dụng các method riêng được cung cấp
					trong reducer như: <b>increment, decrement...</b> được def trong
					<FilePath>~/reducers/counterReducer.js</FilePath>, lúc này ta sử dụng đến method <b>`dispatch`</b> và truyền
					vào một <FilePath>Action</FilePath> tương ứng:

					<br />
					<br />
					<VCodeBlock
						:code="`  return (
    <div>
      <p>Count: {counterState.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
    </div>
  );
`"
						highlightjs
						lang="javascript"
						theme="tomorrow-night-bright"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Done. Chúng ta vừa tạo và sử dụng một reducer rồi, lưu ý là trong thực tế chúng ta sẽ dùng reducer cho những
					tác vụ phức tạp hơn nhiều (vì reducer ra đời để xử lý mấy cái tác vụ phức tạp mà), ngoài ta thì ta cũng thường
					kết hợp <FilePath>useReducer</FilePath> và <FilePath>useContext</FilePath>
					để quản lý global state cho app của chúng ta.
					<br />
					<br />
					Bạn có thể thử tạo <FilePath>useReducer</FilePath> và <FilePath>useContext</FilePath> để xử lý một Todo App
					xem sao?
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
	import { apiResponde } from 'models';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage },
		data() {
			return {
				pagePagination: {
					prev: {
						title: 'Router',
						link: '/reactjs-basic/documentation/routers',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 'r-i-2' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
<!-- 
https://blog.logrocket.com/authentication-react-router-v6/
https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
-->

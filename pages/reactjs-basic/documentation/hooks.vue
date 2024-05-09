<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Hooks" addOnClass="text-left" markedAs="hooks" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong ReactJS, "Hooks" là các hàm đặc biệt giúp bạn sử dụng các tính năng của React trong các Functional
					Components. Hooks giúp bạn sử dụng state và các tính năng của lifecycle trong các functional components, giúp
					chúng trở nên mạnh mẽ và linh hoạt hơn. Các hooks trở thành một cách tiếp cận chính cho việc quản lý state và
					các khía cạnh khác của component. Dưới đây là một số state thường được dùng trong ReactJS
				</p>
				<PageHeading text="useState" addOnClass="text-left" markedAs="use-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`useState()`</b> là một hook được cung cấp sẵn trong React, chúng được sử dụng để giúp user định nghĩa và
					quản lý state trong RFC. <br />
					Để sử dụng được useEffect, các bạn có thể làm theo các thao tác sau:
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">B1: Import Hook:</p>
				<VCodeBlock
					:code="`// import hook từ thư viện 'react'
import React, { useState } from 'react';`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B2: Sử dụng hook trong Component:
				</p>
				<VCodeBlock
					:code="`// Khởi tạo state mới có tên là 'count'
const [count, setCount] = useState(0);`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<b class="pl-5 inline-block">`count`</b>: Biến chứa giá trị state hiện. <br />
					<b class="pl-5 inline-block">`setCount`</b>: Hàm sử dụng để cập nhật giá trị <b>`count`.</b> <br />
					<b class="pl-5 inline-block">`1`</b>: Giá trị khởi tạo cho state<b>`count`.</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">Ví dụ thực tế:</p>
				<VCodeBlock
					:code="`import React, { useState } from 'react';
function Example() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
}`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<div class="my-10"></div>
				<PageHeading text="useEffect" addOnClass="text-left" markedAs="use-effect" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`useEffect()`</b> là một hook trong React được sử dụng để thực hiện các tác vụ không đồng bộ sau khi render
					một component. Nó giúp quản lý các side effects trong component functional, giống như lifecycle methods trong
					component class. Hoặc được sử dụng để chạy các block code theo một danh sách điều kiện - dependencies. <br />
					Để sử dụng được useEffect, các bạn có thể làm theo các thao tác sau:
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">B1: Import Hook:</p>
				<VCodeBlock
					:code="`// import hook từ thư viện 'react'
import React, { useEffect } from 'react';`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B2: Sử dụng hook trong Component:
				</p>
				<VCodeBlock
					:code="`useEffect(() => {
	// Block 01
  // Các tác vụ không đồng bộ sau khi component được render
  // ...

  // Cleanup function (nếu cần)
  return () => {
    // Thực hiện công việc cleanup (nếu có)
    // ...
  };
}, [dependencies]);
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<b class="pl-5 inline-block">`Block 01`</b>: Là blockcode sẽ được thực thi tùy theo điều kiện của{' '}
					<b>`dependencies`</b>
					<br />
					<b class="pl-5 inline-block">`Cleanup function`</b>: Function sẽ chạy khi <b>Component Unmount</b>{' '} hoặc
					<b>Dependencies</b> thay đổi <br />
					<b class="pl-5 inline-block">`dependencies`</b>: Là một mảng chứa các giá trị khiến effect được kích hoạt lại.
					<br /><br />
					Tùy theo giá trị của dependencies mà useEffect sẽ xác định có cần thiết phải thực thi <b> `Block 01` </b>{' '}
					hay không. Ta có thể phân chúng ra thành các trường hợp sau: <br />
					<b class="pl-5 inline-block">`[]`</b>: useEffect sẽ thực thi 1 lần duy nhất khi{' '}
					<b>`Component Mounted`;</b>
					<br />
					<b class="pl-5 inline-block">`[a,b,c]`</b>: useEffect sẽ thực thi khi{' '}
					<b>bất kì biến nào trong mảng `a,b,c` thay đổi;</b>
					<br />
					<b class="pl-5 inline-block">` `</b>: useEffect sẽ thực thi khi{' '}
					<b>bất kì khi nào Component Update</b>
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">Ví dụ thực tế:</p>
				<VCodeBlock
					:code="`import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    // Gọi mỗi khi component được render hoặc count thay đổi
		// Khi otherCount thay đổi sẽ không khiến effect được chạy lại
    console.log('Effect ran!');

    // Cleanup function (nếu cần)
    return () => {
      console.log('Cleanup!');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
		<div>
      <p>Other Count: {count}</p>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default ExampleComponent;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
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
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage },
		data() {
			return {
				pagePagination: {
					next: {
						title: 'CSS trong React',
						link: 'reactjs-basic/documentation/styled-component',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/documentation',
					},
				},
			};
		},
	};
</script>

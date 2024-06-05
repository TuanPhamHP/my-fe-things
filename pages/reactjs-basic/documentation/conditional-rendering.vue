<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="topTitle" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phần này chúng ta sẽ thực hành việc render dữ liệu dựa vào điều kiện.
					<br />
					<br />
					Trong thực tế, App của bạn thường xuyên phải thay đổi giao diện phụ thuộc vào các điều kiện khác nhau.
					<br />
					VD: Tuỳ thuộc vào việc người dùng đăng nhập hay chưa mà chúng ta sẽ hiển thị giao diện khác nhau, hay sự thay
					đổi giao diện phụ thuộc vào loại sản phẩm.
					<br />
					Trong React, để giải quyết vấn đề này ta có thể sử dụng các câu lệnh điều kiện của javascript để quyết định
					xem giao diện sẽ được thay đổi như thế nào.
				</p>

				<PageHeading text="Prepare data" addOnClass="text-left" markedAs="prepare-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Giả sử chúng ta có một component là <b>`TodoList`</b> mang ý nghĩa hiển thị ra danh sách các công việc đã được
					note.
					<br />
					Mỗi một task trong <b>`TodoList`</b> được hiển thị bởi một component là <b>`Todo`</b>
					<br />
					<br />
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`// dir: ~/src/components/TodoList.jsx
import React from 'react';
import Todo from './Todo.jsx'
export default const TodoList = ()=>{
	// sử dụng Boootstrap 5 để dựng UI.
	return (
		<div className='card col-12 col-md-4 col-lg-3' >
			<Todo content={'Đánh răng rửa mặt'} isDone={true} />
			<Todo content={'Tập thể dục'} isDone={false} />
		</div>
	)
}`"
							highlightjs
							length
							lang="JSX"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`// dir: ~/src/components/Todo.jsx
import React from 'react';
export default const Todo = ({content, isDone})=>{
	// sử dụng Boootstrap 5 để dựng UI.
	return (
		<div className='border mb-3 px-3 py-3' >
			<h1>Nội dung: {content}</h1>
			<h3>Trạng thái: {isDone ? ✔️ : ❌}</h3>
		</div>
	)
}`"
							highlightjs
							length
							lang="javascript"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở ví dụ trên, <b>`Todo`</b> được nhận vào 2 props là <b>content, isDone</b>. Trong đó <b>isDone</b> là props
					được dùng để xác định trạng thái của <b>`Todo`.</b>
					<br />
					Chúng ta sẽ hiển thị dấu ✔️ nếu công việc đã được hoàn thành và dấu ❌ nếu ngược lại.
				</p>
				<div class="w-full rounded-lg bg-black px-4 py-3">
					<div class="border mb-3 px-3 py-3">
						<h1 class="text-white">Nội dung: Đánh răng rửa mặt</h1>
						<h3 class="text-white">Trạng thái: ✔️</h3>
					</div>
					<div class="border mb-3 px-3 py-3">
						<h1 class="text-white">Nội dung: Tập thể dục</h1>
						<h3 class="text-white">Trạng thái: ❌</h3>
					</div>
				</div>
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
						title: 'Comming soon...',
						link: 'reactjs-basic/documentation/styled-component',
					},
					prev: {
						title: 'State và Props',
						link: 'reactjs-basic/documentation/state-and-prop',
					},
				},
				number: 0,
				productCardCode: ` // dir: ~/src/components/ProductCard.jsx
import React from 'react';
export default const ProductCard = ({productData})=>{
	// sử dụng Boootstrap 5 để dựng UI.
	return (
		<div className="card col-12 col-md-4 col-lg-3" >
			<img src={productData.image} className="card-img-top" alt={productData.name}>
			<div className="card-body">
				<h5 className="card-title">
					{productData.name}
				</h5>
				<p className="card-text">
					{productData.price}	đ
				</p>
				<p className="card-text">
					{productData.description}	
				</p>
				<a href="#" className="btn btn-primary">Buy now</a>
			</div>
		</div>
	)
}`,
				mappingProductCardCode: `import React,{ useState } from 'react';
import ProductCard from './components/ProductCard'; // import component 'ProductCard' ở phần trước
export default const ProductCard = ({productData})=>{
	// sử dụng Boootstrap 5 để dựng UI.
	const [listData, setListData] = useState([
		// ... list data đã cho từ đầu.
	])

	return (
		<div className="container" >
			<div className="row" >
					{
						listData.map((product)=>{
							return <ProductCard key={product.id} productData={product} />
						})
					}
			</div>
		</div>
	)
}`,
				listData: [
					{
						id: 1,
						name: 'Giày Trainer Dropset 2.0 Eartch',
						price: 3500000,
						image:
							'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
						description: 'Đây là dataplaceholder của sản phẩm',
					},
					{
						id: 2,
						name: 'Giày Trainer Dropset 2',
						price: 3500000,
						image:
							'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
						description: 'Đây là dataplaceholder của sản phẩm',
					},
					{
						id: 3,
						name: 'Giày Alphabounce+',
						price: 2400000,
						image:
							'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
						description: 'Đây là dataplaceholder của sản phẩm',
					},
					{
						id: 4,
						name: 'Giày Galaxy 6',
						price: 1500000,
						image:
							'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
						description: 'Đây là dataplaceholder của sản phẩm',
					},
					{
						id: 5,
						name: 'Giày GAZELLE',
						price: 2500000,
						image:
							'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
						description: 'Đây là dataplaceholder của sản phẩm',
					},
					{
						id: 6,
						name: 'Giày Ultraboost 1.0',
						price: 4500000,
						image:
							'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
						description: 'Đây là dataplaceholder của sản phẩm',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 'r-7' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-6">
		<div class="w-full flex gap-2">
			<div class="grow">
				<PageHeading text="Render list data trong ReactJs" addOnClass="text-left" markedAs="topTitle" :lvl="0" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Trong phần này chúng ta sẽ thực hành việc render dữ liệu là một mảng từ State.
				</p>

				<PageHeading text="Prepare data" addOnClass="text-left" markedAs="prepare-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">Cho mảng dữ liệu sau:</p>
				<VCodeBlock
					:code="`const listData = [
		{
			id:1,
			name: 'Giày Trainer Dropset 2.0 Eartch',
			price: 3500000,	
			image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
			description: 'Đây là dataplaceholder của sản phẩm'
		},
		{
			id:2,
			name: 'Giày Trainer Dropset 2',
			price: 3500000,	
			image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
			description: 'Đây là dataplaceholder của sản phẩm'
		},
		{
			id:3,
			name: 'Giày Alphabounce+',
			price: 2400000,	
			image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
			description: 'Đây là dataplaceholder của sản phẩm'
		},
		{
			id:4,
			name: 'Giày Galaxy 6',
			price: 1500000,	
			image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
			description: 'Đây là dataplaceholder của sản phẩm'
		},
		{
			id:5,
			name: 'Giày GAZELLE',
			price: 2500000,	
			image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
			description: 'Đây là dataplaceholder của sản phẩm'
		},
		{
			id:6,
			name: 'Giày Ultraboost 1.0',
			price: 4500000,	
			image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
			description: 'Đây là dataplaceholder của sản phẩm'
		}
];`"
					highlightjs
					length
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Các bạn có thể copy mảng dữ liệu trên và sử dụng là state của component.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Mỗi dữ liệu trong mảng <b>`listData`</b> nói trên sẽ đại diện cho 1 sản phẩm.
					<br />
					<br />
					=> từ mảng <b>`listData`</b> tôi cần phải trả ra 1 mảng mới là danh sách các thẻ sản phẩm.
				</p>
				<PageHeading text="Tạo ProductCard Component" addOnClass="text-left" markedAs="prepare-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Tiếp theo, chúng ta sẽ tạo ra 1 component tên là <b>`ProductCard`</b>
					dùng để hiển thị ra một khối sản phẩm
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					<b>`ProductCard`</b> sẽ nhận vào prop là thông tin của 1 sản phẩm, tương ứng với 1 item trong mảng
					<b>`listData`</b> ở trên. Ở đây tôi sẽ đặt tên cho prop này là <b>`productData`</b>
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
								Demo
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
								<div
									class="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition flex flex-col"
									style="width: 400px"
								>
									<img
										src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg"
										class="rounded-t-lg w-full h-[260px] object-cover"
										alt="{productData.name}"
									/>
									<div class="card-body text-gray-900 dark:text-white px-3 py-2">
										<h5 class="card-title mb-2 text-2xl font-bold tracking-tight">Giày Trainer Dropset 2</h5>
										<p class="card-text">3500000 đ</p>
										<p class="card-text my-3">Đây là dataplaceholder của sản phẩm</p>
										<a href="#" class="btn btn-primary block bg-green-500 w-fit px-2 py-1 rounded text-white"
											>Buy now</a
										>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock :code="productCardCode" highlightjs length lang="javascript" theme="tomorrow-night-bright" />
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg">
					Phần view ở trên là ví dụ sau khi đã có <b>`productData`.</b>
					<br />
					<br />
					Như vậy nhiệm vụ tiếp theo của chúng ta là tìm cách để đổ data từ mảng
					<b>`listData`</b> vào trong component <b>`ProductCard`</b>, với mỗi phần tử trong mảng ứng với một
					<b>`ProductCard`</b>.
					<br />
					<br />
					Tôi sẽ sử dụng method <b>`map()`</b> của array để thực hiện việc trên.
				</p>
				<DocNextPage :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '../../components/Documentation/PageMarkBook.vue';
	import PageHeading from '../../components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '../../components/FakeTerminalUI.vue';
	import DocNextPage from '../../components/DocNextPage.vue';
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
						link: '/documentation/styled-component',
					},
					prev: {
						title: 'Hooks',
						link: '/documentation/hooks',
					},
				},
				number: 0,
				productCardCode: `import React from 'react';
export default const ProductCard = ({productData})=>{
	// sử dụng Boootstrap 5 để dựng UI.
	return (
		<div className="card" >
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
		methods: {
			demoFnc1() {
				this.number++;
				alert(this.number - 1);
			},
		},
	};
</script>

<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Render list data trong ReactJs" addOnClass="text-left" markedAs="topTitle" :lvl="0" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phần này chúng ta sẽ thực hành việc render dữ liệu là một mảng từ State.
				</p>

				<PageHeading text="Prepare data" addOnClass="text-left" markedAs="prepare-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Cho mảng dữ liệu sau:</p>
				<VCodeBlock
					:code="`const listData = [
					{
						id: 1,
						name: 'Bàn ăn Bali gỗ MDF chất lượng cao',
						price: 3500000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwn5gpb3ysb41',
						description: '✅ Sử dụng công nghệ sơn gốc nước thân thiện với môi trường và vô hại nhập khẩu để sơn mặt bàn. Nó có thể khô tới 10 năm và bề mặt trở nên mịn màng hơn khi chạm vào bằng tay.',
					},
					{
						id: 2,
						name: 'Bàn trang điểm Bali kiểu dáng Bắc Âu',
						price: 3500000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvppy59x7ywp8d',
						description:
							'✅ Chất liệu: Ván sợi mật độ trung bình (MDF) \n✅ Kích thước thùng carton: 108x46x15cm \n✅ Quy cách đóng gói: 14kg',
					},
					{
						id: 3,
						name: ' Bàn Chữ L Bàn Làm Việc Mặt Gỗ Mdf Chống Xước Khung Thép Chịu Lực',
						price: 780000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwknmcpydp5b3',
						description:
							'✅Bàn làm việc chữ L phù hợp với mọi không gian.\n✅Mặt bàn được làm từ chất liệu Melamine hoặc Laminate chống xước, chống cháy kết hợp công nghệ forming tiên tiến nên được bo tròn tạo nên những đường nét mềm mại.\n✅Chân bàn được làm bằng sắt phun sơn tĩnh điện hạn chế tối đa việc gỉ sét như các loại sắt sơn gia công thông thường, đảm bảo tính thẩm mỹ và cực kỳ bền bỉ',
					},
				];`"
					highlightjs
					length
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các bạn có thể copy mảng dữ liệu trên và sử dụng là state của component.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Mỗi dữ liệu trong mảng <b>`listData`</b> nói trên sẽ đại diện cho 1 sản phẩm.
					<br />
					<br />
					=> từ mảng <b>`listData`</b> tôi cần phải trả ra 1 mảng mới là danh sách các thẻ sản phẩm.
				</p>
				<PageHeading text="Tạo ProductCard Component" addOnClass="text-left" markedAs="prepare-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo, chúng ta sẽ tạo ra 1 component tên là <b>`ProductCard`</b>
					dùng để hiển thị ra một khối sản phẩm
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
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
								<div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-4 gap-4">
									<div
										class="relative col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition flex flex-col"
									>
										<img
											:src="listData[0].image"
											class="rounded-t-lg w-full h-[260px] object-cover"
											alt="{productData.name}"
										/>
										<div class="card-body text-gray-900 dark:text-white px-3 py-2">
											<h5 class="card-title mb-2 text-2xl font-bold tracking-tight">{{ listData[0].name }}</h5>
											<p class="card-text">{{ listData[0].price }} đ</p>
											<p class="card-text my-3">{{ listData[0].description }}</p>
											<a href="#" class="btn btn-primary block bg-green-500 w-fit px-2 py-1 rounded text-white"
												>Buy now</a
											>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock :code="productCardCode" highlightjs length lang="javascript" theme="tomorrow-night-bright" />
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Phần view ở trên là ví dụ sau khi đã có <b>`productData`.</b>
				</p>
				<PageHeading text="Map data vào ProductCard" addOnClass="text-left" markedAs="map-data" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy nhiệm vụ tiếp theo của chúng ta là tìm cách để đổ data từ mảng
					<b>`listData`</b> vào trong component <b>`ProductCard`</b>, với mỗi phần tử trong mảng ứng với một
					<b>`ProductCard`</b>.
					<br />
					<br />
					Tôi sẽ sử dụng method <b>`map()`</b> của array để thực hiện việc trên.
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
								<div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-4 gap-4">
									<div
										v-for="item in listData"
										:key="item.id"
										class="col-span-1 relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition flex flex-col"
									>
										<img
											:src="item.image"
											class="rounded-t-lg w-full h-[260px] object-cover"
											alt="{productData.name}"
										/>
										<div class="card-body text-gray-900 dark:text-white px-3 py-2">
											<h5 class="card-title mb-2 text-2xl font-bold tracking-tight">{{ item.name }}</h5>
											<p class="card-text">{{ item.price }} đ</p>
											<pre class="card-text my-3 w-full text-pretty">{{ item.description }}</pre>
											<a href="#" class="btn btn-primary block bg-green-500 w-fit px-2 py-1 rounded text-white"
												>Buy now</a
											>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="mappingProductCardCode"
								highlightjs
								length
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, chúng ta vừa sử dụng method <b>`map()`</b> của array để trả ra mảng <b>`ProductCard`</b>. Bởi vì
					<b>`map()`</b> sẽ trả ra 1 mảng mới có số lượng phần tử bằng với mảng ban đầu, do vậy ta có thể đảm bảo số
					lượng <b>`ProductCard`</b> bằng với số lượng data trong <b>`listData`</b>. Trong trường hợp bạn chưa hiểu về
					<b>`map()`</b> thì vui lòng tìm hiểu thêm về các method của mảng trong JS, chúng ta sẽ làm việc với các
					methods của array, object rất nhiều.
					<br />
					<br />
					Khi render ra danh sách <b>`ProductCard`</b> bạn có thể thấy tôi có thêm 1 thuộc tính đặc biệt là
					<b>`key={product.id}`</b>, do đây là một danh sách components được render ra từ 1 mảng, React sẽ không thể
					phân biệt các component với nhau, do đó sẽ ảnh hưởng đến việc re-render. React cung cấp cho ta một thuộc tính
					đặc biệt là <b>`key`</b> được dùng như một biến để định danh component, từ đó giúp React có thể phân biệt
					chúng với nhau trên Virtual DOM và xử lí các tác vụ một cách chính xác.
					<br />
					<br />
					<b
						>Note: Key phải là một giá trị unique, nếu key trong cùng 1 list bị trùng thì việc đặt key không có ý
						nghĩa.</b
					>
				</p>
				<PageHeading text="End" addOnClass="text-left" markedAs="end-point" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Đến đây chúng ta về cơ bản đã hoàn thành việc render một mảng dữ liệu thành list components trong React.
					<br />
					<br />
					Ở bài tiếp theo, tôi sẽ hướng dẫn các bạn về phần lọc dữ liệu với hook <b>`useEffect()`</b>, method
					<b>filter()</b>.
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
						name: 'Bàn ăn Bali gỗ MDF chất lượng cao',
						price: 3500000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwn5gpb3ysb41',
						description:
							'✅ Sử dụng công nghệ sơn gốc nước thân thiện với môi trường và vô hại nhập khẩu để sơn mặt bàn. Nó có thể khô tới 10 năm và bề mặt trở nên mịn màng hơn khi chạm vào bằng tay.',
					},
					{
						id: 2,
						name: 'Bàn trang điểm Bali kiểu dáng Bắc Âu',
						price: 3500000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvppy59x7ywp8d',
						description:
							'✅ Chất liệu: Ván sợi mật độ trung bình (MDF) \n✅ Kích thước thùng carton: 108x46x15cm \n✅ Quy cách đóng gói: 14kg',
					},
					{
						id: 3,
						name: ' Bàn Chữ L Bàn Làm Việc Mặt Gỗ Mdf Chống Xước Khung Thép Chịu Lực',
						price: 780000,
						image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwknmcpydp5b3',
						description:
							'✅Bàn làm việc chữ L phù hợp với mọi không gian.\n✅Mặt bàn được làm từ chất liệu Melamine hoặc Laminate chống xước, chống cháy kết hợp công nghệ forming tiên tiến nên được bo tròn tạo nên những đường nét mềm mại.\n✅Chân bàn được làm bằng sắt phun sơn tĩnh điện hạn chế tối đa việc gỉ sét như các loại sắt sơn gia công thông thường, đảm bảo tính thẩm mỹ và cực kỳ bền bỉ',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			demoFnc1() {
				this.number++;
				alert(this.number - 1);
			},
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 'r-2-2' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>

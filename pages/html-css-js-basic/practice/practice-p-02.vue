<template>
	<div class="chakra-font punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Chào mừng anh em đến với series thực hành HTML basic.
					<br />
				</p>

				<div class="px-3 py-3 bg-neutral-200 rounded-xl">
					<header>
						<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
							<div class="flex flex-wrap justify-between items-center mx-auto max-w-[1240px]">
								<a href="#" class="flex items-center">
									<img
										src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg"
										class="mr-3 h-6 sm:h-9"
										alt="Flowbite Logo"
									/>
									<span class="self-center text-xl font-semibold whitespace-nowrap"> Furniture World </span>
								</a>
							</div>
						</nav>
					</header>

					<div class="w-full bg-white">
						<div>
							<img src="@/assets/images/furniture-bg.png" alt="" class="w-full h-[550px] object-cover object-bottom" />
						</div>

						<div class="max-w-[1240px] w-[75vw] bg-dark mx-auto py-5">
							<div class="rounded-lg mb-10">
								<h1
									class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl"
								>
									Xin chào (❁´◡`❁)
								</h1>
								<p class="text-center">
									Chào mừng bạn đến với <b>Furniture World</b>, địa chỉ tin cậy cho những ai yêu thích sự sang trọng và
									hiện đại trong từng không gian sống. Chúng tôi tự hào là nhà cung cấp các sản phẩm nội thất cao cấp,
									chuyên về các thiết kế tinh tế như ghế sofa phong cách châu Âu, giường thông minh tích hợp công nghệ,
									bàn ăn hiện đại, và nhiều phụ kiện trang trí thời thượng khác.
								</p>
							</div>
							<div class="max-w-[1240px] w-[75vw] mx-auto my-5">
								<img class="w-full" src="https://cf.shopee.vn/file/vn-11134258-7r98o-lylx97r9vezl4e" alt="" />
							</div>
							<div class="border border-t-1 my-3"></div>
							<div class="flex justify-between items-center mt-5 mb-3">
								<h1
									class="text-3xl w-full font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl"
								>
									#SanPhamCuaChungToi （づ￣3￣）づ╭❤️～
								</h1>
							</div>
							<p class="mb-5 font-normal text-gray-700 product-description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti commodi assumenda dolor a alias illo
								ullam animi.
							</p>
							<div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
								<div class="col-span-1">
									<div class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow">
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-bottom"
												src="@/assets/images/furniture-pd-1.png"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#">
												<h5 class="limit-line-2 h-[50px] mb-2 text-xl font-bold tracking-tight text-gray-900">
													[Pre] Ghế đơn đọc sách, uống trà
												</h5>
											</a>
											<p class="mb-3 text-sm text-gray-700">
												<b>Kích thước:</b> 80cm * 106cm * 54cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700"><b>Nặng:</b> 3kg</p>
											<p class="mb-3 font-normal text-gray-700 product-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti commodi assumenda dolor a
												alias illo ullam animi.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
											</a>
										</div>
									</div>
								</div>
								<div class="col-span-1">
									<div class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow">
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-bottom"
												src="@/assets/images/furniture-pd-2.png"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#" class="block h-13">
												<h5 class="limit-line-2 h-[50px] mb-2 text-xl font-bold tracking-tight text-gray-900">
													[Pre] Bộ bàn ghế đơn côi
												</h5>
											</a>
											<p class="mb-3 text-sm text-gray-700">
												<b>Kích thước:</b> 80cm * 106cm * 54cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700"><b>Nặng:</b> 3kg</p>
											<p class="mb-3 font-normal text-gray-700 product-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti commodi assumenda dolor a
												alias illo ullam animi.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
											</a>
										</div>
									</div>
								</div>
								<div class="col-span-1">
									<div class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow">
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-bottom"
												src="@/assets/images/furniture-pd-1.png"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#">
												<h5 class="limit-line-2 h-[50px] mb-2 text-xl font-bold tracking-tight text-gray-900">
													[Pre] Ghế đơn đọc sách, uống trà
												</h5>
											</a>
											<p class="mb-3 text-sm text-gray-700">
												<b>Kích thước:</b> 80cm * 106cm * 54cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700"><b>Nặng:</b> 3kg</p>
											<p class="mb-3 font-normal text-gray-700 product-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti commodi assumenda dolor a
												alias illo ullam animi.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
											</a>
										</div>
									</div>
								</div>
								<div class="col-span-1">
									<div class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow">
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-bottom"
												src="@/assets/images/furniture-pd-2.png"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#" class="block h-13">
												<h5 class="limit-line-2 h-[50px] mb-2 text-xl font-bold tracking-tight text-gray-900">
													[Pre] Bộ bàn ghế đơn côi
												</h5>
											</a>
											<p class="mb-3 text-sm text-gray-700">
												<b>Kích thước:</b> 80cm * 106cm * 54cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700"><b>Nặng:</b> 3kg</p>
											<p class="mb-3 font-normal text-gray-700 product-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti commodi assumenda dolor a
												alias illo ullam animi.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
											</a>
										</div>
									</div>
								</div>
							</div>
							<a
								href="#"
								class="mt-5 mx-auto block w-[300px] px-3 py-2 text-sm font-medium text-center text-green-700 border border-green-700 rounded-lg"
							>
								Xem thêm
							</a>
							<div class="border border-t-1 my-3"></div>
							<h1
								class="mt-10 mb-4 text-3xl w-full font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl"
							>
								#HotTrend ( •̀ ω •́ )✧
							</h1>
							<p class="text-left mb-5">Cập nhật danh sách các sản phẩm được mua nhiều nhất hàng tháng.</p>
							<div>
								<h2 class="mb-2 text-lg font-semibold text-gray-900">Top danh mục được mua nhiều:</h2>
								<ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside">
									<li>
										<a
											href="https://www.google.com/search?q=Gi%C6%B0%E1%BB%9Dng+ng%E1%BB%A7+th%C3%B4ng+minh"
											target="_blank"
											class="font-semibold text-blue-700 underline"
											>Giường ngủ thông minh</a
										>
										với <span class="font-semibold text-gray-900">324</span> tổng lượt mua.
									</li>
									<li>
										<a
											href="https://www.google.com/search?q=Gh%E1%BA%BF+sofa"
											target="_blank"
											class="font-semibold text-blue-700 underline"
											>Ghế sofa</a
										>
										với <span class="font-semibold text-gray-900">121</span> tổng lượt mua.
									</li>
									<li>
										<a
											href="https://www.google.com/search?q=B%E1%BB%99+t%E1%BB%A7+b%E1%BA%BFp"
											target="_blank"
											class="font-semibold text-blue-700 underline"
											>Bộ tủ bếp</a
										>
										với <span class="font-semibold text-gray-900">119</span> tổng lượt mua.
									</li>
									<li>
										<a
											href="https://www.google.com/search?q=B%C3%A0n+trang+%C4%91i%E1%BB%83m+%26+tab"
											target="_blank"
											class="font-semibold text-blue-700 underline"
											>Bàn trang điểm & tab</a
										>
										với <span class="font-semibold text-gray-900">112</span> tổng lượt mua.
									</li>
								</ol>
							</div>
							<div>
								<!-- <img
									src="	https://www.lanha.vn/wp-content/uploads/2024/06/thiet-ke-noi-that-phong-khach-100.jpg"
									alt=""
									class=""
									width="300px"
								/> -->
							</div>

							<div class="py-3 mt-5 border-t-1 border-solid text-center">
								<span class="text-sm sm:text-center font-semibold"
									>© 2024
									<a target="_blank" href="https://github.com/TuanPhamHP" class="hover:underline">Tuấn phạm™</a>. All
									Rights Reserved.
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class="">
					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Yêu cầu:</b>
						<br />
						<br />
						Clone lại giao diện trên bao gồm cả hiệu ứng, màu sắc.
						<b>Bắt buộc</b> Sử dụng Flexbox để dựng layout.
						<br />
						Lưu ý: Làm bài với theme light của ứng dụng
					</p>
					<div
						v-if="currentTheme === 'dark'"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-center gap-3"
					>
						Click để chuyển theme light
						<svg
							class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
						<ToggleThemeButton />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Tài nguyên:</b>
				</p>
				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Fonts: 'Chakra Petch', sans-serif </b>
					<a
						href="https://fonts.google.com/specimen/Chakra+Petch?preview.text=%5BResin%5D%20Goku%20SSJ%204%201%2F4%20c%E1%BB%B1c%20n%C3%A9t&subset=vietnamese&noto.script=Latn"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						Link
					</a>
				</div>
				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Màu:</b>
					<br />
					<div class="flex">
						<span>- Màu background của header</span>
						<div class="flex gap-1 items-center">
							: #fff
							<div class="w-4 h-4 rounded bg-[#fff]"></div>
						</div>
					</div>
					<div class="flex">
						<span>- Màu text</span>
						<div class="flex gap-1 items-center">
							: #334155
							<div class="w-4 h-4 rounded bg-[#334155]"></div>
						</div>
					</div>
					<div class="flex">
						<span> - Màu button 'Đăng nhập', 'Thêm vào giỏ'</span>
						<div class="flex gap-1 items-center">
							: #15803d
							<div class="w-4 h-4 rounded bg-[#15803d]"></div>
						</div>
					</div>
					<div class="flex">
						<span> - Màu background menu item khi hover</span>
						<div class="flex gap-1 items-center">
							: #15803d47
							<div class="w-4 h-4 rounded bg-[#15803d47]"></div>
						</div>
					</div>
					<div class="flex">
						<span> - Màu background dropdown item khi hover</span>
						<div class="flex gap-1 items-center">
							: #15803d47
							<div class="w-4 h-4 rounded bg-[#15803d47]"></div>
						</div>
					</div>
				</div>

				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Spacing:</b>
					<br />
					<p class="mb-1">
						<span>- Kích thước chung: </span>
						<b>`container-fluid`</b> : 100%; <b>`container`</b> : 1240px;
					</p>
					<p class="mb-1">
						<span>- Kích thước của navigator header: </span>
						width - container-fluid | padding: 8px 4px | font-size: 14px
					</p>
					<p class="mb-1">
						<span>- Kích thước của mỗi item trong menu: </span>
						width - fit-content | padding: 8px 12px | radius: 6px | font-size: 14px
					</p>
					<p class="mb-1">
						<span>- Kích thước của mỗi item trong dropdown: </span>
						padding: 6px 12px | radius: 6px | font-size: 14px
					</p>

					<p class="mb-1">
						<span>- Kích thước của Banner: </span>
						free theo ảnh. Ảnh banner buộc phải full screen.
					</p>

					<p class="mb-1">
						<span>- Kích thước của product card: </span>
					</p>
					<div class="pl-10">
						<p class="mb-1"><b>`Ảnh`</b>: with = 100% | height: 300px;</p>
						<p class="mb-1"><b>`Khối text`</b>: padding: 20px</p>
					</div>
					<div class="pl-[60px]">
						<p class="mb-1"><b>`Tên`</b>: font-size: 20px | bold | height: 80px</p>
						<p class="mb-1"><b>`kích thước, nặng`</b>: font-size: 14px</p>
						<p class="mb-1"><b>`Mô tả`</b>: font-size: 16px</p>
						<p class="mb-1"><b>`button thêm vào giỏ`</b>: font-size: 14px | padding: 8px 12px</p>
					</div>
				</div>
				<!-- END -->

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
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import ToggleThemeButton from '@/components/Buttons/ToggleThemeButton.vue';
	import { useAppStateStore } from '@/store/appState';
	import { storeToRefs } from 'pinia';
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
			ToggleThemeButton,
		},
		setup() {
			const appStateStore = useAppStateStore();
			const { currentTheme } = storeToRefs(appStateStore);
			const { syncCurrentTheme, toggleTheme } = appStateStore;
			syncCurrentTheme();
			return {
				currentTheme,
				syncCurrentTheme,
				toggleTheme,
			};
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
<style lang="scss" scoped>
	.list-item .dropdown {
		display: none;
	}
	.list-item:hover .dropdown {
		display: block;
	}
	.dropdown {
		display: none;
	}
	.has-dropdown:hover .dropdown {
		display: block;
	}
	img {
		transition: 0.2s ease;
	}

	.product-card {
		overflow: hidden;

		transition: 0.2s ease;
	}
</style>

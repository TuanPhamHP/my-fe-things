<template>
	<div class="chakra-font punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Chào mừng anh em đến với series thực hành HTML basic.
					<br />
					Ở phần này chúng ta bắt đầu với việc thực hành tạo một khối <b>Sidebar</b> cho trang web.
				</p>

				<div class="px-3 py-3 bg-neutral-200 rounded-xl">
					<header>
						<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
							<div class="flex flex-wrap justify-between items-center mx-auto max-w-[1240px]">
								<a href="#" class="flex items-center">
									<img
										src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg"
										class="mr-3 h-6 sm:h-9"
										alt="Flowbite Logo"
									/>
									<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Comic World </span>
								</a>
								<div class="flex items-center lg:order-2">
									<a
										href="#"
										class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
										>Đăng nhập</a
									>
									<a
										href="#"
										class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-primary-800"
										>Mua ngay</a
									>
									<button
										data-collapse-toggle="mobile-menu-2"
										type="button"
										class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
										aria-controls="mobile-menu-2"
										aria-expanded="false"
									>
										<span class="sr-only">Open main menu</span>
										<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
												clip-rule="evenodd"
											></path>
										</svg>
										<svg
											class="hidden w-6 h-6"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>
								</div>
								<div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
									<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
										<li>
											<a
												href="#"
												class="block block py-2 px-3 text-white lg:text-green-700 border-b-2 border-green-700 dark:text-white"
												aria-current="page"
												>Trang chủ</a
											>
										</li>
										<li class="relative has-dropdown">
											<a
												href="#"
												class="hover:bg-green-700/25 hover:text-green-700 rounded transition block block py-2 px-3 text-white border-b-2 border-transparent bg-green-700 lg:bg-transparent lg:text-slate-700 dark:text-white"
												>Sản phẩm</a
											>
											<div
												class="absolute dropdown top-100 left-0 bg-white dark:bg-slate-900 w-[220px] py-2 px-1 border rounded shadow-lg"
											>
												<div class="flex items-center gap-1 hover:bg-green-700/25 hover:text-green-700 rounded px-1">
													<img
														src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/197053ad-5569-468b-9a44-9685546c3285/dcjg90g-1463173b-87bb-430e-84d8-3c469915861d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5NzA1M2FkLTU1NjktNDY4Yi05YTQ0LTk2ODU1NDZjMzI4NVwvZGNqZzkwZy0xNDYzMTczYi04N2JiLTQzMGUtODRkOC0zYzQ2OTkxNTg2MWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tInGRLy3j7U_V-dm8aKMsy-A5zHoMd3GRn1SH_Q7DNE"
														class="h-7 w-7 object-contain"
														alt=""
													/>
													<a
														href="#"
														class="text-sm rounded transition block block py-2 px-3 text-white border-b-2 border-transparent bg-green-700 lg:bg-transparent lg:text-slate-700 dark:text-white"
														>Dragon Ball</a
													>
												</div>
												<div class="flex items-center gap-1 hover:bg-green-700/25 hover:text-green-700 rounded px-1">
													<img
														src="https://fumettologica.it/wp-content/uploads/2021/06/jujutsu-kaisen.jpeg"
														class="h-7 w-7 object-contain"
														alt=""
													/>
													<a
														href="#"
														class="text-sm rounded transition block block py-2 px-3 text-white border-b-2 border-transparent bg-green-700 lg:bg-transparent lg:text-slate-700 dark:text-white"
														>Jujutsu kaisen</a
													>
												</div>
												<div class="flex items-center gap-1 hover:bg-green-700/25 hover:text-green-700 rounded px-1">
													<img
														src="https://cdn.custom-cursor.com/db/13369/anime-spy-family-anya-forger-and-a-toy-pointer.png"
														class="h-7 w-7 object-contain"
														alt=""
													/>
													<a
														href="#"
														class="text-sm rounded transition block block py-2 px-3 text-white border-b-2 border-transparent bg-green-700 lg:bg-transparent lg:text-slate-700 dark:text-white"
														>Spy x Family</a
													>
												</div>
											</div>
										</li>
										<li>
											<a
												href="#"
												class="hover:bg-green-700/25 hover:text-green-700 rounded transition block block py-2 px-3 text-white border-b-2 border-transparent bg-green-700 lg:bg-transparent lg:text-slate-700 dark:text-white"
												>Tính năng</a
											>
										</li>
										<li>
											<a
												href="#"
												class="hover:bg-green-700/25 hover:text-green-700 rounded transition block block py-2 px-3 text-white border-b-2 border-transparent bg-green-700 lg:bg-transparent lg:text-slate-700 dark:text-white"
												>Liên hệ</a
											>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</header>

					<div class="w-full bg-white">
						<div>
							<img src="https://images.alphacoders.com/647/647552.jpg" alt="" />
						</div>
						<div class="max-w-[1240px] bg-dark mx-auto py-10">
							<div class="flex justify-between items-center mb-5">
								<h1
									class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
								>
									Dragon Ball
								</h1>
								<img
									src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/197053ad-5569-468b-9a44-9685546c3285/dcjg90g-1463173b-87bb-430e-84d8-3c469915861d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5NzA1M2FkLTU1NjktNDY4Yi05YTQ0LTk2ODU1NDZjMzI4NVwvZGNqZzkwZy0xNDYzMTczYi04N2JiLTQzMGUtODRkOC0zYzQ2OTkxNTg2MWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tInGRLy3j7U_V-dm8aKMsy-A5zHoMd3GRn1SH_Q7DNE"
									class="h-12 object-contain"
									alt=""
								/>
							</div>
							<div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
								<div class="col-span-1">
									<div
										class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
									>
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-top"
												src="https://i.ebayimg.com/images/g/aTsAAOSwMMxe-94F/s-l1200.webp"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#">
												<h5
													class="limit-line-2 h-12 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
												>
													[Resin] Goku 1/4 cực nét
												</h5>
											</a>
											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
												<b>Kích thước:</b> 40cm * 56cm * 24cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400"><b>Nặng:</b> 3kg</p>
											<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 product-description">
												Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui
												lòng liên hệ shop khi order nha.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
												<Icon name="solar:cart-large-2-bold" size="18" class="ml-1" />
											</a>
										</div>
									</div>
								</div>

								<div class="col-span-1">
									<div
										class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
									>
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-top"
												src="https://media.karousell.com/media/photos/products/2022/4/8/original_dragonball_goku_super_1649412048_ec3eb94f_progressive.jpg"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#">
												<h5
													class="limit-line-2 h-12 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
												>
													[Resin] Goku SSJ 4 1/4 cực nét
												</h5>
											</a>
											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
												<b>Kích thước:</b> 22cm * 56cm * 22cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400"><b>Nặng:</b> 3kg</p>
											<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
												Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui
												lòng liên hệ shop khi order nha.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
												<Icon name="solar:cart-large-2-bold" size="18" class="ml-1" />
											</a>
										</div>
									</div>
								</div>

								<div class="col-span-1">
									<div
										class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
									>
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-top"
												src="https://www.clubhousestatues.com/cdn/shop/files/B169DB90-2CDC-4AB7-AE16-57A43041367E.jpg?v=1703168952&width=1946"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#">
												<h5
													class="limit-line-2 h-12 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
												>
													[Resin] Broly
												</h5>
											</a>

											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
												<b>Kích thước:</b> 24cm * 42cm * 14cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400"><b>Nặng:</b> 2,1kg</p>
											<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
												Mô hình Broly Resin cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ
												shop khi order nha.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
												<Icon name="solar:cart-large-2-bold" size="18" class="ml-1" />
											</a>
										</div>
									</div>
								</div>
								<div class="col-span-1">
									<div
										class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
									>
										<a href="#">
											<img
												class="rounded-t-lg w-full h-[300px] object-cover object-top"
												src="https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1"
												alt=""
											/>
										</a>
										<div class="p-5">
											<a href="#">
												<h5
													class="limit-line-2 h-12 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
												>
													[Resin] Vegeta bán thân
												</h5>
											</a>

											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
												<b>Kích thước:</b> 28cm * 37cm * 15cm - (Dài * Cao * Sâu)
											</p>
											<p class="mb-3 text-sm text-gray-700 dark:text-gray-400"><b>Nặng:</b> 1,6kg</p>
											<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
												Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh
												em.
											</p>
											<a
												href="#"
												class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
											>
												Thêm vào giỏ
												<Icon name="solar:cart-large-2-bold" size="18" class="ml-1" />
											</a>
										</div>
									</div>
								</div>
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
	.product-card:hover {
		transform: translateY(-4px);
		img {
			transform: scale(1.1) translateY(-4px);
		}
	}
</style>

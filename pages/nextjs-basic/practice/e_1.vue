<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài 2 - React Functional Component" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5">Xây dựng Ứng dụng Quản lý Đơn Hàng Gà Rán:</p>

		<p className="text-slate-900 dark:text-white mt-5">1/ Tạo 3 trang chính:</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>Trang chủ:</b> Giới thiệu cửa hàng, có nút "Xem Thực Đơn".
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>Trang thực đơn:</b> Hiển thị danh sách món gà và giá tiền.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>Trang chi tiết món: </b> Hiển thị chi tiết về món được chọn.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-5">2/ Tạo layout chung:</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<b>Header, Footer</b> đều phải được sử dụng ở layouts.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-5">
			3/ Sử dụng route động để hiển thị chi tiết từng đơn hàng dựa theo ID.
		</p>
		<PageHeading text="Yêu cầu" addOnClass="text-left" markedAs="req" />
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Khi truy cập <FilePath>/</FilePath>, người dùng thấy lời chào và nút "Xem Thực Đơn".
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Nhấn vào nút sẽ chuyển đến <FilePath>/menu</FilePath>, nơi danh sách các món gà được hiển thị.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Nhấp vào từng món sẽ chuyển đến <FilePath>/menu/[id]</FilePath>, hiển thị chi tiết món gà.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Mọi trang đều có header và footer dùng chung từ layout.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-5">Cho danh sách sản phẩm mẫu:</p>
		<VCodeBlock
			:code="`[
					{
						id: 1,
						name: 'Gà Rán Truyền Thống',
						price: '50,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image: 'https://getngo.vn/wp-content/uploads/2022/12/mot-con-ga-truyen-thong-2.jpg',
					},
					{
						id: 2,
						name: 'Gà Cay Hàn Quốc',
						price: '60,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image:
							'https://cdn.tgdd.vn/Files/2018/12/18/1138838/cung-thuc-hien-mon-ga-cay-han-quoc-cuc-ky-dua-com-202209051440260841.jpg',
					},
					{
						id: 3,
						name: 'Gà Sốt Phô Mai',
						price: '65,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image:
							'https://donchicken.vn/pub/media/catalog/product/cache/8872124951f387c8ded3f228faa55bea/g/a/gakoxuongnuongphomai.jpg',
					},
					{
						id: 4,
						name: '[COMBO] Happy Set - 01',
						price: '165,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image:
							'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/450059941_459972456673605_6320632230997642839_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAxS-DiC5KrvnaoJJxTnyRSPzTWniIlY5I_NNaeIiVjtS660aJGyHd8scCt6K07Xr99m5tsGGYcpP6Xh0-rXCp&_nc_ohc=IE5S_Nmd-F8Q7kNvgHyKcCp&_nc_ht=scontent.fhan14-5.fna&_nc_gid=Axv3PlmQto7B_KD24lbGcyr&oh=00_AYDYfsHtIHFFJHtWLNj3AzfDnSz9mAA5w5neYlB7iUET5w&oe=67126D5C',
					},
				]`"
			highlightjs
			lang="javascript"
			theme="tomorrow-night-bright"
		></VCodeBlock>
		<div class="my-2"></div>
		<div class="grow page-data max-w-full">
			<PageHeading text="UI mẫu" addOnClass="text-left mt-5 mb-2" markedAs="intro" />

			<div class="px-3 py-3 bg-neutral-200 rounded-xl">
				<header>
					<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
						<div class="flex flex-wrap justify-between items-center mx-auto max-w-[1240px]">
							<a href="#" class="flex items-center">
								<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Click-Chick </span>
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
										<!-- <div
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
										</div> -->
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
						<img
							class="w-full max-h-[500px] object-cover object-top"
							src="https://chaochicken.com/upload/hinhanh/panter-2198.png"
							alt=""
						/>
					</div>
					<div class="max-w-[1240px] bg-dark mx-auto py-10">
						<div class="flex justify-between items-center mb-5">
							<h1
								class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
							>
								Must Try
							</h1>
						</div>
						<div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
							<div v-for="item in listData" :key="item.id" class="col-span-1">
								<div
									class="product-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
								>
									<a href="#">
										<img class="rounded-t-lg w-full h-[300px] object-cover object-top" :src="item.image" alt="" />
									</a>
									<div class="p-5">
										<a href="#">
											<h5 class="limit-line-2 h-12 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
												{{ item.name }}
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 product-description">
											{{ item.description }}
										</p>
										<a
											href="#"
											class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
										>
											Xem chi tiết
											<Icon name="solar:cart-large-2-bold" size="18" class="ml-1" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer class="mt-5 border-t-2">
						<div class="mx-auto w-full max-w-screen-xl">
							<div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
								<div>
									<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">Company</h2>
									<ul class="text-gray-500 dark:text-gray-400 font-medium">
										<li class="mb-4">
											<a href="#" class="hover:underline">About</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Careers</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Brand Center</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Blog</a>
										</li>
									</ul>
								</div>
								<div>
									<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">Help center</h2>
									<ul class="text-gray-500 dark:text-gray-400 font-medium">
										<li class="mb-4">
											<a href="#" class="hover:underline">Discord Server</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Twitter</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Facebook</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Contact Us</a>
										</li>
									</ul>
								</div>
								<div>
									<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">Legal</h2>
									<ul class="text-gray-500 dark:text-gray-400 font-medium">
										<li class="mb-4">
											<a href="#" class="hover:underline">Privacy Policy</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Licensing</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Terms &amp; Conditions</a>
										</li>
									</ul>
								</div>
								<div>
									<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">Download</h2>
									<ul class="text-gray-500 dark:text-gray-400 font-medium">
										<li class="mb-4">
											<a href="#" class="hover:underline">iOS</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Android</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">Windows</a>
										</li>
										<li class="mb-4">
											<a href="#" class="hover:underline">MacOS</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="px-4 py-6 md:flex md:items-center md:justify-between">
								<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
									>© 2024 <a href="/" class="hover:underline">Click-Chick</a>. All Rights Reserved.</span
								>
								<div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
									<a href="#" class="text-gray-400 hover:text-gray-900 dark:text-gray-400">
										<svg
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 8 19"
										>
											<path
												fill-rule="evenodd"
												d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Facebook page</span>
									</a>
									<a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
										<svg
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 21 16"
										>
											<path
												d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
											/>
										</svg>
										<span class="sr-only">Discord community</span>
									</a>
									<a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
										<svg
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 17"
										>
											<path
												fill-rule="evenodd"
												d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Twitter page</span>
									</a>
									<a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
										<svg
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">GitHub account</span>
									</a>
									<a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
										<svg
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Dribbble account</span>
									</a>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>

			<!-- END -->

			<DocNextPage :pagination="pagePagination" />
		</div>
		<DocNextPage :pagination="pagePagination" />
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
				listData: [
					{
						id: 1,
						name: 'Gà Rán Truyền Thống',
						price: '50,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image: 'https://getngo.vn/wp-content/uploads/2022/12/mot-con-ga-truyen-thong-2.jpg',
					},
					{
						id: 2,
						name: 'Gà Cay Hàn Quốc',
						price: '60,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image:
							'https://cdn.tgdd.vn/Files/2018/12/18/1138838/cung-thuc-hien-mon-ga-cay-han-quoc-cuc-ky-dua-com-202209051440260841.jpg',
					},
					{
						id: 3,
						name: 'Gà Sốt Phô Mai',
						price: '65,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image:
							'https://donchicken.vn/pub/media/catalog/product/cache/8872124951f387c8ded3f228faa55bea/g/a/gakoxuongnuongphomai.jpg',
					},
					{
						id: 4,
						name: '[COMBO] Happy Set - 01',
						price: '165,000 VND',
						description:
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
						image:
							'https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/450059941_459972456673605_6320632230997642839_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAxS-DiC5KrvnaoJJxTnyRSPzTWniIlY5I_NNaeIiVjtS660aJGyHd8scCt6K07Xr99m5tsGGYcpP6Xh0-rXCp&_nc_ohc=IE5S_Nmd-F8Q7kNvgHyKcCp&_nc_ht=scontent.fhan14-5.fna&_nc_gid=Axv3PlmQto7B_KD24lbGcyr&oh=00_AYDYfsHtIHFFJHtWLNj3AzfDnSz9mAA5w5neYlB7iUET5w&oe=67126D5C',
					},
				],
				counter: 0,
				email: '',
				password: '',
				pagePagination: {
					next: {
						title: 'Comming soon...',
						link: '/reactjs-basic/practice/e_2',
					},
					prev: {
						title: 'Bài 1 - Array Methods',
						link: '/reactjs-basic/practice/e_1',
					},
				},
			};
		},
		computed: {},
		methods: {
			// parseToString(){
			// 	const div = document.createElement('div')
			// 	div.innerText =
			// }
			submitForm() {
				if (!this.email || !this.password) {
					alert('Vui lòng điền đủ thông tin.');
					return;
				}
				if (this.email !== 'useremail@gmail.com' || this.password !== '123456') {
					alert('Sai tài khoản hoặc mật khẩu');
					return;
				}
				alert('Đăng nhập thành công');
			},
		},
	};
</script>

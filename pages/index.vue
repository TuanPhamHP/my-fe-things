<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="dark:text-white py-5 max-w-7xl mx-auto">
			<div class="min-h-[250px] flex items-center justify-center w-full">
				<h1 class="text-center font-bold xl:text-2xl text-slate-900 dark:text-white leading-10">
					Hello anh em, page này làm ra để ghi lại vài thứ hay ho cho newbie.
					<br />
					Nội dung chính của trang đều về phần basic.
					<br />
					<span class="font-normal">( •̀ ω •́ )✧</span>
				</h1>
			</div>

			<div class="border rounded-xl px-2 py-3 mb-4 dark:hover:bg-neutral-100/25 hover:bg-neutral-300/25">
				<Disclosure>
					<DisclosureButton as="div" class="cursor-pointer">
						<h5 class="text-3xl w-full font-bold tracking-tight text-gray-900 dark:text-white">HTML - CSS -JS</h5>
					</DisclosureButton>

					<!-- Use the built-in `transition` component to add transitions. -->
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<DisclosurePanel>
							<img src="@/assets/images/documentation/course_hcj.png" class="h-[150px] block mx-auto" alt="" />
							<div class="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-5 pt-4">
								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5 flex flex-col h-full">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Documentation
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">
											Các tài liệu cơ bản về HTML,CSS,JS như:
										</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												HTML: Cấu trúc file, thẻ, attributes ...
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												CSS: Selector, Cách áp dụng CSS ...
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>

												JS: Data Types, Function, Events, DOM ...
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều tài liệu cơ sở khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/html-css-js-basic/documentation')"
											class="cursor-pointer mt-auto w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>

								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5 flex flex-col h-full">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Example & Train
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các bài tập cơ bản về React:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Bài tập cơ bản, dễ tiếp cận
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Kèm hướng dẫn và ví dụ minh họa
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều hỗ trợ khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/html-css-js-basic/practice')"
											class="cursor-pointer mt-auto w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
			<!-- REACTJS -->
			<div class="border rounded-xl px-2 py-3 mb-4 dark:hover:bg-neutral-100/25 hover:bg-neutral-300/25">
				<Disclosure>
					<DisclosureButton as="div" class="cursor-pointer">
						<h5 class="text-3xl w-full font-bold tracking-tight text-gray-900 dark:text-white">ReactJs</h5>
					</DisclosureButton>

					<!-- Use the built-in `transition` component to add transitions. -->
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<DisclosurePanel>
							<img src="@/assets/images/documentation/course_reactjs.png" class="h-[150px] block mx-auto" alt="" />
							<div class="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-5 pt-4">
								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Documentation
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các tài liệu cơ bản về React như:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Cách cài đặt
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Một số hooks cơ bản
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều tài liệu cơ sở khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/reactjs-basic/documentation')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>

								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Example & Train
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các bài tập cơ bản về React:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Bài tập cơ bản, dễ tiếp cận
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Kèm hướng dẫn và ví dụ minh họa
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều hỗ trợ khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/reactjs-basic/practice')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
			<!-- NODEJS -->
			<div class="border rounded-xl px-2 py-3 mb-4 dark:hover:bg-neutral-100/25 hover:bg-neutral-300/25">
				<Disclosure>
					<DisclosureButton as="div" class="cursor-pointer">
						<h5 class="text-3xl w-full font-bold tracking-tight text-gray-900 dark:text-white">NodeJs</h5>
					</DisclosureButton>

					<!-- Use the built-in `transition` component to add transitions. -->
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<DisclosurePanel>
							<img src="@/assets/images/documentation/course_nodejs.png" class="h-[150px] block mx-auto" alt="" />
							<div class="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-5 pt-4">
								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Documentation
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các tài liệu cơ bản về NodeJs như:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Cách cài đặt
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Một số hooks cơ bản
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều tài liệu cơ sở khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/nodejs/documentation')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>

								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Example & Train
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các bài tập cơ bản về NodeJs:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Bài tập cơ bản, dễ tiếp cận
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Kèm hướng dẫn và ví dụ minh họa
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều hỗ trợ khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/nodejs/practice')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
			<!-- NEXTJS -->
			<!-- <div class="border rounded-xl px-2 py-3 mb-4 dark:hover:bg-neutral-100/25 hover:bg-neutral-300/25">
				<Disclosure>
					<DisclosureButton as="div" class="cursor-pointer">
						<h5 class="text-3xl w-full font-bold tracking-tight text-gray-900 dark:text-white">NextJs</h5>
					</DisclosureButton>

					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<DisclosurePanel>
							<div class="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-5 pt-4">
								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Documentation
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các tài liệu cơ bản về NextJs như:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Cách cài đặt
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Project strucutures...
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều tài liệu cơ sở khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/nextjs-basic/documentation')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>

								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Example & Train
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các bài tập cơ bản về NextJs:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Bài tập cơ bản, dễ tiếp cận
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Kèm hướng dẫn và ví dụ minh họa
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều hỗ trợ khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/nextjs-basic/practice')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div> -->
			<!-- PHP -->
			<div class="border rounded-xl px-2 py-3 mb-4 dark:hover:bg-neutral-100/25 hover:bg-neutral-300/25">
				<Disclosure>
					<DisclosureButton as="div" class="cursor-pointer">
						<h5 class="text-3xl w-full font-bold tracking-tight text-gray-900 dark:text-white">PHP</h5>
					</DisclosureButton>

					<!-- Use the built-in `transition` component to add transitions. -->
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<DisclosurePanel>
							<img src="@/assets/images/documentation/course_php.png" class="h-[150px] block mx-auto" alt="" />
							<div class="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-5 pt-4">
								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Documentation
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các tài liệu cơ bản về PHP như:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Cách cài đặt
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Project strucutures...
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều tài liệu cơ sở khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/php/documentation')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>

								<div
									class="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition"
								>
									<div class="p-5">
										<a href="#">
											<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Example & Train
											</h5>
										</a>
										<p class="mb-3 font-normal text-gray-700 dark:text-white">Các bài tập cơ bản về PHP:</p>
										<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Bài tập cơ bản, dễ tiếp cận
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon
													name="solar:verified-check-line-duotone"
													size="24px"
													class="text-green-500 dark:text-green-400"
												/>
												Kèm hướng dẫn và ví dụ minh họa
											</li>
											<li class="flex items-center gap-3 py-1">
												<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
												Và rất nhiều hỗ trợ khác ...
											</li>
										</ul>
										<div
											@click="$router.push('/php/practice')"
											class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Read more
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
										</div>
									</div>
								</div>
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';
	import { useAuthStore } from '~/store/auth';
	import { storeToRefs } from 'pinia';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	export default {
		components: { Disclosure, DisclosureButton, DisclosurePanel },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();

			const { isLogged } = storeToRefs(useAuthStore());

			return {
				isLogged,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},

		data() {
			return {
				listData: null,
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Trang chủ');
		},
		methods: {},
	};
</script>
